# Last Lantern — game design benchmark

Research date: 24 October 2026.

This is a desk-research comparison of published game features and the current Last Lantern source, not a hands-on playtest, frame-rate comparison, or proof of player retention. The recommendations below are proposed design targets, not features already implemented by this report.

## Reference games and lessons

| Reference | Verified feature | Application to Last Lantern |
|---|---|---|
| Soul Knight | Its developer listing emphasizes distinct heroes and skills, varied weapons, randomized dungeons, and assisted aiming. | Make every class feel different, keep controls simple, and vary encounters inside each 20-wave section. Give weapons different behavior as well as damage. |
| Soul Knight | ChillyRoom documents separate Level, Matrix, and Boss Rush mode selections, difficulty settings, and challenge conditions. | Give Campaign, Story, and Endless distinct goals and progression. Optional challenge modifiers can provide variety without requiring another map. |
| Hades | Supergiant describes a dungeon crawler designed with a strong sense of place and narrative purpose. | Let returning to camp advance relationships and reveal the mystery. Defeat can still uncover a clue or character conversation. |
| Vampire Survivors | Its developer description combines large enemy crowds with choices that grow the player's power, gold-funded upgrades between runs, and free power-up refunds. | Alternate rising pressure with meaningful build choices. Provide a safe way to experiment with permanent upgrades. Large crowds must remain readable. |

