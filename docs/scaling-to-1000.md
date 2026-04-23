# 1000モチーフまで育てるための設計メモ

## Phase 1

現在の実装範囲です。

- 基本UI
- データ駆動の解釈エンジン
- 初期20モチーフ
- レジストリ検証
- モチーフ追加ガイド

## Phase 2

40、60、80個へ増やす段階では、ファイル分割と検証を強めます。Stage2で `batch-02` を追加し、40モチーフ運用の最初の検証を行いました。Stage4で `batch-03` を追加し、60モチーフ運用へ進みました。

- `data/batches/batch-02/` のように20個単位で分割
- motifs、aliases、questions、blocksを同じバッチ名で分割
- 抽出テストをバッチごとに追加
- 重複語彙を警告として一覧化
- 近縁モチーフと競合モチーフのレビューを追加
- モチーフテンプレートを `docs/` に追加

## Phase 3

1000モチーフを見据える段階では、ローカルTypeScriptオブジェクトからDBまたはCMSへ移行します。

- motif本体、aliases、questions、blocksをテーブル分離
- motif idを永続キーとして固定
- aliasesに言語、読み、優先度、誤検出リスクを追加
- categoryを階層化し、動物、人物、場所、行動、身体、感情、自然、人工物などを再整理
- 検索インデックスを作り、単純な `includes` から形態素解析またはN-gramへ移行
- 管理画面で追加、レビュー、公開状態を管理
- A/Bテストではなく、読みの納得感を人手レビューで改善

## 長期的なデータモデル案

- `motifs`: id, name, category, meanings, scoreImpact, extractionPriority
- `motif_aliases`: motifId, term, kind, weight, locale, riskLevel
- `motif_questions`: motifId, prompt, type, priority
- `question_options`: questionId, label, scoreImpact, interpretationHints
- `interpretation_blocks`: motifId, section, text, tone, version
- `motif_relations`: sourceMotifId, targetMotifId, relationType, reason
- `validation_reports`: batchId, duplicateTerms, missingBlocks, unknownReferences

## 1000件で破綻しないための原則

- 追加単位は20個、レビュー単位も20個
- 共通語彙は辞書化し、モチーフ固有語彙と分ける
- 競合はコードではなくデータで表現する
- スコア軸はむやみに増やさず、必要ならバージョンを切る
- 結果文は長文化より、短いブロックの組み合わせ品質を上げる
- ユーザー確認UIを保ち、抽出の曖昧さを体験側で吸収する
## Stage6 checkpoint

Stage6で80モチーフへ到達しました。20件追加のたびに、次のゲートを確認します。

- production registryの `error` は0
- `warning-fix-soon` は既存基準を超えない
- 1文字aliasは追加しない
- weak-onlyで候補化されない前提を守る
- representative dreamsとextraction auditを追加し、既存fixtureを壊さない

80件時点では、次の100件到達前にrelation mapの可視化とwarning棚卸しをもう一段進める余地があります。
