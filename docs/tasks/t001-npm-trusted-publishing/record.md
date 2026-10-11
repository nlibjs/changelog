# npm Staged Publishing

## 依頼と計画
GitHub Actionsで承認待ちのnpmパッケージを作成し、maintainerが2FAで承認して公開する方式へ既存PRを更新する。

## 進捗・判断
- npm公式のStaged publishing/npm-stageの現行仕様を確認。
- npm公開ジョブをnpm stage publishへ変更し、npm 11.21.0を明示導入（必須条件はnpm >=11.15.0）。
- Environment、JSR処理、ビルド、package.json整理処理を維持する。
- npm側ではAllow npm publish/Allow npm dist-tagをオフにする。登録・承認はユーザーが操作する。

## 検証結果
- 5ワークフローのactionlint: 成功。
- npm 11.21.0でstageコマンドを確認し、5パッケージのstage publish --dry-runを検証。実際のアップロード・公開は行っていない。
- changelog、negotiate、lint-commitの既存バージョンは公開済みのためdry-runでも拒否された。検証用コピーだけに未公開のプレリリースバージョンとstage-checkタグを設定して再検証。リポジトリのバージョン・タグは変更していない。
- 検証ではprovenance生成を無効にした。実際のOIDC認証とprovenanceはGitHub Actions実行時に確認が必要。

## 利用手順
GitHub release後、npmのStaged Packagesで内容を確認してApproveを選択し、2FAで承認すると公開される。Actionsの成功だけではnpmへの一般公開は完了しない。
