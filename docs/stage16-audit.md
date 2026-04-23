# Stage16 160モチーフ監査メモ

Stage16は、160モチーフ到達後に次の20件追加へ進む前の監査フェーズです。新規motif追加、UI変更、DB化、AI API導入は行いません。

## 引き継ぎ確認

- `AGENTS.md` を確認し、Next.js関連の判断前に `node_modules/next/dist/docs/` を読む制約を確認済み。
- 確認したNext.js docs:
  - `node_modules/next/dist/docs/index.md`
  - `node_modules/next/dist/docs/01-app/01-getting-started/02-project-structure.md`
  - `node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md`
- Stage16はrelation / warning / fixture / auditの監査であり、Next.js UI / routing変更は対象外です。

## 現在値

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

## home-place 監査

`home-place = 82` は最大clusterです。ただし、`general = 0` を維持したまま分類されており、現時点で即時修正が必要な未分類relationはありません。

home-place by kind:

| kind | count |
|---|---:|
| should-be-reciprocal | 41 |
| generic-specific | 22 |
| context-helper | 17 |
| intentional-one-way | 2 |

top source motifs:

| source | count |
|---|---:|
| hotel | 3 |
| shrine | 3 |
| shop | 3 |
| park | 3 |
| door | 3 |
| restaurant | 3 |
| cafe | 3 |
| convenience_store | 3 |
| cinema | 3 |
| window | 3 |
| rooftop | 3 |
| kitchen | 3 |
| garden | 3 |
| hallway | 3 |
| mirror | 2 |

判断:

- `home-place` は場所系の受け皿として大きくなっているが、個別sourceが極端に偏ってはいない。
- 82件の中身は「場所そのもの」「場所に付随する道具」「見る/自己像の場所」「移動途中の場所」が混在する。
- Stage17前に分解するなら、まずdocs上で `living-place / public-place / threshold-place / viewing-place` のような補助ラベルを付けるのが安全です。コード上のcluster追加はまだ不要です。

## メディア系クラスタ

対象: `television / video / news / cinema`

| relation | cluster | kind | audit |
|---|---|---|---|
| cinema -> photo | home-place | should-be-reciprocal | 映像/記録を見る体験として説明可能 |
| cinema -> eye | home-place | should-be-reciprocal | 見る体験として説明可能 |
| cinema -> ticket | home-place | should-be-reciprocal | 入場体験として説明可能 |
| news -> smartphone | communication | should-be-reciprocal | 情報流入として説明可能 |
| news -> notification | communication | should-be-reciprocal | 速報/反応待ちとして説明可能 |
| news -> sns | communication | should-be-reciprocal | 外部情報の流入として説明可能 |
| television -> news | communication | generic-specific | テレビは受動視聴、newsは情報内容 |
| television -> cinema | home-place | generic-specific | テレビは受動視聴、cinemaは場所体験 |
| radio -> news | communication | should-be-reciprocal | 音声ニュースとして説明可能 |
| video -> television | communication | generic-specific | videoは再生視聴、televisionは受動視聴 |
| video -> cinema | home-place | generic-specific | videoはコンテンツ、cinemaは場所 |
| video -> sns | communication | should-be-reciprocal | 動画投稿/反応として説明可能 |

固定方針:

- `television`: 受動視聴・流入情報
- `radio`: 音声・見えない情報
- `video`: 視覚コンテンツ・再生視聴
- `news`: 外部情報・出来事
- `cinema`: 場所体験・距離を置いた感情体験

Stage17注意:

- `コメント / 配信` を追加する場合、`sns / video / television` と重なりやすい。
- `television` と `video` は既にfixtureで分離済みなので、今後も「受動視聴」と「再生視聴」を維持する。

## 通信アプリ系クラスタ

対象: `mobile_app / smartphone / notification / password`

| relation | cluster | kind | audit |
|---|---|---|---|
| sns -> smartphone | communication | generic-specific | SNSは公開性、smartphoneは端末 |
| sns -> notification | communication | should-be-reciprocal | 反応待ちとして説明可能 |
| email -> notification | communication | should-be-reciprocal | 返信待ちとして説明可能 |
| password -> key | home-place | generic-specific | 鍵/認証の比喩として説明可能 |
| password -> smartphone | communication | generic-specific | 端末上の認証として説明可能 |
| password -> sns | communication | generic-specific | SNSログイン文脈として説明可能 |
| charging -> smartphone | communication | generic-specific | 端末の回復/補給として説明可能 |
| charging -> notification | communication | generic-specific | 反応待ちと端末状態の補助関係 |
| mobile_app -> smartphone | communication | generic-specific | アプリは端末内の入口 |
| mobile_app -> notification | communication | generic-specific | アプリ通知の操作対象 |
| mobile_app -> password | communication | generic-specific | ログイン/認証の入口 |

