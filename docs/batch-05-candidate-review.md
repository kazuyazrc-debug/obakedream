# Batch-05 Candidate Review

Stage7では `batch-05` を実装しません。100モチーフへ進む前に、既存80件とのrelationを説明しやすい候補を優先して整理します。

## Candidate Pool

| カテゴリ | 候補 |
|---|---|
| 場所・施設 | 店、図書館、公園、病室、駐車場、墓地 |
| 物・道具 | 本、ノート、眼鏡、ドア、箱、鍵束 |
| 感情・行動 | 叫ぶ、忘れる、拾う、捨てる、選ぶ、開ける、逃げ込む |
| 身体・状態 | 目、眠れない、震える、息苦しい、熱 |
| 自然・生き物 | 虫、花、木、魚、馬、蝶 |
| 危機・喪失 | 盗まれる、壊れる、閉じ込められる、なくす、迷路、停電 |
| 現代生活 | パスワード、画面、動画、チャット |

## Priority Policy

候補の優先度は、カテゴリ配分だけでなく既存80件とのrelationを説明しやすいかで判断します。高刺激・意味の振れ幅が大きいものは、無理に上位へ入れません。

## Priority Candidates

| 候補 | カテゴリ | relationの説明しやすさ |
|---|---|---|
| 店 | 場所・施設 | wallet / bag / clothes と買う・選ぶ文脈で接続しやすい |
| 図書館 | 場所・施設 | school / book / searching と学び・探索で接続しやすい |
| 公園 | 場所・施設 | family / friend / bird と休息・対人で接続しやすい |
| 駐車場 | 場所・施設 | car / station / searching と移動前後で接続しやすい |
| 本 | 物・道具 | letter / photo / school と記録・知識で接続しやすい |
| ノート | 物・道具 | school / exam / email と記録・未整理で接続しやすい |
| ドア | 物・道具 | key / house / road と境界・選択で接続しやすい |
| 箱 | 物・道具 | bag / searching / photo としまう・隠すで接続しやすい |
| 叫ぶ | 感情・行動 | voiceless / fighting / being_chased と対比が作れる |
| 忘れる | 感情・行動 | clock / email / exam と未解決感で接続しやすい |
| 拾う | 感情・行動 | wallet / key / ring と回復・偶然で接続しやすい |
| 選ぶ | 感情・行動 | road / clothes / travel と選択文脈で接続しやすい |
| 開ける | 感情・行動 | key / door / box と境界を開く文脈で接続しやすい |
| 目 | 身体・状態 | mirror / stranger / sky と見る・見られるで接続しやすい |
| 震える | 身体・状態 | thunder / injury / anxiety系と象徴範囲で扱いやすい |
| 花 | 自然・生き物 | shrine / baby / recovery と成長・供えで接続しやすい |
| 木 | 自然・生き物 | forest / bird / childhood_home と根・成長で接続しやすい |
| 魚 | 自然・生き物 | water / sea / river と水系で接続しやすい |
| パスワード | 現代生活 | key / smartphone / sns とアクセス権で接続しやすい |
| チャット | 現代生活 | sns / email / phone / friend と連絡系で接続しやすい |

## Deferred Candidates

| 候補 | 見送り理由 |
|---|---|
| 墓地 | deathと近く、高刺激表現のレビューを先にしたい |
| 病室 | hospitalと近く、場所として独立させる粒度を要検討 |
| 眼鏡 | mirror/eyeとの整理後に扱うほうがよい |
| 鍵束 | keyとのgeneric/specificを先に整理したい |
| 捨てる | loss/actionとして意味幅が広いためblocks設計を要検討 |
| 逃げ込む | being_chased/hidingと近く、独立motifか質問分岐か要検討 |
| 眠れない | 夢そのものとのメタ構造があるため慎重に扱う |
| 息苦しい | 医療判断に読めるリスクがあるため高刺激レビュー後 |
| 熱 | 医療判断に読めるリスクがあるため高刺激レビュー後 |
| 虫 | animal拡張batchでまとめて扱うとよい |
| 馬 | animalカテゴリの方針整理後 |
| 蝶 | 変化象徴として魅力はあるが、花/虫との整理後 |
| 盗まれる | wallet/key/bagと近く、危機・喪失カテゴリ整理後 |
| 壊れる | 多くのmotifに付く状態なので独立motif化は慎重にする |
| 閉じ込められる | elevator/house/hidingと近く、specific/generic整理後 |
| なくす | 既存のwallet/key/bag/photo質問で吸収できる可能性がある |
| 迷路 | lost/roadと近く、specific化の判断が必要 |
| 停電 | thunder/fire/night系とのrelation整理後 |
| 画面 | smartphone/mirror/photoと競合しやすい |
| 動画 | photo/sns/smartphoneとの切り分けを先にしたい |
