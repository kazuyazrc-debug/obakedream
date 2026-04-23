# Stage6 Batch-04 Notes

Stage6では `batch-04` として20モチーフを追加し、合計80モチーフへ拡張します。Stage5で導入したweak-only抑制、relation順位補助、`warning-fix-soon <= 189` をゲート条件として使います。

## 採用20モチーフ

### 前半10件

1. 駅
2. 空港
3. ホテル
4. 神社
5. 傘
6. かばん
7. 靴
8. 指輪
9. 探す
10. 隠れる

### 後半10件

11. 待つ
12. 裸
13. 怪我
14. 声が出ない
15. 鳥
16. 雷
17. 星
18. SNS
19. メール
20. 迷子

## Relation Review

- 移動・場所: `station / airport / hotel` は `train / bus / travel / road / being_late` と近縁です。駅は移動の節目、空港は大きな出発、ホテルは一時的な居場所として切り分けます。
- 物・準備: `umbrella / bag / shoes / ring` は `rain / water / wallet / travel / road / clothes / crush / ex_partner / breakup` と関係します。1文字表示名でもaliasには1文字語を追加せず、phraseで拾います。
- 行動: `searching / hiding / waiting` は `key / wallet / photo / being_chased / forest / clock / notification / phone` と複合しやすい行動motifです。
- 扱い注意: `naked / injury / voiceless / lost` は不安を煽らず、性的断定、医療判断、実際の危険や失踪の断定を避けます。
- 自然: `bird / thunder / stars` は `sky / flying / forest / rain / fire / wind / moon / sun` と近縁です。鳥は自由と知らせ、雷は衝撃と変化、星は遠い希望に寄せます。
- 連絡系: `sns / email` は `smartphone / notification / phone / letter / friend` と近縁です。SNSは公開性・反応・比較、メールは文章連絡・返事・未送信として切り分けます。

## High Care Motifs

- `naked`: 性的な意味を断定せず、無防備さ、自己開示、見られ方の象徴として扱う
- `injury`: 医療判断に見える文言を避け、痛み、保護、回復、境界の象徴として扱う
- `voiceless`: 身体状態を断定せず、未表出、緊張、伝えにくさの象徴として扱う
- `lost`: 実際の危険や失踪を断定せず、方向感覚、選択、助けを求める心理として扱う

## Warning Gate

Stage6完了時点のproduction registry診断は次をゲートとします。

| severity | count |
|---|---:|
| error | 0 |
| warning-fix-soon | 189以下 |

`batch-04` では1文字aliasを追加せず、2文字以下のweak語も避けます。表示名が1文字の `駅 / 傘 / 靴 / 鳥 / 雷 / 星 / 裸` は、文脈つきの `priorityKeywords` で抽出します。

## Fixture Policy

representative dreamsは前半・後半を合わせて20件追加します。特に `lost` は専用fixtureを2件追加し、`lost-road-night-stranger` と `lost-station-family-waiting` で方向感覚と対人/家族のrelationを確認します。
