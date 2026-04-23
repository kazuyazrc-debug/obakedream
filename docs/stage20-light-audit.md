# Stage20 200モチーフ軽監査メモ

Stage20は、Stage19で200モチーフへ到達したあと、すぐに200 -> 220の追加へ進まず、relation / warning / fixture / audit の説明可能性を整える軽監査フェーズです。新規motif追加、`data/batches` の実装変更、Next.js UI変更、DB化、AI API導入、fuzzy search / N-gram / 本格形態素解析、relation自動双方向化は行いません。

## 前提確認

- `AGENTS.md` を確認済み。
- `node_modules/next/dist/docs/` を確認済み。
  - `node_modules/next/dist/docs/index.md`
- Stage20は Next.js UI 実装ではなく、200モチーフ時点の relation / warning / fixture / audit の監査フェーズとして扱う。
- そのため、Next.js 固有変更、routing変更、Server Component / Client Component の変更は今回の対象外。
- Stage19は実装完了済みで、test / lint / build は通過済み。
- `comment -> sns` の直接 neighbor 回避を維持する。
- `coworker -> workplace` の直接 neighbor 回避を維持する。

## 現在値

```text
registry total: 200
relation total: 487

by cluster:
water-weather: 56
home-place: 102
movement: 51
communication: 59
relationship: 53
body-appearance: 50
emotion-action: 69
nature-sky: 26
object-record: 21
care-risk: 0
general: 0

by kind:
intentional-one-way: 10
should-be-reciprocal: 266
should-be-conflict: 2
generic-specific: 132
context-helper: 77
stale-relation: 0

general count: 0
```

validator summary:

```text
error: 0
warning-fix-soon: 188
warning-review-ok: 88
info: 499
```

## Stage20の目的

- `home-place = 102` の肥大理由と、次回追加で増やしすぎないための境界を整理する。
- `communication = 59` の主役差を再確認する。
- `generic-specific = 132` の増加理由をcluster別に説明できるようにする。
- `emotion-action = 69` の近縁行動を整理する。
- `object-record = 21` と `body-appearance = 50` のStage19追加分が説明可能な分類に収まっているか確認する。
- fixture / audit / test の不足観点を列挙する。
- next-20候補を `next-addition-ready / needs-audit / hold` の3分類で再棚卸しする。

## やること / やらないこと

やること:

- Stage20軽監査メモを作成する。
- validator / warning / relation の管理方針を整理する。
- fixture / audit / test の不足観点を整理する。
- next-20候補の再棚卸し方針を作る。
- READMEに残す計画メモ案を作る。

やらないこと:

- 新規motif追加。
- `data/batches` の実装変更。
- Stage21向けの候補を確定実装すること。
- UI全面改修。
- DB化。
- AI API導入。
- fuzzy search / N-gram / 本格形態素解析の導入。
- Next.js 固有実装変更。
- relation自動双方向化。

## 軽監査の優先順位

| priority | target | reason |
|:---:|---|---|
| 1 | `home-place = 102` | 最大clusterで、場所そのものと場所に隣接する物・行動が混ざりやすい |
| 2 | `communication = 59` | 新規communication候補なしでもrelation経由で増えており、主役差の再確認が必要 |
| 3 | `generic-specific = 132` | 件数が大きく、便利な上位/下位接続として使われすぎていないか確認する |
| 4 | `emotion-action = 69` | `concealing / hiding / tears / crying` の近縁が濃い |
| 5 | `object-record = 21` | Stage19で補強したため、物・記録・保管・贈与の境界を見たい |
| 6 | `body-appearance = 50` | `face / ear / mouth / breath` がcommunicationやemotionに寄りすぎないか確認する |
| 7 | `coworker / workplace / boss / friend / classmate` | 職場・学校・友人関係が混ざりやすい |

重点motif group:

