# Stage26 light audit memo

## 1. 前提確認

- AGENTS.md を確認済み。
- `node_modules/next/dist/docs/index.md` を確認済み。
- Stage26 は Next.js UI 変更ではなく、260モチーフ時点の軽監査フェーズ。
- Next.js 固有変更、UI全面改修、DB本実装、AI API導入、fuzzy search / N-gram / 本格形態素解析の本実装、relation 自動双方向化は対象外。
- Stage25 は実装完了済みで、test / lint / build は通過済み。
- Stage26 では新規 motif 追加、data/batches 変更、抽出ロジック本実装は行わない。

## 2. 固定形式の数値出力

```text
registry total: 260
relation total: 663

by cluster:
water-weather: 74
home-place: 107
movement: 60
communication: 60
relationship: 54
body-appearance: 99
emotion-action: 109
nature-sky: 40
object-record: 60
care-risk: 0
general: 0

by kind:
intentional-one-way: 10
should-be-reciprocal: 244
should-be-conflict: 1
generic-specific: 332
context-helper: 76
stale-relation: 0

general count: 0
```

validator summary:

```text
error: 0
warning-fix-soon: 188
warning-review-ok: 103
info: 689
```

## 3. Stage26の目的

Stage26 は 260 モチーフ時点で relation / warning / fixture / audit の説明可能性を整える軽監査フェーズとする。Stage25 で増えた cluster の過密化を確認しつつ、実地テストで見えた日本語抽出の誤反応 / 未抽出も正式な監査対象に入れる。

主目的:

- `generic-specific = 332` の増加理由を説明可能にする。
- `object-record = 60`、`body-appearance = 99`、`emotion-action = 109` の過密化を確認する。
- `bench` と home-place の境界を再確認する。
- `needle / string / thread / knot / tying`、`lamp / lantern / candle`、`glove / comb / hair` の近縁境界を整理する。
- 「空港」の「港」による `sea / ship` 誤抽出を記録する。
- 「キレ散らかす」が fighting / anger 系として拾えない未抽出を記録する。

## 4. やること / やらないこと

やること:

- Stage26監査メモを docs に残す。
- warning / relation / fixture / audit の管理方針を整理する。
- 日本語抽出の部分一致誤反応と口語未抽出を監査観点として追加する。
- next-20候補を `next-addition-ready / needs-audit / hold` の3分類で再棚卸しする。
- README に Stage26 の計画メモを残す。

やらないこと:

- 新規 motif 追加。
- data/batches の変更。
- UI全面改修。
- DB本実装。
- AI API導入。
- fuzzy search / N-gram / 本格形態素解析の本実装。
- Next.js 固有実装変更。
- relation 自動双方向化。
- anger を新規 motif 化するか、既存 fighting に寄せるかの確定。

## 5. 軽監査の優先順位

1. `generic-specific = 332`
   - 上位/下位、道具/対象、文脈補助、近縁境界のどれに該当するかを確認する。
   - relation total の増減ではなく、分類理由が説明可能かを重視する。

2. `object-record = 60`
   - `postcard / stamp / photo`
   - `jar / cup / shelf`
   - `tray / dish / cup`
   - `needle / string / thread / knot`
   - `lamp / lantern / candle`
   物体系が増えたため、同じ object でも「対象」「道具」「容器」「記録」「光」の役割差を確認する。

3. `body-appearance = 99`
   - `glove / comb / hair`
   - `scar / injury / past`
   - `shoulder / ankle`
   body-appearance が care-risk や医療断定へ寄りすぎないか確認する。

4. `emotion-action = 109`
   - `fighting` 周辺で口語の怒り表現を拾えていない。
   - `tying / knot / string / thread` が concealing / hiding へ寄りすぎていないか確認する。

5. 日本語抽出監査
   - 「空港」→「港」による `sea / ship` 誤抽出。
   - 「キレ散らかす」が fighting / anger 系に入らない未抽出。

## 6. warning / relation 管理方針

warning:

- `warning-fix-soon <= 188` を維持する。
- 1文字 alias は採用しない。
- 2文字以下の weak は原則採用しない。
- 短すぎる block は作らない。
- scar / injury / past / shoulder / ankle / needle / glove / comb 周辺では非診断・非断定方針を維持する。

relation:

- `general count = 0` を維持する。
- `stale-relation = 0` を維持する。
- relation total の増減自体を目標にしない。
- `comment -> sns` の直接 neighbor 回避を維持する。
- `coworker -> workplace` の直接 neighbor 回避を維持する。
- `bench` は home-place / storage ではなく public-place / waiting-place 的な一時停止として扱う。
- `needle / string / thread / knot / tying` は修復・結ぶ・ほどくの近縁として扱い、concealing / hiding へ寄せすぎない。
- `lamp / lantern / candle` は手元の灯り、持ち歩く灯り、火の灯りで粒度差を確認する。
- `glove / comb / hair` は body-appearance 補助として扱い、care-risk 化させない。

## 7. 日本語抽出の誤反応 / 未抽出メモ

### 部分一致による誤抽出

実地テスト:

```text
最近空港に急ぐ夢と誰かにキレ散らかす夢をよく見る
```

現行挙動:

- `airport` は拾える。
- `being_late` は「急ぐ」で拾える。
- ただし「空港」に含まれる「港」に反応し、`sea` / `ship` が混ざる。

監査観点:

- `港` のような短い語が複合語内で過剰に反応していないか。
- `空港` は movement / travel 系として優先されるべきで、sea / ship へ広がるべきではない。
- 既存 fixture で `airport` 単独のケースと `港` 単独のケースを分けて再現できるか確認する。

