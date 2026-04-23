# Stage25 candidate review

## 前提確認

- AGENTS.md を確認済み。
- `node_modules/next/dist/docs/index.md` を確認済み。
- Stage25 は Next.js UI 変更ではなく、batch-14 の motif 追加実装フェーズ。
- Next.js 固有変更、UI全面改修、DB本実装、AI API導入、fuzzy search / N-gram / 本格形態素解析、relation 自動双方向化は対象外。

## 採用方針

Stage24 の軽監査 + 基盤整備メモを前提に、home-place / communication / relationship は抑制枠として扱った。今回の採用は `object-record`、`nature-sky`、`body-appearance` 補助、`movement` 補助を中心にし、直接的な場所・会話・関係性の拡張は避けた。

dict version は `dict-v0.14.0` 相当の追加として扱い、候補ごとに `fixture impact`、`warning impact`、`relation impact` を確認できる粒度で記録する。

## 最終採用20件

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

## 採用しない候補

- `whispering`
- `wound`
- `secret`
- `message`
- `bedroom`
- `bathroom`
- `medicine`
- `meeting`
- `office_room`

これらは communication / home-place / relationship / medical-adjacent の過密化につながるため、Stage25 では hold とした。

## 境界メモ

- `bench`: `house` / `room` / `storage_room` へ寄せず、public-place / waiting-place 的な一時停止として扱う。
- `postcard`: communication 本体ではなく、短い記録と届ける object-record として扱う。
- `curtain`: `concealing` / `hiding` へ寄せすぎず、見せる範囲の調整として扱う。
- `needle`: `injury` / `wound` / medical diagnosis へ寄せず、修復と細部作業として扱う。
- `string`: `thread` / `knot` / `tying` との近縁を fixture で確認する。
- `paintbrush`: `brush` とは手入れ道具ではなく表現道具、`painting` とは対象物ではなく道具として区別する。
- `lamp`: `lantern` / `candle` と、手元の光・持ち歩く光・火の灯りで粒度差を確認する。
- `glove` / `comb`: `shoulder` / `ankle` に近づけず、body-appearance 補助の object として扱う。

## warning / relation 方針

- `warning-fix-soon <= 188` を維持する。
- 1文字 alias は採用しない。
- 2文字以下の weak は原則採用しない。
- 短すぎる block は作らない。
- relation total の増減より、cluster / kind が説明可能かを優先する。
- `general count = 0` と `stale-relation = 0` を維持する。
- `comment -> sns` の直接 neighbor 回避、`coworker -> workplace` の直接 neighbor 回避を維持する。

## fixture impact

Stage25 fixture では以下を確認対象にする。

- `needle / string / knot / thread`
- `paintbrush / brush / painting`
- `lamp / lantern / candle`
- `bench / road / station` と home-place 非混線
- `curtain / shadow / opening` と concealing / hiding 非混線
- `glove / comb / hair` と shoulder / ankle 非混線

## warning impact

医療・身体寄りの候補は `needle`、`glove`、`comb` に限定し、非診断・非断定の文面を維持する。`wound`、`medicine` は Stage25 では採用しない。

## relation impact

`relationReview.ts` では Stage25 全20件を priority / generic-specific / reciprocal candidate / cluster 分類へ追加する。`bench` は home-place ではなく object-record、`ladder` は movement、`nest` / `pebble` / `maple_leaf` は nature-sky、`glove` / `comb` は body-appearance 補助として扱う。
