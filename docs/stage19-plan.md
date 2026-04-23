# Stage19 実装計画書（180 -> 200）

Stage19は、Stage18の軽監査メモを前提に、180モチーフから200モチーフへ拡張するための実装計画フェーズです。この文書では実装順序、候補選定条件、監査ゲートを固定します。まだ `batch-11` のmotif / alias / question / block追加には入りません。

## 前提確認

- `AGENTS.md` を確認済み。
- `node_modules/next/dist/docs/` を確認済み。
  - `node_modules/next/dist/docs/index.md`
  - `node_modules/next/dist/docs/01-app/01-getting-started/02-project-structure.md`
  - `node_modules/next/dist/docs/01-app/02-guides/testing/index.md`
- Stage19計画時点では Next.js UI 実装ではなく、180 -> 200追加前の計画・候補整理として扱う。
- そのため、Next.js 固有変更、routing変更、Server Component / Client Component の変更は今回の対象外。
- Stage18承認条件をStage19の前提資料として使う。

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

## Stage19の目的

- `batch-11` 相当の20件追加に入る前に、候補選定条件を固定する。
- `home-place` を増やしすぎない候補配分にする。
- `communication` の主役差を崩さない候補設計にする。
- `comment / streaming / coworker / tears / concealing` 周辺を慎重に扱い、追加候補やfixtureに影響を反映する。
- `warning-fix-soon = 188`、`general count = 0`、`stale-relation = 0` を維持する。
- relation total の増減ではなく、分類済みか・説明可能かを重視する。

## やること / やらないこと

やること:

- Stage18の監査条件をStage19の実装前ゲートとして固定する。
- 20件候補を `next-addition-ready / needs-audit / hold` に再分類する。
- 候補ごとに relation / alias / fixture の事前リスクを整理する。
- 前半10件・後半10件の段階実装計画を作る。
- 実装時に必要な fixture / audit / test の追加方針を決める。
- `batch-11` 実装に進む場合のファイル範囲を明確にする。

やらないこと:

- この計画書作成時点での新規motif追加。
- 180 -> 200 の本実装。
- UI全面改修。
- DB化。
- AI API導入。
- fuzzy search / N-gram / 本格形態素解析の導入。
- `home-place` を無計画に増やす候補採用。
- `communication` の主役差を曖昧にするrelation追加。
- `warning-fix-soon` を188より増やす変更。
- `general count` または `stale-relation` を増やす変更。

## Stage18からの固定条件

| condition | Stage19での扱い |
|---|---|
| `home-place` は増やしすぎない | 場所系候補は最大2件までを目安にし、原則は既存場所とのrelation整理を優先する |
| `communication` は主役差を崩さない | 通信系候補は最大1件までを目安にし、`sns / chat / comment / streaming / notification / video` の役割差を維持する |
| `comment / streaming` は慎重に扱う | 追加relationを増やす前に、fixtureで主役差を確認する |
| `coworker` は慎重に扱う | `workplace` 直接neighbor回避を維持し、`boss / friend` との役割差を確認する |
| `tears` は慎重に扱う | `crying` との近縁をfixtureで確認し、alias重複を増やしすぎない |
| `concealing` は慎重に扱う | `hiding` との主役差を確認し、行動と状態を分ける |
| `transit-place` は検討メモに留める | Stage19でも新clusterや実装上のkindにはしない |

## 候補配分方針

Stage19では、Stage15/17で大きく増えた `home-place` と `communication` を抑え、薄い領域と説明しやすい領域を優先します。

| category | target | policy |
|---|---:|---|
| object-record | 5-6 | `object-record = 15` が薄いため優先。ただし短語aliasに頼らない |
| nature-sky / water-weather | 3-4 | 比較的説明しやすいが、抽象語を増やしすぎない |
| body-appearance | 3-4 | `tears / crying` のような近縁差分を見ながら少数追加 |
| emotion-action | 3-4 | 活用形・状態表現の過検出に注意 |
| relationship | 1-2 | `coworker / boss / friend / workplace` との粒度差を確認し、前半へ寄せすぎない |
| movement | 1-2 | `transit-place` と混ざる候補はdocs上で確認してから採用 |
| home-place | 0-2 | 増やしすぎない。採用する場合は補助ラベルで説明できるものだけ |
| communication | 0-1 | 主役差を崩さないものだけ。追加しない判断も許容 |

## 候補分類基準

| bucket | condition | Stage19 action |
|---|---|---|
| `next-addition-ready` | relation / alias / fixture が説明しやすく、`warning-fix-soon` を増やしにくい | 前半10件候補に優先 |
| `needs-audit` | 近縁motifが濃く、fixtureで主役差を確認してから採用したい | 後半候補または保留 |
| `hold` | short alias、過密cluster、意味幅の広さ、既存抑制への影響が強い | Stage19実装対象から外す |

候補レビューでは、各候補について次を必ず書く。

- 想定cluster
- 想定relation 2-4件
- `generic-specific` を増やす理由
- 既存warningへの影響
- fixture化できる夢文
- `warning-fix-soon = 188` を維持できる見込み

## 重点監査対象

### communication周辺

| target | Stage19 policy |
|---|---|
| `comment` | `sns` そのものではなく、反応・評価・残された言葉として扱う |
| `streaming` | `video` ではなく、リアルタイム性と視聴者反応を主役にする |
| `sns` | 公開性・外部反応・投稿空間。上位受け皿にしすぎない |
| `chat` | 個別会話・直接のやりとり |
| `notification` | 内容ではなく反応待ち・知らせ |
| `video` | 視覚コンテンツ・再生視聴 |

