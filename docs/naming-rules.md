# Naming Rules

## Motif ID

- 英小文字スネークケース
- 例: `childhood_home`, `being_late`
- 一度公開したidは変更しない

## Question ID

- モチーフidの主要語 + 問いの焦点
- kebab-case
- 例: `snake-presence`, `train-flow`

## Option ID

- 回答の意味が分かる短い英語
- kebab-case
- 例: `white-calm`, `rough-sea`, `no-resolution`

## Batch Name

- `batch-01`, `batch-02` のように20件単位
- ファイル配置は `data/batches/batch-XX/`

## Fixture ID

- 代表的なmotifの組み合わせが分かる名前
- kebab-case
- 例: `snake-childhood-home-train`
