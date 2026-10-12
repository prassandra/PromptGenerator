"use client";

import { useRouter } from "next/navigation";

export default function WorkspaceBackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("/dashboard")}
      className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-3.5 py-2.5 text-xs font-bold text-zinc-200 shadow-lg shadow-black/10 backdrop-blur-xl transition hover:border-cyan-400/35 hover:bg-cyan-400/[0.05] hover:text-white active:scale-[0.98] sm:min-h-11 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm"
      aria-label="Kembali ke Dashboard"
    >
      <span className="text-base leading-none" aria-hidden="true">←</span>
      <span>Kembali</span>
    </button>
  );
}
