# Stage17 batch-10 実装記録

Stage17 は、Stage16 の relation / warning 監査結果を前提に、160 モチーフから 180 モチーフへ拡張する追加フェーズです。
Next.js UI 実装は対象外とし、`data/batches/batch-10/` の追加、relation 分類、fixture / test 拡張に限定しました。

## 前提確認

- `AGENTS.md` を確認済み。
- `node_modules/next/dist/docs/index.md` と `node_modules/next/dist/docs/01-app/01-getting-started/02-project-structure.md` を確認済み。
- Stage17 では Next.js UI 側へ触れず、データ / エンジン / テスト / docs の範囲に限定。

## 最終採用20モチーフ

### 前半10件

1. 朝 (`morning`)
2. 夕方 (`evening`)
3. 隣人 (`neighbor`)
4. 棚 (`shelf`)
5. プレゼント (`gift`)
6. 玄関 (`entrance`)
7. 化粧 (`makeup`)
8. 誘う (`inviting`)
9. 手帳 (`planner`)
10. 音楽 (`music`)

### 後半10件

11. コメント (`comment`)
12. 配信 (`streaming`)
13. 同僚 (`coworker`)
14. 涙 (`tears`)
15. 隠す (`concealing`)
16. 料理する (`cooking`)
17. 影 (`shadow`)
18. 倉庫 (`storage_room`)
19. 祭り (`festival`)
20. 迷路 (`maze`)

## 設計上の補正

- 前半では `home-place` を増やしすぎないよう、`倉庫 / 影 / 祭り / 迷路` を後半へ回しました。
- `手帳 / 音楽` は既存 relation を説明しやすいため前半へ移動しました。
- `コメント / 配信` は `sns / chat / video / notification` と近縁ですが、weak-only 抑制を壊さないよう、`comment -> sns` の直接 neighbor は避けました。
- `同僚` は `workplace` の weak-only 抽出を助けすぎないよう、直接 neighbor から外し、`boss / friend / desk` で文脈補助しました。
- `玄関` は `childhood_home` との関係を優先し、既存の `childhood_home > house` 抑制を壊さないようにしました。
- 1文字 alias は warning-fix-soon を増やすため採用せず、短語は文脈 phrase へ寄せました。

## relation 整理

Stage17 追加分は `relationReview.ts` の分類対象へ追加しました。

- `morning / evening / shadow`: `nature-sky`
- `entrance / storage_room`: `home-place`
- `maze`: `movement`
- `music / comment / streaming`: `communication`
- `neighbor / coworker`: `relationship`
- `makeup / tears`: `body-appearance`
- `inviting / concealing / cooking / festival`: `emotion-action`
- `shelf / gift / planner`: `object-record`

## 数値結果

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

## 追加 fixture / test

- `tests/fixtures/stage17.ts`
  - 前半10件ID
  - 後半10件ID
  - extraction audit 12件
  - representative dream 4件
- `tests/stage17-batch-10.test.ts`
  - registry 180件確認
  - warning gate確認
  - Stage17 relation が `general / stale-relation` に落ちない確認
  - extraction audit確認
  - question selection / composition確認

## 確認結果

```text
npm.cmd test
Test Files 12 passed
Tests 449 passed
```

Stage17 の最終ゲートとして、別途 `npm.cmd run lint` と `npm.cmd run build` を実行します。

## Stage18 への課題

- `home-place = 96` まで増えているため、次の追加前に home-place の内訳監査を再度行う。
- `communication = 54` は `comment / streaming` 追加で増えたため、SNS / chat / notification / video との主役判定を追加監査する。
- `warning-review-ok = 72` は理由カテゴリ付きで維持されているが、次フェーズで許容理由の再確認を行う。
- 次の20件追加前に `generic-specific = 110` の増加分をクラスタ別に点検する。
