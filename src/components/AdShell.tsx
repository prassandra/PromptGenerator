"use client";

import WebAds, { type AdPlacement } from "@/components/WebAds";

export default function AdShell({
  plan = "FREE",
  placement,
  className = "",
}: {
  plan?: "FREE" | "PRO";
  placement: AdPlacement;
  className?: string;
}) {
  return <WebAds plan={plan} placement={placement} className={className} />;
}
