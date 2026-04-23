# Stage40 stabilization audit

## Preconditions
- AGENTS.md checked.
- `node_modules/next/dist/docs/index.md` checked.
- Stage40 is not a Next.js UI change.
- Stage40 does not add motifs and does not change `data/batches`.
- Stage40 does not confirm a new `anger` motif.
- Stage40 does not include PowerShell runtime verification yet; that is reserved for Stage41.

## Fixed-format registry snapshot
```text
registry total: 400
relation total: 1083

by cluster:
water-weather: 104
home-place: 120
movement: 126
communication: 66
relationship: 56
body-appearance: 142
emotion-action: 163
nature-sky: 113
object-record: 193
care-risk: 0
general: 0

by kind:
intentional-one-way: 10
should-be-reciprocal: 225
should-be-conflict: 1
generic-specific: 774
context-helper: 73
stale-relation: 0

general count: 0
```

Validator summary:

```text
error: 0
warning-fix-soon: 184
warning-review-ok: 128
info: 1121
```

## Audit goal
Stage40 is the first stabilization pass after reaching 400 motifs.
The goal is not to grow the registry further, but to make the current shape explainable,
reviewable, and ready for UI confirmation and provisional release checks.

The top audit targets are:
- `generic-specific = 774`
- `object-record = 193`
- `movement = 126`
- `body-appearance = 142`
- `emotion-action = 163`
- `home-place = 120`
- station-side movement boundaries
- digital-object boundaries
- non-diagnostic body-appearance copy
- side effects of `train -> car`
- side effects of `hallway -> school`
- anger colloquialisms still routed through `fighting`

## Warning / relation management policy
Warning policy:
- keep `warning-fix-soon <= 184`
- keep one-character aliases disallowed
- keep two-character-or-shorter weak terms disallowed unless already justified
- keep short or overly diagnostic block copy out of new wording proposals
- keep `warning-review-ok = 128` documented as explicit, reviewable overlap rather than ignored debt

Relation policy:
- prioritize explainability over relation count changes
- keep `general count = 0`
- keep `stale-relation = 0`
- keep direct-neighbor guardrails:
  - avoid direct `comment -> sns`
  - avoid direct `coworker -> workplace`
- treat `generic-specific` in three buckets:
  - parent/child granularity
  - close-sibling granularity
  - context-helper attachment

Fixture / audit policy:
- keep real-dream audit separate from addition work
- do not promote anger from comparison target to confirmed motif
- use Stage41 to verify runtime behavior, not Stage40

## Cluster explanation debt
### `generic-specific = 774`
This is the largest explanation burden in the project.
Stage40 should frame it as a review surface, not as a raw defect count.
The practical need is to keep relation clusters explainable in grouped language.

Recommended explanation buckets:
- nature and natural-detail granularity
- station / route / ticket / timing granularity
- digital-object / display / control granularity
- body surface / facial contour / visible-line granularity
- emotion-action / hesitation / retreat / self-control granularity

### `object-record = 193`
This cluster has become the densest “everyday object” lane.
It now mixes paper items, desk items, stationery, UI-like controls, and carry items.

Stage40 should explicitly separate:
- paper / record artifacts
- desk / holding / binding objects
- digital-object surfaces and controls
- measuring / confirming tools

### `movement = 126`
This cluster needs boundary explanations more than more motifs.

Priority boundary set:
- `ticket_machine`
- `departure_board`
- `platform_clock`
- `ticket_gate`
- `platform_sign`
- `platform_edge`
- `station_map`
- `route_sign`
- `train`
- `being_late`
- `dead_end`

### `body-appearance = 142`
The number itself is less risky than the copy quality.
The main stabilization task is to ensure the body cluster does not feel medical or diagnostic.

Priority review set:
- `nape`
- `eyelid`
- `temple`
- `jawline`
- `chin`
- `face`
- `cheek`
- `collarbone`
- `scar`

### `emotion-action = 163`
This cluster is now broad enough that “main motif drift” is a realistic audit concern.

Priority review set:
- `hesitating`
- `backing_away`
- `flinching`
- `tiptoeing`
- `holding_back`
- `double_checking`
- `being_chased`
- `fighting`
- `hiding`

