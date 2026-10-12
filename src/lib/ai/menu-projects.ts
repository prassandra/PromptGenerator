export type DriacomMenu = "animation" | "storytelling" | "affiliate";

export type MenuAIConfig = {
  menu: DriacomMenu;
  projectId: string;
  apiKey: string;
  model: string;
  enabled: boolean;
};

const ENV_MAP: Record<DriacomMenu, {
  project: string;
  apiKey: string;
  model: string;
}> = {
  animation: {
    project: "GEMINI_ANIMATION_PROJECT",
    apiKey: "GEMINI_ANIMATION_API_KEY",
    model: "GEMINI_ANIMATION_MODEL",
  },
  storytelling: {
    project: "GEMINI_STORYTELLING_PROJECT",
    apiKey: "GEMINI_STORYTELLING_API_KEY",
    model: "GEMINI_STORYTELLING_MODEL",
  },
  affiliate: {
    project: "GEMINI_AFFILIATE_PROJECT",
    apiKey: "GEMINI_AFFILIATE_API_KEY",
    model: "GEMINI_AFFILIATE_MODEL",
  },
};

const clean = (value: unknown) => String(value ?? "").trim();

export function getMenuAIConfig(menu: DriacomMenu): MenuAIConfig {
  const env = ENV_MAP[menu];

  return {
    menu,
    projectId: clean(process.env[env.project]),
    apiKey: clean(process.env[env.apiKey]),
    model: clean(process.env[env.model]),
    enabled: Boolean(
      clean(process.env[env.project]) &&
      clean(process.env[env.apiKey]) &&
      clean(process.env[env.model])
    ),
  };
}

export function isGeminiQuotaOrRateLimit(error: unknown): boolean {
  const message =
    error instanceof Error ? error.message : String(error ?? "");

  return /429|resource.?exhausted|quota|rate.?limit|too many requests|perdayperproject|generate requests per day/i.test(
    message
  );
}
