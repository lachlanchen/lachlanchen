# VideoCaptionerWithVit


Problem
- Manual captioning for long videos is slow; simple uniform sampling misses relevance; output needs to be time‑aligned for players/editors.

Solution
- Extract salient key‑frames (Katna; OpenCV fallback), caption with ViT+GPT‑2 (HF `nlpconnect/vit-gpt2-image-captioning`), then assemble SRT/JSON with timestamps. Multithreading accelerates long videos.

Impact
- Produces usable SRT/JSON for indexing and accessibility with minimal effort; provides a strong baseline for further human editing or translation.

Pipeline
1) Key‑frame extraction → frames_output/
2) ViT‑GPT2 captioning → per‑frame text
3) Stitch timestamps → SRT + JSON artifacts

CLI
```
python vit_captioner_video.py \
  --video_path path/to/video.mp4 \
  --num_frames 10
```
Artifacts: `video_captioning_frames/`, `video_caption.srt`, `video_caption.json`

Links
- Repo: `git@github.com:lachlanchen/VideoCaptionerWithVit.git`
- Model: https://huggingface.co/nlpconnect/vit-gpt2-image-captioning/

License
- MIT
