# Alias Design Rules

Stage3ではalias分類を3種類に絞ります。データ構造は大きく変えず、現行フィールドを次の意味で扱います。

| Stage3分類 | 現行フィールド | 役割 | 重み |
|---|---|---|---|
| `phrase` | `priorityKeywords` | 文脈つきで強く拾う語句 | 高 |
| `alias` | `aliases` | モチーフ名、別名、表記ゆれ | 中 |
| `weak` | `secondaryKeywords` | 単独では誤検出しやすい補助語 | 低 |

## phrase

- 夢文として自然な短文にする
- 例: `鍵をなくす`, `試験を受ける`, `雨に濡れる`
- 新規motifでは最低3件を目安に用意する

## alias

- 表示名、よくある言い換え、表記ゆれを入れる
- 1文字aliasはできるだけ避ける
- 1文字aliasが必要な場合は、phraseで文脈を補う

## weak

- 単独hitすると誤検出しやすい語を入れる
- 例: `上司`, `濡れる`, `扉`
- Stage3ではweak-onlyの候補抑制は行わない
- ただし短いweak語は `warning-fix-soon` として可視化する

## Stage4以降の候補

- stem分類
- 語尾ゆれ対応
- weak-only候補の抑制
- 抽出理由のUI表示
## Stage5 weak-only policy

Stage5以降、`weak` は単独では候補化しません。未検出を増やしすぎないため、次の3段階で扱います。

| 状態 | 抽出での扱い |
|---|---|
| weak語のみ | 候補化しない |
| weak + 同一motifのphrase/alias | 通常候補化 |
| weak + 近縁motifの強ヒット | 補助候補として低スコアで残す |

新規motifでは、短い語を `weak` に入れる前に、文脈つきの `phrase` で拾えるかを優先して検討します。1文字aliasは追加禁止、2文字以下のweak語は `warning-fix-soon` としてレビュー対象にします。
