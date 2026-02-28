## Project Summary
This repository is a **GitHub profile repository** for `lachlanchen`, centered on publishing and maintaining a multilingual profile `README.md` rather than shipping application code.

The repo primarily contains:
- Profile content (`README.md`, `i18n/*` translations)
- Visual assets used by the profile (`figs/`, `logos/`, `logos-bamboo/`)
- Internal notes/indexes for related external projects (`projects/*.md`)
- A utility script for README-only publishing (`scripts/push_readme_only.sh`)

Many top-level entries are local symlinks to external project folders; they are convenience links, not the core tracked implementation of this repo.

## Repository Map
```text
.
├── README.md
├── AGENTS.md
├── .gitignore
├── .github/
│   └── FUNDING.yml
├── i18n/
│   ├── README.ar.md
│   ├── README.es.md
│   ├── README.fr.md
│   ├── README.ja.md
│   ├── README.ko.md
│   ├── README.vi.md
│   ├── README.zh-Hans.md
│   └── README.zh-Hant.md
├── figs/
│   ├── banner.png
│   ├── donate_button.svg
│   ├── donate_wechat.png
│   └── donate_alipay.png
├── logos/
├── logos-bamboo/
├── projects/
│   ├── README.md
│   ├── catalog.md
│   ├── sites.md
│   └── *.md project notes (AutoPubMonitor, IdeasGlass, etc.)
├── scripts/
│   └── push_readme_only.sh
├── .auto-readme-work/20260228_123507/
│   ├── pipeline-context.md
│   ├── language-nav-block.html
│   └── translation-plan.txt
└── [many top-level symlinks to external repos/directories]
```

## Key Components
- `README.md`
  - Main profile page content with banner, language links, badges, project summaries, support/contact blocks.
  - Uses local image assets (`figs/*`) and external links.

- `i18n/README.*.md`
  - Translated profile variants (8 locales observed).
  - Structure mirrors main README (links, selected projects, support/contact).

- `projects/*.md`
  - Human-authored project notes/catalog entries describing adjacent repositories and systems.
  - Functions as a knowledge/index layer, not executable source.

- `scripts/push_readme_only.sh`
  - Bash automation to push only `README.md` via a temporary git worktree.
  - Includes fetch, diff check, commit, push, and cleanup logic.

- `.github/FUNDING.yml`
  - Funding/Sponsors configuration for GitHub profile.

- `figs/`, `logos/`, `logos-bamboo/`
  - Branding/donation assets referenced by README content.

## Setup Signals
Observed setup/config signals are lightweight and documentation-oriented:
- No app/runtime manifests found at repo root or near-root (`package.json`, `pyproject.toml`, `requirements.txt`, Docker/Make files absent).
- Primary executable requirement is for `scripts/push_readme_only.sh`:
  - Requires `bash`, `git`, network access to `origin`, and standard git credentials.
- Project-note docs (for external repos) mention extra dependencies there (e.g., Python, FFmpeg, tmux), but those are **not** setup requirements for this profile repo itself.

## Usage Signals
Likely usage flow from repository contents:
1. Edit `README.md` (and optionally translation files under `i18n/`).
2. Validate links/assets render correctly in Markdown (banner, badges, donation images).
3. Publish README updates using normal git flow or `scripts/push_readme_only.sh` to isolate README-only commits.
4. Use `projects/catalog.md` and `projects/sites.md` as reference/index material for maintaining profile links and summaries.

## Gaps/Unknowns
- Repository intentionally contains little executable application code; most linked systems live in external repos.
- Top-level symlinks point to local paths; their targets and contents are outside this repo’s tracked scope.
- No CI/workflow files for linting/validation of README/i18n consistency were observed.
- Translation synchronization process appears pipeline-assisted (`.auto-readme-work/*`) but no durable automation entrypoint is defined in this repo itself.
