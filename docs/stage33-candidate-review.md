# Stage33 candidate review

## 前提確認
- AGENTS.md を確認済み。
- `node_modules/next/dist/docs/index.md` を確認済み。
- Stage33 は Next.js UI 変更ではなく、`batch-18` の追加実装と監査fixture整備として扱った。
- Next.js 固有変更、UI全面改修、DB本実装、AI API導入、抽出ロジック大規模再設計、anger新規motif確定は行わない。

## 採用方針
Stage32監査の結果、home-place / communication / relationshipは引き続き抑制枠とした。前半10件はnext-addition-readyからobject-record / natureを優先し、body-appearanceは前半に置かなかった。後半10件はneeds-audit寄りとしてmovement / digital object / body-appearanceを扱い、fixtureで境界を固定した。

前半10件:

- `root`
- `bud`
- `wildflower`
- `lichen`
- `reed`
- `rubber_band`
- `binder`
- `index_card`
- `coupon`
- `pencil_case`

後半10件:

- `sidewalk`
- `escalator`
- `platform_edge`
- `lost_ticket`
- `checklist`
- `progress_bar`
- `loading_icon`
- `eyebrow`
- `chin`
- `wristwatch`

## 採用しない候補
Stage33では以下を採用しない。

- `anger`
- `whispering`
- `wound`
- `secret`
- `message`
- `bedroom`
- `bathroom`
- `medicine`
- `meeting`
- `office_room`

除外理由:

- home-place / communication / relationshipを厚くする候補は抑制枠。
- medical / diagnostic 方向へ寄りやすい候補は非診断ゲート上、Stage33では採用しない。
- 怒り口語は `fighting` での比較を継続し、`anger` 新規motif化はStage33でも未確定。
- 追加候補と実夢文監査由来の改善候補を混ぜすぎない。

## 実夢文監査の扱い
Stage33では実夢文監査由来の改善候補を、20件追加候補とは別枠で扱った。抽出改善は大規模に入れず、fixture / 比較メモ中心に残した。

比較対象:

- `being_late`
- `exam`
- `ex_partner`
- `making_mistake`
- `being_chased`
- `電車 -> car`
- `廊下 -> school`
- `キレる / キレ散らかす / ブチギレる`

記録方針:

- 主役が拾えるか。
- 上位6件に残るか。
- 誤抽出が混ざらないか。
- Stage33追加motifが既存の実夢文監査を上書きしないか。

## 影響メモ
- dict version: `dict-v0.18.0` 相当の追加。
- fixture impact: `tests/fixtures/stage33.ts` にbatch-18抽出fixture、代表夢fixture、実夢文監査fixtureを追加。
- warning impact: 1文字aliasと2文字以下weakを避け、`warning-fix-soon = 184` を維持。
- relation impact: Stage33全20件をrelation reviewの分類対象に追加し、`general count = 0` / `stale-relation = 0` を維持。

## next-addition-ready / needs-audit / hold
next-addition-ready:

- object-record / natureで、既存relationに自然に接続できる候補。
- fixtureで主役差を説明しやすい候補。
- home-place / communication / relationshipを増やさない候補。

needs-audit:

- movementに近く、既存の `traffic_light / crosswalk / detour / turn_back / dead_end` と境界確認が必要な候補。
- body-appearanceに近く、非診断・非断定の文言確認が必要な候補。
- digital objectに近く、communicationへ寄りすぎない確認が必要な候補。

hold:

- home-place / communication / relationshipをさらに厚くする候補。
- anger新規motif化や感情actionの大規模再設計を要求する候補。
- medical / diagnostic方向に寄りやすい候補。
- 短語部分一致の誤抽出を起こしやすく、phrase設計だけで安全に扱いにくい候補。
