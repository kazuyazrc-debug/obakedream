# Stage14 軽監査メモ

Stage14は、140モチーフ到達後にすぐ次の20件追加へ進まず、relation / warning / fixture / audit の見通しを整える軽監査フェーズです。コード追加やUI変更は行いません。

## 引き継ぎ確認

- `AGENTS.md` を確認し、Next.js関連の判断前に `node_modules/next/dist/docs/` を読む制約を確認済み。
- 確認したNext.js docs:
  - `node_modules/next/dist/docs/index.md`
  - `node_modules/next/dist/docs/01-app/01-getting-started/02-project-structure.md`
  - `node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md`
- Stage14は監査フェーズであり、Next.js UI / routing / Server Component / Client Component の変更は対象外です。

## 現在値

| item | count |
|---|---:|
| registry total | 140 |
| relation total | 308 |
| general count | 0 |

by cluster:

| cluster | count |
|---|---:|
| water-weather | 34 |
| home-place | 64 |
| movement | 43 |
| communication | 34 |
| relationship | 36 |
| body-appearance | 28 |
| emotion-action | 44 |
| nature-sky | 16 |
| object-record | 9 |
| care-risk | 0 |
| general | 0 |

by kind:

| kind | count |
|---|---:|
| intentional-one-way | 10 |
| should-be-reciprocal | 145 |
| should-be-conflict | 2 |
| generic-specific | 65 |
| context-helper | 86 |
| stale-relation | 0 |

validator summary:

| severity | count |
|---|---:|
| error | 0 |
| warning-fix-soon | 188 |
| warning-review-ok | 52 |
| info | 308 |

## 監査優先順位

1. `glasses / eye / mirror / photo / book` 周辺の横断relation
2. `body-appearance / home-place / object-record` をまたぐrelation
3. `warning-review-ok` 52件の理由カテゴリ再確認
4. relation total 308件のうち、次回追加前に見るべき高密度cluster
5. next-20候補のカテゴリ配分と粒度確認

## glasses 周辺relation

Stage13で追加した `glasses` は3件のone-way neighborを持ちます。全件分類済みで、`general` と `stale-relation` には落ちていません。

| source | target | cluster | kind | audit result |
|---|---|---|---|---|
| `glasses` | `eye` | body-appearance | should-be-reciprocal | 見え方・視線の調整として説明可能 |
| `glasses` | `mirror` | home-place | should-be-reciprocal | 鏡の前で自己像と見え方が重なるため説明可能 |
| `glasses` | `book` | body-appearance | should-be-reciprocal | 読む・理解するための補助として説明可能 |

Stage15で追加候補に `mask / hat / makeup / shadow` のような外見・知覚系が入る場合、`glasses` と `eye / mirror / clothes / photo` の近縁が増えすぎないかを先に見る必要があります。

## 横断relation監査

`glasses` 周辺を含む `eye / mirror / photo / book` の関係は、body / object / place / person にまたがります。Stage14では自動双方向化せず、次のように扱います。

| pattern | examples | policy |
|---|---|---|
| 見え方・視線 | `glasses / eye / mirror / photo` | body-appearanceを基本にしつつ、鏡や映画館など場所性が強い場合はhome-placeを許容 |
| 記録・読み取り | `book / photo / letter / notebook` | object-recordを基本にし、通信や場所の文脈が強い場合は既存clusterを優先 |
| 自己像 | `mirror / clothes / hair / naked / glasses` | 診断的・断定的に寄せず、見られ方・役割・自己確認として扱う |
| 情報理解 | `book / glasses / school / library` | generic-specificとして扱い、具体motifを優先しすぎて未検出を生まないか確認 |

## warning-review-ok

Stage14時点の `warning-review-ok` は52件です。全件が理由カテゴリに入っています。

| category | count |
|---|---:|
| known-alias-overlap | 47 |
| accepted-near-neighbor | 0 |
| intentional-one-way-conflict | 1 |
| generic-specific-review-ok | 4 |
| context-helper-review-ok | 0 |

Stage15では新規motif追加によって `known-alias-overlap` が増えやすいため、次の条件を満たすものだけ許容します。

- 既存fixtureで主役が入れ替わっても壊れない
- relationで説明できる
- 短語aliasを増やさない
- warning-fix-soonを188より増やさない
- 許容理由をdocsに残す

## relation info

| info type | count |
|---|---:|
| relation info | 303 |
| alias info | 5 |
| other info | 0 |

relation totalは増減自体を問題にしません。Stage14では、分類済みか、説明可能か、次の20件追加で増えすぎるclusterが見えているかを重視します。

優先監査cluster:

| priority | cluster | reason |
|:---:|---|---|
| 1 | home-place | 64件で最大。場所・物・自己像の横断が増えている |
| 2 | emotion-action | 44件。行動系追加でalias重複が増えやすい |
| 3 | movement | 43件。場所・乗り物・道具のgeneric-specificが増えやすい |
| 4 | relationship | 36件。人物・役割の粒度差が出やすい |
| 5 | communication | 34件。既にchat / sns / email / phone系が密で、next-20候補のapp / video / commentと衝突しやすい |
| 6 | body-appearance | 28件。glasses追加後、eye / mirror / clothes周辺の横断が増える可能性がある |

## fixture / audit 候補

Stage14では追加実装しませんが、Stage15で使うfixture候補を以下に固定します。

| id draft | text draft | expected focus |
|---|---|---|
| `stage15-glasses-book-library` | 図書館で眼鏡をかけて本を読む夢だった | `glasses / book / library` |
| `stage15-mirror-glasses-clothes` | 鏡の前で眼鏡をかけると服が違って見える夢だった | `glasses / mirror / clothes` |
| `stage15-app-notification-smartphone` | スマホのアプリ通知を何度も見る夢だった | `app / smartphone / notification` |
| `stage15-mask-mirror-eye` | 鏡の前でマスクをして目だけが見える夢だった | `mask / mirror / eye` |

## next-20への接続

Stage15では既存 `data/batches/batch-08` と衝突する呼び方を避けます。候補段階では `next-20候補` と呼び、実装時のbatch名は改めて決めます。
