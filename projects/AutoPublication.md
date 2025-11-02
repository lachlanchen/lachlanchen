# AutoPublication

Local path: /home/lachlan/ProjectsLFS/auto-publish

Automates publishing of processed videos to multiple platforms (XiaoHongShu, Bilibili, Douyin, ShiPinHao, YouTube). Designed to work with AutoPubMonitor and the wider LazyingArt pipeline.

## Highlights
- Selenium‑driven upload flows for multiple platforms
- Reuse metadata (title, description, tags, cover)
- Captcha helpers (2captcha/Turing) for login workflows
- CSV logs for processed videos; caching support

## Notable Files
- `autopub.py`, `process_video.py` — core orchestration
- `pub_xhs.py`, `pub_bilibili.py`, `pub_douyin.py`, `pub_shipinhao.py`, `pub_y2b.py` — per‑platform publishers
- `login_*` scripts — session bootstrap helpers
- `requirements.txt` — Selenium, Requests, FFmpeg tooling

## Prerequisites
- Python 3.8+
- Browser + matching WebDriver (e.g., Chrome/Chromedriver)
- FFmpeg (for media handling)

## Usage (indicative)
- `python autopub.py` or `python process_video.py` to publish a prepared video
- Per‑platform flags in publisher scripts (see source)

## Relationship
- Works with AutoPubMonitor (queueing, watching, sync) and LazyEdit (asset generation)

## License
- See repository

