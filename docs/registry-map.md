# Registry Map

Last updated: 2026-05-11

This document is the current map for the production motif registry. Historical
stage documents are snapshots from their own stage and may mention older totals
such as 140, 160, or 400. For current implementation work, use this document and
`data/batches/index.ts` as the source of truth.

## Production Rule

- Production registry means only batches imported and listed in `data/batches/index.ts`.
- Directories under `data/batches/` that are not listed in `data/batches/index.ts` are draft,
  orphan, or pending data.
- Do not count unregistered batch folders as production.
- Do not register a batch unless `motifs.ts`, `aliases.ts`, `questions.ts`, `blocks.ts`,
  and tests are ready.

## Current Snapshot

| item | value |
|---|---:|
| registered production batches | 31 |
| production motif count | 520 |
| registered production range | batch-01 through batch-31 |
| unregistered batch folders | none |
| motif id duplicates in production | 0 |
| display name duplicates found | 0 |
| all batch-folder motif count including drafts | 520 |

## Batch Map

| batch | production | motif count | role/category summary | aliases | questions | blocks | test coverage | notes |
|---|---:|---:|---|---:|---:|---:|---|---|
| batch-01 | yes | 20 | action 4, person 3, animal 3 | 20 | 21 | 20 | generic validation/regression | One extra question entry exists; validator accepts it. |
| batch-02 | yes | 20 | place 8, element 5, object 3 | 20 | 20 | 20 | generic validation/regression | complete |
| batch-03 | yes | 20 | object 7, action 4, element 3 | 20 | 20 | 20 | generic validation/regression | complete |
| batch-04 | yes | 20 | object 6, action 4, place 4 | 20 | 20 | 20 | generic validation/regression | complete |
| batch-05 | yes | 20 | object 6, action 5, place 4 | 20 | 20 | 20 | generic validation/regression | complete |
| batch-06 | yes | 20 | object 6, action 5, place 5 | 20 | 20 | 20 | generic validation/regression | complete |
| batch-07 | yes | 10 | body 3, object 2, person 1 | 10 | 10 | 10 | generic validation/regression | complete |
| batch-08 | yes | 10 | action 2, object 2, place 2 | 10 | 10 | 10 | generic validation/regression | complete |
| batch-09 | yes | 20 | object 8, action 4, place 4 | 20 | 20 | 20 | relation-classification plus generic tests | complete |
| batch-10 | yes | 20 | object 5, action 4, place 3 | 20 | 20 | 20 | stage17-batch-10.test.ts | complete |
| batch-11 | yes | 20 | object 6, action 4, body 4 | 20 | 20 | 20 | stage19-batch-11.test.ts | complete |
| batch-12 | yes | 20 | object 9, action 7, body 3 | 20 | 20 | 20 | stage21-batch-12.test.ts | complete |
| batch-13 | yes | 20 | object 12, action 4, element 2 | 20 | 20 | 20 | stage23-batch-13.test.ts | complete |
| batch-14 | yes | 20 | object 17, element 3 | 20 | 20 | 20 | stage25-batch-14.test.ts | complete |
| batch-15 | yes | 20 | object 13, element 6, body 1 | 20 | 20 | 20 | stage27-batch-15.test.ts | complete |
| batch-16 | yes | 20 | object 12, element 7, place 1 | 20 | 20 | 20 | stage29-batch-16.test.ts | complete |
| batch-17 | yes | 20 | object 10, element 5, action 2 | 20 | 20 | 20 | stage31-batch-17.test.ts | complete |
| batch-18 | yes | 20 | object 11, element 5, body 2 | 20 | 20 | 20 | stage33-batch-18.test.ts | complete |
| batch-19 | yes | 20 | object 12, element 4, body 2 | 20 | 20 | 20 | stage35-batch-19.test.ts | complete |
| batch-20 | yes | 20 | object 11, animal 3, action 2 | 20 | 20 | 20 | stage37-batch-20.test.ts | complete |
| batch-21 | yes | 20 | object 10, action 4, element 3 | 20 | 20 | 20 | stage39-batch-21.test.ts | complete |
| batch-22 | yes | 10 | person 10 | 10 | 10 | 10 | stage41-batch-22.test.ts | complete |
| batch-23 | yes | 10 | person 10 | 10 | 10 | 10 | stage43-batch-23.test.ts | complete |
| batch-24 | yes | 11 | person 11 | 11 | 11 | 11 | stage45-batch-24.test.ts | complete |
| batch-25 | yes | 10 | life-event 4, element 3, action 3 | 10 | 10 | 10 | stage47-batch-25.test.ts | complete |
| batch-26 | yes | 10 | life-event 7, action 2, element 1 | 10 | 10 | 10 | stage49-batch-26.test.ts | complete |
| batch-27 | yes | 10 | action 4, life-event 3, place 1 | 10 | 10 | 10 | stage51-batch-27.test.ts | complete |
| batch-28 | yes | 10 | animal 5, person 3, object 1 | 10 | 10 | 10 | stage53-batch-28.test.ts | complete |
| batch-29 | yes | 9 | place 4, animal 2, object 1, person 1, vehicle 1 | 9 | 9 | 9 | stage55-batch-29.test.ts | Stage55 production completion. `cemetery` was deferred to avoid adding a high-stimulus motif as the one-item count correction. |
| batch-30 | yes | 20 | object 7, place 4, action 4, animal 3, person 2 | 20 | 20 | 20 | stage57-batch-30.test.ts | Stage57 production expansion from 480 to 500 motifs. |
| batch-31 | yes | 20 | object 6, place 4, action 5, animal 3, person 2 | 20 | 20 | 20 | stage62-batch-31.test.ts | Stage62 production expansion from 500 to 520 motifs. |

