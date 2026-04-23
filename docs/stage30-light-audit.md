# Stage30 light audit memo

## 1. 前提確認
- AGENTS.md を確認済み。
- `node_modules/next/dist/docs/index.md` を確認済み。
- Stage30 は Next.js UI 変更ではなく、300モチーフ時点の軽監査フェーズとして扱う。
- Stage30では Next.js 固有変更は対象外。
- Stage30では新規motif追加、`data/batches` の実装変更、抽出ルールの大規模変更は行わない。

## 2. 固定形式の数値出力
```text
registry total: 300
relation total: 783

by cluster:
water-weather: 86
home-place: 108
movement: 76
communication: 63
relationship: 56
body-appearance: 113
emotion-action: 128
nature-sky: 58
object-record: 95
care-risk: 0
general: 0

by kind:
intentional-one-way: 10
should-be-reciprocal: 235
should-be-conflict: 1
generic-specific: 463
context-helper: 74
stale-relation: 0

general count: 0
```

validator summary:

```text
error: 0
warning-fix-soon: 184
warning-review-ok: 113
info: 809
```

## 3. Stage30の目的
Stage30 は 300→320 の追加に入る前に、relation / warning / fixture / audit の説明可能性を整える軽監査フェーズとする。Stage29で増えた `generic-specific`、`object-record`、`emotion-action`、`movement` の過密化を監査し、cluster監査と実夢文監査を並行して進める方針を整理する。

主目的:

- `generic-specific = 463` の分類理由を説明可能にする。
- `object-record = 95` の道具・記録・画面・小物の粒度差を整理する。
- body-appearance / emotion-action / movement の過密化を確認する。
- `footsteps / being_chased / running / dead_end` の主役差を整理する。
- `keyboard / monitor / bell` が communication を過密化していないか確認する。
- `dead_end / hallway / room / house` の場所境界を整理する。
- Stage29の最小抽出修正が副作用を起こしていないか確認する。
- 怒り口語は比較対象に留め、Stage30でも `anger` 新規motif化を確定しない。

## 4. やること / やらないこと
やること:

- Stage30監査メモを docs に残す。
- warning / relation / fixture / audit の管理方針を整理する。
- 実夢文監査を、cluster監査と並行する継続観点として記録する。
- next-20候補を `next-addition-ready / needs-audit / hold` の3分類で再棚卸しする。
- README に Stage30 の計画メモを残す。

やらないこと:

- 新規motif追加。
- `data/batches` の実装変更。
- UI全面改修。
- DB本実装。
- AI API導入。
- fuzzy search / N-gram / 本格形態素解析。
- Next.js 固有実装変更。
- relation 自動双方向化。
- `anger` 新規motifの確定。

## 5. 軽監査の優先順位
1. `generic-specific = 463`
   - 最優先監査対象。
   - 上位/下位、道具/対象、場面補助、粒度差のどれで説明するかを代表例ごとに確認する。
   - relation total の増減ではなく、分類理由が説明可能かを重視する。

2. `object-record = 95`
   - `eraser / ruler / paperclip / answer_sheet / keyboard / monitor` など、道具・記録・画面の粒度差を確認する。
   - object 同士でも、修正、測定、仮止め、答案、入力、表示の主役差を分ける。

3. body-appearance の過密化
   - scar 系、face 系、hair 系、shoulder / ankle 系が非診断・非断定を維持しているか確認する。
   - Stage30では新規 body-appearance 候補の採否を決めず、Stage31候補の抑制条件を整理する。

4. emotion-action の過密化
   - `footsteps / being_chased / running / fighting / crying / hiding` 周辺を確認する。
   - 怒り口語を `fighting` に寄せる場合の広がりを監査する。

5. movement の過密化
   - `dead_end / road / maze / lost / running / being_chased` の近縁を確認する。
   - `dead_end` は移動停止の補助であり、home-placeそのものへ寄せない。

6. 実夢文監査
   - cluster数値だけでは見えない、実入力での誤抽出・未抽出・主役入れ替わりを記録する。