- `comment / streaming / sns / chat / notification / video`
- `coworker / workplace / boss / friend / classmate`
- `concealing / hiding / tears / crying`
- `ear / mouth / breath`
- Stage19追加分20件: `cup / candle / blanket / envelope / leaf / wave / ice / face / writing / dancing / scissors / toy / grass / ear / mouth / breath / swimming / packing / bicycle / classmate`

## warning / relation 管理方針

warning管理:

- `warning-fix-soon <= 188` を維持する。
- `warning-review-ok = 88` は件数そのものを減らすより、許容理由を説明できることを優先する。
- `warning-review-ok` は次の理由カテゴリへ寄せて整理する。
  - aliasが短いが、phrase / block / fixtureで主役を説明できる。
  - generic-specificだが、上位/下位の粒度差が明確。
  - 近縁motifがあるが、抽出fixtureで主役差を確認できる。
  - relationが多いが、cluster分類が説明可能。
- 理由カテゴリに入らない警告は `needs-audit` に回し、次回追加前の確認対象にする。

relation管理:

- `relation total` の増減自体は主目標にしない。
- 全件が分類済みで、`general count = 0` と `stale-relation = 0` を維持できているかを重視する。
- `generic-specific = 132` は、cluster別に「上位概念」「下位概念」「近縁補助」が混ざっていないか確認する。
- `comment -> sns` の直接neighbor回避を維持し、`comment` は反応・残された言葉として扱う。
- `coworker -> workplace` の直接neighbor回避を維持し、`coworker` は人物関係、`workplace` は場として扱う。
- `classmate` は `school / friend / teacher` との接続を中心にし、`coworker / workplace` 側へ寄せない。

## 優先対象別の監査結果

### home-place = 102

Stage19ではhome-place候補を追加していないが、relation経由で `home-place = 102` まで増えている。Stage20では新規場所候補を増やすより、場所そのものと場所に隣接する物・行動を分ける。

監査方針:

- `cup / blanket` は生活空間に出る物だが、場所ではなくobjectとして扱う。
- `bicycle / packing / travel / road` は移動文脈であり、`transit-place` の実装clusterにはしない。
- `door / entrance / house / childhood_home / storage_room` は次回も境界監査対象に残す。
- `bedroom / bathroom / meeting room` など場所系候補は原則 `needs-audit` 以上に置き、前半候補へ寄せない。

### communication = 59

Stage19ではcommunication候補を追加していないが、`ear / mouth / breath` など身体・感覚motifがrelation経由でcommunication周辺に近づく。Stage20では、通信系の主役差を崩さないことを優先する。

役割差:

| motif | primary role | avoid |
|---|---|---|
| `sns` | 公開空間・投稿場 | `comment` の直接上位概念にしすぎない |
| `chat` | 個別会話 | 公開反応や動画視聴へ広げすぎない |
| `comment` | 反応・残された言葉 | `sns` への直接neighbor化を避ける |
| `streaming` | 配信中の場・リアルタイム性 | `video` と同一視しない |
| `notification` | 反応待ち・知らせ | 内容そのものと混ぜない |
| `video` | 視覚コンテンツ | 配信場やSNS空間と混ぜすぎない |
| `ear / mouth / breath` | 身体・感覚 | communication本体にしない |

### generic-specific = 132

Stage20では、件数増加を問題視するのではなく、分類の説明可能性を確認する。

優先レビュー順:

1. `home-place` 内の generic-specific
2. `communication` 内の generic-specific
3. `emotion-action` 内の generic-specific
4. `relationship` 内の generic-specific
5. `body-appearance / object-record` 内の generic-specific

許容条件:

- 上位/下位の粒度差が明確。
- fixtureで主役差を確認できる。
- warningを消すためだけの関係ではない。
- 追加候補の採用理由としてdocsに残せる。

### emotion-action = 69

`concealing / hiding` と `tears / crying` は、Stage20で主役差を再確認する。

| pair | boundary |
|---|---|
| `tears / crying` | `tears` は身体的に出るもの・感情の痕跡、`crying` は泣く行動 |
| `concealing / hiding` | `concealing` は何かを隠す行為、`hiding` は自分や存在が隠れる状態 |
| `writing / dancing / packing` | Stage19追加の行動群。communicationやmovementへ寄せすぎず、行動として扱う |

