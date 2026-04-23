# おばけの夢占いアプリ

AI APIを使わず、自由文入力、候補タグ確認、追加質問、ルールベース解釈で夢を読むWebアプリです。Next.js App Router、TypeScript、Tailwind CSSで実装しています。

## 初回起動

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

品質確認:

```bash
npm run lint
npm test
npm run build
```

## 設計方針

- AI API、外部LLM APIは使わない
- モチーフ追加は主にデータ追加で完了する
- モチーフ、別名、抽出キーワード、追加質問、スコア、文章ブロック、合成ルールを分離する
- 初期は20モチーフだけを重厚に定義し、以後20個単位で増やす
- 1000モチーフ規模を見据え、検証テストと重複検知を運用に組み込む

## フォルダ構成

```text
app/                         Next.js App Router
components/                  入力、タグ確認、質問、結果UI
data/
  batches/                   20件単位のproduction motif batch
  aliases/                   別名・表記ゆれ・抽出語彙
  blocks/                    結果文の文章ブロック
  keywords/                  行動・文脈キーワードのスコア規則
  motifs/                    核モチーフ定義とレジストリ
  questions/                 モチーフ別追加質問
  rules/                     スコア、合成、表示ラベル
lib/dream-engine/
  extract/                   自由文から候補モチーフを抽出
  questions/                 追加質問の選定
  scoring/                   解釈軸スコアリング
  compose/                   構造化結果の文章合成
  rules/                     レジストリ検証
types/                       型定義
tests/                       エンジンとデータ検証
  fixtures/                  代表夢の回帰fixture
docs/                        追加運用ガイド
```

## 初期20モチーフを採用した理由

初期セットは、頻出性、夢の文脈への出やすさ、質問分岐の作りやすさ、カテゴリの広がりを基準に選びました。動物、自然要素、場所、人物、行動、身体、乗り物、時間トラブルを含めることで、少数でも多様な夢へ対応できます。

採用モチーフ: 蛇、水、海、家、実家、学校、友人、家族、知らない人、追われる、落ちる、飛ぶ、死ぬ、歯、赤ちゃん、猫、犬、電車、遅刻、戦う。

## 解釈エンジン

1. `extractMotifs` が `data/aliases` の語彙を使って候補モチーフを抽出
2. ユーザーが候補タグを確認
3. `selectFollowUpQuestions` が選択モチーフに応じて最大5問を選定
4. `scoreDream` が印象、鮮明度、繰り返し、モチーフ、行動語、回答から8軸を採点
5. `composeInterpretation` が文章ブロックと優勢軸を組み合わせ、6セクションの結果を生成

解釈軸: 不安、変化、対人、自己防衛、喪失、回復、願望、未解決感。

## モチーフ追加運用

Stage1以降は `data/batches/batch-XX/` を正本として、20個ずつ追加します。既存互換のため `data/motifs/core.ts` などは再エクスポート層として残しています。現在は `batch-01` から `batch-12` までの合計220モチーフです。

20個ずつ追加する手順は [docs/motif-addition-guide.md](docs/motif-addition-guide.md) にまとめています。Stage1の構造は [docs/stage1-architecture.md](docs/stage1-architecture.md)、長期的に1000モチーフへ育てる設計メモは [docs/scaling-to-1000.md](docs/scaling-to-1000.md) を参照してください。

## Validator

`validateMotifRegistry` は診断レベルを返します。

- `error`: production registryとして修正必須
- `warning-fix-soon`: 次の追加前に直す候補
- `warning-review-ok`: 意図が確認できれば許容できる警告
- `info`: レビュー補助

templates、fixtures、docs用サンプルはproduction registryに入れない限りvalidation対象外です。

## Stage3

Stage3ではbatch-03を実装せず、40モチーフ運用の品質ゲートを整備しました。

- alias分類: `phrase / alias / weak`
- 抽出棚卸し: [docs/stage3-extraction-audit.md](docs/stage3-extraction-audit.md)
- relation map: [docs/stage3-relation-map.md](docs/stage3-relation-map.md)
- warning運用: [docs/stage3-warning-policy.md](docs/stage3-warning-policy.md)
- batch-03候補レビュー: [docs/batch-03-candidate-review.md](docs/batch-03-candidate-review.md)

## Stage4

Stage4では `batch-03` として20モチーフを追加し、合計60モチーフに拡張しました。

