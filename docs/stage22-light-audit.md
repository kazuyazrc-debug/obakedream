# Stage22 220モチーフ軽監査メモ

Stage22は、Stage21で220モチーフへ到達したあと、すぐに220 -> 240の追加へ進まず、relation / warning / fixture / audit の説明可能性を整える軽監査フェーズです。新規motif追加、`data/batches` の実装変更、Next.js UI変更、DB化、AI API導入、fuzzy search / N-gram / 本格形態素解析、relation自動双方向化は行いません。

## 前提確認

- `AGENTS.md` を確認済み。
- `node_modules/next/dist/docs/` を確認済み。
  - `node_modules/next/dist/docs/index.md`
- Stage22は Next.js UI 実装ではなく、220モチーフ時点の relation / warning / fixture / audit の監査フェーズとして扱う。
- そのため、Next.js 固有変更、routing変更、Server Component / Client Component の変更は今回の対象外。
- Stage21は実装完了済みで、test / lint / build は通過済み。
- `comment -> sns` の直接 neighbor 回避を維持する。
- `coworker -> workplace` の直接 neighbor 回避を維持する。
- `scar` は非診断・非断定を維持する。
- `home-place / communication / relationship` は次回追加でも抑制枠として扱う。

## 現在値

```text
registry total: 220
relation total: 543

by cluster:
water-weather: 64
home-place: 106
movement: 53
communication: 59
relationship: 53
body-appearance: 71
emotion-action: 83
nature-sky: 29
object-record: 25
care-risk: 0
general: 0

by kind:
intentional-one-way: 10
should-be-reciprocal: 258
should-be-conflict: 2
generic-specific: 196
context-helper: 77
stale-relation: 0

general count: 0
```

validator summary:

```text
error: 0
warning-fix-soon: 188
warning-review-ok: 96
info: 565
```

## Stage22の目的

- `generic-specific = 196` の増加理由をcluster別に説明できる状態へ寄せる。
- `home-place = 106` の肥大化を、場所そのものと物・行動・記憶文脈に分けて監査する。
- `body-appearance = 71` の非診断・非断定境界を再確認する。
- `emotion-action = 83` の近縁行動の主役差を整理する。
- `communication = 59` は件数を増やしていないが、`singing / voice / mouth / breath / music` 経由で主役差が崩れないか確認する。
- fixture / audit / test の不足観点を列挙する。
- next-20候補を `next-addition-ready / needs-audit / hold` の3分類で再棚卸しする。

## やること / やらないこと

やること:

- Stage22軽監査メモを作成する。
- validator / warning / relation の管理方針を整理する。
- fixture / audit / test の不足観点を整理する。
- next-20候補の再棚卸し方針を作る。
- READMEに残す計画メモ案を作る。

やらないこと:

- 新規motif追加。
- `data/batches` の実装変更。
- Stage23向けの候補を確定実装すること。
- UI全面改修。
- DB化。
- AI API導入。
- fuzzy search / N-gram / 本格形態素解析の導入。
- Next.js 固有実装変更。
- relation自動双方向化。

## 軽監査の優先順位

| priority | target | reason |
|:---:|---|---|
| 1 | `generic-specific = 196` | Stage21で大きく増えたため、cluster別に説明可能か最優先で確認する |
| 2 | `home-place = 106` | 新規home-place候補なしでも増えており、場所と物・行動の境界整理が必要 |
| 3 | `body-appearance = 71` | `forehead / back / scar` 追加により、非診断・非断定の継続確認が必要 |
| 4 | `emotion-action = 83` | `folding / carrying / singing / reading / washing / tying` の主役差を確認する |
| 5 | `communication = 59` | `singing` が `voice / mouth / breath / music` 経由でcommunication本体化しないか確認する |
| 6 | `object-record = 25` | Stage21で補強したobjectが場所や行動に寄りすぎないか確認する |

重点motif group:

