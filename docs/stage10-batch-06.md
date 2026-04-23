# Stage10 Batch-06 実装メモ

Stage10では、Stage9で整えた抽出監査・relation・warning基盤をゲートにして、`batch-06` として20モチーフを追加しました。目的は120モチーフ到達時点でも、warning / relation / extraction / fixture / test 運用が破綻しないことを確認することです。

## 追加モチーフ

前半10件:

| id | 表示名 | category |
|---|---|---|
| `restaurant` | レストラン | place |
| `cafe` | カフェ | place |
| `convenience_store` | コンビニ | place |
| `map` | 地図 | object |
| `ticket` | 切符 | object |
| `cinema` | 映画館 | place |
| `crossroad` | 交差点 | place |
| `window` | 窓 | object |
| `desk` | 机 | object |
| `chair` | 椅子 | object |

後半10件:

| id | 表示名 | category |
|---|---|---|
| `running` | 走る | action |
| `cleaning` | 掃除する | action |
| `tidying` | 片付ける | action |
| `losing` | 失くす | action |
| `handing_over` | 渡す | action |
| `cloud` | 雲 | element |
| `rainbow` | 虹 | element |
| `insect` | 虫 | animal |
| `charging` | 充電 | object |
| `calendar` | カレンダー | time |

## Relation 整理

- `restaurant / cafe / convenience_store / shop / wallet` は、受け取る・選ぶ・支払う場所として近縁管理します。
- `map / crossroad / road / choosing / lost` は、方向確認・分岐・選択のクラスタとして扱います。
- `ticket / station / train / travel` は、移動そのものではなく「通過する条件・準備」のobjectとして定義します。
- `desk / chair / school / workplace / notebook` は、学び・作業・席・役割のクラスタとして扱います。
- `losing / lost / wallet / key / bag / ticket / phone` は、喪失感・準備不足・見つからなさの象徴として扱います。
- `charging / smartphone / notification / cafe` は、通信ではなく回復・補給の文脈で整理します。
- `cloud / rainbow / sky / rain / sun` は、天候・見通し・回復のクラスタとして扱います。

## 扱い注意motif

### losing

`losing` は実際の事故や紛失を断定せず、喪失感・準備不足・見つからなさの象徴として扱います。

専用fixture:

- `stage10-losing-wallet-dedicated`
- `stage10-losing-ticket-dedicated`

### insect

`insect` は不安を煽りすぎず、小さな違和感や注意したいサインとして扱います。不吉断定はしません。

## 活用形の扱い

phrase追加で救った代表例:

| motif | phrase |
|---|---|
| `running` | `駅まで走って`、`走った夢` |
| `cleaning` | `部屋を掃除して`、`掃除した夢` |
| `tidying` | `片付けている`、`片付けた夢` |
| `losing` | `財布を失くして`、`切符を失くして` |
| `handing_over` | `手渡した夢` |

未対応に残す例:

| expression | reason |
|---|---|
| `気持ちだけが先走る` | 比喩表現のためStage10では拾わない |
| `心を洗い流したい` | 掃除するmotifへ寄せすぎず未対応に残す |

## 追加fixture

代表夢fixture:

- `stage10-restaurant-friend`
- `stage10-cafe-window-friend`
- `stage10-convenience-ticket-wallet`
- `stage10-map-crossroad-choosing`
- `stage10-cinema-ticket`
- `stage10-desk-chair`
- `stage10-running-train-late`
- `stage10-cleaning-tidying-house`
- `stage10-losing-wallet-searching`
- `stage10-losing-ticket-station`
- `stage10-handing-over-letter`
- `stage10-cloud-rainbow-sky`
- `stage10-insect-house`
- `stage10-charging-smartphone`
- `stage10-calendar-schedule`

extraction audit fixture:

- `stage10-ticket-station-travel`
- `stage10-map-crossroad-choice`
- `stage10-running-inflection-rescued`
- `stage10-cleaning-tidying-neighbor`
- `stage10-losing-wallet-dedicated`
- `stage10-losing-ticket-dedicated`
- `stage10-insect-careful-tone`
- `stage10-charging-smartphone-context`
- `stage10-unhandled-running-paraphrase`
- `stage10-unhandled-cleaning-paraphrase`

## Validator 結果

Stage10完了時点:

| severity | count |
|---|---:|
| error | 0 |
| warning-fix-soon | 189 |
| warning-review-ok | 47 |
| info | 248 |

`warning-fix-soon <= 189` を維持しています。

Relation summary:

| item | count |
|---|---:|
| total one-way relations | 248 |
| one-way info relations | 243 |
| one-way warning relations | 5 |
| general cluster | 3 |

## Gate

- 前半10件: registry 110、`warning-fix-soon = 189`、test pass
- 後半10件: registry 120、`warning-fix-soon = 189`、test pass
