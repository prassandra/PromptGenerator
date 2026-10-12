import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { getMenuAIConfig } from "@/lib/ai/menu-projects";

const ANIMATION_AI_CONFIG = getMenuAIConfig("animation");

import {
  DEFAULT_GEMINI_TEXT_MODEL,
  generateWithGeminiResilient,
  getDriacomPublicErrorMessage,
} from "@/lib/gemini/models";

const IDEA_MODEL =
  process.env.GEMINI_IDEA_MODEL ||
  DEFAULT_GEMINI_TEXT_MODEL;

const ideaSchema = {
  type: "object",
  properties: {
    ideas: {
      type: "array",
      items: {
        type: "object",
        properties: {
          title: { type: "string" },
          concept: { type: "string" },
          hook: { type: "string" },
          storyBlueprint: {
            type: "object",
            properties: {
              premise: { type: "string" },
              protagonistGoal: { type: "string" },
              centralConflict: { type: "string" },
              stakes: { type: "string" },
              turningPoint: { type: "string" },
              climax: { type: "string" },
              payoff: { type: "string" },
              ending: { type: "string" },
              visualOpportunities: { type: "array", items: { type: "string" } },
              emotionalArc: { type: "array", items: { type: "string" } },
            },
            required: [
              "premise", "protagonistGoal", "centralConflict", "stakes",
              "turningPoint", "climax", "payoff", "ending",
              "visualOpportunities", "emotionalArc"
            ],
          },
        },
        required: ["title", "concept", "hook", "storyBlueprint"],
      },
    },
  },
  required: ["ideas"],
};

function clean(value: unknown): string {
  return String(value ?? "").trim();
}