## Batch-29 Status

`data/batches/batch-29/` is now imported by `data/batches/index.ts` and is part of
production. The production version contains nine motifs:

- `airplane`
- `sword`
- `cave`
- `island`
- `volcano`
- `crowd`
- `whale`
- `fox`
- `desert`

The earlier draft also contained `cemetery`, but it remains deferred. Add it only
in a future reviewed stage with careful wording, fixtures, and relation coverage.

## Batch-30 Status

`data/batches/batch-30/` is imported by `data/batches/index.ts` and is part of
production. It contains the Stage57 expansion set:

- `remote_control`
- `water_bottle`
- `toothbrush`
- `keyhole`
- `doormat`
- `trash_can`
- `refrigerator`
- `living_room`
- `bedroom`
- `garage`
- `closet`
- `receiving`
- `borrowing`
- `lending`
- `throwing_away`
- `rabbit`
- `frog`
- `turtle`
- `nurse`
- `grandparent`

Stage57 also clarified `dish` / `plate`: `dish` remains the broad display label
`皿`, while `plate` now displays as `平皿` and uses flat-plate-specific extraction
terms.

## Stage56 Audit Note

Stage56 confirmed the 480-motif production state before the next expansion:

- registry total: 480
- relation total: 1291
- error: 0
- warning-fix-soon: 184
- warning-review-ok: 139
- general count: 0
- stale-relation: 0

The detailed audit and next expansion candidate review are recorded in:

- `docs/stage56-audit.md`
- `docs/next-20-candidate-review.md`

## Stage57 Expansion Note

Stage57 reached the 500-motif production target:

- registry total: 500
- error: 0
- warning-fix-soon: 184
- relation total: 1347
- general count: 0
- stale-relation: 0

The detailed implementation notes are recorded in:

- `docs/stage57-batch-30.md`

## Stage58 Audit Note

Stage58 confirmed the 500-motif production state after the batch-30 expansion:

- registry total: 500
- relation total: 1347
- error: 0
- warning-fix-soon: 184
- warning-review-ok: 138
- general count: 0
- stale-relation: 0

The detailed audit is recorded in:

- `docs/stage58-audit.md`

## Stage61 Candidate Review Note

Stage61 did not change production registry data. It reviewed the next candidate
pool for the future 500 to 520 expansion and recorded a priority 20 plus hold
candidates in:

- `docs/stage61-next-20-candidate-review.md`

## Stage62 Expansion Note

Stage62 implemented the Stage61 priority 20 as `data/batches/batch-31/` and
expanded production to 520 motifs:

- registry total: 520
- relation total: 1407
- error: 0
- warning-fix-soon: 184
- warning-review-ok: 138
- general count: 0
- stale-relation: 0

The detailed implementation notes are recorded in:

- `docs/stage62-batch-31.md`

## Encoding Note

Some older batch files and README sections contain mojibake text. Do not rewrite
large text blocks solely for encoding cleanup during motif additions. Treat that
as a separate editorial/data-cleanup stage.
