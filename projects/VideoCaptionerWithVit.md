# VideoCaptionerWithVit

Local path: /home/lachlan/ProjectsLFS/vit-gpt2-image-captioning

Generates time‑aligned captions from videos by extracting key‑frames (Katna/OpenCV) and captioning with ViT + GPT‑2 (`nlpconnect/vit-gpt2-image-captioning`). Outputs SRT and JSON.

## Features
- Smart key‑frame extraction (Katna) with OpenCV fallback
- Pretrained ViT+GPT‑2 captioning via Hugging Face
- Multithreaded processing for long videos
- SRT + JSON outputs

## Usage
```
python vit_captioner_video.py \
  --video_path path/to/video.mp4 \
  --num_frames 10
```
Artifacts: `video_captioning_frames/`, `video_caption.srt`, `video_caption.json`

## Links
- Repo: `git@github.com:lachlanchen/VideoCaptionerWithVit.git`
- Model: https://huggingface.co/nlpconnect/vit-gpt2-image-captioning/

## License
- MIT