## 6. warning / relation 管理方針
warning:

- `warning-fix-soon <= 184` を維持する。
- 1文字 alias は採用しない。
- 2文字以下の weak は原則採用しない。
- 短すぎる block は作らない。
- scar 系、body-appearance 系は、block / question / alias のすべてで非診断・非断定を維持する。
- 怒り口語は便利だが、短く広い語は warning / 誤抽出の管理対象として扱う。

relation:

- `general count = 0` を維持する。
- `stale-relation = 0` を維持する。
- relation total の増減自体を目標にしない。
- `comment -> sns` の直接 neighbor 回避を維持する。
- `coworker -> workplace` の直接 neighbor 回避を維持する。
- `footsteps / dead_end` は `being_chased` を補助する近縁として扱い、追跡夢の主役を奪いすぎない。
- `keyboard / monitor / bell` は communication 本体ではなく、入力道具・表示画面・小さな合図として説明する。
- `dead_end / hallway / room / house` は、閉じた進路、通路、部屋、住まいの境界として分ける。

fixture / audit:

- Stage30では不足観点を整理し、fixture本実装はStage31以降の候補にする。
- 実夢文監査は、抽出候補の順位を含めて記録できる形を維持する。
- 記録粒度は「1位で拾えた」「上位6件には入った」「未抽出」「誤抽出あり」の4段階を基本にする。

## 7. fixture / audit / test の不足観点
- `footsteps / being_chased / running / dead_end`
  - 期待: `being_chased` が主役、`footsteps / dead_end` は気配と進路停止の補助。
  - 非期待: `running` だけが主役化し、追跡夢の圧力が消える。

- `keyboard / monitor / bell` と communication
  - 期待: `keyboard` は入力道具、`monitor` は表示画面、`bell` は小さな合図。
  - 非期待: `chat / sns / notification / comment` へ無計画に寄る。

- `dead_end / hallway / room / house`
  - 期待: `dead_end` は閉じた進路、`hallway` は通路、`room` は空間、`house` は住まい。
  - 非期待: dead_end が home-place 化する、hallway が school / house に吸われる。

- `電車 -> car` の副作用
  - 期待: `電車` では `train` が主役、`car` は混ざらない。
  - 追加確認: `車に乗る夢`、`自動車を運転する夢` では `car` が拾える。

- `廊下 -> school` の副作用
  - 期待: `廊下` 単独では `hallway` が主役。
  - 追加確認: `学校の廊下` では `school / hallway` が併存可能か。

- 怒り口語
  - 期待: `キレる / キレ散らかす / ブチギレる` は現状 `fighting` に寄せて比較可能。
  - 保留: `anger` 新規motif化は Stage30では確定しない。

## 8. 実夢文監査の反映方針
Stage30でも、cluster監査と実夢文監査を並行して進める。

最低限の監査軸:

- 部分一致誤抽出
  - `電車` の `車`、`廊下` による school 混入、複合語内の短語反応を確認する。
  - 対応候補は alias修正、phrase修正、抽出ルール修正の比較に留め、Stage30では大規模変更しない。

- 口語・砕けた日本語の未抽出
  - `キレる / キレ散らかす / ブチギレる` の扱いを比較する。
  - `anger` は Stage30でも未確定。

- 主役モチーフの入れ替わり
  - 追跡夢で `being_chased` が `running / footsteps / dead_end` に埋もれないか確認する。
  - 仕事ミス夢で `keyboard / monitor` が `making_mistake` を押し出さないか確認する。
  - 通路夢で `hallway` が `school / house` に吸われないか確認する。

記録形式案:

```text
case:
expected primary:
actual rank 1:
in top 6:
missing:
unexpected:
status: 1位で拾えた / 上位6件には入った / 未抽出 / 誤抽出あり
note:
```

## 9. 怒り口語の比較メモ
Stage30では `anger` 新規motifは確定しない。比較対象として以下を残す。

