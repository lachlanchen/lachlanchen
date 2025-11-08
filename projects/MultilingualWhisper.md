# MultilingualWhisper


Problem
- Whisper’s built‑in language detection is coarse for mixed‑language media; multi‑lingual videos need per‑segment tagging and refined timestamps for clean subtitles.

Solution
- VAD → Whisper pipeline augmented with Lingua for per‑segment (even word‑level) language tags. Post‑processing refines timestamps (split/merge, gap/overlap fixes). Outputs `.srt` and rich `.json` with tags.

Impact
- Accurate multilingual subtitles enable better UX and downstream styling/filtering by language; critical for learning content and global media distribution.

Features
- Silero VAD → Whisper chunking
- Fine‑grained language IDs (Lingua + Whisper)
- Timestamp cleanup and segment refinement
- FFmpeg extraction/repair/normalization
- Outputs: `.srt` + `.json` with `start/end/lang/text/words`

CLI
```
python vad_lang_subtitle.py \
  --video-path path/to/video.mp4 \
  --whisper-model large \
  [--force]
```
Artifacts: `.wav`, `.srt`, `.json`

Repo
- `git@github.com:lachlanchen/MultilingualWhisper.git`

License
- MIT
