# Driacom Visual Storyboard — Final Implementation

## Core rule
The storyboard image is the visual source of truth for the corresponding video prompt.

## Three user-facing production outputs
1. Character Sheet (only when a character is required)
2. Visual Storyboard — one storyboard sheet per scene, 4 chronological internal shots, with timeline/production metadata
3. Video Prompt — scene/clip prompt that animates the exact storyboard state

## Engine-specific storyboard logic
- Animation: visual beat, motion, camera, transition, sound
- Storytelling: hook/setup/conflict/escalation/turning point/climax/resolution, character emotion and dialogue
- Affiliate: hook/product reveal/demo/result/benefit/reaction/CTA, with Product Lock and product-function interaction rules

## Video duration
Maximum generated clip duration is 10 seconds. Scene durations are automatically grouped into clips at scene boundaries whenever possible. Each scene exposes clip number, clip timecode and duration.

## Affiliate safety
The uploaded product is the source of truth. The engine must not redesign, substitute, morph or change product category. Product interaction must match the actual physical function of the referenced product.
