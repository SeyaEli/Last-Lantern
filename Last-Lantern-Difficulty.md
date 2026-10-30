# Last Lantern: harder waves and bosses

Enemy vitality and attack damage increase on every wave. The curve follows total expedition progress, so entering a new chapter or Endless cycle no longer lowers ordinary enemy or boss strength. New enemies use the new balance; saved enemies retain their exact current health until defeated.

- All six chapters retain 100 waves, with bosses on 20, 40, 60, 80 and 100.
- Campaign and Endless spawn faster and build toward a cap of 150 living ordinary enemies. Elite hunts occur every five ordinary waves. Boss reinforcements use a smaller cap to leave room for the boss patterns.
- Story encounters grow from five to 32 enemies. Every fifth ordinary wave contains an elite. Boss escorts receive limited reinforcements every 6–12 seconds. Spawn positions favor distance from the hero and separation from other enemies, on solid playable floors. Safe outposts stay safe.
- Every successive boss has more health and attack damage, including chapter boundaries. Skill cooldowns shorten as the journey progresses.
- Below 50% health, bosses chain two skills. Below 25%, they chain three. Each cast retains its full warning, locked targets, and a recovery gap. Completing a chain gives a longer opening.
- A stun interrupts the chain and staggers the boss for up to half a second. A dashed ring indicates 3.6 seconds of stagger protection against repeated stuns. Burst damage can still interrupt a healing ritual.
- Chapter-specific enemy trait attacks now scale their damage and use a cast warning before release.
- Pause and Continue preserve active chains, remaining warnings, reinforcement timers and stagger protection.

## Sample progression

These are the same basic enemy's spawn stats, before elite modifiers. Counts and spawn speed are bounded; vitality and damage continue growing.

|Total wave|Chapter / wave|Health|Damage|Story group|Arena cap|Spawn interval|
|---:|:---|---:|---:|---:|---:|---:|
|1|1 / 1|43.2|12.3|5|62|1s|
|20|1 / 20|65.3|13.4|6|67|0.913s|
|100|1 / 100|192.5|18|10|89|0.669s|
|101|2 / 1|213.8|19.1|10|90|0.633s|
|120|2 / 20|256.2|20.3|11|95|0.597s|
|200|2 / 100|472.1|25.5|16|117|0.482s|
|201|3 / 1|518.4|27|16|118|0.463s|
|500|5 / 100|2320.9|55.3|32|150|0.27s|
|600|6 / 100|3360.2|67.8|32|150|0.27s|
|601|1 / 1|3594.2|71|32|150|0.27s|
|1200|6 / 100|15852|174.9|32|150|0.27s|

## Validation

87 native engine integration checks pass against the embedded HTML. Added coverage includes 1,800 consecutive waves, 60 successive bosses, all 30 bosses in both chain phases, Story crowds and bounded reinforcements, dead-body spawn slots, stun protection, paused and resumed chains, and scaled enemy trait attacks. Existing 600-wave campaign and full Story progression tests still pass.

Browser/mobile performance and human difficulty playtesting remain unverified. This is an intentionally harder balance pass; the supplied samples describe engine behavior, not a human completion benchmark.