Stage27以降の修正候補:

- alias 調整: `sea` / `ship` 側の `港` を弱める、または phrase 化する。
- phrase 調整: `空港` を airport の強い phrase として保持し、`港` 単独との優先差を明確にする。
- 抽出ルール調整: 複合語内の短語マッチを抑制する軽量ルールを検討する。
- 本格形態素解析はまだ導入しない。

### 口語・砕けた日本語の未抽出

現行挙動:

- 「キレ散らかす」が `fighting` / anger 系として拾えない。

監査観点:

- `怒る`、`キレる`、`ブチギレる`、`キレ散らかす`、`言い返す`、`怒鳴る` をどの motif に寄せるか確認する。
- 既存 `fighting` に寄せると対人衝突として強く出すぎる可能性がある。
- 新規 `anger` motif を作る場合、emotion-action の過密化と relation 分類が必要になる。

Stage26では確定しない判断:

- anger を新規 motif 化するか。
- 既存 `fighting` に alias / phrase として寄せるか。
- `screaming` / `apologizing` / `refusing` など既存 action とどう境界を切るか。

Stage27以降の修正候補:

- `fighting` に口語 anger phrase を追加する案。
- `anger` または `getting_angry` を新規 motif 候補にする案。
- 口語怒り表現 fixture を追加し、`fighting` / `screaming` / `refusing` の混線を確認する案。

## 8. fixture / audit / test の不足観点

追加候補 fixture:

- `airport` 単独確認:
  - 入力例: `空港に急いで向かう夢`
  - 期待: `airport`, `being_late`
  - 非期待: `sea`, `ship`

- `port` 単独確認:
  - 入力例: `港で船を待つ夢`
  - 期待: `ship` または `sea`
  - 非期待: `airport`

- 口語怒り未抽出:
  - 入力例: `誰かにキレ散らかす夢`
  - 期待候補: Stage27で `fighting` に寄せるか `anger` を作るか決める
  - 非期待: unrelated communication / relationship への過剰拡張

- `bench` 境界:
  - 期待: public / waiting 的な一時停止
  - 非期待: `house`, `storage_room`

- `needle / string / thread / knot / tying`:
  - 期待: 修復、結ぶ、ほどく
  - 非期待: `concealing`, `hiding`, `injury`, `wound`

- `lamp / lantern / candle`:
  - 期待: 粒度差を保持
  - 非期待: すべて同一の光 motif として扱わない

- `glove / comb / hair`:
  - 期待: body-appearance 補助
  - 非期待: care-risk / diagnosis

## 9. next-20候補の3分類結果

### next-addition-ready

条件:

- home-place / communication / relationship を増やさない。
- object-record / nature / action で役割差が説明しやすい。
- fixture impact と warning impact を事前に書ける。
- 口語抽出問題と直接ぶつからない。

候補方向:

- nature 系で既存 relation が説明しやすい候補。
- object-record でも `postcard / jar / tray` と粒度が被りにくい候補。
- action 系でも emotion-action を過密化しすぎない候補。

### needs-audit

条件:

- 既存 motif と近すぎる。
- 口語・部分一致・短語マッチの副作用がありそう。
- body-appearance / care-risk / emotion-action に寄りやすい。

候補方向:

- anger / fighting 周辺。
- port / airport のような複合語と短語の境界に関わる候補。
- `needle / string / thread / knot / tying` に近い結束・修復系。
- light 系の `lamp / lantern / candle` に近い候補。

### hold

条件:

- home-place をさらに厚くする。
- communication を過密化させる。
- relationship を広げすぎる。
- 医療・診断・症状に寄りやすい。
- 本格形態素解析なしでは誤抽出リスクが高い。

候補方向:

- bedroom / bathroom / medicine / meeting / office_room 系は引き続き hold。
- wound / secret / whispering / message も Stage26 時点では hold。

## 10. READMEに残す計画メモ案

```md
## Stage26

Stage26 では新規 motif 追加に入らず、260モチーフ時点の軽監査を行いました。
- 監査メモ: [docs/stage26-light-audit.md](docs/stage26-light-audit.md)
- `generic-specific = 332`、`object-record = 60`、`body-appearance = 99`、`emotion-action = 109` を優先監査
- `bench` と home-place、`needle / string / thread / knot / tying`、`lamp / lantern / candle`、`glove / comb / hair` の境界を確認
- 実地テストで見えた `空港` → `港` による `sea / ship` 誤抽出と、`キレ散らかす` 未抽出を Stage27 以降の修正候補として整理
- `warning-fix-soon <= 188`、`general count = 0`、`stale-relation = 0` を維持する前提で Stage27 へ接続
```

## 11. Stage27へ進む判断条件

- `generic-specific = 332` の増加理由を cluster / motif group ごとに説明できる。
- `object-record = 60` の過密化が次の追加候補を阻害しない。
- `bench` が home-place / storage 系に混線しない方針が明確。
- `needle / string / thread / knot / tying` が concealing / hiding / injury / wound へ流れない方針が明確。
- `lamp / lantern / candle` の粒度差が fixture で確認できる。
- `glove / comb / hair` が非診断・非断定で扱える。
- `空港` 誤反応と `キレ散らかす` 未抽出について、Stage27で alias / phrase / 抽出ルールのどこを触るか候補が整理されている。
- `warning-fix-soon <= 188`、`general count = 0`、`stale-relation = 0` を維持できる。
