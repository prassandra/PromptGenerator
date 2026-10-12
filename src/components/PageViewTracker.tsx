"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function shouldTrack(pathname: string) {
  return !(
    pathname.startsWith("/admin") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico"
  );
}

export default function PageViewTracker() {
  const pathname = usePathname();
  const lastTracked = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || !shouldTrack(pathname) || lastTracked.current === pathname) return;
    lastTracked.current = pathname;

    void fetch("/api/pageview", {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { count?: number } | null) => {
        if (typeof data?.count === "number") {
          (window as Window & { __driacomPageviewCount?: number }).__driacomPageviewCount = data.count;
          window.dispatchEvent(new CustomEvent("driacom-pageview-count", { detail: data.count }));
        }
      })
      .catch(() => undefined);
  }, [pathname]);

  return null;
}
