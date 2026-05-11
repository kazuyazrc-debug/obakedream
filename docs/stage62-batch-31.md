# Stage62 Batch-31 Implementation Note

Last updated: 2026-05-11

Stage62 expands the production registry from 500 to 520 motifs. The production
source of truth remains `data/batches/index.ts`.

## Final 20 Motifs

| group | motif id | role |
|---|---|---|
| first 10 | `microwave` | kitchen object; warming / short waiting |
| first 10 | `kettle` | kitchen-water object; heat and preparation |
| first 10 | `laundry_basket` | washing / clothes / tidying bridge |
| first 10 | `charging_cable` | device-support object; connection and recovery |
| first 10 | `shampoo_bottle` | washing / hair / self-care object |
| first 10 | `bus_stop` | movement place; waiting before shared travel |
| first 10 | `bakery` | shop place; small comfort and choice |
| first 10 | `deer` | gentle animal; distance and sensitivity |
| first 10 | `squirrel` | small animal; preparation and storing |
| first 10 | `returning` | action; returning borrowed or held things |
| second 10 | `mirror_cabinet` | self-presentation object; mirror/makeup bridge |
| second 10 | `post_office` | communication place; sending and receiving |
| second 10 | `playground` | low-risk place; play and recovery |
| second 10 | `buying` | action; selecting and accepting value |
| second 10 | `paying` | action; responsibility and exchange |
| second 10 | `asking` | action; seeking confirmation |
| second 10 | `answering` | action; returning a response |
| second 10 | `bee` | animal/insect; small stimulus and caution |
| second 10 | `cousin` | person role; near-but-not-immediate family |
| second 10 | `coach` | person role; practice and guidance |

## Relation Coverage

Batch-31 relation groups were added to `relationReview` so the new motifs remain
classified. Priority watch clusters for Stage63:

- `microwave / kettle / kitchen / cooking / waiting`
- `laundry_basket / washing / clothes / tidying`
- `charging_cable / charging / smartphone / battery_icon`
- `bus_stop / bus / waiting / road`
- `buying / paying / wallet / shop`
- `asking / answering / voice / teacher / exam`
- `cousin / family / childhood_home / grandparent`
- `coach / teacher / mentor / boss`

## Numeric Snapshot

| item | value |
|---|---:|
| registry total | 520 |
| relation total | 1407 |
| general count | 0 |
| warning-fix-soon | 184 |
| warning-review-ok | 138 |
| stale-relation | 0 |

### By Cluster

| cluster | count |
|---|---:|
| water-weather | 135 |
| home-place | 184 |
| movement | 138 |
| communication | 73 |
| relationship | 177 |
| body-appearance | 153 |
| emotion-action | 207 |
| nature-sky | 136 |
| object-record | 201 |
| care-risk | 3 |
| general | 0 |

### By Kind

| kind | count |
|---|---:|
| intentional-one-way | 82 |
| should-be-reciprocal | 213 |
| should-be-conflict | 1 |
| generic-specific | 969 |
| context-helper | 142 |
| stale-relation | 0 |

## Added Fixture / Test Coverage

- `tests/fixtures/stage62.ts`
- `tests/stage62-batch-31.test.ts`

Coverage includes:

- registry count 520
- warning gate stability
- Stage62 relation classification outside `general` and `stale-relation`
- extraction audit fixtures for new motifs and close neighbors
- representative dream composition for post-office, playground, and bee cases

## Stage63 Audit Focus

Stage63 should be a light audit before the next expansion:

1. Review `emotion-action = 207`, now the largest active cluster.
2. Review `object-record = 201` after adding several daily objects.
3. Review `home-place = 184`, especially bakery / post office / playground as
   places that should not behave like home interiors.
4. Check `asking / answering` against communication motifs so they do not overtake
   phone/chat/email scenes.
5. Check `bee` tone so it stays cautionary without becoming ominous.
