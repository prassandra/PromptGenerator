import type { StorytellingForm } from "./types";

export const STORY_GENRES = [
  "Cerita Pendek",
  "Drama",
  "Romantis",
  "Horror",
  "Komedi",
  "Misteri",
  "Fantasi",
  "Sejarah",
] as const;

export const STORY_TONES = [
  "Emosional",
  "Tegang",
  "Misterius",
  "Mengharukan",
  "Lucu",
  "Gelap",
  "Hangat",
  "Cinematic",
] as const;

export const createDefaultStorytellingForm = (): StorytellingForm => ({
  idea: "",
  genre: "Cerita Pendek",
  tone: "Emosional",
  theme: "",
  ending: "Memuaskan dan memiliki konsekuensi yang jelas",
  complexity: "Medium",
  scenes: "4",
  duration: "8 detik per scene",
  visualStyle: "Realistis Sinematik",
  ratio: "9:16",
  language: "Bahasa Indonesia",
  narrator: true,
  dialogue: true,
  characterCount: "3",
  audio: "Narator + Dialog + Musik + SFX",
  extraDirection: "",
});
