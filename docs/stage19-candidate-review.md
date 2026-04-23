# Stage19 候補レビュー（batch-11）

Stage19は、Stage18の軽監査と [stage19-plan.md](stage19-plan.md) を前提に、180 -> 200 モチーフ追加へ進むための候補レビューです。この文書では候補を確定しますが、実装は `batch-11` のデータ追加時に行います。

## 前提確認

- `AGENTS.md` を確認済み。
- `node_modules/next/dist/docs/` を確認済み。
  - `node_modules/next/dist/docs/index.md`
  - `node_modules/next/dist/docs/01-app/01-getting-started/02-project-structure.md`
  - `node_modules/next/dist/docs/01-app/02-guides/testing/index.md`
- Stage19候補レビュー時点では Next.js UI 実装ではなく、data / relation / fixture / test の実装準備として扱う。
- `home-place` は増やしすぎない。
- `communication` は主役差を崩さない。
- `comment / streaming / coworker / tears / concealing` は慎重に扱う。

## 現在値

```text
registry total: 180
relation total: 427

by cluster:
water-weather: 45
home-place: 96
movement: 47
communication: 54
relationship: 49
body-appearance: 38
emotion-action: 61
nature-sky: 22
object-record: 15
care-risk: 0
general: 0

by kind:
intentional-one-way: 10
should-be-reciprocal: 223
should-be-conflict: 2
generic-specific: 110
context-helper: 82
stale-relation: 0

general count: 0
```

validator summary:

```text
error: 0
warning-fix-soon: 188
warning-review-ok: 72
info: 431
```

## 選定基準

- 既存180件と重複しない。
- `warning-fix-soon <= 188` を維持しやすい。
- 1文字aliasを採用しない。
- 2文字以下のweak語だけに依存しない。
- `general count = 0` と `stale-relation = 0` を維持しやすい。
- `home-place` と `communication` を増やしすぎない。
- relation / fixture / audit で説明できる。

## カテゴリ配分

| category | target | selected | note |
|---|---:|---:|---|
| object-record | 5-6 | 6 | 180件時点で薄いため優先 |
| nature-sky / water-weather | 3-4 | 4 | 抽象語に寄りすぎない範囲で補強 |
| body-appearance | 3-4 | 4 | face / ear / mouth / breath を非診断で扱う |
| emotion-action | 3-4 | 4 | 活用形と近縁過検出に注意 |
| movement | 1-2 | 1 | transit-place化せず、移動手段として扱う |
| relationship | 1-2 | 1 | 前半へ寄せず、classmateのみ後半候補 |
| home-place | 0-2 | 0 | Stage19では追加しない |
| communication | 0-1 | 0 | Stage19では追加しない |

## 採用候補20件

### 前半10件

低リスクで、object-recordや自然系の補強として扱いやすいものを前半に置きます。

| order | id | name | category | review bucket | relation notes |
|:---:|---|---|---|---|---|
| 1 | `cup` | コップ | object | `next-addition-ready` | `water / kitchen / dish` と接続。飲む器として説明しやすい |
| 2 | `candle` | ろうそく | object | `next-addition-ready` | `fire / dark / shrine` と接続。光源として扱う |
| 3 | `blanket` | 毛布 | object | `next-addition-ready` | `sleep / house / baby` と接続。安心・保温の象徴 |
| 4 | `envelope` | 封筒 | object | `next-addition-ready` | `letter / gift / opening` と接続。中身が見えない記録 |
| 5 | `leaf` | 葉 | element | `next-addition-ready` | `tree / wind / forest` と接続。成長や変化の小さな単位 |
| 6 | `wave` | 波 | element | `next-addition-ready` | `sea / water / ship` と接続。感情の揺れとして説明可能 |
| 7 | `ice` | 氷 | element | `next-addition-ready` | `water / snow / cold-dark文脈`。冷えた感情として扱う |
| 8 | `face` | 顔 | body | `needs-audit` | `mirror / makeup / mask` と近い。自己像として非断定で扱う |
| 9 | `writing` | 書く | action | `next-addition-ready` | `pen / notebook / letter` と接続。記録・伝達の行動 |
| 10 | `dancing` | 踊る | action | `next-addition-ready` | `music / festival / body` と接続。表現・解放の行動 |

### 後半10件

近縁確認が必要な身体・行動・関係・移動の候補を後半に置きます。

