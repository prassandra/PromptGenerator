export type PromptMenu = "animation" | "storytelling" | "affiliate";

export type UsageStatus = {
  authenticated: false;
  plan: "FREE";
  used: number;
  remaining: null;
  bonusTokens: number;
  unlimited: true;
};

export type UsageReservation =
  | {
      ok: true;
      plan: "FREE";
      unlimited: true;
      remaining: null;
    }
  | {
      ok: false;
      error: string;
      status: number;
      plan: "FREE";
      unlimited: false;
      remaining: number;
    };

export async function getUsageStatus(_menu: PromptMenu): Promise<UsageStatus> {
  return {
    authenticated: false,
    plan: "FREE",
    used: 0,
    remaining: null,
    bonusTokens: 0,
    unlimited: true,
  };
}

// Driacom is currently fully free/unlimited. The failure branch remains part
// of the public return type so existing API routes can safely handle a future
// usage policy without TypeScript narrowing the result to success-only.
export async function reservePromptGeneration(_menu: PromptMenu): Promise<UsageReservation> {
  return {
    ok: true,
    plan: "FREE",
    unlimited: true,
    remaining: null,
  };
}

export async function releasePromptGeneration(_menu: PromptMenu): Promise<void> {}
