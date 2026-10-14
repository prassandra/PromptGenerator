import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/[0.06] bg-[#06080d] px-6 py-8 text-center sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] p-1.5">
            <img src="/driacom-logo.png" alt="Driacom" className="h-full w-full object-contain" />
          </div>
          <span className="text-sm font-bold tracking-tight text-white">Driacom Studio</span>
          <span className="text-xs text-zinc-500">· Gratis untuk Semua Kreator</span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-zinc-400">
          <Link href="/dashboard" className="transition hover:text-white">Dashboard</Link>
          <Link href="/generators/animation" className="transition hover:text-white">Animasi</Link>
          <Link href="/generators/storytelling" className="transition hover:text-white">Storytelling</Link>
          <Link href="/generators/affiliate" className="transition hover:text-white">Affiliate</Link>
          <Link href="/generators/short-story" className="transition hover:text-white">Short Story</Link>
        </nav>

        <p className="text-xs text-zinc-500">
          © {year} Driacom. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
