import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const COOKIE_NAME = "driacom_session";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error("Konfigurasi Supabase belum lengkap.");
  }

  return createClient(url, key);
}

async function memberEmailExists(email: string) {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!serviceKey || !url) return null;
  const admin = createClient(url, serviceKey, { auth: { autoRefreshToken: false, persistSession: false } });
  for (let page = 1; page <= 20; page++) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 1000 });
    if (error) throw error;
    if (data.users.some((user) => (user.email || "").toLowerCase() === email)) return true;
    if (data.users.length < 1000) break;
  }
  return false;
}

function sessionCookie(
  response: NextResponse,
  value: object
) {
  response.cookies.set(COOKIE_NAME, JSON.stringify(value), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    const rawIdentifier =
      typeof body?.identifier === "string"
        ? body.identifier.trim()
        : "";

    const identifier = rawIdentifier.includes("@")
      ? rawIdentifier.toLowerCase()
      : rawIdentifier;

    const password =
      typeof body?.password === "string"
        ? body.password
        : "";

    if (!identifier || !password) {
      return NextResponse.json(
        { error: "Masukkan email dan sandi." },
        { status: 400 }
      );
    }

    const adminUsername = String(process.env.DRIACOM_ADMIN_USERNAME || "").trim();
    const adminPassword = String(process.env.DRIACOM_ADMIN_PASSWORD || "");
    if (adminUsername && adminPassword && identifier === adminUsername && password === adminPassword) {
      const response = NextResponse.json({ ok: true, user: { name: adminUsername, role: "admin", plan: "PRO" } });
      sessionCookie(response, { role: "admin", name: adminUsername, plan: "PRO", permanentPro: true });
      return response;
    }

    if (!identifier.includes("@")) {
      return NextResponse.json(
        {
          error:
            "Email belum terdaftar di sistem. Silakan daftar untuk membuat akun.",
        },
        { status: 401 }
      );
    }

    const exists = await memberEmailExists(identifier);
    if (exists === false) {
      return NextResponse.json({ error: "Email belum terdaftar di sistem. Silakan daftar untuk membuat akun." }, { status: 401 });
    }

    const supabase = getSupabase();

    const { data, error } =
      await supabase.auth.signInWithPassword({
        email: identifier,
        password,
      });

    if (error || !data.user) {
      return NextResponse.json(
        {
          error:
            "Email atau sandi yang kamu masukkan tidak sesuai.",
        },
        { status: 401 }
      );
    }

    const user = data.user;
    const name = typeof user.user_metadata?.full_name === "string" ? user.user_metadata.full_name : identifier.split("@")[0];
    let plan = "FREE";
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (serviceKey) {
      const admin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, serviceKey, { auth: { autoRefreshToken: false, persistSession: false } });
      const { data: profile } = await admin.from("profiles").select("plan,pro_expires_at").eq("user_id", user.id).maybeSingle();
      if (profile?.plan === "PRO_LIFETIME") plan = "PRO";
      if (profile?.plan === "PRO_30D" && profile.pro_expires_at && new Date(profile.pro_expires_at).getTime() > Date.now()) plan = "PRO";
    }
    const response = NextResponse.json({ ok: true, user: { id: user.id, email: user.email, name, role: "member", plan } });
    sessionCookie(response, { role: "member", id: user.id, email: user.email, name, plan, supabaseUserId: user.id });

    return response;
  } catch (error) {
    console.error("Driacom Login Error:", error);

    return NextResponse.json(
      {
        error:
          "Sistem login sedang mengalami gangguan. Silakan coba lagi.",
      },
      { status: 500 }
    );
  }
}