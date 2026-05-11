# Stage56 480 Motif Light Audit

Last updated: 2026-05-10

Stage56 is a light audit before the next production expansion from 480 to 500
motifs. It does not add motifs, change extraction logic, change scoring, or
touch UI behavior.

## Preconditions Checked

- `AGENTS.md` was checked first.
- `node_modules/next/dist/docs/index.md` was checked before making any judgment in
  this Next.js project.
- This stage is registry / relation / alias / docs audit only. Next.js UI and
  routing changes are out of scope.
- Production registry source of truth remains `data/batches/index.ts`.

## Current Numbers

| item | count |
|---|---:|
| registry total | 480 |
| relation total | 1291 |
| general count | 0 |
| warning-fix-soon | 184 |
| warning-review-ok | 139 |
| stale-relation | 0 |
| error | 0 |

by cluster:

| cluster | count |
|---|---:|
| water-weather | 120 |
| home-place | 146 |
| movement | 134 |
| communication | 66 |
| relationship | 162 |
| body-appearance | 149 |
| emotion-action | 183 |
| nature-sky | 129 |
| object-record | 199 |
| care-risk | 3 |
| general | 0 |

by kind:

| kind | count |
|---|---:|
| intentional-one-way | 84 |
| should-be-reciprocal | 221 |
| should-be-conflict | 1 |
| generic-specific | 843 |
| context-helper | 142 |
| stale-relation | 0 |

## Batch-29 Relation Audit

All batch-29 relation records are classified. No `general` or
`stale-relation` records were found for the new motifs.

| motif cluster | relation handling | audit result |
|---|---|---|
| `airplane / airport / travel / flying / sky` | movement, generic-specific | Healthy. Airplane is specific vehicle; airport/travel/sky support context. |
| `sword / fighting / scissors / injury` | object-record, emotion-action, body-appearance | Acceptable. Sword should remain boundary/defense; avoid medical or violent certainty. |
| `cave / dark / forest / mountain` | home-place, generic-specific | Healthy but watch `home-place`, already a large cluster. Cave should mean hidden interior/depth. |
| `island / sea / ship / travel` | water-weather and home-place | Acceptable. Island should be isolation/own territory; sea/ship/travel remain helpers. |
| `volcano / fire / mountain / thunder` | nature-sky and water-weather | Acceptable. Keep wording about emotional pressure, not disaster prediction. |
| `crowd / stranger / festival / waiting` | relationship, generic-specific | Acceptable. Crowd should be many-viewpoints/social flow, not any stranger scene. |
| `whale / sea / water / fish` | water-weather, generic-specific | Healthy. Whale should remain specific large animal/deep emotion. |
| `fox / shrine / forest / dark` | nature-sky and home-place | Acceptable. Avoid over-broad one-character-only alias behavior in future edits. |
| `desert / sand / road / sun` | nature-sky and movement | Healthy. Desert should rank primary for explicit desert scenes. |

Batch-29 has no alias-duplicate warning-review-ok items. Its issues are only
classified one-way relation info records.

## Cluster Priorities Before 500

Priority is based on size, user-facing ambiguity, and likelihood of collision
with the next 20 motifs.

1. `object-record = 199`
   - Largest cluster. Next additions should avoid generic object aliases and use
     specific phrases.
2. `emotion-action = 183`
   - Many common verbs already exist. New action motifs should use representative
     inflection phrases only.
3. `relationship = 162`
   - Person-role motifs need clear role boundaries.
4. `body-appearance = 149`
   - Avoid diagnostic or appearance-judgment wording.
5. `home-place = 146`
   - Still large. New place motifs should be limited and strongly scoped.
6. `movement = 134`
   - New route/place/vehicle terms should clarify specific vs generic relation.
7. `water-weather = 120` and `nature-sky = 129`
   - Stable, but animal/nature additions should not overuse generic weak terms.
8. `communication = 66`
   - Smaller now, but dense. Avoid adding more SNS-like motifs until needed.

## Warning-Review-Ok Summary

| warning-review-ok type | count | policy |
|---|---:|---|
| alias-duplicate | 134 | Mostly known near-neighbor/generic-specific overlap. Keep reasoned and fixture-backed. |
| one-way-relation | 5 | Existing review-ok relation records. Do not mechanically make reciprocal. |

Representative alias duplicates to keep watching:

- `玄関`: `house / key / entrance`
- `先生`: `school / teacher`
- `同僚`: `friend / workplace / coworker`
- `駅で迷う`: `train / station`
- `傘をさす`: `rain / umbrella`
- `コメント`: communication-related overlap should remain fixture-backed.

## Dish / Plate Decision

`dish` and `plate` still share the display name `皿`. This is the only production
display-name duplicate detected.

Recommended Stage57 treatment:

- Fix before or during the next batch if tableware/kitchen-adjacent motifs are
  added.
- Preferred direction:
  - `dish`: dishes/tableware in a broad sense, washing/meal context.
  - `plate`: flat plate, serving/presentation context.
- Add one focused extraction fixture after changing display names or phrases.
- Do not delete either motif. The issue is naming and extraction clarity, not
  duplicate concept invalidity.

## Cemetery Decision

`cemetery` remains deferred.

Reason:

- It is high-stimulus and meaning can easily drift into death prediction or fear.
- Stage57 aims for a stable 480 to 500 expansion, so low-to-mid risk motifs are
  preferable.

Recommended treatment:

- Keep out of the Stage57 priority 20.
- If added later, create careful non-deterministic blocks, one dedicated fixture,
  and relation review with `death`, `funeral`, `grave`-like concepts if present.

## Stage57 Direction

Stage57 should be the 480 to 500 production addition stage. Use
`docs/next-20-candidate-review.md` as the candidate source, and keep these gates:

- registry total becomes 500
- error = 0
- warning-fix-soon <= 184 unless explicitly justified
- general count = 0
- stale-relation = 0
- `dish / plate` handling is decided before adding more tableware
