"use client";

import Link from "next/link";
import { useState } from "react";


type Active = "dashboard" | "animation" | "storytelling" | "affiliate";
export default function PremiumSidebar({ active }: { active: Active }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const item = (key: Active) =>
    key === active
      ? "border-violet-400/30 bg-gradient-to-r from-violet-600/25 to-violet-600/[0.04] text-white shadow-[0_8px_25px_rgba(139,92,246,0.08)]"
      : "border-transparent text-zinc-400 hover:border-white/[0.06] hover:bg-white/[0.03] hover:text-white";

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <>
      <aside className="hidden w-[250px] shrink-0 border-r border-white/[0.07] bg-[#070b14]/90 px-5 py-7 lg:flex lg:flex-col">
        <Link href="/dashboard" className="border-b border-white/[0.07] pb-7">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-2">
              <img src="/driacom-logo.png" alt="Driacom" className="h-full w-full object-contain" />
            </div>
            <div>
              <div className="font-serif text-xl font-black tracking-wide text-amber-200">DRIACOM</div>
              <div className="text-[9px] font-bold tracking-[0.28em] text-zinc-600">PROMPT AI GENERATOR</div>
            </div>
          </div>
        </Link>

        <nav className="mt-7 space-y-2">
          <div className="mb-2 px-3 text-[10px] font-black tracking-[0.22em] text-zinc-600">NAVIGASI</div>
          <Link href="/dashboard" className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-bold transition ${item("dashboard")}`}><span className="text-amber-300">⌂</span> Dashboard</Link>
          <Link href="/generators/animation-menu" className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-bold transition ${item("animation")}`}><span className="text-cyan-300">▣</span> Animasi</Link>
          <Link href="/generators/storytelling-menu" className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-bold transition ${item("storytelling")}`}><span className="text-violet-300">▱</span> Storytelling</Link>
          <Link href="/generators/affiliate" className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-bold transition ${item("affiliate")}`}><span className="text-amber-300">↗</span> Affiliate</Link>
          
        </nav>
      </aside>

      <div className="w-full shrink-0 border-b border-white/[0.07] bg-[#070b14]/95 px-4 py-3 backdrop-blur-md lg:hidden">
        <div className="flex min-h-12 items-center justify-between gap-3">
          <Link href="/dashboard" onClick={closeMobile} className="flex min-w-0 items-center gap-2 font-serif text-base font-black tracking-[0.16em] text-amber-200">
            <img src="/driacom-logo.png" alt="Driacom" className="h-8 w-8 shrink-0 object-contain" />
            <span>DRIACOM</span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Buka menu navigasi"
            aria-expanded={mobileOpen}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/[0.10] bg-white/[0.025] text-2xl leading-none text-zinc-200 shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition hover:border-cyan-400/30 hover:text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <button type="button" aria-label="Tutup menu" onClick={closeMobile} className="absolute inset-0 bg-black/65 backdrop-blur-[2px]" />
          <aside className="absolute inset-y-0 left-0 flex w-[min(84vw,320px)] flex-col border-r border-white/[0.09] bg-[#070b14] p-5 shadow-[20px_0_80px_rgba(0,0,0,0.55)]">
            <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] pb-5">
              <Link href="/dashboard" onClick={closeMobile} className="flex min-w-0 items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-2">
                  <img src="/driacom-logo.png" alt="Driacom" className="h-full w-full object-contain" />
                </div>
                <div className="min-w-0">
                  <div className="font-serif text-lg font-black tracking-wide text-amber-200">DRIACOM</div>
                  <div className="text-[8px] font-bold tracking-[0.24em] text-zinc-600">PROMPT AI GENERATOR</div>
                </div>
              </Link>
              <button type="button" onClick={closeMobile} aria-label="Tutup menu" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-xl text-zinc-400 hover:text-white">×</button>
            </div>

            <nav className="mt-6 space-y-2">
              <div className="mb-2 px-3 text-[10px] font-black tracking-[0.22em] text-zinc-600">NAVIGASI</div>
              <Link href="/dashboard" onClick={closeMobile} className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 text-sm font-bold transition ${item("dashboard")}`}><span className="text-amber-300">⌂</span> Dashboard</Link>
              <Link href="/generators/animation-menu" onClick={closeMobile} className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 text-sm font-bold transition ${item("animation")}`}><span className="text-cyan-300">▣</span> Animasi</Link>
              <Link href="/generators/storytelling-menu" onClick={closeMobile} className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 text-sm font-bold transition ${item("storytelling")}`}><span className="text-violet-300">▱</span> Storytelling</Link>
              <Link href="/generators/affiliate" onClick={closeMobile} className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 text-sm font-bold transition ${item("affiliate")}`}><span className="text-amber-300">↗</span> Affiliate</Link>
              
            </nav>
          </aside>
        </div>
      ) : null}
    </>
  );
}
