# Stage19 batch-11 実装記録

Stage19は、Stage18軽監査とStage19計画を前提に、180モチーフから200モチーフへ拡張する追加フェーズです。
Next.js UI 実装は対象外とし、`data/batches/batch-11/` の追加、relation分類、fixture / test拡張、docs更新に限定しました。

## 前提確認

- `AGENTS.md` を確認済み。
- `node_modules/next/dist/docs/` を確認済み。
  - `node_modules/next/dist/docs/index.md`
  - `node_modules/next/dist/docs/01-app/01-getting-started/02-project-structure.md`
  - `node_modules/next/dist/docs/01-app/02-guides/testing/index.md`
- Stage19では Next.js UI 側へ触れず、データ / エンジン / テスト / docs の範囲に限定。

## Stage18からの引き継ぎ条件

- `home-place` は増やしすぎない。
- `communication` は主役差を崩さない。
- `comment / streaming / coworker / tears / concealing` は慎重に扱う。
- relationship候補は1-2件目安とし、`coworker / boss / friend / workplace` 周辺を前半へ寄せすぎない。
- `warning-fix-soon <= 188` を維持する。
- `general count = 0` と `stale-relation = 0` を維持する。

## 最終採用20モチーフ

### 前半10件

1. コップ (`cup`)
2. ろうそく (`candle`)
3. 毛布 (`blanket`)
4. 封筒 (`envelope`)
5. 葉 (`leaf`)
6. 波 (`wave`)
7. 氷 (`ice`)
8. 顔 (`face`)
9. 書く (`writing`)
10. 踊る (`dancing`)

### 後半10件

11. はさみ (`scissors`)
12. おもちゃ (`toy`)
13. 草 (`grass`)
14. 耳 (`ear`)
15. 口 (`mouth`)
16. 呼吸 (`breath`)
17. 泳ぐ (`swimming`)
18. 荷造り (`packing`)
19. 自転車 (`bicycle`)
20. クラスメイト (`classmate`)

## 設計上の補正

- `home-place`候補は採用せず、場所系増加を抑えました。
- `communication`候補は採用せず、`sns / chat / comment / streaming / notification / video` の主役差を維持しました。
- relationship候補は `classmate` 1件のみとし、後半へ配置しました。
- `classmate` は `school / friend / teacher` と接続し、`coworker / workplace` には直接接続していません。
- `ear / mouth / breath` は通信ではなく身体・感覚として扱いました。
- `face` は `makeup / mask / mirror` と近いものの、自己像・表情のbody motifとして扱いました。
- `transit-place` は今回も実装上のcluster / kindとして採用していません。

## relation 整理

Stage19追加分は `relationReview.ts` の分類対象へ追加しました。

- `cup / candle / blanket / envelope / scissors / toy`: `object-record`
- `leaf / grass`: `nature-sky`
- `wave / ice / swimming`: `water-weather`
- `face / ear / mouth / breath`: `body-appearance`
- `writing / dancing / packing`: `emotion-action`
- `bicycle`: `movement`
- `classmate`: `relationship`

## 数値結果

```text
registry total: 200
relation total: 487

by cluster:
water-weather: 56
home-place: 102
movement: 51
communication: 59
relationship: 53
body-appearance: 50
emotion-action: 69
nature-sky: 26
object-record: 21
care-risk: 0
general: 0

by kind:
intentional-one-way: 10
should-be-reciprocal: 266
should-be-conflict: 2
generic-specific: 132
context-helper: 77
stale-relation: 0

general count: 0
```

validator:

```text
error: 0
warning-fix-soon: 188
warning-review-ok: 88
info: 499
```

## 追加 fixture / test

- `tests/fixtures/stage19.ts`
  - 前半10件ID
  - 後半10件ID
  - extraction audit 12件
  - representative dream 4件
- `tests/stage19-batch-11.test.ts`
  - registry 200件確認
  - warning gate確認
  - Stage19 relation が `general / stale-relation` に落ちない確認
  - extraction audit確認
  - question selection / composition確認

## 確認結果

```text
npm.cmd test
Test Files 13 passed
Tests 468 passed
```

```text
npm.cmd run lint
passed
```

```text
npm.cmd run build
passed
```

## Stage20への課題

- `home-place = 102` まで増えているため、Stage20前に再監査する。
- `communication = 59` は新規communication候補なしでも、`ear / mouth / candle / music` などのrelation経由で増えるため、主役差を継続確認する。
- `generic-specific = 132` は増加しているため、次回追加前にcluster別レビューを行う。
- `warning-review-ok = 88` は理由カテゴリ付きで維持する。
