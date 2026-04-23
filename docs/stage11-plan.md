# Stage11 実装計画書

Stage11は「監査 + 候補整理」フェーズです。120モチーフ到達後の品質固定を目的とし、batch-07の実装には入りません。Stage9が100モチーフ前の監査フェーズとして機能したように、Stage11は140モチーフへ進む前の品質ゲートとして位置づけます。

---

## 1. Stage11の目的

| 目的 | 内容 |
|---|---|
| alias重複の棚卸し | `known-alias-overlap` 42件の許容条件を再確認し、見直し対象を分離する |
| 行動系活用形の整理 | phrase救済済み / 未対応残し を文書化し、batch-07設計の前提を固める |
| losing / lost / searching クラスタ監査 | 過検出・未検出・near-neighbor の3観点でextraction精度を確認する |
| warning-review-ok の可視化強化 | 47件の理由カテゴリを許容条件まで踏み込んで追記する |
| relation info の整理 | 243件のrelation infoをクラスタ別に可視化し、batch-07追加前に説明可能な状態にする |
| batch-07候補の選定 | カテゴリ配分と選定基準を固め、候補レビュードキュメントを作成する |

---

## 2. やること / やらないこと

### やること

- `warning-review-ok` の全件に許容条件と見直し判断を追記する（件数は固定しない）
- `known-alias-overlap` 42件を「継続許容」「要見直し」「次回削減候補」に分類する
- 行動系motif（running / cleaning / tidying / losing / handing_over）の活用形を、phrase救済済み一覧と未対応一覧に整理する
- `losing` / `lost` / `searching` クラスタの extraction audit fixture を追加する
- relation info 243件をクラスタ別に分類し、docs に追記する
- batch-07候補30〜40件のカテゴリ配分案と選定基準を docs に作成する
- 既存 fixture / test を壊さない前提で Stage11 用 audit fixture を追加し、対応するテストも追加する

### やらないこと

- batch-07 の本実装（motif / alias / questions / blocks の追加）
- 既存 motif 定義の意味変更・scoreImpact の大規模再設計
- 抽出ロジックの大規模変更（conflictSuppression / termWeights の再設計など）
- UI 全面改修
- DB 化・AI API 導入
- fuzzy search / N-gram / 形態素解析の導入
- 既存 fixture の削除・変更（Stage1〜10 fixture は読み取り専用）

---

## 3. 監査の優先順位

| 優先度 | テーマ | 理由 |
|:---:|---|---|
| 1 | `losing` / `lost` / `searching` クラスタ監査 | Stage10で `losing` を追加した直後であり、過検出・近縁重なりのリスクが最も高い |
| 2 | `known-alias-overlap` 42件の棚卸し | Stage9の29件からStage10で13件増加しており、許容条件が曖昧になるリスクがある |
| 3 | 行動系活用形の未対応一覧整理 | batch-07に行動系を追加する場合の設計前提を固める必要がある |
| 4 | relation info 243件のクラスタ分類 | 件数が増え続けており、説明可能性の低下を防ぐために分類粒度を上げる |
| 5 | batch-07候補の選定方針 | Stage11完了ゲートとして、次のフェーズに渡せる状態にする |

---

## 4. warning / alias / relation 管理改善方針

### 4-1. warning-review-ok 47件のレビュー強化

Stage10完了時点の内訳:

| category | count | Stage11での扱い |
|---|---:|---|
| `known-alias-overlap` | 42 | 継続許容 / 要見直し / 削減候補に3分類する |
| `intentional-one-way-conflict` | 1 | 変更なし |
| `generic-specific-review-ok` | 4 | batch-07候補設計に影響する場合は先に確認する |
| `accepted-near-neighbor` | 0 | Stage11では新規追加しない |
| `context-helper-review-ok` | 0 | Stage11では新規追加しない |

各件について、以下を追記する:

```
許容条件: なぜ重複を許容しているか
見直し判断: 次のbatch追加時に変えるべきか
```

### 4-2. known-alias-overlap 42件の棚卸し方針

分類先:

| 分類 | 基準 | 扱い |
|---|---|---|
| 継続許容 | 意味差分が明確で、どちらのfixture文脈でも自然に働く | そのまま維持、条件をdocsに明記 |
| 要見直し | 意味差分が弱く、どちらのfixture文脈でも主役が入れ替わりやすい | 次のbatch前にphrase設計で分離できるか検討 |
| 削減候補 | 現在のextraction挙動に差が出ていない、または片方のmotifが常に補助に回っている | batch-07前に削除または統合を検討 |

