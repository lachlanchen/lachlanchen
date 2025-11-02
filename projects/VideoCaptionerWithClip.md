# VideoCaptionerWithClip

Local path: /home/lachlan/ProjectsLFS/image_captioning

Image/video captioning using OpenAI CLIP embeddings with a GPT‑2 decoder. This folder includes the `clip-gpt-captioning` implementation and surrounding scripts for video workflows.

## Features
- CLIP feature extraction + GPT‑2 text generation
- Example training configs (Flickr30k)
- Utilities for image/video prediction

## Usage (upstream `clip-gpt-captioning`)
- Create venv and install `requirements.txt`
- Run prediction: `python src/predict.py -I <image> -S <S|L> -C <checkpoint>`

## Notes
- For time‑aligned video captions, see `VideoCaptionerWithVit` (ViT‑GPT2) which handles key‑frames and SRT/JSON output.

## Links
- Upstream: https://github.com/jmisilo/clip-gpt-captioning
- Related: `VideoCaptionerWithVit` in this folder

## License
- See upstream repository

