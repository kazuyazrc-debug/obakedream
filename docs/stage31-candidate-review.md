# Stage31 candidate review

## 前提確認
- AGENTS.md を確認済み。
- `node_modules/next/dist/docs/index.md` を確認済み。
- Stage31 は Next.js UI 変更ではなく、`batch-17` の motif 追加と実夢文監査fixtureの整備として扱った。
- Next.js 固有変更、UI全面改修、DB本実装、AI API導入、fuzzy search / N-gram / 本格形態素解析、relation 自動双方向化、anger の新規motif確定は対象外。

## 採用方針
Stage30 の軽監査を前提に、home-place / communication / relationship を増やさず、説明しやすい object-record / nature を前半へ寄せた。後半は needs-audit 寄りとして、移動判断、確認道具、body-appearance の細部を最小限採用した。

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

## 採用しない候補
Stage31 では `anger` / `whispering` / `wound` / `secret` / `message` / `bedroom` / `bathroom` / `medicine` / `meeting` / `office_room` は採用しない。

- home-place をさらに厚くする候補は採用しない。
- communication を過密化させる候補は採用しない。
- relationship 候補は前半に置かず、今回の20件にも採用しない。
- scar 系は非診断・非断定を維持し、医療・診断・症状へ寄せない。
- `anger` は Stage31 でも新規motif確定しない。

## 実夢文監査の扱い
Stage31 では、20件追加候補と実夢文監査由来の改善候補を分けて扱った。改善候補は fixture / 比較メモ中心で、既存 batch の抽出ロジック大規模変更は行っていない。

維持確認:

- `being_late`: 始業時間を過ぎる遅刻夢で上位6件に入る。
- `exam`: 期末試験、問題用紙、回答欄で `exam / answer_sheet` を拾う。
- `ex_partner`: 学生時代に付き合っていた人を拾う。
- `making_mistake`: 未対応チケット、長文クレーム、キーボード故障の仕事ミス夢を拾う。
- `being_chased`: 足音と行き止まりを含む追跡夢で `being_chased / footsteps / dead_end` を拾う。
- `電車 -> car`: 電車夢で `car` を混ぜない。
- `車に乗る`: car 抑制後も通常の車夢では `car` を拾う。
- `廊下 -> school`: 廊下単独で `school` を混ぜない。
- `学校の廊下`: school 抑制後も学校文脈では `school / hallway` を併存させる。
- `キレる / キレ散らかす / ブチギレる`: `anger` 新規motif化せず、既存 `fighting` で比較する。

最小修正:

- 新規 `calendar_page` の抽出用 phrase に `カレンダーをめくり` を追加。
- 既存 batch の意味変更や抽出ルール本体の変更は行わない。

## 影響メモ
- dict version: `dict-v0.17.0` 相当の追加。
- fixture impact: `tests/fixtures/stage31.ts` に batch-17 と実夢文監査の fixture を追加。
- warning impact: 1文字 alias と2文字以下 weak を避け、`warning-fix-soon = 184` を維持。
- relation impact: Stage31 全20件を relation review の分類対象に追加し、`general count = 0` / `stale-relation = 0` を維持。

## next-addition-ready / needs-audit / hold
next-addition-ready:

- object-record / nature で既存 relation の説明がしやすい候補。
- fixture で既存 motif との主役差を確認できる候補。
- home-place / communication / relationship を増やさない候補。

needs-audit:

- movement / emotion-action に近く、`being_chased / running / dead_end` と混線しやすい候補。
- body-appearance と care-risk の境界に近い候補。
- 怒り口語など、`fighting` へ寄せるか新規 `anger` motif 化するか判断が必要な候補。

hold:

- home-place / communication / relationship を厚くする候補。
- 医療・診断・症状へ寄りやすい候補。
- 短語部分一致リスクが高く、phrase 設計なしでは誤抽出しやすい候補。
