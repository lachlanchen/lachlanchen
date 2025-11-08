# WordsOrigin


Problem
- Etymology resources are fragmented and non‑visual; learners benefit from seeing how words relate across time, families, and morphology.

Solution
- Analyze a word’s etymology, persist normalized JSON, and render a graph image of roots, derivations, and relations. A small Tornado API serves both JSON and PNG; notebooks explore algorithms for parsing and layout.

Impact
- Makes histories of words visible and explorable; a foundation for language learning tools (e.g., word cards) and comparative linguistics.

Features
- Analyzer with on‑disk cache (`jsons/`), plotting to `images/`
- API to generate on demand and return Base64 or file
- Notebooks iterating on structure extraction and visualization

Key Components
- `app.py` — Tornado server; `/word/etymology` endpoints
- `word_etymology_analyzer.py` — fetch/normalize etymology to JSON
- `etymology_graph.py` — build and plot network
- `images/`, `jsons/` — outputs and caches
- `etymology_*.ipynb` — prototypes and research

Usage
- Python 3.9+
- `python app.py` then query `/word/<term>`

Links
- Repo: `git://sb2/etymology.git` (local remote)

License
- See repository
