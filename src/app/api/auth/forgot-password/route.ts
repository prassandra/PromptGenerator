import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function adminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Konfigurasi Supabase server belum lengkap.");
  return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
}
function publicClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error("Konfigurasi Supabase belum lengkap.");
  return createClient(url, key);
}

async function emailExists(email: string) {
  const admin = adminClient();
  for (let page = 1; page <= 20; page++) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 1000 });
    if (error) throw error;
    if (data.users.some((user) => (user.email || "").toLowerCase() === email)) return true;
    if (data.users.length < 1000) break;
  }
  return false;
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
    if (!email || !email.includes("@")) return NextResponse.json({ error: "Masukkan email yang valid." }, { status: 400 });
    if (!(await emailExists(email))) return NextResponse.json({ error: "Email belum terdaftar di sistem. Silakan daftar akun terlebih dahulu." }, { status: 404 });

    const origin = (process.env.NEXT_PUBLIC_SITE_URL || request.headers.get("origin") || "http://localhost:3000").replace(/\/$/, "");
    const redirectTo = `${origin}/reset-password`;
    const { error } = await publicClient().auth.resetPasswordForEmail(email, { redirectTo });
    if (error) {
      console.error("Driacom Supabase reset email error:", error);

      const errorMessage = String(error.message || "").toLowerCase();
      const isRateLimited =
        errorMessage.includes("rate limit") ||
        errorMessage.includes("too many requests") ||
        errorMessage.includes("too many emails");

      if (isRateLimited) {
        return NextResponse.json(
          {
            error:
              "Permintaan reset password sudah dikirim. Silakan tunggu beberapa saat hingga email reset password masuk ke kotak masuk kamu sebelum mencoba mengirim permintaan baru.",
          },
          { status: 429 }
        );
      }

      return NextResponse.json(
        { error: error.message || "Gagal mengirim link reset. Silakan coba lagi." },
        { status: 400 }
      );
    }
    return NextResponse.json({ ok: true, message: "Link reset kata sandi telah dikirim ke email kamu." });
  } catch (error) {
    console.error("Driacom Forgot Password Error:", error);
    return NextResponse.json({ error: "Sistem reset kata sandi sedang mengalami gangguan." }, { status: 500 });
  }
}
