export type ShortStoryInput = {
  idea: string;
  durationSeconds: 30 | 60 | 90 | 120;
  style: "natural" | "inspirational" | "funny" | "emotional" | "twist";
  narration: "narrator-dialogue" | "narrator" | "dialogue" | "none";
  moral: "ai" | "explicit" | "implicit";
};

export type StoryScene = {
  sceneNumber: number;
  durationSeconds: number;
  location: string;
  time: string;
  characters: string[];
  action: string;
  dialogue: string[];
  narration: string;
  camera: string;
  sfx: string;
  bgm: string;
};

export type ShortStoryOutput = {
  title: string;
  hook: string;
  premise: string;
  characters: string[];
  scenes: StoryScene[];
  climax: string;
  ending: string;
  moral: string;
};
