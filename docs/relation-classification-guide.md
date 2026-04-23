# Relation Classification Guide

Stage7では relation を次の6分類でレビューします。分類は削除や自動補正ではなく、100モチーフ到達前に人が判断しやすくするための補助です。

| 分類 | 判断基準 | 例 |
|---|---|---|
| intentional-one-way | 意味の流れが片方向で自然 | 一方が補助的に文脈を広げる |
| should-be-reciprocal | near-neighbor同士で双方向の意味が自然 | `email -> letter`, `sns -> notification` |
| should-be-conflict | neighborより抑制関係が自然な可能性 | specific/genericが混ざったrelation |
| generic-specific | 汎用motifと具体motifの優先関係 | `water -> sea`, `house -> childhood_home` |
| context-helper | 一方が主役で、もう一方が文脈を足す | `umbrella -> rain`, `clock -> being_late` |
| stale-relation | 古い設計で意味が弱い | Stage7時点では該当なし |

## Generic / Specific

generic/specific は、より具体的なmotifが明確に出ている時に汎用motifを補助へ下げる関係です。

- `water` と `sea / river`
- `house` と `childhood_home / hotel`
- `travel` と `train / bus / airport / station`
- `clothes` と `naked / hair / mirror`

## Near-Neighbor

near-neighbor は意味が近いものの、同時に出た時に両方残したい関係です。抑制しません。

- `smartphone / notification / sns / email / phone / letter`
- `station / train / bus / travel`
- `injury / blood / hospital`
- `sky / moon / sun / stars / bird`

## Context Helper

context-helper は、片方がもう片方の文脈を補助する relation です。基本的には片方向を許容します。

- `umbrella -> rain`
- `clock -> being_late`
- `bag -> wallet`
- `hotel -> stranger`

## Warning Operation

- `warning-review-ok`: conflictやalias重複など、理由付きでレビュー済みなら許容
- `info`: relation mapのレビュー補助。ただしStage7以降は分類済み/未分類を区別する
- `warning-fix-soon`: 189件以下を維持し、batch追加前の修正候補として扱う
