export const GEMINI_MODEL_CATALOG = [
  { id: "gemini-3.6-flash", label: "Gemini 3.6 Flash", category: "Text / Production" },
  { id: "gemini-3.5-flash", label: "Gemini 3.5 Flash", category: "Text / Production" },
  { id: "gemini-3.5-flash-lite", label: "Gemini 3.5 Flash-Lite", category: "Text / Fast" },
  { id: "gemini-3.1-pro-preview", label: "Gemini 3.1 Pro Preview", category: "Reasoning / Preview" },
  { id: "gemini-3.1-flash-lite", label: "Gemini 3.1 Flash-Lite", category: "Text / Fast" },
  { id: "gemini-3-flash-preview", label: "Gemini 3 Flash Preview", category: "Text / Preview" },
  { id: "gemini-2.5-pro", label: "Gemini 2.5 Pro", category: "Reasoning / Legacy" },
  { id: "gemini-2.5-flash", label: "Gemini 2.5 Flash", category: "Text / Legacy" },
  { id: "gemini-2.5-flash-lite", label: "Gemini 2.5 Flash-Lite", category: "Text / Fast / Legacy" },
  { id: "gemini-3-pro-image", label: "Gemini 3 Pro Image", category: "Image" },
  { id: "gemini-3.1-flash-image", label: "Gemini 3.1 Flash Image", category: "Image" },
  { id: "gemini-2.5-flash-image", label: "Gemini 2.5 Flash Image", category: "Image / Legacy" },
  { id: "gemini-3.1-flash-live-preview", label: "Gemini 3.1 Flash Live Preview", category: "Live / Audio" },
  { id: "gemini-3.1-flash-tts-preview", label: "Gemini 3.1 Flash TTS Preview", category: "Audio / TTS" },
  { id: "gemini-2.5-flash-native-audio-preview-12-2025", label: "Gemini 2.5 Flash Native Audio", category: "Audio / Legacy" },
] as const;

export const DEFAULT_GEMINI_TEXT_MODEL = "gemini-2.5-flash";

/**
 * Central Gemini routing policy.
 *
 * IMPORTANT:
 * - Keep model routing in this file so every Driacom menu can share one gateway.
 * - GEMINI_FALLBACK_MODELS may override the default sequence with a comma-separated list.
 * - A model that returns a quota/rate-limit error is not retried repeatedly.
 * - Daily quota exhaustion receives a longer in-memory cooldown.
 */
const DEFAULT_TEXT_FALLBACK_MODELS = [
  "gemini-2.5-flash",
  "gemini-2.5-flash-lite",
  "gemini-2.5-pro",
];

function normalizeModelName(name: string): string {
  return name.replace(/^models\//, "").trim();
}

function getFallbackModels(): string[] {
  const configured = (process.env.GEMINI_FALLBACK_MODELS || "")
    .split(",")
    .map(normalizeModelName)
    .filter(Boolean);

  const source = configured.length ? configured : DEFAULT_TEXT_FALLBACK_MODELS;

  return [...new Set(source)];
}

function isModelNotFound(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error ?? "");
  return /404|NOT_FOUND|not found|no longer available|not available/i.test(message);
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error ?? "");
}

function isQuotaExhausted(error: unknown): boolean {
  const message = errorMessage(error);

  return /RESOURCE_EXHAUSTED|quota exceeded|quotaexceeded|GenerateRequestsPerDay|PerDayPerProject|current quota|exceeded your current quota/i.test(
    message
  );
}

function isRateLimited(error: unknown): boolean {
  const message = errorMessage(error);
  return /429|rate.?limit|too many requests|RESOURCE_EXHAUSTED/i.test(message);
}

function isTemporaryServerError(error: unknown): boolean {
  const message = errorMessage(error);
  return /500|502|503|504|UNAVAILABLE|DEADLINE_EXCEEDED|temporar|high demand|overloaded|timeout/i.test(
    message
  );
}

function isOutputProblem(error: unknown): boolean {
  const message = errorMessage(error);
  return /MAX_TOKENS|output.*kosong|empty response|tidak mengembalikan teks|truncated|terpotong/i.test(
    message
  );
}

function isTransientGeminiError(error: unknown): boolean {
  return isRateLimited(error) || isTemporaryServerError(error) || isOutputProblem(error);
}

function retryDelayMs(attempt: number): number {
  const base = 1200 * Math.pow(2, attempt);
  const jitter = Math.floor(Math.random() * 500);
  return base + jitter;
}

