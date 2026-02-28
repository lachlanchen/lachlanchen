[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)


[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# Lachlan Chen · he/him

[![Creator & CEO](https://img.shields.io/badge/Creator%20%26%20CEO-LazyingArt%20LLC-0f766e?style=flat-square)](https://lazying.art)
[![Cofounder & COO](https://img.shields.io/badge/Cofounder%20%26%20COO-LightMind%20Tech%20Ltd-1d4ed8?style=flat-square)](https://lightmind.art)
[![Profile Repository](https://img.shields.io/badge/GitHub-Profile%20README-111827?style=flat-square)](https://github.com/lachlanchen/lachlanchen)
[![Google Scholar](https://img.shields.io/badge/Scholar-Profile-4285F4?style=flat-square)](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Lachlan%20Chen-0A66C2?style=flat-square)](https://hk.linkedin.com/in/lachlan-chen-7a056a233)

我构建的是**工具与系统**，帮助人们以更低摩擦进行创作、学习与记忆。

> **The Art of Lazying**  
> 少造轮子，多得生活。

---

## 📌 概览

本仓库是 [`lachlanchen`](https://github.com/lachlanchen) 的 **GitHub 个人资料 README 仓库**。  
它采用文档优先与多语言方式维护，以 `README.md` 作为规范主入口，翻译版本位于 `i18n/`。

## 🧭 关于我

- **LazyingArt LLC** 创始人兼 CEO
- **LightMind Tech Ltd** 联合创始人兼 COO
- 关注方向：实用型 AI 产品、知识系统与创意工作流

## 🔗 快速链接

| 领域 | 链接 |
|---|---|
| 🌐 网站 | [lazying.art](https://lazying.art) · [onlyideas.art](https://onlyideas.art) |
| 🧠 EchoMind | [chat.lazying.art](https://chat.lazying.art) |
| 📚 研究中心 | [paper.lazying.art](https://paper.lazying.art) · [ideas.onlyideas.art](https://ideas.onlyideas.art) |
| 🎓 Google Scholar | [scholar profile](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) |
| 💼 LinkedIn | [lachlan-chen-7a056a233](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |

## 🚀 核心仓库

| 项目 | 简介 | 链接 |
|---|---|---|
| 🤖 **LazyingArtBot (LAB)** | LazyingArt 生态中的 AI 助手与自动化基础设施 | [Repository](https://github.com/lachlanchen/LazyingArtBot) |
| 🧩 **AutoAppDev** | 用于精简应用开发流程的工具集 | [Repository](https://github.com/lachlanchen/AutoAppDev) |
| 📖 **AutoNovelWriter** | 长篇创意写作与故事生成工作流 | [Repository](https://github.com/lachlanchen/AutoNovelWriter) |
| 🧠 **AgInTi** | 人形 AI 智能体实验与系统设计 | [Repository](https://github.com/lachlanchen/AgInTi) |

## 🎯 我关注的事情

**The Art of Lazying** 的核心是设计系统，减少不必要的投入，同时保留深度、质量与人类创造力。

## ✨ 特性

- 在一个仓库中维护规范化的 GitHub 个人资料 README。
- 在 `i18n/` 中维护多语言个人资料文档。
- 在 `projects/` 中整理生态项目说明。
- 品牌与视觉资源位于 `figs/`、`logos/` 和 `logos-bamboo/`。
- README 专用发布辅助脚本：`scripts/push_readme_only.sh`。

## 🗂️ 项目结构

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

说明：
- 顶层符号链接（如 `EchoMind`、`AutoPublication`、`IdeasGlass`）指向外部本地仓库，仅用于便捷访问。
- 本仓库并未在根目录定义单一应用运行时。

## ✅ 前置条件

- Git
- Bash（用于辅助脚本）
- 拥有此个人资料仓库访问权限的 GitHub 账号

## 📥 安装

```bash
git clone https://github.com/lachlanchen/lachlanchen.git
cd lachlanchen
```

## ▶️ 使用方式

主要流程：

1. 编辑 `README.md`（规范英文/根目录个人资料内容）。
2. 保持 `i18n/` 中各语言文件同步。
3. 校验链接与章节。
4. 发布仅 README 更新时，只提交 `README.md`。

仅 README 推送辅助：

```bash
scripts/push_readme_only.sh -m "Update profile README" -b main
```

脚本行为：

1. 拉取 `origin`。
2. 从 `origin/<branch>` 创建临时 worktree。
3. 将根目录 `README.md` 复制到临时 worktree。
4. 仅提交并推送 `README.md`。
5. 清理临时状态。

## ⚙️ 配置

- 语言选项在每个 README 变体顶部保持为**单行语言选择导航**。
- 根 README 当前链接到：
  - `README.md`（英文/根）
  - `i18n/README.ar.md`, `README.es.md`, `README.fr.md`, `README.ja.md`, `README.ko.md`, `README.vi.md`, `README.zh-Hans.md`, `README.zh-Hant.md`, `README.de.md`, `README.ru.md`
- 赞助链接配置于 `.github/FUNDING.yml`。

## 🧪 示例

个人资料维护示例：

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

`projects/*.md`（外部仓库）中记录的生态命令示例：

```bash
python voice_chatbot_app_dual_enhanced.py
python autopub.py
python process_video.py
./service_manager.sh start
python vad_lang_subtitle.py --video-path <video>
python vit_captioner_video.py --video_path <video>
```

## 🛠️ 开发说明

- 这是个人资料/文档仓库，不是单体软件包。
- 变更应保持简洁、面向公开展示且与仓库实际一致。
- 在重组内容时保留现有实质信息。
- 若细节不确定，优先保留当前文本并增加澄清说明。

## 🧯 故障排查

- `No README changes compared to origin/main`：本地 `README.md` 与远端一致，无需推送。
- 横幅图片渲染异常：检查 `figs/banner.png` 等路径及 GitHub raw/blob URL。
- 语言导航行不一致：每个 README 变体顶部只保留一行语言选项。
- 根文件与 i18n 内容不一致：先完成根 README，再同步更新翻译。

## 🗺️ 路线图

- 保持 `README.md` 与 `i18n/README.*.md` 章节一致性。
- 让生态链接与活跃项目及域名持续同步。
- 持续提升 `projects/catalog.md` 与 `projects/sites.md` 的目录清晰度。
- 增加轻量校验以检查链接完整性与语言栏一致性。

## 🤝 贡献

欢迎对个人资料清晰度、链接准确性与多语言一致性提出改进。

1. 从最新 `main` 分叉或创建分支。
2. 提交聚焦的 README/i18n 改进。
3. 发起带有清晰变更说明的 PR。

如果直接在本仓库编辑，请确保 README 相关提交与无关本地改动隔离。

## ❤️ 支持 / 赞助

- GitHub Sponsors: https://github.com/sponsors/lachlanchen
- Donate: https://chat.lazying.art/donate
- LazyingArt: https://lazying.art
- EchoMind: https://chat.lazying.art
- OnlyIdeas: https://onlyideas.art

## 🙏 致谢

- 感谢 LazyingArt 与 LightMind 生态中的协作者与用户。
- 感谢支持实用 AI 工具与知识共享的开源社区和研究者。

## 📄 许可

当前仓库尚未提供仓库级 `LICENSE` 文件。  
假设：在明确添加许可证前，内容按个人资料/文档材料处理。
