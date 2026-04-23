# モチーフ追加ガイド

このアプリでは、モチーフを20個単位で追加します。Stage1以降は `data/batches/batch-XX/` を正本として扱います。

## 追加時に編集する場所

新しい20件を追加する場合は、次のような構成を作ります。

```text
data/batches/batch-02/
  motifs.ts
  aliases.ts
  questions.ts
  blocks.ts
  index.ts
```

`data/batches/index.ts` に新しいbatchを追加すると、production registryへ反映されます。

既存互換のため `data/motifs/core.ts` などは残しますが、新しい正本はbatch配下です。

## テンプレート

新規モチーフの雛形は `data/templates/motif-template.ts` を参照します。テンプレートはproduction registryに入れないため、validatorのerror対象にはなりません。

## 20件追加の手順

1. 候補を30から40個出す
2. 既存motifとの重複、近縁、競合を確認して20個に絞る
3. `motifs.ts` を作る
4. `aliases.ts` を作る
5. `questions.ts` を作る
6. `blocks.ts` を作る
7. `tests/fixtures/representative-dreams.ts` に代表夢を3から5件追加する
8. validation / extraction / question / composition testsを追加する
9. `npm test` でerrorがないことを確認する

## レビュー基準

- `validateMotifRegistry` のerrorは0件
- `warning-fix-soon` は次の追加前に修正候補として見る
- `warning-review-ok` は意図した重複や片方向relationなら許容理由を確認する
- aliasは `phrase / alias / weak` の3分類として設計する
- 現行フィールドでは `priorityKeywords` がphrase、`aliases` がalias、`secondaryKeywords` がweakに対応する
- 危険な短いaliasはpriority keywordで補う
- conflictを追加したら、抑制される側のfixtureも追加する
- 文章ブロックは断定しすぎない

詳細チェックリストは `docs/review-checklist.md` を参照してください。
