# Stage5 Extraction Quality Gate

Stage5は `batch-04` を実装する前の抽出品質ゲート強化フェーズです。60モチーフのまま、weak語、短語alias、relation順位補助、warning管理、audit fixtureを整えます。

## Weak Term Policy

Stage5では `secondaryKeywords` を `weak` として扱い、次の3段階で候補化を判断します。

| 状態 | 扱い |
|---|---|
| weak語のみ | 候補化しない |
| weak + 同一motifのphrase/alias | 通常候補として扱う |
| weak + 近縁motifの強ヒット | 補助候補として低スコアで残す |

例:

- `上司に怒られる夢` は `workplace` のweak語だけなので候補化しない
- `職場で上司と話す夢` は `職場` のaliasがあるため `workplace` を候補化する
- `雨に濡れる夢` は `rain` が強く、`water` がneighborとして補助的に入る

## Short Alias Review

1文字aliasは原則として新規追加しません。既存の `水`、`海`、`血` のような短語は夢の中で強い象徴として成立するため、即削除ではなくレビュー対象として管理します。

- `phrase`: 文脈つきの強い抽出語。新規motifでは最低3件を用意する
- `alias`: 表記ゆれ、表示名、自然な言い換え。1文字は避ける
- `weak`: 単独では誤検出しやすい補助語。短いweak語は `warning-fix-soon` として扱う

## Relation Ranking

relationは主に抑制ではなく順位補助に使います。

- `neighbors`: 併存を基本とし、近縁motifの強ヒットがある場合は候補順位を少し補助する
- `conflicts`: specific/genericのように片方を優先すべき場合のみ抑制に使う
- `notification / smartphone`、`ship / sea`、`clock / being_late` は過剰抑制しない
- `childhood_home / house` のようなspecific/generic関係はspecific優先を維持する

## Warning Baseline

Stage5時点のproduction registry診断件数は次の通りです。

| severity | count | 運用 |
|---|---:|---|
| error | 0 | 必ず0を維持 |
| warning-fix-soon | 189 | 次batch前に理由管理。未説明の増加は禁止 |
| warning-review-ok | 21 | relation / alias重複として理由つきで許容 |
| info | 65 | レビュー補助 |

内訳:

- `dangerous-short-alias`: 56
- `weak-term-risk`: 132
- `block-quality`: 1
- `alias-duplicate`: 16
- `one-way-relation`: warning 5 / info 63
- same motif内の重複alias info: 2

`warning-fix-soon` は数が多いため、Stage6以降はbatch追加前に「修正するもの」「既存互換のため残すもの」「phraseへ移すもの」を分けてレビューします。

## Stage5 Completion Gate

- production registryの `error` が0
- `warning-fix-soon` が189件を超えない
- weak-onlyの代表誤検出が抑制されている
- near-neighborは過剰抑制されていない
- Stage1〜4のrepresentative dreamsが非破壊
- batch-04候補は候補整理までで、本実装には入らない
