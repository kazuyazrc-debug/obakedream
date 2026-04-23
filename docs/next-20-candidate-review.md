# next-20候補レビュー

この文書は、140モチーフ到達後に次の20件を追加するための候補整理です。既存の `data/batches/batch-08` と命名衝突しないよう、候補段階では `next-20候補` と呼びます。実装時のbatch名はStage15で確定します。

## 選定基準

- 既存140件とのrelationを説明しやすい
- 短語aliasに頼らず、自然なphraseを3件以上作れる
- `warning-fix-soon` を188より増やさない
- `general count = 0` を維持しやすい
- 高刺激・意味幅が大きい候補を前半に寄せすぎない
- fixture / audit を自然に作れる

## カテゴリ配分案

| category | target | reason |
|---|---:|---|
| 場所・生活空間 | 5-6 | home-placeが最大clusterのため、粒度を揃えて追加する |
| 物・道具 | 5-6 | object-recordを補強しつつ、短語aliasを避ける |
| 身体・外見・知覚 | 3-4 | glasses追加後の横断relationを見ながら少数追加 |
| 行動・状態 | 4-5 | emotion-actionの増加を抑えつつ高頻度を補強 |
| 自然・環境 | 3-4 | water-weather / nature-skyのバランス補強 |
| 現代コミュニケーション | 2-3 | communication clusterが密なため慎重に追加 |
| 関係・役割 | 2-3 | relationshipの粒度差を避ける |

## 候補35件

| category | candidate | relation notes | risk |
|---|---|---|---|
| 場所・生活空間 | 台所 | house / cleaning / restaurantと接続 | low |
| 場所・生活空間 | 庭 | house / flower / treeと接続 | low |
| 場所・生活空間 | 廊下 | school / hospital / hotelと接続 | low |
| 場所・生活空間 | ベランダ | house / sky / windと接続 | low |
| 場所・生活空間 | 玄関 | house / key / shoesと接続。alias重複に注意 | medium |
| 場所・生活空間 | 倉庫 | box / searching / hidingと接続 | medium |
| 物・道具 | ペン | notebook / letter / examと接続 | low |
| 物・道具 | 皿 | restaurant / kitchen相当 / cleaningと接続 | low |
| 物・道具 | 棚 | book / box / tidyingと接続。意味幅に注意 | medium |
| 物・道具 | テレビ | news / cinema / room文脈と接続 | low |
| 物・道具 | ラジオ | news / voice / earphoneと接続 | low |
| 物・道具 | プレゼント | handing_over / ring / birthday相当と接続 | medium |
| 身体・外見・知覚 | マスク | face相当 / mirror / voice / selfDefenseと接続 | medium |
| 身体・外見・知覚 | 帽子 | clothes / mirror / roleと接続 | low |
| 身体・外見・知覚 | 化粧 | mirror / clothes / eyeと接続。外見断定に注意 | medium |
| 身体・外見・知覚 | 影 | dark / stranger / mirrorと接続。意味幅に注意 | medium |
| 身体・外見・知覚 | 涙 | cryingと近すぎるため慎重 | high |
| 行動・状態 | 間違える | exam / workplace / apologizingと接続 | low |
| 行動・状態 | 断る | relationships / selfDefense系として追加候補 | low |
| 行動・状態 | 誘う | friend / crush / travelと接続 | medium |
| 行動・状態 | 並ぶ | waiting / shop / stationと接続 | low |
| 行動・状態 | 転ぶ | falling / injury / footと接続。刺激に注意 | medium |
| 行動・状態 | 隠す | hiding / box / secret相当と接続。隠れるとの差分が必要 | medium |
| 自然・環境 | 湖 | water / sea / riverとの差分が明確 | low |
| 自然・環境 | 池 | water / fish / parkと接続 | low |
| 自然・環境 | 霧 | rain / cloud / lostと接続 | low |
| 自然・環境 | 朝 | sun / sleep / calendarと接続 | low |
| 自然・環境 | 夕方 | sun / past / roadと接続 | low |
| 現代コミュニケーション | アプリ | smartphone / notificationと接続。過剰重複に注意 | medium |
| 現代コミュニケーション | 動画 | smartphone / cinema / snsと接続 | medium |
| 現代コミュニケーション | コメント | sns / chatと近い。weak-only注意 | medium |
| 現代コミュニケーション | 配信 | sns / video / public reactionと接続。意味幅に注意 | medium |
| 関係・役割 | 先生 | school / exam / bossと接続 | low |
| 関係・役割 | 同僚 | workplace / friendと接続。既存warning見直し対象 | medium |
| 関係・役割 | 隣人 | stranger / house / parkと接続 | low |

