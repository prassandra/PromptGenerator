"use client";

import { useEffect, useState } from "react";
import { DriacomLanguage, LANGUAGE_STORAGE_KEY, translateDocument } from "@/lib/i18n";

export default function AppGate({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<DriacomLanguage>("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    const initialLang: DriacomLanguage = saved === "en" ? "en" : "id";
    setLanguage(initialLang);
    document.documentElement.lang = initialLang;
    setMounted(true);

    const onLangChange = (e: Event) => {
      const next = (e as CustomEvent<DriacomLanguage>).detail;
      if (next === "id" || next === "en") {
        setLanguage(next);
        document.documentElement.lang = next;
        translateDocument(next);
      }
    };

    window.addEventListener("driacom-language-change", onLangChange);
    return () => window.removeEventListener("driacom-language-change", onLangChange);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    translateDocument(language);
  }, [mounted, language]);

  return <>{children}</>;
}
