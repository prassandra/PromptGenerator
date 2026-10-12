# Driacom Final Consolidated Fix

This source consolidates the requested Driacom changes in one revision.

## Engine architecture
- Universal Video Execution Core is shared by Animation, Storytelling and Affiliate.
- The same core is applied to Local Engine fallbacks.
- Current storyboard image is treated as the single visual source of truth.
- Video prompts distinguish immutable visual state from authorized motion.
- Dynamic scene compiler injects scene-specific start state, authorized action, end state, focus and immutable elements.
- Continuity and fail-safe rules reduce motion instead of inventing changes when fidelity is at risk.

## AI configuration
- Menu-specific Gemini credentials still work.
- A shared `GEMINI_API_KEY` now enables Animation + Storytelling + Affiliate when menu-specific keys are blank.
- `GEMINI_MODEL` can be used as the shared model; default is `gemini-2.5-flash`.
- Google API-key authentication no longer requires a project ID just to enable a menu.

## AdMob
- Google test banner/rewarded IDs were removed from source.
- Production banner: `NEXT_PUBLIC_ADMOB_BANNER_ID` / native production banner unit.
- Production rewarded: `NEXT_PUBLIC_ADMOB_REWARDED_ID`.
- Native banner is plan-aware through the existing `AdShell` / `NativeAds` component, so PRO does not receive the FREE banner.
- Duplicate MainActivity native banner was removed.

## Android UI
- Persistent dark WebView/footer fix retained.
- Production AdMob App ID retained.
- Splash/logo implementation retained.
- Duplicate status/navigation bar color definitions cleaned up.

## Environment
The uploaded `.env.local` contained real credentials, so it is intentionally NOT included in this distributable ZIP.
Use `.env.local.template` to recreate the file, or keep/copy your existing local `.env.local` into the project.

## Validation
- TypeScript `tsc --noEmit` passed after the final changes.
- Full Next.js build could not be completed in the offline build environment because Next attempted to download the Linux SWC package.
- Android Gradle build could not be completed in the offline build environment because the Gradle wrapper attempted to download Gradle 8.11.1.
- The project remains intended to be built on the user's Windows environment where the existing Node/Gradle/Android setup is already working.
