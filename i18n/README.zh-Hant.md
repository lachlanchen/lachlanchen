[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)


[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# Lachlan Chen · he/him

[![Creator & CEO](https://img.shields.io/badge/Creator%20%26%20CEO-LazyingArt%20LLC-0f766e?style=flat-square)](https://lazying.art)
[![Cofounder & COO](https://img.shields.io/badge/Cofounder%20%26%20COO-LightMind%20Tech%20Ltd-1d4ed8?style=flat-square)](https://lightmind.art)
[![Profile Repository](https://img.shields.io/badge/GitHub-Profile%20README-111827?style=flat-square)](https://github.com/lachlanchen/lachlanchen)
[![Google Scholar](https://img.shields.io/badge/Scholar-Profile-4285F4?style=flat-square)](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Lachlan%20Chen-0A66C2?style=flat-square)](https://hk.linkedin.com/in/lachlan-chen-7a056a233)

我打造能幫助人們以更低摩擦進行創作、學習與記憶的**工具與系統**。

> **The Art of Lazying**  
> Build less. Unlock more life.

---

## 📌 概覽

此儲存庫是 [`lachlanchen`](https://github.com/lachlanchen) 的 **GitHub 個人檔案 README 儲存庫**。  
採文件優先與多語言設計，`README.md` 為主要（canonical）個人檔案入口，翻譯版本位於 `i18n/`。

## 🧭 關於我

- **LazyingArt LLC** 創辦人暨 CEO
- **LightMind Tech Ltd** 共同創辦人暨 COO
- 專注領域：實用型 AI 產品、知識系統、創意工作流

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
| 🧩 **AutoAppDev** | 用於精簡應用開發流程的工具鏈 | [Repository](https://github.com/lachlanchen/AutoAppDev) |
| 📖 **AutoNovelWriter** | 長篇創作與故事生成工作流 | [Repository](https://github.com/lachlanchen/AutoNovelWriter) |
| 🧠 **AgInTi** | 類人 AI 代理實驗與系統設計 | [Repository](https://github.com/lachlanchen/AgInTi) |

## 🎯 我重視的事

**The Art of Lazying** 代表以系統設計減少不必要的投入，同時保留深度、品質與人類創造力。

## ✨ 特色

- 在單一儲存庫中維護 canonical GitHub 個人檔案 README。
- 在 `i18n/` 提供多語言個人檔案文件。
- 在 `projects/` 整理生態系專案筆記。
- 在 `figs/`、`logos/`、`logos-bamboo/` 存放品牌與視覺素材。
- 提供 README 專用發佈輔助腳本：`scripts/push_readme_only.sh`。

## 🗂️ 專案結構

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

說明：
- 頂層 symlink（例如 `EchoMind`、`AutoPublication`、`IdeasGlass`）指向外部本機儲存庫，屬於便利連結。
- 本儲存庫在根目錄不定義單一應用執行環境。

## ✅ 先決條件

- Git
- Bash（用於輔助腳本）
- 可存取此個人檔案儲存庫的 GitHub 帳號

## 📥 安裝

```bash
git clone https://github.com/lachlanchen/lachlanchen.git
cd lachlanchen
```

## ▶️ 使用方式

主要工作流程：

1. 編輯 `README.md`（canonical 英文／根目錄個人檔案內容）。
2. 保持 `i18n/` 中各語言檔案同步。
3. 驗證連結與段落內容。
4. 發佈 README 專用更新時，只提交 `README.md`。

README 專用推送輔助：

```bash
scripts/push_readme_only.sh -m "Update profile README" -b main
```

腳本行為：

1. 擷取 `origin`。
2. 從 `origin/<branch>` 建立暫時 worktree。
3. 將根目錄 `README.md` 複製到暫時 worktree。
4. 僅提交並推送 `README.md`。
5. 清理暫時狀態。

## ⚙️ 設定

- 每個 README 變體的頂端都以**單一語言選擇列**維護語言選項。
- 根 README 目前連向：
  - `i18n/README.ar.md`, `README.es.md`, `README.fr.md`, `README.ja.md`, `README.ko.md`, `README.vi.md`, `README.zh-Hans.md`, `README.zh-Hant.md`, `README.de.md`, `README.ru.md`
- 贊助連結設定於 `.github/FUNDING.yml`。

## 🧪 範例

個人檔案維護範例：

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

記錄於 `projects/*.md`（外部儲存庫）的生態系指令範例：

```bash
python voice_chatbot_app_dual_enhanced.py
python autopub.py
python process_video.py
./service_manager.sh start
python vad_lang_subtitle.py --video-path <video>
python vit_captioner_video.py --video_path <video>
```

## 🛠️ 開發備註

- 此為個人檔案／文件型儲存庫，而非單體軟體套件。
- 變更應保持精簡、對外可讀，且與儲存庫現況一致。
- 重整內容時，請保留既有的重要資訊。
- 若細節不確定，優先保留現有文字並加上澄清註記。

## 🧯 疑難排解

- `No README changes compared to origin/main`：本機 `README.md` 與遠端一致，無需推送。
- 圖片／橫幅顯示異常：請確認 `figs/banner.png` 與 GitHub raw/blob URL 路徑。
- 語言導覽列不一致：每個 README 變體頂端僅保留一行語言選項列。
- 根目錄與 i18n 內容不一致：完成根 README 編輯後更新翻譯。

## 🗺️ 路線圖

- 維持 `README.md` 與 `i18n/README.*.md` 各章節的一致性。
- 讓生態系連結與活躍專案、網域保持同步。
- 持續提升 `projects/catalog.md` 與 `projects/sites.md` 的清晰度。
- 新增輕量檢查以驗證連結完整性與語言列一致性。

## 🤝 貢獻

歡迎協助提升個人檔案清晰度、連結正確性與多語言一致性。

1. 從最新 `main` fork 或建立分支。
2. 提出聚焦的 README/i18n 改進。
3. 以清楚的變更摘要建立 PR。

若直接編輯此儲存庫，請確保以 README 為主的提交與其他本機檔案變更隔離。

## ❤️ Support / Sponsor

- GitHub Sponsors: https://github.com/sponsors/lachlanchen
- Donate: https://chat.lazying.art/donate
- LazyingArt: https://lazying.art
- EchoMind: https://chat.lazying.art
- OnlyIdeas: https://onlyideas.art

## 🙏 致謝

- 感謝 LazyingArt 與 LightMind 生態系中的協作者與使用者。
- 感謝支持實用 AI 工具與知識共享的開源社群與研究者。

## 📄 授權

目前儲存庫尚未提供根層級 `LICENSE` 檔案。  
推定：在未明確新增授權前，內容視為個人檔案／文件資料。
