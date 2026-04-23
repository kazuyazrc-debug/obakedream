# Batch-04 Candidate Review

Stage5では `batch-04` をまだ実装しません。80モチーフ運用へ進む前に、候補30〜40件を粒度とカテゴリで整理し、優先20件を仮選定します。

## Category Distribution

| カテゴリ | 候補数 | 優先20件の目安 |
|---|---:|---:|
| 場所・施設 | 6 | 4 |
| 物・道具 | 6 | 4 |
| 感情・行動 | 5 | 3 |
| 身体・状態 | 5 | 3 |
| 自然・生き物 | 6 | 3 |
| 現代生活・連絡 | 4 | 2 |
| 危機・喪失 | 5 | 1 |

## Candidate Pool

| カテゴリ | 候補 |
|---|---|
| 場所・施設 | 駅、空港、ホテル、店、神社、墓地 |
| 物・道具 | 指輪、靴、かばん、傘、本、ノート |
| 感情・行動 | 探す、隠れる、待つ、忘れる、叫ぶ |
| 身体・状態 | 裸、怪我、声が出ない、目、眠れない |
| 自然・生き物 | 鳥、虫、花、木、星、雷 |
| 現代生活・連絡 | SNS、メール、パスワード、画面 |
| 危機・喪失 | 迷子、盗まれる、壊れる、閉じ込められる、なくす |

## Priority 20

| 優先候補 | カテゴリ | 仮採用理由 |
|---|---|---|
| 駅 | 場所・施設 | 既存のtrain/bus/travelとrelationを作りやすい |
| 空港 | 場所・施設 | 旅行より大きい移行や出発の象徴として差別化できる |
| ホテル | 場所・施設 | 一時滞在、仮の居場所としてhouseと差別化できる |
| 神社 | 場所・施設 | 願い、節目、守りの象徴として占い面を作りやすい |
| 指輪 | 物・道具 | 関係性、約束、結びつきとして恋愛派生を広げすぎず扱える |
| 靴 | 物・道具 | 移動、役割、準備の象徴としてroad/travelと接続できる |
| かばん | 物・道具 | 持ち物、責任、抱えているものを扱いやすい |
| 傘 | 物・道具 | rainとのrelationが明確で、守りや境界を表現しやすい |
| 探す | 感情・行動 | key/wallet/houseなど既存motifと複合しやすい |
| 隠れる | 感情・行動 | being_chased/forest/selfDefenseと相性が良い |
| 待つ | 感情・行動 | notification/phone/clockとrelationを作りやすい |
| 裸 | 身体・状態 | clothes/mirror/workplaceとの対比が明確 |
| 怪我 | 身体・状態 | blood/hospital/fightingと近いが、痛みや保護の象徴に寄せられる |
| 声が出ない | 身体・状態 | phone/apologizing/communication系の未表出と接続できる |
| 鳥 | 自然・生き物 | flying/skyとのrelationを持ちつつ自由や知らせを扱える |
| 雷 | 自然・生き物 | rain/fire/windと近いが、衝撃や急変に寄せられる |
| 星 | 自然・生き物 | moon/sky/sunと近いが、希望や遠い目標として差別化できる |
| SNS | 現代生活・連絡 | smartphone/notificationより社会的反応と見られ方に寄せられる |
| メール | 現代生活・連絡 | letter/notificationとの中間として、遅延した連絡を扱える |
| 迷子 | 危機・喪失 | road/school/childhood_homeと複合しやすく、未解決感を扱いやすい |

## Deferred Candidates

| 保留候補 | 理由 |
|---|---|
| 店 | workplace/houseほど頻出ではあるが意味の核をもう少し絞りたい |
| 墓地 | deathと近いため高刺激・喪失表現のレビュー後に回す |
| 本 | letter/photoと記録カテゴリで競合するためbatch整理後に扱う |
| ノート | school/examと近く、alias競合を確認してから扱う |
| 忘れる | memory系の抽象度が高く、actionとしての粒度を検討する |
| 叫ぶ | fear/fighting/fireと近く、感情行動batchで扱う方がよい |
| 目 | mirror/body系と近く、身体カテゴリの整理後に扱う |
| 眠れない | 夢そのものとのメタ構造があるため慎重に扱う |
| 虫 | animalカテゴリ拡張時にまとめる |
| 花 | nature/life-event系で意味を深めてから扱う |
| 木 | forestと近いため自然カテゴリの再整理後に扱う |
| パスワード | keyと近いが現代生活カテゴリの粒度整理後に扱う |
| 画面 | smartphone/photo/mirrorと競合しやすいためalias設計を先に詰める |
| 盗まれる | wallet/keyと近いが危機・喪失カテゴリを分けて扱う |
| 壊れる | 多くのmotifに付く状態なので、独立motif化は慎重にする |
| 閉じ込められる | being_chased/elevator/houseと近く、specific/generic関係を要整理 |
| なくす | wallet/key/photoと近く、独立actionにするか個別質問で扱うか検討する |

## Selection Rules For Stage6

- 新規20件は実装前に `phrase` を最低3件ずつ用意する
- 1文字aliasは追加しない
- weak語だけで意味が成立しない候補は、phrase中心で設計する
- 既存60件とのrelationを先に書いてからblocksを書く
- 高刺激候補は医療・法律・災害判断に読める断定表現を避ける