## 優先20件案

Stage15で実装候補にしやすい20件です。高刺激・意味幅が大きいものは後半候補または保留に寄せます。

| order | candidate | category | reason |
|:---:|---|---|---|
| 1 | 台所 | 場所・生活空間 | house / cleaning / restaurantと自然に接続できる |
| 2 | 庭 | 場所・生活空間 | flower / tree / houseのfixtureを作りやすい |
| 3 | 廊下 | 場所・生活空間 | school / hospital / hotelと関係を説明しやすい |
| 4 | ベランダ | 場所・生活空間 | house / sky / windと穏やかに接続 |
| 5 | ペン | 物・道具 | notebook / letter / examと差分が明確 |
| 6 | 皿 | 物・道具 | restaurant / cleaning文脈で自然 |
| 7 | テレビ | 物・道具 | news / cinemaとの差分を作りやすい |
| 8 | ラジオ | 物・道具 | voice / news / earphoneと接続しやすい |
| 9 | 帽子 | 身体・外見・知覚 | clothes / mirrorと自然に接続し、刺激が低い |
| 10 | マスク | 身体・外見・知覚 | voice / mirror / selfDefenseのfixture候補になる |
| 11 | 間違える | 行動・状態 | exam / workplace / apologizingと接続 |
| 12 | 断る | 行動・状態 | selfDefense / relationshipsの読みを補強 |
| 13 | 並ぶ | 行動・状態 | waiting / shop / stationと接続 |
| 14 | 転ぶ | 行動・状態 | falling / foot / injuryと接続。文面は非診断 |
| 15 | 湖 | 自然・環境 | water / sea / riverの粒度整理に使える |
| 16 | 池 | 自然・環境 | park / fish / waterと接続 |
| 17 | 霧 | 自然・環境 | lost / cloud / roadと接続しやすい |
| 18 | アプリ | 現代コミュニケーション | smartphone / notificationと現代文脈を補強 |
| 19 | 動画 | 現代コミュニケーション | cinema / smartphone / snsと差分を確認しやすい |
| 20 | 先生 | 関係・役割 | school / exam / bossと粒度を説明しやすい |

## 保留候補

| candidate | reason |
|---|---|
| 玄関 | house / keyとのalias重複が強いため、fixture設計後に判断 |
| 倉庫 | searching / hiding / boxと意味幅が広い |
| 棚 | book / box / tidyingと近いが、単独motifとしての強さを再確認 |
| プレゼント | handing_over / ring / birthday相当とのrelation設計が必要 |
| 化粧 | 外見断定を避けるblock設計が必要 |
| 影 | dark / stranger / self-imageの意味幅が広い |
| 涙 | cryingと近すぎるため、Stage15前半には入れない |
| 誘う | crush / friend / travelにまたがり、対人文脈が広い |
| 隠す | hidingとの差分設計が必要 |
| 朝 | sun / sleep / calendarとのrelation整理後 |
| 夕方 | past / sun / roadとの抽象度確認後 |
| コメント | sns / chatに近く、weak-only誤検出に注意 |
| 配信 | video / snsと近く、現代communication clusterが過密になりやすい |
| 同僚 | friend / workplaceの既存warning見直しと合わせる |
| 隣人 | stranger / houseとの差分は作れるが、優先度は次点 |

## Stage15実装前ゲート

- `warning-fix-soon <= 188`
- `general count = 0`
- `stale-relation = 0`
- next-20候補のphraseは各motif最低3件
- 2文字以下のweak語は原則追加しない
- high / medium risk候補は前半に寄せすぎない

## Stage15 implementation result

Stage15では優先20件を `batch-09` として実装しました。前半10件の順序は、場所系の集中を避けるため `台所 / 庭 / ペン / 皿 / 廊下 / ベランダ / テレビ / ラジオ / 帽子 / 湖` に調整しています。

採用済み:

- 台所
- 庭
- ペン
- 皿
- 廊下
- ベランダ
- テレビ
- ラジオ
- 帽子
- 湖
- マスク
- 間違える
- 断る
- 並ぶ
- 転ぶ
- 池
- 霧
- アプリ
- 動画
- 先生

Stage16では、保留候補のうち `玄関 / 倉庫 / 棚 / プレゼント / 化粧 / 影 / 涙 / 誘う / 隠す / 朝 / 夕方 / コメント / 配信 / 同僚 / 隣人` を再レビューします。
