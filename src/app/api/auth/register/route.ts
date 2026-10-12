import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function adminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url) throw new Error("NEXT_PUBLIC_SUPABASE_URL belum dikonfigurasi di server.");
  if (!key) throw new Error("SUPABASE_SERVICE_ROLE_KEY belum dikonfigurasi di server. Tambahkan secret ini ke Cloudflare Worker.");
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

function mapSupabaseRegisterError(error: unknown) {
  const message = String((error as { message?: string })?.message || error || "");
  const lower = message.toLowerCase();

  if (lower.includes("already registered") || lower.includes("already exists") || lower.includes("user already exists")) {
    return { error: "Email sudah terdaftar di sistem. Silakan masuk.", status: 409 };
  }

  if (lower.includes("password") && lower.includes("weak")) {
    return { error: "Sandi terlalu lemah. Gunakan sandi minimal 6 karakter.", status: 400 };
  }

  if (lower.includes("invalid email")) {
    return { error: "Alamat email tidak valid.", status: 400 };
  }

  return { error: `Pendaftaran gagal: ${message || "Supabase menolak pembuatan akun."}`, status: 400 };
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
    const password = typeof body?.password === "string" ? body.password : "";
    const confirmPassword = typeof body?.confirmPassword === "string" ? body.confirmPassword : "";

    if (!name || !email || !password || !confirmPassword) {
      return NextResponse.json({ error: "Lengkapi semua data pendaftaran." }, { status: 400 });
    }
    if (!email.includes("@")) {
      return NextResponse.json({ error: "Masukkan alamat email yang valid." }, { status: 400 });
    }
    if (password.length < 6) {
      return NextResponse.json({ error: "Sandi minimal 6 karakter." }, { status: 400 });
    }
    if (password !== confirmPassword) {
      return NextResponse.json({ error: "Sandi dan ulangi sandi tidak sama." }, { status: 400 });
    }

    const admin = adminClient();

    // Use the server-side Auth Admin API so a genuinely deleted email can
    // be registered again without relying on the public signUp anti-enumeration path.
    const { data, error } = await admin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { full_name: name },
    });

    if (error || !data.user) {
      const mapped = mapSupabaseRegisterError(error || new Error("User tidak berhasil dibuat."));
      console.error("Driacom Supabase createUser error:", error);
      return NextResponse.json({ error: mapped.error }, { status: mapped.status });
    }

    const { error: profileError } = await admin.from("profiles").upsert(
      {
        user_id: data.user.id,
        full_name: name,
        plan: "FREE",
      },
      { onConflict: "user_id" }
    );

    // Do not leave an Auth account behind if its profile could not be created.
    if (profileError) {
      console.error("Driacom profile creation error:", profileError);
      await admin.auth.admin.deleteUser(data.user.id, false);
      return NextResponse.json(
        { error: "Akun gagal disiapkan. Tidak ada perubahan yang disimpan. Silakan coba lagi." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Akun berhasil dibuat. Silakan masuk menggunakan email dan sandi yang baru dibuat.",
      user: {
        id: data.user.id,
        email: data.user.email,
        name,
        role: "member",
        plan: "FREE",
      },
    });
  } catch (error) {
    console.error("Driacom Register Error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Sistem pendaftaran sedang mengalami gangguan. Silakan coba lagi." },
      { status: 500 }
    );
  }
}
