# Stage28 light audit memo

## 1. 前提確認
- AGENTS.md を確認済み。
- `node_modules/next/dist/docs/index.md` を確認済み。
- Stage28 は Next.js UI 変更ではなく、280モチーフ時点の軽監査フェーズとして扱う。
- Stage28では Next.js 固有変更は対象外。
- Stage28では新規motif追加、`data/batches` の実装変更、抽出ルールの大規模変更は行わない。

## 2. 固定形式の数値出力
```text
registry total: 280
relation total: 723

by cluster:
water-weather: 79
home-place: 108
movement: 70
communication: 60
relationship: 55
body-appearance: 108
emotion-action: 117
nature-sky: 50
object-record: 76
care-risk: 0
general: 0

by kind:
intentional-one-way: 10
should-be-reciprocal: 242
should-be-conflict: 1
generic-specific: 395
context-helper: 75
stale-relation: 0

general count: 0
```

validator summary:

```text
error: 0
warning-fix-soon: 185
warning-review-ok: 105
info: 749
```

## 3. Stage28の目的
Stage28 は 280→300 の追加に入る前に、relation / warning / fixture / audit の説明可能性を整える軽監査フェーズとする。Stage27で増えた `generic-specific`、`object-record`、`body-appearance`、`emotion-action` の過密化を監査し、cluster監査と実夢文監査を並行して進める方針を明文化する。

主目的:

- `generic-specific = 395` の分類理由を説明可能にする。
- `object-record = 76` の道具・記録・小物の粒度差を整理する。
- `body-appearance = 108` が非診断・非断定方針を維持しているか確認する。
- `emotion-action = 117` と怒り口語の扱いを整理する。
- `shoelace / zipper / pocket` と `concealing / hiding` の境界を確認する。
- 実夢文監査を、部分一致誤抽出、口語未抽出、主役モチーフ入れ替わりの3軸で記録する。

## 4. やること / やらないこと
やること:

- Stage28監査メモを docs に残す。
- warning / relation / fixture / audit の管理方針を整理する。
- 実夢文ベース監査を cluster監査と並行する正式観点として記録する。
- next-20候補を `next-addition-ready / needs-audit / hold` の3分類で再棚卸しする。
- README に Stage28 の計画メモを残す。

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
1. `generic-specific = 395`
   - 最優先監査対象。
   - 上位/下位、道具/対象、文脈補助、粒度差のどれで説明するかを代表例ごとに確認する。
   - relation total の増減ではなく、分類理由が説明可能かを重視する。

2. `object-record = 76`
   - `pencil / bookmark / ticket_stub / paint / keychain / pocket` など、記録・道具・小物が増えたことによる過密化を確認する。
   - object 同士でも、書く道具、読みかけの目印、過去の証拠、表現材料、持ち物の目印、身近な保持で主役差を分ける。

3. `body-appearance = 108`
   - `eyelash / face / eye / makeup / scar / injury` 周辺を確認する。
   - scar 系は非診断・非断定を維持し、care-risk や医療判断へ寄せない。

4. `emotion-action = 117`
   - `fighting` 周辺に `キレる / キレ散らかす / ブチギレる` などを寄せる場合の広がりを監査する。
   - 怒り、対立、叫び、拒否、暴力が混線しないよう、Stage28では `anger` 新規motifを確定しない。

5. `shoelace / zipper / pocket` と `concealing / hiding`
   - 結ぶ、閉じる、しまう表現が「隠す」へ寄りすぎないか確認する。
   - `shoelace` は歩く前の調整、`zipper` は開閉境界、`pocket` は身近な保持として扱う。

6. 実夢文監査
   - cluster数値だけでは見えない、実入力での誤抽出・未抽出・主役入れ替わりを記録する。

## 6. warning / relation / fixture / audit 管理方針
warning:

- `warning-fix-soon <= 185` を維持する。
- 1文字 alias は採用しない。
- 2文字以下の weak は原則採用しない。
- 怒り口語は便利だが、短く広い語は warning 増加リスクとして扱う。
- body-appearance / scar 系は、block / question / alias のすべてで非診断・非断定を維持する。

relation:

- `general count = 0` を維持する。
- `stale-relation = 0` を維持する。
- relation total の増減自体ではなく、分類済みか・説明可能かを重視する。
- `comment -> sns` の直接 neighbor 回避を維持する。
- `coworker -> workplace` の直接 neighbor 回避を維持する。
- `shoelace / zipper / pocket` は `concealing / hiding` に寄せず、身支度・開閉・保持として説明する。

fixture / audit:

- Stage28では不足観点を整理し、fixture本実装はStage29以降の候補にする。
- 実夢文監査は、抽出候補の順位を含めて記録できる形を検討する。
- 記録粒度は「1位で拾えた」「上位6件には入った」「未抽出」の3段階を基本にする。

## 7. 実夢文監査の反映方針
Stage28から、cluster監査と実夢文監査を並行して進める。

最低限の監査軸:

- 部分一致誤抽出
  - 例: `空港` の `港`、`電車` の `車`、`廊下` による school 混入。
  - 対応候補は alias修正、phrase修正、抽出ルール修正の比較に留め、Stage28では確定実装しない。

