# Stage27 batch-15 implementation

## 前提確認
- AGENTS.md を確認済み。
- `node_modules/next/dist/docs/index.md` を確認済み。
- Stage27 は Next.js UI 変更ではなく、`batch-15` の motif 追加と実夢文監査fixtureの整備として扱った。
- Next.js 固有変更、UI全面改修、DB本実装、AI API導入、fuzzy search / N-gram / 本格形態素解析、relation 自動双方向化は対象外。

## 実装概要
Stage27 では `batch-15` として20 motif を追加し、registry total を 260 から 280 に拡張した。Stage26 の軽監査を踏まえ、home-place / communication / relationship の新規候補は採用せず、object-record / nature / body-appearance / movement 補助を中心にした。

前半10件:

- `pinecone`
- `acorn`
- `mushroom`
- `fern`
- `dew`
- `broom`
- `bowl`
- `compass`
- `pencil`
- `bookmark`

後半10件:

- `shoelace`
- `zipper`
- `apron`
- `suitcase`
- `ticket_stub`
- `paint`
- `footprint`
- `eyelash`
- `keychain`
- `pocket`

## 段階検証
前半10件後:

- registry total = 270
- `npm.cmd test` 通過
- `warning-fix-soon <= 188`
- `general count = 0`
- `stale-relation = 0`

後半10件後:

- registry total = 280
- `npm.cmd test` 通過
- relation は全件分類済み
- `general count = 0`
- `stale-relation = 0`

## relation 整理
Stage27 追加分を `relationReview.ts` の以下へ反映した。

- `priorityClusterIds`
- `genericSpecificGroups`
- `reciprocalCandidateGroups`
- `classifyRelationCluster`

分類方針:

- `pinecone` / `acorn` / `mushroom` / `fern`: nature-sky
- `dew`: water-weather
- `compass` / `suitcase` / `footprint`: movement
- `eyelash`: body-appearance
- `broom` / `bowl` / `pencil` / `bookmark` / `shoelace` / `zipper` / `apron` / `ticket_stub` / `paint` / `keychain` / `pocket`: object-record

`comment -> sns` と `coworker -> workplace` の直接 neighbor 回避は維持した。

## 実夢文監査
Stage27 では、抽出ルール本体の変更や anger 新規 motif 化には入らず、比較可能な fixture と最小辞書修正に留めた。

追加確認:

- `空港にいる夢だった。` は `airport` を拾い、`sea` / `ship` は拾わない。
- `港だけが見える夢だった。` は Stage27 では主役 motif 未確定として、`airport` / `sea` / `ship` の誤抽出を起こさない。
- `空港に急ぐ夢だった。` は `airport` / `being_late` を拾い、`sea` / `ship` は拾わない。
- `誰かにキレ散らかす夢だった。` は既存 `fighting` へ寄せる。

最小修正:

- `sea` alias から単独 `港` を削除。
- `ship` secondary keyword から単独 `港` を削除。
- `fighting` priority keyword に `キレる` / `キレ散らかす` を追加。
- `fighting` secondary keyword に `怒鳴る` / `言い返す` を追加。

## fixture / test
追加:

- `tests/fixtures/stage27.ts`
- `tests/stage27-batch-15.test.ts`

確認観点:

- Stage27 20件が登録され、hold 候補が入っていないこと。
- `warning-fix-soon <= 188` を維持すること。
- Stage27 relation が `general` / `stale-relation` に落ちないこと。
- `footprint` / `eyelash` が非診断・非断定であること。
- `shoelace / zipper` が concealing / hiding へ寄りすぎないこと。
- `keychain / pocket` が storage / concealing へ寄りすぎないこと。
- 実夢文監査4ケースを比較可能なfixtureとして固定すること。

## 固定形式の数値出力
```text
registry total: 280
relation total: 723

by cluster:
water-weather: 79
home-place: 108
movement: 70
communication: 60
relationship: 55
body-appearance: 108
emotion-action: 117
nature-sky: 50
object-record: 76
care-risk: 0
general: 0

by kind:
intentional-one-way: 10
should-be-reciprocal: 242
should-be-conflict: 1
generic-specific: 395
context-helper: 75
stale-relation: 0

general count: 0
```

validator summary:

```text
error: 0
warning-fix-soon: 185
warning-review-ok: 105
info: 749
```

## Stage28 監査論点
- `generic-specific = 395` の増加理由が、上位/下位・道具/対象・文脈補助として説明可能か。
- `object-record = 76` の過密化、とくに `pencil / bookmark / ticket_stub / paint / keychain / pocket` の主役差。
- `body-appearance = 108` で `eyelash / face / eye / makeup / scar` が非診断・非断定を維持しているか。
- `shoelace / zipper / pocket` と `concealing / hiding` の混線。
- `dew / water / rain / grass` と `water-weather` の粒度差。
- `空港` と `港` の部分一致監査を、Stage27 fixture 以外の実夢文にも広げるか。
- `キレる` / `キレ散らかす` を既存 `fighting` に寄せ続けるか、将来 `anger` motif を検討するか。
