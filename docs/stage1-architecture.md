# Stage1 Architecture Note

Stage1の目的は、新しい20モチーフを追加する前に、既存20モチーフの挙動を固定し、追加単位を明確にすることです。

## Batch Registry

正本データは `data/batches/batch-01/` に置きます。

- `motifs.ts`: モチーフ本体
- `aliases.ts`: 別名、表記ゆれ、抽出語彙
- `questions.ts`: モチーフ別追加質問
- `blocks.ts`: 結果文ブロック
- `index.ts`: 1バッチとして束ねる

既存import互換のため、`data/motifs/core.ts`、`data/aliases/core.ts`、`data/questions/core.ts`、`data/blocks/core.ts` は削除せず、batch-01の再エクスポート層として残します。

## Registry Validation

`validateMotifRegistry` は `error`、`warning-fix-soon`、`warning-review-ok`、`info` の診断レベルを返します。

- `error`: production registryとして壊れている
- `warning-fix-soon`: 次の追加前に修正候補として見る
- `warning-review-ok`: 意図した重複や片方向relationなら許容できる
- `info`: レビュー補助

templates、fixtures、docs用サンプルはproduction registryに入れない限りvalidation対象外です。

## Extraction Boundaries

抽出は次の責務に分けます。

- `normalize.ts`: 文字正規化
- `termWeights.ts`: alias、priority keyword、secondary keywordの重み
- `extractMotifs.ts`: candidate作成
- `conflictSuppression.ts`: conflict relationによる候補抑制

Stage1ではincludesベースを維持し、現状挙動を壊さないことを優先します。