- 追加内容: [docs/stage4-batch-03.md](docs/stage4-batch-03.md)
- 高刺激モチーフ「血」の扱いも同文書に明記しています。

## Stage5

Stage5では `batch-04` を追加せず、60モチーフ状態の抽出品質ゲートを強化しています。

- weak語単独ヒットを抑制
- relation mapを候補順位補助に利用
- short alias / weak termのwarning管理を明文化
- extraction audit fixtureを拡張
- batch-04候補30〜40件と優先20件を整理

詳細は [docs/stage5-extraction-quality-gate.md](docs/stage5-extraction-quality-gate.md) と [docs/batch-04-candidate-review.md](docs/batch-04-candidate-review.md) を参照してください。
## Stage6

Stage6では `batch-04` として20モチーフを追加し、合計80モチーフへ拡張しています。

- 採用内容: [docs/stage6-batch-04.md](docs/stage6-batch-04.md)
- `warning-fix-soon <= 189` を維持
- `裸 / 怪我 / 声が出ない / 迷子` は扱い注意motifとして非断定の文面に統一
- `SNS / メール` は `smartphone / notification / phone / letter` とrelationで切り分け
## Stage7

Stage7では `batch-05` を追加せず、80モチーフ時点のrelation / warning運用を整理しています。

- relation review: [docs/stage7-relation-review.md](docs/stage7-relation-review.md)
- relation分類基準: [docs/relation-classification-guide.md](docs/relation-classification-guide.md)
- relation map: [docs/stage7-relation-map.md](docs/stage7-relation-map.md)
- batch-05候補整理: [docs/batch-05-candidate-review.md](docs/batch-05-candidate-review.md)

## Stage8

Stage8では `batch-05` として20モチーフを追加し、合計100モチーフへ拡張しています。

- 採用内容: [docs/stage8-batch-05.md](docs/stage8-batch-05.md)
- `warning-fix-soon <= 189` を維持
- `ドア / 鍵 / 開ける`、`パスワード / スマホ / SNS`、`チャット / SNS / メール` のrelationを整理
- 代表夢fixtureとextraction audit fixtureを追加し、100モチーフ時点の回帰テストを固定

## Stage9

Stage9では `batch-06` を追加せず、100モチーフ時点の抽出監査とwarning/relation運用を強化しています。

- 抽出監査: [docs/stage9-extraction-audit.md](docs/stage9-extraction-audit.md)
- 通信系クラスタ: [docs/stage9-communication-cluster.md](docs/stage9-communication-cluster.md)
- warning-review-ok運用: [docs/warning-review-ok-policy.md](docs/warning-review-ok-policy.md)
- batch-06候補整理: [docs/batch-06-candidate-review.md](docs/batch-06-candidate-review.md)

## Stage10

Stage10では `batch-06` として20モチーフを追加し、合計120モチーフへ拡張しています。

- 採用内容: [docs/stage10-batch-06.md](docs/stage10-batch-06.md)
- `warning-fix-soon <= 189` を維持
- `失くす` と `虫` は扱い注意motifとして非断定の文面に統一
- Stage9の通信系 / generic-specific / 活用形fixtureをゲートとして維持

## Stage11

Stage11では `batch-07` を追加せず、120モチーフ時点の抽出監査とrelation cluster整理を行っています。

- 抽出監査: [docs/stage11-extraction-audit.md](docs/stage11-extraction-audit.md)
- 活用形レビュー: [docs/stage11-inflection-review.md](docs/stage11-inflection-review.md)
- relation cluster: [docs/stage11-relation-cluster.md](docs/stage11-relation-cluster.md)

## Stage12

Stage12では `batch-07` 前半9件と `batch-08` 後半10件を追加し、合計139モチーフへ拡張しています。`shrine` は既存重複を避けたため追加対象から外し、品質ゲートを優先しました。

- 計画: [docs/stage12-plan.md](docs/stage12-plan.md)
- 抽出監査: [docs/stage12-extraction-audit.md](docs/stage12-extraction-audit.md)
- `warning-fix-soon = 188`、`general count = 0` を維持

## Stage13

Stage13では大規模追加に入らず、Codex移行後の引き継ぎ確認と139→140の1件補完を行っています。

