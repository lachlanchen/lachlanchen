[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)


[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# Lachlan Chen · he/him

| [![Creator & CEO](https://img.shields.io/badge/Creator%20%26%20CEO-LazyingArt%20LLC-0f766e?style=flat-square)](https://lazying.art) | [![Cofounder & COO](https://img.shields.io/badge/Cofounder%20%26%20COO-LightMind%20Tech%20Ltd-1d4ed8?style=flat-square)](https://lightmind.art) | [![Profile Repository](https://img.shields.io/badge/GitHub-Profile%20README-111827?style=flat-square)](https://github.com/lachlanchen/lachlanchen) | [![Google Scholar](https://img.shields.io/badge/Scholar-Profile-4285F4?style=flat-square)](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-Lachlan%20Chen-0A66C2?style=flat-square)](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |
|---|---|---|---|---|

我构建**工具与系统**，帮助人们以更低摩擦实现创作、学习和记忆。

> **The Art of Lazying**
> 少做冗余，解放更多人生。

## 📌 概览

该仓库是[`lachlanchen`](https://github.com/lachlanchen)的**GitHub Profile README**仓库。它采用以文档优先的方式设计：`README.md` 作为标准英文主条目，而各语言译本统一放在 `i18n/` 中。

## 🎯 个人信息快照

| 维度 | 说明 |
|---|---|
| 仓库用途 | GitHub 个人主页内容 |
| 官方语言 | `README.md` |
| 本地化版本 | `i18n/` |
| 更新流程 | `scripts/*` + `.auto-readme-work/` 快照 |

## ✨ 个人主页特性

| 领域 | 能力 |
|---|---|
| 内容模型 | 集中管理公开的个人主页内容（位于 `README.md`） |
| 国际化 | 多语言入口位于 `i18n/` |
| 自动化 | 用于批量 README 更新的轻量脚本 |
| 资金展示 | 提供主页级别的捐赠/支持面板 |
| 项目展示 | 以单行摘要形式整理核心项目 |

## 🗂️ 项目结构

| 路径 | 用途 |
|---|---|
| `README.md` | 用于 GitHub 个人页的主英文内容 |
| `i18n/` | 已本地化的主页版本 |
| `projects/` | 本地项目索引与说明 |
| `scripts/push_readme_only.sh` | 用于仅提交/发布 `README.md` 的 Git 工作流脚本 |
| `scripts/update-read-me/` | 用于本地主页更新的脚本 |
| `scripts/auto-update-readme/` | 批量更新多个仓库时使用的流水线 |
| `.github/FUNDING.yml` | GitHub Sponsors 与资金元数据 |
| `figs/` | 主页内容使用的横幅与徽章资源 |

## ✅ 先决条件

- `git`
- `bash`（用于运行维护脚本）
- `rg`（建议：仓库脚本使用 ripgrep 进行重复内容检查）

假设：查看或编辑本 README 不需要额外语言运行时依赖。

## 🛠️ 安装 / 初始化

```bash
git clone git@github.com:lachlanchen/lachlanchen.git
cd lachlanchen
```

该仓库以文档为主，不需要构建、测试或安装工具链。

## 🚀 使用

### 直接更新此个人主页

- 直接编辑 `README.md` 中的各个区块。
- 保留核心内容，并避免重复块（尤其是 banner 与 support 面板）。

### 使用提供的脚本

```bash
bash scripts/update-read-me/run_lachlanchen_only.sh
```

验证更新后，仅发布 README：

```bash
bash scripts/push_readme_only.sh
```

## 🧩 配置

- 保持语言切换链接位于文件顶部，并同步到翻译文件夹。
- 所有变体的 banner 都应放在语言链接下方。
- Support 面板锚定在靠下区域、`Contact` 与 `License` 之前。
- 外链尽量使用绝对 URL 以保证主页可移植性。
- 在本地工作流中默认分支/路径为 `main` 与 `/home/lachlan/ProjectsLFS/lachlanchen`。

## 🧪 示例

- 新增一个翻译版本
  1. 创建 `i18n/README.xx.md`，并保持同样的标题结构。
  2. 在 `README.md` 及新翻译文件顶部添加语言链接。
- 新增一个核心仓库条目
  1. 在 `README.md` 的 Core Repositories 表格中追加一行。
  2. 包含简洁单行摘要与标准仓库链接。
- 有条件时优先使用 `.auto-readme-work/` 的流水线输出进行更新。

## 🧭 关于我

| 角色 | 方向 |
|---|---|
| 创始人 & CEO | **LazyingArt LLC** |
| 联合创始人 & COO | **LightMind Tech Ltd** |
| 使命焦点 | 实用型人工智能产品、知识系统与创意工作流 |

## 🔗 快速链接

| 领域 | 链接 |
|---|---|
| 🌐 网站 | [lazying.art](https://lazying.art) · [onlyideas.art](https://onlyideas.art) |
| 🧠 EchoMind | [chat.lazying.art](https://chat.lazying.art) |
| 📚 研究中心 | [paper.lazying.art](https://paper.lazying.art) · [ideas.onlyideas.art](https://ideas.onlyideas.art) |
| 🎓 Google Scholar | [scholar profile](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) |
| 💼 LinkedIn | [lachlan-chen-7a056a233](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |

## 🚀 核心仓库

| 项目 | 摘要 | 链接 |
|---|---|---|
| 🤖 **LazyingArtBot (LAB)** | LazyingArt 生态中的 AI 助理与自动化基础设施 | [Repository](https://github.com/lachlanchen/LazyingArtBot) |
| 🧩 **AutoAppDev** | 用于简化应用开发流程的工具集合 | [Repository](https://github.com/lachlanchen/AutoAppDev) |
| 📖 **AutoNovelWriter** | 长文本创作与故事生成流程 | [Repository](https://github.com/lachlanchen/AutoNovelWriter) |
| 🧠 **AgInTi** | 类人型 AI Agent 试验与系统设计 | [Repository](https://github.com/lachlanchen/AgInTi) |

## 🎯 我关注的方向

**The Art of Lazying** 意味着：在保留深度、质量与人类创造力的同时，构建减少不必要努力的系统。

## 🧩 重点项目

| 项目 | 摘要 |
|---|---|
| OpenHI | 自校准的事件驱动高光谱成像 |
| EchoMind | 用于学习和创作的多语言语音/聊天能力 |
| AutoPublish + AutoPubMonitor | 从草稿到发布的自动化流水线 |
| LazyEdit | AI 辅助编辑、字幕、高亮和内容打包 |

## ❤️ Support

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://camo.githubusercontent.com/24a4914f0b42c6f435f9e101621f1e52535b02c225764b2f6cc99416926004b7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f6e6174652d4c617a79696e674172742d3045413545393f7374796c653d666f722d7468652d6261646765266c6f676f3d6b6f2d6669266c6f676f436f6c6f723d7768697465)](https://chat.lazying.art/donate) | [![PayPal](https://camo.githubusercontent.com/d0f57e8b016517a4b06961b24d0ca87d62fdba16e18bbdb6aba28e978dc0ea21/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f50617950616c2d526f6e677a686f754368656e2d3030343537433f7374796c653d666f722d7468652d6261646765266c6f676f3d70617970616c266c6f676f436f6c6f723d7768697465)](https://paypal.me/RongzhouChen) | [![Stripe](https://camo.githubusercontent.com/1152dfe04b6943afe3a8d2953676749603fb9f95e24088c92c97a01a897b4942/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5374726970652d446f6e6174652d3633354246463f7374796c653d666f722d7468652d6261646765266c6f676f3d737472697065266c6f676f436f6c6f723d7768697465)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |

## 📬 联系方式

| 渠道 | 内容 |
|---|---|
| 邮件 | `lach@lazying.art` |
| 网站 | https://lazying.art |

## 🧪 故障排查

- 流水线运行后出现 banner/support 重复：保留每个块的单一标准副本。
- 快速链接翻译损坏：确认 `i18n/` 中目标文件存在。
- 脚本失败通常来自缺少 `bash` 或 `rg` 环境变量：在 PATH 中补充后从仓库根目录重试。
- 若链接指向过时分支或仓库名，请更新为标准仓库路径。

## 🧰 开发说明

- 采用增量更新：先改 `README.md`，再按需要在翻译文件中同步。
- 优先使用可读性更高的人类友好表格和单行简述。
- 保持非英文版本与英文版本顺序一致。
- `.auto-readme-work/` 目录是流水线快照与语言计划；按生成内容处理。

## 🗺️ 路线图

- 每季度保持所有链接可访问且经过检查。
- 增加“进行中的实验与状态徽章”轻量章节。
- 扩展 `scripts/` 文档，补充前置条件与安全说明。
- 发布精简的更新记录章节，记录值得关注的主页变更。

## 🤝 贡献

欢迎贡献。

- 提交 issue 以修正错误或更新内容。
- 保持修改聚焦、分步迭代。
- 当添加大型新章节时，尽可能同步更新翻译文件。
- 与现有自动化脚本协调，减少冲突提交。

## 📄 许可证

假设仓库当前尚未在根目录列出独立的许可证文件。若需显式授权，请添加标准 `LICENSE`（如 `MIT` 或 `Apache-2.0`）并在此处加入相关说明。

Build less. Live more.
