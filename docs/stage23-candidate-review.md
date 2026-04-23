# Stage23 candidate review

## 前提確認

- AGENTS.md を確認済み。
- `node_modules/next/dist/docs/index.md` を確認済み。
- Stage23 は Next.js UI 変更ではなく、batch-13 の追加実装フェーズ。
- Next.js 固有変更、UI全面改修、DB化、AI API導入、fuzzy search / N-gram / 本格形態素解析、relation 自動双方向化は対象外。

## 採用方針

Stage22 の軽監査メモを前提に、home-place / communication / relationship は抑制枠として扱った。今回の追加では、home-place 候補、communication 候補、relationship 候補は採用していない。

前半は `next-addition-ready` 相当の説明しやすい object / nature / action を優先した。後半は `needs-audit` 寄りの body-appearance / action を含めたが、肩・足首は非診断、白紙は writing / reading / notebook 境界、包む・糸・結び目は concealing / hiding 境界を fixture で確認する方針にした。

## 最終採用20件

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

## 採用しない候補

- `whispering`
- `wound`
- `secret`

これらは communication / care-risk / concealing 周辺の境界が濃く、Stage23 の抑制条件に合わないため hold とした。

## 境界メモ

- `drawer`: `storage_room` / `house` へ寄せず、desk / box / tidying と接続する object-record として扱う。
- `ribbon` / `thread` / `knot` / `wrapping`: concealing / hiding へ寄せず、結ぶ・仕上げる・渡す前に整える意味で扱う。
- `blank_page`: writing / notebook と併走するが、reading 主役へ寄せすぎない。
- `shoulder` / `ankle`: 体調診断ではなく、役割・支え・歩幅・足元の安定として扱う。
- `scar`: 既存方針どおり、非診断・非断定を維持する。
- `comment -> sns` の直接 neighbor 回避、`coworker -> workplace` の直接 neighbor 回避は継続。

## warning / relation 方針

- `warning-fix-soon <= 188` を維持する。
- 1文字 alias は採用しない。
- 2文字以下の weak は原則採用しない。
- relation total の増減より、cluster / kind が説明可能かを優先する。
- `general count = 0` と `stale-relation = 0` を維持する。

## fixture 方針

- `blank_page / writing / reading / notebook`
- `shoulder / carrying / hand`
- `ankle / foot / shoes / tripping`
- `ribbon / thread / knot / wrapping / concealing / hiding`
- `drawer / storage_room / house`
- `wiping / towel / washing / sleeve`

上記を Stage23 fixture の中心に置き、追加語彙の過剰な隣接を避ける。
