# Validator Warning Review

Stage2ではvalidatorの警告を次の3分類で扱います。

## warning-fix-soon

次のbatch追加前に修正候補として見る警告です。

- 危険な短いalias
- scoreImpact不足
- blockが短すぎる
- 断定的すぎるblock表現

現在の短いalias警告は、初期batch由来の「蛇」「水」「海」「家」など、夢占いで重要な1文字語を拾うためのものを含みます。Stage3ではerror化せず、代表夢fixtureと抽出audit fixtureで挙動を固定したうえで、Stage4以降の抽出改善で扱います。

短いweak語は `weak-term-risk` として `warning-fix-soon` に分類します。

## warning-review-ok

意図を確認できれば許容できる警告です。

- 既存motifとのalias重複
- 片方向conflict

Stage2では、`exam` と `school`、`river` と `water` のような近縁関係をデータで明示しています。片方向relationは、抑制の主語を明確にしたい場合に許容します。

## info

レビュー補助です。

- 同一motif内の語彙重複
- 片方向neighbor

infoは実装を止めませんが、次の20件追加レビュー時に近縁整理の材料として使います。

## Stage5 baseline

Stage5時点では、production registryのdiagnostic件数を次の基準値として管理します。

| severity | count |
|---|---:|
| error | 0 |
| warning-fix-soon | 189 |
| warning-review-ok | 21 |
| info | 65 |

`warning-fix-soon` は既存互換を保つため即時error化しません。ただしStage6で `batch-04` を追加する前に、件数が189を超えていないこと、増えた場合は理由がdocsに残っていることを確認します。
## Stage6 result

Stage6で `batch-04` を追加した後も、`warning-fix-soon` は189件を維持します。新規20モチーフでは1文字aliasと2文字以下のweak語を追加していません。

| severity | count |
|---|---:|
| error | 0 |
| warning-fix-soon | 189 |
| warning-review-ok | 26 |
| info | 125 |
## Stage7 relation / info operation

Stage7では `info` 125件を、one-way relation info 122件とalias重複info 3件に分けて扱います。one-way relationはwarning-review-okの片方向conflict 5件も含め、合計127件をrelation review対象として分類します。

分類済みrelationは [stage7-relation-review.md](stage7-relation-review.md) に記録し、未分類を増やさないことを100モチーフ到達前の運用ゲートにします。

## Stage8 result

Stage8で `batch-05` を追加した後も、`warning-fix-soon` は189件を維持しています。新規20モチーフでは1文字aliasを追加せず、2文字以下のweak語も追加していません。

| severity | count |
|---|---:|
| error | 0 |
| warning-fix-soon | 189 |
| warning-review-ok | 34 |
| info | 185 |

relation review summary:

| item | count |
|---|---:|
| total one-way relations | 185 |
| one-way info relations | 180 |
| one-way warning relations | 5 |

`warning-review-ok` の増加分は主に近縁relation/alias重複のレビュー許容です。`info` は `batch-05` のcontext-helper / generic-specific relationが増えたことによるレビュー補助で、Stage8ではdocsとrelation分類テストで追跡します。

## Stage9 warning-review-ok operation

Stage9では `warning-review-ok` に理由カテゴリを付けて管理します。詳細は [warning-review-ok-policy.md](warning-review-ok-policy.md) にまとめています。

| category | count |
|---|---:|
| known-alias-overlap | 29 |
| accepted-near-neighbor | 0 |
| intentional-one-way-conflict | 1 |
| generic-specific-review-ok | 4 |
| context-helper-review-ok | 0 |

`info` は relation info と alias info に分けて確認します。

| info type | count |
|---|---:|
| relation info | 180 |
| alias info | 5 |
| other info | 0 |

Stage9完了時点でも `error = 0`、`warning-fix-soon = 189` を維持します。

## Stage10 result

Stage10で `batch-06` を追加した後も、`warning-fix-soon` は189件を維持しています。

| severity | count |
|---|---:|
| error | 0 |
| warning-fix-soon | 189 |
| warning-review-ok | 47 |
| info | 248 |

warning-review-ok reason categories:

| category | count |
|---|---:|
| known-alias-overlap | 42 |
| accepted-near-neighbor | 0 |
| intentional-one-way-conflict | 1 |
| generic-specific-review-ok | 4 |
| context-helper-review-ok | 0 |

info visibility:

| info type | count |
|---|---:|
| relation info | 243 |
| alias info | 5 |
| other info | 0 |

`warning-review-ok` の増加は主に、`ticket / train`、`restaurant / shop`、`desk / notebook` などの近縁alias重複です。理由カテゴリは全件分類済みです。

## Stage11 baseline

Stage11は監査フェーズのためmotif追加なし。diagnostic件数はStage10と同一です。

| severity | count |
|---|---:|
| error | 0 |
| warning-fix-soon | 189 |
| warning-review-ok | 47 |
| info | 248 |

known-alias-overlap 42件の分類（継続許容37件・要見直し3件・削減候補2件）は [warning-review-ok-policy.md](warning-review-ok-policy.md) に記録済みです。

relation cluster:

| cluster | count |
|---|---:|
| home-place | 56 |
| movement | 39 |
| water-weather | 30 |
| emotion-action | 27 |
| communication | 24 |
| relationship | 21 |
| body-appearance | 18 |
| object-record | 16 |
| nature-sky | 14 |
| care-risk | 0 |
| general | 3 |
| **合計** | **248** |

`general` 枠3件の内訳と存続理由は [stage11-relation-cluster.md](stage11-relation-cluster.md) に記録済みです。batch-07前の処置対象は削減候補2件（`テスト` / `試験を受ける` を `school` から削除）です。

## Stage12 result

