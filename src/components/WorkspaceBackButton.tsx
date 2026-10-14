"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function WorkspaceBackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("/dashboard")}
      className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-semibold text-zinc-200 backdrop-blur-xl transition hover:border-cyan-400/35 hover:bg-cyan-400/[0.05] hover:text-white active:scale-[0.98] sm:min-h-11 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm"
      aria-label="Kembali ke Dashboard"
    >
      <ArrowLeft className="h-4 w-4 text-cyan-400" />
      <span>Kembali</span>
    </button>
  );
}
