# Stage25 batch-14 implementation

## 前提確認

- AGENTS.md を確認済み。
- `node_modules/next/dist/docs/index.md` を確認済み。
- Stage25 は Next.js UI 変更ではなく、batch-14 の motif 追加実装。
- Next.js 固有変更、UI全面改修、DB本実装、AI API導入、fuzzy search / N-gram / 本格形態素解析、relation 自動双方向化は対象外。

## 実装概要

Stage25 では `batch-14` として20 motif を追加し、registry total を 240 から 260 へ拡張した。Stage24 で整理した非診断・免責文言ゲート、feedback 最小仕様、dict semver / snapshot 方針を壊さない追加として、`dict-v0.14.0` 相当の追加メモを残す。

前半10件:

- `postcard`
- `basket`
- `jar`
- `bench`
- `curtain`
- `nest`
- `chalk`
- `pebble`
- `maple_leaf`
- `tray`

後半10件:

- `needle`
- `paintbrush`
- `ladder`
- `glove`
- `plate`
- `lamp`
- `string`
- `marble`
- `bucket`
- `comb`

## 段階検証

前半10件後:

- registry total = 250
- `npm.cmd test` 通過
- `warning-fix-soon <= 188`
- `general count = 0`
- `stale-relation = 0`

後半10件後:

- registry total = 260
- `npm.cmd test` 通過
- `npm.cmd run lint` 通過
- `npm.cmd run build` 通過
- relation は全件分類済み

## relation 整理

Stage25 追加分を `relationReview.ts` の以下へ追加した。

- `priorityClusterIds`
- `genericSpecificGroups`
- `reciprocalCandidateGroups`
- `classifyRelationCluster`

分類方針:

- `postcard` / `basket` / `jar` / `bench` / `curtain` / `chalk` / `tray` / `needle` / `paintbrush` / `plate` / `lamp` / `string` / `marble` / `bucket`: object-record
- `nest` / `pebble` / `maple_leaf`: nature-sky
- `ladder`: movement
- `glove` / `comb`: body-appearance

`bench` は home-place / storage 系には寄せず、`comment -> sns` と `coworker -> workplace` の直接 neighbor 回避も維持した。

## fixture / test

追加:

- `tests/fixtures/stage25.ts`
- `tests/stage25-batch-14.test.ts`

確認観点:

- Stage25 の20件が登録され、hold 候補が未採用であること。
- `warning-fix-soon <= 188` を維持すること。
- Stage25 relation が `general` / `stale-relation` に落ちないこと。
- `needle` / `glove` / `comb` が非診断・非断定の文面であること。
- `needle / string / knot / thread` の混線を fixture で確認すること。
- `paintbrush / brush / painting` の主役差を fixture で確認すること。
- `lamp / lantern / candle` の粒度差を fixture で確認すること。

## dict-v0.14.0 impact memo

- dict version: `dict-v0.14.0` 相当
- fixture impact: Stage25 専用 fixture と代表 dream を追加
- warning impact: `warning-fix-soon <= 188` を維持し、医療断定に近い候補は採用しない
- relation impact: Stage25 全20件を relation review 分類に追加し、`general count = 0` と `stale-relation = 0` を維持

## 固定形式の数値出力

```text
registry total: 260
relation total: 663

by cluster:
water-weather: 74
home-place: 107
movement: 60
communication: 60
relationship: 54
body-appearance: 99
emotion-action: 109
nature-sky: 40
object-record: 60
care-risk: 0
general: 0

by kind:
intentional-one-way: 10
should-be-reciprocal: 244
should-be-conflict: 1
generic-specific: 332
context-helper: 76
stale-relation: 0

general count: 0
```

validator summary:

```text
error: 0
warning-fix-soon: 188
warning-review-ok: 103
info: 689
```

## Stage26 監査論点

- `generic-specific` の増加が説明可能な範囲に収まっているか。
- `object-record` の過密化、とくに `postcard / stamp / photo`、`jar / cup / shelf`、`tray / dish / cup` の粒度差。
- `bench` が home-place / storage 系へ流れていないか。
- `needle / string / thread / knot / tying` が concealing / hiding へ混線していないか。
- `lamp / lantern / candle` の光モチーフの粒度差。
- `glove / comb / hair / hand` と body-appearance の補助関係。
