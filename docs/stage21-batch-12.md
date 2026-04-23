# Stage21 batch-12 実装記録

Stage21は、Stage20軽監査を前提に、200モチーフから220モチーフへ拡張する追加フェーズです。Next.js UI 実装は対象外とし、`data/batches/batch-12/` の追加、relation分類、fixture / test拡張、docs更新に限定しました。

## 前提確認

- `AGENTS.md` を確認済み。
- `node_modules/next/dist/docs/` を確認済み。
  - `node_modules/next/dist/docs/index.md`
- Stage21では Next.js UI 側へ触れず、データ / エンジン / テスト / docs の範囲に限定。
- `comment -> sns` の直接 neighbor 回避を維持。
- `coworker -> workplace` の直接 neighbor 回避を維持。

## Stage20からの引き継ぎ条件

- `home-place / communication / relationship` は増やしすぎない。
- `home-place` 候補は採用しない。
- `communication` 候補は採用しない。
- relationship候補は採用しない。
- `tears / crying`、`concealing / hiding`、`classmate / coworker / workplace` に近い候補は慎重扱い。
- `warning-fix-soon <= 188` を維持する。
- `general count = 0` と `stale-relation = 0` を維持する。

## 最終採用20モチーフ

### 前半10件

1. 種 (`seed`)
2. 石けん (`soap`)
3. 枕 (`pillow`)
4. ロープ (`rope`)
5. 絵 (`painting`)
6. ボタン (`button`)
7. タオル (`towel`)
8. 硬貨 (`coin`)
9. たたむ (`folding`)
10. 登る (`climbing`)

### 後半10件

11. ブラシ (`brush`)
12. マフラー (`scarf`)
13. 額 (`forehead`)
14. 背中 (`back`)
15. 傷跡 (`scar`)
16. 運ぶ (`carrying`)
17. 歌う (`singing`)
18. 読む (`reading`)
19. 洗う (`washing`)
20. 結ぶ (`tying`)

## 段階検証結果

前半10件後:

```text
registry total: 210
error: 0
warning-fix-soon <= 188
general count: 0
stale-relation: 0
npm.cmd test: passed
```

後半10件後:

```text
registry total: 220
error: 0
warning-fix-soon <= 188
general count: 0
stale-relation: 0
relation は全件分類済み
npm.cmd test: passed
```

## 設計上の補正

- `home-place`候補は採用せず、`pillow / soap / towel` も場所ではなくobjectとして扱いました。
- `communication`候補は採用せず、`singing` は `mouth / breath / dancing` と接続する表現行動として扱いました。
- relationship候補は採用せず、`classmate / coworker / workplace` 周辺を増やしていません。
- `rope` は前半単体検証で後半IDへ先行参照しないよう、`hand / climbing / falling` と接続しました。
- `tying` は後半から `rope / hand / packing` へ接続し、`concealing / hiding` へ寄せていません。
- `scar` は非診断・非断定を motif / alias / question / block / fixture で固定しました。

## relation 整理

Stage21追加分は `relationReview.ts` の分類対象へ追加しました。

- `seed`: `nature-sky`
- `soap / towel / washing`: `water-weather`
- `pillow / rope / painting / button / coin`: `object-record`
- `climbing`: `movement`
- `brush / scarf / forehead / back / scar`: `body-appearance`
- `folding / carrying / singing / reading / tying`: `emotion-action`

## 数値結果

```text
registry total: 220
relation total: 543

by cluster:
water-weather: 64
home-place: 106
movement: 53
communication: 59
relationship: 53
body-appearance: 71
emotion-action: 83
nature-sky: 29
object-record: 25
care-risk: 0
general: 0

by kind:
intentional-one-way: 10
should-be-reciprocal: 258
should-be-conflict: 2
generic-specific: 196
context-helper: 77
stale-relation: 0

general count: 0
```

validator:

```text
error: 0
warning-fix-soon: 188
warning-review-ok: 96
info: 565
```

## 追加 fixture / test

- `tests/fixtures/stage21.ts`
  - 前半10件ID
  - 後半10件ID
  - extraction audit 12件
  - representative dream 4件
  - `scar` 専用fixture 2件
- `tests/stage21-batch-12.test.ts`
  - registry 220件確認
  - warning gate確認
  - Stage21 relation が `general / stale-relation` に落ちない確認
  - `scar` の非診断・非断定確認
  - extraction audit確認
  - question selection / composition確認

## 確認結果

```text
npm.cmd test
Test Files 14 passed
Tests 488 passed
```

```text
npm.cmd run lint
passed
```

```text
npm.cmd run build
passed
```

## Stage22への課題

- `generic-specific = 196` まで増えているため、Stage22前にcluster別レビューを行う。
- `home-place = 106` は新規home-place候補なしでも増えるため、場所そのものと物・行動の境界を再監査する。
- `body-appearance = 71` は `forehead / back / scar` 追加で増えたため、非診断・非断定の継続確認が必要。
- `emotion-action = 83` は `folding / carrying / singing / reading / washing / tying` 追加で増えたため、近縁行動の主役差を確認する。
- `soap / towel / washing` が `bathroom` 候補へ寄りすぎないか継続監査する。
- `singing` が communication 本体へ寄りすぎないか継続監査する。
