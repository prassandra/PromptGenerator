"use client";

import Link from "next/link";
import { useState } from "react";
import {
  LayoutDashboard,
  Film,
  BookOpen,
  ShoppingBag,
  Sparkles,
  Menu,
  X,
  Zap,
} from "lucide-react";

type Active = "dashboard" | "animation" | "storytelling" | "affiliate" | "short-story";

const navItems = [
  { key: "dashboard", href: "/dashboard", label: "Dashboard", Icon: LayoutDashboard },
  { key: "animation", href: "/generators/animation", label: "Animasi AI", Icon: Film },
  { key: "storytelling", href: "/generators/storytelling", label: "Storytelling", Icon: BookOpen },
  { key: "affiliate", href: "/generators/affiliate", label: "Affiliate Video", Icon: ShoppingBag },
  { key: "short-story", href: "/generators/short-story", label: "Short Story", Icon: Sparkles },
] as const;

export default function PremiumSidebar({ active }: { active: Active }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const getStyle = (key: string) =>
    key === active
      ? "bg-gradient-to-r from-indigo-500/15 to-cyan-500/10 border-indigo-500/40 text-white font-semibold shadow-sm shadow-indigo-950/40"
      : "border-transparent text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200";

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-white/[0.07] bg-[#07090e]/95 px-5 py-6 lg:flex lg:flex-col">
        <Link href="/dashboard" className="flex items-center gap-3 border-b border-white/[0.06] pb-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] p-2 shadow-inner">
            <img src="/driacom-logo.png" alt="Driacom" className="h-full w-full object-contain" />
          </div>
          <div>
            <div className="text-base font-bold tracking-tight text-white">Driacom</div>
            <div className="text-[10px] font-semibold tracking-wider text-cyan-400">Prompt Studio</div>
          </div>
        </Link>

        <nav className="mt-6 flex flex-1 flex-col gap-1.5">
          <div className="mb-2 px-3 text-[10px] font-bold tracking-wider text-zinc-500 uppercase">
            Menu Studio
          </div>
          {navItems.map((item) => {
            const { Icon } = item;
            const isActive = item.key === active;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`group flex items-center gap-3 rounded-xl border px-3.5 py-2.5 text-sm transition-colors duration-150 ${getStyle(
                  item.key
                )}`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-cyan-400" : "text-zinc-500 group-hover:text-zinc-300"}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-white/[0.06] pt-4">
          <div className="rounded-xl border border-indigo-500/20 bg-indigo-950/20 p-3.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-300">
              <Zap className="h-3.5 w-3.5 text-cyan-400" />
              <span>Akses Penuh Gratis</span>
            </div>
            <p className="mt-1 text-[11px] leading-relaxed text-zinc-400">
              Semua generator prompt terbuka tanpa batas kuota & tanpa login.
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile Top Navbar Bar */}
      <div className="w-full shrink-0 border-b border-white/[0.06] bg-[#07090e]/95 px-4 py-3 backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <Link href="/dashboard" className="flex items-center gap-2.5">
            <img src="/driacom-logo.png" alt="Driacom" className="h-7 w-7 object-contain" />
            <span className="text-sm font-bold tracking-tight text-white">Driacom Studio</span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Buka menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:bg-white/[0.08]"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute inset-y-0 left-0 flex w-[280px] flex-col border-r border-white/[0.08] bg-[#07090e] p-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
              <Link href="/dashboard" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                <img src="/driacom-logo.png" alt="Driacom" className="h-8 w-8 object-contain" />
                <span className="text-base font-bold text-white">Driacom</span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-zinc-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="mt-5 space-y-1.5">
              {navItems.map((item) => {
                const { Icon } = item;
                const isActive = item.key === active;
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 rounded-xl border px-3.5 py-3 text-sm transition ${getStyle(
                      item.key
                    )}`}
                  >
                    <Icon className={`h-4 w-4 ${isActive ? "text-cyan-400" : "text-zinc-500"}`} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