- 口語・砕けた日本語の未抽出
  - 例: `キレ散らかす`、`ブチギレる`、`テンパる`、`詰んだ`。
  - 既存motifに寄せるか、新規motifとして分けるかを比較する。

- 主役モチーフの入れ替わり
  - 例: 遅刻夢で `being_late` より `smartphone` が主役化する。
  - 例: 試験夢で `exam` より `clock` が主役化する。
  - 例: 元恋人夢で `ex_partner` が拾われず、`breakup` や `house` が主役化する。

記録形式案:

```text
case:
expected primary:
actual rank 1:
in top 6:
missing:
unexpected:
note:
```

## 8. 怒り口語の比較メモ
Stage28では `anger` 新規motifは確定しない。比較対象として以下を残す。

`fighting` に寄せる案:

- 長所: Stage27の `キレ散らかす` 対応を活かせる。
- 長所: 既存の対立・怒り・口論の文脈に乗せやすい。
- リスク: 怒りだけの夢まで対人衝突として読みすぎる。

phrase追加案:

- 長所: `ブチギレる` など実夢文で出やすい表現を狙って拾える。
- リスク: 口語表現が増えすぎると warning / 誤抽出の管理が必要になる。

抽出ルール修正案:

- 長所: 口語活用や派生表現をまとめて扱える可能性がある。
- リスク: Stage28の範囲を超え、fuzzy search / N-gram / 本格形態素解析に近づく。

`anger` 新規motif案:

- 長所: 怒りそのものを、対立や喧嘩から分離できる。
- リスク: emotion-action の過密化が進み、`fighting / screaming / refusing / crying` との境界設計が必要になる。

Stage28結論:

- `anger` は未確定。
- `ブチギレる` は needs-audit として記録。
- Stage29以降で、実夢文fixtureと一緒に採否を判断する。

## 9. fixture / audit / test の不足観点
- 遅刻夢で `being_late` が1位または上位6件に入るか。
- 試験夢で `exam` が1位または上位6件に入るか。
- 追いかけられる夢が未抽出にならないか。
- 元恋人夢で `ex_partner` が拾えるか。
- 仕事ミス夢で `making_mistake` が拾えるか。
- `空港` が `sea / ship` を誘発しない状態を維持できるか。
- `港` 単独を今後どのmotifに寄せるか、または未確定として扱うか。
- `ブチギレる` を `fighting` に寄せるか、`anger` 検討に回すか。
- `電車` が `car` を誘発する部分一致をどう扱うか。
- `廊下` が school を主役化させるケースをどう扱うか。

## 10. next-20候補の3分類
### next-addition-ready
- object-record / nature / body-appearance で説明しやすい候補。
- 既存 relation と fixture で主役差を確認できる候補。
- home-place / communication / relationship を増やさない候補。
- 実夢文で主役未抽出が明確で、既存motifとの境界が説明できる候補。

### needs-audit
- 怒り口語、追いかけられる夢、試験夢、遅刻夢など、実夢文では重要だが境界設計が必要な候補。
- `body-appearance / care-risk / emotion-action` に寄りやすい候補。
- 部分一致リスクがあり、alias / phrase 設計を先に詰めるべき候補。
- `anger` はこの枠で比較対象に置くが、Stage28では確定しない。

### hold
- home-place / communication / relationship をさらに厚くする候補。
- 医療・診断・症状へ寄りやすい候補。
- 短語部分一致リスクが高く、制御方針がない候補。
- cluster過密化を悪化させるだけで主役差が弱い候補。

## 11. READMEに残す計画メモ案
```md
## Stage28

Stage28 では新規 motif 追加に入らず、280モチーフ時点の軽監査を行いました。
- 監査メモ: [docs/stage28-light-audit.md](docs/stage28-light-audit.md)
- `generic-specific = 395`、`object-record = 76`、`body-appearance = 108`、`emotion-action = 117` を優先監査
- `shoelace / zipper / pocket` と `concealing / hiding` の境界を確認
- 実夢文監査を cluster監査と並行し、部分一致誤抽出、口語未抽出、主役モチーフ入れ替わりを記録
- `キレる / キレ散らかす / ブチギレる` など怒り口語は比較対象に留め、`anger` 新規motifは未確定
- `warning-fix-soon <= 185`、`general count = 0`、`stale-relation = 0` を維持する前提で Stage29 へ接続
```

## 12. Stage29へ進む判断条件
- `generic-specific = 395` の代表的な増加理由を説明できる。
- `object-record = 76` の道具・記録・小物の主役差を説明できる。
- `body-appearance = 108` が非診断・非断定を維持している。
- `emotion-action = 117` と怒り口語の扱いについて、Stage29で実装する範囲と保留範囲を分けられる。
- 実夢文監査で「1位で拾えた」「上位6件には入った」「未抽出」の記録形式が定まっている。
- next-20候補が `next-addition-ready / needs-audit / hold` に分類されている。
- `warning-fix-soon <= 185`、`general count = 0`、`stale-relation = 0` を維持できる見込みがある。
