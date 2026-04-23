# warning-review-ok 運用ポリシー

Stage9では `warning-review-ok` を件数だけで管理せず、理由カテゴリを必須にします。目的は、100モチーフ以降で「許容している警告」と「理由が曖昧な警告」が混ざらないようにすることです。

## 理由カテゴリ

| category | 用途 |
|---|---|
| `known-alias-overlap` | 近縁motif間で意図的に同じ語を持つalias重複 |
| `accepted-near-neighbor` | 近縁motifとして併存を基本にする片方向relation |
| `intentional-one-way-conflict` | 片方向conflictとして抑制の主語を明確にしているrelation |
| `generic-specific-review-ok` | 汎用motifと具体motifの優先関係として許容するrelation |
| `context-helper-review-ok` | 一方が文脈補助として働くため片方向を許容するrelation |

## Stage9 現在値

| category | count |
|---|---:|
| `known-alias-overlap` | 29 |
| `accepted-near-neighbor` | 0 |
| `intentional-one-way-conflict` | 1 |
| `generic-specific-review-ok` | 4 |
| `context-helper-review-ok` | 0 |

`warning-review-ok` 合計は34件です。未分類の `warning-review-ok` は残しません。

## info の見方

Stage9では `info` も relation info と alias info に分けて見ます。

| info type | count |
|---|---:|
| relation info | 180 |
| alias info | 5 |
| other info | 0 |

relation infoは実装を止めませんが、`general` に残るものや通信系クラスタに集まるものを次回追加前に優先レビューします。

---

## Stage11 known-alias-overlap 棚卸し

Stage10完了後、`known-alias-overlap` が42件に増加しました。Stage11では全42件を3分類し、許容条件を明記します。batch-07前に削減候補を処置する判断材料として使います。

### 分類基準

| 分類 | 基準 |
|---|---|
| 継続許容 | 意味差分が明確でどちらのfixture文脈でも自然に働く。extraction挙動に問題なし |
| 要見直し | 意味差分が弱い、または文脈によって主役が入れ替わりやすい。次のbatch前に確認 |
| 削減候補 | 片方のmotifが常に補助に回るか、より専用のmotifが意味を担うべきケース |

### 継続許容（37件）

