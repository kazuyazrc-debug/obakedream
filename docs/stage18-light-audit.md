# Stage18 180モチーフ軽監査メモ

Stage18は、180モチーフ到達後にすぐ次の20件追加へ進まず、relation / warning / fixture / audit の説明可能性を整える軽監査フェーズです。新規motif追加、Next.js UI変更、DB化、AI API導入、fuzzy search / N-gram / 本格形態素解析の導入は行いません。

## 前提確認

- `AGENTS.md` を確認済み。
- `node_modules/next/dist/docs/` を確認済み。
  - `node_modules/next/dist/docs/index.md`
  - `node_modules/next/dist/docs/01-app/01-getting-started/02-project-structure.md`
  - `node_modules/next/dist/docs/01-app/02-guides/testing/index.md`
- Stage18は Next.js UI 実装ではなく、relation / warning / fixture / audit の監査フェーズとして扱う。
- そのため、Next.js 固有変更、routing変更、Server Component / Client Component の変更は今回の対象外。

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

## Stage18の目的

- `home-place = 96` の内訳をdocs上で整理する。
- `communication = 54` の役割差を再固定する。
- `generic-specific = 110` のレビュー優先順位を作る。
- `warning-review-ok = 72` の理由カテゴリと許容条件を再確認する。
- Stage17追加の `comment / streaming / coworker / tears / concealing` 周辺を重点監査する。
- 180 -> 200 の追加候補は実装せず、next-20候補の再棚卸しだけ行う。

## やること / やらないこと

やること:

- `home-place` の補助ラベルをdocs上で整理する。
- `communication` の主役判定をdocs上で固定する。
- `generic-specific` と `warning-review-ok` の管理観点を整理する。
- fixture / audit / test の不足観点を候補として列挙する。
- next-20候補を `next-addition-ready / needs-audit / hold` に再分類する方針を作る。

やらないこと:

- 新規motif / alias / question / block の追加。
- 180 -> 200 の本実装。
- UI全面改修。
- DB化。
- AI API導入。
- fuzzy search / N-gram / 本格形態素解析の導入。
- `warning-fix-soon` を188より増やす変更。
- `general count` または `stale-relation` を増やす変更。

## 軽監査の優先順位

| priority | target | reason |
|:---:|---|---|
| 1 | `comment / streaming / sns / chat / notification / video` | communicationが密になっており、主役差の説明が必要 |
| 2 | `entrance / childhood_home / house / door / shoes` | home-placeの境界例で、直接neighborを避けた判断の再確認が必要 |
| 3 | `coworker / workplace / boss / friend` | relationshipと職場文脈が混ざりやすい |
| 4 | `tears / crying` | 近縁が強く、alias重複や主役入れ替わりが起きやすい |
| 5 | `concealing / hiding` | 隠す行動と隠れる状態の差分が弱くなりやすい |
| 6 | `generic-specific = 110` | 件数増加よりも、cluster別に説明可能かを確認する必要がある |
| 7 | `warning-review-ok = 72` | 許容警告を理由カテゴリ付きで維持する必要がある |

## home-place 監査方針

`home-place = 96` は最大clusterです。Stage18では新規cluster追加やコード上の分類変更は行わず、docs上の補助ラベルで内訳を見えるようにします。

補助ラベル候補:

| label | scope | example motifs | note |
|---|---|---|---|
| `living-place` | 生活・滞在の場所 | `house / kitchen / garden / storage_room` | 家や生活空間に寄るもの |
| `public-place` | 公共・店舗・施設 | `shop / cafe / restaurant / cinema / hospital / school` | 目的を持って訪れる場所 |
| `threshold-place` | 境界・入口・通過点 | `entrance / door / window / hallway` | 内外や場面転換の境界 |
| `viewing-place` | 見る・見られる場所 | `mirror / cinema / rooftop / window` | 自己像や視界の文脈を持つ場所 |
| `storage-place` | 保管・隠す場所 | `storage_room / shelf / box` | 物の所在や隠蔽と接続しやすい |
| `memory-place` | 過去・記憶の場所 | `childhood_home / school / shrine` | 思い出や過去文脈に寄る場所 |
| `transit-place` | 移動途中・乗り換え・通過の場所 | `station / airport / parking_lot / hallway` | Stage18では検討メモに留め、コード上のclusterやkindにはしない |

監査観点:

- `entrance` は `house` の単純な下位概念にせず、境界・出入りの場として扱う。
- `childhood_home` は記憶・過去の場所として、一般的な `house` とは役割を分ける。
- `door / shoes / key` は場所そのものではなく、境界や出入りの文脈補助として見る。
- `storage_room / shelf / box` は `home-place` と `object-record` をまたぐため、保管・探索・隠蔽のどれが主役かを見る。
- `transit-place` は `movement` と `home-place` の境界を考えるための補助候補に留める。Stage18では実装判断に使わない。

## communication 監査方針

`communication = 54` は `comment / streaming` の追加で密になりました。Stage18では、通信系motifの役割差を次のように固定します。

| motif | primary role | boundary |
|---|---|---|
| `sns` | 公開性・外部反応・投稿空間 | `comment` や `streaming` の上位受け皿にしすぎない |
| `chat` | 個別会話・直接のやりとり | 公開反応ではなく相手との交換を主役にする |
| `comment` | 投稿や発言への反応 | `sns` そのものではなく、反応・評価・残された言葉として扱う |
| `streaming` | 配信場面・公開中の視聴体験 | `video` ではなく、リアルタイム性と視聴者反応を主役にする |
| `notification` | 反応待ち・知らせ | 内容ではなく、気づく/待つ/届く感覚を主役にする |
| `video` | 視覚コンテンツ・再生視聴 | 公開場や反応よりも、見る内容を主役にする |

