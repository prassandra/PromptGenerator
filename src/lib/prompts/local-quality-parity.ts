import { STORYBOARD_EXECUTION_RULES } from "@/lib/prompts/storyboard-system";

/** Shared quality/compiler layer for Driacom Local Engine and AI Engine. */
export const LOCAL_QUALITY_PARITY_RULES = `
DRIACOM LOCAL / AI QUALITY PARITY LAYER
- This is an additive execution layer. Preserve all menu-specific creative instructions and user inputs.
- Image/storyboard prompts establish visual state; video prompts execute that established state.
- The current storyboard image is the single visual source of truth for its corresponding video scene.
- Never redesign a storyboard scene during video generation.
- Never invent actions that are not authorized by the scene or visibly established by the storyboard.
- Separate immutable visual identity from mutable scene motion.
- Every video scene must have a clear START STATE, AUTHORIZED ACTION, and END STATE.
- Preserve continuity across internal shots and adjacent scenes.
- If a requested movement threatens visual fidelity, reduce the movement instead of inventing a replacement.
- Keep product/object, character, environment, lighting, perspective and physical relationships stable unless deliberately changed.
- Avoid vague filler. Use concrete action, state, timing, camera and continuity instructions.
- Keep prompts production-ready and self-contained.

${STORYBOARD_EXECUTION_RULES}
`.trim();
