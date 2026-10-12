import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export const PAYMENT_BUCKET = "payment-proofs";
export type DriacomSession = { role?: "admin" | "member"; id?: string; supabaseUserId?: string; email?: string; name?: string; plan?: string };

export async function getDriacomSession(): Promise<DriacomSession | null> {
  const value = (await cookies()).get("driacom_session")?.value;
  if (!value) return null;
  try { return JSON.parse(value) as DriacomSession; } catch { return null; }
}

export function supabaseAdmin(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Konfigurasi Supabase server belum lengkap.");
  return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
}

export async function ensurePaymentBucket(admin = supabaseAdmin()) {
  const { data, error } = await admin.storage.getBucket(PAYMENT_BUCKET);
  if (data) return;
  if (error && !/not found|does not exist/i.test(error.message)) throw error;
  const { error: createError } = await admin.storage.createBucket(PAYMENT_BUCKET, {
    public: false, fileSizeLimit: 5 * 1024 * 1024,
    allowedMimeTypes: ["image/jpeg", "image/png", "image/webp"],
  });
  if (createError && !/already exists|duplicate/i.test(createError.message)) throw createError;
}

export async function getMemberId(session: DriacomSession | null) {
  if (!session || session.role === "admin") return null;
  return session.supabaseUserId || session.id || null;
}

export function packageFromPayment(payment: { amount: number; duration_days: number }) {
  return payment.duration_days === 0 || payment.amount === 99000 ? "PRO_LIFETIME" : "PRO_30D";
}
