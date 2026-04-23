# Stage13 140モチーフ補完メモ

Stage13は、Claude CodeからCodexへ開発を戻した直後の移行確認と、Stage12で139件に止まったregistryを140件へ補完するための小さなフェーズです。大規模追加やUI変更は行いません。

## 引き継ぎ確認

- `AGENTS.md` を確認し、Next.js関連の判断前に `node_modules/next/dist/docs/` を読む制約を確認済み。
- 今回はNext.jsのApp Router実装を変更していません。
- 確認したNext.js docs:
  - `node_modules/next/dist/docs/index.md`
  - `node_modules/next/dist/docs/01-app/01-getting-started/02-project-structure.md`
  - `node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md`

## 補完motif

| id | 表示名 | 採用理由 |
|---|---|---|
| `glasses` | 眼鏡 | `eye / mirror / book` とのrelationが説明しやすく、高刺激ではなく、短語aliasを増やさずに追加できるため |

見送った候補:

| 候補 | 見送り理由 |
|---|---|
| イヤホン | 既に `earphone` としてbatch-08に登録済み |
| 棚 | 既存motifの補助語として出ており、単独motif化すると文脈幅が広くなりやすい |
| 料理 | `restaurant / cafe / convenience_store` との切り分けをbatch単位で検討した方が安全 |

## relation

`glasses` は次の近縁motifだけに接続します。

| source | target | kind | cluster | 理由 |
|---|---|---|---|---|
| `glasses` | `eye` | should-be-reciprocal | body-appearance | 見え方・視線の調整として近い |
| `glasses` | `mirror` | should-be-reciprocal | home-place | 鏡の前で自己像と見え方が重なる |
| `glasses` | `book` | should-be-reciprocal | body-appearance | 読む・理解するための補助として近い |

relation total の増加は許容しますが、`general count = 0`、`stale-relation = 0`、新規relation分類済みを維持します。

## 数値

| item | count |
|---|---:|
| registry total | 140 |
| relation total | 308 |
| general count | 0 |

by cluster:

| cluster | count |
|---|---:|
| water-weather | 34 |
| home-place | 64 |
| movement | 43 |
| communication | 34 |
| relationship | 36 |
| body-appearance | 28 |
| emotion-action | 44 |
| nature-sky | 16 |
| object-record | 9 |
| care-risk | 0 |
| general | 0 |

by kind:

| kind | count |
|---|---:|
| intentional-one-way | 10 |
| should-be-reciprocal | 145 |
| should-be-conflict | 2 |
| generic-specific | 65 |
| context-helper | 86 |
| stale-relation | 0 |

## fixture / test

- representative dream: `stage13-glasses-mirror`
- extraction audit:
  - `stage13-glasses-dedicated`
  - `stage13-glasses-eye-mirror`
- relation classification testで `glasses` が `general` / `stale-relation` に落ちないことを固定します。

## Stage14への接続

Stage14では140件状態を前提に、すぐ20件追加へ進む前に、batch-08までのrelation増加とwarning-review-ok理由カテゴリを再確認します。特にbody-appearanceとhome-placeにまたがる `glasses / eye / mirror / photo / book` のような横断relationが増えても、cluster分類がレビュー可能かを見ます。
