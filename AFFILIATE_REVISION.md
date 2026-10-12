# Driacom Affiliate Output Revision

## Output UX
- Master Character Sheet is shown only when `Pakai Karakter` is selected.
- `POV Tangan` has no Master Character Sheet.
- Each scene exposes only two copyable prompts:
  1. Prompt Gambar — one storyboard sheet containing 4 internal shots/beats.
  2. Prompt Video — one complete video execution prompt containing the same 4 internal beats plus audio, motion-text execution, continuity, and negative prompt.
- Shot 1–4 are internal engine structure and are not displayed as separate output cards.
- Product Lock and Continuity Lock are embedded into the scene prompts instead of separate user-copy blocks.

## Motion Text
When enabled, Driacom generates the highlight copy automatically from product/context. The user does not need to enter the text. The storyboard image prompt instructs the image model to render the selected text/icons directly into the storyboard panels, and the video prompt animates the same existing text/icons.

## Consistency Rules
Affiliate image/video prompts include:
- maintain identical product
- maintain identical character (when character mode)
- maintain identical accessories (when character mode)
- smartphone camera look
- natural hand movements
- do not change the product

## Engines
AI Engine and Local Engine return the same compact output structure. Local Engine also receives the local quality-parity rules.

## Verification
Source-level checks completed for the Affiliate module:
- no UI references remain to per-shot output cards
- no separate product/continuity lock output remains
- AI schema expects scene-level storyboard/video prompts
- Local Engine returns the same scene-level structure
- required consistency phrases are present

A full TypeScript build could not be executed in the isolated build environment because the supplied archive does not contain a complete installed dependency tree.

## 2026-08-19 Visual Fidelity + UX Revision
- Added optional Background / Location reference upload directly after Brand / Merk.
- Added Background / Location description field (examples: kamar tidur, kamar hotel, depan cermin).
- Background reference and description are sent to the AI engine and treated as environment source-of-truth.
- Added Affiliate audio option `Tanpa Audio` with an explicit silent-video rule.
- Motion Text no longer allows/mentions `Pop Dynamic`; available behavior styles are Dynamic, Kinetic, and Highlight, with Dynamic as the default.
- Motion Text rules now require plain text directly over footage: no box, padding, pill, badge, sticker, banner, subtitle panel, or style-name labels. Only short highlight words/phrases should appear and animate according to the content beat.
- Strengthened product lock: maintain identical product, do not change the product, and never invent side/back/top/bottom views when those views are not visible in the product reference.
- Strengthened character lock: maintain identical character identity and accessories, with natural movement (hand, head, foot).
- Strengthened camera language: smartphone/iPhone look camera with realistic handheld creator footage.
- Removed the account/status panel from the desktop sidebar and moved the account profile to the top-right `AccountBar` on generator pages.

## Wardrobe Adaptation Intelligence (2026-08-19)

Added a product-first wardrobe decision layer for character-based Affiliate generation:

- Uploaded character reference is the source of truth for identity, not an automatic wardrobe lock.
- Driacom classifies the promoted product first. When the product is apparel, the product reference becomes the wardrobe hero.
- Unrelated garments from the character reference must not be carried into the final outfit. Example: batik top in character reference + cargo pants product => adapt/replace the top with a simple coordinated modest top so the cargo pants remain the promoted product.
- Final wardrobe must be polite, opaque, and cover the body appropriately.
- For hijab-wearing female characters, a slim-fit supporting top is allowed only when it is long, opaque, and covers the torso/waist appropriately.
- The promoted product itself is never altered to fit the supporting wardrobe.
- The same wardrobe logic is applied to AI prompt generation and local fallback storyboard/video prompts.
