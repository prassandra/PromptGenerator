import type { Metadata } from "next";
import "./globals.css";
import AdShell from "@/components/AdShell";
import SiteFooter from "@/components/SiteFooter";
import AppGate from "@/components/AppGate";
import PageViewTracker from "@/components/PageViewTracker";

export const metadata: Metadata = {
  title: "Driacom AI Prompt Studio",
  description: "Driacom Prompt AI Generator — gratis untuk semua creator.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className="min-h-full flex flex-col">
        <PageViewTracker />
        {/* One clean top banner instead of stacking multiple ads above the content. */}
        <AdShell plan="FREE" placement="top" />

        <main className="flex min-h-0 flex-1 flex-col">
          <AppGate>{children}</AppGate>
        </main>

        {/* Bottom inventory is genuinely after the page content and before the footer. */}
        <AdShell plan="FREE" placement="bottom" />
        <AdShell plan="FREE" placement="side" />
        <SiteFooter />
      </body>
    </html>
  );
}