Stage17で採用した `comment -> sns` の直接neighbor回避は維持します。`streaming` も `video / sns / notification` と近いものの、weak-only抽出を強めすぎないよう、追加relationよりもfixtureで境界を確認する方針にします。

## generic-specific / warning-review-ok 管理方針

`generic-specific = 110` は件数自体を問題にしません。Stage18では、次の順でレビューします。

| priority | target pattern | review point |
|:---:|---|---|
| 1 | `home-place`内のgeneric-specific | 場所の上位/下位だけでなく、記憶・境界・通過点が混ざっていないか |
| 2 | `communication`内のgeneric-specific | 端末、場、反応、内容が混ざっていないか |
| 3 | `relationship`内のgeneric-specific | 人物、場所、評価者、友人性が混ざっていないか |
| 4 | `body-appearance`内のgeneric-specific | 身体状態、外見、自己像、感情表現が混ざっていないか |
| 5 | `object-record`内のgeneric-specific | 道具、記録、保管、贈与が混ざっていないか |

`warning-review-ok = 72` は理由カテゴリ付きで維持します。許容条件は次の通りです。

- 既存fixtureで主役が入れ替わっても壊れない。
- relationで説明できる。
- 短語aliasや1文字aliasを増やさない。
- `warning-fix-soon = 188` を超えない。
- 許容理由をdocsに残せる。
- 分類不能な警告は次の追加前に `needs-audit` 扱いにする。

## fixture / audit / test 拡張方針

Stage18ではテストやfixtureを追加しません。次Stageで追加する場合の候補だけを整理します。

| id draft | purpose |
|---|---|
| `stage18-comment-streaming-sns-boundary` | コメント、配信、SNSの主役差を確認する |
| `stage18-streaming-video-notification-boundary` | 配信を動画視聴と通知待ちから切り分ける |
| `stage18-entrance-childhood-home-house-boundary` | 玄関、実家、家の境界を確認する |
| `stage18-entrance-door-shoes-boundary` | 玄関をドアや靴の文脈補助から切り分ける |
| `stage18-coworker-workplace-boss-friend-boundary` | 同僚を職場、上司、友人から切り分ける |
| `stage18-tears-crying-boundary` | 涙を泣く行動から切り分ける |
| `stage18-concealing-hiding-boundary` | 隠す行動と隠れる状態を切り分ける |
| `stage18-storage-room-shelf-box-boundary` | 倉庫、棚、箱の保管文脈を確認する |

テスト拡張を行う場合も、Stage18では計画に留めます。追加対象は次Stageの承認後に、既存の `tests/fixtures/stage17.ts` と `tests/stage17-batch-10.test.ts` の形式に合わせます。

## next-20候補見直し方針

Stage18では next-20 を実装しません。候補整理だけにします。

分類:

| bucket | condition |
|---|---|
| `next-addition-ready` | relation / alias / fixture が説明しやすく、`warning-fix-soon` を増やしにくい |
| `needs-audit` | 近縁motifが濃く、fixtureで主役差を確認してから採用したい |
| `hold` | short alias、過密cluster、意味幅の広さ、既存抑制への影響が強い |

見直し観点:

- `home-place` は96まで増えているため、場所系候補は追加圧を下げる。
- `communication` は54まで増えているため、現代通信系候補は慎重に扱う。
- `object-record` は15と薄いが、短語aliasに頼る候補は避ける。
- `generic-specific` をさらに増やす候補は、理由をdocs化できるものだけ候補に残す。
- `warning-fix-soon = 188` を増やす可能性がある候補は `hold` に回す。

## 実装順序

Stage18で実装に進む場合の順序は次の通りです。ただし、この文書作成時点ではコード変更を行いません。

1. Stage18監査メモを作成する。
2. 現在値を固定形式で記録する。
3. `home-place = 96` の補助ラベル候補を整理する。
4. `communication = 54` の主役差を再固定する。
5. `generic-specific = 110` のレビュー優先順位を作る。
6. `warning-review-ok = 72` の許容条件を再確認する。
7. fixture / audit / test の不足観点を候補として列挙する。
8. next-20候補の再分類方針をまとめる。
9. Stage19以降で追加フェーズに進むかレビューする。

## リスクと回避策

| risk | mitigation |
|---|---|
| `home-place` が大きくなり、場所なら何でも同じに見える | 補助ラベルで内訳を説明し、Stage18ではコード上のcluster追加をしない |
| `transit-place` が新cluster案として先走る | Stage18では検討メモに限定し、実装判断やrelation分類には使わない |
| `communication` で `comment / streaming / sns / chat / video` が混ざる | 主役差をdocsで固定し、追加relationよりfixture候補で境界を見る |
| `coworker` が `workplace` のweak-only抽出を強める | Stage17の直接neighbor回避を維持し、`boss / friend` との関係性で見る |
| `tears / crying` と `concealing / hiding` の差分が弱い | 次Stageではfixtureで主役差を先に確認する |
| `warning-review-ok = 72` が理由不明になる | 全件を既存カテゴリに寄せ、分類不能なら `needs-audit` にする |
| next-20候補整理が追加実装へ流れる | Stage18の成果物を監査メモと候補分類方針に限定する |

## 期待成果物

- Stage18軽監査メモ。
- 180件時点の固定数値ブロック。
- `home-place` のdocs補助ラベル候補。
- `transit-place` の検討メモ。
- `communication` の役割差再定義。
- `generic-specific / warning-review-ok` の管理方針。
- fixture / audit / test の不足観点リスト。
- next-20候補の再棚卸し方針。
- Stage19以降で追加フェーズに進むか判断するためのレビュー材料。
