# Stage57 Batch-30 Implementation Note

Last updated: 2026-05-11

Stage57 expands the production registry from 480 to 500 motifs. The production
source of truth remains `data/batches/index.ts`.

## Final 20 Motifs

| group | motif id | role |
|---|---|---|
| first 10 | `remote_control` | low-risk daily object; relation to television/video |
| first 10 | `water_bottle` | daily object; relation to water/bag/travel |
| first 10 | `toothbrush` | daily object; relation to teeth/washing/morning |
| first 10 | `keyhole` | threshold object; relation to key/door/entrance |
| first 10 | `doormat` | threshold object; relation to entrance/house/shoes |
| first 10 | `trash_can` | daily object; relation to cleaning/tidying/throwing-away |
| first 10 | `refrigerator` | kitchen storage; relation to kitchen/cooking/storage |
| first 10 | `living_room` | home-place; relation to house/television/family |
| first 10 | `bedroom` | home-place; relation to sleep/blanket/pillow |
| first 10 | `garage` | home-place/storage; relation to car/house/storage-room |
| second 10 | `closet` | storage-place; relation to clothes/hiding/storage-room |
| second 10 | `receiving` | action; relation to handing-over/gift/letter |
| second 10 | `borrowing` | action; relation to lending/receiving/obligation |
| second 10 | `lending` | action; relation to borrowing/handing-over/trust |
| second 10 | `throwing_away` | action; relation to trash-can/tidying/cleaning |
| second 10 | `rabbit` | animal; relation to child/family/grass |
| second 10 | `frog` | animal; relation to rain/pond/water |
| second 10 | `turtle` | animal; relation to water/pond/self-defense |
| second 10 | `nurse` | person role; relation to hospital/recovery |
| second 10 | `grandparent` | family role; relation to family/ancestor/past |

## Dish / Plate Handling

Stage57 lightly resolved the previous display-name duplicate without deleting or
renaming motif ids:

- `dish` keeps the broad display name `皿`.
- `plate` now displays as `平皿`.
- `plate` extraction terms were narrowed toward flat-plate and serving contexts.

Do not add new tableware motifs until Stage58 confirms that broad dish scenes and
flat-plate scenes still rank as expected.

## Relation Coverage

Batch-30 relation groups were added to `relationReview` so new one-way relation
records remain classified. The most important watch clusters for Stage58 are:

- `keyhole` / `key` / `door` / `entrance`
- `trash_can` / `throwing_away` / `cleaning` / `tidying`
- `living_room` / `bedroom` / `garage` / `closet` in the large home-place cluster
- `receiving` / `borrowing` / `lending` / `handing_over`
- `nurse` / `hospital` / `recovery`
- `grandparent` / `family` / `ancestor`

## Numeric Snapshot

| item | value |
|---|---:|
| registry total | 500 |
| relation total | 1347 |
| general count | 0 |
| warning-fix-soon | 184 |
| warning-review-ok | 138 |
| stale-relation | 0 |

### By Cluster

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

### By Kind

| kind | count |
|---|---:|
| intentional-one-way | 83 |
| should-be-reciprocal | 216 |
| should-be-conflict | 1 |
| generic-specific | 904 |
| context-helper | 143 |
| stale-relation | 0 |

## Stage58 Audit Focus

Stage58 should be a light audit before any 500-plus expansion:

- Confirm `home-place` growth remains understandable after adding living room,
  bedroom, garage, and closet.
- Verify `dish` / `plate` no longer appears as a user-facing display duplicate.
- Check action relation behavior for receiving, borrowing, lending, and
  throwing-away.
- Confirm `nurse` wording stays non-diagnostic.
- Confirm `grandparent` wording does not imply bad omens or death.