Stage12でbatch-07a（9件）とbatch-08（10件）を追加し、139モチーフへ拡張しました。`warning-fix-soon` は188件で、ゲート条件の189件上限を維持しています。

| severity | count |
|---|---:|
| error | 0 |
| warning-fix-soon | 188 |
| warning-review-ok | 52 |
| info | 305 |

warning-review-ok reason categories:

| category | count |
|---|---:|
| known-alias-overlap | 47 |
| accepted-near-neighbor | 0 |
| intentional-one-way-conflict | 1 |
| generic-specific-review-ok | 4 |
| context-helper-review-ok | 0 |

relation review summary:

| item | count |
|---|---:|
| total one-way relations | 305 |
| one-way info relations | 300 |
| one-way warning relations | 5 |
| stale-relation | 0 |

relation cluster distribution:

| cluster | count |
|---|---:|
| home-place | 63 |
| movement | 43 |
| emotion-action | 44 |
| communication | 34 |
| water-weather | 34 |
| relationship | 36 |
| body-appearance | 26 |
| nature-sky | 16 |
| object-record | 9 |
| care-risk | 0 |
| general | 0 |
| **合計** | **305** |

`general` 枠がStage12で0件になりました。batch-07/08の新規motifは全件クラスタ分類済みです。`warning-fix-soon` は188件で、Stage5以来維持してきた189件上限を遵守しています。

Stage12のknown-alias-overlap詳細は [warning-review-ok-policy.md](warning-review-ok-policy.md) に記録済みです。

## Stage13 result

Stage13では大規模追加に入らず、Stage12で139件に止まっていたregistryを1件だけ補完しました。追加motifは `glasses`（眼鏡）です。短いalias / weak語を追加せず、`warning-fix-soon` は188件のまま増加していません。

| severity | count |
|---|---:|
| error | 0 |
| warning-fix-soon | 188 |
| warning-review-ok | 52 |
| info | 308 |

relation review summary:

| item | count |
|---|---:|
| registry total | 140 |
| relation total | 308 |
| stale-relation | 0 |
| general count | 0 |

relation by cluster:

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

relation by kind:

| kind | count |
|---|---:|
| intentional-one-way | 10 |
| should-be-reciprocal | 145 |
| should-be-conflict | 2 |
| generic-specific | 65 |
| context-helper | 86 |
| stale-relation | 0 |

`glasses` の新規relationは `eye / mirror / book` に限定し、body-appearance / home-place の既存clusterで分類済みです。

## Stage14 audit

Stage14は監査フェーズのため、production motifの追加は行いません。数値はStage13完了時点から変化なしです。既存 `data/batches/batch-08` と衝突する呼び方を避けるため、次期20件候補は `next-20候補` と呼びます。

| severity | count |
|---|---:|
| error | 0 |
| warning-fix-soon | 188 |
| warning-review-ok | 52 |
| info | 308 |

relation review summary:

| item | count |
|---|---:|
| registry total | 140 |
| relation total | 308 |
| stale-relation | 0 |
| general count | 0 |

warning-review-ok reason categories:

| category | count |
|---|---:|
| known-alias-overlap | 47 |
| accepted-near-neighbor | 0 |
| intentional-one-way-conflict | 1 |
| generic-specific-review-ok | 4 |
| context-helper-review-ok | 0 |

info visibility:

| info type | count |
|---|---:|
| relation info | 303 |
| alias info | 5 |
| other info | 0 |

Stage14の監査詳細は [stage14-light-audit.md](stage14-light-audit.md)、次期20件候補は [next-20-candidate-review.md](next-20-candidate-review.md) に記録します。

## Stage15 result

Stage15では `batch-09` として20モチーフを追加し、160モチーフへ拡張しました。1文字aliasと2文字以下のweak語を新規追加せず、`warning-fix-soon` は188件のまま維持しています。

| severity | count |
|---|---:|
| error | 0 |
| warning-fix-soon | 188 |
| warning-review-ok | 63 |
| info | 368 |

relation review summary:

| item | count |
|---|---:|
| registry total | 160 |
| relation total | 367 |
| stale-relation | 0 |
| general count | 0 |

relation by cluster:

| cluster | count |
|---|---:|
| water-weather | 44 |
| home-place | 82 |
| movement | 44 |
| communication | 44 |
| relationship | 42 |
| body-appearance | 34 |
| emotion-action | 51 |
| nature-sky | 16 |
| object-record | 10 |
| care-risk | 0 |
| general | 0 |

relation by kind:

| kind | count |
|---|---:|
| intentional-one-way | 10 |
| should-be-reciprocal | 188 |
| should-be-conflict | 2 |
| generic-specific | 82 |
| context-helper | 85 |
| stale-relation | 0 |

warning-review-ok reason categories:

| category | count |
|---|---:|
| known-alias-overlap | 58 |
| accepted-near-neighbor | 0 |
| intentional-one-way-conflict | 1 |
| generic-specific-review-ok | 4 |
| context-helper-review-ok | 0 |

info visibility:

| info type | count |
|---|---:|
| relation info | 362 |
| alias info | 6 |
| other info | 0 |

## Stage16 audit

Stage16は監査フェーズのため、production motifの追加は行いません。数値はStage15完了時点から変化なしです。

| severity | count |
|---|---:|
| error | 0 |
| warning-fix-soon | 188 |
| warning-review-ok | 63 |
| info | 368 |

relation review summary:

| item | count |
|---|---:|
| registry total | 160 |
| relation total | 367 |
| stale-relation | 0 |
| general count | 0 |

Stage16では `home-place = 82`、メディア系、通信アプリ系、教育・評価者系の監査を [stage16-audit.md](stage16-audit.md) に記録します。ChatGPT確認用のレビュー文は [stage16-chatgpt-review.md](stage16-chatgpt-review.md) にまとめています。