`fighting` に寄せる案:

- 長所: Stage27 / Stage29 の `キレ散らかす`、`ブチギレる` 対応を活かせる。
- 長所: 既存の対立・怒り・口論の文脈に乗せやすい。
- リスク: 怒りだけの夢まで対人衝突として読みすぎる。

phrase追加案:

- 長所: 実夢文で出やすい口語表現を狙って拾える。
- リスク: 口語表現が増えすぎると warning / 誤抽出の管理が必要になる。

抽出ルール修正案:

- 長所: 口語活用や派生表現をまとめて扱える可能性がある。
- リスク: Stage30の範囲を超え、fuzzy search / N-gram / 本格形態素解析に近づく。

`anger` 新規motif案:

- 長所: 怒りそのものを、対立や喧嘩から分離できる。
- リスク: emotion-action の過密化が進み、`fighting / screaming / refusing / crying` との境界設計が必要になる。

Stage30結論:

- `anger` は未確定。
- `キレる / キレ散らかす / ブチギレる` は既存 `fighting` に寄せた現状を維持して比較する。
- Stage31以降で、実夢文fixtureの蓄積を見て採否を判断する。

## 10. next-20候補の3分類結果
### next-addition-ready
- home-place / communication / relationship を増やさない候補。
- object-record / nature / body-appearance で説明しやすく、既存 relation と fixture で主役差を確認できる候補。
- 実夢文で未抽出が明確だが、既存motifとの境界が説明できる候補。
- Stage31で `warning-fix-soon <= 184` を維持しやすい候補。

### needs-audit
- `anger` 周辺の怒り口語。
- `footsteps / being_chased / running / dead_end` に近い追跡・逃走・閉塞系。
- `keyboard / monitor / making_mistake / workplace` に近い仕事ミス系。
- `dead_end / hallway / room / house` に近い場所境界系。
- body-appearance と care-risk の境界に近い候補。

### hold
- home-place をさらに厚くする候補。
- communication を過密化させる候補。
- relationship を広げすぎる候補。
- 医療・診断・症状に寄りやすい候補。
- 本格形態素解析なしでは誤抽出リスクが高い候補。

## 11. READMEに残す計画メモ案
```md
## Stage30

Stage30 では新規 motif 追加に入らず、300モチーフ時点の軽監査を行いました。
- 監査メモ: [docs/stage30-light-audit.md](docs/stage30-light-audit.md)
- `generic-specific = 463`、`object-record = 95`、body-appearance、emotion-action、movement の過密化を優先監査
- `footsteps / being_chased / running / dead_end`、`keyboard / monitor / bell`、`dead_end / hallway / room / house` の境界を整理
- Stage29の最小抽出修正である `電車 -> car`、`廊下 -> school` 抑制の副作用を監査対象化
- `キレる / キレ散らかす / ブチギレる` は比較対象に留め、`anger` 新規motifは未確定
- `warning-fix-soon <= 184`、`general count = 0`、`stale-relation = 0` を維持する前提で Stage31 へ接続
```

## 12. Stage31へ進む判断条件
- `generic-specific = 463` の代表的な増加理由を説明できる。
- `object-record = 95` の道具・記録・画面・小物の主役差を説明できる。
- body-appearance / emotion-action / movement の過密化が次の追加候補を阻害しない。
- `footsteps / being_chased / running / dead_end` の主役差を fixture 化できる見込みがある。
- `keyboard / monitor / bell` が communication 本体へ寄りすぎない方針が明確。
- `dead_end / hallway / room / house` の場所境界が説明できる。
- `電車 -> car` と `廊下 -> school` の抑制について、副作用確認ケースが整理されている。
- 怒り口語を `fighting` に寄せ続けるか、`anger` を検討するかの判断材料が揃っている。
- next-20候補が `next-addition-ready / needs-audit / hold` に分類されている。
- `warning-fix-soon <= 184`、`general count = 0`、`stale-relation = 0` を維持できる見込みがある。
