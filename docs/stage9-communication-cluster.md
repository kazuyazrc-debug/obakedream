# Stage9 通信系motifクラスタ

100モチーフ時点で通信系motifが増えたため、Stage9では主役/補助の判定を固定します。

## 主役/補助の基本

| motif | 主役として読む条件 | 補助として読む条件 |
|---|---|---|
| `chat` | チャット欄、既読、短い返事、トーク画面が明示される | `sns` や `email` の中の短いやりとり |
| `sns` | 投稿、公開性、反応、見られ方が明示される | `smartphone` や `notification` の社会的文脈 |
| `email` | メール、件名、返信、未送信、文書連絡が明示される | `letter` や `phone` と同じ連絡文脈 |
| `phone` | 声、通話、つながる/切れるが明示される | `friend`、`voiceless`、`waiting` の連絡手段 |
| `notification` | 通知、知らせ、反応待ち、通知音が明示される | `smartphone`、`sns`、`email` の状態補助 |
| `smartphone` | 端末、画面、個人空間、ログインが明示される | `notification`、`sns`、`password` の器 |
| `letter` | 手紙、封筒、古い便り、手触りが明示される | `email` の文書性や `ex_partner` の過去性の補助 |

## 監査fixture

| fixture | 主役 | 補助 |
|---|---|---|
| `stage9-chat-primary-waiting-helper` | `chat` | `waiting` |
| `stage9-sns-notification-reaction` | `notification` | `sns` |
| `stage9-email-letter-written-contact` | `email` | `letter` |
| `stage9-phone-voice-only` | `phone` | なし |
| `stage9-smartphone-notification-private-space` | `notification` | `smartphone` |
| `stage9-letter-past-touch` | `letter` | なし |

## Relation review

通信系クラスタのone-way relationは20件です。

| source | target | kind | note |
|---|---|---|---|
| `letter` | `phone` | `should-be-reciprocal` | 連絡手段の近縁 |
| `sns` | `smartphone` | `generic-specific` | 端末と公開サービス |
| `sns` | `notification` | `should-be-reciprocal` | 反応待ち |
| `email` | `letter` | `should-be-reciprocal` | 文書連絡 |
| `email` | `notification` | `should-be-reciprocal` | 返信/通知 |
| `email` | `phone` | `should-be-reciprocal` | 連絡手段 |
| `password` | `smartphone` | `generic-specific` | デジタルアクセス |
| `password` | `sns` | `generic-specific` | アカウント境界 |
| `chat` | `sns` | `should-be-reciprocal` | 公開性と短いやりとり |
| `chat` | `email` | `should-be-reciprocal` | 即時性と文書性 |
| `chat` | `phone` | `should-be-reciprocal` | 文字と声 |

Stage9では自動双方向化は行いません。次のbatch追加時に、併存例が増えたrelationだけを個別に見直します。
