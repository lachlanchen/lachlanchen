# QuantitativeTrading

Local path: /home/lachlan/Projects/QuantitativeTrading/

Problem
- Building a multi‑asset quant stack requires wiring data providers, storage, research notebooks, and broker APIs into a coherent workflow that is easy to iterate.

Solution
- A workspace bundling a PWA dashboard, provider catalog (Binance, Coinbase Advanced, Alpaca, Futu), Postgres persistence, and micro‑platforms: `AI‑Trader`, `OpenStock`, `metatrader/`, with scripts and docs to bootstrap research and live testing.

Impact
- Faster path from data ingestion → indicators/alphas → backtests → live experiments. Shared infra minimizes repeated glue work across projects.

Highlights
- PWA dashboard with live candle view and provider testing tabs
- Provider catalog for REST endpoints and credentials
- Postgres storage; simple migrations
- `futunn/FTAPI4Python` vendored for HK markets access (Apache 2)

Layout
- `AI-Trader/` — strategy experiments
- `OpenStock/` — stock data and exploration
- `metatrader/` — MT5 interop
- `app/` — PWA + API
- `docs/` — data sources and guides
- `scripts/`, `bin/` — utilities

Setup
- Python + `pip install -r requirements.txt`
- Set `DATABASE_QT_URL` (e.g., Postgres DSN)

Roadmap Ideas
- Unify backtesting API; add risk/portfolio modules
- Broker adapters (IBKR/ccxt) behind a common interface
- Scheduled ingestors and event‑driven pipelines

