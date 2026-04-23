# Stage38 light audit

## 前提確認
- AGENTS.md を確認済み。
- `node_modules/next/dist/docs/index.md` を確認済み。
- Stage38 は Next.js UI 変更ではなく軽監査フェーズ。
- Stage38 では新規motif追加、`data/batches` 変更、抽出ロジックの大規模変更は行わない。
- `anger` は Stage38 でも新規motifとして確定しない。
- `comment -> sns` の直接 neighbor 回避を維持する。
- `coworker -> workplace` の直接 neighbor 回避を維持する。
- scar 系は非診断・非断定を維持する。
- 実夢文監査由来の改善候補は、追加候補と混ぜず別枠で扱う。

## 固定形式の数値出力
```text
registry total: 380
relation total: 1023

by cluster:
water-weather: 102
home-place: 118
movement: 120
communication: 64
relationship: 56
body-appearance: 138
emotion-action: 150
nature-sky: 100
object-record: 175
care-risk: 0
general: 0

by kind:
intentional-one-way: 10
should-be-reciprocal: 227
should-be-conflict: 1
generic-specific: 713
context-helper: 72
stale-relation: 0

general count: 0
```

validator summary:

```text
error: 0
warning-fix-soon: 184
warning-review-ok: 128
info: 1053
```

## 監査の主眼
Stage38 の目的は、380モチーフ時点で増えた relation / warning / fixture / audit の説明可能性を整理し、
次の 380→400 追加前に過密clusterの境界と実夢文監査の論点を明文化することにある。

最優先監査対象:
- `generic-specific = 713`
- `object-record = 175`
- `movement = 120`
- `body-appearance = 138`
- `emotion-action = 150`
- `home-place = 118`
- `ticket_machine / departure_board / platform_clock / ticket_gate / platform_sign / platform_edge / train / being_late`
- `cursor / battery_icon / mute_button / pause_button / status_light / screen_corner / monitor`
- `nape / eyelid / temple / jawline / chin / face / cheek`
- `電車 -> car` 抑制の副作用
- `廊下 -> school` 抑制の副作用
- `キレる / キレ散らかす / ブチギレる` の扱い

## warning / relation / fixture / audit 管理方針
warning:
- `warning-fix-soon <= 184` を維持前提にする。
- 1文字 alias 禁止、2文字以下 weak 原則禁止、短すぎる block 禁止を継続する。
- `warning-review-ok = 128` は「許容理由のある重なり」として docs 上で説明できる状態を優先する。

relation:
- relation total の増減自体より、分類済みか・説明可能かを優先する。
- `general count = 0` と `stale-relation = 0` を維持する。
- `generic-specific` は次の3系統で監査する。
  - 上位下位の粒度差
  - 同系統モチーフの近縁差
  - 補助文脈としての接続
- `home-place = 118` は新規追加の偏りではなく、relation 接続結果として説明できるかを確認する。

fixture / audit:
- Stage38 では実装増量より、不足観点の言語化を優先する。
- 実夢文監査由来の改善候補は、次の追加候補と分離する。
- 次段階へ渡す監査束は `movement / digital object / body-appearance / emotion-action / extraction-side-effects` の5群で整理する。

## fixture / audit / test の不足観点リスト
- `ticket_machine / departure_board / platform_clock / ticket_gate / platform_sign / platform_edge / train / being_late`
  - 駅文脈で主役が `train` なのか `being_late` なのか、補助が `ticket` 系なのかを取り違えないか
  - movement cluster 内で platform 系が主役を奪いすぎないか

- `cursor / battery_icon / mute_button / pause_button / status_light / screen_corner / monitor`
  - digital object と communication の境界が崩れていないか
  - UI表示系が通知・会話系へ寄りすぎないか

- `nape / eyelid / temple / jawline / chin / face / cheek`
  - body-appearance の粒度差が説明できるか
  - 非診断・非断定が alias / question / block 全体で維持されているか

- `emotion-action = 150`
  - `hesitating / backing_away / waiting / turn_back / being_chased / fighting / hiding` の主役差が曖昧になっていないか

- `電車 -> car`
  - train 文脈で car 混入が抑制されたままか
  - 通常の car 夢で car 抽出を壊していないか

- `廊下 -> school`
  - hallway 単独で school が不要混入しないか
  - 学校の廊下文脈では school / hallway が両立するか

- 怒り口語
  - `キレる / キレ散らかす / ブチギレる` が `fighting` 比較対象として安定しているか
  - 主役が衝突なのか怒り感情なのかの入れ替わりが起きていないか

## 実夢文監査の4段階記録方針
記録区分:
- `1位で拾えた`
- `上位6件には入った`
- `未抽出`
- `誤抽出あり`

監査軸:
- 部分一致誤抽出
- 口語・砕けた日本語の未抽出
- 主役モチーフの入れ替わり
- 既存最小修正の副作用確認

継続比較対象:
- `being_late`
- `exam`
- `ex_partner`
- `making_mistake`
- `chased`
- `電車 -> car`
- `廊下 -> school`
- `キレる / キレ散らかす / ブチギレる`

## 怒り口語の比較メモ
Stage38 でも `anger` は新規motif確定しない。

比較の持ち方:
- 当面は `fighting` に寄せる
- alias / phrase の最小修正候補として監査する
- `anger` は `needs-audit` または `hold` 側の検討枠として残す

現時点の整理:
- `キレる` と `ブチギレる` は対人衝突として `fighting` に寄せやすい
- `キレ散らかす` は口語性が強く、未抽出監査の価値が高い
- Stage38 は motif 分離判断ではなく、fixture / 比較メモを増やす段階に留める

## next-20候補の3分類結果
`next-addition-ready`
- object-record / nature で説明しやすい候補
- 既存 relation に自然接続できる候補
- home-place / communication / relationship を厚くしない候補
- body-appearance でも非診断を保ちやすい候補

`needs-audit`
- movement 境界を壊しうる候補
- digital object で `cursor / battery_icon / mute_button / pause_button / status_light / screen_corner / monitor` に近い候補
- body-appearance で粒度差確認が必要な候補
- emotion-action をさらに過密化させる候補
- 実夢文監査由来の改善候補
- anger 周辺の比較候補

`hold`
- home-place をさらに厚くする候補
- communication をさらに過密化させる候補
- relationship を広げる候補
- anger 新規motif確定前提の候補
- 医療・診断方向へ寄りやすい候補

## Stage39へ進む判断条件
- `warning-fix-soon <= 184` を維持できる見通しがある
- `general count = 0` を維持できる
- `stale-relation = 0` を維持できる
- `generic-specific = 713` の増加理由を説明できる
- `object-record / movement / body-appearance / emotion-action / home-place` の境界メモが揃っている
- 駅系 movement 境界と digital object 境界の説明が docs 上に残っている
- body-appearance の非診断・非断定方針が維持されている
- `電車 -> car` と `廊下 -> school` の副作用確認を継続できる
- 怒り口語は比較メモのまま維持し、`anger` を未確定で保てている
