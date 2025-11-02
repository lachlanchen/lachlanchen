# AiSecretary

Local path: /home/lachlan/Projects/EmailAssistant/

A personal email and calendar assistant that ingests incoming messages, performs intelligent triage, and schedules events on your behalf. The system consists of a Python backend (Tornado) and a multi‑platform client (Expo React Native), with storage in PostgreSQL.

## Highlights
- Inbox triage and actioning with LLM hooks
- Calendar scheduling via CalDAV (iCloud compatible)
- Secure auth and per‑user settings
- Works as a local service or cloud‑hosted API

## Architecture
- Backend: Python 3.11 + Tornado (async), PostgreSQL
- Client: Expo (React Native + TypeScript) targeting iOS/Android/Web (PWA)
- Config: .env + pydantic settings
- Background tasks: asyncio + Tornado PeriodicCallback

Backend layout (indicative):
- backend/src/aisecretary/app.py — Tornado entrypoint
- backend/src/aisecretary/handlers — HTTP endpoints
- backend/src/aisecretary/services — Email/Calendar integrations
- backend/src/aisecretary/storage — DB access layer

## Setup
1) Create virtualenv and install backend deps (see pyproject.toml/requirements):
- `python -m venv .venv && source .venv/bin/activate`
- `pip install -r requirements.txt`

2) Configure environment
- PostgreSQL DSN, email provider creds (e.g., iCloud app password), CalDAV URL

3) Run
- `python -m aisecretary.app`

## Links
- Repo: `git@github.com:lachlanchen/AISecretary.git`
- Stack: Tornado, CalDAV, IMAP/SMTP, Expo RN, PostgreSQL

## License
- See repository