- 補完内容: [docs/stage13-140-complement.md](docs/stage13-140-complement.md)
- 追加motif: `glasses`（眼鏡）
- `warning-fix-soon = 188` のまま増加なし
- `general count = 0`、`stale-relation = 0` を維持

## Stage14

Stage14では `batch` 実装に入らず、140モチーフ時点の軽監査と次期候補整理を行っています。

- 監査内容: [docs/stage14-light-audit.md](docs/stage14-light-audit.md)
- 次期候補: [docs/next-20-candidate-review.md](docs/next-20-candidate-review.md)
- 既存 `data/batches/batch-08` との命名衝突を避けるため、候補段階では `next-20候補` と呼びます
- `warning-fix-soon = 188`、`general count = 0`、`stale-relation = 0` を維持する前提でStage15へ接続します

## Stage15

Stage15では `batch-09` として20モチーフを追加し、合計160モチーフへ拡張しています。

- 採用内容: [docs/stage15-batch-09.md](docs/stage15-batch-09.md)
- `warning-fix-soon = 188` を維持
- `general count = 0`、`stale-relation = 0` を維持
- `テレビ / ラジオ / 動画 / アプリ` の役割差をdocsとfixtureで固定
- 代表夢fixtureとextraction audit fixtureを追加し、160モチーフ時点の回帰テストを固定

## Stage16

Stage16では新規motif追加に入らず、160モチーフ時点のrelation / warning監査を行っています。

- 監査内容: [docs/stage16-audit.md](docs/stage16-audit.md)
- ChatGPT確認用レビュー文: [docs/stage16-chatgpt-review.md](docs/stage16-chatgpt-review.md)
- `home-place = 82` の内訳を整理
- `television / video / news / cinema`、`mobile_app / smartphone / notification / password`、`teacher / school / exam / boss` を重点監査
- `warning-fix-soon = 188`、`general count = 0`、`stale-relation = 0` を維持
 
## Stage17

Stage17では `batch-10` として20モチーフを追加し、合計180モチーフへ拡張しました。

- 実装記録: [docs/stage17-batch-10.md](docs/stage17-batch-10.md)
- ChatGPT確認用レビュー文: [docs/stage17-chatgpt-review.md](docs/stage17-chatgpt-review.md)
- 追加モチーフ: `morning / evening / neighbor / shelf / gift / entrance / makeup / inviting / planner / music / comment / streaming / coworker / tears / concealing / cooking / shadow / storage_room / festival / maze`
- `warning-fix-soon = 188` を維持
- `general count = 0` と `stale-relation = 0` を維持
- `comment / streaming` は既存の communication 系と役割差を保ち、weak-only 抑制を壊さないよう relation を調整
- `coworker` は `workplace` の weak-only 抽出を助けすぎないよう、直接 neighbor を避けて実装

## Stage18

Stage18では新規motif追加に入らず、180モチーフ時点の軽監査とStage19への前提整理を行っています。

- 監査内容: [docs/stage18-light-audit.md](docs/stage18-light-audit.md)
- `home-place = 96` のdocs補助ラベル候補を整理
- `transit-place` は検討メモに留め、実装上のcluster / kindにはしない方針を固定
- `communication` の `sns / chat / comment / streaming / notification / video` の主役差を再固定
- `comment / streaming / coworker / tears / concealing` を次段階の重点注意対象として維持

## Stage19

Stage19では `batch-11` として20モチーフを追加し、合計200モチーフへ拡張しました。

- 計画: [docs/stage19-plan.md](docs/stage19-plan.md)
- 候補レビュー: [docs/stage19-candidate-review.md](docs/stage19-candidate-review.md)
- 実装記録: [docs/stage19-batch-11.md](docs/stage19-batch-11.md)
- 追加モチーフ: `cup / candle / blanket / envelope / leaf / wave / ice / face / writing / dancing / scissors / toy / grass / ear / mouth / breath / swimming / packing / bicycle / classmate`
- `home-place` と `communication` の新規候補採用を抑制
- relationship候補は `classmate` 1件のみとし、`coworker / workplace` 周辺を前半へ寄せない方針を維持
- `warning-fix-soon = 188`、`general count = 0`、`stale-relation = 0` を維持

## Stage20

Stage20では新規motif追加に入らず、200モチーフ時点の軽監査を行っています。