### object-record = 21

Stage19で `cup / candle / blanket / envelope / scissors / toy` を追加した。object-recordはまだ薄めだが、物なら何でも入れるのではなく、夢の中で役割が立つ物を優先する。

監査観点:

- `cup`: 水や台所に寄るが、飲む器として扱う。
- `candle`: 火・暗さ・神社に寄るが、光源として扱う。
- `blanket`: house / sleepに寄るが、場所ではなく安心・保温の物として扱う。
- `envelope`: letter / giftに寄るが、記録・中身の不明さとして扱う。
- `scissors`: hair / clothes / breakingに寄るため、切る行為や危険性へ寄せすぎない。
- `toy`: child / game / giftに寄るが、遊び・記憶の物として扱う。

### body-appearance = 50

Stage19で `face / ear / mouth / breath` を追加した。通信・感情・医療断定に寄りすぎないよう監査する。

監査観点:

- `face`: 自己像・表情。`mask / makeup / mirror` と近いが、診断的に扱わない。
- `ear`: 聞く器官。`voice / music` に近いが、communication本体にはしない。
- `mouth`: 発話・食べる入口。`comment / chat` と混ぜない。
- `breath`: 身体的緊張。医療断定や不安診断へ寄せない。

## fixture / audit / test の不足観点

Stage20ではテスト実装は行わず、次回追加前に必要な不足観点を整理する。

| id draft | purpose |
|---|---|
| `stage20-comment-streaming-sns-chat-boundary` | `comment / streaming / sns / chat` の主役差を確認する |
| `stage20-notification-video-streaming-boundary` | `notification / video / streaming` を知らせ・内容・場で分ける |
| `stage20-ear-mouth-breath-not-communication` | `ear / mouth / breath` がcommunication本体に寄りすぎないことを確認する |
| `stage20-classmate-coworker-workplace-boundary` | `classmate` が `coworker / workplace` 側へ寄りすぎないことを確認する |
| `stage20-boss-friend-classmate-boundary` | 評価者・友人・同級生の関係差を確認する |
| `stage20-tears-crying-boundary` | 涙と泣く行動の主役差を確認する |
| `stage20-concealing-hiding-boundary` | 隠す行為と隠れる状態の主役差を確認する |
| `stage20-object-record-home-place-boundary` | `cup / blanket / envelope` を場所ではなく物として扱う |
| `stage20-face-mask-makeup-body-boundary` | 顔・マスク・化粧をbody-appearance内で説明する |
| `stage20-generic-specific-cluster-snapshot` | `generic-specific` をcluster別にスナップショット化する |

## next-20候補の3分類

Stage20では候補の分類まで行い、200 -> 220の実装はStage21以降に回す。

### next-addition-ready

条件:

- `home-place / communication / relationship` を過度に増やさない。
- relationが1-2件程度で説明できる。
- aliasが短すぎず、1文字aliasに依存しない。
- fixture化しやすい。
- `warning-fix-soon <= 188` を維持しやすい。

候補例:

| candidate | reason |
|---|---|
| `seed` | `leaf / tree / flower` と接続しやすく、nature-sky補強として説明しやすい |
| `stone` | `road / mountain / river` と接続でき、場所ではなく物・自然要素として扱える |
| `soap` | `cleaning / bathroom` に近いが、物として扱えばhome-place増加を抑えられる |
| `pillow` | `sleep / blanket` と近いが、寝室そのものではなく物として扱える |
| `rope` | `tying / falling / climbing` 周辺の物として扱えるが、高刺激に寄せない文面が必要 |
| `stairs` | `falling / building / school` と接続しやすいが、場所ではなく上下移動として扱うなら候補 |
| `painting` | `wall / face / memory` と接続でき、記録・自己像のobjectとして扱える |

### needs-audit

条件:

- 近縁motifが濃い。
- relationが3件以上へ膨らみやすい。
- `generic-specific` に落ちやすい。
- fixtureで主役差を確認してから採用したい。

候補例:

| candidate | reason |
|---|---|
| `message` | `chat / email / comment / notification` と近く、communicationの主役差を崩しやすい |
| `meeting` | `coworker / boss / workplace / classmate` と絡み、relationshipと場所が混ざりやすい |
| `bedroom` | home-placeを増やしやすく、`sleep / blanket / house` と近い |
| `bathroom` | `toilet / water / cleaning / soap` と近く、home-place増加につながる |
| `customer` | `shop / restaurant / coworker` にまたがり、人物と場所の境界が広い |
| `medicine` | 医療的・ケア文脈が強く、非診断block設計が先に必要 |
| `knife` | 高刺激・切断文脈が強く、`scissors` よりトーン管理が難しい |
| `night` | `dark / moon / sleep` と近く、既存motifで補助可能か確認が必要 |

### hold

条件:

- 既存の過密clusterをさらに押し上げる。
- short aliasやweak-only誤検出のリスクが高い。
- 高刺激・診断・攻撃性などblock設計が先に必要。
- 検索方式変更や新規分類追加が必要になる想定を含む。

候補例:

| candidate | reason |
|---|---|
| `message_app` | `chat / sns / notification / mobile_app` と過密で、communicationの粒度を崩す |
| `office_room` | `workplace / boss / coworker / meeting` と近く、職場系が前半に寄りすぎる |
| `hospital_room` | `hospital / bed / medicine` と近く、医療断定リスクが強い |
| `weapon` | 高刺激の総称で、generic-specificに落ちやすい |
| `secret` | `concealing / hiding / password / envelope` と広く、行動と内容が混ざる |
| `cry_face` | `tears / crying / face` の合成で足り、主役差を壊しやすい |
| `mirror_room` | `mirror / room` の合成で足り、home-placeを増やす理由が弱い |

## READMEに残す計画メモ案

READMEへ追記する場合は、次の短いメモに留める。

```md
## Stage20

Stage20では新規motif追加に入らず、200モチーフ時点の軽監査を行っています。

- 監査対象: `home-place = 102`、`communication = 59`、`generic-specific = 132`、`emotion-action = 69`
- `object-record = 21` と `body-appearance = 50` もStage19追加分を中心に確認
- `comment / streaming / sns / chat / notification / video` の主役差を維持
- `coworker / workplace / boss / friend / classmate` の境界を確認
- `tears / crying`、`concealing / hiding` の主役差をfixture候補として整理
- next-20候補は `next-addition-ready / needs-audit / hold` の3分類で再棚卸し
- `warning-fix-soon <= 188`、`general count = 0`、`stale-relation = 0` を維持
```

## Stage21へ進む判断条件

Stage21で200 -> 220の追加に進む前に、次を満たす。

- `warning-fix-soon <= 188` を維持できる候補だけを採用する。
- `general count = 0` と `stale-relation = 0` を維持できる。
- `home-place / communication / relationship` 候補を前半へ寄せすぎない。
- communication候補は0-1件目安を維持する。
- relationship候補は1-2件目安を維持し、`coworker / boss / friend / workplace` 周辺を前半へ寄せすぎない。
- `tears / crying`、`concealing / hiding`、`ear / mouth / breath`、`classmate / coworker / workplace` のfixture方針が決まっている。
- next-20候補が `next-addition-ready / needs-audit / hold` に分類済み。
- relation total の増減ではなく、全件分類済みか・説明可能かをレビューできる。

## 完了条件

- Stage20軽監査メモがdocsに残っている。
- 固定形式の数値出力が記録されている。
- warning / relation 管理方針が説明可能になっている。
- fixture / audit / test の不足観点が列挙されている。
- next-20候補が3分類で再棚卸しされている。
- READMEに残す計画メモ案が用意されている。
- Stage21へ進む判断条件が明文化されている。
