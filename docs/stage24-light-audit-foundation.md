# Stage24 light audit and foundation memo

## 1. 前提確認

- AGENTS.md を確認済み。
- Stage24 は Next.js UI 変更ではなく、240モチーフ時点の軽監査 + 基盤整備フェーズ。
- Next.js 固有変更、UI全面改修、DB化の本実装、AI API導入、fuzzy search / N-gram / 本格形態素解析、relation 自動双方向化は対象外。
- Stage23 は実装完了済みで、test / lint / build は通過済み。
- Stage24 では新規motif追加、`data/batches` 変更、UI変更は行わない。

## 2. 固定形式の数値出力

```text
registry total: 240
relation total: 603

by cluster:
water-weather: 70
home-place: 106
movement: 54
communication: 60
relationship: 54
body-appearance: 88
emotion-action: 100
nature-sky: 32
object-record: 39
care-risk: 0
general: 0

by kind:
intentional-one-way: 10
should-be-reciprocal: 247
should-be-conflict: 2
generic-specific: 267
context-helper: 77
stale-relation: 0

general count: 0
```

validator summary:

```text
error: 0
warning-fix-soon: 188
warning-review-ok: 99
info: 630
```

## 3. Stage24の目的

Stage24 は 240 -> 260 の追加に入る前に、Stage23で増えた relation / warning / fixture / audit の説明可能性を整えるフェーズとする。

主目的:

- `generic-specific = 267` を最優先監査対象として、増加理由を cluster / motif group ごとに説明可能にする。
- `object-record` / `body-appearance` / `emotion-action` の過密化を監査する。
- `blank_page / writing / reading / notebook`、`wiping / washing / towel / sleeve`、`ribbon / thread / knot / wrapping / concealing / hiding` の主役差を再確認する。
- `scar / injury / past` の非診断・非断定方針を維持する。
- ロードマップ優先度Aを、実装前に docs 上の運用案へ落とす。

ロードマップ優先度A:

- 非診断・免責文言の品質ゲート化
- ベータ版フィードバック収集
- 辞書 semver / batch snapshot

## 4. やること / やらないこと

やること:

- Stage24監査メモを docs に残す。
- warning / relation / fixture / audit の管理方針を整理する。
- 非診断・免責文言ゲートを docs / validator 案として整理する。
- フィードバック収集の最小仕様を整理する。
- `dict-v0.x.y` 形式の semver と batch snapshot の運用案を整理する。
- next-20候補を `next-addition-ready / needs-audit / hold` の3分類で再棚卸しする。
- README に残す計画メモ案を整理する。

やらないこと:

- 新規motif追加
- `data/batches` の実装変更
- UI全面改修
- DB化の本実装
- AI API導入
- fuzzy search / N-gram / 本格形態素解析
- Next.js 固有実装変更
- relation 自動双方向化

## 5. 軽監査の優先順位

| priority | target | audit point |
|:---:|---|---|
| 1 | `generic-specific = 267` | Stage23追加で増えた relation kind が、上位/下位・補助関係として説明できるか |
| 2 | `emotion-action = 100` | `wiping / wrapping / unpacking / carving` が既存 action と混線しすぎていないか |
| 3 | `body-appearance = 88` | `shoulder / ankle / sleeve / necklace` が非診断・外見/支えの象徴として扱えているか |
| 4 | `object-record = 39` | `drawer / stamp / bead / spoon / blank_page / knot` が便利な物置き分類になっていないか |
| 5 | `blank_page / writing / reading / notebook` | 書く前の余白、書く行動、読む行動、記録媒体の主役差が保てているか |
| 6 | `wiping / washing / towel / sleeve` | 洗う、拭く、道具、身につける布の境界が保てているか |
| 7 | `ribbon / thread / knot / wrapping / concealing / hiding` | 結ぶ・包む・仕上げる行動が、隠す/逃げる行動へ寄りすぎていないか |
| 8 | `scar / injury / past` | scar が injury そのものや医療判断へ寄らず、過去に残った印象として扱えているか |

## 6. warning / relation 管理方針

warning:

- `warning-fix-soon <= 188` を維持する。
- `warning-review-ok = 99` は件数だけでなく、理由カテゴリが説明可能かを重視する。
- 1文字 alias 禁止、2文字以下の weak 原則禁止を維持する。
- 非診断対象 motif の block / question / alias に診断・治療・症状断定へ寄る文言がないかを docs 上で管理する。

relation:

- `general count = 0` と `stale-relation = 0` を維持する。
- relation total の増減は主目標にしない。
- `generic-specific = 267` は以下の観点で分類理由を確認する。
  - 上位/下位概念として自然か。
  - object が place / action の代替になっていないか。
  - body-appearance が care-risk 化していないか。
  - emotion-action が便利分類になっていないか。
  - fixture で主役差を確認できるか。