- `soap / towel / washing`
- `singing / voice / mouth / breath / music`
- `scar / injury / past`
- `concealing / hiding / tying / rope`
- `tears / crying / scar / face`
- Stage21追加分20件: `seed / soap / pillow / rope / painting / button / towel / coin / folding / climbing / brush / scarf / forehead / back / scar / carrying / singing / reading / washing / tying`

## warning / relation 管理方針

warning管理:

- `warning-fix-soon <= 188` を維持する。
- `warning-review-ok = 96` は件数そのものではなく、許容理由が説明可能かを重視する。
- `warning-review-ok` は次の理由カテゴリへ寄せて整理する。
  - generic-specificだが、上位/下位や文脈補助の粒度差が明確。
  - 近縁motifがあるが、fixtureで主役差を確認できる。
  - alias overlapがあるが、強語・phraseで主役が安定する。
  - one-way relationだが、片方向の意味流れが説明できる。
- `scar` 周辺は、医療断定や現実の怪我判断に寄る表現を `warning-fix-soon` 相当のリスクとして扱う。

relation管理:

- `relation total` の増減自体は主目標にしない。
- 全件が分類済みで、`general count = 0` と `stale-relation = 0` を維持できているかを重視する。
- `generic-specific = 196` はcluster別に「上位概念」「下位概念」「文脈補助」「近縁境界」を分けて確認する。
- `comment -> sns` の直接neighbor回避を維持し、communication系の過密化を避ける。
- `coworker -> workplace` の直接neighbor回避を維持し、人物関係と場所を混ぜない。
- `scar -> injury` は怪我そのものではなく、過去に残った印象として説明する。

## 優先対象別の監査結果

### generic-specific = 196

Stage21で `generic-specific` は132から196へ増加した。これはStage21追加分を明示的に分類対象へ入れた影響が大きい。Stage22では件数を問題にするのではなく、説明可能な分類として維持できるかを確認する。

優先レビュー順:

1. `body-appearance` 内の generic-specific
2. `emotion-action` 内の generic-specific
3. `home-place` と object/action の境界にある generic-specific
4. `communication` に近づく generic-specific
5. `object-record` 内の generic-specific

許容条件:

- 上位/下位の粒度差が明確。
- relationで何を補助しているか説明できる。
- fixtureで主役差を確認できる。
- warningを消すためだけのrelationではない。

### home-place = 106

Stage21ではhome-place候補を採用していないが、`soap / towel / washing / pillow` など生活空間に出やすいmotifがrelation経由でhome-placeに近づく。Stage22では、場所そのものと物・行動を分ける。

監査方針:

- `soap / towel / washing` はbathroomではなく、洗う道具・整える行動として扱う。
- `pillow` はbedroomではなく、休息のobjectとして扱う。
- `rope / button / coin / painting` は部屋に出ても場所候補にしない。
- next-20では `bedroom / bathroom / office_room / meeting_room` 系を前半に置かない。

### body-appearance = 71

Stage21で `forehead / back / scar` が加わり、body-appearanceは71まで増えた。診断・医療・体調判断へ寄せず、夢の象徴として扱う。

監査方針:

- `forehead`: 考えすぎや見られ方の象徴。体調判断にしない。
- `back`: 見えない負担や支えられ方の象徴。痛みの診断にしない。
- `scar`: 過去に残った印象。`injury` そのものではなく、非診断・非断定を維持する。
- `face / scar / tears / crying` の混線をfixture候補として残す。

### emotion-action = 83

Stage21で `folding / carrying / singing / reading / washing / tying` が加わった。行動の意味幅が広がったため、近縁行動を主役差で整理する。

監査方針:

- `folding`: 整理してしまう行動。`tidying` とは手元の具体動作として分ける。
- `carrying`: 運ぶ行動。`packing` とは準備済みのものを移す行動として分ける。
- `singing`: 表現行動。communication本体ではない。
- `reading`: 受け取って理解する行動。`writing` とは出す/受け取るの差で分ける。
- `washing`: 洗って整える行動。home-placeやbathroom候補にしない。
- `tying`: 結ぶ行動。`concealing / hiding` に寄せない。

