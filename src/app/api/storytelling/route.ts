import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { buildStorytellingPrompt, sceneCount } from "@/lib/prompts/storytelling/generator";
import { generateLocalStorytelling } from "@/lib/prompts/storytelling/local-engine";
import { getMenuAIConfig, isGeminiQuotaOrRateLimit } from "@/lib/ai/menu-projects";
import type { StorytellingForm, StoryBlueprint } from "@/lib/prompts/storytelling/types";
import { reservePromptGeneration, releasePromptGeneration } from "@/lib/usage";
import {
  DEFAULT_GEMINI_TEXT_MODEL,
  generateWithGeminiResilient,
  getDriacomPublicErrorMessage,
} from "@/lib/gemini/models";

function clean(v: unknown) { return String(v ?? "").trim(); }

function parseJson<T>(raw: unknown): T {
  const text = clean(raw).replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
  if (!text) throw new Error("Gemini mengembalikan output kosong.");
  try { return JSON.parse(text) as T; } catch {
    const a = text.indexOf("{"), b = text.lastIndexOf("}");
    if (a >= 0 && b > a) {
      try { return JSON.parse(text.slice(a, b + 1)) as T; } catch {}
    }
    throw new Error("Output Storytelling dari AI tidak valid atau terpotong.");
  }
}


async function generateStoryIdeas(
  ai: GoogleGenAI,
  apiKey: string,
  genre: string,
  tone: string,
  language: string,
  requestedModel: string,
) {
  const prompt = `
Kamu adalah DRIACOM STORY IDEA DIRECTOR.
Buat 3 ide cerita original yang kuat untuk konten short-form berdasarkan:
GENRE: ${genre}
TONE: ${tone}

Aturan:
- Ide harus mudah dikembangkan menjadi 1-10 scene.
- Hindari ide generik dan pembuka yang sama.
- Setiap ide harus punya konflik yang jelas dan potensi payoff.
- Sesuaikan karakter, konflik, dan emosi dengan genre.
- Write all idea titles, concepts, and hooks in ${language}.
- If ${language} is Indonesian, use natural Indonesian. If it is English, use natural English.
- Do not create production prompts.
- Jangan memakai markdown.

Output JSON valid:
{
  "ideas": [
    {
      "title": "...",
      "concept": "...",
      "hook": "..."
    },
    {
      "title": "...",
      "concept": "...",
      "hook": "..."
    },
    {
      "title": "...",
      "concept": "...",
      "hook": "..."
    }
  ]
}
`.trim();

  const { response } = await generateWithGeminiResilient({
    apiKey,
    requestedModel,
    fallbackModel: DEFAULT_GEMINI_TEXT_MODEL,
    requestedMaxOutputTokens: 2500,
    maxRetries: 2,
    generate: async (modelName, maxOutputTokens) =>
      ai.models.generateContent({
        model: modelName,
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          maxOutputTokens,
          ...(modelName.startsWith("gemini-3.") ? {} : { temperature: 0.9 }),
        },
      }),
  });

  return parseJson<{ ideas: { title: string; concept: string; hook: string }[] }>(clean(response?.text));
}

function speakerLock(scene: StoryBlueprint["scenes"][number], narrator: boolean, dialogue: boolean) {
  const narration = narrator ? `
NARRATOR SPEAKER LOCK:
Narrator is OFF-SCREEN. No visible character is speaking during narration.
All visible characters keep their mouths closed. They may blink, breathe, look, react,
or perform silent physical acting, but NEVER lip-sync to narrator audio.` : "";
  const dialogs = dialogue ? `
CHARACTER SPEAKER LOCK:
Only the explicitly named dialogue speaker may lip-sync. Every other visible character
must keep their mouth closed. Never transfer lip-sync to another character.` : "";
  return `${narration}\n${dialogs}`;
}