固定方針:

- `mobile_app`: 機能・入口・操作対象
- `smartphone`: 端末・個人空間
- `notification`: 反応待ち
- `password`: アクセス条件・認証

Stage17注意:

- `コメント / 配信` は通信clusterをさらに増やすため、実装前に `sns / chat / video` との主役判定を固定する。
- `mobile_app` は広くなりやすいため、weak語だけで拾わせない。

## 教育・評価者クラスタ

対象: `teacher / school / exam / boss`

| relation | cluster | kind | audit |
|---|---|---|---|
| exam -> school | emotion-action | generic-specific | 試験が主役、学校は場として整理 |
| library -> school | home-place | generic-specific | 学びの場所として近い |
| book -> school | object-record | generic-specific | 学習道具と場所 |
| notebook -> school | object-record | generic-specific | 記録道具と場所 |
| notebook -> exam | emotion-action | should-be-reciprocal | 試験準備として説明可能 |
| boss -> workplace | relationship | should-be-reciprocal | 職場評価者 |
| boss -> exam | relationship | generic-specific | 評価不安の近縁 |
| pen -> exam | emotion-action | should-be-reciprocal | 試験で書く道具 |
| hallway -> school | home-place | should-be-reciprocal | 学校内の移動場所 |
| making_mistake -> exam | emotion-action | should-be-reciprocal | 試験で間違える文脈 |
| teacher -> school | relationship | generic-specific | 先生は人物、学校は場 |
| teacher -> exam | relationship | generic-specific | 先生は評価/導き、試験は場面 |
| teacher -> boss | relationship | generic-specific | どちらも評価者だが、先生は学び、bossは職場 |

固定方針:

- `teacher`: 導き・学び・教える人
- `school`: 場所・過去の学び
- `exam`: 試される場面
- `boss`: 職場の評価者

Stage17注意:

- `同僚` を追加する場合、`friend / workplace / boss` と衝突しやすい。
- `先生` と `boss` はどちらも評価者だが、場所と関係性で切り分ける。

## warning-review-ok

| category | count |
|---|---:|
| known-alias-overlap | 58 |
| accepted-near-neighbor | 0 |
| intentional-one-way-conflict | 1 |
| generic-specific-review-ok | 4 |
| context-helper-review-ok | 0 |

info visibility:

| info type | count |
|---|---:|
| relation info | 362 |
| alias info | 6 |
| other info | 0 |

判断:

- `warning-review-ok = 63` は全件カテゴリ分類済みです。
- 新規追加で増えたalias重複は、Stage15 fixtureとrelationで説明できる範囲です。
- Stage17では `コメント / 配信 / 同僚 / 玄関` のような重複しやすい候補を入れる前に、警告理由を先に決める必要があります。

## fixture / audit 候補

Stage16では新規fixture追加を必須にしません。Stage17で追加候補にするfixtureは以下です。

| id draft | purpose |
|---|---|
| `stage17-comment-sns-chat-boundary` | コメントをSNS/チャットから切り分ける |
| `stage17-streaming-video-sns-boundary` | 配信をvideo/SNSから切り分ける |
| `stage17-coworker-workplace-friend-boundary` | 同僚を職場/友人から切り分ける |
| `stage17-entrance-house-key-boundary` | 玄関をhouse/keyから切り分ける |
| `stage17-makeup-mirror-clothes-boundary` | 化粧をmirror/clothes/glassesから切り分ける |

## Stage17候補への提案

Stage17は次の20件追加フェーズに進めます。ただし、前半は低リスク候補を優先します。

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

- `コメント / 配信` はcommunication clusterを増やしやすい。
- `同僚` はfriend/workplaceの既存warningと絡む。
- `涙` はcryingに近すぎる。
- `隠す` はhidingとの差分が弱い。

## Stage16完了条件

- `registry total = 160`
- `warning-fix-soon = 188`
- `general count = 0`
- `stale-relation = 0`
- home-place / media / app / education clusterの監査結果をdocs化
- Stage17候補選定の注意点を整理
