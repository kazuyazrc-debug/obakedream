# Stage35 batch-19 implementation

## 前提確認
- AGENTS.md を確認済み。
- `node_modules/next/dist/docs/index.md` を確認済み。
- Stage35 は Next.js UI 変更ではなく、`batch-19` の motif 追加と fixture / audit 整備として実装した。
- Next.js 固有変更、UI全面改修、DB本実装、AI API導入、fuzzy search / N-gram / 本格形態素解析、relation 自動双方向化、anger 新規motif確定は対象外。

## 実装概要
Stage35では `batch-19` として20 motifを追加し、registry totalを340から360へ拡張した。Stage34監査を踏まえ、home-place / communication / relationshipは抑制枠として採用せず、前半はobject-record / nature中心、後半はmovement / digital object / body-appearanceの境界確認を伴う候補として扱った。

前半10件:

- `pine_needle`
- `berry`
- `daisy`
- `waterweed`
- `driftwood`
- `rubber_stamp`
- `notepad`
- `sticky_note`
- `paper_cup`
- `file_tab`

後半10件:

- `pedestrian_bridge`
- `ticket_gate`
- `platform_sign`
- `pause_button`
- `status_light`
- `screen_corner`
- `name_tag`
- `paper_crane`
- `temple`
- `jawline`

## 段階検証
前半10件後:

- registry total = 350
- relation total = 933
- `npm.cmd test` 通過
- `error = 0`
- `warning-fix-soon = 184`
- `general count = 0`
- `stale-relation = 0`

後半10件後:

- registry total = 360
- relation total = 963
- `npm.cmd test` 通過
- `npm.cmd run lint` 通過
- `npm.cmd run build` 通過
- relation は全件分類済み
- `general count = 0`
- `stale-relation = 0`

## relation 整理
Stage35追加分を `relationReview.ts` の以下へ反映した。

- `priorityClusterIds`
- `genericSpecificGroups`
- `reciprocalCandidateGroups`
- `classifyRelationCluster`

分類方針:

- `pine_needle` / `berry` / `daisy`: nature-sky
- `waterweed` / `driftwood`: water-weather寄りの自然物
- `rubber_stamp` / `notepad` / `sticky_note` / `paper_cup` / `file_tab` / `pause_button` / `status_light` / `screen_corner` / `name_tag` / `paper_crane`: object-record
- `pedestrian_bridge` / `ticket_gate` / `platform_sign`: movement
- `temple` / `jawline`: body-appearance

`comment -> sns` と `coworker -> workplace` の直接 neighbor 回避は維持した。`pause_button / status_light / screen_corner` は `progress_bar / loading_icon / monitor` 側のdigital objectとして扱い、communication本体へ寄せない方針にした。

## fixture / test
追加:

- `tests/fixtures/stage35.ts`
- `tests/stage35-batch-19.test.ts`

確認観点:

- Stage35 20件が登録され、hold候補が入っていないこと。
- `warning-fix-soon <= 184` を維持すること。
- Stage35 relationが `general` / `stale-relation` に落ちないこと。
- `temple` / `jawline` が非診断・非断定であること。
- `pedestrian_bridge / ticket_gate / platform_sign` がmovement境界を壊さないこと。
- `pause_button / status_light / screen_corner` がcommunication本体へ寄りすぎないこと。
- `電車 -> car` 抑制、`廊下 -> school` 抑制、怒り口語の `fighting` 最小対応を壊さないこと。

## 実夢文監査
Stage35でも実夢文監査由来の改善候補を追加候補とは別枠で扱い、fixture / 比較メモ中心に留めた。

- `being_late`: 遅刻夢で上位6件に入る。
- `exam`: 試験夢で拾える。
- `ex_partner`: 元恋人夢で拾える。
- `making_mistake`: 仕事ミス夢で `monitor` / `keyboard` と併存できる。
- `being_chased`: 追跡夢で `footsteps` / `dead_end` と併存できる。
- `電車 -> car`: 電車文脈で `car` が混ざらない。
- `車に乗る`: 通常のcar夢では `car` が拾える。
- `廊下 -> school`: 廊下単独で `school` が混ざらない。
- `学校の廊下`: 学校文脈では `school` / `hallway` が併存できる。
- `キレる / キレ散らかす / ブチギレる`: Stage35でも `anger` 新規motif化せず、既存 `fighting` の比較対象として維持。

## 固定形式の数値出力
```text
registry total: 360
relation total: 963

by cluster:
water-weather: 95
home-place: 117
movement: 110
communication: 63
relationship: 56
body-appearance: 129
emotion-action: 145
nature-sky: 92
object-record: 156
care-risk: 0
general: 0

by kind:
intentional-one-way: 10
should-be-reciprocal: 229
should-be-conflict: 1
generic-specific: 651
context-helper: 72
stale-relation: 0

general count: 0
```

validator summary:

```text
error: 0
warning-fix-soon: 184
warning-review-ok: 126
info: 990
```

## Stage36監査論点
- `generic-specific = 651` の説明負債。
- `object-record = 156` の過密化。文具、紙片、画面表示、名札、折り紙の粒度差。
- `movement = 110` の境界。`pedestrian_bridge / ticket_gate / platform_sign` が `platform_edge / lost_ticket / train / being_late / dead_end` を壊していないか。
- `body-appearance = 129` の非診断維持。`temple / jawline / chin / face / cheek / forehead` の粒度差。
- `waterweed / driftwood` が water-weather と nature-sky の境界で説明可能か。
- `pause_button / status_light / screen_corner / progress_bar / loading_icon / monitor` とcommunicationの境界。
- 怒り口語を今後も `fighting` に寄せるか、`anger` motifを検討するか。
