# EchoMind


Problem
- Cross‑language voice conversations for learning are fragmented and slow; transcription, LLM response, and natural TTS require juggling tools, while session memory is often inconsistent.

Solution
- A local‑first multimodal chat server: browser mic → VAD → Whisper (chunked) → OpenAI chat/tutor → GPT‑SoVITS TTS, all over a single Tornado HTTPS + WebSocket app with shared model loaders and DB‑first memory.
- In‑place English/Japanese enhancement views (grammar, furigana) amplify learning value without cloud add‑ons.

Impact
- Real‑time, privacy‑preserving multilingual tutoring and conversation practice. GPU usage stabilized (shared loaders), consistent user/conversation memory improves continuity and outcomes.

Architecture
- Flow: Mic → VAD → (Hotword?) → Whisper → OpenAI Chat/Tutor → GPT‑SoVITS → Web Audio
- Server: Tornado HTTPS + WebSocket; SQLite (users, sessions, conversations, messages, settings, memory)
- Concurrency: WebSocket event loop; single SharedModelManager instance to prevent OOM

Key Components
- `voice_chatbot_app_dual_enhanced.py` — HTTPS + WebSocket server; routes, sessions, UI
- `model_manager.py` — Whisper/OpenAI/SoVITS loaders and caches
- `openai_request.py` — LLM + TTS helpers; structured outputs
- `sovits_request.py` — GPT‑SoVITS client + caching
- `database.py`, `auth.py` — persistence and auth
- `templates/` UI (login, enhancements), `static/` assets

API (WebSocket excerpts)
- Client → Server: `audio_chunk`, `voice_change`, `create_conversation`, `load_conversation`, `get_conversations`, `delete_conversation`, `request_language_enhancement`, `save_settings`, `load_settings`, `reset_settings`
- Server → Client: `transcription`, `ai_response`, `tts_ready`, `voice_changed`, `conversation_*`, `*_enhancement`, `settings_*`, `audio_rejected`, `error`

Setup
- Python 3.9+, FFmpeg, OpenSSL
- GPT‑SoVITS server at `http://127.0.0.1:9880`
- `pip install -r requirements.txt`
- `python voice_chatbot_app_dual_enhanced.py` → `https://localhost:${PORT:-8080}`

Links
- Repo: `git@github.com:lachlanchen/EchoMind.git`
- App: https://chat.lazying.art

License
- MIT (placeholder in repo)
