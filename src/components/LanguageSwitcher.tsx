"use client";

import { useEffect, useState } from "react";
import { Languages } from "lucide-react";
import { DriacomLanguage, LANGUAGE_STORAGE_KEY } from "@/lib/i18n";

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const [language, setLanguage] = useState<DriacomLanguage>("id");

  useEffect(() => {
    const v = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (v === "id" || v === "en") setLanguage(v);
  }, []);

  function change(next: DriacomLanguage) {
    setLanguage(next);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
    document.documentElement.lang = next;
    window.dispatchEvent(new CustomEvent("driacom-language-change", { detail: next }));
  }

  return (
    <label
      className={`flex shrink-0 items-center gap-1.5 rounded-xl border border-white/10 bg-[#0b0e17]/95 px-2.5 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-xl sm:px-3 sm:py-2 ${
        compact ? "" : "shadow-lg shadow-black/20"
      }`}
    >
      <Languages className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
      <span className="hidden md:inline text-zinc-400">
        {language === "id" ? "Bahasa" : "Language"}
      </span>
      <select
        value={language}
        onChange={(e) => change(e.target.value as DriacomLanguage)}
        className="cursor-pointer bg-transparent text-xs font-semibold text-white outline-none"
        aria-label={language === "id" ? "Pilih bahasa" : "Choose language"}
      >
        <option value="id" className="bg-[#0b0e17] text-white">ID</option>
        <option value="en" className="bg-[#0b0e17] text-white">EN</option>
      </select>
    </label>
  );
}
