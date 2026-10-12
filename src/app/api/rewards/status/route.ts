import { NextResponse } from "next/server";
import { getRewardStatus } from "@/lib/rewards";
export async function GET() {
  try { return NextResponse.json(await getRewardStatus()); }
  catch (error) { console.error("Driacom Reward Status Error:", error); return NextResponse.json({ error: "Gagal membaca status bonus token." }, { status: 500 }); }
}
