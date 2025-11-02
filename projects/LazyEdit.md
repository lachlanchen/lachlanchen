# LazyEdit

Local path: /home/lachlan/Projects/LazyEdit/

AI‑powered automatic video editing that adds professional subtitles, captions, metadata, word cards, teaser intros, and multi‑language enhancements — designed to remove the repetitive work in content creation.

## Features
- Auto‑transcription and subtitle burn‑in
- CLIP‑style captions and cover image generation
- Highlighting key words during playback
- Word cards for language learning
- Teaser generation (smart repetition)
- Multi‑language support (EN/ZH + translations)
- Systemd/tmux integration for background service

## Architecture
- Python application; web UI at `http://localhost:8081`
- Core modules in `lazyedit/` (transcribe, translate, metadata, word cards)
- Integrates with FFmpeg and GPU for acceleration

## Setup
- Python 3.10+, FFmpeg, CUDA (optional), Conda
- `chmod +x install_lazyedit.sh && ./install_lazyedit.sh`
- Service: `lazyedit.service` (systemd) and tmux session `lazyedit`

## CLI
- `conda activate lazyedit && python app.py -m lazyedit`

## Links
- Repo: `git@github.com:lachlanchen/LazyEdit.git`

## License
- See repository