Stage23追加分の重点確認:

- `drawer`: storage / home-place ではなく、手元の区画・記録補助として説明する。
- `blank_page`: notebook / writing / reading の補助だが、空白そのものを主役にする。
- `wiping`: washing ではなく、洗った後や残った跡を整える行動として説明する。
- `wrapping`: concealing ではなく、渡す前に整える、守る外側を作る行動として説明する。
- `shoulder / ankle`: injury / pain の診断ではなく、支え・歩幅・負担の象徴として説明する。

## 7. 非診断・免責文言ゲート案

Stage24では実装せず、docs / validator案として整理する。

対象候補:

- 既存: `injury`, `pain`, `blood`, `hospital`, `scar`
- Stage23追加: `shoulder`, `ankle`
- 今後候補: `wound`, `medicine`, `throat`, `knee`, `elbow` など

禁止・注意語案:

- 診断を示す語: `診断`, `病気`, `疾患`, `症状`, `治療`, `処方`
- 断定を示す語: `必ず`, `絶対`, `確実に`, `原因です`
- 不安を煽る語: `危険`, `重症`, `悪化` などは care-risk 以外では原則避ける

必須文脈案:

- 夢占い上の象徴として扱う。
- 体調判断ではないことを明記する。
- 現実の不調がある場合は専門家へ相談する趣旨を、必要な motif の caution に置く。
- scar は `injury` そのものではなく、過去に残った印象として扱う。
- shoulder / ankle は、身体部位ではあるが、負担・支え・歩幅の象徴を主役にする。

validator案:

- `nonDiagnosticMotifIds` を定義する。
- 対象 motif の blocks / questions / aliases を走査する。
- 禁止・注意語を検出した場合は `warning-fix-soon` または専用 `warning-review-ok` とする。
- 必須文脈が欠ける場合は、最初は docs audit に留め、Stage25以降で test 化する。

## 8. フィードバック収集の最小仕様案

Stage24では UI / DB 実装に入らず、最小仕様だけ固定する。

評価項目:

- 的確
- まあまあ
- ズレた
- 自由記述

保存候補項目:

- `dictVersion`
- `selectedMotifs`
- `resultSummary`
- `feedbackRating`
- `freeText`
- `timestamp`

追加検討項目:

- `sessionId` は匿名の短期識別子に留める。
- `inputText` は原文保存しない案を優先し、必要なら要約または hash を検討する。
- `questionAnswers` は改善に有用だが、最小仕様では任意にする。
- `appVersion` / `engineVersion` は dictVersion とは分けて将来検討する。

運用案:

- 初期はローカル JSONL または軽量 endpoint への送信案を docs で比較する。
- DB化は Stage24 では行わない。
- 収集データは辞書改善・fixture追加・warning分類見直しに使う。

## 9. dict semver / snapshot 運用案

semver案:

- 辞書 version は `dict-v0.x.y` 形式を候補とする。
- 例: `dict-v0.13.0`
- motif追加 batch を入れる場合は minor を上げる。
- docs / fixture / warning分類 / relation分類のみなら patch を上げる。
- 抽出仕様や分類体系の破壊的変更は、将来的に major 更新候補とする。

暫定ルール:

| change | version update |
|---|---|
| 20 motif 追加 | `dict-v0.x.0` の minor up |
| docs / README の監査更新 | patch up候補 |
| fixture / test 追加 | patch up候補 |
| warning gate 追加 | patch up候補、ただし既存出力に影響する場合は minor候補 |
| relation cluster 大幅再分類 | minor候補 |
| registry format 変更 | major候補 |

batch snapshot案:

- batch単位で registry summary を保存する。
- 保存先候補: `docs/snapshots/` または `data/snapshots/`
- Stage24では実装せず、形式だけ決める。

snapshot保存候補:

- `dictVersion`
- `batchId`
- `registryTotal`
- `relationTotal`
- `warningSummary`
- `byCluster`
- `byKind`
- `generalCount`
- `staleRelationCount`
- `createdAt`

## 10. fixture / audit / test の不足観点リスト

不足観点:

- `generic-specific = 267` の cluster別 snapshot fixture
- `object-record` 過密化確認
- `body-appearance` 過密化確認
- `emotion-action` 過密化確認
- `blank_page / writing / reading / notebook` の主役差
- `wiping / washing / towel / sleeve` の主役差
- `ribbon / thread / knot / wrapping / concealing / hiding` の混線防止
- `scar / injury / past` の非診断維持
- `shoulder / ankle` の非診断維持
- feedback収集後に `ズレた` 理由を fixture候補へ変換する運用

test化候補:

