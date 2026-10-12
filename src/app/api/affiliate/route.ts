import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { getMenuAIConfig, isGeminiQuotaOrRateLimit } from "@/lib/ai/menu-projects";
import { DEFAULT_GEMINI_TEXT_MODEL, generateWithGeminiResilient, getDriacomPublicErrorMessage } from "@/lib/gemini/models";
import { buildAffiliatePrompt, generateLocalAffiliate } from "@/lib/prompts/affiliate/generator";
import type { AffiliateForm, AffiliateBlueprint } from "@/lib/prompts/affiliate/types";
import { reservePromptGeneration, releasePromptGeneration } from "@/lib/usage";

function clean(v: unknown) { return String(v ?? "").trim(); }

function parseJson<T>(raw: unknown): T {
  const text = clean(raw).replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
  if (!text) throw new Error("Gemini mengembalikan output kosong.");
  try { return JSON.parse(text) as T; } catch {
    const a = text.indexOf("{"), b = text.lastIndexOf("}");
    if (a >= 0 && b > a) return JSON.parse(text.slice(a, b + 1)) as T;
    throw new Error("Output Affiliate dari AI tidak valid atau terpotong.");
  }
}

function parseSceneDuration(value: string): number {
  const match = String(value || "8 detik per scene").match(/\d+(?:\.\d+)?/);
  return Math.max(1, Math.min(60, Number(match?.[0] || 8)));
}

function validBlueprint(bp: AffiliateBlueprint, form: AffiliateForm) {
  if (!bp || !Array.isArray(bp.scenes) || bp.scenes.length !== form.sceneCount) return false;
  if (form.presence === "Pakai Karakter" && !bp.masterCharacter?.trim()) return false;
  if (form.presence === "POV Tangan" && bp.masterCharacter?.trim()) return false;
  return bp.scenes.every((scene, i) =>
    scene.sceneNumber === i + 1 &&
    Boolean(scene.storyboardImagePrompt?.trim()) &&
    Boolean(scene.videoPrompt?.trim())
  );
}

export async function POST(request: Request) {
  let form: AffiliateForm | null = null;
  let usageReserved = false;
  try {
    const body = await request.json();
    form = body?.form as AffiliateForm;
    const productImageData = clean(body?.productImageData);
    const characterImageData = clean(body?.characterImageData);
    const backgroundImageData = clean(body?.backgroundImageData);
    if (!form?.productName?.trim()) {
      return NextResponse.json({ success: false, error: "Masukkan nama produk terlebih dahulu." }, { status: 400 });
    }
    const usage = await reservePromptGeneration("affiliate");
    if (!usage.ok) return NextResponse.json({ success:false, error:usage.error }, { status:usage.status });
    usageReserved = !usage.unlimited;

    const local = (reason: string) => NextResponse.json({
      success: true,
      engine: "LOCAL_AFFILIATE",
      fallback: true,
      reason,
      blueprint: generateLocalAffiliate(form!),
    });

    const config = getMenuAIConfig("affiliate");
    if (!config.enabled) return local("AI_CONFIGURATION_MISSING");

    const ai = new GoogleGenAI({ apiKey: config.apiKey });
    const prompt = buildAffiliatePrompt(form);
    const { response, model } = await generateWithGeminiResilient({
      apiKey: config.apiKey,
      requestedModel: config.model || DEFAULT_GEMINI_TEXT_MODEL,
      fallbackModel: DEFAULT_GEMINI_TEXT_MODEL,
      requestedMaxOutputTokens: 30000,
      maxRetries: 2,
      generate: async (modelName, maxOutputTokens) => ai.models.generateContent({
        model: modelName,
        contents: [{
          role: "user",
          parts: [
            { text: `${prompt}\n\nOUTPUT JSON ONLY. Schema: {"productName":"...","brand":"...","contentType":"...","presence":"...","voiceStyle":"...","audioMode":"...","motionText":true,"motionTextStyle":"...","ratio":"...","language":"...","masterCharacter":"...","totalDuration":"...","scenes":[{"sceneNumber":1,"timecode":"...","purpose":"...","storyboardImagePrompt":"...","videoPrompt":"..."}]}` },
            ...(productImageData.startsWith("data:image/") ? [{ inlineData: { mimeType: productImageData.slice(5, productImageData.indexOf(";")), data: productImageData.split(",")[1] || "" } }] : []),
            ...(characterImageData.startsWith("data:image/") ? [{ inlineData: { mimeType: characterImageData.slice(5, characterImageData.indexOf(";")), data: characterImageData.split(",")[1] || "" } }] : []),
            ...(backgroundImageData.startsWith("data:image/") ? [{ inlineData: { mimeType: backgroundImageData.slice(5, backgroundImageData.indexOf(";")), data: backgroundImageData.split(",")[1] || "" } }] : []),
          ],
        }],
        config: { responseMimeType: "application/json", maxOutputTokens },
      }),
    });

    const blueprint = parseJson<AffiliateBlueprint>(response?.text);
    if (!validBlueprint(blueprint, form)) throw new Error("Output Affiliate AI tidak memenuhi struktur scene storyboard/video yang dipilih.");

    return NextResponse.json({ success: true, engine: "GEMINI_AFFILIATE", fallback: false, model, blueprint });
  } catch (error) {
    if (usageReserved) await releasePromptGeneration("affiliate");
    console.error("Driacom Affiliate Error:", error);
    if (form) {
      const reason = isGeminiQuotaOrRateLimit(error) ? "AI_QUOTA_OR_RATE_LIMIT" : "AI_ERROR";
      return NextResponse.json({
        success: true,
        engine: "LOCAL_AFFILIATE",
        fallback: true,
        reason,
        blueprint: generateLocalAffiliate(form),
      });
    }
    return NextResponse.json({ success: false, error: getDriacomPublicErrorMessage(error) }, { status: 500 });
  }
}
