# Stage3 Warning Policy

Stage3ではwarningを次のように扱います。

## error

修正必須です。

- id重複
- unknown reference
- production dataの未使用
- 必須block欠落
- unknown score axis

## warning-fix-soon

次のbatch追加前に修正候補として確認します。

- dangerous short alias
- short weak term
- scoreImpact不足
- blockが短すぎる
- 断定的なblock表現
- weak語が単独で効きすぎる可能性

## warning-review-ok

意図が説明できれば許容します。

- 近縁motif間のalias重複
- 片方向conflict
- 水系、移動系、評価系など意味が近いmotif同士の重なり

## info

レビュー補助です。

- 片方向neighbor
- 同一motif内の語彙重複
- relation map作成時の参考情報

## 運用

新しいbatchを追加する前に、`warning-fix-soon` を確認します。すぐ直さない場合は、理由をdocsかレビューコメントに残します。
