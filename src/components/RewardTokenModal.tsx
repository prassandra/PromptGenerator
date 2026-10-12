"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Capacitor } from "@capacitor/core";

type Props = { open: boolean; onClose: () => void; onGranted?: () => void };
const PRODUCTION_REWARDED_ID = "ca-app-pub-2212969526982215/8607793884";

async function showRewardedAd(): Promise<boolean> {
  if (!Capacitor.isNativePlatform()) return false;
  try {
    const { AdMob } = await import("@capacitor-community/admob");
    await AdMob.initialize();
    const adId = process.env.NEXT_PUBLIC_ADMOB_REWARDED_ID || "ca-app-pub-2212969526982215/8607793884";
    await AdMob.prepareRewardVideoAd({
      adId,
    });
    const reward = await AdMob.showRewardVideoAd();
    return Number(reward?.amount || 0) > 0;
  } catch (error) {
    console.error("Driacom rewarded ad error:", error);
    return false;
  }
}

export default function RewardTokenModal({ open, onClose, onGranted }: Props) {
  const [step, setStep] = useState(0);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => { if (open) { setStep(0); setBusy(false); setMessage(""); } }, [open]);
  if (!open) return null;

  async function watchNext() {
    setBusy(true); setMessage("");
    const ok = await showRewardedAd();
    if (!ok) {
      setBusy(false);
      setMessage(Capacitor.isNativePlatform() ? "Iklan belum tersedia. Coba lagi beberapa saat." : "Bonus iklan rewarded tersedia di aplikasi Android Driacom.");
      return;
    }
    const next = step + 1;
    if (next < 2) { setStep(next); setBusy(false); return; }
    try {
      const response = await fetch("/api/rewards/claim", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ adsCompleted: 2 }) });
      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error(data.error || "Bonus token gagal diproses.");
      setStep(2); setMessage("🎉 +1 Token Generate berhasil ditambahkan.");
      onGranted?.();
    } catch (error) { setMessage(error instanceof Error ? error.message : "Bonus token gagal diproses."); }
    finally { setBusy(false); }
  }

  return <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md" onMouseDown={(e) => { if (e.target === e.currentTarget && !busy) onClose(); }}>
    <div className="w-full max-w-md overflow-hidden rounded-[28px] border border-violet-300/20 bg-[#090e16] shadow-[0_30px_100px_rgba(0,0,0,.6)]">
      <div className="border-b border-white/[0.07] p-5"><div className="flex items-start justify-between gap-4"><div><p className="text-[10px] font-black tracking-[0.22em] text-violet-300">BONUS TOKEN</p><h2 className="mt-2 text-2xl font-black text-white">Dapatkan +1 Token</h2></div><button type="button" onClick={onClose} disabled={busy} className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-zinc-400 hover:text-white">×</button></div></div>
      <div className="space-y-5 p-5">
        <p className="text-sm leading-6 text-zinc-400">Tonton <b className="text-white">2 video iklan</b> untuk mendapatkan 1 token generate gratis. Bonus ini maksimal 1 kali per hari.</p>
        <div className="grid grid-cols-2 gap-3">{[0,1].map((i)=><div key={i} className={`rounded-2xl border p-4 text-center ${step > i ? "border-emerald-300/30 bg-emerald-300/[0.06]" : "border-white/10 bg-white/[0.02]"}`}><div className="text-xl">{step > i ? "✓" : `${i+1}`}</div><p className="mt-2 text-[10px] font-black tracking-wider text-zinc-500">{step > i ? "SELESAI" : `IKLAN ${i+1}`}</p></div>)}</div>
        {message ? <div className={`rounded-xl border p-3 text-xs leading-5 ${step === 2 ? "border-emerald-300/20 bg-emerald-300/[0.05] text-emerald-200" : "border-amber-300/20 bg-amber-300/[0.05] text-amber-200"}`}>{message}</div> : null}
        {step < 2 ? <button type="button" disabled={busy} onClick={watchNext} className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 px-5 py-4 text-sm font-black text-white disabled:opacity-40">{busy ? "Menyiapkan iklan..." : `▶ Tonton Iklan ${step + 1}`}</button> : <button type="button" onClick={onClose} className="w-full rounded-2xl bg-emerald-400 px-5 py-4 text-sm font-black text-[#041014]">Gunakan Token Sekarang</button>}
        <div className="border-t border-white/[0.07] pt-4 text-center"><p className="text-xs text-zinc-600">Atau nikmati generate tanpa batas dan tanpa iklan.</p><Link href="/upgrade" onClick={onClose} className="mt-2 inline-flex text-xs font-black text-violet-300 hover:text-violet-200">👑 Upgrade ke PRO →</Link></div>
      </div>
    </div>
  </div>;
}
