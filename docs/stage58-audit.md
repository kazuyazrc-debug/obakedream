# Stage58 500 Motif Light Audit

Last updated: 2026-05-11

Stage58 is a light audit after reaching 500 production motifs. It does not add
motifs, change extraction logic, change scoring, change UI behavior, or change
drink recommendation behavior.

## Preconditions Checked

- `AGENTS.md` was checked first.
- `node_modules/next/dist/docs/index.md` was checked before making any judgment in
  this Next.js project.
- This stage is registry / relation / alias / fixture / docs audit only.
- Production registry source of truth remains `data/batches/index.ts`.

## Current Numbers

| item | count |
|---|---:|
| registry total | 500 |
| relation total | 1347 |
| general count | 0 |
| warning-fix-soon | 184 |
| warning-review-ok | 138 |
| stale-relation | 0 |
| error | 0 |

by cluster:

| cluster | count |
|---|---:|
| water-weather | 128 |
| home-place | 166 |
| movement | 135 |
| communication | 69 |
| relationship | 170 |
| body-appearance | 150 |
| emotion-action | 195 |
| nature-sky | 131 |
| object-record | 200 |
| care-risk | 3 |
| general | 0 |

by kind:

| kind | count |
|---|---:|
| intentional-one-way | 83 |
| should-be-reciprocal | 216 |
| should-be-conflict | 1 |
| generic-specific | 904 |
| context-helper | 143 |
| stale-relation | 0 |

## Stage57 / Batch-30 Audit

All batch-30 relation records are classified. No `general` or `stale-relation`
records were found for Stage57 motifs.

| focus area | audit result | Stage59+ note |
|---|---|---|
| `remote_control / television / video` | Classified and stable. | Keep remote-control as operation/control, not generic media. |
| `water_bottle / water / bag / travel` | Classified and stable. | Avoid broad water aliases that make bottle too generic. |
| `keyhole / key / door / entrance` | Classified and stable. | Keep keyhole as a narrow threshold detail. |
| `trash_can / throwing_away / cleaning / tidying` | Classified and stable. | Watch action/object ranking in cleanup dreams. |
| `living_room / bedroom / garage / closet` | Classified, but `home-place` grew to 166. | Audit home-place before another place-heavy batch. |
| `receiving / borrowing / lending / handing_over` | Classified and stable. | Future action motifs should use narrow phrase coverage. |
| `rabbit / frog / turtle` | Classified and stable. | Animal additions remain low-risk if aliases stay specific. |
| `nurse / hospital / recovery` | Classified and stable. | Keep non-diagnostic wording. |
| `grandparent / family / ancestor` | Classified and stable. | Avoid bad-omen or death-prediction wording. |

## Dish / Plate Follow-Up

Stage57 resolved the user-facing display-name duplicate:

- `dish` remains the broad `皿` motif.
- `plate` now displays as `平皿`.
- No duplicate display names remain in production.

Stage58 does not further edit tableware data. Before adding more tableware
motifs, add a focused fixture that checks broad dish scenes against flat-plate
serving scenes.

## Warning-Review-Ok Summary

`warning-review-ok` is now 138, down from 139 at the 480-motif audit. This is
acceptable and does not require immediate cleanup.

Continue treating `warning-review-ok` as allowed only when the reason is
explainable as one of:

- known alias overlap between near-neighbor motifs
- generic-specific overlap with fixture coverage
- intentional context-helper relation
- historical one-way relation retained for compatibility

## Stage59 Direction

Stage59 is already reserved for the mobile background ghost adjustment. It should
not add motifs or change registry behavior.

Implementation guardrails for Stage59:

- Keep `registry total = 500`.
- Keep `warning-fix-soon <= 184`.
- Keep `general count = 0`.
- Keep `stale-relation = 0`.
- Touch only the floating ghost component/CSS needed for mobile visibility.
- Run `npm.cmd test`, `npm.cmd run lint`, and `npm.cmd run build` after UI changes.

## Stage60+ Registry Direction

Before the next motif expansion, review these clusters:

1. `object-record = 200`
   - This is the largest cluster and should avoid broad object aliases.
2. `emotion-action = 195`
   - New action motifs should use representative inflection phrases only.
3. `relationship = 170`
   - Person-role additions need clear role boundaries.
4. `home-place = 166`
   - Avoid another place-heavy batch until home-place relation density is reviewed.

No new motif candidates are selected in Stage58.
