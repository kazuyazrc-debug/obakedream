# Stage39 batch-21 implementation

## Preconditions
- AGENTS.md checked.
- `node_modules/next/dist/docs/index.md` checked.
- Stage39 is not a Next.js UI change.
- Stage39 adds `batch-21` motifs plus minimal fixture / audit support only.

## Goal
Stage39 expands the registry from 380 to 400 motifs while keeping:
- `warning-fix-soon <= 184`
- `general count = 0`
- `stale-relation = 0`

This is the final planned addition batch before the project shifts toward polish, UI confirmation,
and provisional release checks.

## Adopted motifs
Front 10:
- `camellia`
- `ivy`
- `firefly`
- `lily_pad`
- `sparrow`
- `binder_clip`
- `sketchbook`
- `stamp_sheet`
- `hourglass`
- `paperweight`

Back 10:
- `station_map`
- `route_sign`
- `search_bar`
- `signal_bar`
- `volume_slider`
- `collarbone`
- `flinching`
- `tiptoeing`
- `holding_back`
- `double_checking`

## Gate checks
After front 10:
- `registry total = 390`
- `npm.cmd test` passed
- `error = 0`
- `warning-fix-soon <= 184`
- `general count = 0`
- `stale-relation = 0`

After back 10:
- `registry total = 400`
- `npm.cmd test` passed
- `npm.cmd run lint` passed
- `npm.cmd run build` passed
- all relations classified
- `general count = 0`
- `stale-relation = 0`

## Relation handling
Stage39 extends `relationReview.ts` in these areas:
- `priorityClusterIds`
- `genericSpecificGroups`
- `reciprocalCandidateGroups`
- `classifyRelationCluster`

Cluster intent:
- `camellia / ivy / firefly / lily_pad / sparrow`: `nature-sky`
- `binder_clip / sketchbook / stamp_sheet / hourglass / paperweight`: `object-record`
- `station_map / route_sign`: `movement`
- `search_bar / signal_bar / volume_slider`: `object-record` with digital-object boundary checks
- `collarbone`: `body-appearance`
- `flinching / tiptoeing / holding_back / double_checking`: `emotion-action`

The direct-neighbor guardrails remain unchanged:
- avoid direct `comment -> sns`
- avoid direct `coworker -> workplace`

## Fixture and audit coverage
Added Stage39 fixtures cover:
- front-half nature extraction
- front-half object extraction
- station-side movement boundary behavior
- digital-object boundary behavior
- body-appearance non-diagnostic behavior
- real-dream comparison cases for `being_late`, `exam`, `ex_partner`, `making_mistake`,
  `being_chased`, `train -> car`, `hallway -> school`, and anger colloquialisms

## After 400 motifs
Stage40 should not be another addition batch.
The next pass should focus on:
- cluster explanation cleanup,
- UI confirmation,
- provisional release checks,
- real-dream audit review continuity,
- and non-diagnostic copy quality.
