# AutoPubMonitor

Local path: /home/lachlan/Projects/autopub_monitor

A file‑watching and queue‑based orchestration system for content processing and multi‑platform publishing. Detects new media, processes sequentially, and publishes via per‑platform drivers.

## Features
- Directory watching (inotify) and queue management
- Publishing to XiaoHongShu, Bilibili, Douyin, ShiPinHao, YouTube
- Caching to avoid duplicate work
- Service control via tmux and shell scripts

## Components
- `video_processor_core.py` — main processing engine
- `video_processing_client.py` — client wrapper
- `service_manager.sh` — start/stop all services (tmux)
- `file_watcher_service.sh` — monitor and enqueue
- `file_sync_service.sh` — sync across systems
- `queue_manager_service.sh`, `queue_file_utility.sh` — manage the queue

## Install (summary)
- Linux + bash + tmux + inotify-tools
- Python 3.8 (conda env recommended)
- FFmpeg installed

## Usage
- Start services: `./service_manager.sh start`
- Stop services: `./service_manager.sh stop`
- Manually add to queue: `./queue_file_utility.sh "pattern_or_path"`

## Links
- Repo: `git@github.com:lachlanchen/AutoPubMonitor.git`

## License
- Apache 2.0

