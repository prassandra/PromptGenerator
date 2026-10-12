import type { KVNamespace } from "@cloudflare/workers-types";
import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export const dynamic = "force-dynamic";

const KEY_PREFIX = "driacom:pageviews:";

function getJakartaDateParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Jakarta",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  return { year: get("year"), month: get("month"), day: get("day") };
}

function getTodayKey() {
  const { year, month, day } = getJakartaDateParts();
  return `${KEY_PREFIX}${year}-${month}-${day}`;
}

function secondsUntilNextJakartaDay() {
  const now = new Date();
  const parts = getJakartaDateParts(now);
  const tomorrowUtcGuess = Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day) + 1, -7, 0, 0);
  const seconds = Math.ceil((tomorrowUtcGuess - now.getTime()) / 1000);
  return Math.max(60, Math.min(seconds, 60 * 60 * 24 + 60));
}

async function getKv() {
  const { env } = getCloudflareContext();
  return (env as unknown as { DRIACOM_VISITOR_KV?: KVNamespace }).DRIACOM_VISITOR_KV;
}

export async function POST() {
  try {
    const kv = await getKv();
    if (!kv) {
      return NextResponse.json({ error: "DRIACOM_VISITOR_KV binding is not configured." }, { status: 503 });
    }

    const key = getTodayKey();
    const current = Number.parseInt((await kv.get(key)) ?? "0", 10) || 0;
    const next = current + 1;

    // The counter exists only until the next WIB day. No visitor identity is stored.
    await kv.put(key, String(next), { expirationTtl: secondsUntilNextJakartaDay() });

    return NextResponse.json({ count: next });
  } catch {
    return NextResponse.json({ error: "Unable to record page view." }, { status: 500 });
  }
}

export async function GET() {
  try {
    const kv = await getKv();
    if (!kv) {
      return NextResponse.json({ error: "DRIACOM_VISITOR_KV binding is not configured." }, { status: 503 });
    }

    const count = Number.parseInt((await kv.get(getTodayKey())) ?? "0", 10) || 0;
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ error: "Unable to read page views." }, { status: 500 });
  }
}
