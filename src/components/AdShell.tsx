"use client";
import { usePathname } from "next/navigation";
import WebAds from "@/components/WebAds";

type Placement = "top" | "mid" | "bottom" | "side";

export default function AdShell({ plan, placement }: { plan: "FREE" | "PRO"; placement: Placement }) {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;
  return <WebAds plan={plan} placement={placement} />;
}
