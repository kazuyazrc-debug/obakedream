# Stage4 Batch-03 Notes

Stage4では `batch-03` として20モチーフを追加し、合計60モチーフに拡張しました。実装は前半10件、後半10件に分け、それぞれで `test / lint / build` を確認しています。

## 採用20モチーフ

### 前半10件

1. 手紙
2. 電話
3. スマホ
4. 通知
5. 泣く
6. 笑う
7. 謝る
8. 好きな人
9. 別れ
10. 旅行

### 後半10件

11. 船
12. バス
13. 雪
14. 風
15. 太陽
16. 服
17. 髪
18. 血
19. 写真
20. 時計

## Relation Review

- 連絡系: `letter / phone / smartphone / notification` は競合ではなくneighbor中心。媒体、声、端末、反応待ちで意味を分ける。
- 感情行動: `crying` は `rain / water` と近いが、行動として扱う。`laughing` は安心とごまかしの両方を扱う。
- 関係系: `crush` は現在の願望、`ex_partner` は過去の未整理感。`breakup` は関係の区切り。
- 移動系: `travel` は非日常と目的、`ship / bus` は移動手段。`train / car / road` とはneighborで整理する。
- 自然系: `snow / wind / sun` は `rain / sky / moon` と近いが、それぞれ冷却、変化の気配、活力に意味を絞る。
- 身体・外見: `clothes / hair` は `mirror / teeth / workplace` とneighbor。見え方、役割、自己像を分ける。
- 記録・時間: `photo` は記憶、`clock` は期限と焦り。`being_late / exam / ex_partner / childhood_home` と関係しやすい。

## High Stimulus Motif: 血

`blood` は高刺激モチーフとして扱います。

- 健康診断のような断定をしない
- 医療判断のように読める文言を避ける
- 象徴、緊張、生命力、痛み、つながりの範囲で表現する
- 体調が気になる場合は現実の相談や確認を大切にする文脈に留める

## Warning Review

- `error` は0件で運用する
- `warning-fix-soon` は短いaliasや短いweak語の確認対象として残す
- `warning-review-ok` は近縁motif間の重複や片方向relationで、理由をdocsに残して許容する
- `info` はrelation mapのレビュー補助として扱う

Stage4では新規20件に1文字aliasを追加しない方針で設計しました。
