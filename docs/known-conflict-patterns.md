# Known Conflict Patterns

競合はコード分岐ではなく、motif dataの `conflicts` と `neighbors` に書きます。

## 明確な上位/下位

- `childhood_home` は `house` より具体的
- 夢文に実家が明確なら、genericな家は補助扱い

## 近縁だが併存しうるもの

- `water` と `sea`
- `cat` と `dog`
- `friend` と `fighting`

これらは必ずしも抑制せず、同時に出る場合は意味の対比として扱います。

## Stage1での方針

- 既存挙動を優先する
- conflict suppressionは現状の優先度計算を維持する
- 新しい競合を足す場合は、代表夢fixtureを追加する
