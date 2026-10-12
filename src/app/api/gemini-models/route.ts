import { NextResponse } from "next/server";
import {
  GEMINI_MODEL_CATALOG,
  listAvailableGeminiModels,
} from "@/lib/gemini/models";

export async function GET() {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: "GEMINI_API_KEY belum diset di .env.local" },
        { status: 500 }
      );
    }

    const available = await listAvailableGeminiModels(apiKey);
    const availableIds = new Set(available.map((model) => model.id));

    return NextResponse.json({
      success: true,
      models: GEMINI_MODEL_CATALOG.map((catalogModel) => ({
        ...catalogModel,
        available: availableIds.has(catalogModel.id),
      })),
      apiModels: available,
      defaultTextModel: "gemini-3.6-flash",
    });
  } catch (error) {
    console.error("Driacom Gemini Models API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Gagal membaca model Gemini.",
      },
      { status: 500 }
    );
  }
}
