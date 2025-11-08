# LazyEdit


Problem
- Creators spend hours on transcription, subtitles, covers, teasers, and metadata—high friction for regular publishing.

Solution
- An AI‑assisted pipeline that ingests a video and outputs: burned subtitles, translated variants, highlighted keywords, word‑cards, cover image, teaser repeat, and metadata—all configurable and automated.

Impact
- Turns long editing sessions into a one‑click workflow; improves accessibility (subtitles), discoverability (captions/metadata), and learning value (word cards).

Architecture
- Web app at `http://localhost:8081` with background service via systemd+tmux
- Core modules under `lazyedit/`:
  - `autocut_processor.py` — segmentation + transcription
  - `subtitle_translate.py` — translation
  - `subtitle_metadata.py` — metadata extraction
  - `video_captioner.py` — captions (CLIP/Vision models)
  - `words_card.py` — learning artifacts
  - `openai_version_check.py`, `utils.py`
- Integrates FFmpeg; optional GPU for transcription

Setup
- Python 3.10+, FFmpeg, CUDA (optional), Conda
- `chmod +x install_lazyedit.sh && ./install_lazyedit.sh`
- Service: `lazyedit.service` + tmux `lazyedit`

CLI
- `conda activate lazyedit && python app.py -m lazyedit`

Links
- Repo: `git@github.com:lachlanchen/LazyEdit.git`

License
- See repository