async function sleep(ms: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

const MODEL_LIMIT_CACHE = new Map<
  string,
  { outputTokenLimit: number; expiresAt: number }
>();
const MODEL_LIMIT_CACHE_TTL_MS = 10 * 60 * 1000;
const SAFE_DEFAULT_OUTPUT_TOKEN_LIMIT = 32768;

/**
 * In-memory model cooldown.
 *
 * This protects a single Next.js process from repeatedly hitting a model that
 * has already returned quota/rate-limit errors. It is intentionally best-effort;
 * production multi-instance deployments should eventually move this state to
 * a shared store if cross-instance coordination is required.
 */
const MODEL_COOLDOWN = new Map<string, number>();

function getCooldownMs(error: unknown): number {
  if (isQuotaExhausted(error)) {
    // Daily/project quota should not be hammered again.
    return 60 * 60 * 1000;
  }

  if (isRateLimited(error)) {
    // Per-minute / burst limits usually recover sooner.
    return 70 * 1000;
  }

  if (isTemporaryServerError(error)) {
    return 15 * 1000;
  }

  return 0;
}

function isModelCoolingDown(model: string): boolean {
  const until = MODEL_COOLDOWN.get(model);
  if (!until) return false;

  if (until <= Date.now()) {
    MODEL_COOLDOWN.delete(model);
    return false;
  }

  return true;
}

function markModelCooldown(model: string, error: unknown): void {
  const cooldownMs = getCooldownMs(error);
  if (!cooldownMs) return;

  const until = Date.now() + cooldownMs;
  MODEL_COOLDOWN.set(model, until);

  console.warn(
    `[Driacom AI Router] ${model} masuk cooldown ${Math.round(
      cooldownMs / 1000
    )}s karena ${isQuotaExhausted(error) ? "quota" : "rate/server limit"}.`
  );
}

export function getDriacomPublicErrorMessage(error: unknown): string {
  const message = errorMessage(error);

  if (isQuotaExhausted(error)) {
    return "Driacom sedang ramai digunakan dan kapasitas AI sementara terbatas. Coba lagi beberapa saat.";
  }

  if (isRateLimited(error)) {
    return "Driacom sedang menerima banyak permintaan. Coba lagi beberapa saat.";
  }

  if (isTemporaryServerError(error)) {
    return "Driacom sedang mengalami kepadatan layanan AI. Coba lagi beberapa saat.";
  }

  if (isModelNotFound(error)) {
    return "Mesin AI Driacom sedang diperbarui. Coba lagi beberapa saat.";
  }

  if (/GEMINI_API_KEY|API key|401|403|PERMISSION_DENIED/i.test(message)) {
    return "Layanan AI Driacom sedang tidak tersedia. Silakan coba lagi nanti.";
  }

  return "Driacom gagal meracik prompt. Coba lagi beberapa saat.";
}

export async function getGeminiOutputTokenLimit(
  apiKey: string,
  modelName: string
): Promise<number> {
  const model = normalizeModelName(modelName);
  const cached = MODEL_LIMIT_CACHE.get(model);

  if (cached && cached.expiresAt > Date.now()) {
    return cached.outputTokenLimit;
  }

  try {
    const url = new URL(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}`
    );
    url.searchParams.set("key", apiKey);

    const response = await fetch(url.toString(), {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      return SAFE_DEFAULT_OUTPUT_TOKEN_LIMIT;
    }

    const data = (await response.json()) as {
      outputTokenLimit?: number;
      supportedGenerationMethods?: string[];
    };

    const limit =
      Number(data.outputTokenLimit) > 0
        ? Number(data.outputTokenLimit)
        : SAFE_DEFAULT_OUTPUT_TOKEN_LIMIT;

    MODEL_LIMIT_CACHE.set(model, {
      outputTokenLimit: limit,
      expiresAt: Date.now() + MODEL_LIMIT_CACHE_TTL_MS,
    });

    return limit;
  } catch {
    return SAFE_DEFAULT_OUTPUT_TOKEN_LIMIT;
  }
}

export async function generateWithGeminiResilient<T>(options: {
  apiKey: string;
  requestedModel?: string;
  fallbackModel?: string;
  requestedMaxOutputTokens: number;
  generate: (model: string, maxOutputTokens: number) => Promise<T>;
  maxRetries?: number;
}): Promise<{ response: T; model: string; maxOutputTokens: number }> {
  const requested = normalizeModelName(
    options.requestedModel?.trim() || DEFAULT_GEMINI_TEXT_MODEL
  );

  const explicitFallback = normalizeModelName(
    options.fallbackModel?.trim() || ""
  );

  const fallbackModels = [
    explicitFallback,
    ...getFallbackModels(),
  ]
    .map(normalizeModelName)
    .filter(Boolean)
    .filter((model) => model !== requested);

  const modelQueue = [
    requested,
    ...fallbackModels,
  ].filter((model, index, list) => list.indexOf(model) === index);

  // Keep automatic retries deliberately small. A quota error is never retried
  // against the same model; the router immediately moves to the next candidate.
  const maxRetries = Math.max(1, Math.min(3, options.maxRetries ?? 2));

  let lastError: unknown = null;

  for (const model of modelQueue) {
    if (isModelCoolingDown(model)) {
      console.warn(
        `[Driacom AI Router] Skip ${model}: masih dalam cooldown.`
      );
      continue;
    }

    const modelLimit = await getGeminiOutputTokenLimit(options.apiKey, model);

    let effectiveMaxOutputTokens = Math.max(
      1024,
      Math.min(options.requestedMaxOutputTokens, modelLimit)
    );

    for (let attempt = 0; attempt < maxRetries; attempt += 1) {
      try {
        const response = await options.generate(
          model,
          effectiveMaxOutputTokens
        );

        console.info(
          `[Driacom AI Router] SUCCESS model=${model} attempt=${attempt + 1}`
        );

        return {
          response,
          model,
          maxOutputTokens: effectiveMaxOutputTokens,
        };
      } catch (error) {
        lastError = error;

        const quota = isQuotaExhausted(error);
        const rateLimited = isRateLimited(error);
        const temporary = isTemporaryServerError(error);
        const outputProblem = isOutputProblem(error);
        const missing = isModelNotFound(error);

        console.warn(
          `[Driacom AI Router] FAIL model=${model} ` +
            `attempt=${attempt + 1}/${maxRetries} ` +
            `quota=${quota} rateLimit=${rateLimited} temporary=${temporary} ` +
            `missing=${missing}`
        );

        // Model not found or quota exhausted: do not hammer the same model.
        // Move immediately to the next candidate.
        if (missing || quota) {
          markModelCooldown(model, error);
          break;
        }

        // Burst 429 can recover after a short delay. Try this model once more,
        // but never perform the old 3x retry loop on a daily quota failure.
        if (rateLimited || temporary || outputProblem) {
          if (attempt === maxRetries - 1) {
            markModelCooldown(model, error);
            break;
          }

          if (outputProblem) {
            effectiveMaxOutputTokens = Math.max(
              4096,
              Math.floor(effectiveMaxOutputTokens * 0.78)
            );
          }

          const delay = retryDelayMs(attempt);

          console.warn(
            `[Driacom AI Router] retry ${attempt + 1}/${maxRetries} ` +
              `model=${model} delay=${delay}ms`
          );

          await sleep(delay);
          continue;
        }

        // Non-retryable error: stop immediately. Falling back to another model
        // would hide a real configuration/request problem.
        throw error;
      }
    }
  }

  if (lastError instanceof Error) {
    throw lastError;
  }

  throw new Error(
    "Driacom AI Router: semua model yang tersedia sedang tidak dapat digunakan."
  );
}

export async function generateWithGeminiFallback<T>(options: {
  apiKey?: string;
  requestedModel?: string;
  fallbackModel?: string;
  requestedMaxOutputTokens?: number;
  generate: (model: string) => Promise<T>;
}): Promise<{ response: T; model: string }> {
  const requested = normalizeModelName(
    options.requestedModel?.trim() || DEFAULT_GEMINI_TEXT_MODEL
  );

  const explicitFallback = normalizeModelName(
    options.fallbackModel?.trim() || ""
  );

  const fallbackModels = [
    explicitFallback,
    ...getFallbackModels(),
  ]
    .map(normalizeModelName)
    .filter(Boolean)
    .filter((model) => model !== requested);

  const modelQueue = [
    requested,
    ...fallbackModels,
  ].filter((model, index, list) => list.indexOf(model) === index);

  let lastError: unknown = null;

  for (const model of modelQueue) {
    if (isModelCoolingDown(model)) continue;

    try {
      const response = await options.generate(model);
      return { response, model };
    } catch (error) {
      lastError = error;

      if (
        isQuotaExhausted(error) ||
        isRateLimited(error) ||
        isTemporaryServerError(error) ||
        isModelNotFound(error)
      ) {
        markModelCooldown(model, error);
        continue;
      }

      throw error;
    }
  }

  throw lastError instanceof Error
    ? lastError
    : new Error(
        "Driacom AI Router: semua model fallback tidak tersedia."
      );
}

export async function listAvailableGeminiModels(apiKey: string) {
  const models: Array<{
    id: string;
    displayName?: string;
    supportedGenerationMethods?: string[];
  }> = [];

  let pageToken = "";

  do {
    const url = new URL(
      "https://generativelanguage.googleapis.com/v1beta/models"
    );
    url.searchParams.set("key", apiKey);

    if (pageToken) {
      url.searchParams.set("pageToken", pageToken);
    }

    const response = await fetch(url.toString(), {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      const text = await response.text();

      throw new Error(
        `Gagal membaca daftar model Gemini (${response.status}): ${text}`
      );
    }

    const data = (await response.json()) as {
      models?: Array<{
        name?: string;
        displayName?: string;
        supportedGenerationMethods?: string[];
      }>;
      nextPageToken?: string;
    };

    for (const model of data.models ?? []) {
      if (!model.name) continue;

      models.push({
        id: normalizeModelName(model.name),
        displayName: model.displayName,
        supportedGenerationMethods: model.supportedGenerationMethods,
      });
    }

    pageToken = data.nextPageToken ?? "";
  } while (pageToken);

  return models;
}
