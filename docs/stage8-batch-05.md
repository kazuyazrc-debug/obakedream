# Stage8 Batch-05 実装メモ

Stage8では、Stage7で整理した relation / warning 基盤を前提に、`batch-05` として20モチーフを追加しました。目的は100モチーフ到達時点でも、抽出・relation・warning・fixture/test運用が破綻しないことを確認することです。

## 追加モチーフ

前半10件:

| id | 表示名 | 主なカテゴリ |
|---|---|---|
| `shop` | 店 | place |
| `library` | 図書館 | place |
| `park` | 公園 | place |
| `parking_lot` | 駐車場 | place |
| `book` | 本 | object |
| `notebook` | ノート | object |
| `box` | 箱 | object |
| `door` | ドア | object |
| `picking_up` | 拾う | action |
| `choosing` | 選ぶ | action |

後半10件:

| id | 表示名 | 主なカテゴリ |
|---|---|---|
| `opening` | 開ける | action |
| `screaming` | 叫ぶ | action |
| `forgetting` | 忘れる | action |
| `eye` | 目 | body |
| `trembling` | 震える | body |
| `flower` | 花 | element |
| `tree` | 木 | element |
| `fish` | 魚 | animal |
| `password` | パスワード | object |
| `chat` | チャット | object |

## Relation 整理

- `door / key / opening / box / house` は、境界・手段・開示行動の近縁として扱います。`door` と `opening` は過剰抑制せず、文脈が明示される場合は併存させます。
- `password / key / smartphone / sns` は generic-specific と communication context の両方にまたがるため、`password` をデジタルアクセス寄りに定義しました。
- `chat / sns / email / phone` は near-neighbor として併存を基本にします。`chat` は短いやりとり、`sns` は公開性、`email` は文書性で読み分けます。
- `fish / sea / water / river` は水系の具体motifとして整理しました。現状の抽出では `sea` が明示される場合に generic な `water` が抑制されるケースをfixtureで固定しています。
- `eye / mirror / stranger / photo` は視線・自己像・見られ方のクラスタとして扱います。
- `screaming / voiceless / being_chased / fighting` と `trembling / thunder / injury / voiceless` は高刺激・診断的表現を避けるレビュー対象として扱います。

## Alias 運用

- `priorityKeywords` を phrase、`aliases` を alias、`secondaryKeywords` を weak として扱います。
- 各motifに phrase を3件以上入れています。
- 1文字aliasは追加していません。
- 2文字以下のweak語は追加していません。
- `店`、`花`、`木`、`魚`、`目` のような短語に依存しやすいmotifは、文脈つきphraseや2文字以上のaliasを優先しています。
- includes抽出の活用形差分を吸収するため、`店で商品を選んだ`、`花が咲き`、`チャットの返事を待ち` など、fixtureで確認した文脈phraseを追加しています。

## 高刺激・扱い注意motif

`screaming`、`eye`、`trembling` は診断・断定に見える表現を避け、心理象徴として扱います。

- `screaming`: 実際の危険断定ではなく、伝えたい思いや緊張の象徴として扱う。
- `eye`: 監視や評価を断定せず、見る/見られる感覚として扱う。
- `trembling`: 医療判断に読める表現を避け、緊張や慎重さの象徴として扱う。

## Fixture / Test

代表夢fixtureにStage8ケースを14件追加しました。

- `stage8-shop-library-book`
- `stage8-park-flower-tree`
- `stage8-parking-lot-car-searching`
- `stage8-door-key-opening-box`
- `stage8-picking-up-wallet-ring`
- `stage8-choosing-road-clothes`
- `stage8-screaming-voiceless-chased`
- `stage8-forgetting-clock-email`
- `stage8-eye-mirror-stranger`
- `stage8-trembling-thunder-injury`
- `stage8-fish-water-sea`
- `stage8-password-smartphone-key`
- `stage8-chat-sns-email`
- `stage8-notebook-school-exam`

extraction auditにはStage8 relationケースを7件追加しました。

- `stage8-door-key-opening`
- `stage8-password-smartphone-key`
- `stage8-chat-sns-email`
- `stage8-fish-water-sea`
- `stage8-trembling-careful-tone`
- `stage8-eye-mirror-stranger`
- `stage8-weak-only-flower`

## Validator 結果

Stage8完了時点:

| severity | count |
|---|---:|
| error | 0 |
| warning-fix-soon | 189 |
| warning-review-ok | 34 |
| info | 185 |

`warning-fix-soon <= 189` を維持しています。Stage8追加分では、短語aliasやweak-only過剰ヒットを増やさない方針を優先しました。

## 100 Motif Gate

- registry total: 100
- 前半10件追加後: registry 90、`warning-fix-soon` 189、test/lint/build pass
- 後半10件追加後: registry 100、`warning-fix-soon` 189、test/lint/build pass