| order | id | name | category | review bucket | relation notes |
|:---:|---|---|---|---|---|
| 11 | `scissors` | はさみ | object | `needs-audit` | `hair / clothes / breaking` と接続。切る行為への寄りすぎに注意 |
| 12 | `toy` | おもちゃ | object | `next-addition-ready` | `child / gift / game` と接続。遊び・記憶の物として扱う |
| 13 | `grass` | 草 | element | `next-addition-ready` | `park / garden / tree` と接続。自然の地面・小さな成長 |
| 14 | `ear` | 耳 | body | `needs-audit` | `voice / earphone / music` と接続。communication本体にはしない |
| 15 | `mouth` | 口 | body | `needs-audit` | `voice / teeth / eating文脈`。発話・食べる入口として扱う |
| 16 | `breath` | 呼吸 | body | `needs-audit` | `running / sleep / anxiety` と接続。医療断定を避ける |
| 17 | `swimming` | 泳ぐ | action | `needs-audit` | `water / sea / lake` と接続。水中移動と感情への没入 |
| 18 | `packing` | 荷造り | action | `next-addition-ready` | `bag / travel / forgetting` と接続。準備・持ち物整理 |
| 19 | `bicycle` | 自転車 | vehicle | `next-addition-ready` | `road / shoes / travel` と接続。自力で進む移動手段 |
| 20 | `classmate` | クラスメイト | person | `needs-audit` | `school / friend / teacher` と接続。relationshipは1件に抑える |

## 保留候補

| candidate | reason |
|---|---|
| `message` | `chat / email / comment / notification` と近すぎ、communicationの主役差を崩しやすい |
| `bedroom` | home-placeを増やすためStage19では見送り |
| `bathroom` | `toilet / water / cleaning / hot_spring` と近く、home-place増加にもつながる |
| `meeting` | `coworker / boss / workplace` と絡み、relationship/workplace周辺を前半へ寄せやすい |
| `customer` | `shop / restaurant / coworker` 周辺の人物・場所境界がやや広い |
| `medicine` | 医療的・ケア文脈が強く、非診断block設計を先に検討したい |
| `knife` | 高刺激・切断文脈が強く、`scissors` よりblockトーン管理が難しい |
| `bed` | sleep / house と近く、home-place補助に寄りやすい |
| `night` | `dark / moon / sleep` と近く、既存motifで十分補助できる |
| `message_app` | communication clusterが過密になるためStage19では採用しない |

## Stage18重点対象への影響

| target | Stage19 handling |
|---|---|
| `comment / streaming` | 新規communication候補を採用しないため、主役差を崩さない |
| `coworker` | relationship候補は `classmate` のみ。前半には入れず、workplaceとは直接つなげない |
| `tears` | `face / mouth / breath` の身体表現を追加するが、涙・泣く文脈とは直接混ぜすぎない |
| `concealing` | `scissors / envelope / packing` など物を扱う候補はあるが、隠す行動とは直接つなげない |
| `home-place` | home-place候補は採用しない。`cup / blanket` なども場所ではなく物として扱う |
| `communication` | `ear / mouth` は身体器官として扱い、communication clusterの追加候補にはしない |

## 実装前ゲート

- `warning-fix-soon <= 188`
- `general count = 0`
- `stale-relation = 0`
- relationship候補は1件のみ
- communication候補は0件
- home-place候補は0件
- 前半10件は `classmate / coworker / boss / friend / workplace` 周辺へ寄せない
- relation total の増減ではなく、全件分類済みかを確認する

## 実装順

前半:

1. `cup`
2. `candle`
3. `blanket`
4. `envelope`
5. `leaf`
6. `wave`
7. `ice`
8. `face`
9. `writing`
10. `dancing`

後半:

11. `scissors`
12. `toy`
13. `grass`
14. `ear`
15. `mouth`
16. `breath`
17. `swimming`
18. `packing`
19. `bicycle`
20. `classmate`

## 期待成果物

- `data/batches/batch-11/` の追加。
- `relationReview.ts` へのStage19候補の分類追加。
- `tests/fixtures/stage19.ts` と `tests/stage19-batch-11.test.ts` の追加。
- Stage19実装記録。
- `registry total: 200`。
- `warning-fix-soon <= 188`。
- `general count: 0`。
- `stale-relation: 0`。
