# ChatGPT確認用 Stage16成果物レビュー依頼文

以下は「おばけの夢占いアプリ」Stage16の成果物レビュー用テキストです。ChatGPTに貼り付けて、監査フェーズとして妥当か確認してください。

---

あなたはシニアプロダクトエンジニア兼アーキテクトです。
「おばけの夢占いアプリ」のStage16成果物をレビューしてください。

## プロジェクト概要

- AI APIを使わないルールベース夢占いアプリ
- Next.js + TypeScript + Tailwind CSS
- motifを20件単位で品質管理しながら拡張
- 現在は160モチーフ
- 中期目標400モチーフの40%地点

## Stage16の目的

Stage16は新規motif追加ではなく、160モチーフ時点の監査フェーズです。
次の20件追加へ進む前に、relation / warning / fixture / audit の見通しを整えることが目的です。

## 実施内容

- `AGENTS.md` と `node_modules/next/dist/docs/` の確認
- Next.js UI / routing変更なし
- 新規motif追加なし
- `home-place = 82` の内訳監査
- メディア系クラスタ監査
  - `television / video / news / cinema`
- 通信アプリ系クラスタ監査
  - `mobile_app / smartphone / notification / password`
- 教育・評価者クラスタ監査
  - `teacher / school / exam / boss`
- warning-review-okの理由カテゴリ確認
- Stage17候補への注意点整理

## 現在値

```text
registry total: 160
relation total: 367

by cluster:
water-weather: 44
home-place: 82
movement: 44
communication: 44
relationship: 42
body-appearance: 34
emotion-action: 51
nature-sky: 16
object-record: 10
care-risk: 0
general: 0

by kind:
intentional-one-way: 10
should-be-reciprocal: 188
should-be-conflict: 2
generic-specific: 82
context-helper: 85
stale-relation: 0

general count: 0
```

validator:

```text
error: 0
warning-fix-soon: 188
warning-review-ok: 63
info: 368
```

## home-place監査結果

`home-place = 82` は最大cluster。
ただし `general = 0` を維持しており、未分類relationはなし。

home-place by kind:

```text
should-be-reciprocal: 41
generic-specific: 22
context-helper: 17
intentional-one-way: 2
```

判断:

- home-placeは大きいが、現時点で即時修正は不要
- 場所そのもの、場所に付随する道具、自己像、情報体験が混ざっている
- Stage17前にdocs上で補助ラベルを付けるとよい
- コード上のcluster追加はまだ不要

## メディア系監査

固定方針:

- television = 受動視聴・流入情報
- radio = 音声・見えない情報
- video = 視覚コンテンツ・再生視聴
- news = 外部情報・出来事
- cinema = 場所体験・距離を置いた感情体験

判断:

- television / video はfixtureで分離済み
- next追加で comment / streaming を入れる場合はSNS/video/televisionと衝突しやすい

## 通信アプリ系監査

固定方針:

- mobile_app = 機能・入口・操作対象
- smartphone = 端末・個人空間
- notification = 反応待ち
- password = アクセス条件・認証

判断:

- relationは説明可能
- mobile_appは広くなりやすいためweak-onlyで拾わせない運用を維持

## 教育・評価者監査

固定方針:

- teacher = 導き・学び・教える人
- school = 場所・過去の学び
- exam = 試される場面
- boss = 職場の評価者

判断:

- teacher / boss はどちらも評価者だが、学びと職場評価で切り分け可能
- coworkerを追加する場合、friend/workplace/bossと衝突しやすい

## warning-review-ok

```text
known-alias-overlap: 58
accepted-near-neighbor: 0
intentional-one-way-conflict: 1
generic-specific-review-ok: 4
context-helper-review-ok: 0
```

判断:

- warning-review-ok 63件は全件カテゴリ分類済み
- warning-fix-soonは188のまま維持

## Stage17候補への提案

前半向き:

- 朝
- 夕方
- 隣人
- 棚
- 倉庫
- プレゼント
- 玄関
- 化粧
- 影
- 誘う

後半または再検討:

- コメント
- 配信
- 同僚
- 涙
- 隠す

理由:

- コメント / 配信はcommunication clusterを増やしやすい
- 同僚はfriend/workplaceの既存warningと絡む
- 涙はcryingに近すぎる
- 隠すはhidingとの差分が弱い

## レビューしてほしいこと

1. Stage16を監査フェーズとして完了扱いにしてよいか
2. home-place = 82 はこの段階ではdocs整理で十分か
3. メディア系 / 通信アプリ系 / 教育評価者系の固定方針は妥当か
4. Stage17を次の20件追加フェーズに進めてよいか
5. Stage17候補の前半/後半分けに問題がないか

---