| term | motifs | 許容条件 |
|---|---|---|
| しっぽ | cat, dog | 動物の部位として両方に自然。抑制不要 |
| ドアを開ける | door, opening | ドアは物象徴、openingは行動。stage8 fixtureで共存確認済み |
| レジで支払う | shop, convenience_store | どちらの場所でもレジは中心的要素 |
| 雲が流れる | sky, cloud | 空の文脈でも雲の文脈でも自然 |
| 駅で迷う | train, station | 駅は場所、電車は移動手段。共存は自然 |
| 荷物を整理する | bag, tidying | bagは荷物の物象徴、tidyingは整理行動 |
| 荷物整理 | bag, tidying | 同上（名詞形） |
| 改札を通る | station, ticket | stationは場所、ticketは通過条件 |
| 階段から落ちる | falling, stairs | 落ちる行動と階段という場所の自然な重複 |
| 崖 | falling, mountain | 崖は落下文脈にも山の風景文脈にも出る |
| 空が明るい | sky, rainbow | 虹が出ると空が明るくなる文脈として自然 |
| 見つからない物 | searching, losing | Stage11監査で共存を確認済み。losing（失くす行動）とsearching（探す行動）の交差点 |
| 玄関 | house, key | 玄関はhouseの一部かつkeyのアクセス文脈 |
| 港 | sea, ship | 海と船の交差点として自然 |
| 座席 | bus, chair | 「座席」は乗り物内でも家具でも使われる一般語 |
| 財布を拾う | wallet, picking_up | 物（wallet）と行動（picking_up）の自然な重複。stage9 fixture確認済み |
| 傘をさす | rain, umbrella | 雨文脈での傘の行動として自然 |
| 車内 | train, car | 電車車内にも自動車内にも「車内」は使われる |
| 制服 | school, clothes | 学校服としてschoolとclothes両方に自然 |
| 整理券 | bus, ticket | バスや病院の番号票としてticker類と共有 |
| 切符を失くして | ticket, losing | Stage10設計意図通り。losing専用fixtureで確認済み |
| 切符を渡す | ticket, handing_over | 物（ticket）と行動（handing_over）の自然な重複 |
| 待合室 | hospital, waiting | 病院の待合室は場所と状況の両象徴として自然 |
| 中身確認 | bag, box | カバンの中身も箱の中身も確認文脈で共通 |
| 駐車場 | car, parking_lot | 駐車場はcarとparking_lot両方に自然 |
| 電車に乗り遅れ | train, being_late | Stage1からの定番。遅延不安クラスタとして意図的 |
| 電車に乗り遅れる | train, being_late | 同上（動詞形） |
| 踏み外す | falling, stairs | 階段から踏み外して落ちる文脈。共存は自然 |
| 曇り空 | sky, cloud | 曇り空はskyにもcloudにも自然 |
| 箱を開ける | box, opening | 物（box）と行動（opening）の自然な重複 |
| 服を選ぶ | clothes, choosing | 服（clothes）を選ぶ（choosing）は自然な組み合わせ |
| 返信待ち | notification, email | 返信待ちはemail文脈でもnotification文脈でも自然 |
| 木々 | forest, tree | 木々は森の総称でも単体の木の複数形でも使われる |
| 目が合う | crush, eye | 視線が交わる文脈は恋愛（crush）でも目（eye）でも自然 |
| 友達と喧嘩 | friend, fighting | 友達との喧嘩はfriend（関係性）とfighting（行動）両方に自然 |
| 予定を忘れる | forgetting, calendar | Stage10追加のcalendarとforgettingの自然な重複 |
| 雷雨 | rain, thunder | 雷雨はrain+thunderの自然な組み合わせ語 |
| 流れ | water, river | 流れはwater（水の流れ）とriver（川の流れ）両方に自然 |

### 要見直し（3件）

次のbatch追加前にfixture文脈でのスコア優先を確認する対象です。batch-07前に状況が変わっていれば再分類します。

| term | motifs | 見直し観点 |
|---|---|---|
| 見つからない物 | searching, losing | 継続許容に分類しているが、batch-07でlosing/searching周辺motifが増えた場合は主役入れ替わりリスクを再確認する |
| 別れ | death, breakup | 死の別れと恋愛の別れで意味が異なる。現状は文脈phraseで分離できているが、強い単語なので注意を継続する |
| 同僚 | friend, workplace | 職場の人間関係はworkplaceが主役のはず。friendの対等な親しさとはニュアンスが違う。workplaceに寄せる余地がある |

### 削減候補（2件）

batch-07実装前に、片方のmotifからaliasを外すことを検討します。Stage11では記録のみで変更しません。

| term | motifs | 削減方針 |
|---|---|---|
| テスト | school, exam | テストはexam専用の方が意味が明確。schoolからの削除を次回検討 |
| 試験を受ける | school, exam | 同上。試験を受けるはexamの核心phraseのためschoolからは外す方向 |

### Stage11 summary

| 分類 | 件数 |
|---|---:|
| 継続許容 | 37 |
| 要見直し | 3 |
| 削減候補 | 2 |
| 合計 | 42 |

全42件の分類・許容条件追記完了。batch-07前の処置対象は削減候補2件（テスト・試験を受ける）です。

## Stage12 前半（batch-07a）新規 known-alias-overlap

Stage12前半（batch-07a）の実装で4件の新規 known-alias-overlap が発生しました。全件を継続許容として追加します。削減候補2件（テスト・試験を受ける）はStage12前処置で処置済みです。

### 継続許容 追加（4件）

| term | motifs | 許容条件 |
|---|---|---|
| 上司 | boss, workplace | bossは人物象徴、workplaceは場所象徴。どちらの文脈にも上司は自然に出る |
| 思い出 | past, childhood_home | 過去の思い出は幼い頃の家でも過去一般でも自然に使われる |
| 叫び声 | voice, screaming | 叫び声はscreaming（叫ぶ行動）の中核語であり、voice（声）の一種としても自然 |
| 砂浜 | sand, sea | 砂浜は砂の場所としても海辺の場所としても自然 |

