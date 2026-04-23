# Stage12 抽出監査メモ

Stage12は `batch-07a`（9件）と `batch-08`（10件）を追加し、120 → 139モチーフへ拡張したフェーズです。新規19モチーフの抽出精度と境界設計を確認しました。

## Baseline（Stage12完了時点）

| item | count |
|---|---:|
| registry motifs | 139 |
| error | 0 |
| warning-fix-soon | 188 |
| warning-review-ok | 52 |
| info | 305 |
| one-way relation total | 305 |
| one-way relation info | 300 |
| one-way relation warning | 5 |
| general cluster | 0 |
| stale-relation | 0 |

## 前処置: school alias 削減

batch-07実装前に `school` から `テスト` / `試験を受ける` を削除しました。これにより `exam` / `school` のconflict設計が機能し、試験文脈では `exam` が主役として正しく抽出されます。

| fixture | テキスト例 | 確認内容 | 結果 |
|---|---|---|---|
| `exam-school-conflict` | 学校の教室で試験を受ける夢 | examが主役、schoolが抑制される | ✓ examのみ出る |

## batch-07a: 身体・人物・記憶クラスタ（9件）

### 新規motif一覧

| motif | category | extractionPriority | 代表phrase |
|---|---|---:|---|
| hand | body | 82 | 手を差し伸べる / 手をつなぐ |
| foot | body | 81 | 足を踏み出す / 足元がふらつく |
| voice | body | 80 | 声をかけた / 声が届かない |
| horse | animal | 77 | 馬に乗って / 馬が走る |
| sand | element | 76 | 砂浜を歩く / 砂が流れる |
| embracing | action | 79 | 抱き合っていた / 抱きしめてもらった |
| news | object | 75 | 悪いニュースが来る / 速報が流れる |
| past | time | 76 | 昔の記憶が出てくる / 過去に戻る |
| boss | person | 80 | 上司に怒られる / 上司に評価される |

### 境界設計の固定

| fixture | テキスト例 | 確認内容 | 結果 |
|---|---|---|---|
| `stage12-voice-not-phone` | 声をかけたのに誰も答えない夢 | 声の行動文脈でphoneが出ないこと | ✓ phoneは出ない |
| `stage12-embracing-not-crying` | ゆっくり抱きしめてもらった夢 | 安心文脈でcryingが出ないこと | ✓ cryingは出ない |
| `stage12-news-not-sns` | ニュース番組で速報が流れる夢 | テレビニュース文脈でsnsが出ないこと | ✓ snsは出ない |
| `stage12-sand-not-water-only` | 砂漠を歩く夢で砂がさらさら | 砂漠文脈でwaterが出ないこと | ✓ waterは出ない |
| `stage12-boss-workplace-coexist` | 職場で上司に評価される夢 | boss + workplaceが共存すること | ✓ 両方出る |
| `stage12-past-childhood-home-coexist` | 昔のことを思い出す夢で幼い頃の家にいた | past + childhood_homeが共存すること | ✓ 両方出る |

### known-alias-overlap（batch-07a追加分）

4件を継続許容として追加しました（詳細は [warning-review-ok-policy.md](warning-review-ok-policy.md) に記録）。

| term | motifs | 許容条件 |
|---|---|---|
| 上司 | boss, workplace | bossは人物象徴、workplaceは場所象徴 |
| 思い出 | past, childhood_home | 過去と幼い頃の家の交差点として自然 |
| 叫び声 | voice, screaming | voiceの一種としても自然 |
| 砂浜 | sand, sea | 砂と海の共有地点として自然 |

### voice→phone 設計変更

当初conflictとして設計したvoice→phoneを neighborに変更しました。conflictにするとoneWayWarningRelationsが6件になりテストが失敗するためです。voiceとphoneは「声」というsecondaryKeyword共有が原因の過検出リスクがありましたが、phoneのsecondaryKeywordsから「声」を削除することで分離しました。

## batch-08: 場所・感覚・行動クラスタ（10件）

### 新規motif一覧

| motif | category | extractionPriority | 代表phrase |
|---|---|---:|---|
| child | person | 73 | 子供と遊ぶ / 幼い子を見る |
| stone | element | 72 | 石を拾う / 石が転がる |
| rooftop | place | 71 | 屋上から見る / ビルの屋上にいる |
| hot_spring | place | 69 | 温泉に入る / 露天風呂に入る |
| game | object | 68 | ゲームに負ける / ゲームをクリアする |
| earphone | object | 67 | イヤホンをつける / 音楽を聴く |
| dark | element | 76 | 暗闇の中にいる / 真っ暗になる |
| pain | body | 74 | 痛みを感じる / 体が痛い |
| sleep | action | 70 | 夢の中で眠りに落ちる / 眠れない夢 |
| breaking | action | 75 | 物が壊れる / ガラスが割れる |

### 境界設計の固定

| fixture | テキスト例 | 確認内容 | 結果 |
|---|---|---|---|
| `stage12b-child-not-baby` | 幼い子を見守る夢 | 幼い子はchildが主役、babyは出ないこと | ✓ babyは出ない |
| `stage12b-hot-spring-not-water-only` | 露天風呂に入る夢 | hot_springが主役、waterが出ないこと | ✓ waterは出ない |
| `stage12b-breaking-not-injury-only` | ガラスが割れる夢 | 物の破壊文脈でinjuryが出ないこと | ✓ injuryは出ない |
| `stage12b-stone-river-coexist` | 川岸に大きな石がある夢 | stone + riverが共存すること | ✓ 両方出る |
| `stage12b-rooftop-sky-coexist` | 屋上に出ると夜空が広がっていた夢 | rooftop + skyが共存すること | ✓ 両方出る |
| `stage12b-dark-moon-coexist` | 暗がりの中で月明かりが見える夢 | dark + moonが共存すること | ✓ 両方出る |
| `stage12b-pain-injury-coexist` | 怪我をして痛みを感じる夢 | pain + injuryが共存すること | ✓ 両方出る |

## テスト結果サマリ

| item | count |
|---|---:|
| 全テスト | 367 |
| 通過 | 367 |
| 失敗 | 0 |
| audit fixture 総数 | 60+ |
| Stage12追加fixture | 33 |

## 未対応として固定した表現

以下は辞書設計の範囲外として意図的に未対応にしています。

| テキスト | 対象motif | 未対応理由 |
|---|---|---|
| 気持ちだけが先走る夢 | running | 比喩的な先走る表現 |
| 心を洗い流したい夢 | cleaning | 比喩的な浄化表現 |
| どこだか分からなくなってしまった夢 | lost | 迂回的な迷子表現 |
| 大事なものがなくなっていた夢 | losing | 状態変化（なくなる）と能動的紛失（失くす）は別義 |
| 消えた記憶を追いかける夢 | searching | 抽象的探索表現 |
| 扉が開きっぱなしの夢 | opening | 状態表現（開きっぱなし）と行動表現（開ける）は別義 |
| ど忘れしていた夢 | forgetting | 口語的言い換え |