Stage11では分類と記録のみ行い、alias の実変更はしない。

### 4-3. relation info 243件の可視化強化

Stage7のcluster分類（127件対象）をベースに、243件版の更新クラスタマップを作成する。

追加する視点:

- `losing / lost / searching` クラスタを新設（Stage10追加の `losing` 起点）
- `daily-object` クラスタ（desk / chair / window / map / ticket / charging / calendar）
- `food-place` クラスタ（restaurant / cafe / convenience_store / cinema）

Stage11ではcluster分類の記録と `general` 枠の残件確認を行う。`general` 枠が5件を超える場合は分類不足と見なし、batch-07前に整理する。

---

## 5. losing / lost / searching クラスタ監査方針

### 5-1. 対象motifと役割定義

| motif | 主役として読む条件 | 補助として読む条件 |
|---|---|---|
| `losing` | 失くす行動が明示される（財布を失くす、鍵を失くす） | `lost` や `searching` の中の喪失感の背景 |
| `lost` | 迷子・道に迷う・方向を失う状態が主題 | `map` / `crossroad` / `road` の方向文脈の補助 |
| `searching` | 何かを探す行動が主題（探す・見つからない・捜す） | `losing` の後続として補助的に出る |

### 5-2. 3観点の監査

**過検出の確認（false positive）**

- `失くす` を含まない文脈で `losing` が出ていないか
- `迷う` を含む文脈で `lost` が必要以上に高スコアを取っていないか
- `探す` が関係ない文脈で `searching` が出ていないか

**未検出の確認（false negative）**

- `見当たらない`、`どこにもない`、`なくなっていた` などの周辺表現を `losing` が拾えているか
- `どこへ行けばいいか分からない` 系の表現を `lost` が拾えているか

**near-neighbor 重なりの確認**

- `losing` + `lost` が同時に高スコアで出る文脈を fixture 化し、主役・補助の優先関係を固定する
- `wallet` / `key` / `ticket` が明示される場合の `losing` の優先を確認する

### 5-3. 追加する audit fixture

| fixture名 | 確認対象 |
|---|---|
| `stage11-losing-searching-overlap` | `losing` が主役、`searching` が補助として出ることを確認 |
| `stage11-lost-road-no-losing` | `lost` が主役、`losing` が出ないことを確認 |
| `stage11-searching-no-losing` | 探す文脈で `losing` が不要に出ないことを確認 |
| `stage11-losing-wallet-inflection` | `なくした`・`なくしていた` 等の活用形を `losing` が拾えることを確認 |
| `stage11-lost-paraphrase-unhandled` | `どこだか分からなくなって` 系の未対応表現を記録する |

---

## 6. 行動系活用形の整理方針

Stage10までに phrase 追加で救った活用形と、未対応として残すものを文書で一覧化する。

### 6-1. phrase救済済み一覧（Stage10時点）

| motif | 救済した代表phrase | Stage |
|---|---|---|
| `running` | `駅まで走って`、`走った夢`、`走り続ける` | Stage10 |
| `cleaning` | `部屋を掃除して`、`掃除した夢`、`部屋をきれいにした` | Stage10 |
| `tidying` | `片付けている`、`片付けた夢`、`引き出しを整理した` | Stage10 |
| `losing` | `財布を失くして`、`切符を失くして`、`なくしてしまった` | Stage10 |
| `handing_over` | `手渡した夢`、`渡してあげた` | Stage10 |
| `opening` | `ドアを開いた`、`扉が開いた` | Stage9 |
| `forgetting` | `約束を忘れた`、`持ち物を忘れた` | Stage9 |
| `picking_up` | `財布を拾った`、`鍵を拾った` | Stage9 |

### 6-2. 未対応一覧（Stage11時点での整理）

Stage11では以下を「phrase追加で救うもの」「未対応として残すもの」に再分類する。