### Stage12前半完了時点のサマリ

| 分類 | 件数 | 変化 |
|---|---:|---|
| 継続許容 | 41 | +4（上司・思い出・叫び声・砂浜） |
| 要見直し | 3 | 変化なし |
| 削減候補 | 0 | -2（テスト・試験を受けるをStage12前処置で削除済み） |
| **合計** | **44** | **+2** |

## Stage12 後半（batch-08）新規 known-alias-overlap

Stage12後半（batch-08）の実装で2件の新規 known-alias-overlap が発生しました。また、Stage10（batch-06）追加時に未記録だった3件とStage12前半で未記録だった1件を遡及追加します。全件継続許容として分類します。

### 継続許容 追加（6件）

| term | motifs | 許容条件 | 由来 |
|---|---|---|---|
| 痛み | blood, pain | 血と痛みは身体的苦痛として近縁。医療判断ではなく象徴として扱う | batch-08 |
| 暗がり | hiding, dark | 暗がりは隠れる場所としても暗闇の状態としても自然に使われる | batch-08 |
| 声が響く | voice, screaming | 叫び声文脈で声が響くのは両方に自然。voiceとscreamingの近縁として許容済み | Stage12前半（遡及） |
| 切符を失くして | ticket, losing | ticketの物象徴とlosingの紛失行動が交差する自然な重複 | Stage10（遡及） |
| 切符を渡す | ticket, handing_over | ticketの物象徴とhanding_overの手渡し行動が交差する自然な重複 | Stage10（遡及） |
| 予定を忘れる | forgetting, calendar | 予定を忘れることはforgetting（忘れる行動）にもcalendar（予定管理）にも自然 | Stage10（遡及） |

### Stage12完了時点のサマリ

| 分類 | 件数 | 変化 |
|---|---:|---|
| 継続許容 | 47 | +6（痛み・暗がり・声が響く・切符3件） |
| 要見直し | 3 | 変化なし |
| 削減候補 | 0 | 変化なし |
| **合計** | **50** | **+6** |

全47件のalias-duplicate警告を継続許容として分類済みです。残り5件はintentional-one-way-conflictとして別管理。warning-review-ok合計52件はすべて理由分類済みです。

## Stage14 audit

Stage14ではproduction motifを追加せず、140件時点の `warning-review-ok` 52件を再確認します。件数とカテゴリはStage12/13から変化なしです。

| category | count |
|---|---:|
| `known-alias-overlap` | 47 |
| `accepted-near-neighbor` | 0 |
| `intentional-one-way-conflict` | 1 |
| `generic-specific-review-ok` | 4 |
| `context-helper-review-ok` | 0 |

次期追加では、`next-20候補` のうち `玄関 / 同僚 / コメント / アプリ / 動画` などが既存motifと重なりやすい候補です。新規 `warning-review-ok` を許容する場合は、次の条件を満たすものに限定します。

- 既存fixtureを壊さない
- relationで意味差分を説明できる
- `known-alias-overlap` か `generic-specific-review-ok` など既存カテゴリに分類できる
- `warning-fix-soon` を188より増やさない
- docsに許容理由を追記する

## Stage15 result

Stage15で `batch-09` を追加した後、`warning-review-ok` は63件になりました。増加分は主に、生活空間・道具・情報受信motifの自然なalias重複です。

| category | count |
|---|---:|
| `known-alias-overlap` | 58 |
| `accepted-near-neighbor` | 0 |
| `intentional-one-way-conflict` | 1 |
| `generic-specific-review-ok` | 4 |
| `context-helper-review-ok` | 0 |

Stage15で新規追加された重複は、fixture / relationで説明できるものだけを許容します。特に `television / video / news / cinema`、`mobile_app / smartphone / notification / password`、`teacher / school / exam / boss` は、Stage16で引き続きレビュー対象にします。
