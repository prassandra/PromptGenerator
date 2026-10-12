export type AffiliatePresence = "POV Tangan" | "Pakai Karakter";
export type AffiliateContentType = "UGC Natural" | "Unboxing" | "Review Produk" | "Spill Produk" | "Soft Selling";
export type AffiliateVoiceStyle = "Natural" | "Softselling" | "Hardselling";
export type AffiliateMotionTextStyle = "Dinamic" | "Kinetic" | "Highlight";
export type AffiliateAudioMode = "Narasi + BGM + Efek Suara" | "Narasi + Efek Suara" | "BGM + Efek Suara (ASMR)" | "Hanya Narasi / Dialog" | "Tanpa Audio";
export type AffiliateRatio = "9:16" | "16:9" | "1:1";

export type AffiliateForm = {
  contentType: AffiliateContentType;
  productImageName: string;
  productName: string;
  brand: string;
  backgroundImageName: string;
  backgroundDescription: string;
  requiredDisplay: string;
  presence: AffiliatePresence;
  characterImageName: string;
  advertisingGoal: string;
  voiceStyle: AffiliateVoiceStyle;
  motionText: boolean;
  motionTextStyle: AffiliateMotionTextStyle;
  audioMode: AffiliateAudioMode;
  ratio: AffiliateRatio;
  sceneCount: number;
  durationPerScene: string;
  language: string;
};

/**
 * Output yang sengaja dibuat ringkas untuk user.
 * Engine tetap merancang 4 shot + internal beats di dapur,
 * tetapi UI hanya menampilkan satu image prompt dan satu video prompt per scene.
 */
export type AffiliateScene = {
  sceneNumber: number;
  timecode: string;
  purpose: string;
  storyboardImagePrompt: string;
  videoPrompt: string;
};

export type AffiliateBlueprint = {
  productName: string;
  brand: string;
  contentType: AffiliateContentType;
  presence: AffiliatePresence;
  voiceStyle: AffiliateVoiceStyle;
  audioMode: AffiliateAudioMode;
  motionText: boolean;
  motionTextStyle: AffiliateMotionTextStyle | "Tidak ada";
  ratio: AffiliateRatio;
  language: string;
  /** Kosong pada mode POV Tangan. */
  masterCharacter: string;
  scenes: AffiliateScene[];
  totalDuration: string;
};