export async function POST(request: Request) {
  let bodyForFallback: any = null;
  let usageReserved = false;
  try {
    const config = getMenuAIConfig("storytelling");
    const body = await request.json();
    bodyForFallback = body;

    const localFallback = (reason: string) => {
      const form = body.form as StorytellingForm;
      const story = generateLocalStorytelling(form);
      story.scenes = story.scenes.map((s) => ({
        ...s,
        videoPrompt: `${s.videoPrompt}\n\n${speakerLock(s, !!form.narrator, !!form.dialogue)}`.trim()
      }));
      return NextResponse.json({
        success: true,
        engine: "LOCAL_STORYTELLING",
        fallback: true,
        reason,
        sceneCount: sceneCount(form),
        story,
      });
    };

    if (!config.enabled) {
      if (body?.mode === "ideas") {
        return NextResponse.json({
          success: true,
          engine: "LOCAL_STORYTELLING",
          fallback: true,
          reason: "AI_CONFIGURATION_MISSING",
          ideas: [
            { title: "Rahasia yang Belum Terungkap", concept: "Sebuah rahasia mengubah keputusan tokoh utama.", hook: "Semua bermula dari satu hal kecil." },
            { title: "Keputusan Terakhir", concept: "Tokoh utama harus memilih sebelum konsekuensinya terlambat.", hook: "Kalau kamu ada di posisi ini, pilih yang mana?" },
            { title: "Satu Kesempatan", concept: "Satu kesempatan terakhir memaksa tokoh utama menghadapi konflik.", hook: "Kesempatan itu datang sekali." },
          ],
        });
      }
      return localFallback("AI_CONFIGURATION_MISSING");
    }

    const apiKey = config.apiKey;
    const ai = new GoogleGenAI({apiKey});

    if (body?.mode === "ideas") {
      const genre = clean(body.genre) || "Drama Viral";
      const tone = clean(body.tone) || "Emosional";
      const ideas = await generateStoryIdeas(ai, apiKey, genre, tone, clean(body.language) || "Bahasa Indonesia", config.model || DEFAULT_GEMINI_TEXT_MODEL);
      return NextResponse.json({
        success: true,
        ideas: Array.isArray(ideas.ideas) ? ideas.ideas.slice(0, 3) : [],
      });
    }

    const form = body.form as StorytellingForm;
    if (!form?.idea?.trim()) return NextResponse.json({success:false,error:"Masukkan ide cerita terlebih dahulu."},{status:400});
    const usage = await reservePromptGeneration("storytelling");
    if (!usage.ok) return NextResponse.json({ success:false, error:usage.error }, { status:usage.status });
    usageReserved = !usage.unlimited;
    const prompt = buildStorytellingPrompt(form);
    const { response, model } = await generateWithGeminiResilient({
      apiKey,
      requestedModel: config.model || DEFAULT_GEMINI_TEXT_MODEL,
      fallbackModel: DEFAULT_GEMINI_TEXT_MODEL,
      requestedMaxOutputTokens: 30000,
      maxRetries: 2,
      generate: async (modelName, maxOutputTokens) => ai.models.generateContent({
        model:modelName,
        contents:prompt,
        config:{
          responseMimeType:"application/json",
          maxOutputTokens,
          ...(modelName.startsWith("gemini-3.") ? {} : {temperature:0.85}),
        }
      })
    });

    const raw = clean(response?.text);
    const story = parseJson<StoryBlueprint>(raw);
    if (!story?.scenes?.length) throw new Error("Storytelling AI tidak menghasilkan scene.");

    story.scenes = story.scenes.map((s) => ({
      ...s,
      videoPrompt: `${s.videoPrompt}\n\n${speakerLock(s, !!form.narrator, !!form.dialogue)}`.trim()
    }));

    return NextResponse.json({
      success:true,
      model,
      sceneCount: sceneCount(form),
      story
    });
  } catch (error) {
    if (usageReserved) await releasePromptGeneration("storytelling");
    console.error("Driacom Storytelling Error:", error);

    try {
      const body = bodyForFallback;
      const form = body?.form as StorytellingForm | undefined;
      if (form?.idea?.trim()) {
        const reason = isGeminiQuotaOrRateLimit(error)
          ? "AI_QUOTA_OR_RATE_LIMIT"
          : "AI_ERROR";
        const story = generateLocalStorytelling(form);
        story.scenes = story.scenes.map((s) => ({
          ...s,
          videoPrompt: `${s.videoPrompt}\n\n${speakerLock(s, !!form.narrator, !!form.dialogue)}`.trim()
        }));
        return NextResponse.json({
          success: true,
          engine: "LOCAL_STORYTELLING",
          fallback: true,
          reason,
          sceneCount: sceneCount(form),
          story,
        });
      }
    } catch (fallbackError) {
      console.error("Driacom Local Storytelling Fallback Error:", fallbackError);
    }

    return NextResponse.json({
      success:false,
      error:getDriacomPublicErrorMessage(error)
    },{status:500});
  }
}
