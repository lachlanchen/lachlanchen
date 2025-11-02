# VideoCaptionerWithClip

Local path: /home/lachlan/ProjectsLFS/image_captioning

Problem
- Need high‑quality image captions and embeddings for search/metadata; desire to leverage CLIP semantics with a text decoder.

Solution
- Use CLIP visual encoder + GPT‑2 decoder with a mapping module (ClipCap‑style). Included `clip-gpt-captioning` project provides training/inference on Flickr30k and utilities for prediction.

Impact
- Fast, decent image captions for tagging, previews, and as inputs to downstream video pipelines (and complements ViT‑GPT2 video captioning).

Features
- CLIP feature extraction + GPT‑2 generation
- Small/Large checkpoints; mapping via Transformer layers
- Prediction utilities for single images

Usage (upstream `clip-gpt-captioning`)
- Create venv; `pip install -r requirements.txt`
- Predict: `python src/predict.py -I <image> -S <S|L> -C <checkpoint>`

Notes
- For time‑aligned video SRT/JSON, prefer `VideoCaptionerWithVit`.

Links
- Upstream: https://github.com/jmisilo/clip-gpt-captioning
- Related: `VideoCaptionerWithVit`

License
- See upstream repository