- 監査内容: [docs/stage20-light-audit.md](docs/stage20-light-audit.md)
- `home-place = 102`、`communication = 59`、`generic-specific = 132`、`emotion-action = 69` を優先監査
- `object-record = 21` と `body-appearance = 50` もStage19追加分を中心に確認
- next-20候補は `next-addition-ready / needs-audit / hold` の3分類で再棚卸し
- `warning-fix-soon <= 188`、`general count = 0`、`stale-relation = 0` を維持する前提でStage21へ接続

## Stage21

Stage21では `batch-12` として20モチーフを追加し、合計220モチーフへ拡張しました。

- 候補レビュー: [docs/stage21-candidate-review.md](docs/stage21-candidate-review.md)
- 実装記録: [docs/stage21-batch-12.md](docs/stage21-batch-12.md)
- 追加モチーフ: `seed / soap / pillow / rope / painting / button / towel / coin / folding / climbing / brush / scarf / forehead / back / scar / carrying / singing / reading / washing / tying`
- `home-place / communication / relationship` 候補は採用せず、object-record / body-appearance / action を中心に補強
- `scar` は非診断・非断定をblock / question / alias / fixtureで固定
- `warning-fix-soon = 188`、`general count = 0`、`stale-relation = 0` を維持

## Stage22

Stage22 では新規 motif 追加に入らず、220 モチーフ時点の relation / warning / fixture / audit の軽監査を行いました。
- 監査メモ: [docs/stage22-light-audit.md](docs/stage22-light-audit.md)
- `generic-specific = 196`、`home-place = 106`、`body-appearance = 71`、`emotion-action = 83`、`communication = 59` を優先監査対象として整理
- `soap / towel / washing`、`singing / voice / mouth / breath / music`、`scar / injury / past`、`tying / rope / concealing / hiding`、`tears / crying / scar / face` を Stage23 以降の fixture 候補として維持
- `home-place / communication / relationship` は次回追加でも抑制枠として扱う

## Stage23

Stage23 では `batch-13` として20モチーフを追加し、合計240モチーフへ拡張しました。
- 候補レビュー: [docs/stage23-candidate-review.md](docs/stage23-candidate-review.md)
- 実装記録: [docs/stage23-batch-13.md](docs/stage23-batch-13.md)
- 追加モチーフ: `feather / ribbon / lantern / drawer / thread / stamp / clay / shell / bead / spoon / blank_page / necklace / shoulder / wiping / wrapping / unpacking / knot / sleeve / ankle / carving`
- `whispering / wound / secret` は採用せず、hold として維持
- `home-place / communication / relationship` 候補は採用しない方針を維持
- `shoulder / ankle` は非診断・非断定として block / question / alias / fixture で確認
- `drawer` は storage / home-place へ寄せすぎず、`ribbon / thread / knot / wrapping` は concealing / hiding へ寄せすぎない
- `warning-fix-soon <= 188`、`general count = 0`、`stale-relation = 0` を維持
## Stage24

Stage24 では新規 motif 追加に入らず、240モチーフ時点の軽監査と基盤整備方針を整理しました。
- 監査メモ: [docs/stage24-light-audit-foundation.md](docs/stage24-light-audit-foundation.md)
- 監査対象: `generic-specific = 267`、`object-record`、`body-appearance`、`emotion-action`
- 重点境界: `blank_page / writing / reading / notebook`、`wiping / washing / towel / sleeve`、`ribbon / thread / knot / wrapping / concealing / hiding`
- `scar / injury / past` と `shoulder / ankle` は非診断・非断定方針を維持
- ロードマップ優先度Aとして、非診断・免責文言ゲート、フィードバック収集、`dict-v0.x.y` semver / batch snapshot を設計
- next-20候補は `next-addition-ready / needs-audit / hold` の3分類で再棚卸し
- `warning-fix-soon <= 188`、`general count = 0`、`stale-relation = 0` を維持

## Stage25

Stage25 では `batch-14` として20 motif を追加し、240→260へ拡張しました。
- 実装メモ: [docs/stage25-batch-14.md](docs/stage25-batch-14.md)
- 候補レビュー: [docs/stage25-candidate-review.md](docs/stage25-candidate-review.md)
- 前半10件: `postcard`, `basket`, `jar`, `bench`, `curtain`, `nest`, `chalk`, `pebble`, `maple_leaf`, `tray`
- 後半10件: `needle`, `paintbrush`, `ladder`, `glove`, `plate`, `lamp`, `string`, `marble`, `bucket`, `comb`
- `home-place` / `communication` / `relationship` 候補は採用せず、hold 候補も除外
- `needle / string / knot / thread`、`paintbrush / brush / painting`、`lamp / lantern / candle` を fixture で確認
- `dict-v0.14.0` 相当の追加として、fixture / warning / relation impact を docs に記録

