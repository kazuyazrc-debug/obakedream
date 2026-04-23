# Repository Cleanup Policy

Stage1では、差分最小と既存破壊最小を優先するため、生成済みの初期assetや設定ファイルを大きく削除しません。

## 今回削除しないもの

- `public/*.svg`
- `app/favicon.ico`
- Next.js初期設定ファイル

## Stage2以降で整理候補

- 未使用のNext.js初期SVG
- 実際のブランドassetへ置き換わったfavicon
- docs内で重複した説明

## 方針

- 実行時に影響しないものは、機能リファクタと同時に削除しない
- 削除する場合は、使用箇所検索とbuild確認をセットにする
- asset整理はUI/branding作業と同じタイミングで行う
