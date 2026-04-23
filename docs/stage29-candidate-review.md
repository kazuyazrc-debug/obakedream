# Stage29 candidate review

## 前提確認
- AGENTS.md を確認済み。
- `node_modules/next/dist/docs/index.md` を確認済み。
- Stage29 は Next.js UI 変更ではなく、`batch-16` の motif 追加と実夢文監査fixtureの最小整備として扱った。
- Next.js 固有変更、UI全面改修、DB本実装、AI API導入、fuzzy search / N-gram / 本格形態素解析、relation 自動双方向化、大規模な抽出ロジック再設計は対象外。

## 採用方針
Stage28 の軽監査を前提に、home-place / communication / relationship を増やさず、説明しやすい object-record / nature / body-appearance / emotion-action 補助を中心に20件を採用した。

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

## 採用しない候補
Stage29 では `anger` / `whispering` / `wound` / `secret` / `message` / `bedroom` / `bathroom` / `medicine` / `meeting` / `office_room` は採用しない。

- home-place をさらに厚くする候補は採用しない。
- communication を過密化させる候補は採用しない。
- relationship 候補は前半に置かず、今回の20件にも採用しない。
- scar / tears / crying / concealing / hiding / singing に近い候補は慎重扱いを継続する。

## 実夢文監査の扱い
Stage29 では、20件追加候補と抽出改善候補を分けて扱った。抽出改善は fixture で比較可能にし、必要最小限の alias / phrase 修正に留めた。

対象ケース:

- `being_late`: 始業時間を過ぎる遅刻夢。
- `exam`: 期末試験、問題用紙、回答欄。
- `ex_partner`: 学生時代に付き合っていた人。
- `making_mistake`: 未対応チケット、長文クレーム、キーが外れる仕事ミス夢。
- `being_chased`: 足音がついてくる、行き止まり。
- `電車 -> car`: 単独 `車` alias による部分一致誤抽出を抑える。
- `廊下 -> school`: `廊下` 単独で school が主役化しないようにする。
- `キレる / キレ散らかす / ブチギレる`: Stage29 では `anger` 新規motif化せず、既存 `fighting` へ寄せて比較する。

最小修正:

- `car` alias から単独 `車` を外し、`電車` からの部分一致誤反応を抑制。
- `school` alias から単独 `廊下` を外し、`hallway` の主役差を維持。
- `being_late` に `始業時間を過ぎる` / `始業時間を過ぎて` / `始業時間を2時間過ぎて` / `時間を過ぎている` を追加。
- `being_chased` に `足音がついてくる` / `足音がついてきて` / `後ろから足音がする` を追加。
- `exam` に `期末試験` / `問題用紙` / `回答欄` と、関連 phrase を追加。
- `ex_partner` に `付き合っていた人` / `昔付き合っていた人` / `学生時代に付き合っていた人` を追加。
- `making_mistake` に `大量の未対応チケット` / `長文のクレーム` / `キーが全部外れる` を追加。
- `fighting` に `ブチギレる` を追加。

## 影響メモ
- dict version: `dict-v0.16.0` 相当の追加。
- fixture impact: `tests/fixtures/stage29.ts` に batch-16 と実夢文監査の fixture を追加。
- warning impact: 単独 `車` を外したため `warning-fix-soon` は 185 から 184 へ減少。
- relation impact: Stage29 全20件を relation review の分類対象に追加し、`general count = 0` / `stale-relation = 0` を維持。

## next-addition-ready / needs-audit / hold
next-addition-ready:

- object-record / nature / body-appearance で既存 relation の説明がしやすい候補。
- 実夢文fixtureで既存 motif との主役差を確認できる候補。
- home-place / communication / relationship を増やさない候補。

needs-audit:

- 追跡夢、仕事ミス夢、試験夢など、実夢文では必要性が高いが既存 motif との主役差確認が必要な候補。
- body-appearance と care-risk の境界に近い候補。
- 口語・怒り表現など、`fighting` へ寄せるか新規 `anger` motif 化するか判断が必要な候補。

hold:

- home-place / communication / relationship を厚くする候補。
- 医療・診断・症状へ寄りやすい候補。
- 短語部分一致リスクが高く、phrase 設計なしでは誤抽出しやすい候補。