### communication = 59

Stage21ではcommunication候補を採用していない。`singing` は `mouth / breath / dancing` と接続しているが、`voice / music` に近いためcommunication本体化しないよう監査する。

役割差:

| motif | primary role | avoid |
|---|---|---|
| `singing` | 感情表現のaction | `chat / comment / sns` と同じ通信行為にしない |
| `voice` | 声そのもの・伝わる音 | 歌う行動と同一視しない |
| `mouth` | 身体器官・言葉の入口 | communication cluster本体にしない |
| `breath` | 身体のペース・緊張 | 発話や歌唱だけに寄せない |
| `music` | 音・リズム・場の雰囲気 | `singing` の上位受け皿にしすぎない |

### object-record = 25

Stage21で `soap / pillow / rope / painting / button / towel / coin / brush / scarf` が追加され、object-recordは25になった。物が場所や行動の代替にならないよう確認する。

監査方針:

- `soap / towel`: 洗面所・bathroomではなく、整えるためのobject。
- `pillow`: bedroomではなく、休むためのobject。
- `rope / button / coin`: 操作・価値・支えのobject。
- `brush / scarf`: body-appearanceを補助するobject。

## fixture / audit / test の不足観点

Stage22ではテスト実装は行わず、次回追加前に必要な不足観点を整理する。

| id draft | purpose |
|---|---|
| `stage22-generic-specific-cluster-snapshot` | `generic-specific = 196` をcluster別に固定形式で確認する |
| `stage22-soap-towel-washing-not-bathroom` | `soap / towel / washing` がbathroomやhome-placeに寄りすぎないことを確認する |
| `stage22-pillow-not-bedroom` | `pillow` をbedroomではなく休息objectとして扱う |
| `stage22-singing-not-communication` | `singing` が `chat / comment / sns` に寄らないことを確認する |
| `stage22-singing-voice-mouth-breath-music` | `singing / voice / mouth / breath / music` の主役差を確認する |
| `stage22-scar-injury-past-nondiagnostic` | `scar / injury / past` の非診断・非断定を確認する |
| `stage22-scar-face-tears-crying-boundary` | `scar / face` と `tears / crying` の混線を確認する |
| `stage22-tying-rope-not-concealing-hiding` | `tying / rope` が `concealing / hiding` に寄りすぎないことを確認する |
| `stage22-reading-writing-boundary` | `reading` と `writing` を受け取る/出す行動として分ける |
| `stage22-carrying-packing-boundary` | `carrying` と `packing` を運ぶ/準備する行動として分ける |

## next-20候補の3分類

Stage22では候補の分類まで行い、220 -> 240の実装はStage23以降に回す。

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
| `feather` | `bird / sky / wind` と接続しやすく、軽い自然objectとして説明しやすい |
| `ribbon` | `clothes / gift / tying` と接続でき、relationship候補にせずobjectとして扱える |
| `lantern` | `candle / dark / festival` と接続しやすく、光源objectとして説明できる |
| `drawer` | `desk / box / tidying` と接続でき、場所ではなく収納objectとして扱える |
| `thread` | `tying / clothes / rope` と接続できるが、短語aliasに頼らず扱える |
| `stamp` | `letter / envelope / past` と接続でき、記録objectとして扱える |
| `clay` | `hand / making_mistake / child` と接続しやすく、作る前の素材として説明できる |
| `shell` | `sea / sand / memory` と接続しやすく、自然objectとして扱える |

### needs-audit

条件:

- 既存motifと近い。
- relationが3件以上へ膨らみやすい。
- `generic-specific` に落ちやすい。
- fixtureで主役差を確認してから採用したい。

候補例:

| candidate | reason |
|---|---|
| `blank_page` | `notebook / writing / reading` と近く、記録と空白の主役差が必要 |
| `necklace` | `ring / clothes / gift` と近く、relationshipへ寄りすぎない確認が必要 |
| `shoulder` | `back / hand / carrying` と近く、body-appearance肥大化に注意 |
| `whispering` | `voice / mouth / chat` に近く、communication本体化しやすい |
| `wiping` | `towel / cleaning / washing` と近く、行動差のfixtureが必要 |
| `wrapping` | `gift / blanket / concealing` と近く、隠す行動へ寄りやすい |
| `unpacking` | `packing / bag / travel` と近く、準備と解除の差分確認が必要 |
| `knot` | `tying / rope / thread` と近く、object/action境界確認が必要 |

### hold

条件:

- 既存の過密clusterをさらに押し上げる。
- short aliasやweak-only誤検出のリスクが高い。
- 高刺激・診断・攻撃性などblock設計が先に必要。
- 検索方式変更や新規分類追加が必要になる想定を含む。

候補例:

| candidate | reason |
|---|---|
| `bedroom` | `pillow / sleep / blanket / house` と近く、home-placeを増やす |
| `bathroom` | `soap / towel / washing / toilet` と近く、home-placeを増やす |
| `message` | `chat / comment / notification / email` と近く、communicationを過密化する |
| `meeting` | `coworker / boss / workplace / classmate` と絡み、relationshipと場所が混ざる |
| `office_room` | `workplace / boss / coworker` と近く、職場系を前半へ寄せすぎる |
| `medicine` | 医療的・ケア文脈が強く、非診断block設計が先に必要 |
| `wound` | `scar / injury / blood` と近く、診断・怪我断定へ寄りやすい |
| `secret` | `concealing / hiding / password / envelope` と広く、行動と内容が混ざる |
| `message_app` | `chat / sns / notification / mobile_app` と過密で、communicationの粒度を崩す |

## READMEに残す計画メモ案

READMEへ追記する場合は、次の短いメモに留める。

```md
## Stage22

Stage22では新規motif追加に入らず、220モチーフ時点の軽監査を行っています。

- 監査対象: `generic-specific = 196`、`home-place = 106`、`body-appearance = 71`、`emotion-action = 83`
- `communication = 59` と `object-record = 25` もStage21追加分を中心に確認
- `soap / towel / washing` がbathroomやhome-placeへ寄りすぎないか監査
- `singing / voice / mouth / breath / music` の主役差を維持
- `scar / injury / past` は非診断・非断定を継続
- `concealing / hiding / tying / rope`、`tears / crying / scar / face` の混線をfixture候補として整理
- next-20候補は `next-addition-ready / needs-audit / hold` の3分類で再棚卸し
- `warning-fix-soon <= 188`、`general count = 0`、`stale-relation = 0` を維持
```

## Stage23へ進む判断条件

Stage23で220 -> 240の追加に進む前に、次を満たす。

- `generic-specific = 196` のcluster別許容理由が説明できる。
- `warning-fix-soon <= 188` を維持できる候補だけを採用する。
- `general count = 0` と `stale-relation = 0` を維持できる。
- `home-place / communication / relationship` 候補を前半へ寄せすぎない。
- `soap / towel / washing`、`singing / voice / mouth / breath / music`、`scar / injury / past` のfixture方針が決まっている。
- `scar` は非診断・非断定をblock / question / alias / fixtureで継続する。
- next-20候補が `next-addition-ready / needs-audit / hold` に分類済み。
- relation total の増減ではなく、全件分類済みか・説明可能かをレビューできる。

## 完了条件

- Stage22軽監査メモがdocsに残っている。
- 固定形式の数値出力が記録されている。
- warning / relation 管理方針が説明可能になっている。
- fixture / audit / test の不足観点が列挙されている。
- next-20候補が3分類で再棚卸しされている。
- READMEに残す計画メモ案が用意されている。
- Stage23へ進む判断条件が明文化されている。
