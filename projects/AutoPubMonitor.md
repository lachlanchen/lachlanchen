# AutoPubMonitor

Local path: /home/lachlan/Projects/autopub_monitor

Problem
- Coordinating ingestion, processing, and multi‑platform publishing across machines is brittle without a central queue, service controls, and retries.

Solution
- A file watcher + queue + tmux service manager: new media triggers queued processing, re‑usable workers run steps (transcribe, translate, caption, package), then hand off to AutoPublication for site‑specific uploads. Sync utilities move files across hosts.

Impact
- Durable, recoverable end‑to‑end automation that turns a folder drop into published content across platforms with minimal manual intervention.

Components
- Core: `video_processor_core.py`, `video_processing_client.py`
- Services: `service_manager.sh`, `queue_manager_service.sh`
- Watchers/Sync: `file_watcher_service.sh`, `file_sync_service.sh`, `queue_file_utility.sh`
- Utilities: window info tools, logs, CSVs

Install
- Linux + bash + tmux + inotify‑tools; Python 3.8; FFmpeg

Usage
- Start: `./service_manager.sh start` · Stop: `./service_manager.sh stop`
- Queue: `./queue_file_utility.sh "pattern_or_path"`

Links
- Repo: `git@github.com:lachlanchen/AutoPubMonitor.git`

License
- Apache 2.0
