# Stage29 batch-16 implementation

## 前提確認
- AGENTS.md を確認済み。
- `node_modules/next/dist/docs/index.md` を確認済み。
- Stage29 は Next.js UI 変更ではなく、`batch-16` の motif 追加と実夢文監査fixtureの整備として扱った。
- Next.js 固有変更、UI全面改修、DB本実装、AI API導入、fuzzy search / N-gram / 本格形態素解析、relation 自動双方向化、大規模な抽出ロジック再設計は対象外。

## 実装概要
Stage29 では `batch-16` として20 motif を追加し、registry total を 280 から 300 に拡張した。Stage28 の軽監査を踏まえ、home-place / communication / relationship の新規候補は採用せず、object-record / nature / emotion-action 補助と、実夢文監査で比較しやすい道具・場面を中心にした。

前半10件:

- `twig`
- `moss`
- `petal`
- `raindrop`
- `eraser`
- `ruler`
- `paperclip`
- `coaster`
- `handkerchief`
- `bell`

後半10件:

- `backpack`
- `ink`
- `torn_paper`
- `dust`
- `stain`
- `answer_sheet`
- `keyboard`
- `monitor`
- `footsteps`
- `dead_end`

## 段階検証
前半10件後:

- registry total = 290
- relation total = 753
- `npm.cmd test` 通過
- `warning-fix-soon = 185`
- `general count = 0`
- `stale-relation = 0`

後半10件後:

- registry total = 300
- relation total = 783
- `npm.cmd test` 通過
- relation は全件分類済み
- `general count = 0`
- `stale-relation = 0`

## relation 整理
Stage29 追加分を `relationReview.ts` の以下へ反映した。

- `priorityClusterIds`
- `genericSpecificGroups`
- `reciprocalCandidateGroups`
- `classifyRelationCluster`

分類方針:

- `raindrop`: water-weather
- `backpack` / `dead_end`: movement
- `footsteps`: emotion-action
- `twig` / `moss` / `petal` / `dust` / `stain`: nature-sky
- `eraser` / `ruler` / `paperclip` / `coaster` / `handkerchief` / `bell` / `ink` / `torn_paper` / `answer_sheet` / `keyboard` / `monitor`: object-record

`comment -> sns` と `coworker -> workplace` の直接 neighbor 回避は維持した。

## 実夢文監査
Stage29 では、抽出ルール本体の大規模変更や `anger` 新規 motif 化には入らず、比較可能な fixture と最小辞書修正に留めた。

追加確認:

- 遅刻夢で `being_late` が上位6件に入る。
- 試験夢で `exam` / `answer_sheet` / `ink` を拾う。
- 元恋人夢で `ex_partner` を拾う。
- 仕事ミス夢で `making_mistake` / `monitor` / `keyboard` を拾う。
- 追跡夢で `being_chased` / `footsteps` / `dead_end` を拾う。
- `電車` で `car` が混ざらない。
- `廊下` で `school` が混ざらない。
- `ブチギレる` は Stage29 では `fighting` へ寄せる。

## fixture / test
追加:

- `tests/fixtures/stage29.ts`
- `tests/stage29-batch-16.test.ts`

確認観点:

- Stage29 20件が登録され、hold 候補が入っていないこと。
- `warning-fix-soon <= 185` を維持すること。
- Stage29 relation が `general` / `stale-relation` に落ちないこと。
- `stain` / `answer_sheet` / `footsteps` / `dead_end` が非診断・非断定であること。
- `handkerchief` が `tears` を補助しつつ `hiding` へ寄りすぎないこと。
- `footsteps / dead_end` が追跡夢を補助しつつ、抽出の主役差を比較できること。
- 実夢文監査8ケースを fixture として固定すること。

## 固定形式の数値出力
```text
registry total: 300
relation total: 783

by cluster:
water-weather: 86
home-place: 108
movement: 76
communication: 63
relationship: 56
body-appearance: 113
emotion-action: 128
nature-sky: 58
object-record: 95
care-risk: 0
general: 0

by kind:
intentional-one-way: 10
should-be-reciprocal: 235
should-be-conflict: 1
generic-specific: 463
context-helper: 74
stale-relation: 0

general count: 0
```

validator summary:

```text
error: 0
warning-fix-soon: 184
warning-review-ok: 113
info: 809
```

## Stage30 監査論点
- `generic-specific = 463` の増加理由が、上位/下位・道具/対象・文脈補助として説明可能か。
- `object-record = 95` の過密化、とくに `eraser / ruler / paperclip / answer_sheet / keyboard / monitor` の主役差。
- `emotion-action = 128` で `footsteps / being_chased / running / dead_end` が追跡夢の主役を奪い合っていないか。
- `communication = 63` が、`keyboard / monitor / bell` によって過密化していないか。
- `home-place = 108` を維持し、`dead_end / hallway / room / house` の場所境界を再確認する。
- `キレる / キレ散らかす / ブチギレる` を `fighting` に寄せ続けるか、将来 `anger` motif を検討するか。
- 実夢文監査の3段階記録を、1位 / 上位6件 / 未抽出で継続する。
