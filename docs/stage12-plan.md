# Stage12 実装計画書（batch-07）

## 前提確認

### registry 現状（Stage11完了時点）

| item | count |
|---|---:|
| registry total | 120 |
| error | 0 |
| warning-fix-soon | 189 |
| warning-review-ok | 47 |
| info / relation total | 248 |

### relation by cluster

| cluster | count |
|---|---:|
| home-place | 56 |
| movement | 39 |
| water-weather | 30 |
| emotion-action | 27 |
| communication | 24 |
| relationship | 21 |
| body-appearance | 18 |
| object-record | 16 |
| nature-sky | 14 |
| care-risk | 0 |
| general | 3 |

### relation by kind

| kind | count |
|---|---:|
| should-be-reciprocal | 91 |
| context-helper | 79 |
| generic-specific | 65 |
| intentional-one-way | 11 |
| should-be-conflict | 2 |
| stale-relation | 0 |

### Stage11 引き渡し条件の確認

| 条件 | 状況 |
|---|---|
| 仮選定20件が選定基準を満たしていること | ✓ docs/batch-07-candidate-review.md で記録済み |
| ※既存確認が必要な9件の registry 確認 | ✓ 全9件（hospital / park / elevator / laughing / crying / apologizing / hiding / mountain / forest）が既に登録済みと確認。batch-07 実装対象から除外 |
| 削減候補2件の school alias 削除 | 未処置。Stage12 前半着手前に完了する |
| stage11-extraction-audit の監査内容の反映 | ✓ 本計画書の設計ルールに反映済み |

---

## 1. Stage12の目的

Stage11で整備した監査・relation・warning 基盤を活かし、batch-07（20件）を安全に追加する。

- registry を 120 → 140 モチーフに拡張する
- warning-fix-soon を 189 件に維持したまま実装を完了させる
- general 枠を 3 件以下に保つ（拡大させない）
- Stage11 で確認した losing / lost / searching 監査・活用形未対応一覧・relation cluster の知見を全件の設計に反映する
- 10 + 10 の段階実装により、前半完了後に validator と fixture を確認してから後半に進む

---

## 2. やること / やらないこと

### やること

- `school` から `テスト` / `試験を受ける` の alias 削除（Stage12着手前の前処置）
- batch-07（20件）を 10 + 10 に分けて実装
- 各 motif の motifs.ts / aliases.ts / questions.ts / blocks.ts を追加
- 各 motif に relation 設計（既存 cluster への帰属とレビューkind付与）
- batch-07 対象の audit fixture を追加
- `stage12-extraction-audit.md` を作成・更新
- `docs/validator-warning-review.md` に Stage12 前半・後半それぞれの数値を追記
- general 枠に残った既存3件の再分類機会があれば行う

### やらないこと

- UI の全面改修・DB化・AI API 導入
- fuzzy search / N-gram / 本格形態素解析の導入
- 既存 Stage1〜11 の fixture / motif 定義の意味変更
- 既存 scoreImpact の大規模再設計
- warning-fix-soon を 189 件より増やすこと
- general 枠を 3 件超に拡大させること
- 前半10件未確認のまま後半10件に進むこと

---

## 3. 実装順とグルーピング

### 前処置（Stage12着手前）

| 作業 | 内容 |
|---|---|
| school alias 削除 | `テスト` を school の aliases から削除、`試験を受ける` を school の aliases から削除。exam の核心 phrase として残す |
| validator 確認 | 削除後に `npm test` でエラーなし・warning-fix-soon 未増加を確認 |

### 前半（batch-07a: 10件）

低リスク・関係設計が素直・高頻度夢素材を優先する。

