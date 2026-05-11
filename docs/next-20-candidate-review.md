# Next-20 Candidate Review For 500 Motifs

Last updated: 2026-05-10

This document is the Stage56 candidate review for the next production expansion
from 480 to 500 motifs. It replaces older next-20 notes that were based on much
smaller registry totals.

## Selection Principles

- Prefer low-to-mid risk motifs with explainable relation to existing motifs.
- Keep high-stimulus motifs out of the priority 20 unless there is a strong
  product reason.
- Avoid broad aliases. Use phrase-rich extraction for common words.
- Do not add production motifs without `motifs`, `aliases`, `questions`,
  `blocks`, relation review, and tests.
- Keep `warning-fix-soon <= 184`, `general count = 0`, and `stale-relation = 0`.

## Candidate Pool

| category | candidate id | display name | relation notes | risk |
|---|---|---|---|---|
| daily object | `remote_control` | リモコン | television / video / choosing | low |
| daily object | `water_bottle` | 水筒 | water / bag / travel | low |
| daily object | `toothbrush` | 歯ブラシ | teeth / washing / morning | low |
| daily object | `keyhole` | 鍵穴 | key / door / entrance | medium |
| daily object | `doormat` | 玄関マット | entrance / house / shoes | low |
| daily object | `trash_can` | ゴミ箱 | cleaning / tidying / throwing_away | low |
| daily object | `refrigerator` | 冷蔵庫 | kitchen / food / storage | low |
| daily object | `microwave` | 電子レンジ | kitchen / cooking / waiting | low |
| daily object | `kettle` | やかん | kitchen / water / fire | low |
| daily object | `laundry_basket` | 洗濯かご | washing / clothes / tidying | low |
| daily object | `charging_cable` | 充電ケーブル | charging / smartphone / battery_icon | medium |
| place/background | `living_room` | リビング | house / television / family | low |
| place/background | `bedroom` | 寝室 | sleep / blanket / pillow | low |
| place/background | `closet` | クローゼット | clothes / hiding / storage_room | medium |
| place/background | `garage` | ガレージ | car / house / storage_room | low |
| place/background | `bus_stop` | バス停 | bus / waiting / road | low |
| action | `receiving` | 受け取る | handing_over / gift / letter | low |
| action | `borrowing` | 借りる | relationships / object-record / debt feeling | medium |
| action | `lending` | 貸す | relationships / handing_over / trust | medium |
| action | `throwing_away` | 捨てる | tidying / loss / cleaning | medium |
| action | `buying` | 買う | shop / wallet / choosing | low |
| action | `paying` | 支払う | wallet / money / shop | low |
| action | `dropping` | 落とす | losing / falling / hand | medium |
| nature/animal | `rabbit` | うさぎ | animal / child / anxiety-gentleness | low |
| nature/animal | `frog` | カエル | rain / pond / transformation | low |
| nature/animal | `turtle` | 亀 | water / slow progress / selfDefense | low |
| nature/animal | `deer` | 鹿 | forest / shrine / gentleness | low |
| nature/animal | `bee` | 蜂 | insect / flower / warning tone | medium |
| nature/animal | `crow` | カラス | bird / dark / message tone | medium |
| person/role | `nurse` | 看護師 | hospital / care / recovery | medium |
| person/role | `grandparent` | 祖父母 | family / ancestor / nostalgia | low |
| person/role | `doctor` | 医者 | hospital / injury / diagnosis-risk | medium |
| high-stimulus deferred | `cemetery` | 墓地 | death / funeral / past | high |

## Priority 20

The priority set intentionally avoids `cemetery`. It also avoids tableware until
`dish / plate` is resolved.

