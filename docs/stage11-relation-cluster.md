# Stage11 Relation クラスタマップ

Stage11では、Stage10完了後の248件の one-way relation を実際に計測し、クラスタ別・reviewKind別に整理します。目的は、batch-07追加前に関係の説明可能性を確保することです。

## Baseline（Stage11計測値）

| item | count |
|---|---:|
| total one-way relations | 248 |
| one-way info relations | 243 |
| one-way warning relations | 5 |

## クラスタ別分布

| cluster | count | Stage7比 | 増加要因 |
|---|---:|---|---|
| `home-place` | 56 | +41 | restaurant / cafe / convenience_store / cinema / window / shop / library 追加によるplace系のrelaion増 |
| `movement` | 39 | +16 | map / ticket / crossroad / road 追加 |
| `water-weather` | 30 | +10 | cloud / rainbow 追加 |
| `emotion-action` | 27 | +20 | running / cleaning / tidying / losing / handing_over 追加 |
| `communication` | 24 | +11 | charging / notification 追加 |
| `relationship` | 21 | +3 | 既存motifのrelation精緻化 |
| `body-appearance` | 18 | +5 | 既存motifのrelation追加 |
| `object-record` | 16 | +11 | desk / chair / calendar / wallet / bag 追加 |
| `nature-sky` | 14 | +4 | insect / cloud / rainbow 追加（water-weatherと共有） |
| `care-risk` | 0 | 0 | Stage11では追加なし |
| `general` | 3 | 0 | 理由付きで3件を保持（下記参照） |
| **合計** | **248** | **+121** | |

`general` 枠が3件で計画の上限（5件以下）を満たしています。

## general 枠の内訳と理由

`general` に残っている3件は以下の理由で他のクラスタに分類されていません。

| source | target | 理由 |
|---|---|---|
| `calendar` | `being_late` | calendarは`object-record`クラスタだが、being_lateは`emotion-action`クラスタ。どちらのクラスタ判定にも入らない中間的な組み合わせのため`general`に残す。batch-07で時間系motifが増えた場合に再検討 |
| `insect` | `being_chased` | insectは`nature-sky`クラスタだが、being_chasedは`emotion-action`クラスタ。虫に追われるという夢文脈は特殊で、どちらにも帰属しにくいため`general`に残す |
| `charging` | `recovery` | chargingは`communication`クラスタだが、recoveryはStage11時点で未登録motifのため参照先が解決できない。batch-07でrecovery系motifが追加された場合に再分類 |

## reviewKind別分布

| reviewKind | count | 説明 |
|---|---:|---|
| `should-be-reciprocal` | 91 | 近縁motif同士で双方向neighbor化の余地がある |
| `context-helper` | 79 | 片方が文脈補助として働くため片方向維持が適切 |
| `generic-specific` | 65 | 汎用motifと具体motifの優先関係 |
| `intentional-one-way` | 11 | 意味の流れが片方向で成立するため維持 |
| `should-be-conflict` | 2 | 抑制関係にすべきか要確認 |
| `stale-relation` | 0 | 削除候補なし |
| **合計** | **248** | |

## 優先クラスタ別 詳細

### home-place（56件）

Stage10の `restaurant / cafe / convenience_store / cinema / window` 追加で大幅増。  
代表的な one-way relation:

| source | target | reviewKind |
|---|---|---|
| `restaurant` | `shop` | `should-be-reciprocal` |
| `cafe` | `restaurant` | `should-be-reciprocal` |
| `convenience_store` | `shop` | `should-be-reciprocal` |
| `cinema` | `ticket` | `should-be-reciprocal` |
| `window` | `house` | `context-helper` |
| `window` | `door` | `generic-specific` |

### movement（39件）

`map / ticket / crossroad` 追加で増加。  
代表的な one-way relation:

| source | target | reviewKind |
|---|---|---|
| `map` | `road` | `generic-specific` |
| `map` | `lost` | `generic-specific` |
| `ticket` | `station` | `should-be-reciprocal` |
| `ticket` | `train` | `should-be-reciprocal` |
| `crossroad` | `road` | `should-be-reciprocal` |
| `crossroad` | `choosing` | `should-be-reciprocal` |

### emotion-action（27件）

`running / cleaning / tidying / losing / handing_over` 追加で大幅増。  
代表的な one-way relation:

| source | target | reviewKind |
|---|---|---|
| `losing` | `lost` | `generic-specific` |
| `losing` | `searching` | `should-be-reciprocal` |
| `running` | `being_chased` | `context-helper` |
| `running` | `being_late` | `context-helper` |
| `cleaning` | `tidying` | `should-be-reciprocal` |
| `handing_over` | `letter` | `context-helper` |

### communication（24件）

Stage9の通信系クラスタ（20件）から `charging` 追加で増加。

| source | target | reviewKind |
|---|---|---|
| `charging` | `smartphone` | `should-be-reciprocal` |
| `charging` | `notification` | `context-helper` |
| `email` | `notification` | `should-be-reciprocal` |
| `sns` | `smartphone` | `generic-specific` |
| `chat` | `sns` | `should-be-reciprocal` |

## Stage11での整理方針

### 双方向化の見送り

`should-be-reciprocal` 91件のうち、Stage11では以下の理由で双方向化を行いません。

- 機械的な双方向化は行わない方針を維持する
- 実際の fixture 文脈で片方向の方が自然な文脈は `intentional-one-way` に再分類する余地がある
- batch-07で関連motifが追加された場合に個別に双方向化を検討する

### should-be-conflict 2件の確認

| source | target | 現状 | 判断 |
|---|---|---|---|
| `falling` | `flying` | neighbor（一方向） | 落ちると飛ぶは対になる。fixtureで優先確認後、batch-07前に再判断 |
| `cat` | `dog` | conflict | 抑制設定済み。現状維持 |

## batch-07への注意点

- `home-place` と `movement` クラスタが最大。batch-07で場所・移動系を追加すると further 増加が予想される
- `emotion-action` クラスタへの追加（泣く・笑う・謝る等）は `losing / searching / running` との relation 設計を先に確認する
- `general` 枠に `charging → recovery` が残っているため、recovery系motifを追加する場合はこの関係を movement または emotion-action クラスタに分類し直す