| 優先 | id | 表示名 | 帰属クラスタ | 選定理由 |
|:---:|---|---|---|---|
| 1 | `hand` | 手 | body-appearance | 高頻度。受け渡し・触れる行動との relation 設計が容易 |
| 2 | `foot` | 足 | body-appearance | hand と対で設計しやすい。歩く・踏み出す行動の基盤 |
| 3 | `voice` | 声 | communication | phone と明確に分離できる。呼びかけ・届かない声の文脈 |
| 4 | `shrine` | 神社 | home-place | 日本文化固有。祈り・清め・縁起文脈が他と重ならない |
| 5 | `horse` | 馬 | nature-sky | animal 枠の補強。移動・力強さで既存 animal 系と共存しやすい |
| 6 | `sand` | 砂 | water-weather | 時間・消える感覚。water-weather クラスタとも接続できる |
| 7 | `embracing` | 抱きしめる | emotion-action | 安心・受け入れの行動。crying/laughing（既存）と感情軸が異なる |
| 8 | `news` | ニュース | communication | 外部情報の侵入文脈。SNS/notification とは役割が異なる |
| 9 | `past` | 過去 | object-record | 懐かしさ・悔い。letter/childhood_home と近縁だが時間軸として独立 |
| 10 | `boss` | 上司 | relationship | workplace との粒度整理が鍵。承認欲求・ストレス文脈 |

**前半完了後のゲート**

- `npm test` 全パス
- error = 0 / warning-fix-soon ≤ 189 を確認
- general ≤ 3 を確認
- stage12-extraction-audit.md の前半監査セクションを記録

### 後半（batch-07b: 10件）

設計上の注意が必要なもの・医療的断定リスクのあるもの・relation 競合の確認が必要なものを後半に回す。

| 優先 | id | 表示名 | 帰属クラスタ | 注意点 |
|:---:|---|---|---|---|
| 11 | `child` | 子ども | relationship | baby/family と近縁。守る対象としての文脈を明確に分離する |
| 12 | `stone` | 石 | nature-sky | 重さ・変わらないもの。mountain（既存）と近縁だが物象徴として独立 |
| 13 | `rooftop` | 屋上 | home-place | 高所・解放感・恐れ。falling との relation 設計を慎重に行う |
| 14 | `hot_spring` | 温泉 | water-weather | recovery 文脈を water/bath と切り分ける。general 枠の charging→recovery 関係を再分類する機会 |
| 15 | `game` | ゲーム | communication | 通信系クラスタとの重なりを確認してから設計する |
| 16 | `earphone` | イヤホン | communication | 通信系クラスタ確認後。聴く・遮断する意味差分を明確に |
| 17 | `dark` | 暗闇 | home-place | 高頻度夢素材。恐怖・不明・眠り前の文脈。fear 文脈との relation に注意 |
| 18 | `pain` | 痛み | body-appearance | 医療断定を避ける block トーンの設計が前提 |
| 19 | `sleep` | 眠る | emotion-action | 夢の中で眠るという再帰的特殊文脈。疲れ・回避の象徴 |
| 20 | `breaking` | 壊す | emotion-action | 高刺激寄り。解放・終わりの象徴として設計するが block トーン管理が必要 |

**後半完了後のゲート**

- `npm test` 全パス
- error = 0 / warning-fix-soon ≤ 189 を確認
- general ≤ 3 を確認
- stage12-extraction-audit.md の後半監査セクションを記録
- validator-warning-review.md に Stage12 最終数値を追記

---

## 4. 設計ルール

### 4-1. alias / phrase / weak の基準

| tier | weight | 追加条件 |
|---|---|---|
| phrase | 7 | 夢文として自然な文（て形・た形など活用形込みの文が望ましい）。1文字・2文字の短い phrase は原則禁止（warning-fix-soon 増加要因） |
| alias | 4 | 名詞または 3 文字以上の語。夢文脈で直接使われる語彙 |
| weak | 2 | 補助語。単独ヒットは weak-only suppression 対象になるため、過剰追加しない |

**Stage11 活用形レビューからの引き継ぎルール**

- 代表活用形（て形・た形）を最低 1 phrase として設計する
- 口語・比喩・状態変化表現（〜なくなっていた 型）は原則として未対応に残す
- 2 文字以下の語を phrase / alias に追加しない（warning-fix-soon ≤ 189 を守るための最重要制約）

### 4-2. alias 重複の方針