| 表現 | 種別 | 理由 |
|---|---|---|
| `気持ちだけが先走る` | 未対応に残す | 比喩表現のため辞書肥大を避ける |
| `心を洗い流したい` | 未対応に残す | `cleaning` motifへ寄せすぎず残す |
| `ど忘れしていた` | 未対応に残す | 口語的すぎる |
| `扉が開きっぱなし` | 未対応に残す | 行動ではなく状態表現 |
| `なくなっていた`（状態） | phrase追加候補 | `losing` が拾えると自然なため検討 |
| `どこを探しても見つからない` | phrase追加候補 | `searching` の活用形として設計できる |
| `走り出した`・`走り去った` | phrase追加候補 | `running` の後続形として拾えるか確認 |

Stage11では上記の分類記録のみ行い、phrase の実追加は行わない。batch-07設計時の参照資料として使う。

---

## 7. batch-07候補のカテゴリ配分案

batch-07は20件追加を想定し、候補プールを30〜40件で作成する。本 Stage11では選定方針と候補プールのdocsを作成するにとどめる。

### 7-1. カテゴリ配分案

| category | 配分案 | 候補例 | 優先理由 |
|---|---:|---|---|
| 身体・感覚 | 4〜5件 | 手、足、目、声、痛み | 高頻度夢素材だが医療断定を避ける設計が必要 |
| 場所（屋内・公共） | 4件 | 病院、神社、公園、エレベーター | 生活圏・非日常場所を補強 |
| 人物・関係 | 3〜4件 | 子ども、上司、知らない人 | 対人文脈を拡充。既存 friend/family/workplace との粒度整理が前提 |
| 行動（感情系） | 3〜4件 | 笑う、泣く、謝る、隠れる | 感情行動として質問差分が作りやすい |
| 自然・風景 | 2〜3件 | 山、森、砂 | sky/cloud/rain と異なる自然クラスタを補強 |
| 現代生活 | 2〜3件 | ゲーム、動画、ニュース | 通信系と絡まないものを優先 |
| batch-06保留候補から引き上げ | 2〜3件 | 温泉、眼鏡、馬 | 設計問題が解消されたものを選ぶ |

合計候補: 20〜26件（候補レビューで30〜40件に拡張し、20件に絞り込む）

### 7-2. 選定基準（batch-07候補レビューに使う）

- 既存120件とのrelationが3件以内で説明できる
- phraseを最低3件設計できる
- 2文字以下のweak語に依存しない
- 質問で3択以上の意味差分が出る
- 身体的・医療的断定を避けるblockトーンを設計できる
- 既存 fixture に誤検出を生まないことを事前 audit fixture で確認できる

### 7-3. batch-06保留候補の再評価観点

| 候補 | 保留理由 | Stage11での再評価 |
|---|---|---|
| 温泉 | water/recovery/裸との設計が複雑 | recovery文脈のrelation設計が固まれば引き上げ可能 |
| 眼鏡 | 目/見る/視線との切り分けが必要 | `eye` 系motifがない状態なら単独で設計しやすい |
| イヤホン | phone/chat/voiceとの確認が必要 | 通信系クラスタ監査後に判断する |
| 馬 | 動物追加として有効だが優先度は低い | animal枠の配分を整理して判断する |
| 子ども | baby/familyとの粒度整理が必要 | family/friendとの距離を先に確認する |
| 壊す | 高刺激寄りでblockトーン確認が必要 | audit fixtureで過検出確認できれば採用可 |
| ゲーム/動画/ニュース | 通信系と絡む懸念 | 通信系クラスタの監査後に判断する |

---

## 8. テスト・audit・docs 方針

### 8-1. fixture の追加方針

- Stage1〜10の既存fixture は変更しない
- Stage11固有の audit fixture を追加する（命名: `stage11-〇〇-〇〇`）
- losing / lost / searching クラスタ用 fixture を5件追加（セクション5参照）
- 行動系活用形の未対応確認 fixture を2件追加
  - `stage11-unhandled-losing-state-expression`（「なくなっていた」系が未検出であることを記録）
  - `stage11-unhandled-searching-extended`（「どこを探しても」系が未検出であることを記録）

### 8-2. test の方針

- 既存327件のテストはすべてパス前提を維持する
- 追加する audit fixture に対してテストを追加する
- relation classification テストの対象件数を更新する（243件対応）
- warning-review-ok のカテゴリ別件数テストを更新する（47件対応）

### 8-3. docs の追加・更新