## Stage26

Stage26 では新規 motif 追加に入らず、260モチーフ時点の軽監査を行いました。
- 監査メモ: [docs/stage26-light-audit.md](docs/stage26-light-audit.md)
- `generic-specific = 332`、`object-record = 60`、`body-appearance = 99`、`emotion-action = 109` を優先監査
- `bench` と home-place、`needle / string / thread / knot / tying`、`lamp / lantern / candle`、`glove / comb / hair` の境界を確認
- 実地テストで見えた `空港` → `港` による `sea / ship` 誤抽出と、`キレ散らかす` 未抽出を Stage27 以降の修正候補として整理
- `warning-fix-soon <= 188`、`general count = 0`、`stale-relation = 0` を維持する前提で Stage27 へ接続

## Stage27

Stage27 では `batch-15` として20 motif を追加し、260→280へ拡張しました。
- 実装メモ: [docs/stage27-batch-15.md](docs/stage27-batch-15.md)
- 候補レビュー: [docs/stage27-candidate-review.md](docs/stage27-candidate-review.md)
- 前半10件: `pinecone`, `acorn`, `mushroom`, `fern`, `dew`, `broom`, `bowl`, `compass`, `pencil`, `bookmark`
- 後半10件: `shoelace`, `zipper`, `apron`, `suitcase`, `ticket_stub`, `paint`, `footprint`, `eyelash`, `keychain`, `pocket`
- `home-place` / `communication` / `relationship` 候補は採用せず、hold 候補も除外
- `空港` → `港` による `sea / ship` 誤抽出は、単独 `港` alias / weak を外す最小修正でfixture化
- `キレ散らかす` は Stage27 では `anger` 新規 motif 化せず、既存 `fighting` の phrase として最小対応
- `warning-fix-soon <= 188`、`general count = 0`、`stale-relation = 0` を維持

## Stage28

Stage28 では新規 motif 追加に入らず、280モチーフ時点の軽監査を行いました。
- 監査メモ: [docs/stage28-light-audit.md](docs/stage28-light-audit.md)
- `generic-specific = 395`、`object-record = 76`、`body-appearance = 108`、`emotion-action = 117` を優先監査
- `shoelace / zipper / pocket` と `concealing / hiding` の境界を確認
- 実夢文監査を cluster監査と並行し、部分一致誤抽出、口語未抽出、主役モチーフ入れ替わりを記録
- `キレる / キレ散らかす / ブチギレる` など怒り口語は比較対象に留め、`anger` 新規motifは未確定
- `warning-fix-soon <= 185`、`general count = 0`、`stale-relation = 0` を維持する前提で Stage29 へ接続

## Stage29

Stage29 では `batch-16` として20 motif を追加し、280→300へ拡張しました。
- 実装メモ: [docs/stage29-batch-16.md](docs/stage29-batch-16.md)
- 候補レビュー: [docs/stage29-candidate-review.md](docs/stage29-candidate-review.md)
- 前半10件: `twig`, `moss`, `petal`, `raindrop`, `eraser`, `ruler`, `paperclip`, `coaster`, `handkerchief`, `bell`
- 後半10件: `backpack`, `ink`, `torn_paper`, `dust`, `stain`, `answer_sheet`, `keyboard`, `monitor`, `footsteps`, `dead_end`
- `home-place` / `communication` / `relationship` 候補は採用せず、hold 候補も除外
- 実夢文監査由来の改善候補は、20件追加と分けて fixture 化し、最小 alias / phrase 修正に留めた
- `電車 -> car` と `廊下 -> school` の部分一致誤反応を抑制
- `キレる / キレ散らかす / ブチギレる` は Stage29 では `anger` 新規motif化せず、既存 `fighting` で比較
- `warning-fix-soon <= 185`、`general count = 0`、`stale-relation = 0` を維持

## Stage30

