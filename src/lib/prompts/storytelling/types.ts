export type StoryCharacter = {
  id: string;
  name: string;
  role: string;
  age: string;
  gender: string;
  appearance: string;
  personality: string;
  goal: string;
  secret: string;
  relationship: string;
  visualSignature: string;
  masterPrompt?: string;
};

export type StoryScene = {
  sceneNumber: number;
  title: string;
  purpose: string;
  location: string;
  time: string;
  characters: string[];
  startState: string;
  trigger: string;
  intention: string;
  action: string;
  reaction: string;
  escalation: string;
  dialogue: string;
  narration: string;
  emotionalBeat: string;
  visualBeat: string;
  endState: string;
  continuity: string;
  storyboardImagePrompt?: string;
  imagePrompt: string;
  videoPrompt: string;
};

export type StoryBlueprint = {
  title: string;
  logline: string;
  thumbnailPrompt?: string;
  hook: string;
  genre: string;
  tone: string;
  theme: string;
  premise: string;
  protagonistGoal: string;
  centralConflict: string;
  stakes: string;
  antagonistForce: string;
  turningPoint: string;
  midpoint: string;
  climax: string;
  payoff: string;
  ending: string;
  emotionalArc: string[];
  characters: StoryCharacter[];
  world: string;
  storyArc: string[];
  scenes: StoryScene[];
};

export type StorytellingForm = {
  idea: string;
  genre: string;
  tone: string;
  theme: string;
  ending: string;
  complexity: "Simple" | "Medium" | "Complex";
  scenes: string;
  duration: string;
  visualStyle: string;
  ratio: string;
  language: string;
  narrator: boolean;
  dialogue: boolean;
  characterCount: string;
  audio: string;
  extraDirection: string;
};

export type StorytellingOutput = StoryBlueprint | null;
