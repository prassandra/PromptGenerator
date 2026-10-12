"use client";

import { useEffect, useState } from "react";

type VisitorTodayProps = {
  className?: string;
};

export default function VisitorToday({ className = "" }: VisitorTodayProps) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const updateFromEvent = (event: Event) => {
      const value = (event as CustomEvent<number>).detail;
      if (typeof value === "number") setCount(value);
    };

    const existing = (window as Window & { __driacomPageviewCount?: number }).__driacomPageviewCount;
    if (typeof existing === "number") setCount(existing);

    window.addEventListener("driacom-pageview-count", updateFromEvent);

    // Fallback keeps the number visible even if the tracker effect ran before this component mounted.
    void fetch("/api/pageview", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { count?: number } | null) => {
        if (typeof data?.count === "number") setCount(data.count);
      })
      .catch(() => undefined);

    return () => window.removeEventListener("driacom-pageview-count", updateFromEvent);
  }, []);

  return (
    <div
      className={`inline-flex min-w-0 items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs font-semibold text-zinc-400 sm:w-auto sm:border-transparent sm:bg-transparent sm:px-0 sm:py-0 ${className}`}
      title="Page views hari ini"
    >
      <span aria-hidden="true" className="shrink-0 text-base leading-none">👁</span>
      <span className="whitespace-nowrap">Pengunjung Hari Ini</span>
      <strong className="min-w-[1.5rem] text-right text-sm font-black text-zinc-100">
        {count === null ? "…" : count.toLocaleString("id-ID")}
      </strong>
    </div>
  );
}
