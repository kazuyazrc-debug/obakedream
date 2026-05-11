# Stage61 Next-20 Candidate Review After 500 Motifs

Last updated: 2026-05-11

Stage61 is a planning and review stage after reaching 500 production motifs. It
does not add motifs, register a new batch, change extraction logic, change UI,
or change drink recommendation behavior.

## Preconditions Checked

- `AGENTS.md` was checked first.
- `node_modules/next/dist/docs/index.md` was checked before making any judgment in
  this Next.js project.
- Production registry source of truth remains `data/batches/index.ts`.
- Stage58 and Stage60 notes were reviewed before choosing candidates.

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

## Selection Principles

- Do not add more motifs in Stage61.
- Avoid another place-heavy batch because `home-place = 166`.
- Avoid broad object aliases because `object-record = 200`.
- Keep new action motifs phrase-led because `emotion-action = 195`.
- Keep person-role motifs narrow because `relationship = 170`.
- Keep high-stimulus candidates out of the priority 20 unless a dedicated
  care-risk stage is planned.
- Do not add new tableware motifs until `dish` / `plate` extraction is observed
  after the Stage57 clarification.

## Candidate Pool

| category | candidate id | display name | relation notes | risk |
|---|---|---|---|---|
| daily object | `microwave` | 電子レンジ | kitchen / cooking / waiting | low |
| daily object | `kettle` | やかん | kitchen / water / fire | low |
| daily object | `laundry_basket` | 洗濯かご | washing / clothes / tidying | low |
| daily object | `charging_cable` | 充電ケーブル | charging / smartphone / battery_icon | medium |
| daily object | `shampoo_bottle` | シャンプーボトル | bathroom / hair / washing | low |
| daily object | `mirror_cabinet` | 鏡台 | mirror / cosmetics / bathroom | medium |
| daily object | `sponge` | スポンジ | cleaning / kitchen / washing | low |
| daily object | `cutting_board` | まな板 | kitchen / cooking / knife-like caution without weapon tone | medium |
| daily object | `shopping_bag` | 買い物袋 | shop / bag / buying | low |
| daily object | `doorbell` | 呼び鈴 | entrance / notification / visitor | medium |
| daily object | `mailbox` | 郵便受け | letter / entrance / waiting | medium |
| daily object | `receipt_box` | レシート入れ | receipt / wallet / tidying | low |
| place/background | `bus_stop` | バス停 | bus / waiting / road | low |
| place/background | `clinic` | クリニック | hospital / nurse / recovery | medium |
| place/background | `pharmacy` | 薬局 | medicine / nurse / recovery | medium |
| place/background | `bakery` | パン屋 | shop / food / morning | low |
| place/background | `bank` | 銀行 | money / wallet / paying | medium |
| place/background | `post_office` | 郵便局 | letter / sending / receiving | low |
| place/background | `playground` | 遊び場 | child / park / family | low |
| place/background | `roof` | 屋根 | house / sky / height | medium |
| place/background | `attic` | 屋根裏 | house / storage / past | medium |
| place/background | `basement` | 地下室 | house / dark / hiding | medium |
| place/background | `laundromat` | コインランドリー | washing / clothes / waiting | low |
| action | `buying` | 買う | shop / wallet / choosing | low |
| action | `paying` | 支払う | wallet / money / shop | low |
| action | `dropping` | 落とす | losing / falling / hand | medium |
| action | `returning` | 返す | borrowing / lending / apology | low |
| action | `exchanging` | 交換する | receiving / handing_over / relationships | medium |
| action | `asking` | 尋ねる | question / communication / uncertainty | low |
| action | `answering` | 答える | voice / communication / exam | low |
| action | `helping` | 手伝う | family / workplace / recovery | low |
| action | `refusing_help` | 助けを断る | selfDefense / relationship / boundary | medium |
| nature/animal | `deer` | 鹿 | forest / shrine / gentleness | low |
| nature/animal | `bee` | 蜂 | insect / flower / warning tone | medium |
| nature/animal | `crow` | カラス | bird / dark / message tone | medium |
| nature/animal | `squirrel` | リス | tree / storing / small preparation | low |
| nature/animal | `meadow` | 草原 | grass / park / openness | low |
| nature/animal | `pond_bank` | 池のほとり | pond / water / waiting | low |
| person/role | `doctor` | 医師 | hospital / injury / diagnosis-risk | medium |
| person/role | `pharmacist` | 薬剤師 | pharmacy / medicine / recovery | medium |
| person/role | `baker` | パン屋の人 | bakery / shop / food | low |
| person/role | `coach` | コーチ | teacher / mentor / training | medium |
| person/role | `cousin` | いとこ | family / childhood_home / relative memory | low |
| person/role | `pet` | ペット | dog / cat / family / care | medium |

## Priority 20 For Stage62

The priority 20 intentionally avoids high-stimulus candidates and avoids adding
more home-place interiors. It includes only a small number of person-role motifs
and keeps object additions specific.

