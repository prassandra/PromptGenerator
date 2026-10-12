"use client";

import { useEffect, useRef, useState } from "react";

const PUBLISHER = "ca-pub-2212969526982215";
const DEFAULT_TOP_SLOT = "5462390377";
const DEFAULT_BOTTOM_SLOT = "5462390377";
const DEFAULT_SIDE_SLOT = "1222928318";

type Placement = "top" | "mid" | "bottom" | "side";
type AdSlotProps = {
  slot: string;
  label?: string;
  className?: string;
  format?: "auto" | "horizontal";
  minHeight?: number;
};

export default function WebAds({ plan, placement }: { plan: "FREE" | "PRO"; placement: Placement }) {
  const [mounted, setMounted] = useState(false);
  const publisher = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || PUBLISHER;
  const topSlot = process.env.NEXT_PUBLIC_ADSENSE_TOP_SLOT || DEFAULT_TOP_SLOT;
  const bottomSlot = process.env.NEXT_PUBLIC_ADSENSE_BOTTOM_SLOT || DEFAULT_BOTTOM_SLOT;
  const sideSlot = process.env.NEXT_PUBLIC_ADSENSE_SIDE_SLOT || DEFAULT_SIDE_SLOT;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted || plan !== "FREE" || !publisher) return;

    const pushAds = () => {
      const ads = document.querySelectorAll<HTMLModElement>(
        'ins.adsbygoogle[data-driacom-slot="true"]:not([data-driacom-pushed="true"])',
      );
      if (!ads.length) return;

      for (const ad of ads) {
        if (ad.getAttribute("data-ad-status")) continue;
        try {
          ((window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle ||= []).push({});
          ad.setAttribute("data-driacom-pushed", "true");
        } catch {
          // AdSense can reject a duplicate/late push. A later retry can initialize it.
        }
      }
    };

    const existing = document.querySelector<HTMLScriptElement>('script[data-driacom-adsense="true"]');
    if (existing) {
      if ((window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle) pushAds();
      else existing.addEventListener("load", pushAds, { once: true });
      const retry1 = window.setTimeout(pushAds, 1200);
      const retry2 = window.setTimeout(pushAds, 3000);
      return () => {
        window.clearTimeout(retry1);
        window.clearTimeout(retry2);
      };
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisher}`;
    script.crossOrigin = "anonymous";
    script.dataset.driacomAdsense = "true";
    script.addEventListener("load", pushAds, { once: true });
    document.head.appendChild(script);

    const retry1 = window.setTimeout(pushAds, 1200);
    const retry2 = window.setTimeout(pushAds, 3000);
    return () => {
      window.clearTimeout(retry1);
      window.clearTimeout(retry2);
    };
  }, [mounted, plan, publisher, topSlot, bottomSlot, sideSlot]);

  if (!mounted || plan !== "FREE" || !publisher) return null;

  if (placement === "top") {
    return (
      <div className="w-full px-0" aria-label="Iklan">
        <AdSlot slot={topSlot} label="Iklan" format="horizontal" minHeight={90} />
      </div>
    );
  }

  if (placement === "mid") {
    return (
      <div className="my-6 w-full" aria-label="Iklan di tengah konten">
        <div className="rounded-xl border border-white/[0.05] bg-white/[0.01] p-1">
          <AdSlot slot={bottomSlot} label="Iklan" format="auto" minHeight={100} />
        </div>
      </div>
    );
  }

  if (placement === "bottom") {
    return (
      <div className="mx-auto w-full max-w-7xl px-5 py-5 sm:px-8" aria-label="Iklan">
        <div className="rounded-xl border border-white/[0.05] bg-white/[0.01] p-1">
          <AdSlot slot={bottomSlot} label="Iklan" format="auto" minHeight={120} />
        </div>
      </div>
    );
  }

  // Side banner is intentionally desktop-only so it never covers mobile content.
  return (
    <aside className="pointer-events-none fixed right-0 top-1/2 z-30 hidden w-[180px] -translate-y-1/2 items-center justify-center xl:flex 2xl:w-[210px]" aria-label="Iklan samping">
      <div className="pointer-events-auto w-[160px] 2xl:w-[190px]">
        <AdSlot slot={sideSlot} label="Iklan" format="auto" minHeight={300} className="w-full" />
      </div>
    </aside>
  );
}

function AdSlot({ slot, label = "Iklan", className = "", format = "auto", minHeight = 90 }: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const ad = container.querySelector<HTMLModElement>("ins.adsbygoogle");
    if (!ad) return;

    const collapseIfUnfilled = () => {
      if (ad.getAttribute("data-ad-status") === "unfilled") setVisible(false);
    };

    collapseIfUnfilled();
    const observer = new MutationObserver(collapseIfUnfilled);
    observer.observe(ad, { attributes: true, attributeFilter: ["data-ad-status"] });
    return () => observer.disconnect();
  }, []);

  if (!slot || !visible) return null;

  return (
    <div
      ref={containerRef}
      className={`flex w-full items-center justify-center overflow-hidden ${className}`}
      style={{ minHeight }}
      aria-label={label}
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
    </div>
  );
}
