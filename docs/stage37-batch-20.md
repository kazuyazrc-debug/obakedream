# Stage37 batch-20 implementation

## Preconditions
- AGENTS.md checked.
- `node_modules/next/dist/docs/index.md` checked.
- Stage37 is not a Next.js UI change.
- Stage37 adds `batch-20` motifs plus minimal fixture / audit support only.

## Goal
Stage37 expands the registry from 360 to 380 motifs while keeping:
- `warning-fix-soon <= 184`
- `general count = 0`
- `stale-relation = 0`

Stage36 audit findings are carried forward by keeping the risky work in the back half and by
keeping extraction-improvement items separate from the 20 adopted motifs.

## Adopted motifs
Front 10:
- `willow`
- `lotus`
- `butterfly`
- `dragonfly`
- `owl`
- `paper_bag`
- `coin_purse`
- `corkboard`
- `measuring_tape`
- `ink_pad`

Back 10:
- `ticket_machine`
- `departure_board`
- `platform_clock`
- `cursor`
- `battery_icon`
- `mute_button`
- `nape`
- `eyelid`
- `hesitating`
- `backing_away`

## Gate checks
After front 10:
- `registry total = 370`
- `npm.cmd test` passed
- `error = 0`
- `warning-fix-soon <= 184`
- `general count = 0`
- `stale-relation = 0`

After back 10:
- `registry total = 380`
- `npm.cmd test` passed
- `npm.cmd run lint` passed
- `npm.cmd run build` passed
- all relations classified
- `general count = 0`
- `stale-relation = 0`

## Relation handling
Stage37 extends `relationReview.ts` in these areas:
- `priorityClusterIds`
- `genericSpecificGroups`
- `reciprocalCandidateGroups`
- `classifyRelationCluster`

Cluster intent:
- `willow / lotus / butterfly / dragonfly / owl`: `nature-sky`
- `paper_bag / coin_purse / corkboard / measuring_tape / ink_pad`: `object-record`
- `ticket_machine / departure_board / platform_clock`: `movement`
- `cursor / battery_icon / mute_button`: `object-record` with digital-object boundary checks
- `nape / eyelid`: `body-appearance`
- `hesitating / backing_away`: `emotion-action`

The direct-neighbor guardrails remain unchanged:
- avoid direct `comment -> sns`
- avoid direct `coworker -> workplace`

## Fixture and audit coverage
Added Stage37 fixtures cover:
- front-half nature extraction
- front-half object extraction
- station / late / platform boundary behavior
- digital-object boundary behavior
- body-appearance non-diagnostic behavior
- real-dream comparison cases for `being_late`, `exam`, `ex_partner`, `making_mistake`,
  `being_chased`, `train -> car`, `hallway -> school`, and anger colloquialisms

## Expected Stage38 audit focus
- `generic-specific`
- `object-record`
- `movement`
- `body-appearance`
- `emotion-action`
- station-side movement boundaries
- digital-object boundaries
- non-diagnostic body-appearance copy
- real-dream comparison continuity
