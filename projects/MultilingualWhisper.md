# MultilingualWhisper

Local path: /home/lachlan/ProjectsLFS/whisper_with_lang_detect

Subtitle generation built on OpenAI Whisper with precise per‑segment language detection and timestamp refinement. Ideal for videos with multiple languages.

## Features
- Silero VAD → Whisper pipeline
- Fine‑grained language tags (Lingua + Whisper)
- Intelligent segment refinement (punctuation splits, merges, gap/overlap fixes)
- Outputs SRT + JSON with language labels
- Robust FFmpeg handling for diverse inputs

## Usage
```
python vad_lang_subtitle.py \
  --video-path path/to/video.mp4 \
  --whisper-model large \
  [--force]
```
Artifacts: `.wav`, `.srt`, `.json`

## Links
- Repo: `git@github.com:lachlanchen/MultilingualWhisper.git`

## License
- MIT

