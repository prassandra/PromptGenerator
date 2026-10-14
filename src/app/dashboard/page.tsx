import Link from "next/link";
import AdShell from "@/components/AdShell";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  Film,
  BookOpen,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  Check,
  Zap,
  SlidersHorizontal,
} from "lucide-react";

const engines = [
  {
    href: "/generators/animation",
    tag: "Visual & Storyboard",
    title: "Animasi AI Studio",
    description: "Racik prompt gambar start-frame dan video prompt adegan demi adegan dengan konsistensi karakter, kamera, dan audio.",
    badge: "Populer",
    accent: "indigo",
    Icon: Film,
    features: ["Master Character Sheet", "Storyboard Scene 1-10", "Lip-Sync & Audio Cue", "Negative Constraints"],
  },
  {
    href: "/generators/storytelling",
    tag: "Narrative & Drama",
    title: "Storytelling Director",
    description: "Susun alur cerita mendalam lengkap dengan perkembangan konflik, kepribadian tokoh, dialog berbobot, dan ending berkesan.",
    badge: "Sinematik",
    accent: "cyan",
    Icon: BookOpen,
    features: ["Multi-Character Arc", "Genre & Tone Director", "Bantu Buat Ide Otomatis", "Prompt Produksi Lengkap"],
  },
  {
    href: "/generators/affiliate",
    tag: "Marketing & UGC",
    title: "Affiliate Video Engine",
    description: "Ubah foto produk menjadi video promosi berkonversi tinggi dengan hook memikat, naskah natural, dan motion text.",
    badge: "Konversi Tinggi",
    accent: "emerald",
    Icon: ShoppingBag,
    features: ["POV Tangan / Karakter", "Auto Script & Hook", "Motion Text Highlights", "Angle Iklan Cerdas"],
  },
  {
    href: "/generators/short-story",
    tag: "Fast Short-Form",
    title: "Short Story Generator",
    description: "Generator cepat untuk konten video berdurasi pendek TikTok, Reels, dan Shorts dalam format hook pembuka hingga payoff.",
    badge: "Cepat & Praktis",
    accent: "violet",
    Icon: Sparkles,
    features: ["Hook 3 Detik", "Struktur 5 Babak", "Caption & Tagar Siap Pakai", "Karakter Konsisten"],
  },
];

const quickFormats = [
  { label: "ASMR Visual", href: "/generators/animation?contentType=ASMR" },
  { label: "Objek Bicara", href: "/generators/animation?contentType=Objek+Bicara" },
  { label: "Fakta Unik", href: "/generators/animation?contentType=Fakta+Unik" },
  { label: "Drama Emosional", href: "/generators/storytelling?genre=Drama" },
  { label: "Misteri & Thriller", href: "/generators/storytelling?genre=Misteri" },
  { label: "UGC Review Produk", href: "/generators/affiliate" },
];

export default function DashboardPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#07090e] text-slate-100">
      {/* Background ambient lighting */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-600/[0.07] blur-[140px]" />
        <div className="absolute top-[35%] right-[-10%] h-[450px] w-[550px] rounded-full bg-cyan-600/[0.05] blur-[150px]" />
      </div>

      {/* Modern Top Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-[#07090e]/95 px-3.5 py-2.5 backdrop-blur-xl sm:px-8 sm:py-3.5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <Link href="/dashboard" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] p-1.5 sm:p-2 shadow-inner shrink-0">
              <img src="/driacom-logo.png" alt="Driacom" className="h-full w-full object-contain" />
            </div>
            <div>
              <span className="text-sm sm:text-base font-bold tracking-tight text-white">Driacom</span>
              <span className="hidden text-xs text-zinc-500 sm:inline"> · Prompt Studio</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-400 md:flex">
            <Link href="/generators/animation" className="transition hover:text-white">Animasi</Link>
            <Link href="/generators/storytelling" className="transition hover:text-white">Storytelling</Link>
            <Link href="/generators/affiliate" className="transition hover:text-white">Affiliate</Link>
            <Link href="/generators/short-story" className="transition hover:text-white">Short Story</Link>
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <LanguageSwitcher compact />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-3.5 pt-8 pb-10 sm:px-8 sm:pt-16 sm:pb-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-cyan-400">
            <span>Studio Kreator AI</span>
            <span aria-hidden="true">·</span>
            <span>100% Gratis Tanpa Batas</span>
          </div>

          <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-tight">
            Racik Prompt Video AI Kelas Sutradara
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-lg sm:mt-4">
            Hasilkan prompt gambar referensi, storyboard adegan, konsistensi karakter, dan arahan video kamera profesional untuk berbagai platform AI Video.
          </p>

          {/* Quick Sub-Format Shortcuts */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <SlidersHorizontal className="h-3 w-3" />
              Pilihan Cepat:
            </span>
            {quickFormats.map((fmt) => (
              <Link
                key={fmt.label}
                href={fmt.href}
                className="rounded-lg border border-white/[0.08] bg-[#0c101a] px-2.5 py-1 text-xs font-medium text-zinc-300 transition hover:border-cyan-400/40 hover:text-white active:scale-95"
              >
                {fmt.label}
              </Link>
            ))}
          </div>
        </div>

        {/* High-CTR Action / Workspace Sponsor Unit */}
        <div className="mx-auto mt-6 sm:mt-8 max-w-4xl">
          <AdShell placement="action" />
        </div>

        {/* Studio Engines Grid */}
        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {engines.map((eng) => {
            const { Icon } = eng;
            return (
              <Link
                key={eng.href}
                href={eng.href}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0e17]/95 p-4 sm:p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-[#0e1322] hover:shadow-cyan-950/20 active:scale-[0.99]"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-medium text-zinc-500">
                    <span className="flex items-center gap-1.5">
                      <Icon className="h-4 w-4 text-cyan-400" />
                      {eng.tag}
                    </span>
                    <span className="text-[11px] font-semibold text-indigo-400">{eng.badge}</span>
                  </div>

                  <h2 className="mt-3 text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-cyan-300">
                    {eng.title}
                  </h2>

                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                    {eng.description}
                  </p>

                  <ul className="mt-4 sm:mt-5 space-y-2 border-t border-white/[0.06] pt-3.5 sm:pt-4 text-[11px] text-zinc-400">
                    {eng.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <Check className="h-3 w-3 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 sm:mt-6 flex items-center justify-between border-t border-white/[0.06] pt-3.5 sm:pt-4 text-xs font-semibold text-zinc-300 group-hover:text-white">
                  <span>Buka Studio</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 text-cyan-400" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* High-CTR Mid Content Ad Unit */}
      <AdShell placement="mid" />
    </div>
  );
}
