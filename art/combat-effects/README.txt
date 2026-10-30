LAST LANTERN — COMBAT EFFECTS

Twelve transparent sprite rows, eight frames each, 32 x 32 pixels per cell.
18 hero-skill recipes share these reusable primitives. Bosses use chapter themes
and twelve combat mechanics, with layered directional marks and active fields.

Source: work/combat-visuals-runtime.js. These are original code-drawn Canvas
assets; no external art download, image generation or new character art.
The exported PNGs are useful for inspection and reuse. The offline HTML
bakes the same sprites itself and does not need the PNG files to play.

Animation is driven by simulation time. Particles are capped at 96 combat
events and projectile histories at seven points / 75 px. Repeated muzzle
flashes at the same source coalesce. Reduced-motion mode freezes sprite
cycling and reduces decorative particle counts. Warnings retain their
original geometry, durations, labels and safe wedges. Hostile shots also
have a pale diamond/square outline, beyond their elemental color.

Damage and rewards stay in existing game logic. Cosmetic drawing never
applies damage. Effects release at the same time as the actual attacks,
with impact positions at swept solid-cover intersections. Saved games
omit expendable effects and trail histories; active hazards still resume.

Preview GIFs use the actual game renderers with controlled native Canvas
fixtures. They are not a browser playtest or a performance guarantee.
