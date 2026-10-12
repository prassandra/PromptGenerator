import { NextResponse } from "next/server";
import { claimRewardedToken } from "@/lib/rewards";
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    if (body?.adsCompleted !== 2) return NextResponse.json({ ok: false, error: "Selesaikan 2 iklan rewarded terlebih dahulu." }, { status: 400 });
    const result = await claimRewardedToken();
    return NextResponse.json(result, { status: result.ok ? 200 : result.status });
  } catch (error) { console.error("Driacom Reward Claim Error:", error); return NextResponse.json({ ok: false, error: "Bonus token gagal diproses." }, { status: 500 }); }
}
