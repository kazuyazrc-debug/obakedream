# Stage11 抽出監査メモ

Stage11は `batch-07` を追加しない監査フェーズです。120モチーフ時点で、`losing` / `lost` / `searching` クラスタの抽出精度を3観点で確認しました。

## Baseline

| item | count |
|---|---:|
| registry motifs | 120 |
| error | 0 |
| warning-fix-soon | 189 |
| warning-review-ok | 47 |
| info | 248 |
| one-way relation total | 248 |
| one-way relation info | 243 |
| one-way relation warning | 5 |

`warning-fix-soon <= 189` を維持しています。

## losing / lost / searching クラスタ

### 主役/補助の役割定義

| motif | 主役として読む条件 | 補助として読む条件 |
|---|---|---|
| `losing` | 失くす行動が明示される（失くす・失くして・かばんを失くす等のphrase直撃） | `lost` や `searching` の中の喪失感の背景 |
| `lost` | 迷子・道に迷う・帰り道がわからない状態が主題 | `map` / `crossroad` / `road` の方向文脈の補助 |
| `searching` | 探す行動・見つからない状態が主題（探し物・探しても見つからない等） | `losing` の後続として補助的に出る |

### 過検出の確認（false positive）

Stage11で追加した audit fixture による確認結果:

| fixture | テキスト例 | 確認内容 | 結果 |
|---|---|---|---|
| `stage11-searching-no-losing` | 探し物が見つからなくて家の中を歩き回る夢 | 探し物文脈でlosingが出ないこと | ✓ losingは出ない |
| `stage11-lost-road-no-losing` | 道に迷って帰り道がわからない夢 | 迷子文脈でlosingが出ないこと | ✓ losingは出ない |

**判断:** `losing` と `searching` / `lost` は alias / phrase 設計で十分に分離できている。失くす行動が明示されない文脈で `losing` は候補化されない。

### 未検出の確認（false negative）

| fixture | テキスト例 | 確認内容 | 結果 |
|---|---|---|---|
| `stage11-losing-inflection-rescued` | 財布を失くしていた夢 | 失くしていた（継続形）をphraseが救うこと | ✓ losingが出る |
| `stage11-lost-paraphrase-unhandled` | どこだか分からなくなってしまった夢 | 迂回表現はlostが出ないことを記録 | ✓ 未対応として固定 |
| `stage11-unhandled-losing-state-expression` | 大事なものがなくなっていた夢 | なくなっていた（状態）はlosingが出ないことを記録 | ✓ 未対応として固定 |

**判断:**
- `財布を失くして` というphraseが `失くしていた` の活用形（失くして+いた）を部分一致で救う。phraseによる活用形救済が機能している。
- `なくなっていた`（なくなる = 状態変化）は `失くす`（なくす = 能動的紛失）と意味が異なるため未対応として残す。無理に拾うと意味のずれた過検出になる。
- `どこだか分からなくなる` 型の迂回表現は `lost` の phrase/alias 設計範囲外として未対応に残す。辞書肥大を避ける方針。

### near-neighbor 重なりの確認

| fixture | テキスト例 | 確認内容 | 結果 |
|---|---|---|---|
| `stage11-losing-searching-overlap` | 大事なかばんを失くす夢で探しても見つからない | losing主役・searching補助が自然に併存すること | ✓ 両方出る |

**判断:** `losing` と `searching` は同一文脈で自然に共存する。`losing` が phrase でヒットし、`searching` が `探しても見つからない` phrase でヒットする。conflict 設定は不要。

Stage10の既存 fixture も同じパターンを確認済み（`stage10-losing-wallet-dedicated`: 財布を失くして探しても見つからない）。

## 追加 fixture 一覧

| fixture | pattern | 確認内容 |
|---|---|---|
| `stage11-losing-searching-overlap` | relation-risk | losing+searching の自然な併存 |
| `stage11-lost-road-no-losing` | relation-risk | 迷子文脈でlosingが出ないこと |
| `stage11-searching-no-losing` | false-positive-risk | 探し物文脈でlosingが出ないこと |
| `stage11-losing-inflection-rescued` | miss-risk | 失くしていた活用形の救済確認 |
| `stage11-lost-paraphrase-unhandled` | miss-risk | 迂回表現の未対応固定 |
| `stage11-unhandled-losing-state-expression` | miss-risk | なくなっていた（状態）の未対応固定 |
| `stage11-unhandled-searching-extended` | miss-risk | 抽象的探索表現の未対応固定 |

## Stage11への注意

- `losing` / `lost` / `searching` の3者は generic-specific グループに同居しており、batch-07に関連motif（身体感覚・隠れる・待つ等）を追加する場合は前後文脈の監査を事前に行う。
- `なくなっていた` 系の状態表現は batch-07以降でphrase追加候補として検討できる。ただし `losing` の能動的な定義を変えずに追加できる形（別phrase追加）でのみ行う。
- `searching` の `歩き回る` weak語は単独では候補化されない設計が維持されている（`stage11-unhandled-searching-extended` で確認）。
