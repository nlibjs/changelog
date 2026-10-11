# npm Trusted Publishing

## 依頼
GitHub Actionsでnpmトークンを使わず公開できるよう、修正PRを作成する。npm側はユーザーが操作する。

## 計画
release.ymlの既存処理を確認し、OIDC権限・対応Node/npm・トークン参照を修正する。公開を伴わない検証後にPRを作成する。

## 進捗
- release.yml、package.json、test.yml、規約と設定ファイルを確認。
- repositoryはnlibjs/changelogと一致。Environmentはなし。

## 判断
- release publishedのトリガーとビルド・公開対象を維持。
- npm公開ジョブの依存キャッシュを無効化し、NODE_AUTH_TOKENを除去。
- npm公開にid-token: writeとcontents: readを使用。
- 実際のpublish・リリース・タグ作成・npm設定変更は行わない。

## 検証
未実施。

## 既存PRの継続
- 同目的の既存PR https://github.com/nlibjs/changelog/pull/548 を確認。追加修正としてnpm公開ジョブのキャッシュを無効化。既存の公開方式・Environment・JSR処理を維持する。
- lint-commitはCI修正PR #711を土台とする既存の依存関係を維持。

## 検証結果
- actionlint、YAML構文、git diff --check: 成功。
- npm ci、npm test: 成功（74テスト）。Node 24.21.0、typingはNode 26.5.0。
- ビルド・npm pack --dry-run --ignore-scripts: 成功。公開前のpackage.json整理処理とrepository/public設定も確認。
- changelogの初回テストは浅いGit履歴とローカル署名設定で失敗。履歴を取得し、テストプロセス限定で署名を無効にして成功。
- cleanup-package-jsonはキャッシュ保存先と旧生成物の混在で失敗。作業用キャッシュと生成物の再ビルドで成功。
- 実際のOIDC認証・publishは未実行。npmの登録後に初回公開で検証する必要がある。

## npm側の設定
GitHub Actions / Organization nlibjs / Repository changelog / Workflow release.yml。Environmentは既存の指定を維持。npm publishの許可を選ぶ。ソース反映後、初回公開が可能になってから登録し、48時間以内に初回publishを成功させる。
