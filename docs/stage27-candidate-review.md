# Stage27 candidate review

## 前提確認
- AGENTS.md を確認済み。
- `node_modules/next/dist/docs/index.md` を確認済み。
- Stage27 は Next.js UI 変更ではなく、`batch-15` の motif 追加と最小限の抽出監査対応として扱う。
- Next.js 固有変更、UI全面改修、DB本実装、AI API導入、fuzzy search / N-gram / 本格形態素解析、relation 自動双方向化は対象外。

## 採用方針
Stage26 の軽監査を前提に、home-place / communication / relationship を増やさず、説明しやすい object-record / nature / body-appearance / movement 補助を中心に20件を採用した。

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

## 採用しない候補
Stage27 では `anger` / `whispering` / `wound` / `secret` / `message` / `bedroom` / `bathroom` / `medicine` / `meeting` / `office_room` は採用しない。

- home-place をさらに厚くする候補は採用しない。
- communication を過密化させる候補は採用しない。
- relationship 候補は採用しない。
- scar / tears / crying / concealing / hiding / singing に近い候補は慎重扱いを継続する。

## 実夢文監査の扱い
Stage27 では、20件追加と抽出改善の大規模同時実装を避けるため、実夢文監査は fixture と最小辞書修正に留めた。

対象ケース:

- `空港にいる夢だった。`
- `港だけが見える夢だった。`
- `空港に急ぐ夢だった。`
- `誰かにキレ散らかす夢だった。`

対応内容:

- alias 修正: `sea` の alias から単独 `港` を外した。
- alias 修正: `ship` の weak 相当から単独 `港` を外し、`港に着く` の phrase は保持した。
- phrase 修正: `fighting` に `キレる` / `キレ散らかす` を追加した。
- 抽出ルール修正は行わない。
- `anger` 新規 motif 化は Stage27 では確定しない。

## 影響メモ
- dict version: `dict-v0.15.0` 相当の追加。
- fixture impact: `tests/fixtures/stage27.ts` に batch-15 と実夢文監査の fixture を追加。
- warning impact: 1文字 alias を避け、`warning-fix-soon <= 188` を維持する。
- relation impact: Stage27 全20件を relation review の分類対象に追加し、`general count = 0` / `stale-relation = 0` を維持する。

## next-addition-ready / needs-audit / hold
next-addition-ready:

- object-record / nature / body-appearance で既存 relation の説明がしやすい候補。
- fixture で既存 motif との主役差を確認できる候補。
- home-place / communication / relationship を増やさない候補。

needs-audit:

- body-appearance と care-risk の境界に近い候補。
- concealing / hiding / tying / knot / thread / string に近い候補。
- 口語・怒り表現など、fighting へ寄せるか新規 motif 化するか判断が必要な候補。

hold:

- home-place / communication / relationship を厚くする候補。
- 医療・診断・症状へ寄りやすい候補。
- `港` のような短語部分一致リスクが高く、phrase 設計なしでは誤抽出しやすい候補。
