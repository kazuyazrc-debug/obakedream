# Stage32 light audit memo

## 1. 前提確認
- AGENTS.md を確認済み。
- `node_modules/next/dist/docs/index.md` を確認済み。
- Stage32 は Next.js UI 変更ではなく、320モチーフ時点の軽監査フェーズとして扱う。
- Stage32では Next.js 固有変更は対象外。
- Stage32では新規motif追加、`data/batches` の実装変更、抽出ルールの大規模変更は行わない。
- `anger` は Stage32でも新規motif確定しない。

## 2. 固定形式の数値出力
```text
registry total: 320
relation total: 843

by cluster:
water-weather: 87
home-place: 111
movement: 88
communication: 63
relationship: 56
body-appearance: 119
emotion-action: 135
nature-sky: 69
object-record: 115
care-risk: 0
general: 0

by kind:
intentional-one-way: 10
should-be-reciprocal: 233
should-be-conflict: 1
generic-specific: 525
context-helper: 74
stale-relation: 0

general count: 0
```

validator summary:

```text
error: 0
warning-fix-soon: 184
warning-review-ok: 119
info: 870
```

## 3. Stage32の目的
Stage32 は 320→340 の追加に入る前に、relation / warning / fixture / audit の説明可能性を整える軽監査フェーズとする。Stage31で増えた `generic-specific`、`object-record`、`movement`、`body-appearance`、`home-place` の説明負債を整理し、実夢文監査を継続運用できる形にする。

主目的:

- `generic-specific = 525` の分類理由を説明可能にする。
- `object-record = 115` の道具・記録・分類・固定・表示・証拠の粒度差を整理する。
- `movement = 88` の進む/止まる/渡る/迂回する/戻る/行き止まりを分ける。
- `body-appearance = 119` が非診断・非断定方針を維持しているか確認する。
- emotion-action の過密化を確認する。
- `home-place = 111` の増加理由を、新規場所追加ではなく relation 接続として説明できるか確認する。
- Stage29 / Stage30 / Stage31 の最小抽出修正が副作用を起こしていないか確認する。

## 4. やること / やらないこと
やること:

- Stage32監査メモを docs に残す。
- warning / relation / fixture / audit の管理方針を整理する。
- 実夢文監査を、cluster監査と並行する継続観点として記録する。
- next-20候補を `next-addition-ready / needs-audit / hold` の3分類で再棚卸しする。
- README に Stage32 の計画メモを残す。

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
1. `generic-specific = 525`
   - 最優先監査対象。
   - 上位/下位、道具/対象、場面補助、粒度差のどれで説明するかを代表例ごとに確認する。
   - relation total の増減ではなく、分類理由が説明可能かを重視する。

2. `object-record = 115`
   - `glue / tape / label / folder / receipt / magnifying_glass / clipboard / stapler / calendar_page` など、道具・記録・分類・固定・表示・証拠の過密化を確認する。
   - object 同士でも、貼る、留める、分類する、まとめる、見返す、拡大する、固定する、日付を見るの主役差を分ける。

3. `movement = 88`
   - `traffic_light / crosswalk / detour / turn_back / dead_end` を重点確認する。
   - `traffic_light` は進む/止まる合図、`crosswalk` は渡る場所、`detour` は迂回、`turn_back` は戻る判断、`dead_end` は進路停止として分ける。

4. `body-appearance = 119`
   - `fingernail / cheek / face / hand / makeup / mirror / scar` 周辺を確認する。
   - scar 系は非診断・非断定を維持し、care-risk や医療判断へ寄せない。

5. emotion-action の過密化
   - `fighting` 周辺に怒り口語を寄せる現状の副作用を監査する。
   - `being_chased / running / footsteps / dead_end / detour / turn_back` の主役差を確認する。

6. `home-place = 111`
   - `hallway / room / house / dead_end` の場所境界を確認する。
   - Stage31の増加分は、新規 home-place 追加ではなく、既存 place relation との接続として説明できるか確認する。

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
- `generic-specific = 525` は説明負債として扱い、代表グループごとに理由を整理する。
- `object-record = 115` は道具置き場化しないよう、役割差を明文化する。
- `movement = 88` は移動、停止、迂回、戻る、行き止まりを分ける。
- `home-place = 111` は新規場所追加ではなく、既存 place relation の接続として説明する。

fixture / audit:

- Stage32では不足観点を整理し、fixture本実装はStage33以降の候補にする。
- 実夢文監査は、抽出候補の順位を含めて記録できる形を維持する。
- 記録粒度は「1位で拾えた」「上位6件には入った」「未抽出」「誤抽出あり」の4段階を基本にする。

## 7. fixture / audit / test の不足観点
- `traffic_light / crosswalk / detour / turn_back / dead_end`
  - 期待: 進む/止まる/渡る/迂回する/戻る/行き止まりの役割差を説明できる。
  - 非期待: 全てが `road / lost / dead_end` に吸われる。

- `keyboard / monitor / bell` と communication
  - 期待: `keyboard` は入力道具、`monitor` は表示画面、`bell` は小さな合図。
  - 非期待: `chat / sns / notification / comment` へ無計画に寄る。