Stage19では、communication候補を追加する場合でも、`comment -> sns` の直接neighbor回避方針を維持します。

### relationship / workplace周辺

| target | Stage19 policy |
|---|---|
| `coworker` | `workplace` のweak-only抽出を助けすぎない |
| `workplace` | 場所・環境として扱い、人物関係の主役にしすぎない |
| `boss` | 評価者・上下関係 |
| `friend` | 対等な親しさ |

### emotion / body周辺

| target | Stage19 policy |
|---|---|
| `tears` | 目に見える反応・こぼれる感情 |
| `crying` | 泣く行動・感情表出 |
| `concealing` | 隠す行動 |
| `hiding` | 隠れる状態・身を隠す場面 |

## fixture / audit / test 計画

Stage19実装に入る場合、前半10件・後半10件のそれぞれでfixtureを追加します。Stage18で挙げた境界fixtureは、候補に該当するものを優先します。

| id draft | purpose |
|---|---|
| `stage19-comment-streaming-sns-boundary` | コメント、配信、SNSの主役差を確認する |
| `stage19-streaming-video-notification-boundary` | 配信を動画視聴と通知待ちから切り分ける |
| `stage19-coworker-workplace-boss-friend-boundary` | 同僚、職場、上司、友人の粒度差を確認する |
| `stage19-tears-crying-boundary` | 涙と泣く行動の差分を確認する |
| `stage19-concealing-hiding-boundary` | 隠す行動と隠れる状態の差分を確認する |
| `stage19-object-record-candidate-dedicated` | object-record系候補の単独抽出を確認する |
| `stage19-home-place-overgrowth-check` | home-place候補が過密化を進めすぎないか確認する |

テスト方針:

- registry totalを200へ更新するのは実装時のみ。
- `warning-fix-soon = 188` を維持する。
- `general count = 0` を維持する。
- `stale-relation = 0` を維持する。
- relation classification testで新規relationが未分類に落ちないことを確認する。
- extraction audit fixtureで近縁motifの主役入れ替わりを確認する。

## 実装順序

この文書承認後に実装へ進む場合の順序です。

1. Stage19候補レビュー文書を作成する。
2. 候補を `next-addition-ready / needs-audit / hold` に分類する。
3. 前半10件を低リスク候補から選ぶ。
4. 前半10件の alias / relation / question / block を設計する。
5. 前半10件の fixture / test を追加する。
6. `npm.cmd test` を実行し、数値を記録する。
7. 後半10件を、前半結果とwarning増分を見て選ぶ。
8. 後半10件の実装とfixture / testを追加する。
9. `npm.cmd test`、`npm.cmd run lint`、`npm.cmd run build` を実行する。
10. Stage19実装記録とvalidator summaryをdocsに残す。

## 想定ファイル範囲

実装承認後に触る想定範囲:

| path | purpose |
|---|---|
| `data/batches/batch-11/` | 新規20motifのmotifs / aliases / questions / blocks |
| `data/batches/index.ts` | `batch-11` 接続 |
| `lib/dream-engine/rules/relationReview.ts` | 新規relation分類 |
| `tests/fixtures/stage19.ts` | Stage19 fixture |
| `tests/stage19-batch-11.test.ts` | Stage19専用テスト |
| `tests/dream-engine.test.ts` | registry total更新 |
| `docs/stage19-batch-11.md` | 実装記録 |
| `docs/stage19-candidate-review.md` | 候補レビュー |
| `README.md` | Stage19完了後の概要追記 |

この計画書作成時点では、上記ファイルは変更しません。

## リスクと回避策

| risk | mitigation |
|---|---|
| `home-place` がさらに過密化する | 場所系候補は0-2件に抑え、採用時は補助ラベルで説明できるものだけにする |
| `communication` の主役差が崩れる | 通信系候補は0-1件に抑え、`sns / chat / comment / streaming / notification / video` の役割差をfixtureで確認する |
| `comment / streaming` が既存抑制を壊す | 直接neighbor追加を急がず、fixtureで境界を確認する |
| `coworker` が `workplace` に寄りすぎる | `workplace` 直接neighbor回避を維持し、関係性は `boss / friend` 軸で確認する |
| `tears / crying` が同義化する | `tears` は見える反応、`crying` は行動として分ける |
| `concealing / hiding` が同義化する | `concealing` は隠す行動、`hiding` は隠れる状態として分ける |
| `generic-specific` が理由不明に増える | 候補ごとに増加理由をdocsへ記録し、分類不能なら `hold` にする |
| `warning-review-ok` が理由不明に増える | 既存カテゴリに入らないものは採用しない |
| `warning-fix-soon` が188を超える | 1文字alias、2文字以下のweak語、短すぎるblockを避ける |

## Stage19 Completion Gate

実装に進んだ場合の完了条件:

```text
registry total: 200
error: 0
warning-fix-soon <= 188
general count: 0
stale-relation: 0
```

追加確認:

- relation total は増減自体ではなく、全件分類済みかを確認する。
- by cluster / by kind は固定形式で出力する。
- `home-place` の増加理由が説明できる。
- `communication` の主役差が崩れていない。
- `comment / streaming / coworker / tears / concealing` 周辺のfixtureが壊れていない。
- `npm.cmd test`、`npm.cmd run lint`、`npm.cmd run build` が通過する。

## 期待成果物

- Stage19候補レビュー文書。
- Stage19実装記録。
- `batch-11` の20motif追加。
- Stage19 fixture / test。
- validator summary。
- 固定形式の数値出力。
- READMEへのStage19概要追記。

この文書は、実装前に候補とゲートを固定するための計画書です。`batch-11` の本実装は、候補レビュー承認後に開始します。