export async function POST(request: Request) {
  try {
    const apiKey = ANIMATION_AI_CONFIG.apiKey;

    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: "Konfigurasi AI Animation belum diset di .env.local" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const keyword = clean(body.keyword);

    // Keyword bersifat opsional. Jika kosong, AI harus membuat ide
    // murni berdasarkan Jenis Konten yang dipilih user.
    const genre = clean(body.genre) || "Petualangan";
    const animationStyle =
      clean(body.animationStyle) || "Pixar Inspired 3D";
    const language = clean(body.language) || "Bahasa Indonesia";

    const prompt = `
Kamu adalah AI Idea Director dari "Driacom - Prompt AI Generator".

Buat tepat 3 pilihan ide konten berdasarkan kata kunci user dan JENIS KONTEN.
JENIS KONTEN bukan sekadar genre cerita; ini menentukan format produksi.

KATA KUNCI / ARAH AWAL USER:
${keyword || "(Tidak ada. Buat ide dari Jenis Konten yang dipilih.)"}

GENRE / JENIS KONTEN:
${genre}

GAYA VISUAL:
${animationStyle}

BAHASA:
${language}

ATURAN:
- Jika KATA KUNCI kosong, jangan meminta user mengisi ide terlebih dahulu. Langsung buat 3 ide yang paling relevan dengan JENIS KONTEN.
- Ketiga ide harus benar-benar berbeda dalam konflik, arah cerita, atau kejadian utama.
- Jangan sekadar mengganti nama karakter.
- Setiap ide harus punya hook kuat sejak awal.
- Setiap ide harus punya tujuan, konflik, dan payoff/progression yang jelas.
- Sesuaikan ide dengan JENIS KONTEN:
  * ASMR: fokus visual satisfying, material, tekstur, gerakan mikro, ambience/sound.
  * Objek Bicara: objek menjadi karakter utama yang jelas dan dialognya natural.
  * Fakta Unik: fokus fakta menarik, hook cepat, visualisasi fakta, dan payoff edukatif.
  * Edukasi Visual: fokus penjelasan yang mudah divisualisasikan.
  * Konten Hewan: fokus perilaku/aksi hewan yang menarik dan tetap mudah divisualisasikan.
  * What If: fokus premis hipotetis dan perubahan dunia yang terlihat.
  * Eksperimen & Sains: fokus fenomena, proses, sebab-akibat, dan visual yang masuk akal.
  * Miniatur: fokus dunia miniatur, detail skala, material, dan perspektif.
  * Petualangan: fokus eksplorasi, tujuan perjalanan, rintangan, penemuan, aksi, dan payoff.
- Ide harus mudah dikembangkan menjadi beberapa scene pendek.
- Setiap scene nantinya harus memungkinkan causal beat lengkap:
  START STATE -> TRIGGER -> INTENTION -> ACTION -> REACTION -> ESCALATION -> PAYOFF -> END STATE.
- Ide harus memiliki satu konflik utama yang bisa berkembang secara visual.
- Setiap ide harus memiliki minimal satu "turning point" yang mengubah arah cerita.
- Hook harus menciptakan pertanyaan atau rasa penasaran yang ingin dijawab penonton.
- Karakter harus memiliki tujuan yang bisa terlihat melalui tindakan.
- Konsekuensi dari tindakan karakter harus dapat divisualisasikan.
- Karakter dan situasi harus mudah divisualisasikan.
- Hindari cerita generik, filler, moralizing berlebihan, dan kejadian yang tidak memiliki sebab-akibat.
- Jangan membuat image prompt atau video prompt.
- Jangan menulis markdown atau penjelasan di luar JSON.
- Gunakan ${language}.

Setiap concept cukup 2-4 kalimat dan harus langsung bisa dipakai sebagai konsep generator animasi.

Untuk SETIAP ide, buat STORY BLUEPRINT tersembunyi yang cukup kuat untuk menjadi otak alur produksi.
Blueprint wajib konkret, bukan template kosong, dan harus selaras dengan genre serta konsep.
- premise: inti cerita dalam 1 kalimat.
- protagonistGoal: tujuan karakter yang bisa terlihat melalui tindakan.
- centralConflict: konflik utama yang terus berkembang.
- stakes: apa yang bisa hilang/gagal jika karakter tidak berhasil.
- turningPoint: kejadian yang mengubah arah cerita.
- climax: keputusan/konfrontasi terbesar.
- payoff: konsekuensi yang memuaskan dari setup sebelumnya.
- ending: keadaan akhir yang jelas dan earned.
- visualOpportunities: 4-8 peluang visual yang benar-benar muncul dari cerita, bukan daftar kamera generik.
- emotionalArc: 4-8 tahap perubahan emosi dari awal sampai akhir.

Jangan memaksakan jumlah beat berdasarkan nomor scene. Blueprint harus dapat diadaptasi secara dinamis untuk 2-10 scene.
Kamera nantinya akan memilih bahasa visual berdasarkan blueprint ini; jangan menulis camera preset di blueprint.
`.trim();

    const ai = new GoogleGenAI({ apiKey });

    const { response, model } = await generateWithGeminiResilient({
      apiKey,
      requestedModel: IDEA_MODEL,
      fallbackModel: DEFAULT_GEMINI_TEXT_MODEL,
      requestedMaxOutputTokens: 12000,
      maxRetries: 3,
      generate: async (modelName, maxOutputTokens) =>
        ai.models.generateContent({
          model: modelName,
          contents: prompt,
          config: {
            responseMimeType: "application/json",
            responseSchema: ideaSchema,
            ...(modelName.startsWith("gemini-3.") ? {} : { temperature: 0.9 }),
            maxOutputTokens,
          },
        }),
    });

    const text = clean(response.text);

    if (!text) {
      throw new Error("Gemini tidak mengembalikan pilihan ide.");
    }

    const parsed = JSON.parse(text) as {
      ideas?: Array<{
        title?: string;
        concept?: string;
        hook?: string;
        storyBlueprint?: any;
      }>;
    };

    const ideas = (parsed.ideas ?? [])
      .filter(
        (idea: { title?: string; concept?: string; hook?: string }) =>
          clean(idea.title) &&
          clean(idea.concept)
      )
      .slice(0, 3)
      .map((idea: { title?: string; concept?: string; hook?: string; storyBlueprint?: any }) => ({
        title: clean(idea.title),
        concept: clean(idea.concept),
        hook: clean(idea.hook),
        storyBlueprint: idea.storyBlueprint && typeof idea.storyBlueprint === "object"
          ? {
              premise: clean(idea.storyBlueprint.premise),
              protagonistGoal: clean(idea.storyBlueprint.protagonistGoal),
              centralConflict: clean(idea.storyBlueprint.centralConflict),
              stakes: clean(idea.storyBlueprint.stakes),
              turningPoint: clean(idea.storyBlueprint.turningPoint),
              climax: clean(idea.storyBlueprint.climax),
              payoff: clean(idea.storyBlueprint.payoff),
              ending: clean(idea.storyBlueprint.ending),
              visualOpportunities: Array.isArray(idea.storyBlueprint.visualOpportunities) ? idea.storyBlueprint.visualOpportunities.map(clean).filter(Boolean).slice(0, 8) : [],
              emotionalArc: Array.isArray(idea.storyBlueprint.emotionalArc) ? idea.storyBlueprint.emotionalArc.map(clean).filter(Boolean).slice(0, 8) : [],
            }
          : undefined,
      }));

    if (!ideas.length) {
      throw new Error(
        "Driacom belum mendapatkan pilihan ide. Coba kata kunci lain."
      );
    }

    return NextResponse.json({
      success: true,
      ideas,
      model,
    });
  } catch (error) {
    console.error("Driacom AI Idea API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: getDriacomPublicErrorMessage(error),
      },
      { status: 500 }
    );
  }
}
