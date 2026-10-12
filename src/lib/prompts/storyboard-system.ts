/**
 * Driacom Universal Video Execution Core.
 *
 * This is NOT a static prompt template. It is a set of compiler rules shared by
 * Animation, Storytelling and Affiliate engines. The engines decide the creative
 * content; this layer decides how that content is safely translated from a
 * storyboard image into video motion.
 */
export const STORYBOARD_EXECUTION_RULES = `
DRIACOM UNIVERSAL VIDEO EXECUTION CORE — MANDATORY

CORE PRINCIPLE
The CURRENT SCENE STORYBOARD IMAGE is the SINGLE AND ABSOLUTE VISUAL SOURCE OF TRUTH for the corresponding video scene.
The storyboard image defines WHAT EXISTS and WHERE IT EXISTS.
The scene instructions define WHAT IS ALLOWED TO CHANGE.
The video prompt defines HOW that authorized change becomes natural motion.
Never reverse this hierarchy.

REFERENCE TRUTH LOCK
Preserve exactly what is visibly established in the current storyboard image:
- character identity, face, body proportions, hairstyle/hijab, wardrobe and visible accessories
- primary product/object identity, construction, color, material, proportions and visible details
- object position, orientation and physical relationships
- environment, architecture, furniture, props and background objects
- lighting direction, shadow relationships, perspective and composition
- camera framing and established visual language
Do not redesign, beautify, reinterpret, simplify, replace, add or remove visible elements merely to make the video more cinematic.
A new camera angle is NOT permission to invent unseen geometry or product surfaces.

IMMUTABLE VS MUTABLE
IMMUTABLE by default:
identity, face, body, wardrobe, product/object identity, product construction, accessories, environment, background, lighting, perspective and scene composition.
MUTABLE only when explicitly authorized by the scene:
pose, gaze, expression, body motion, hand motion, object interaction, temporary fabric deformation, temporary environmental interaction and camera micro-motion.
If an element is not explicitly authorized to change, PRESERVE IT.

ACTION AUTHORIZATION
Every major movement must be supported by the storyboard and/or explicit scene action.
Do not invent additional actions, camera moves, reactions, gestures, steps, object interactions or scene changes.
If the storyboard visibly establishes an action, execute that action faithfully.
If the written instruction conflicts with the storyboard's established visual state, preserve the storyboard's visible state and choose the smallest motion needed to satisfy the instruction without redesigning the scene.

MOTION-ONLY TRANSLATION
Do not regenerate the scene concept from scratch.
Think: "How do I animate this exact image?" — not "What would look cool here?"
Start from the exact visual state shown by the storyboard.
Introduce only authorized motion.
Keep all non-authorized elements stable.

START → ACTION → END STATE
Each shot/scene must have:
START STATE = exact visual state from the storyboard image.
AUTHORIZED ACTION = only the requested/visible action.
END STATE = a believable physical state produced by that action.
Never reset the scene between internal shots.
Never teleport, snap, morph or jump the character/product/environment to a newly invented state.

SCENE-TO-SCENE CONTINUITY
The END STATE of Scene N is the continuity context for Scene N+1.
Do not independently redesign each scene.
Preserve identity, wardrobe, product/object state, environment, lighting, screen direction and spatial relationships unless the next storyboard explicitly shows a deliberate change.
A new storyboard image may establish a deliberate new state, but it must still belong to the same established production universe.

PRIORITY HIERARCHY
1. CURRENT STORYBOARD VISUAL TRUTH
2. CHARACTER / OBJECT IDENTITY
3. PRIMARY PRODUCT / IMPORTANT OBJECT FIDELITY
4. SCENE COMPOSITION AND ENVIRONMENT
5. AUTHORIZED SCENE ACTION
6. NATURAL HUMAN / PHYSICAL MOTION
7. CAMERA STYLE AND CINEMATIC ENHANCEMENT
If a lower priority conflicts with a higher priority, the higher priority wins.

FAIL-SAFE RULE
If a requested motion risks identity drift, product distortion, anatomy errors, object detachment, environment change or camera instability:
REDUCE THE MOTION.
Do NOT invent a different motion.
Do NOT add a replacement action.
Visual fidelity is more important than movement complexity.

PHYSICAL CONSISTENCY
Connected physical parts must remain connected:
shoulder → arm → wrist → hand → fingers → held object.
Garment → seams → pockets → buttons → zippers → straps → hardware.
Object parts must move as parts of the same physical object.
No floating, duplicated, disappearing, fused or detached components.

CAMERA RESTRAINT
Camera movement is optional, not mandatory.
If the storyboard is stable, keep the camera stable.
Any camera movement must be motivated by an authorized scene action or reveal.
Never use cinematic movement as an excuse to alter composition, perspective, product identity or background.
No random zoom, reframing, orbit, rotation, shake, jitter, drift or perspective jump.

STORYBOARD EXECUTION CHECK
Before finalizing the video prompt, verify:
- Does the opening frame match the storyboard?
- Is every major movement visible or explicitly authorized?
- Did any unrequested element change?
- Does the product/object remain identical?
- Does the character remain identical?
- Does the environment remain identical?
- Does the final state logically result from the authorized action?
If any answer is NO, reduce or correct the motion before output.
`.trim();

export const AFFILIATE_EXECUTION_RULES = `
AFFILIATE EXECUTION EXTENSION
- The uploaded product reference and current storyboard are the authoritative product sources.
- Maintain identical product, exact visible construction, color, material, packaging, logo, proportions and details.
- VIEW LOCK: never reveal product surfaces/angles that are not established by the available reference.
- Product interaction must preserve believable hand/product contact and physical attachment.
- Product visibility has priority over unnecessary movement or cinematic camera behavior.
- For apparel, preserve the exact promoted garment while adapting only supporting wardrobe when explicitly required.
- Smartphone/hand/arm/body relationships must remain physically connected when a phone is present.
`.trim();