Stage30 では新規 motif 追加に入らず、300モチーフ時点の軽監査を行いました。
- 監査メモ: [docs/stage30-light-audit.md](docs/stage30-light-audit.md)
- `generic-specific = 463`、`object-record = 95`、body-appearance、emotion-action、movement の過密化を優先監査
- `footsteps / being_chased / running / dead_end`、`keyboard / monitor / bell`、`dead_end / hallway / room / house` の境界を整理
- Stage29の最小抽出修正である `電車 -> car`、`廊下 -> school` 抑制の副作用を監査対象化
- `キレる / キレ散らかす / ブチギレる` は比較対象に留め、`anger` 新規motifは未確定
- `warning-fix-soon <= 184`、`general count = 0`、`stale-relation = 0` を維持する前提で Stage31 へ接続

## Stage31

Stage31 では `batch-17` として20 motif を追加し、300→320へ拡張しました。
- 実装メモ: [docs/stage31-batch-17.md](docs/stage31-batch-17.md)
- 候補レビュー: [docs/stage31-candidate-review.md](docs/stage31-candidate-review.md)
- 前半10件: `clover`, `dandelion`, `sprout`, `bark`, `vine`, `glue`, `tape`, `label`, `folder`, `receipt`
- 後半10件: `magnifying_glass`, `clipboard`, `stapler`, `calendar_page`, `traffic_light`, `crosswalk`, `detour`, `turn_back`, `fingernail`, `cheek`
- `home-place` / `communication` / `relationship` 候補は採用せず、hold 候補も除外
- 実夢文監査由来の改善候補は、追加候補と分けて fixture / 比較メモ中心で扱った
- `電車 -> car` と `廊下 -> school` の副作用確認を fixture で維持
- `キレる / キレ散らかす / ブチギレる` は Stage31 でも `anger` 新規motif化せず、既存 `fighting` で比較
- `warning-fix-soon <= 184`、`general count = 0`、`stale-relation = 0` を維持

## Stage32

Stage32 では新規 motif 追加に入らず、320モチーフ時点の軽監査を行いました。
- 監査メモ: [docs/stage32-light-audit.md](docs/stage32-light-audit.md)
- `generic-specific = 525`、`object-record = 115`、`movement = 88` を最優先監査
- `body-appearance = 119`、emotion-action、`home-place = 111` の過密化と説明可能性を確認
- `traffic_light / crosswalk / detour / turn_back / dead_end`、`dead_end / hallway / room / house` の境界を整理
- `電車 -> car`、`廊下 -> school` 抑制の副作用確認を継続
- `キレる / キレ散らかす / ブチギレる` は比較対象に留め、`anger` 新規motifは未確定
- `warning-fix-soon <= 184`、`general count = 0`、`stale-relation = 0` を維持する前提で Stage33 へ接続
## Stage33

Stage33では `batch-18` として20 motifを追加し、320→340へ拡張しました。
- 実装メモ: [docs/stage33-batch-18.md](docs/stage33-batch-18.md)
- 候補レビュー: [docs/stage33-candidate-review.md](docs/stage33-candidate-review.md)
- 前半10件: `root`, `bud`, `wildflower`, `lichen`, `reed`, `rubber_band`, `binder`, `index_card`, `coupon`, `pencil_case`
- 後半10件: `sidewalk`, `escalator`, `platform_edge`, `lost_ticket`, `checklist`, `progress_bar`, `loading_icon`, `eyebrow`, `chin`, `wristwatch`
- `home-place` / `communication` / `relationship` 候補は採用せず、object-record / natureを前半中心に補強しました。
- `sidewalk / escalator / platform_edge / lost_ticket` は movement 境界として、`traffic_light / crosswalk / detour / turn_back / dead_end` を壊さないようfixtureで確認しました。
- `progress_bar / loading_icon` は `monitor / waiting / clock` 側に寄せ、communication本体へ寄りすぎないよう扱いました。
- `eyebrow / chin` は body-appearance として非診断・非断定を維持しました。
- 実夢文監査は追加候補と別枠で扱い、`電車 -> car`、`廊下 -> school`、怒り口語の `fighting` 最小対応を継続確認しました。
- `warning-fix-soon <= 184`、`general count = 0`、`stale-relation = 0` を維持しました。

## Stage35

