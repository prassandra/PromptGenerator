import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import AdShell from "@/components/AdShell";
import SiteFooter from "@/components/SiteFooter";
import AppGate from "@/components/AppGate";

export const metadata: Metadata = {
  title: "Driacom AI Prompt Studio — Generator Video Animasi, Storytelling & Affiliate",
  description: "Studio peracik prompt AI terlengkap dan gratis untuk video animasi, storytelling sinematik, dan konten affiliate.",
  openGraph: {
    title: "Driacom AI Prompt Studio",
    description: "Studio peracik prompt AI terlengkap dan gratis untuk video animasi, storytelling sinematik, dan konten affiliate.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <head>
        {/* Official Google AdSense Client Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2212969526982215"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="flex min-h-screen flex-col bg-[#07090e] text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-white pb-20 sm:pb-0">
        {/* High-CTR Sticky Top Billboard Banner */}
        <AdShell placement="top" />

        <main className="flex min-h-0 flex-1 flex-col">
          <AppGate>{children}</AppGate>
        </main>

        {/* High-CTR In-Stream Bottom & Desktop Side Anchor Ads */}
        <AdShell placement="bottom" />
        <AdShell placement="side" />
        <AdShell placement="sticky-bottom" />
        <SiteFooter />
      </body>
    </html>
  );
}
