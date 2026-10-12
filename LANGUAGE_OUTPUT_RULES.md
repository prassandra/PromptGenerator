# Driacom — Language & Output Rules

## UI language
- Indonesia is the default language.
- English can be selected from the header language switcher.
- The language choice persists in the browser.
- Generator pages and dynamic UI text are translated through the Driacom i18n layer.

## Prompt language contract
- Production prompt structure is always English.
- Section labels, camera direction, visual descriptions, continuity rules, technical instructions, and negative prompts stay in English.
- Only language-dependent spoken/script content follows the selected language.
- Indonesian selection: dialogue, narration, voice-over wording, and explicitly requested spoken/script text are natural Indonesian.
- English selection: dialogue, narration, voice-over wording, and explicitly requested spoken/script text are natural English.
- User-provided names, product names, titles, and story ideas are preserved as user input unless the generator explicitly needs a translated spoken line.

## Storytelling ideas
- The idea helper receives the selected UI language and returns title/concept/hook in that language.
