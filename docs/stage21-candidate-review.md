# Stage21 候補レビュー（batch-12）

Stage21は、Stage20軽監査を前提に、200 -> 220 モチーフ追加へ進むための候補レビューです。実装対象は `batch-12` とし、Next.js UI変更、DB化、AI API導入、fuzzy search / N-gram / 本格形態素解析、relation自動双方向化は行いません。

## 前提確認

- `AGENTS.md` を確認済み。
- `node_modules/next/dist/docs/` を確認済み。
  - `node_modules/next/dist/docs/index.md`
- Stage21は Next.js UI 実装ではなく、data / relation / fixture / test / docs の追加フェーズとして扱う。
- Stage20軽監査で整理した `home-place / communication / relationship` の抑制方針を維持する。
- `comment -> sns` の直接 neighbor 回避を維持する。
- `coworker -> workplace` の直接 neighbor 回避を維持する。

## 現在値

```text
registry total: 200
relation total: 487

by cluster:
water-weather: 56
home-place: 102
movement: 51
communication: 59
relationship: 53
body-appearance: 50
emotion-action: 69
nature-sky: 26
object-record: 21
care-risk: 0
general: 0

by kind:
intentional-one-way: 10
should-be-reciprocal: 266
should-be-conflict: 2
generic-specific: 132
context-helper: 77
stale-relation: 0

general count: 0
```

validator summary:

```text
error: 0
warning-fix-soon: 188
warning-review-ok: 88
info: 499
```

## 選定基準

- 既存200件と重複しない。
- `next-addition-ready` を前半へ優先する。
- `needs-audit` は後半へ寄せ、fixtureで境界を確認する。
- `hold` は採用しない。
- `home-place` 候補は採用しない。
- `communication` 候補は採用しない。
- `relationship` 候補は採用しない。
- 1文字aliasを採用しない。
- 2文字以下のweak語だけに依存しない。
- `warning-fix-soon <= 188`、`general count = 0`、`stale-relation = 0` を維持しやすい。

## カテゴリ配分

| category | target | selected | note |
|---|---:|---:|---|
| object-record | 7-8 | 8 | Stage20で補強余地が確認されたため、前半中心に採用 |
| body-appearance | 4-5 | 5 | `scar` を含むが、非診断・非断定fixtureで支える |
| emotion-action | 5-6 | 6 | `concealing / hiding` に寄らない行動を中心にする |
| nature-sky | 1 | 1 | `seed` のみ。home-placeへ寄せない |
| movement | 0-1 | 0 | `climbing` は行動として扱い、移動場所候補にはしない |
| communication | 0 | 0 | `singing` はcommunicationではなく表現行動として扱う |
| relationship | 0 | 0 | `classmate / coworker / workplace` 周辺は追加しない |
| home-place | 0 | 0 | 場所候補は採用しない |

## 採用候補20件

### 前半10件

| order | id | name | category | review bucket | relation notes |
|:---:|---|---|---|---|---|
| 1 | `seed` | 種 | element | `next-addition-ready` | `leaf / tree / flower` と接続。小さな始まりとして扱う |
| 2 | `soap` | 石けん | object | `next-addition-ready` | `cleaning / water / towel` と接続。bathroom候補にはしない |
| 3 | `pillow` | 枕 | object | `next-addition-ready` | `sleep / blanket / breath` と接続。bedroom候補にはしない |
| 4 | `rope` | ロープ | object | `next-addition-ready` | `hand / climbing / falling` と接続。tyingは後半から接続する |
| 5 | `painting` | 絵 | object | `next-addition-ready` | `face / mirror / past` と接続。記録・自己像のobject |
| 6 | `button` | ボタン | object | `next-addition-ready` | `clothes / choosing / opening` と接続。小さな操作として扱う |
| 7 | `towel` | タオル | object | `next-addition-ready` | `water / cleaning / soap` と接続。bathroom候補にはしない |
| 8 | `coin` | 硬貨 | object | `next-addition-ready` | `wallet / shop / choosing` と接続。小さな価値として扱う |
| 9 | `folding` | たたむ | action | `next-addition-ready` | `clothes / tidying / blanket` と接続。整理行動として扱う |
| 10 | `climbing` | 登る | action | `next-addition-ready` | `stairs / mountain / rope` と接続。場所ではなく行動 |

### 後半10件

| order | id | name | category | review bucket | relation notes |
|:---:|---|---|---|---|---|
| 11 | `brush` | ブラシ | object | `needs-audit` | `hair / cleaning / mirror` と接続。外見・手入れのobject |
| 12 | `scarf` | マフラー | object | `needs-audit` | `clothes / wind / hat` と接続。防衛の装いとして扱う |
| 13 | `forehead` | 額 | body | `needs-audit` | `face / hair / hand` と接続。非診断のbody motif |
| 14 | `back` | 背中 | body | `needs-audit` | `carrying / pain / hand` と接続。負担の象徴として扱う |
| 15 | `scar` | 傷跡 | body | `needs-audit` | `injury / past / mirror` と接続。非診断・非断定を徹底 |
| 16 | `carrying` | 運ぶ | action | `needs-audit` | `bag / hand / packing` と接続。負担や移動の行動 |
| 17 | `singing` | 歌う | action | `needs-audit` | `mouth / breath / dancing` と接続。communication本体にはしない |
| 18 | `reading` | 読む | action | `needs-audit` | `book / notebook / writing` と接続。理解する行動 |
| 19 | `washing` | 洗う | action | `needs-audit` | `cleaning / water / towel` と接続。bathroom候補にはしない |
| 20 | `tying` | 結ぶ | action | `needs-audit` | `rope / hand / packing` と接続。concealing / hiding へ寄せない |

## 保留候補

| candidate | reason |
|---|---|
| `message` | `chat / email / comment / notification` と近く、communicationの主役差を崩しやすい |
| `meeting` | `coworker / boss / workplace / classmate` と絡み、relationshipと場所が混ざりやすい |
| `bedroom` | home-placeを増やしやすく、`sleep / blanket / house` と近い |
| `bathroom` | `toilet / water / cleaning / soap` と近く、home-place増加につながる |
| `customer` | `shop / restaurant / coworker` にまたがり、人物と場所の境界が広い |
| `medicine` | 医療的・ケア文脈が強く、非診断block設計が先に必要 |
| `knife` | 高刺激・切断文脈が強く、`scissors` よりトーン管理が難しい |
| `message_app` | communication clusterが過密になるため採用しない |
| `office_room` | `workplace / boss / coworker / meeting` と近く、職場系が前半に寄りすぎる |
| `secret` | `concealing / hiding / password / envelope` と広く、行動と内容が混ざる |
| `cry_face` | `tears / crying / face` の合成で足り、主役差を壊しやすい |

## 実装前ゲート

- 前半10件後: `registry total = 210`
- 後半10件後: `registry total = 220`
- `warning-fix-soon <= 188`
- `general count = 0`
- `stale-relation = 0`
- relation total の増減ではなく、全件分類済みかを確認する。
- `scar` は専用fixtureを最低2件入れる。