| order | candidate id | category | reason |
|---:|---|---|---|
| 1 | `microwave` | daily object | Common kitchen object; relation to cooking/waiting is explainable. |
| 2 | `kettle` | daily object | Low-risk water/kitchen/fire-adjacent object. |
| 3 | `laundry_basket` | daily object | Useful washing/clothes/tidying bridge without adding a new room. |
| 4 | `charging_cable` | daily object | Modern device-support motif; keep distinct from charging/smartphone. |
| 5 | `shampoo_bottle` | daily object | Bathroom/hair/washing relation is concrete and low risk. |
| 6 | `mirror_cabinet` | daily object | Useful bridge for mirror/cosmetics/bathroom; needs phrase care. |
| 7 | `bus_stop` | place/background | Movement-place motif with clear bus/waiting relation. |
| 8 | `bakery` | place/background | Low-risk shop/food/morning motif. |
| 9 | `post_office` | place/background | Communication-adjacent place with clear letter/sending relation. |
| 10 | `playground` | place/background | Child/park/family bridge, but not a home-place interior. |
| 11 | `buying` | action | Natural shop/wallet/choosing action; phrase-led extraction needed. |
| 12 | `paying` | action | Money/wallet/shop action; avoid financial prediction wording. |
| 13 | `returning` | action | Complements borrowing/lending without broadening too much. |
| 14 | `asking` | action | Communication/uncertainty action; low stimulus. |
| 15 | `answering` | action | Communication/exam/voice bridge; keep distinct from phone/chat. |
| 16 | `deer` | nature/animal | Gentle forest/shrine animal motif with low risk. |
| 17 | `squirrel` | nature/animal | Preparation/storing motif; good relation to tree/small object scenes. |
| 18 | `bee` | nature/animal | Useful insect/flower motif; keep caution tone soft. |
| 19 | `cousin` | person/role | Family-adjacent but narrower than generic family/relative. |
| 20 | `coach` | person/role | Teacher/mentor/training bridge; needs boundary from teacher/boss. |

### Suggested 10 + 10 Grouping

First 10 should be low-risk and concrete:

1. `microwave`
2. `kettle`
3. `laundry_basket`
4. `charging_cable`
5. `shampoo_bottle`
6. `bus_stop`
7. `bakery`
8. `deer`
9. `squirrel`
10. `returning`

Second 10 need more relation or wording care:

11. `mirror_cabinet`
12. `post_office`
13. `playground`
14. `buying`
15. `paying`
16. `asking`
17. `answering`
18. `bee`
19. `cousin`
20. `coach`

## Hold Candidates

| candidate id | reason to hold |
|---|---|
| `clinic` | Care-risk/medical wording should be reviewed with `hospital`, `nurse`, and `doctor`. |
| `pharmacy` | Similar care-risk and medicine-adjacent wording concerns. |
| `doctor` | Useful but diagnosis-risk is higher than `nurse`; needs dedicated non-diagnostic wording. |
| `pharmacist` | Add only with `pharmacy` or medicine-cluster review. |
| `bank` | Money/financial interpretation can sound predictive; hold for a finance/money cluster stage. |
| `roof` | House/height/sky relation can become broad; hold until home-place audit. |
| `attic` | Home-place/storage/past relation is useful but adds to dense home-place cluster. |
| `basement` | Dark/hiding/home-place overlap needs careful tone. |
| `laundromat` | Good candidate, but washing/clothes cluster should be checked after `laundry_basket`. |
| `sponge` | Very close to cleaning/washing/kitchen; hold until object-record audit. |
| `cutting_board` | Kitchen object, but knife/cutting associations need wording care. |
| `shopping_bag` | Good, but should follow `buying` behavior rather than lead it. |
| `doorbell` | Entrance/notification/visitor relation is useful but cross-cluster. |
| `mailbox` | Letter/entrance/waiting relation overlaps with post office. |
| `receipt_box` | Receipt/wallet/tidying is narrow; less urgent than core daily motifs. |
| `dropping` | Close to losing/falling/hand; needs conflict/ranking fixtures. |
| `exchanging` | Near receiving/handing_over/borrowing/lending; add after action cluster audit. |
| `helping` | Relationship/action motif can become broad. |
| `refusing_help` | Boundary/self-defense wording is useful but more interpretive. |
| `crow` | Medium omen-tone risk; avoid deterministic dark-message language. |
| `meadow` | Low risk but lower priority than more frequent animals/actions. |
| `pond_bank` | Close to pond/water/waiting; can wait until water-weather audit. |
| `baker` | Good if `bakery` works, but not needed in the same first expansion. |
| `pet` | Broad umbrella over dog/cat/family; needs generic/specific design before adding. |

## Stage62 Gate Proposal

Stage62 should be the 500 to 520 production addition stage only after reviewing
this document.

Required gates:

- registry total becomes 520
- error = 0
- warning-fix-soon <= 184 unless explicitly justified
- general count = 0
- stale-relation = 0
- Stage57 / Stage58 / Stage60 fixtures and QA assumptions remain intact
- `npm.cmd test`
- `npm.cmd run lint`
- `npm.cmd run build`

## Stage62 Result

Stage62 implemented the priority 20 as `data/batches/batch-31/` and registered
it in production. The registry now has 520 motifs.

Detailed implementation and audit notes are in:

- `docs/stage62-batch-31.md`
