# Stage7 Relation Map

Stage7ではUI可視化や管理画面化は行わず、Markdown表と小さなMermaid graphでrelationをレビューします。

## Water / Weather

| 関係 | 分類 | メモ |
|---|---|---|
| water -> sea | generic-specific | 海が明確なら具体象徴を優先 |
| river -> water | generic-specific | 川は水の流れを具体化する |
| rain -> water | context-helper | 感情や浄化の補助文脈 |
| umbrella -> rain | context-helper | 守りの道具として雨を補助 |
| thunder -> rain | should-be-reciprocal | 雷雨として双方向レビュー候補 |

## Movement

| 関係 | 分類 | メモ |
|---|---|---|
| station -> train | should-be-reciprocal | 移動の節目と手段 |
| airport -> travel | should-be-reciprocal | 大きな出発と旅 |
| bus -> train | should-be-reciprocal | 集団移動の近縁 |
| lost -> road | generic-specific | 迷いと進路の具体文脈 |
| clock -> being_late | context-helper | 期限不安の補助 |

## Communication

| 関係 | 分類 | メモ |
|---|---|---|
| sns -> smartphone | should-be-reciprocal | 端末と公開反応 |
| sns -> notification | should-be-reciprocal | 反応待ちと通知 |
| email -> letter | should-be-reciprocal | 文章連絡の近縁 |
| email -> notification | should-be-reciprocal | 返事待ちの近縁 |
| phone -> smartphone | should-be-reciprocal | 声の連絡と端末 |

## Body / Appearance

| 関係 | 分類 | メモ |
|---|---|---|
| naked -> clothes | generic-specific | 無防備さと守りの対比 |
| injury -> blood | should-be-reciprocal | 傷つきと緊張の近縁 |
| injury -> hospital | should-be-reciprocal | 回復とケア |
| voiceless -> phone | should-be-reciprocal | 声で伝える連絡 |
| clothes -> mirror | generic-specific | 見られ方と自己認識 |

## Relationship

| 関係 | 分類 | メモ |
|---|---|---|
| ring -> crush | generic-specific | 現在の願望と約束 |
| ring -> ex_partner | generic-specific | 過去の関係と約束 |
| breakup -> ex_partner | generic-specific | 関係の区切り |
| apologizing -> friend | should-be-reciprocal | 関係修復の近縁 |
| ex_partner -> stranger | context-helper | 顔が曖昧な過去関係 |
