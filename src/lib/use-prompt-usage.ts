"use client";
import { useCallback, useState } from "react";

export type PromptMenu = "animation" | "storytelling" | "affiliate";

export function usePromptUsage(_menu: PromptMenu) {
  const [status] = useState({
    plan: "FREE" as const,
    used: 0,
    remaining: null,
    unlimited: true,
    authenticated: false,
    bonusTokens: 999,
  });

  const refresh = useCallback(async () => {}, []);
  return { status, refresh };
}
