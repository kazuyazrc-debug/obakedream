# Registry Map

Last updated: 2026-05-10

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
| registered production batches | 29 |
| production motif count | 480 |
| registered production range | batch-01 through batch-29 |
| unregistered batch folders | none |
| motif id duplicates in production | 0 |
| display name duplicates found | 1 |
| all batch-folder motif count including drafts | 480 |

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

## Encoding Note

Some older batch files and README sections contain mojibake text. Do not rewrite
large text blocks solely for encoding cleanup during motif additions. Treat that
as a separate editorial/data-cleanup stage.
