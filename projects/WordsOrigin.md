# WordsOrigin

Local path: /home/lachlan/Projects/WordsOrigin

Analyze the origin of words and visualize etymological relationships as graphs. Includes an interactive Tornado web app and a collection of Jupyter notebooks for exploration.

## Features
- Word etymology analysis with caching
- Graph construction and rendering to images
- REST endpoints to generate and serve etymology graphs
- Exploration notebooks (OpenAI‑assisted parsing variants, graph iterations)

## Key Components
- `app.py` — Tornado server with handlers for `/word/<term>` (JSON + image)
- `word_etymology_analyzer.py` — analysis pipeline with caching
- `etymology_graph.py` — graph builder and plotter
- `images/`, `jsons/` — output artifacts
- `etymology_*.ipynb` — research and prototyping notebooks

## Usage (indicative)
- Python 3.9+
- `pip install -r requirements.txt` (if present) or create an environment with Tornado + plotting libs
- `python app.py` then query the API or open the simple UI in `templates/`

## Links
- Repo: `git://sb2/etymology.git` (local remote)

## License
- See repository