- `stage24-generic-specific-summary`
- `stage24-object-record-density`
- `stage24-body-appearance-nondiagnostic`
- `stage24-emotion-action-boundary`
- `stage24-blank-page-writing-reading-boundary`
- `stage24-wiping-washing-towel-sleeve-boundary`
- `stage24-ribbon-thread-knot-wrapping-not-concealing`
- `stage24-scar-injury-past-nondiagnostic`
- `stage24-dict-version-snapshot-shape`

## 11. next-20候補の3分類結果

Stage24では採用確定ではなく、240 -> 260 の前提棚卸しとして扱う。

### next-addition-ready

比較的 relation が説明しやすく、home-place / communication / relationship を増やしにくい候補。

| candidate | reason |
|---|---|
| `postcard` | `letter / stamp / photo / travel` と接続できるが、message本体ではなくobject-recordとして扱える |
| `basket` | `bag / gift / flower / carrying` と接続しやすく、手元の入れ物として説明可能 |
| `jar` | `cup / water / shelf / box` と接続でき、保存するobjectとして扱える |
| `bench` | `park / waiting / chair` と接続しやすいが、placeではなくobjectとして扱える |
| `curtain` | `window / shadow / clothes` と接続でき、境界や見え方のobjectとして説明可能 |
| `nest` | `bird / tree / baby` と接続でき、home-place本体ではなく自然側の居場所として扱える |

### needs-audit

近縁が濃く、fixtureで主役差を固定してから採用判断する候補。

| candidate | reason |
|---|---|
| `needle` | `thread / clothes / hand` と近く、刺す・縫う・痛みの境界確認が必要 |
| `paintbrush` | `painting / brush / hand` と近く、既存 brush との主役差が必要 |
| `ladder` | `stairs / climbing / falling` と近く、movement過密化の確認が必要 |
| `glove` | `hand / clothes / scarf` と近く、body-appearance過密化の確認が必要 |
| `knee` | body部位で非診断ゲート対象。`foot / ankle / tripping` と近い |
| `elbow` | body部位で非診断ゲート対象。`hand / shoulder` と近い |
| `lamp` | `lantern / candle / dark` と近く、Stage23 lantern との差分確認が必要 |
| `plate` | `dish / spoon / cooking` と近く、既存 dish との粒度差確認が必要 |

### hold

Stage24時点では採用しない候補。

| candidate | reason |
|---|---|
| `whispering` | `voice / mouth / chat` に近く、communicationを過密化しやすい |
| `wound` | `scar / injury / blood` に近く、非診断・医療断定リスクが高い |
| `secret` | `concealing / hiding / password / envelope` と混線しやすい |
| `message` | `chat / comment / notification / email` に近く、communicationの主役差を崩しやすい |
| `bedroom` | `pillow / sleep / blanket / house` に近く、home-placeを増やす |
| `bathroom` | `soap / towel / washing / toilet` に近く、home-placeを増やす |
| `medicine` | care-risk / medical 文脈が強く、非診断ゲート実装前は保留 |
| `meeting` | `coworker / boss / workplace / classmate` と近く、relationship / workplaceを過密化する |

## 12. READMEに残す計画メモ案

```md
## Stage24

Stage24では新規motif追加に入らず、240モチーフ時点の軽監査と基盤整備方針を整理します。
- 監査対象: `generic-specific = 267`、`object-record`、`body-appearance`、`emotion-action`
- 重点境界: `blank_page / writing / reading / notebook`、`wiping / washing / towel / sleeve`、`ribbon / thread / knot / wrapping / concealing / hiding`
- `scar / injury / past` と `shoulder / ankle` は非診断・非断定方針を維持
- ロードマップ優先度Aとして、非診断・免責文言ゲート、フィードバック収集、`dict-v0.x.y` semver / batch snapshot を設計
- next-20候補は `next-addition-ready / needs-audit / hold` の3分類で再棚卸し
- `warning-fix-soon <= 188`、`general count = 0`、`stale-relation = 0` を維持
```

## 13. Stage25へ進む判断条件

Stage25へ進む条件:

- `generic-specific = 267` の主要増加理由が説明可能。
- `object-record / body-appearance / emotion-action` の過密化リスクが docs 上で整理済み。
- `scar / injury / past`、`shoulder / ankle` の非診断・非断定方針が崩れていない。
- 非診断・免責文言ゲートの validator案が明文化済み。
- フィードバック収集の最小仕様が `的確 / まあまあ / ズレた / 自由記述` で固定済み。
- `dict-v0.x.y` と batch snapshot の保存項目が整理済み。
- next-20候補が `next-addition-ready / needs-audit / hold` に分類済み。
- `warning-fix-soon <= 188`、`general count = 0`、`stale-relation = 0` を維持できる見込みがある。
