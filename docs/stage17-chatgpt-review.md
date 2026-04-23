# Stage17 ChatGPT確認用レビュー文

以下を ChatGPT でレビューしてください。

## 1. 結論候補

Stage17 は、160 → 180 モチーフの追加フェーズとして完了しています。
`batch-10` として20件を追加し、既存の warning / relation / extraction / fixture / test 基盤を維持しました。

## 2. 実装範囲

- `data/batches/batch-10/` を追加
  - `motifs.ts`
  - `aliases.ts`
  - `questions.ts`
  - `blocks.ts`
  - `index.ts`
- `data/batches/index.ts` に `batch10` を接続
- `lib/dream-engine/rules/relationReview.ts` に Stage17 追加IDの cluster / review kind 分類を追加
- `tests/fixtures/stage17.ts` を追加
- `tests/stage17-batch-10.test.ts` を追加
- `tests/dream-engine.test.ts` の registry total を 180 に更新
- `docs/stage17-batch-10.md` を追加
- `README.md` に Stage17 の概要を追記

## 3. 最終採用20モチーフ

前半:
- 朝
- 夕方
- 隣人
- 棚
- プレゼント
- 玄関
- 化粧
- 誘う
- 手帳
- 音楽

後半:
- コメント
- 配信
- 同僚
- 涙
- 隠す
- 料理する
- 影
- 倉庫
- 祭り
- 迷路

## 4. 重要な設計判断

- `comment -> sns` の直接 neighbor は避け、既存の weak-only SNS 抑制を維持しました。
- `coworker -> workplace` の直接 neighbor は避け、既存の workplace weak-only 抑制を維持しました。
- `entrance -> house` の直接 neighbor は避け、既存の `childhood_home > house` 抑制を維持しました。
- 1文字 alias は採用せず、`棚 / 涙 / 影 / 曲` のような短語は文脈 phrase または2文字以上の alias に寄せました。
- `home-place` が大きいため、場所系の追加は `玄関 / 倉庫` に限定しました。

## 5. 数値結果

```text
registry total: 180
relation total: 427

by cluster:
water-weather: 45
home-place: 96
movement: 47
communication: 54
relationship: 49
body-appearance: 38
emotion-action: 61
nature-sky: 22
object-record: 15
care-risk: 0
general: 0

by kind:
intentional-one-way: 10
should-be-reciprocal: 223
should-be-conflict: 2
generic-specific: 110
context-helper: 82
stale-relation: 0

general count: 0
```

validator:

```text
error: 0
warning-fix-soon: 188
warning-review-ok: 72
info: 431
```

## 6. テスト結果

```text
npm.cmd test
Test Files 12 passed
Tests 449 passed
```

`lint / build` は最終確認で実行予定です。

## 7. ChatGPTに確認してほしい観点

1. Stage17 の20件が、160→180の追加としてカテゴリ過多になっていないか。
2. `home-place = 96` の増加は次Stageで監査対象にする判断でよいか。
3. `communication = 54` に対し、`comment / streaming` の relation 分離は妥当か。
4. `warning-fix-soon = 188` を増やしていないため、品質ゲートを通過と見てよいか。
5. Stage18 を追加フェーズではなく、軽監査フェーズにするべきか。

## 8. Stage18提案

Stage18 は、180件時点の監査フェーズにするのが妥当です。

優先監査対象:
- `home-place = 96`
- `communication = 54`
- `generic-specific = 110`
- `warning-review-ok = 72`
- `comment / streaming / sns / chat / notification / video`
- `entrance / childhood_home / house / door / shoes`
- `coworker / workplace / boss / friend`
