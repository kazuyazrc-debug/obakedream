# Stage33 batch-18 implementation

## 前提確認
- AGENTS.md を確認済み。
- `node_modules/next/dist/docs/index.md` を確認済み。
- Stage33 は Next.js UI 変更ではなく、`batch-18` の motif 追加と fixture / audit 整備として実装した。
- Next.js 固有変更、UI全面改修、DB本実装、AI API導入、fuzzy search / N-gram / 本格形態素解析、relation 自動双方向化、anger 新規motif確定は対象外。

## 実装概要
Stage33では `batch-18` として20 motifを追加し、registry totalを320から340へ拡張した。Stage32監査を踏まえ、home-place / communication / relationshipは抑制枠として採用せず、前半はobject-record / nature中心、後半はmovement / body-appearance / digital objectを最小限に分けて扱った。

前半10件:

- `root`
- `bud`
- `wildflower`
- `lichen`
- `reed`
- `rubber_band`
- `binder`
- `index_card`
- `coupon`
- `pencil_case`

後半10件:

- `sidewalk`
- `escalator`
- `platform_edge`
- `lost_ticket`
- `checklist`
- `progress_bar`
- `loading_icon`
- `eyebrow`
- `chin`
- `wristwatch`

## 段階検証
前半10件後:

- registry total = 330
- relation total = 873
- `npm.cmd test` 通過
- `error = 0`
- `warning-fix-soon = 184`
- `general count = 0`
- `stale-relation = 0`

後半10件後:

- registry total = 340
- relation total = 903
- `npm.cmd test` 通過
- `npm.cmd run lint` 通過
- `npm.cmd run build` 通過
- relation は全件分類済み
- `general count = 0`
- `stale-relation = 0`

## relation 整理
Stage33追加分を `relationReview.ts` の以下へ反映した。

- `priorityClusterIds`
- `genericSpecificGroups`
- `reciprocalCandidateGroups`
- `classifyRelationCluster`

分類方針:

- `root` / `bud` / `wildflower` / `lichen` / `reed`: nature-sky
- `rubber_band` / `binder` / `index_card` / `coupon` / `pencil_case` / `checklist` / `progress_bar` / `loading_icon` / `wristwatch`: object-record
- `sidewalk` / `escalator` / `platform_edge` / `lost_ticket`: movement
- `eyebrow` / `chin`: body-appearance

`comment -> sns` と `coworker -> workplace` の直接 neighbor 回避は維持した。`progress_bar` / `loading_icon` は `monitor / waiting / clock` 側に寄せ、communication本体へ寄りすぎないようにした。

## fixture / test
追加:

- `tests/fixtures/stage33.ts`
- `tests/stage33-batch-18.test.ts`

確認観点:

- Stage33 20件が登録され、hold候補が入っていないこと。
- `warning-fix-soon <= 184` を維持すること。
- Stage33 relationが `general` / `stale-relation` に落ちないこと。
- `eyebrow` / `chin` が非診断・非断定であること。
- `sidewalk / escalator / platform_edge / lost_ticket` がmovement境界を壊さないこと。
- `progress_bar / loading_icon` がcommunication本体へ寄りすぎないこと。
- `電車 -> car` 抑制、`廊下 -> school` 抑制、怒り口語の `fighting` 最小対応を壊さないこと。

## 実夢文監査
Stage33では実夢文監査由来の改善候補を追加候補とは別枠で扱い、fixture / 比較メモ中心に留めた。

- `being_late`: 遅刻夢で上位6件に入る。
- `exam`: 試験夢で拾える。
- `ex_partner`: 元恋人夢で拾える。
- `making_mistake`: 仕事ミス夢で `monitor` / `keyboard` と併存できる。
- `being_chased`: 追跡夢で `footsteps` / `dead_end` と併存できる。
- `電車 -> car`: 電車文脈で `car` が混ざらない。
- `車に乗る`: 通常のcar夢では `car` が拾える。
- `廊下 -> school`: 廊下単独で `school` が混ざらない。
- `学校の廊下`: 学校文脈では `school` / `hallway` が併存できる。
- `キレる / キレ散らかす / ブチギレる`: Stage33でも `anger` 新規motif化せず、既存 `fighting` の比較対象として維持。

## 固定形式の数値出力
```text
registry total: 340
relation total: 903

by cluster:
water-weather: 89
home-place: 115
movement: 100
communication: 63
relationship: 56
body-appearance: 123
emotion-action: 142
nature-sky: 81
object-record: 134
care-risk: 0
general: 0

by kind:
intentional-one-way: 10
should-be-reciprocal: 229
should-be-conflict: 1
generic-specific: 591
context-helper: 72
stale-relation: 0

general count: 0
```

validator summary:

```text
error: 0
warning-fix-soon: 184
warning-review-ok: 122
info: 930
```

## Stage34監査論点
- `generic-specific = 591` の説明負債。
- `object-record = 134` の過密化と、追加した文具・画面表示・時間道具の主役差。
- `movement = 100` の境界と、`traffic_light / crosswalk / detour / turn_back / dead_end` への影響。
- `body-appearance = 123` の非診断維持。
- `progress_bar / loading_icon / monitor / keyboard / bell` とcommunicationの境界。
- `platform_edge / train / being_late` と `電車 -> car` 抑制の副作用。
- `lost_ticket / ticket / train / losing` と実夢文の遅刻・試験・仕事ミス監査を混ぜすぎていないか。
- 怒り口語を今後も `fighting` に寄せるか、`anger` motifを検討するか。
