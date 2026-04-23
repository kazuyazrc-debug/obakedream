# Stage31 batch-17 implementation

## 前提確認
- AGENTS.md を確認済み。
- `node_modules/next/dist/docs/index.md` を確認済み。
- Stage31 は Next.js UI 変更ではなく、`batch-17` の motif 追加と実夢文監査fixtureの整備として扱った。
- Next.js 固有変更、UI全面改修、DB本実装、AI API導入、fuzzy search / N-gram / 本格形態素解析、relation 自動双方向化、anger の新規motif確定は対象外。

## 実装概要
Stage31 では `batch-17` として20 motif を追加し、registry total を 300 から 320 に拡張した。Stage30 の軽監査を踏まえ、home-place / communication / relationship の新規候補は採用せず、object-record / nature を前半に寄せ、後半は movement / body-appearance の監査対象を最小限補強した。

前半10件:

- `clover`
- `dandelion`
- `sprout`
- `bark`
- `vine`
- `glue`
- `tape`
- `label`
- `folder`
- `receipt`

後半10件:

- `magnifying_glass`
- `clipboard`
- `stapler`
- `calendar_page`
- `traffic_light`
- `crosswalk`
- `detour`
- `turn_back`
- `fingernail`
- `cheek`

## 段階検証
前半10件後:

- registry total = 310
- relation total = 813
- `npm.cmd test` 通過
- `warning-fix-soon = 184`
- `general count = 0`
- `stale-relation = 0`

後半10件後:

- registry total = 320
- relation total = 843
- `npm.cmd test` 通過
- relation は全件分類済み
- `general count = 0`
- `stale-relation = 0`

## relation 整理
Stage31 追加分を `relationReview.ts` の以下へ反映した。

- `priorityClusterIds`
- `genericSpecificGroups`
- `reciprocalCandidateGroups`
- `classifyRelationCluster`

分類方針:

- `clover` / `dandelion` / `sprout` / `bark` / `vine`: nature-sky
- `glue` / `tape` / `label` / `folder` / `receipt` / `magnifying_glass` / `clipboard` / `stapler` / `calendar_page`: object-record
- `traffic_light` / `crosswalk` / `detour` / `turn_back`: movement
- `fingernail` / `cheek`: body-appearance

`comment -> sns` と `coworker -> workplace` の直接 neighbor 回避は維持した。

## 実夢文監査
Stage31 では、抽出ルール本体の大規模変更や `anger` 新規 motif 化には入らず、比較可能な fixture と新規motif側の最小 phrase 補正に留めた。

追加確認:

- 遅刻夢で `being_late` が上位6件に入る。
- 試験夢で `exam` / `answer_sheet` / `ink` を拾う。
- 元恋人夢で `ex_partner` を拾う。
- 仕事ミス夢で `making_mistake` / `monitor` / `keyboard` を拾う。
- 追跡夢で `being_chased` / `footsteps` / `dead_end` を拾う。
- `電車` で `car` が混ざらない。
- `車に乗る` では `car` を拾う。
- `廊下` で `school` が混ざらない。
- `学校の廊下` では `school` / `hallway` が併存する。
- `キレ散らかす` / `ブチギレる` は Stage31 でも `fighting` へ寄せる。

## fixture / test
追加:

- `tests/fixtures/stage31.ts`
- `tests/stage31-batch-17.test.ts`

確認観点:

- Stage31 20件が登録され、hold 候補が入っていないこと。
- `warning-fix-soon <= 184` を維持すること。
- Stage31 relation が `general` / `stale-relation` に落ちないこと。
- `bark` / `fingernail` / `cheek` が非診断・非断定であること。
- `traffic_light / crosswalk / detour / turn_back` が movement の補助として説明できること。
- `keyboard / monitor / bell` と communication の境界を壊さないこと。
- 実夢文監査10ケースを fixture として固定すること。

## 固定形式の数値出力
```text
registry total: 320
relation total: 843

by cluster:
water-weather: 87
home-place: 111
movement: 88
communication: 63
relationship: 56
body-appearance: 119
emotion-action: 135
nature-sky: 69
object-record: 115
care-risk: 0
general: 0

by kind:
intentional-one-way: 10
should-be-reciprocal: 233
should-be-conflict: 1
generic-specific: 525
context-helper: 74
stale-relation: 0

general count: 0
```

validator summary:

```text
error: 0
warning-fix-soon: 184
warning-review-ok: 119
info: 870
```

## Stage32 監査論点
- `generic-specific = 525` の増加理由が、上位/下位・道具/対象・文脈補助として説明可能か。
- `object-record = 115` の過密化、とくに `glue / tape / label / folder / receipt / clipboard / stapler` の主役差。
- `movement = 88` で `traffic_light / crosswalk / detour / turn_back / dead_end` が過密化していないか。
- `body-appearance = 119` で `fingernail / cheek / face / hand / makeup / mirror` が非診断・非断定を維持しているか。
- `home-place = 111` が増えた relation の理由を、場所追加ではなく既存 place との接続として説明できるか。
- 実夢文監査の副作用確認を、Stage31 fixture 以外の文例にも広げるか。
- `anger` を今後も `fighting` に寄せるか、新規motif検討を続けるか。