### `home-place = 120`
This remains restrained by policy, but relation attachment still raises the count.
Stage40 should document that home-place growth is being tolerated only when it is relation-driven
and still explainable, not because the project wants to broaden the cluster further.

## Fixture / audit / test gaps
Priority missing or still-thin checks:

### Station-side movement boundary
- distinguish `station_map / route_sign` from `ticket_machine / departure_board / platform_clock`
- keep `train` and `being_late` as main motifs when the dream is really about transit pressure
- prevent platform-side helpers from overrunning the main transit motif

### Digital-object boundary
- distinguish `search_bar / signal_bar / volume_slider` from
  `cursor / battery_icon / mute_button / pause_button / status_light / screen_corner / monitor`
- keep these motifs in digital-object / object-record lanes rather than drifting into communication

### Body-appearance non-diagnostic coverage
- confirm non-diagnostic wording across alias, question, and block copy
- confirm that “visible line / contour / impression” stays stronger than “symptom / condition”

### Extraction side-effect coverage
- keep checking `train -> car`
- keep checking `hallway -> school`
- keep checking whether anger colloquialisms stay routed to `fighting`

## Real-dream audit continuation
Stage40 keeps real-dream audit as a separate track from motif growth.

Audit axes:
- partial-match false positives
- colloquial / casual Japanese misses
- main-motif swapping
- side effects from previous minimal extraction fixes

Four-state recording:
- `1位で拾えた`
- `上位6件には入った`
- `未抽出`
- `誤抽出あり`

Comparison targets that remain active:
- `being_late`
- `exam`
- `ex_partner`
- `making_mistake`
- `being_chased`
- `train -> car`
- `hallway -> school`
- `キレる / キレ散らかす / ブチギレる`

## Non-diagnostic copy review policy
This is a stabilization priority.
Body and scar-adjacent motifs must not read like diagnosis, assessment, or medical labeling.

Review rules:
- prefer “noticed / visible / impression / line / contour” over “problem / symptom / abnormality”
- avoid copy that sounds like the app is medically reading the user
- keep body motifs framed as dream-scene symbols, not condition claims
- keep `anger` unconfirmed and comparison-based

## Empty-match fallback policy
Stage40 should lock down the wording direction even before implementation.

Required fallback behavior:
- explain that nothing strong was picked up yet
- encourage re-entry without implying user error
- show one or two example phrasings
- explicitly say both short and long descriptions are acceptable

Suggested fallback copy direction:
- “まだ強く拾えたモチーフが少ないため、もう少し場面を足すと解釈しやすくなります。”
- “短く書いてもOKです。長く書いてもOKです。印象に残ったものを1つか2つ足してください。”

## Input guide / example policy
The input guide should help users write naturally, not like they are tagging a dataset.

What to prepare next:
- typical dream examples
- natural Japanese examples
- hints for extractable phrasing
- helper prompts for weak or vague cases

Suggested guide themes:
- “誰がいたか”
- “どこにいたか”
- “何が印象に残ったか”
- “どんな気持ちだったか”

Example directions to prepare:
- short example: “駅で迷って電車に乗り遅れそうだった”
- longer example: “駅の案内図を見てもホームが分からず、始業時間が過ぎているのに前へ進めなかった”
- guidance note: “自然な文章で大丈夫です”

## UI wording drift candidates
Stage40 should document wording that may no longer match the project’s actual scale or tone.

Priority wording fixes to consider in Stage41+:
- phrases like “初期20モチーフ” if they still appear anywhere
- copy that sounds overly diagnostic or definitive
- wording that makes the result feel “judged” instead of “interpreted”
- wording that undersells that 400 motifs are now covered

Tone target:
- interpretive, not medical
- guiding, not judging
- concrete, but not over-assertive

## Anger note
`anger` remains unconfirmed in Stage40.
Anger colloquialisms continue to be tracked as comparison targets routed through `fighting`,
not as a newly adopted motif decision.

## Stage41 entry conditions
Stage41 should begin PowerShell-driven runtime verification only after these conditions are met:
- Stage40 wording and audit priorities are documented
- registry shape is explainable enough for UI review
- empty-match fallback direction is written down
- input guide direction is written down
- non-diagnostic copy review rules are written down
- real-dream audit comparison targets remain separated from addition work
- `warning-fix-soon <= 184`, `general count = 0`, and `stale-relation = 0` remain the gating frame
