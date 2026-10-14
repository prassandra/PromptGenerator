"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, X } from "lucide-react";

const PUBLISHER = "ca-pub-2212969526982215";
const DEFAULT_TOP_SLOT = "5462390377";
const DEFAULT_BOTTOM_SLOT = "5462390377";
const DEFAULT_SIDE_SLOT = "1222928318";

export type AdPlacement =
  | "top"
  | "mid"
  | "bottom"
  | "side"
  | "action"
  | "workspace"
  | "result"
  | "sticky-bottom";

type WebAdsProps = {
  plan?: "FREE" | "PRO";
  placement: AdPlacement;
  className?: string;
};

export default function WebAds({ plan = "FREE", placement, className = "" }: WebAdsProps) {
  const [mounted, setMounted] = useState(false);
  const [closedSticky, setClosedSticky] = useState(false);

  const publisher = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || PUBLISHER;
  const topSlot = process.env.NEXT_PUBLIC_ADSENSE_TOP_SLOT || DEFAULT_TOP_SLOT;
  const bottomSlot = process.env.NEXT_PUBLIC_ADSENSE_BOTTOM_SLOT || DEFAULT_BOTTOM_SLOT;
  const sideSlot = process.env.NEXT_PUBLIC_ADSENSE_SIDE_SLOT || DEFAULT_SIDE_SLOT;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !publisher) return;

    const pushAds = () => {
      const ads = document.querySelectorAll<HTMLModElement>(
        'ins.adsbygoogle[data-driacom-slot="true"]:not([data-driacom-pushed="true"])'
      );
      if (!ads.length) return;

      for (const ad of ads) {
        if (ad.getAttribute("data-ad-status")) continue;
        try {
          ((window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle ||= []).push({});
          ad.setAttribute("data-driacom-pushed", "true");
        } catch {
          // Handled gracefully
        }
      }
    };

    const existing = document.querySelector<HTMLScriptElement>('script[data-driacom-adsense="true"]');
    if (existing) {
      if ((window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle) pushAds();
      else existing.addEventListener("load", pushAds, { once: true });
      const t1 = window.setTimeout(pushAds, 1000);
      const t2 = window.setTimeout(pushAds, 2500);
      return () => {
        window.clearTimeout(t1);
        window.clearTimeout(t2);
      };
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisher}`;
    script.crossOrigin = "anonymous";
    script.dataset.driacomAdsense = "true";
    script.addEventListener("load", pushAds, { once: true });
    document.head.appendChild(script);

    const retry1 = window.setTimeout(pushAds, 1000);
    const retry2 = window.setTimeout(pushAds, 2500);
    return () => {
      window.clearTimeout(retry1);
      window.clearTimeout(retry2);
    };
  }, [mounted, publisher, topSlot, bottomSlot, sideSlot]);

  if (!mounted) return null;

  // 1. HIGH-CTR TOP BANNER: Billboard banner
  if (placement === "top") {
    return (
      <aside
        className={`w-full border-b border-white/[0.06] bg-[#07090e]/95 px-3 py-2 backdrop-blur-md transition sm:px-6 ${className}`}
        aria-label="Sponsor Teratas"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center">
          <div className="mb-1 flex items-center gap-2 text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">
            <span>Sponsor Resmi</span>
            <span aria-hidden="true">·</span>
            <span>Google AdSense</span>
          </div>
          <div className="min-h-[50px] w-full max-w-[728px] overflow-hidden rounded-xl border border-white/[0.06] bg-[#0b0e17] p-1 shadow-sm sm:min-h-[90px]">
            <AdSlot slot={topSlot} format="horizontal" minHeight={50} />
          </div>
        </div>
      </aside>
    );
  }

  // 2. HIGH-CTR ACTION / PRE-GENERATE SLOT
  if (placement === "action" || placement === "workspace") {
    return (
      <div
        className={`my-4 w-full overflow-hidden rounded-2xl border border-indigo-500/25 bg-gradient-to-r from-indigo-950/30 via-[#0c101d] to-cyan-950/30 p-3 shadow-lg shadow-black/30 ${className}`}
        aria-label="Iklan Sponsor Kreator"
      >
        <div className="mb-1.5 flex items-center justify-between text-[10px] font-semibold text-zinc-400">
          <span className="flex items-center gap-1.5 text-indigo-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Partner Kreator Pilihan
          </span>
          <span className="text-zinc-500 uppercase tracking-wider text-[9px]">Sponsored</span>
        </div>
        <div className="min-h-[85px] w-full overflow-hidden rounded-xl border border-white/[0.06] bg-[#07090f] p-1">
          <AdSlot slot={bottomSlot} format="auto" minHeight={85} />
        </div>
      </div>
    );
  }

  // 3. HIGH-CTR IN-RESULT NATIVE AD SLOT (Between outputs/scenes)
  if (placement === "result") {
    return (
      <div
        className={`my-6 w-full overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-[#0e1424] to-[#07090e] p-4 shadow-xl ${className}`}
        aria-label="Rekomendasi Video Tools"
      >
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="flex items-center gap-2 font-semibold text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            Rekomendasi AI Video & Editing Tools
          </span>
          <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Iklan Sponsor</span>
        </div>
        <div className="min-h-[90px] w-full overflow-hidden rounded-xl border border-white/[0.06] bg-[#07090e] p-1">
          <AdSlot slot={bottomSlot} format="auto" minHeight={90} />
        </div>
      </div>
    );
  }

  // 4. MID-CONTENT RESPONSIVE CARD
  if (placement === "mid") {
    return (
      <section
        className={`my-8 w-full max-w-7xl px-4 sm:px-8 ${className}`}
        aria-label="Iklan di tengah konten"
      >
        <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-[#0d121f] to-[#07090e] p-4 shadow-xl sm:p-5">
          <div className="mb-2 flex items-center justify-between text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">
            <span>Sponsor Platform</span>
            <span>Google AdSense</span>
          </div>
          <div className="min-h-[100px] w-full overflow-hidden rounded-xl border border-white/[0.06] bg-[#06080d] p-1.5">
            <AdSlot slot={bottomSlot} format="auto" minHeight={90} />
          </div>
        </div>
      </section>
    );
  }

  // 5. BOTTOM BANNER
  if (placement === "bottom") {
    return (
      <section className={`mx-auto w-full max-w-7xl px-4 py-6 sm:px-8 ${className}`} aria-label="Iklan Bawah">
        <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#090c14] p-3 text-center sm:p-4">
          <p className="mb-2 text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">
            Sponsored Advertisement
          </p>
          <div className="min-h-[90px] w-full overflow-hidden rounded-xl border border-white/[0.05] bg-[#06080d] p-1">
            <AdSlot slot={bottomSlot} format="auto" minHeight={90} />
          </div>
        </div>
      </section>
    );
  }

  // 6. STICKY BOTTOM MOBILE / DESKTOP ANCHOR (High-CTR Banner)
  if (placement === "sticky-bottom") {
    if (closedSticky) return null;
    return (
      <div className="fixed bottom-0 inset-x-0 z-40 border-t border-white/10 bg-[#07090e]/95 px-3 py-2 backdrop-blur-xl transition">
        <div className="relative mx-auto flex max-w-4xl items-center justify-between gap-3">
          <div className="min-h-[50px] w-full overflow-hidden rounded-lg bg-[#0a0d16] p-0.5">
            <AdSlot slot={bottomSlot} format="horizontal" minHeight={50} />
          </div>
          <button
            type="button"
            onClick={() => setClosedSticky(true)}
            aria-label="Tutup iklan"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.05] text-zinc-400 hover:text-white"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    );
  }

  // 7. SIDE DESKTOP SKYSCRAPER
  return (
    <aside
      className={`pointer-events-none fixed right-3 top-1/2 z-30 hidden w-[160px] -translate-y-1/2 2xl:flex 2xl:w-[180px] ${className}`}
      aria-label="Iklan samping"
    >
      <div className="pointer-events-auto w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080b12]/95 p-2 shadow-2xl backdrop-blur-xl">
        <p className="mb-1.5 text-center text-[9px] font-bold tracking-widest text-zinc-500 uppercase">
          Sponsor
        </p>
        <AdSlot slot={sideSlot} format="auto" minHeight={300} className="w-full" />
      </div>
    </aside>
  );
}

function AdSlot({
  slot,
  className = "",
  format = "auto",
  minHeight = 90,
}: {
  slot: string;
  className?: string;
  format?: "auto" | "horizontal";
  minHeight?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const ad = container.querySelector<HTMLModElement>("ins.adsbygoogle");
    if (!ad) return;

    const checkStatus = () => {
      const status = ad.getAttribute("data-ad-status");
      if (status === "filled") setAdLoaded(true);
    };

    checkStatus();
    const observer = new MutationObserver(checkStatus);
    observer.observe(ad, { attributes: true, attributeFilter: ["data-ad-status"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative flex w-full items-center justify-center overflow-hidden ${className}`}
      style={{ minHeight }}
    >
      <ins
        className="adsbygoogle block w-full"
        style={{ display: "block", minHeight, width: "100%" }}
        data-driacom-slot="true"
        data-ad-client={PUBLISHER}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
      {/* High-fidelity elegant fallback display when ad unit is waiting to fill */}
      {!adLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-[#0d1222] via-[#0f172a] to-[#0d1222] p-2.5 text-center">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-zinc-200">Rekomendasi Video Tools & AI Generator</span>
            <span className="rounded bg-indigo-500/20 px-1.5 py-0.5 text-[9px] font-medium text-cyan-300">Sponsor</span>
          </div>
          <p className="mt-0.5 text-[11px] text-zinc-400">
            Dapatkan hasil video terbaik dengan prompt terstruktur Driacom Studio
          </p>
        </div>
      )}
    </div>
  );
}
