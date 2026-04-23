# Stage3 Completion Gate

Stage3は、次の20件を実装する前の品質ゲートです。

## 完了条件

- 40モチーフ時点の誤検出・未検出パターンが整理されている
- alias分類が `phrase / alias / weak` の3種で説明できる
- warning運用ルールがdocs化されている
- relation mapが重点レビュー群ごとに整理されている
- fixture/test拡張方針がテストで固定されている
- batch-03候補30から40件がカテゴリ別に整理されている
- 優先20件が仮選定され、保留理由も説明されている
- batch-03実装へ進むかどうかレビューできる

## Stage4へ送る課題

- stem分類
- 語尾ゆれ対応
- weak-only候補の抑制
- 抽出理由のUI表示
- relation mapの機械可読化
- batch-03の本実装
