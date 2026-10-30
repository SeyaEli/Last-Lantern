LAST LANTERN — COMPLETE WEAPON ATTACKS

13 new eight-frame full-body attack sequences (104 consumed poses). All 31
weapons now have complete attack bindings; established user-provided
sequences are retained. The registry contains 32 action sheets / 255 poses
including separate skill clips.

New sequences: Iron Knuckles, Thunder Gauntlets, Titanbreaker Fists,
Apprentice Wand, Frostbinder Staff, Ember Staff, Dawnseeker Lantern,
Stormbow, Blessed Rod, Dawn Bell, Lifebloom Branch, Seraph Lantern and
Halo Scepter. Seven selected source sheets were generated with built-in
imagegen, matching the existing complete armed hero references. The bell
source contains an unused older Seraph row; the separate Seraph sheet is
the final sequence used in the game. Original selected sheets, transparent
packed atlases, frame registration and PROMPTS.json are included.

Packing only isolates complete sprites, preserves associated weapon
components, uniformly resizes and registers feet and tips. No limbs or
weapons are pasted onto another body. The same contact-frame coordinates
drive firing points, root movement, muzzle flashes and weapon effects.

New runtime: work/weapon-attacks-runtime.js; packer:
work/pack-weapon-attacks.cjs. The attack runtime uses per-weapon weighted
frame timings and a brief contact hold. Higher-tier effects use the
existing combat palette and are drawn in Canvas without extra damage.
Full recovery runs before restarting; high attack speed accelerates
playback. Skill clips keep their established release timings. Dash
cancels an ordinary attack; pause freezes it; Continue preserves it.

Legendary and mythic signature motifs include Phoenix wings, Dawnseeker
sun rays, Archmage solar seals, Titanbreaker fissures, Seraph feathers,
Moonlit crescents, Void Fang arcs, Soulfire wisps, Sunbreaker solar lances
and Obsidian/Eclipse crimson ruptures. Weapon prices and ownership stay
in the normal game progression.

Previews use native Canvas and controlled target fixtures, not a browser
recording. Playback is slowed to make the poses readable. Live browser
performance and human playtesting remain unverified.
