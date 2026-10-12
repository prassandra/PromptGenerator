import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

const DAILY_REWARDED_TOKEN_LIMIT = 1;

function adminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Konfigurasi Supabase server belum lengkap.");
  return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
}

async function session() {
  const value = (await cookies()).get("driacom_session")?.value;
  if (!value) return null;
  try { return JSON.parse(value) as { id?: string; supabaseUserId?: string; role?: string; plan?: string }; } catch { return null; }
}

async function userId() {
  const s = await session();
  if (!s || s.role === "admin") return null;
  return s.supabaseUserId || s.id || null;
}

export async function getRewardStatus() {
  const id = await userId();
  if (!id) return { authenticated: false, tokens: 0, eligibleToday: false };
  const { data: tokenRow, error: tokenError } = await adminClient().from("prompt_bonus_tokens").select("tokens").eq("user_id", id).maybeSingle();
  if (tokenError) throw tokenError;
  const today = new Date().toISOString().slice(0, 10);
  const { data: claim, error: claimError } = await adminClient().from("rewarded_ad_claims").select("reward_date").eq("user_id", id).eq("reward_date", today).maybeSingle();
  if (claimError) throw claimError;
  return { authenticated: true, tokens: Number(tokenRow?.tokens || 0), eligibleToday: !claim };
}

export async function claimRewardedToken() {
  const id = await userId();
  if (!id) return { ok: false as const, status: 401, error: "Sesi login tidak ditemukan." };
  const today = new Date().toISOString().slice(0, 10);
  const db = adminClient();
  const { data: existing, error: existingError } = await db.from("rewarded_ad_claims").select("id").eq("user_id", id).eq("reward_date", today).maybeSingle();
  if (existingError) throw existingError;
  if (existing) return { ok: false as const, status: 429, error: "Bonus token hari ini sudah digunakan. Coba lagi besok." };

  const { error: insertError } = await db.from("rewarded_ad_claims").insert({ user_id: id, reward_date: today, ads_completed: 2 });
  if (insertError) {
    if (insertError.code === "23505") return { ok: false as const, status: 429, error: "Bonus token hari ini sudah digunakan. Coba lagi besok." };
    throw insertError;
  }
  const { data: row, error: tokenError } = await db.from("prompt_bonus_tokens").select("tokens").eq("user_id", id).maybeSingle();
  if (tokenError) throw tokenError;
  const current = Number(row?.tokens || 0);
  const { error: upsertError } = await db.from("prompt_bonus_tokens").upsert({ user_id: id, tokens: current + 1, updated_at: new Date().toISOString() }, { onConflict: "user_id" });
  if (upsertError) throw upsertError;
  return { ok: true as const, tokens: current + 1, dailyLimit: DAILY_REWARDED_TOKEN_LIMIT };
}

export async function consumeBonusTokenIfAvailable() {
  const id = await userId();
  if (!id) return false;
  const db = adminClient();
  const { data, error } = await db.rpc("consume_prompt_bonus_token", { p_user_id: id });
  if (error) { console.error("Driacom bonus token consume error:", error); return false; }
  return Boolean(data);
}