Sources: [Soul Knight developer listing](https://play.google.com/store/apps/details?hl=en_US&id=com.ChillyRoom.DungeonShooter), [ChillyRoom mode-selection guide](https://soulknight.chillyroom.com/et/article/base/7), [Supergiant Hades FAQ](https://www.supergiantgames.com/blog/hades-faq/), [Vampire Survivors developer store description](https://store.steampowered.com/app/1794680/Vampire_Survivors/).

These are design references. Last Lantern should keep its own characters, artwork, story, rules, and offline identity.

## Current gaps in Last Lantern

The inspected build has six maps, eight waves per map, one chapter boss, class equipment, expensive recruitment, and persistent upgrades. The new request changes that to 100 waves per map and bosses at waves 20, 40, 60, 80, and 100: 600 campaign waves and 30 boss encounters across six maps. Thirty encounters do not automatically mean thirty distinct boss designs; each map should have four wardens and a final ruler, or explicitly named variants with changed moves.

Current normal waves advance on a 26-second timer. Simply extending that structure produces roughly 43 minutes per map and 4 hours 20 minutes for six maps, before additional boss fights, pauses, and story. A long map needs saved progress and recovery points. Otherwise one late failure can erase too much time.

The largest gameplay risks are repetition, unreadable enemy crowds, and prices that demand repetitive farming before players can try another class. More health and bigger numbers alone do not solve these problems.

## Recommended modes

**Campaign — The Six Beacons.** Six unlockable maps, each with 100 waves divided into five 20-wave sections. Boss victories unlock the next section and bank a checkpoint. Completing wave 100 unlocks the next map. Best completion results are stored separately from the active expedition.

**Story — The Debt of Dawn.** The same combat foundation with authored objectives, short conversations, discoveries, and consequences at milestones. Each map still has 100 waves, but the sections feature objectives such as escorting survivors, defending a beacon, recovering a relic, and breaking a seal. A journal allows dialogue to be skipped and read later. Story completion requires the final resolution, not only a high score.

**Endless — The Long Night.** No final victory wave. Bosses appear every 20 waves; the environment changes after every 100. Later cycles introduce visible modifiers, such as armored hunters or storm zones. Track the highest wave and best score locally, separately from campaign completion. Allow saving and leaving an unfinished run.

## Original story direction

Brann's lantern contains the last spark of dawn. Each night it burns a memory from someone sheltered by the camp. He has been told that relighting six ancient beacons will restore the sun. Nyx discovers the beacons were built to imprison the survivors' memories, and Orin recognizes his own handwriting in the plans.

The Hollow King is a former keeper who refused to sacrifice another village. Cindermaw guards the furnace that made the lanterns. The frozen ruins preserve the names erased from history. In the citadel, Rook learns that the Iron Tyrant built an army from people promised protection. Sera hears those people singing beneath the necropolis. Jax carries the last order to destroy the remaining beacon, signed by Brann before he lost his memory.

The Ashen Sovereign offers Brann a permanent sunrise powered by the camp's remaining memories. The alternative is to break the lantern and return the stolen memories, leaving the heroes to kindle a smaller, uncertain dawn together. Earlier rescue objectives determine who stands beside them and which camp epilogues are available. Essential story understanding must never require buying a hero.

## Waves, difficulty, and enemy vitality

Use each 20-wave section as a small dramatic arc: introduce a threat, combine it with familiar enemies, add an elite, then culminate in a boss. Rotate pursuit, ranged pressure, flanking, and objective defense rather than spawning the same mix more quickly every wave.

Prototype health scaling with `baseHP × mapMultiplier × 1.015^(wave − 1)`. This makes wave-100 health about 4.37 times wave-1 health within a map. By comparison, 5% compounded growth gives about 125 times the health and is likely to create exhausting fights. These are proposed tuning examples, not measured final balance. Scale against expected player damage and upgrades, and give late maps stronger starting enemies.

Increase damage more slowly than health. Cap movement speed and simultaneous projectiles. Bosses should gain attack patterns and phases at later milestones. Use clear anticipation before charges, casts, and slams; synchronize the actual hit with the animation. Leave recognizable escape routes even when the enemy count rises.

Save after completed waves. After a boss, offer a short camp break and a confirmed checkpoint. Suspend-and-continue should preserve an active expedition; defeat can return the player to the last boss checkpoint with a defined penalty. Do not grant a checkpoint's reward twice by reloading.

## Menus and progression

Home: Continue, New Expedition, Story, Campaign, Endless, and Settings. Continue displays the hero, mode, map, and wave. New Expedition starts a new run while keeping account unlocks. A separate Reset Save action requires explicit confirmation; it must not be hidden behind an ambiguous New Game button.

Use dedicated Weapon Shop, Characters, Skills, and Camp screens. Each should show available gold, current equipment, purchase requirements, and a clear return button. Keep combat paused while managing a suspended run, and apply loadout changes only at permitted breaks.

For skills, prioritize meaningful alternatives: one equipped class ability selected from three, plus passive build choices. For example, Brann chooses Sunburst, Guiding Beacon, or Soulflame; Nyx chooses Starfall, Snare Volley, or Shadow Step. Additional abilities need their own effects, cooldowns, and animation timing.

For Camp, let each upgrade track reach level 200, with visible milestones every 20 levels. Suggested tracks are Vitality, Training, Recovery, Income, Salvage, and Lantern Research. Use diminishing returns for cooldown reduction, damage reduction, and regeneration so level 200 cannot remove all challenge. Show the next level's exact benefit and price before purchase. Distinguish permanent camp levels from temporary expedition levels.

## Economy: expensive but attainable

Preserve the requested 2.5-million legendary and 25-million mythic price scale. Add achievement requirements and boss-earned materials so acquisition signals mastery. Keep smaller, useful purchases available during the journey.

Prices must be evaluated against net gold earned after normal upgrade spending. At 100,000 net gold per hour, a 2.5-million weapon takes 25 hours. At one million net gold per hour, a 25-million weapon also takes 25 hours. These are illustrative calculations, not measured earnings. The final earning curve should be playtested before choosing how many hours a weapon ought to require.

Boss milestones should deliver reliable rewards. Optional objectives and harder modifiers can improve earnings. An offline training arena can let players preview a locked character's play style without granting ownership or campaign rewards.

## Validation targets for implementation

- All six maps contain exactly 100 campaign waves; bosses appear at 20, 40, 60, 80, and 100.
- Campaign and Story finish correctly; Endless continues beyond wave 100 and records its own best result.
- Continue restores mode, hero, map, wave, inventory, and run upgrades without duplicating gold or boss rewards.
- New Expedition preserves permanent progress; Reset Save has an explicit confirmation.
- Every camp track stops at level 200 and rejects extra purchases without charging gold.
- Enemy attacks show anticipation, contact, and recovery; deaths and dash trails do not remain as stuck effects.
- Measure normal-enemy defeat times, boss duration, deaths by wave, and net gold per hour at early, middle, and late progression.
- Profile the maximum intended enemy/projectile load on the user's actual device. Aim for smooth 60-fps play where supported, with a reduced-effects option; this research provides no measured performance claim.
- Test with networking disabled and verify that maps, sprites, menus, and saves work without external requests.

The strongest direction is an offline action game about carrying light through a changing world, with distinct classes and stories between difficult expeditions. The 100-wave structure and high prices should support that experience through steady milestones and meaningful choices.