- 新規 motif の alias が既存 motif の alias / phrase と重複する場合は既存 warningreview-ok 管理に追記する
- 意味差分が明確で共存が自然なら `known-alias-overlap` として許容する
- 意味差分が弱い重複は alias 側を削除して重複を解消する

### 4-3. relation 設計方針

- 各 motif は既存クラスタのいずれかに帰属させる（新クラスタは原則作成しない）
- general 枠に追加する relation は「なぜ他クラスタに分類できないか」を明記する。general 枠は 3 件を超えて拡大させない
- hot_spring を追加する際は general 枠の `charging → recovery` 関係を motion または water-weather クラスタに再分類する
- `rooftop` と `falling` の relation は `should-be-conflict` 2件の確認（falling / flying）と合わせて検討する

**reviewKind 付与基準**

| kind | 付与する場面 |
|---|---|
| should-be-reciprocal | 双方向化の余地があるが今は維持する近縁 motif 間 |
| context-helper | 片方が文脈補助として働く片方向 |
| generic-specific | 汎用 motif と具体 motif の優先関係 |
| intentional-one-way | 意味の流れが明確に片方向 |
| should-be-conflict | 抑制関係の検討が必要 |

### 4-4. questions 設計方針

- 質問は最低 3 択の意味差分を持つ選択肢を設計する
- 質問で拾う状況が互いに重ならないようにする
- 感情系 motif（embracing / breaking / pain 等）は選択肢のトーンを非断定にする

### 4-5. blocks 設計方針

- 身体的・医療的断定を避ける（pain / sleep / breaking は特に注意）
- 高刺激 motif（breaking / dark / rooftop）は「〜かもしれません」「〜という感覚を表している可能性があります」型の表現を使う
- block の長さが短すぎると validator 警告になるため、最低 30 文字以上を目安にする

### 4-6. scoreImpact 設計方針

| motif | 主な axis |
|---|---|
| hand / foot | change（踏み出す） / selfDefense（防御） |
| voice | relationships / unresolved |
| shrine | recovery / desire |
| horse | change / desire |
| sand | loss / unresolved |
| embracing | recovery / relationships |
| news | anxiety / unresolved |
| past | loss / unresolved |
| boss | anxiety / relationships |
| child | relationships / selfDefense |
| stone | loss / unresolved |
| rooftop | anxiety / change |
| hot_spring | recovery |
| game | desire / unresolved |
| earphone | relationships / unresolved |
| dark | anxiety / selfDefense |
| pain | anxiety / loss |
| sleep | recovery / unresolved |
| breaking | change / loss |

---

## 5. テスト・validator 運用

### fixture 追加計画

各 motif に最低 1 件の dedicated fixture を追加する。以下の pattern を優先する。

| pattern | 目的 |
|---|---|
| `dedicated` | motif の核心 phrase が正しく抽出されること |
| `false-positive-risk` | 近縁 motif が不用意に候補化されないこと |
| `relation-risk` | 近縁 motif との自然な共存または非共存を固定 |
| `miss-risk` | 未対応活用形・迂回表現が出ないことを記録 |

**前半（batch-07a）で追加する fixture 目安: 15〜20 件**

- hand / foot / voice それぞれの dedicated + 近縁 relation-risk
- voice と phone の分離確認（false-positive-risk）
- boss と workplace の分離確認（false-positive-risk）
- past と letter / childhood_home の relation-risk
- embracing と crying（既存）の false-positive-risk

**後半（batch-07b）で追加する fixture 目安: 20〜25 件**

- pain の医療断定回避確認（false-positive-risk）
- dark と fear 系 motif の relation-risk
- breaking の高刺激トーン確認（dedicated + false-positive-risk）
- rooftop と falling の relation-risk
- hot_spring と water / bath の false-positive-risk
- sleep の再帰的夢文脈確認（dedicated）
- game と sns / notification の false-positive-risk
- earphone と phone / sns の分離確認

### validator ゲート条件（毎ステップ共通）

```
registry total  : 前回 + 追加分
general         : ≤ 3
stale-relation  : 0（新規 relation は全て分類済み）
warning-fix-soon: ≤ 189
error           : 0
```

### known-alias-overlap 管理

