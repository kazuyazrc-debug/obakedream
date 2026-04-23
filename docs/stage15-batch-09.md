# Stage15 batch-09 実装メモ

Stage15は、Stage14で整理した `next-20候補` をもとに、140モチーフから160モチーフへ拡張する本格追加フェーズです。既存 `data/batches/batch-08` と命名衝突しないよう、実装batchは `batch-09` とします。

## 引き継ぎ確認

- `AGENTS.md` を確認し、Next.js関連の判断前に `node_modules/next/dist/docs/` を読む制約を確認済み。
- 確認したNext.js docs:
  - `node_modules/next/dist/docs/index.md`
  - `node_modules/next/dist/docs/01-app/01-getting-started/02-project-structure.md`
  - `node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md`
- Stage15はmotif data / relation / fixture / docsの追加であり、Next.js UI / routing変更は対象外です。

## 実装順序

前半10件は場所系の集中を避け、場所・物・場所・情報系・外見・自然を混ぜて実装します。

| order | id | 表示名 | category | cluster |
|:---:|---|---|---|---|
| 1 | `kitchen` | 台所 | place | home-place |
| 2 | `garden` | 庭 | place | home-place |
| 3 | `pen` | ペン | object | object-record |
| 4 | `dish` | 皿 | object | object-record |
| 5 | `hallway` | 廊下 | place | home-place |
| 6 | `balcony` | ベランダ | place | home-place |
| 7 | `television` | テレビ | object | communication |
| 8 | `radio` | ラジオ | object | communication |
| 9 | `hat` | 帽子 | object | body-appearance |
| 10 | `lake` | 湖 | element | water-weather |

後半10件はmedium riskや近縁が濃いものを含め、前半検証後に追加します。

| order | id | 表示名 | category | cluster |
|:---:|---|---|---|---|
| 11 | `mask` | マスク | object | body-appearance |
| 12 | `making_mistake` | 間違える | action | emotion-action |
| 13 | `refusing` | 断る | action | emotion-action |
| 14 | `lining_up` | 並ぶ | action | emotion-action |
| 15 | `tripping` | 転ぶ | action | emotion-action |
| 16 | `pond` | 池 | element | water-weather |
| 17 | `fog` | 霧 | element | water-weather |
| 18 | `mobile_app` | アプリ | object | communication |
| 19 | `video` | 動画 | object | communication |
| 20 | `teacher` | 先生 | person | relationship |

## テレビ / ラジオ / 動画 / アプリの役割差

| motif | 主な意味 | 切り分け |
|---|---|---|
| `television` | 受動視聴・流入情報 | 自分で操作するより、外から流れてくる情報や映像を受け取る象徴として扱う。`news` とは情報内容、`cinema` とは場所体験で切り分ける |
| `radio` | 音声・見えない情報 | 画面なしで届く声や気配、見えない情報を受け取る象徴として扱う。`voice` は声そのもの、`earphone` は遮断/集中の道具として切り分ける |
| `video` | 視覚コンテンツ・再生視聴 | 自分で再生/見返す映像コンテンツとして扱う。`television` の受動流入、`cinema` の場所体験、`sns` の公開反応と切り分ける |
| `mobile_app` | 機能・入口・操作対象 | スマホ内の機能や入口、操作する対象として扱う。`smartphone` は端末/個人空間、`notification` は反応待ち、`sns` は公開性として切り分ける |

## ゲート

前半10件後:

- registry total = 150
- error = 0
- warning-fix-soon <= 188
- general count = 0
- stale-relation = 0
- `npm test`
- `npm run lint`
- `npm run build`

後半10件後:

- registry total = 160
- error = 0
- warning-fix-soon <= 188
- general count = 0
- stale-relation = 0
- Stage1-14 fixture非破壊
- `npm test`
- `npm run lint`
- `npm run build`

## Stage15 result

Stage15では `batch-09` として20モチーフを追加し、registry totalを160件に拡張しました。前半10件の段階検証後、後半10件を追加しています。

### 最終採用20件

| order | id | 表示名 |
|:---:|---|---|
| 1 | `kitchen` | 台所 |
| 2 | `garden` | 庭 |
| 3 | `pen` | ペン |
| 4 | `dish` | 皿 |
| 5 | `hallway` | 廊下 |
| 6 | `balcony` | ベランダ |
| 7 | `television` | テレビ |
| 8 | `radio` | ラジオ |
| 9 | `hat` | 帽子 |
| 10 | `lake` | 湖 |
| 11 | `mask` | マスク |
| 12 | `making_mistake` | 間違える |
| 13 | `refusing` | 断る |
| 14 | `lining_up` | 並ぶ |
| 15 | `tripping` | 転ぶ |
| 16 | `pond` | 池 |
| 17 | `fog` | 霧 |
| 18 | `mobile_app` | アプリ |
| 19 | `video` | 動画 |
| 20 | `teacher` | 先生 |

### 数値

| item | count |
|---|---:|
| registry total | 160 |
| relation total | 367 |
| general count | 0 |

by cluster:

| cluster | count |
|---|---:|
| water-weather | 44 |
| home-place | 82 |
| movement | 44 |
| communication | 44 |
| relationship | 42 |
| body-appearance | 34 |
| emotion-action | 51 |
| nature-sky | 16 |
| object-record | 10 |
| care-risk | 0 |
| general | 0 |

by kind:

| kind | count |
|---|---:|
| intentional-one-way | 10 |
| should-be-reciprocal | 188 |
| should-be-conflict | 2 |
| generic-specific | 82 |
| context-helper | 85 |
| stale-relation | 0 |

validator summary:

| severity | count |
|---|---:|
| error | 0 |
| warning-fix-soon | 188 |
| warning-review-ok | 63 |
| info | 368 |

### 追加fixture

Representative dreams:

- `stage15-kitchen-dish-garden`
- `stage15-hallway-balcony`
- `stage15-television-radio-news`
- `stage15-hat-glasses-mirror`
- `stage15-lake-quiet`
- `stage15-mask-mirror`
- `stage15-mistake-teacher-exam`
- `stage15-lining-refusing-shop`
- `stage15-fog-tripping-road`
- `stage15-app-video-smartphone`
- `stage15-pond-park`

Extraction audit:

- `stage15-kitchen-dedicated`
- `stage15-garden-flower-tree`
- `stage15-pen-notebook-exam`
- `stage15-dish-kitchen-cleaning`
- `stage15-hallway-door-school`
- `stage15-balcony-sky-wind`
- `stage15-television-news-not-video`
- `stage15-radio-voice-not-phone`
- `stage15-hat-mirror-glasses`
- `stage15-lake-water-river-boundary`
- `stage15-mask-mirror-voice`
- `stage15-mistake-exam-teacher`
- `stage15-refusing-friend`
- `stage15-lining-up-waiting-shop`
- `stage15-tripping-foot-injury-careful`
- `stage15-pond-park-fish`
- `stage15-fog-lost-road`
- `stage15-app-smartphone-notification`
- `stage15-video-television-cinema-boundary`
- `stage15-teacher-school-exam`

### 注意して固定した挙動

- `television` は受動視聴・流入情報として扱い、`video` を過剰に巻き込まない。
- `radio` は音声・見えない情報として扱い、`phone` とは分ける。
- `video` は再生視聴として扱い、`television` の受動視聴とは分ける。
- `mobile_app` は機能・入口・操作対象として扱い、`smartphone` の端末性や `sns` の公開性とは分ける。
- `tripping` は事故や医療判断ではなく、足元のつまずきと立て直しの象徴として扱う。