| order | candidate id | display name | category | reason |
|---:|---|---|---|---|
| 1 | `remote_control` | リモコン | daily object | Clear relation to television/video with low emotional risk. |
| 2 | `water_bottle` | 水筒 | daily object | Useful daily object; relation to water/bag/travel is easy. |
| 3 | `toothbrush` | 歯ブラシ | daily object | Connects to teeth/morning/washing without being high risk. |
| 4 | `keyhole` | 鍵穴 | daily object | Good specific companion to key/door/entrance; needs phrase care. |
| 5 | `doormat` | 玄関マット | daily object | Low-risk threshold object; helps house/entrance scenes. |
| 6 | `trash_can` | ゴミ箱 | daily object | Supports cleaning/tidying/throwing-away dreams. |
| 7 | `refrigerator` | 冷蔵庫 | daily object | Kitchen storage motif; common and low risk. |
| 8 | `living_room` | リビング | place/background | Common home-place addition with family/television relation. |
| 9 | `bedroom` | 寝室 | place/background | Strong relation to sleep/pillow/blanket; low risk. |
| 10 | `closet` | クローゼット | place/background | Useful for clothes/hiding/storage, but needs phrase boundaries. |
| 11 | `garage` | ガレージ | place/background | Connects car/house/storage without overloading home-place too much. |
| 12 | `receiving` | 受け取る | action | Natural pair to handing_over/gift/letter. |
| 13 | `borrowing` | 借りる | action | Common relation/action motif; needs trust/obligation wording. |
| 14 | `lending` | 貸す | action | Complements borrowing and handing_over; good question design potential. |
| 15 | `throwing_away` | 捨てる | action | Useful for cleaning/loss/tidying; avoid overly decisive loss wording. |
| 16 | `rabbit` | うさぎ | nature/animal | Common, gentle animal motif with low risk. |
| 17 | `frog` | カエル | nature/animal | Connects rain/pond/transformation clearly. |
| 18 | `turtle` | 亀 | nature/animal | Useful slow-progress/protection motif. |
| 19 | `nurse` | 看護師 | person/role | Care/recovery role; avoid medical diagnosis language. |
| 20 | `grandparent` | 祖父母 | person/role | Family/ancestor/nostalgia relation is explainable and user-friendly. |

## Hold Candidates

| candidate id | reason to hold |
|---|---|
| `microwave` | Good candidate, but kitchen/object cluster can wait if refrigerator is added first. |
| `kettle` | Good candidate, but overlaps water/fire/kitchen; add after kitchen storage/cooking coverage is reviewed. |
| `laundry_basket` | Useful but close to washing/clothes/tidying; needs extraction fixture. |
| `charging_cable` | Good modern object, but charging/smartphone relation is already dense. |
| `bus_stop` | Good movement/place candidate; hold if Stage57 wants to limit place additions. |
| `buying` | Good shop/wallet action, but choose/pay/shop cluster should be reviewed first. |
| `paying` | Same as buying; money/wallet/shop overlap needs careful scoring. |
| `dropping` | Close to losing/falling/hand. Needs careful relation and conflict review. |
| `deer` | Good animal candidate, but less urgent than rabbit/frog/turtle. |
| `bee` | Medium risk because sting/fear interpretation can become sharp. |
| `crow` | Medium risk because dark/message omen tone can become too deterministic. |
| `doctor` | Useful but diagnosis-risk is higher than nurse. |
| `cemetery` | High-stimulus; defer to a dedicated care-risk stage. |

## Stage57 Implementation Notes

- Implement as 10 + 10.
- Put lower-risk daily objects and places in the first 10.
- Put relationship/action motifs that need more wording care in the second 10.
- Decide `dish / plate` handling before adding any new dish/tableware motif.
- Do not add `cemetery` in Stage57 unless the scope is explicitly revised.

## Stage57 Result

Stage57 implemented the priority 20 as `data/batches/batch-30/` and registered it
in production. The registry now has 500 motifs.

- `cemetery` remains deferred.
- `dish` / `plate` was clarified before the expansion: `dish` remains broad
  `皿`, while `plate` now displays as `平皿`.
- Detailed implementation and audit notes are in `docs/stage57-batch-30.md`.
