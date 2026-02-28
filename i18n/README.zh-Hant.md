[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)


[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# Lachlan Chen · he/him

| [![Creator & CEO](https://img.shields.io/badge/Creator%20%26%20CEO-LazyingArt%20LLC-0f766e?style=flat-square)](https://lazying.art) | [![Cofounder & COO](https://img.shields.io/badge/Cofounder%20%26%20COO-LightMind%20Tech%20Ltd-1d4ed8?style=flat-square)](https://lightmind.art) | [![Profile Repository](https://img.shields.io/badge/GitHub-Profile%20README-111827?style=flat-square)](https://github.com/lachlanchen/lachlanchen) | [![Google Scholar](https://img.shields.io/badge/Scholar-Profile-4285F4?style=flat-square)](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-Lachlan%20Chen-0A66C2?style=flat-square)](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |
|---|---|---|---|---|

我打造能幫助人們更順暢地創作、學習與記憶的**工具與系統**。

> **The Art of Lazying**  
> Build less. Unlock more life.

## 📌 概覽

這個儲存庫是 [`lachlanchen`](https://github.com/lachlanchen) 的 **GitHub 個人簡介 README 倉庫**。它採用文件優先、多語系設計，並設定 `README.md` 為主要（canonical）個人簡介入口，翻譯版本則放在 `i18n/`。

## 🎯 個人簡介快照

| 項目 | 說明 |
|---|---|
| 儲存庫用途 | GitHub 個人簡介首頁內容 |
| 主語系 | `README.md` |
| 在地化版本 | `i18n/` |
| 更新流程 | `scripts/*` + `.auto-readme-work/` 快照 |

## ✨ 個人簡介特色

| 領域 | 能力 |
|---|---|
| 內容模型 | 以 `README.md` 集中管理公開個人簡介內容 |
| 國際化 | `i18n/` 中的多語言入口 |
| 自動化 | 用於批次更新 README 的輕量腳本 |
| 資金可見度 | 個人簡介層級的捐款／贊助面板 |
| 專案治理 | 精簡的一行式專案彙整摘要 |

## 🗂️ 專案結構

| 路徑 | 用途 |
|---|---|
| `README.md` | 用於 GitHub 個人頁面的主要英文簡介 |
| `i18n/` | 已翻譯的個人簡介版本 |
| `projects/` | 本地專案索引與筆記 |
| `scripts/push_readme_only.sh` | 只提交/發佈 `README.md` 的 Git 工作流程助手 |
| `scripts/update-read-me/` | 本地簡介更新輔助腳本 |
| `scripts/auto-update-readme/` | 批次更新多個儲存庫時使用的流程 |
| `.github/FUNDING.yml` | GitHub Sponsors / 資金設定檔 |
| `figs/` | 個人簡介使用的 banner 與徽章素材 |

## ✅ 先決條件

- `git`
- `bash`（用來執行維護腳本）
- `rg`（建議：本倉庫腳本會用 ripgrep 進行重複檢查）

Assumption: 瀏覽與編輯這份 README 不需要語系特定的執行環境相依。

## 🛠️ 安裝 / 引導

```bash
git clone git@github.com:lachlanchen/lachlanchen.git
cd lachlanchen
```

此儲存庫以文件為主；不需要建置／測試／安裝工具鏈。

## 🚀 使用方式

### 直接更新這份個人簡介 README

- 直接在 `README.md` 內修改各區塊。
- 保留核心內容不變，並避免重複區塊（特別是 banner 與 support panel）。

### 使用提供的腳本

```bash
bash scripts/update-read-me/run_lachlanchen_only.sh
```

更新完成並確認後，只發佈 README：

```bash
bash scripts/push_readme_only.sh
```

## 🧩 組態

- 在每個檔案頂端保留語言切換連結，並同步到 `i18n/`。
- Banner 皆放在語言連結下方。
- Support 面板放在下半部、`Contact` / `License` 之前。
- 盡量使用絕對 URL 確保外部連結的可移植性。
- 工作流程中假設預設分支為 `main`，本機路徑為 `/home/lachlan/ProjectsLFS/lachlanchen`。

## 🧪 範例

- 新增一個翻譯版個人簡介
  1. 建立 `i18n/README.xx.md` 並使用相同段落結構。
  2. 在 `README.md` 與新翻譯檔案的頂端都加入語言連結。
- 新增一個核心儲存庫條目
  1. 在 `README.md` 的 Core Repositories 表格新增一行。
  2. 包含簡短的一行摘要與正式的儲存庫 URL。
- 在 `.auto-readme-work/` 內容可用時，從那裡執行個人簡介更新流程。

## 🧭 關於

| 角色 | 專注 |
|---|---|
| 創辦人暨 CEO | **LazyingArt LLC** |
| 共同創辦人暨 COO | **LightMind Tech Ltd** |
| 任務重點 | 實用 AI 產品、知識系統與創意工作流 |

## 🔗 快速連結

| 領域 | 連結 |
|---|---|
| 🌐 網站 | [lazying.art](https://lazying.art) · [onlyideas.art](https://onlyideas.art) |
| 🧠 EchoMind | [chat.lazying.art](https://chat.lazying.art) |
| 📚 研究中心 | [paper.lazying.art](https://paper.lazying.art) · [ideas.onlyideas.art](https://ideas.onlyideas.art) |
| 🎓 Google Scholar | [scholar profile](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) |
| 💼 LinkedIn | [lachlan-chen-7a056a233](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |

## 🚀 核心儲存庫

| 專案 | 摘要 | 連結 |
|---|---|---|
| 🤖 **LazyingArtBot (LAB)** | LazyingArt 生態系中的 AI 助理與自動化基礎 | [Repository](https://github.com/lachlanchen/LazyingArtBot) |
| 🧩 **AutoAppDev** | 用於簡化應用開發流程的工具 | [Repository](https://github.com/lachlanchen/AutoAppDev) |
| 📖 **AutoNovelWriter** | 長篇創作與故事生成工作流程 | [Repository](https://github.com/lachlanchen/AutoNovelWriter) |
| 🧠 **AgInTi** | 人形 AI 代理實驗與系統設計 | [Repository](https://github.com/lachlanchen/AgInTi) |

## 🎯 我關心的事

**The Art of Lazying** 代表透過系統設計，降低不必要的努力，同時保留深度、品質與人類創造力。

## 🧩 主要專案

| 專案 | 摘要 |
|---|---|
| OpenHI | 自校正事件式高光譜成像 |
| EchoMind | 多語音／文字學習與創作互動 |
| AutoPublish + AutoPubMonitor | 草稿到發佈流程自動化 | 
| LazyEdit | AI 輔助編輯、字幕、重點提取與打包 |

## ❤️ Support

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://camo.githubusercontent.com/24a4914f0b42c6f435f9e101621f1e52535b02c225764b2f6cc99416926004b7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f6e6174652d4c617a79696e674172742d3045413545393f7374796c653d666f722d7468652d6261646765266c6f676f3d6b6f2d6669266c6f676f436f6c6f723d7768697465)](https://chat.lazying.art/donate) | [![PayPal](https://camo.githubusercontent.com/d0f57e8b016517a4b06961b24d0ca87d62fdba16e18bbdb6aba28e978dc0ea21/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f50617950616c2d526f6e677a686f754368656e2d3030343537433f7374796c653d666f722d7468652d6261646765266c6f676f3d70617970616c266c6f676f436f6c6f723d7768697465)](https://paypal.me/RongzhouChen) | [![Stripe](https://camo.githubusercontent.com/1152dfe04b6943afe3a8d2953676749603fb9f95e24088c92c97a01a897b4942/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5374726970652d446f6e6174652d3633354246463f7374796c653d666f722d7468652d6261646765266c6f676f3d737472697065266c6f676f436f6c6f723d7768697465)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |

## 📬 聯絡方式

| 渠道 | 內容 |
|---|---|
| Email | `lach@lazying.art` |
| 網站 | https://lazying.art |

## 🧪 疑難排解

- 管線執行後出現重複的 banner / support 區塊：保留各區塊唯一版本並刪除重複。
- 快捷連結翻譯錯位：請確認 `i18n/` 中對應檔案是否存在。
- 腳本錯誤通常來自本機缺少 `bash` 或 `rg`，請安裝並在儲存庫根目錄重試。
- 若某個連結指向已失效分支或儲存庫名稱，請更新為正確的主路徑。

## 🧰 開發備註

- 依循增量式編輯：先更新 `README.md`，再依需求同步到翻譯檔。
- 偏好人類可讀的表格列與簡短一行摘要。
- 保持各語系版本的章節順序一致。
- `.auto-readme-work/` 目錄為 pipeline 快照與語言規劃；請將其視為產生的上下文。

## 🗺️ 路線圖

- 每季維護並驗證所有連結是否仍有效。
- 新增輕量「進行中的實驗與狀態標籤」區段。
- 擴充 `scripts/` 文件中的前置條件與安全注意事項。
- 發佈精簡的版本更新紀錄小節，記錄關鍵個人簡介變更。

## 🤝 貢獻

歡迎提交貢獻。

- 發起 issue 來修正或更新內容。
- 保持變更聚焦且逐步進行。
- 新增大型區段時，盡量同步更新對應的語言版本。
- 與既有自動化腳本協作，避免合併衝突。

## 📄 授權

假設本儲存庫目前根目錄未列出專門授權文件。若你想明確授權，請新增標準 `LICENSE` 檔（例如 `MIT` 或 `Apache-2.0`）並在這裡加入授權說明。

Build less. Live more.
