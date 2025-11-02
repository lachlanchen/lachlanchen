# AutoPublication

Local path: /home/lachlan/ProjectsLFS/auto-publish

Problem
- Publishing a single video to many Chinese and global platforms is error‑prone and time‑consuming: each site has distinct upload flows, cover rules, and forms.

Solution
- Selenium‑based automations for XiaoHongShu, Bilibili, Douyin, ShiPinHao, YouTube with resilient element targeting and fallbacks. Central orchestration scripts reuse metadata and covers, handle captcha services, and record processing logs.

Impact
- Cuts upload time per video from hours to minutes; improves consistency (titles/tags/cover) across platforms; enables reliable daily publication.

Components
- Core: `autopub.py`, `process_video.py` (pipeline orchestration)
- Publishers: `pub_xhs.py`, `pub_bilibili.py`, `pub_douyin.py`, `pub_shipinhao.py`, `pub_y2b.py`
- Login helpers: `login_*` scripts; captcha solvers (`solve_captcha_*`)
- Assets/logs: `logs/`, `videos/`, `videos_db.csv`, `processed.csv`

Notes on robustness
- Explicit waits for clickable/visible elements
- Cover upload/confirm sequences for sites with nested dialogs
- Site‑specific quirks (position/location pickers, title length)

Prerequisites
- Python 3.8+, FFmpeg
- Chrome/Chromedriver (or equivalent) aligned versions

Usage
- `python autopub.py` or `python process_video.py`
- Select target publishers by script/flags; ensure sessions are logged in (cookies) or run login helpers

Integration
- Upstream in the pipeline: LazyEdit (assets, subtitles, cover)
- Orchestrated by AutoPubMonitor (queueing, retries, sync)

Security/Compliance
- Environment guardians to avoid accidental posting; CAPTCHA solvers are opt‑in and can be disabled; stores minimal cookies/session where possible.

License
- See repository
