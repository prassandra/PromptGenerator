import Link from "next/link";
import AccountBar from "@/components/AccountBar";
import AdShell from "@/components/AdShell";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import VisitorToday from "@/components/VisitorToday";

const menus = [
  { href: "/generators/animation", eyebrow: "PROMPT ANIMASI", title: "Animasi", description: "Racik prompt visual, objek bicara, ASMR, fakta unik, edukasi, dan berbagai format konten AI.", icon: "▣", accent: "cyan" },
  { href: "/generators/storytelling", eyebrow: "STORY DIRECTOR", title: "Storytelling", description: "Bangun cerita dengan karakter, konflik, perkembangan alur, klimaks, dialog, scene, dan continuity.", icon: "▱", accent: "violet" },
  { href: "/generators/affiliate", eyebrow: "PROMPT AFFILIATE", title: "Affiliate", description: "Rancang hook, UGC, review produk, soft selling, hard selling, CTA, dan konsep video affiliate.", icon: "↗", accent: "amber" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050811] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[8%] top-[5%] h-80 w-80 rounded-full bg-cyan-500/[0.055] blur-[90px]" />
        <div className="absolute right-[12%] top-[10%] h-96 w-96 rounded-full bg-violet-600/[0.07] blur-[95px]" />
        <div className="absolute bottom-0 left-[38%] h-72 w-72 rounded-full bg-amber-500/[0.035] blur-[85px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
        <header className="sticky top-0 z-40 -mx-5 mb-10 border-b border-white/[0.07] bg-[#050811]/95 px-5 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] p-2.5 shadow-[0_0_30px_rgba(34,211,238,0.08)] sm:h-16 sm:w-16">
                  <img src="/driacom-logo.png" alt="Driacom" className="h-full w-full object-contain" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-black tracking-[0.28em] text-amber-300">DRIACOM</p>
                  <h1 className="truncate font-serif text-2xl font-black tracking-tight sm:text-3xl">Prompt AI Generator</h1>
                  <p className="hidden text-sm text-zinc-500 sm:block">Pilih engine Driacom sesuai jenis konten yang ingin kamu racik.</p>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:justify-end"><VisitorToday className="w-full sm:w-auto" /><LanguageSwitcher compact /><AccountBar /></div>
          </div>
        </header>
        <section className="grid gap-5 lg:grid-cols-3">
          {menus.map((menu) => (
            <Link key={menu.href} href={menu.href} className="group relative flex min-h-[405px] flex-col overflow-hidden rounded-[30px] border border-white/[0.09] bg-gradient-to-br from-[#0b1019] via-[#080d15] to-[#0b0915] p-6 shadow-[0_22px_65px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-white/[0.16] sm:p-7">
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-violet-500/[0.06] blur-3xl transition group-hover:bg-violet-500/[0.10]" />
              <div className="relative flex items-start justify-between">
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl border text-2xl ${menu.accent === "cyan" ? "border-cyan-400/25 bg-cyan-400/[0.06] text-cyan-300" : menu.accent === "violet" ? "border-violet-400/25 bg-violet-400/[0.06] text-violet-300" : "border-amber-400/25 bg-amber-400/[0.06] text-amber-300"}`}>{menu.icon}</div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-zinc-600 transition group-hover:border-white/20 group-hover:text-white">→</div>
              </div>
              <div className="relative mt-10">
                <p className={`text-[10px] font-black tracking-[0.25em] ${menu.accent === "cyan" ? "text-cyan-300" : menu.accent === "violet" ? "text-violet-300" : "text-amber-300"}`}>{menu.eyebrow}</p>
                <h2 className="mt-3 font-serif text-3xl font-black">{menu.title}</h2>
                <p className="mt-4 text-sm leading-7 text-zinc-500">{menu.description}</p>
              </div>
              <div className="relative mt-auto flex items-center justify-between border-t border-white/[0.08] pt-5 text-xs font-black tracking-[0.08em] text-zinc-600 transition group-hover:text-zinc-300"><span>BUKA ENGINE</span><span>→</span></div>
            </Link>
          ))}
        </section>
        <AdShell plan="FREE" placement="mid" />
      </div>
    </main>
  );
}