Stage35では `batch-19` として20 motifを追加し、340→360へ拡張しました。
- 実装メモ: [docs/stage35-batch-19.md](docs/stage35-batch-19.md)
- 候補レビュー: [docs/stage35-candidate-review.md](docs/stage35-candidate-review.md)
- 前半10件: `pine_needle`, `berry`, `daisy`, `waterweed`, `driftwood`, `rubber_stamp`, `notepad`, `sticky_note`, `paper_cup`, `file_tab`
- 後半10件: `pedestrian_bridge`, `ticket_gate`, `platform_sign`, `pause_button`, `status_light`, `screen_corner`, `name_tag`, `paper_crane`, `temple`, `jawline`
- `home-place` / `communication` / `relationship` 候補は採用せず、object-record / natureを前半中心に補強しました。
- `pedestrian_bridge / ticket_gate / platform_sign` は movement 境界として、`platform_edge / lost_ticket / train / being_late / dead_end` を壊さないようfixtureで確認しました。
- `pause_button / status_light / screen_corner` は `progress_bar / loading_icon / monitor` 側のdigital objectとして扱いました。
- `temple / jawline` は body-appearance として非診断・非断定を維持しました。
- 実夢文監査は追加候補と別枠で扱い、`電車 -> car`、`廊下 -> school`、怒り口語の `fighting` 最小対応を継続確認しました。
- `warning-fix-soon <= 184`、`general count = 0`、`stale-relation = 0` を維持しました。
## Stage37

Stage37 adds `batch-20` and expands the production registry from 360 to 380 motifs.
The front half stays centered on `nature / object-record`, while the back half carries the more
audit-sensitive additions in `movement / digital object / body-appearance / emotion-action`.
Real-dream audit items stay separate from the 20 adopted motifs and continue through fixtures and
comparison notes for `being_late`, `exam`, `ex_partner`, `making_mistake`, `being_chased`,
`train -> car`, `hallway -> school`, and anger colloquialisms.
The stage keeps `warning-fix-soon <= 184`, `general count = 0`, and `stale-relation = 0`, and
hands Stage38 a focused audit on `generic-specific`, `object-record`, `movement`,
`body-appearance`, and `emotion-action`.

## Stage38

Stage38 does not add motifs and does not change `data/batches`; it is a light audit pass at 380 motifs.
The audit focuses on `generic-specific = 713`, `object-record = 175`, `movement = 120`,
`body-appearance = 138`, `emotion-action = 150`, and `home-place = 118`, with special attention to
station-side movement boundaries, digital-object boundaries, and non-diagnostic body-appearance copy.
Real-dream audit remains a separate track with four-state recording:
`1位 / 上位6件 / 未抽出 / 誤抽出あり`.
`anger` remains unconfirmed, and anger colloquialisms continue as comparison targets rather than a new motif decision.

## Stage39

Stage39 adds `batch-21` and expands the registry from 380 to 400 motifs.
The front half stays centered on `nature / object-record`, while the back half carries the more
audit-sensitive additions in `movement / digital object / body-appearance / emotion-action`.
Real-dream audit items remain separate from the 20 adopted motifs and continue through fixtures and
comparison notes for `being_late`, `exam`, `ex_partner`, `making_mistake`, `being_chased`,
`train -> car`, `hallway -> school`, and anger colloquialisms.
The stage keeps `warning-fix-soon <= 184`, `general count = 0`, and `stale-relation = 0`, and
marks the end of the planned addition track so the next step can focus on polish, UI confirmation,
and provisional release validation instead of more motif growth.

## Stage40

Stage40 does not add motifs and does not change `data/batches`; it is a stabilization audit pass at 400 motifs.
The focus shifts from growth to explanation quality, UI wording, empty-match handling, input guidance,
and provisional release readiness.
The priority review areas are `generic-specific = 774`, `object-record = 193`, `movement = 126`,
`body-appearance = 142`, `emotion-action = 163`, and `home-place = 120`, along with station-side
movement boundaries, digital-object boundaries, non-diagnostic body copy, and real-dream audit continuity.
Stage41 is reserved for PowerShell-driven runtime confirmation rather than more motif expansion.

## Stage42

Stage42 focuses on pre-release UI polish rather than motif growth. The main changes are a more
premium mystical presentation, updated title and helper copy, softer empty-match guidance, and
removal of outdated implementation-status badges from the visible UI while keeping the underlying
logic unchanged.
