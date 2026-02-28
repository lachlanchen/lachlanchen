[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)


[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# Lachlan Chen · he/him

| [![Creator & CEO](https://img.shields.io/badge/Creator%20%26%20CEO-LazyingArt%20LLC-0f766e?style=flat-square)](https://lazying.art) | [![Cofounder & COO](https://img.shields.io/badge/Cofounder%20%26%20COO-LightMind%20Tech%20Ltd-1d4ed8?style=flat-square)](https://lightmind.art) | [![Profile Repository](https://img.shields.io/badge/GitHub-Profile%20README-111827?style=flat-square)](https://github.com/lachlanchen/lachlanchen) | [![Google Scholar](https://img.shields.io/badge/Scholar-Profile-4285F4?style=flat-square)](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-Lachlan%20Chen-0A66C2?style=flat-square)](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |
|---|---|---|---|---|

摩擦を減らしながら、人々がより創造し、学び、記憶できるようにする **ツールとシステム** を構築しています。

> **The Art of Lazying**  
> Build less. Unlock more life.

## 📌 概要

このリポジトリは [`lachlanchen`](https://github.com/lachlanchen) の **GitHubプロフィールREADMEリポジトリ** です。ドキュメントファーストで多言語対応にしており、`README.md` を正規のプロフィールエントリーポイントとして維持し、翻訳版は `i18n/` 配下に配置します。

## 🎯 プロフィール概要

| 項目 | 詳細 |
|---|---|
| リポジトリの目的 | GitHubプロフィールホームページの内容 |
| 基準言語 | `README.md` |
| 多言語版 | `i18n/` |
| 更新ワークフロー | `scripts/*` + `.auto-readme-work/` スナップショット |

## ✨ プロフィール機能

| 領域 | 機能 |
|---|---|
| コンテンツモデル | `README.md` に集中化した公開プロフィールコンテンツ |
| 国際化 | `i18n/` 内の多言語エントリポイント |
| 自動化 | 大量のREADME更新のための軽量スクリプト |
| 資金表示 | プロフィールレベルの寄付・支援パネル |
| プロジェクト編集 | 1行要約のプロジェクト一覧 |

## 🗂️ リポジトリ構成

| パス | 目的 |
|---|---|
| `README.md` | GitHubプロフィールページで使用するメイン英語版 |
| `i18n/` | 翻訳済みプロフィールの各言語版 |
| `projects/` | ローカルのプロジェクト索引とノート |
| `scripts/push_readme_only.sh` | `README.md` のみをステージ/公開するためのGit補助スクリプト |
| `scripts/update-read-me/` | ローカルプロフィール更新向けヘルパー |
| `scripts/auto-update-readme/` | 複数リポジトリを一括更新する際に利用するパイプライン |
| `.github/FUNDING.yml` | GitHub Sponsors / 寄付メタデータ |
| `figs/` | プロフィールで使用するバナーやバッジのアセット |

## ✅ 前提条件

- `git`
- `bash`（保守用スクリプトの実行）
- `rg`（推奨：リポジトリ内の重複チェックでripgrepを利用）

前提条件: このREADMEを閲覧・編集するだけで、言語別の実行環境依存は不要です。

## 🛠️ インストール / セットアップ

```bash
git clone git@github.com:lachlanchen/lachlanchen.git
cd lachlanchen
```

このリポジトリはドキュメントが中心で、ビルド/テスト/インストール用のツールチェーンは不要です。

## 🚀 利用方法

### このプロフィールREADMEを直接更新する

- `README.md` の各セクションを直接編集します。
- 実質的な内容を維持しつつ、重複ブロック（特にバナー/支援パネル）を避けます。

### 提供スクリプトを使用する

```bash
bash scripts/update-read-me/run_lachlanchen_only.sh
```

更新内容を確認後、READMEのみを公開します。

```bash
bash scripts/push_readme_only.sh
```

## 🧩 設定

- 言語リンクは各ファイル先頭に配置し、翻訳フォルダと対応させます。
- バナーは全言語版で言語リンクの下に配置します。
- 支援パネルはContact/Licenseの前の下部セクションに固定します。
- 外部リンクは可能な限り絶対URLを使い、プロフィールの可搬性を保ちます。
- ローカルワークフローでは、リポジトリルートが `/home/lachlan/ProjectsLFS/lachlanchen`、既定ブランチが `main` であることを前提にします。

## 🧪 使用例

- 新しい翻訳プロフィールを追加する
  1. `i18n/README.xx.md` を作成し、同じ見出し構造を持たせます。
  2. `README.md` と新規翻訳の両方に言語リンクを追加します。
- 新しい中核リポジトリを追加する
  1. `README.md` のコアリポジトリ表に1行追加します。
  2. 簡潔な1行要約と正規のリポジトリURLを入れます。
- 利用可能な場合は `.auto-readme-work/` の出力を使ってプロフィールパイプラインを実行します。

## 🧭 自己紹介

| 役割 | フォーカス |
|---|---|
| Creator & CEO | **LazyingArt LLC** |
| Cofounder & COO | **LightMind Tech Ltd** |
| ミッション | 実用的なAI製品、知識システム、クリエイティブなワークフロー |

## 🔗 クイックリンク

| 領域 | リンク |
|---|---|
| 🌐 ウェブサイト | [lazying.art](https://lazying.art) · [onlyideas.art](https://onlyideas.art) |
| 🧠 EchoMind | [chat.lazying.art](https://chat.lazying.art) |
| 📚 Research Hub | [paper.lazying.art](https://paper.lazying.art) · [ideas.onlyideas.art](https://ideas.onlyideas.art) |
| 🎓 Google Scholar | [scholar profile](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) |
| 💼 LinkedIn | [lachlan-chen-7a056a233](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |

## 🚀 主要リポジトリ

| プロジェクト | 概要 | リンク |
|---|---|---|
| 🤖 **LazyingArtBot (LAB)** | LazyingArtエコシステムのAIアシスタントと自動化基盤 | [Repository](https://github.com/lachlanchen/LazyingArtBot) |
| 🧩 **AutoAppDev** | アプリ開発ワークフローの効率化を支援するツール群 | [Repository](https://github.com/lachlanchen/AutoAppDev) |
| 📖 **AutoNovelWriter** | 長編創作とストーリー生成のためのワークフロー | [Repository](https://github.com/lachlanchen/AutoNovelWriter) |
| 🧠 **AgInTi** | ヒューマノイドAIエージェントの実験とシステム設計 | [Repository](https://github.com/lachlanchen/AgInTi) |

## 🎯 大事にしていること

**The Art of Lazying** とは、深さ、品質、人間の創造性を保ちながら不要な労力を減らすシステムを設計する考え方を指します。

## 🧩 主要プロジェクト

| プロジェクト | 概要 |
|---|---|
| OpenHI | 自己較正型のイベントベースハイパースペクトルイメージング |
| EchoMind | 学習と創作向けの多言語音声/チャット |
| AutoPublish + AutoPubMonitor | 下書きから公開までを自動化するパイプライン |
| LazyEdit | AI支援の編集・字幕・ハイライト・パッケージ化 |

## ❤️ Support

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://camo.githubusercontent.com/24a4914f0b42c6f435f9e101621f1e52535b02c225764b2f6cc99416926004b7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f6e6174652d4c617a79696e674172742d3045413545393f7374796c653d666f722d7468652d6261646765266c6f676f3d6b6f2d6669266c6f676f436f6c6f723d7768697465)](https://chat.lazying.art/donate) | [![PayPal](https://camo.githubusercontent.com/d0f57e8b016517a4b06961b24d0ca87d62fdba16e18bbdb6aba28e978dc0ea21/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f50617950616c2d526f6e677a686f754368656e2d3030343537433f7374796c653d666f722d7468652d6261646765266c6f676f3d70617970616c266c6f676f436f6c6f723d7768697465)](https://paypal.me/RongzhouChen) | [![Stripe](https://camo.githubusercontent.com/1152dfe04b6943afe3a8d2953676749603fb9f95e24088c92c97a01a897b4942/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5374726970652d446f6e6174652d3633354246463f7374796c653d666f722d7468652d6261646765266c6f676f3d737472697065266c6f676f436f6c6f723d7768697465)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |

## 📬 お問い合わせ

| チャネル | 値 |
|---|---|
| メール | `lach@lazying.art` |
| ウェブサイト | https://lazying.art |

## 🧪 トラブルシューティング

- パイプライン実行後、バナー/支援ブロックが重複する: 各ブロックは1つの正規版だけを残して削除します。
- クイックリンクの翻訳が崩れる: `i18n/` の対象ファイルが存在するか確認します。
- スクリプト失敗は通常 `bash` または `rg` がPATHにないことが原因です。依存関係をインストールしてリポジトリのルートで再実行してください。
- リンクが古いブランチ名やリポジトリ名を指している場合、`README.md` の正規パスへ更新します。

## 🧰 開発メモ

- 小さく積み上げる更新を行います: まず `README.md` を更新し、必要な場合のみ翻訳版へ反映します。
- 可読性の高い表形式の行と短い1行要約を優先します。
- 非英語版は同じセクション順を維持して整合性を保ちます。
- `.auto-readme-work/` ディレクトリはパイプラインのスナップショットと言語計画を保持するため、生成済みコンテキストとして扱います。

## 🗺️ ロードマップ

- すべてのリンクを毎四半期見直し、確認する。
- 実験中の取り組みとステータスバッジの簡易セクションを追加する。
- `scripts/` のドキュメントに前提条件と安全上の注意を追記する。
- 主要なプロフィール更新をまとめた簡易チェンジログ風セクションを追加する。

## 🤝 コントリビューション

コントリビューション歓迎します。

- 修正や更新はissueを立てて共有してください。
- 変更は焦点を絞り、段階的に行ってください。
- 主要な新規セクションを追加する場合は、可能なら対応する翻訳ファイルも更新してください。
- 既存の自動化スクリプトと整合する形で編集し、マージ競合を避けます。

## 📄 ライセンス

現時点では、このリポジトリにはルートに明示的なライセンスファイルがありません。もし明確なライセンス運用が必要な場合、標準の`LICENSE`（例: `MIT`、`Apache-2.0`）を追加し、ここに記載してください。

Build less. Live more.
