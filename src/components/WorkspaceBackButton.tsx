"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function WorkspaceBackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("/dashboard")}
      className="inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs font-semibold text-zinc-200 backdrop-blur-xl transition hover:border-cyan-400/35 hover:bg-cyan-400/[0.08] hover:text-white active:scale-[0.98] sm:min-h-10 sm:px-3.5 sm:py-2"
      aria-label="Kembali ke Dashboard"
    >
      <ArrowLeft className="h-3.5 w-3.5 text-cyan-400 sm:h-4 sm:w-4 shrink-0" />
      <span className="font-semibold">Kembali</span>
    </button>
  );
}