- 新規重複が発生した場合は即日 warning-review-ok-policy.md に追記する
- 未分類の warning-review-ok は 0 件を維持する

---

## 6. リスクと回避策

| リスク | 回避策 |
|---|---|
| warning-fix-soon が 189 を超える | 2 文字以下の alias / phrase を追加しない。追加前に既存 motif との重複チェックを行う |
| general 枠が 3 件を超える | relation 設計時に必ず既存クラスタへの帰属を検討する。general に入れる場合は理由を先に記録し、上限突破が見込まれる場合は既存の general 3 件を先に再分類してから追加する |
| losing / lost / searching の過検出増加 | batch-07a/b の action 系 motif（embracing / breaking / sleep 等）追加後に Stage11 audit fixture（stage11-losing-searching-overlap 等）が引き続きパスすることを確認する |
| 行動系活用形の未対応が増える | Stage11 inflection-review の未対応一覧に新規 motif 相当のパターンを追記する。phrase 追加を「救う」か「未対応固定」かを明記してから実装する |
| pain / breaking のブロックが断定的になる | block 文の表現を「〜かもしれません」型に統一。実装後に文面をレビューしてから commit する |
| rooftop と falling の抑制設定が揺れる | should-be-conflict 2 件（falling / flying）の確認と同時に検討し、抑制方向を先に決めてから実装する |
| child と baby / family の alias 重複が増える | alias 設計前に baby / family の現行 alias リストを確認し、重複語は known-alias-overlap として管理するか削除する |
| hot_spring を追加した後 charging→recovery の general 枠問題が残る | hot_spring 実装時に recovery 文脈を water-weather クラスタ経由で解決し、charging→recovery を general から外す。これにより general = 3 → 2 になる見込み |
| earphone / game の通信系クラスタ競合 | 前半完了後に communication クラスタの件数を確認し、24 件 + 新規関係の追加が妥当かを判断してから後半を始める |

---

## 7. 期待成果物

### ドキュメント

| ファイル | 内容 |
|---|---|
| `docs/stage12-plan.md` | 本計画書 |
| `docs/stage12-extraction-audit.md` | batch-07 追加後の抽出監査結果（前半・後半に分けて記録） |
| `docs/validator-warning-review.md` | Stage12 前半・後半の数値を追記 |
| `docs/warning-review-ok-policy.md` | batch-07 で発生した新規 known-alias-overlap を追記 |
| `docs/stage11-inflection-review.md` | batch-07 motif の活用形救済・未対応を追記 |

### データ

| 対象 | 内容 |
|---|---|
| `data/batches/batch-07/` | motifs.ts / aliases.ts / questions.ts / blocks.ts |
| `data/batches/batch-07/index.ts` | batch-07 エクスポート |
| `data/batches/index.ts` | batch-07 をインポートに追加 |

### テスト

| 対象 | 内容 |
|---|---|
| `tests/fixtures/extraction-audit.ts` | batch-07 前半 15〜20 件 + 後半 20〜25 件 の audit fixture を追加 |

### 最終ゲート（Stage12完了条件）

```
registry total    : 140
error             : 0
warning-fix-soon  : ≤ 189
warning-review-ok : 全件に許容条件記録済み（件数は固定しない）
general           : ≤ 3
stale-relation    : 0（新規 relation は全て分類済み）
tests             : 全パス（334 + 前半・後半 fixture 分）
```

---

## 付記：既存確認が必要だった9件の確認結果

Stage11 の batch-07 候補レビュー時に「既存確認が必要」とした9件は、全て batch-01〜06 に登録済みと確認しました。これらは batch-07 の実装対象から除外します。

| id | 結果 |
|---|---|
| `hospital` | 登録済み |
| `park` | 登録済み |
| `elevator` | 登録済み |
| `laughing` | 登録済み |
| `crying` | 登録済み |
| `apologizing` | 登録済み |
| `hiding` | 登録済み |
| `mountain` | 登録済み |
| `forest` | 登録済み |

よって batch-07 実装対象は、仮選定 20 件（全て新規 motif）に確定します。
