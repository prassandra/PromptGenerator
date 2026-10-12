import { NextResponse } from "next/server";
import type { User } from "@supabase/supabase-js";
import { getDriacomSession, supabaseAdmin, PAYMENT_BUCKET } from "@/lib/payment-server";

function isAdmin(session: Awaited<ReturnType<typeof getDriacomSession>>) {
  return session?.role === "admin";
}

async function listAllUsers(admin: ReturnType<typeof supabaseAdmin>) {
  const users: User[] = [];
  for (let page = 1; page <= 100; page++) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 1000 });
    if (error) throw error;
    users.push(...(data.users || []));
    if (!data.users || data.users.length < 1000) break;
  }
  return users;
}

export async function GET() {
  try {
    const session = await getDriacomSession();
    if (!isAdmin(session)) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });

    const admin = supabaseAdmin();
    const users = await listAllUsers(admin);
    const ids = users.map((user) => user.id);

    const { data: profiles, error: profileError } = ids.length
      ? await admin.from("profiles").select("user_id, full_name, plan, pro_expires_at, created_at").in("user_id", ids)
      : { data: [], error: null };
    if (profileError) throw profileError;

    const profileMap = new Map((profiles || []).map((profile) => [profile.user_id, profile]));
    const now = Date.now();

    const members = users.map((user) => {
      const profile = profileMap.get(user.id);
      const isLifetime = profile?.plan === "PRO_LIFETIME";
      const expiresAt = profile?.pro_expires_at ? new Date(profile.pro_expires_at) : null;
      const is30DayPro = profile?.plan === "PRO_30D" && !!expiresAt && expiresAt.getTime() > now;
      const expired = profile?.plan === "PRO_30D" && !!expiresAt && expiresAt.getTime() <= now;

      return {
        id: user.id,
        email: user.email || "",
        name: profile?.full_name || (typeof user.user_metadata?.full_name === "string" ? user.user_metadata.full_name : "") || (user.email || "").split("@")[0],
        plan: isLifetime || is30DayPro ? "PRO" : "FREE",
        planRaw: profile?.plan || "FREE",
        status: isLifetime || is30DayPro ? "AKTIF" : expired ? "EXPIRED" : "FREE",
        joinedAt: profile?.created_at || user.created_at || null,
        expiresAt: isLifetime ? null : profile?.pro_expires_at || null,
        emailConfirmed: !!user.email_confirmed_at,
        lastSignInAt: user.last_sign_in_at || null,
      };
    }).sort((a, b) => new Date(b.joinedAt || 0).getTime() - new Date(a.joinedAt || 0).getTime());

    return NextResponse.json({ members });
  } catch (error) {
    console.error("Driacom Admin Members GET Error:", error);
    return NextResponse.json({ error: "Gagal membaca data member." }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getDriacomSession();
    if (!isAdmin(session)) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });

    const body = await request.json().catch(() => null);
    const userId = typeof body?.userId === "string" ? body.userId.trim() : "";
    if (!userId) return NextResponse.json({ error: "ID member tidak valid." }, { status: 400 });

    const admin = supabaseAdmin();

    const { data: target, error: userError } = await admin.auth.admin.getUserById(userId);
    if (userError || !target.user) {
      return NextResponse.json({ error: "Member tidak ditemukan." }, { status: 404 });
    }

    // Bersihkan bukti pembayaran dari Storage terlebih dahulu supaya tidak meninggalkan file yatim.
    const { data: payments, error: paymentReadError } = await admin
      .from("payments")
      .select("id, proof_path")
      .eq("user_id", userId);
    if (paymentReadError) throw paymentReadError;

    const proofPaths = (payments || [])
      .map((payment) => payment.proof_path)
      .filter((path): path is string => typeof path === "string" && path.length > 0);

    if (proofPaths.length) {
      const { error: storageError } = await admin.storage.from(PAYMENT_BUCKET).remove(proofPaths);
      // Bucket/file yang sudah tidak ada tidak boleh menggagalkan penghapusan akun.
      if (storageError) console.warn("Driacom member storage cleanup warning:", storageError.message);
    }

    // FK pada schema utama menggunakan ON DELETE CASCADE. Penghapusan Auth user
    // otomatis membersihkan profiles, payments, dan prompt_usage. Fallback manual
    // menjaga endpoint tetap aman bila database lama belum memakai cascade.
    // Hapus permanen dari Supabase Auth. Explicit false memastikan akun tidak
    // hanya di-soft-delete, sehingga email dapat dipakai untuk registrasi baru.
    let deleteResult = await admin.auth.admin.deleteUser(userId, false);

    // Jika schema/database lama masih menahan FK, bersihkan data turunan lalu retry.
    if (deleteResult.error) {
      const cleanup = await Promise.allSettled([
        admin.from("prompt_usage").delete().eq("user_id", userId),
        admin.from("payments").delete().eq("user_id", userId),
        admin.from("profiles").delete().eq("user_id", userId),
      ]);
      const rejected = cleanup.find((result) => result.status === "rejected");
      if (rejected) console.warn("Driacom member fallback cleanup warning:", rejected.reason);

      deleteResult = await admin.auth.admin.deleteUser(userId, false);
    }

    if (deleteResult.error) {
      throw new Error(`Supabase Auth gagal menghapus akun: ${deleteResult.error.message}`);
    }

    // Verifikasi keras: jangan pernah mengembalikan status sukses jika Auth user
    // masih ada. Ini mencegah kasus dashboard terlihat terhapus tetapi email
    // tetap dianggap terdaftar saat signup ulang.
    const { data: verifyDeleted } = await admin.auth.admin.getUserById(userId);
    if (verifyDeleted?.user) {
      throw new Error("Akun belum benar-benar terhapus dari Supabase Auth. Silakan coba lagi.");
    }

    return NextResponse.json({ ok: true, message: `Akun ${target.user.email || "member"} berhasil dihapus permanen.` });
  } catch (error) {
    console.error("Driacom Admin Members DELETE Error:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Gagal menghapus akun member." }, { status: 500 });
  }
}
