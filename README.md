[English](README.md) · [العربية](i18n/README.ar.md) · [Español](i18n/README.es.md) · [Français](i18n/README.fr.md) · [日本語](i18n/README.ja.md) · [한국어](i18n/README.ko.md) · [Tiếng Việt](i18n/README.vi.md) · [中文 (简体)](i18n/README.zh-Hans.md) · [中文（繁體）](i18n/README.zh-Hant.md) · [Deutsch](i18n/README.de.md) · [Русский](i18n/README.ru.md)


[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# Lachlan Chen · he/him

[![Creator & CEO](https://img.shields.io/badge/Creator%20%26%20CEO-LazyingArt%20LLC-0f766e?style=flat-square)](https://lazying.art)
[![Cofounder & COO](https://img.shields.io/badge/Cofounder%20%26%20COO-LightMind%20Tech%20Ltd-1d4ed8?style=flat-square)](https://lightmind.art)
[![Profile Repository](https://img.shields.io/badge/GitHub-Profile%20README-111827?style=flat-square)](https://github.com/lachlanchen/lachlanchen)
[![Google Scholar](https://img.shields.io/badge/Scholar-Profile-4285F4?style=flat-square)](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Lachlan%20Chen-0A66C2?style=flat-square)](https://hk.linkedin.com/in/lachlan-chen-7a056a233)

I build **tools and systems** that help people create, learn, and remember with less friction.

> **The Art of Lazying**  
> Build less. Unlock more life.

---

## 📌 Overview

This repository is the **GitHub profile README repo** for [`lachlanchen`](https://github.com/lachlanchen).  
It is documentation-first and multilingual, with `README.md` as the canonical profile entry and translated variants under `i18n/`.

## 🧭 About

- Creator & CEO of **LazyingArt LLC**
- Cofounder & COO at **LightMind Tech Ltd**
- Focus: practical AI products, knowledge systems, and creative workflows

## 🔗 Quick Links

| Area | Link |
|---|---|
| 🌐 Websites | [lazying.art](https://lazying.art) · [onlyideas.art](https://onlyideas.art) |
| 🧠 EchoMind | [chat.lazying.art](https://chat.lazying.art) |
| 📚 Research Hub | [paper.lazying.art](https://paper.lazying.art) · [ideas.onlyideas.art](https://ideas.onlyideas.art) |
| 🎓 Google Scholar | [scholar profile](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) |
| 💼 LinkedIn | [lachlan-chen-7a056a233](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |

## 🚀 Core Repositories

| Project | Summary | Link |
|---|---|---|
| 🤖 **LazyingArtBot (LAB)** | AI assistant and automation foundation in the LazyingArt ecosystem | [Repository](https://github.com/lachlanchen/LazyingArtBot) |
| 🧩 **AutoAppDev** | Tooling for streamlining app development workflows | [Repository](https://github.com/lachlanchen/AutoAppDev) |
| 📖 **AutoNovelWriter** | Long-form creative writing and story generation workflows | [Repository](https://github.com/lachlanchen/AutoNovelWriter) |
| 🧠 **AgInTi** | Humanoid AI agent experimentation and system design | [Repository](https://github.com/lachlanchen/AgInTi) |

## 🎯 What I Care About

**The Art of Lazying** means designing systems that reduce unnecessary effort while preserving depth, quality, and human creativity.

## ✨ Features

- Canonical GitHub profile README maintenance in one repository.
- Multilingual profile documents in `i18n/`.
- Curated ecosystem project notes in `projects/`.
- Branding and visual assets in `figs/`, `logos/`, and `logos-bamboo/`.
- README-only publishing helper script: `scripts/push_readme_only.sh`.

## 🗂️ Project Structure

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

Notes:
- Top-level symlinks (for example `EchoMind`, `AutoPublication`, `IdeasGlass`) point to external local repositories and are convenience links.
- This repository does not define a single app runtime at root.

## ✅ Prerequisites

- Git
- Bash (for helper script usage)
- GitHub account with access to this profile repository

## 📥 Installation

```bash
git clone https://github.com/lachlanchen/lachlanchen.git
cd lachlanchen
```

## ▶️ Usage

Primary workflow:

2. Keep language files in `i18n/` aligned.
3. Verify links and sections.
4. Commit only `README.md` when publishing README-only updates.

README-only push helper:

```bash
scripts/push_readme_only.sh -m "Update profile README" -b main
```

Script behavior:

1. Fetches `origin`.
2. Creates a temporary worktree from `origin/<branch>`.
3. Copies root `README.md` into the temporary worktree.
4. Commits and pushes only `README.md`.
5. Cleans up temporary state.

## ⚙️ Configuration

- Language options are kept as a **single language-selection line at the top** of each README variant.
- Root README links currently point to:
  - `i18n/README.ar.md`, `README.es.md`, `README.fr.md`, `README.ja.md`, `README.ko.md`, `README.vi.md`, `README.zh-Hans.md`, `README.zh-Hant.md`, `README.de.md`, `README.ru.md`
- Sponsorship links are configured in `.github/FUNDING.yml`.

## 🧪 Examples

Profile maintenance examples:

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

Ecosystem command examples documented in `projects/*.md` (external repositories):

```bash
python voice_chatbot_app_dual_enhanced.py
python autopub.py
python process_video.py
./service_manager.sh start
python vad_lang_subtitle.py --video-path <video>
python vit_captioner_video.py --video_path <video>
```

## 🛠️ Development Notes

- This is a profile/documentation repository, not a monolithic software package.
- Keep changes concise, public-facing, and repository-accurate.
- Preserve substantive existing content when reorganizing.
- If a detail is uncertain, prefer retaining current text and adding a clarification note.

## 🧯 Troubleshooting

- `No README changes compared to origin/main`: your local `README.md` matches remote; no push is needed.
- Broken image/banner rendering: verify paths like `figs/banner.png` and GitHub raw/blob URLs.
- Inconsistent language navigation lines: keep exactly one language-options line at the top of each README variant.
- Mismatch between root and i18n content: update translations after finalizing root README edits.

## 🗺️ Roadmap

- Maintain consistent section parity between `README.md` and `i18n/README.*.md`.
- Keep ecosystem links synchronized with active projects and domains.
- Continue improving clarity of project catalogs in `projects/catalog.md` and `projects/sites.md`.
- Add lightweight validation checks for link integrity and language-bar consistency.

## 🤝 Contributing

Contributions are welcome for profile clarity, link accuracy, and multilingual consistency.

1. Fork or branch from the latest `main`.
2. Propose focused README/i18n improvements.
3. Open a PR with a clear summary of changes.

If editing this repository directly, ensure README-focused commits are isolated from unrelated local file changes.

## ❤️ Support / Sponsor

- GitHub Sponsors: https://github.com/sponsors/lachlanchen
- Donate: https://chat.lazying.art/donate
- LazyingArt: https://lazying.art
- EchoMind: https://chat.lazying.art
- OnlyIdeas: https://onlyideas.art

## 🙏 Acknowledgements

- Thanks to collaborators and users across the LazyingArt and LightMind ecosystem.
- Appreciation to open-source communities and researchers supporting practical AI tooling and knowledge-sharing.

## 📄 License

No repository-level `LICENSE` file is currently present.  
Assumption: treat content as profile/documentation material unless a license is added explicitly.
