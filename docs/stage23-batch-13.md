# Stage23 batch-13 implementation

## 前提確認

- AGENTS.md を確認済み。
- `node_modules/next/dist/docs/index.md` を確認済み。
- 今回は Next.js UI 変更ではなく Stage23 の motif 追加実装。
- Next.js 固有変更は対象外。

## 実装概要

Stage23 では `batch-13` として20 motif を追加し、registry total を 220 から 240 へ拡張した。

前半10件:

- `feather`
- `ribbon`
- `lantern`
- `drawer`
- `thread`
- `stamp`
- `clay`
- `shell`
- `bead`
- `spoon`

後半10件:

- `blank_page`
- `necklace`
- `shoulder`
- `wiping`
- `wrapping`
- `unpacking`
- `knot`
- `sleeve`
- `ankle`
- `carving`

## 段階検証

前半10件後:

- registry total = 230
- `npm.cmd test` 通過
- `warning-fix-soon <= 188`
- `general count = 0`
- `stale-relation = 0`

後半10件後:

- registry total = 240
- `npm.cmd test` 通過
- `npm.cmd run lint` 通過
- `npm.cmd run build` 通過
- relation は全件分類済み

## relation 整理

Stage23 追加分は `relationReview.ts` で以下の管理対象へ追加した。

- `priorityClusterIds`
- `genericSpecificGroups`
- `reciprocalCandidateGroups`
- `classifyRelationCluster`

分類方針:

- `feather` / `shell`: nature / water-weather 周辺として説明。
- `drawer` / `stamp` / `bead` / `spoon` / `blank_page` / `knot`: object-record として説明。
- `necklace` / `shoulder` / `sleeve` / `ankle`: body-appearance として説明。
- `wiping` / `wrapping` / `unpacking` / `carving`: emotion-action として説明。
- `ribbon` / `thread`: object-record を主軸にし、concealing / hiding へ寄せない。

## fixture / test

追加:

- `tests/fixtures/stage23.ts`
- `tests/stage23-batch-13.test.ts`

確認観点:

- Stage23 の20件が登録され、registry total が 240 になること。
- `warning-fix-soon <= 188` を維持すること。
- Stage23 relation が `general` / `stale-relation` に落ちないこと。
- `shoulder` / `ankle` が非診断・非断定の文面になっていること。
- `blank_page` が writing / notebook と併走しつつ reading 主役へ寄りすぎないこと。
- `drawer` が storage / home-place へ寄りすぎないこと。
- `ribbon` / `thread` / `knot` / `wrapping` が concealing / hiding へ寄りすぎないこと。

## Stage24 監査論点

- `generic-specific` の増加分が説明可能か。
- `object-record` が過密化していないか。
- `body-appearance` に追加した `shoulder` / `ankle` / `sleeve` / `necklace` の境界が自然か。
- `wiping / washing / towel / sleeve` が bathroom / home-place に寄りすぎないか。
- `ribbon / thread / knot / wrapping` と concealing / hiding の境界。
- `blank_page / writing / reading / notebook` の主役差。
- `scar / injury / past` の非診断方針が Stage23 後も崩れていないか。
