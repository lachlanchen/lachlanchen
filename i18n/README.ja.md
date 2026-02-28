[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)


[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# Lachlan Chen · he/him

[![Creator & CEO](https://img.shields.io/badge/Creator%20%26%20CEO-LazyingArt%20LLC-0f766e?style=flat-square)](https://lazying.art)
[![Cofounder & COO](https://img.shields.io/badge/Cofounder%20%26%20COO-LightMind%20Tech%20Ltd-1d4ed8?style=flat-square)](https://lightmind.art)
[![Profile Repository](https://img.shields.io/badge/GitHub-Profile%20README-111827?style=flat-square)](https://github.com/lachlanchen/lachlanchen)
[![Google Scholar](https://img.shields.io/badge/Scholar-Profile-4285F4?style=flat-square)](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Lachlan%20Chen-0A66C2?style=flat-square)](https://hk.linkedin.com/in/lachlan-chen-7a056a233)

私は、人々がより少ない摩擦で創作し、学び、記憶できるようにする **ツールとシステム** を構築しています。

> **The Art of Lazying**  
> Build less. Unlock more life.

---

## 📌 概要

このリポジトリは [`lachlanchen`](https://github.com/lachlanchen) の **GitHubプロフィールREADMEリポジトリ** です。  
ドキュメントファーストかつ多言語対応で、`README.md` をプロフィールの正本とし、翻訳版は `i18n/` 配下に置いています。

## 🧭 自己紹介

- **LazyingArt LLC** の Creator & CEO
- **LightMind Tech Ltd** の Cofounder & COO
- 注力領域: 実用的なAIプロダクト、知識システム、クリエイティブワークフロー

## 🔗 クイックリンク

| 領域 | リンク |
|---|---|
| 🌐 Websites | [lazying.art](https://lazying.art) · [onlyideas.art](https://onlyideas.art) |
| 🧠 EchoMind | [chat.lazying.art](https://chat.lazying.art) |
| 📚 Research Hub | [paper.lazying.art](https://paper.lazying.art) · [ideas.onlyideas.art](https://ideas.onlyideas.art) |
| 🎓 Google Scholar | [scholar profile](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) |
| 💼 LinkedIn | [lachlan-chen-7a056a233](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |

## 🚀 主要リポジトリ

| Project | Summary | Link |
|---|---|---|
| 🤖 **LazyingArtBot (LAB)** | LazyingArtエコシステムにおけるAIアシスタントと自動化の基盤 | [Repository](https://github.com/lachlanchen/LazyingArtBot) |
| 🧩 **AutoAppDev** | アプリ開発ワークフローを効率化するためのツール群 | [Repository](https://github.com/lachlanchen/AutoAppDev) |
| 📖 **AutoNovelWriter** | 長編創作とストーリー生成ワークフロー | [Repository](https://github.com/lachlanchen/AutoNovelWriter) |
| 🧠 **AgInTi** | ヒューマノイドAIエージェントの実験とシステム設計 | [Repository](https://github.com/lachlanchen/AgInTi) |

## 🎯 大切にしていること

**The Art of Lazying** とは、深さ・品質・人間の創造性を保ちながら、不要な労力を減らすシステム設計の考え方です。

## ✨ 特徴

- GitHubプロフィールREADMEを1つのリポジトリで正本管理。
- `i18n/` に多言語プロフィール文書を配置。
- `projects/` にエコシステム関連プロジェクトのキュレーションノートを収録。
- `figs/`, `logos/`, `logos-bamboo/` にブランディングとビジュアルアセットを配置。
- READMEのみを公開する補助スクリプト: `scripts/push_readme_only.sh`。

## 🗂️ プロジェクト構成

```text
.
├── README.md
├── i18n/
│   ├── README.en.md
│   ├── README.ar.md README.es.md README.fr.md README.de.md README.ru.md
│   ├── README.ja.md README.ko.md README.vi.md
│   └── README.zh-CN.md README.zh-Hans.md README.zh-Hant.md README.zh-TW.md
├── projects/
│   ├── README.md
│   ├── catalog.md
│   ├── sites.md
│   └── *.md
├── figs/
├── logos/
├── logos-bamboo/
├── .github/FUNDING.yml
└── scripts/push_readme_only.sh
```

注意:
- ルートのシンボリックリンク（例: `EchoMind`, `AutoPublication`, `IdeasGlass`）は外部ローカルリポジトリを指す利便用リンクです。
- このリポジトリのルートには、単一のアプリ実行環境は定義されていません。

## ✅ 前提条件

- Git
- Bash（補助スクリプトを使う場合）
- このプロフィールリポジトリにアクセスできるGitHubアカウント

## 📥 インストール

```bash
git clone https://github.com/lachlanchen/lachlanchen.git
cd lachlanchen
```

## ▶️ 使い方

基本ワークフロー:

1. `README.md`（正本の英語/ルートプロフィール内容）を編集する。
2. `i18n/` の各言語ファイルを同期する。
3. リンクとセクションを確認する。
4. READMEのみの更新を公開する際は `README.md` だけをコミットする。

README-only push helper:

```bash
scripts/push_readme_only.sh -m "Update profile README" -b main
```

スクリプトの動作:

1. `origin` をフェッチ。
2. `origin/<branch>` から一時worktreeを作成。
3. ルートの `README.md` を一時worktreeへコピー。
4. `README.md` のみをコミットしてプッシュ。
5. 一時状態をクリーンアップ。

## ⚙️ 設定

- 言語オプションは、各READMEバリアントの **先頭に1行だけ** 配置します。
- ルートREADMEのリンクは現在次を参照しています:
  - `README.md`（英語/ルート）
  - `i18n/README.ar.md`, `README.es.md`, `README.fr.md`, `README.ja.md`, `README.ko.md`, `README.vi.md`, `README.zh-Hans.md`, `README.zh-Hant.md`, `README.de.md`, `README.ru.md`
- スポンサーリンクは `.github/FUNDING.yml` で設定しています。

## 🧪 例

プロフィール保守の例:

```bash
# Stage and commit only README
git add README.md
git commit -m "Refine profile README"
git push origin main
```

```bash
# Use helper to publish README-only from a dirty working tree
scripts/push_readme_only.sh -m "Update README badges and links" -b main
```

`projects/*.md` に記載のエコシステムコマンド例（外部リポジトリ）:

```bash
python voice_chatbot_app_dual_enhanced.py
python autopub.py
python process_video.py
./service_manager.sh start
python vad_lang_subtitle.py --video-path <video>
python vit_captioner_video.py --video_path <video>
```

## 🛠️ 開発メモ

- これは単一の大規模ソフトウェアパッケージではなく、プロフィール/ドキュメント用のリポジトリです。
- 変更は簡潔で公開向け、かつリポジトリ実態に沿うように保ってください。
- 再編成時も、実質的な既存内容は維持してください。
- 詳細が不確かな場合は、現行テキストを保持したうえで注記を追加する方針を推奨します。

## 🧯 トラブルシューティング

- `No README changes compared to origin/main`: ローカルの `README.md` がリモートと同一です。プッシュは不要です。
- 画像/バナー表示が崩れる: `figs/banner.png` やGitHub raw/blob URLのパスを確認してください。
- 言語ナビゲーション行の不整合: 各READMEバリアント先頭に言語オプション行を **1つだけ** 保ってください。
- ルートとi18nの内容不一致: ルートREADMEの編集を確定後、翻訳版を更新してください。

## 🗺️ ロードマップ

- `README.md` と `i18n/README.*.md` のセクション整合性を維持。
- エコシステムのリンクを、稼働中プロジェクトとドメインに合わせて同期。
- `projects/catalog.md` と `projects/sites.md` のカタログ記述を引き続き明確化。
- リンク整合性と言語バー整合性の軽量バリデーションチェックを追加。

## 🤝 コントリビュート

プロフィールの明確さ、リンク精度、多言語整合性に関する改善提案を歓迎します。

1. 最新の `main` からforkまたはブランチを作成。
2. README/i18nの焦点を絞った改善を提案。
3. 変更内容の要約を明確にしたPRを作成。

このリポジトリを直接編集する場合は、README中心のコミットを無関係なローカル変更から分離してください。

## ❤️ Support / Sponsor

- GitHub Sponsors: https://github.com/sponsors/lachlanchen
- Donate: https://chat.lazying.art/donate
- LazyingArt: https://lazying.art
- EchoMind: https://chat.lazying.art
- OnlyIdeas: https://onlyideas.art

## 🙏 謝辞

- LazyingArtおよびLightMindエコシステムのコラボレーターとユーザーの皆さまに感謝します。
- 実用的なAIツールと知識共有を支える、オープンソースコミュニティと研究者の皆さまに敬意を表します。

## 📄 ライセンス

現時点で、リポジトリ直下に `LICENSE` ファイルはありません。  
前提: ライセンスが明示的に追加されるまでは、内容をプロフィール/ドキュメント素材として扱ってください。
