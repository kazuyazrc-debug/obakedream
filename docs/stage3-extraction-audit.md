# Stage3 Extraction Audit

Stage3では、40モチーフ時点の誤検出・未検出リスクを先に棚卸しします。目的はすぐに抽出ロジックを大きく変えることではなく、次の20件追加前に壊れやすい場所を見えるようにすることです。

## 現時点で確認したパターン

| ID | 種別 | 現状 | Stage3での扱い |
|---|---|---|---|
| `rain-water-overlap` | false-positive-risk | 雨の夢で `rain` と `water` が同時に出る | 水系relationとして許容範囲を整理 |
| `workplace-weak-supervisor` | false-positive-risk | `上司` のようなweak語だけで `workplace` を拾う | weak-only候補の抑制はStage4候補 |
| `falling-inflection` | miss-risk | `落ちた` は `falling` を拾いにくい | 語尾ゆれ対応はStage4候補 |
| `exam-school-conflict` | miss-risk | 学校文脈が強く、`exam` を拾えていない | 評価系relationとphrase設計の見直し対象 |

## Stage3の判断

- `includes` ベースは維持する
- 大きな検索実装は入れない
- まず `phrase / alias / weak` の整理で説明可能性を上げる
- weak語の過検出はvalidator warningで見えるようにする
- 語幹・活用形対応はStage4以降へ送る