| ドキュメント | 種別 | 内容 |
|---|---|---|
| `stage11-plan.md` | 新規（本書） | Stage11計画書 |
| `stage11-extraction-audit.md` | 新規 | losing/lost/searching クラスタ監査結果 |
| `stage11-inflection-review.md` | 新規 | 行動系活用形 phrase救済済み / 未対応 一覧 |
| `batch-07-candidate-review.md` | 新規 | batch-07候補30〜40件のカテゴリ別レビュー |
| `warning-review-ok-policy.md` | 更新 | Stage10の47件を理由カテゴリ別に許容条件まで追記 |
| `validator-warning-review.md` | 更新 | Stage11のbaseline数値を追記 |
| `stage11-relation-cluster.md` | 新規 | relation info 243件のクラスタ分類マップ |

---

## 9. 実装順序

Stage11 の作業範囲は、audit fixture の追加・テスト更新・docs の新規作成と更新に限る。batch-07 の本実装（motif / alias / questions / blocks）および既存 motif 定義の意味変更は対象外。

| 順序 | 作業 | 成果物 |
|:---:|---|---|
| 1 | `losing / lost / searching` クラスタ監査 | `stage11-extraction-audit.md`、audit fixture 5件、対応テスト追加 |
| 2 | `warning-review-ok` 全件の許容条件追記 | `warning-review-ok-policy.md` 更新 |
| 3 | `known-alias-overlap` 42件の3分類 | `warning-review-ok-policy.md` 更新（続き） |
| 4 | 行動系活用形の一覧整理 | `stage11-inflection-review.md`、未対応 fixture 2件、対応テスト追加 |
| 5 | relation info 243件のクラスタ分類 | `stage11-relation-cluster.md` |
| 6 | batch-07候補レビュードキュメント作成 | `batch-07-candidate-review.md` |
| 7 | validator / test の数値更新 | `validator-warning-review.md` 更新、既存テストの件数アサーション更新 |
| 8 | Stage11 completion gate 確認 | 全 fixture pass、error = 0、warning-fix-soon 189以下 |

---

## 10. リスクと回避策

| リスク | 発生条件 | 回避策 |
|---|---|---|
| audit fixture が既存 fixture と干渉する | `losing` 系の新 fixture が既存の `losing-wallet` fixture と期待値衝突する | fixture 命名を `stage11-` プレフィックスで統一し、既存 fixture は変更しない |
| `known-alias-overlap` 棚卸しで実変更を始める | 「要見直し」分類から alias 削除に踏み込む | Stage11 では分類記録のみ、alias の実変更は batch-07 前フェーズに持ち越す |
| relation info が batch-07 前に増え続ける | Stage11 の audit fixture 追加で one-way relation が増える | audit fixture 追加時は relation 増加を最小化し、`general` 枠を 5 件以下で管理する |
| batch-07候補が過多になる | カテゴリ配分の見積もりが甘い場合 | 候補レビュー段階で選定基準の「3件以内 relation」を厳格に適用する |
| `warning-fix-soon` が 189 を超える | phrase追加などの alias 系変更を Stage11 中に行った場合 | Stage11 では alias / phrase の実追加は行わない。fixture・docs のみに限定する |

---

## 11. 期待成果物

Stage11 完了時点で以下が揃っていることを確認する。

| 成果物 | 確認基準 |
|---|---|
| `stage11-extraction-audit.md` | losing / lost / searching の3観点監査が文書化されている |
| `stage11-inflection-review.md` | phrase救済済み一覧と未対応一覧が分類されている |
| `batch-07-candidate-review.md` | 30〜40件がカテゴリ別にレビュー済み、20件仮選定済み、見送り理由が記録済み |
| `stage11-relation-cluster.md` | relation info 243件がクラスタ分類済み、`general` 枠は 5 件以下 |
| `warning-review-ok-policy.md` 更新 | 全件に許容条件が追記されている |
| audit fixture 7件以上追加 | Stage11追加分を含む全テストがパスする |

---

## Stage11 Completion Gate

| 項目 | 基準 |
|---|---|
| error | 0 を維持 |
| warning-fix-soon | 189 以下を維持 |
| warning-review-ok | 全件に許容条件が追記済み（件数は固定しない） |
| relation `general` 枠 | 5件以下 |
| audit fixture | 全テスト pass |
| `known-alias-overlap` 分類 | 全件が3分類済み |
| batch-07 候補 | 30〜40件レビュー済み、20件仮選定済み、見送り理由記録済み |
