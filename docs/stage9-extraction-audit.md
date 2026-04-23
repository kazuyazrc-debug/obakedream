# Stage9 抽出監査メモ

Stage9は `batch-06` を追加しない抽出監査フェーズです。100モチーフ時点で、抽出・relation・warning運用が120モチーフ追加に耐えられるかを確認しました。

## Baseline

| item | count |
|---|---:|
| registry motifs | 100 |
| error | 0 |
| warning-fix-soon | 189 |
| warning-review-ok | 34 |
| info | 185 |
| one-way relation total | 185 |
| one-way relation info | 180 |
| one-way relation warning | 5 |

`warning-fix-soon <= 189` を維持しています。

## 通信系クラスタ

優先監査対象:

| motif | 主役になる文脈 | 補助になりやすい文脈 |
|---|---|---|
| `chat` | 短いやりとり、既読、返事待ち | `waiting`、`sns`、`email` |
| `sns` | 公開性、反応、見られ方 | `notification`、`smartphone`、`friend` |
| `email` | 文書連絡、返事、未送信 | `letter`、`notification`、`phone` |
| `phone` | 声、直接通話、つながる/切れる | `friend`、`voiceless`、`waiting` |
| `notification` | 反応待ち、知らせ、通知音 | `smartphone`、`sns`、`waiting` |
| `smartphone` | 端末、個人空間、画面 | `notification`、`sns`、`password` |
| `letter` | 過去性、手触り、古い連絡 | `email`、`phone`、`ex_partner` |

Stage9で固定したfixture:

| fixture | 期待 |
|---|---|
| `stage9-chat-primary-waiting-helper` | `chat` + `waiting` |
| `stage9-sns-notification-reaction` | `sns` + `notification` |
| `stage9-email-letter-written-contact` | `email` + `letter` |
| `stage9-phone-voice-only` | `phone` のみ、`chat/email` は拾わない |
| `stage9-smartphone-notification-private-space` | `smartphone` + `notification` |
| `stage9-letter-past-touch` | `letter` のみ、現代通信系は拾わない |

通信系relationは20件あり、`should-be-reciprocal / generic-specific / context-helper / intentional-one-way` の範囲に分類されています。

## Generic / Specific 抑制レビュー

Stage9では抑制ロジックの大改修は行わず、現状の強弱をfixtureで固定しました。

| cluster | 現状 | レビュー判断 |
|---|---|---|
| `sea / water / fish` | `sea` が明示されると `water` が抑制され、`fish` は残る | 具体motif優先として妥当。ただし水そのものが主役の夢は別fixtureで確認する |
| `childhood_home / house / door / opening` | 実家とドア文脈は併存しうる | 場所のspecificと境界行動を分けて扱う |
| `library / book / school` | 図書館と本が明示されても `school` は強制しない | 汎用学習文脈を増やしすぎない |
| `password / key / smartphone` | パスワードはデジタルアクセス、鍵は手がかり | 近縁だが過剰抑制しない |

## 活用形監査

phrase追加で救ったもの:

| motif | 追加した代表phrase |
|---|---|
| `opening` | `ドアを開いた`、`扉が開いた` |
| `forgetting` | `約束を忘れた`、`持ち物を忘れた` |
| `picking_up` | `財布を拾った`、`鍵を拾った` |
| `screaming` | `助けてと叫んだ` |
| `trembling` | `手が震えた` |

未対応一覧へ残すもの:

| 表現 | 理由 |
|---|---|
| `ど忘れしていた` | 口語的すぎるため、Stage9では辞書肥大を避ける |
| `扉が開きっぱなし` | 開ける行動ではなく状態表現のため、別motif/別設計で検討する |

## Relation 可視化

| cluster | count |
|---|---:|
| water-weather | 24 |
| home-place | 36 |
| movement | 27 |
| communication | 20 |
| relationship | 20 |
| body-appearance | 18 |
| emotion-action | 16 |
| nature-sky | 12 |
| object-record | 9 |
| care-risk | 0 |
| general | 3 |

`general` は3件に抑えられています。Stage10前に増えた場合は、relation分類の見直し対象にします。

## Stage10への注意

- batch-06候補は、既存100件とのrelationが説明しやすいものを優先する。
- 1文字alias依存になりそうな候補は、文脈phraseを先に設計する。
- 通信系に新規motifを増やす場合は、主役/補助の判定例をfixture化してから追加する。
