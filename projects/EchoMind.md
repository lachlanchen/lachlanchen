# EchoMind

Local path: /home/lachlan/Projects/voice_chatbot/

Multilingual, local‑first voice chatbot with real‑time transcription (Whisper), conversational AI (OpenAI), and natural TTS (GPT‑SoVITS), served over Tornado + WebSockets. Built to help people learn, connect, and create while staying private and fast.

## Features
- Real‑time Whisper transcription (GPU‑ready)
- OpenAI chat responses with structured outputs
- GPT‑SoVITS TTS with voice switching and caching
- Auth + per‑user settings; conversation history
- English/Japanese “enhancement” views (grammar, furigana)
- Shared model manager to avoid GPU OOM

## Architecture
Mic → VAD → (Hotword) → Whisper → OpenAI Chat/Tutor → GPT‑SoVITS → Web Audio

Server: Tornado HTTPS + WebSocket; SQLite for users/sessions/conversations/settings

Key files
- `voice_chatbot_app_dual_enhanced.py` — server entrypoint
- `model_manager.py` — shared loaders (Whisper, OpenAI, SoVITS)
- `openai_request.py`, `sovits_request.py` — clients and caching
- `templates/` — login + main UI; `static/` assets

## Setup
- Python 3.9+
- FFmpeg, OpenSSL
- Run GPT‑SoVITS server at `http://127.0.0.1:9880`
- `pip install -r requirements.txt`
- `python voice_chatbot_app_dual_enhanced.py` → `https://localhost:8080`

## Links
- Repo: `git@github.com:lachlanchen/EchoMind.git`
- App: https://chat.lazying.art

## License
- MIT (placeholder in repo)