- `dead_end / hallway / room / house`
  - 期待: `dead_end` は閉じた進路、`hallway` は通路、`room` は空間、`house` は住まい。
  - 非期待: `dead_end` が home-place 化する、`hallway` が school / house に吸われる。

- `電車 -> car` の副作用
  - 期待: `電車` では `train` が主役、`car` は混ざらない。
  - 追加確認: `車に乗る夢`、`自動車を運転する夢` では `car` が拾える。

- `廊下 -> school` の副作用
  - 期待: `廊下` 単独では `hallway` が主役。
  - 追加確認: `学校の廊下` では `school / hallway` が併存可能。

- 怒り口語
  - 期待: `キレる / キレ散らかす / ブチギレる` は現状 `fighting` に寄せて比較可能。
  - 保留: `anger` 新規motif化は Stage32では確定しない。

## 8. 実夢文監査の反映方針
Stage32でも、cluster監査と実夢文監査を並行して進める。

最低限の監査軸:

- 部分一致誤抽出
  - `電車` の `車`、`廊下` による school 混入、複合語内の短語反応を確認する。
  - 対応候補は alias修正、phrase修正、抽出ルール修正の比較に留め、Stage32では大規模変更しない。

- 口語・砕けた日本語の未抽出
  - `キレる / キレ散らかす / ブチギレる` の扱いを比較する。
  - `anger` は Stage32でも未確定。

- 主役モチーフの入れ替わり
  - 追跡夢で `being_chased` が `running / footsteps / dead_end / detour / turn_back` に埋もれないか確認する。
  - 仕事ミス夢で `keyboard / monitor` が `making_mistake` を押し出さないか確認する。
  - 通路夢で `hallway` が `school / house / room` に吸われないか確認する。

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
Stage32では `anger` 新規motifは確定しない。比較対象として以下を残す。

`fighting` に寄せる案:

- 長所: Stage27 / Stage29 / Stage31 の `キレ散らかす`、`ブチギレる` 対応を活かせる。
- 長所: 既存の対立・怒り・口論の文脈に乗せやすい。
- リスク: 怒りだけの夢まで対人衝突として読みすぎる。

phrase追加案:

- 長所: 実夢文で出やすい口語表現を狙って拾える。
- リスク: 口語表現が増えすぎると warning / 誤抽出の管理が必要になる。

抽出ルール修正案:

- 長所: 口語活用や派生表現をまとめて扱える可能性がある。
- リスク: Stage32の範囲を超え、fuzzy search / N-gram / 本格形態素解析に近づく。

`anger` 新規motif案:

- 長所: 怒りそのものを、対立や喧嘩から分離できる。
- リスク: emotion-action の過密化が進み、`fighting / screaming / refusing / crying` との境界設計が必要になる。

Stage32結論:

- `anger` は未確定。
- `キレる / キレ散らかす / ブチギレる` は既存 `fighting` に寄せた現状を維持して比較する。
- Stage33以降で、実夢文fixtureの蓄積を見て採否を判断する。

## 10. next-20候補の3分類結果
### next-addition-ready
- home-place / communication / relationship を増やさない候補。
- object-record / nature / body-appearance で説明しやすく、既存 relation と fixture で主役差を確認できる候補。
- `warning-fix-soon <= 184` を維持しやすい候補。
- 実夢文で未抽出が明確だが、既存motifとの境界が説明できる候補。

### needs-audit
- `anger` 周辺の怒り口語。
- `traffic_light / crosswalk / detour / turn_back / dead_end` に近い移動判断・閉塞系。
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
## Stage32

Stage32 では新規 motif 追加に入らず、320モチーフ時点の軽監査を行いました。
- 監査メモ: [docs/stage32-light-audit.md](docs/stage32-light-audit.md)
- `generic-specific = 525`、`object-record = 115`、`movement = 88` を最優先監査
- `body-appearance = 119`、emotion-action、`home-place = 111` の過密化と説明可能性を確認
- `traffic_light / crosswalk / detour / turn_back / dead_end`、`dead_end / hallway / room / house` の境界を整理
- `電車 -> car`、`廊下 -> school` 抑制の副作用確認を継続
- `キレる / キレ散らかす / ブチギレる` は比較対象に留め、`anger` 新規motifは未確定
- `warning-fix-soon <= 184`、`general count = 0`、`stale-relation = 0` を維持する前提で Stage33 へ接続
```

## 12. Stage33へ進む判断条件
- `generic-specific = 525` の代表的な増加理由を説明できる。
- `object-record = 115` の道具・記録・分類・固定・表示・証拠の主役差を説明できる。
- `movement = 88` の進む/止まる/渡る/迂回する/戻る/行き止まりを説明できる。
- `body-appearance = 119` が非診断・非断定を維持している。
- `home-place = 111` の増加理由が、場所追加ではなく relation 接続として説明できる。
- `電車 -> car` と `廊下 -> school` の抑制について、副作用確認ケースが整理されている。
- 怒り口語を `fighting` に寄せ続けるか、`anger` を検討するかの判断材料が揃っている。
- next-20候補が `next-addition-ready / needs-audit / hold` に分類されている。
- `warning-fix-soon <= 184`、`general count = 0`、`stale-relation = 0` を維持できる見込みがある。
