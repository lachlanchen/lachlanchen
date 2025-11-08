# MicroQuant


Problem
- Fast iteration on simple strategies and live trade hooks with MetaTrader 5 is clunky: bridging Python, MT5, charts, and a small UI with safe order toggles is non‑trivial on Linux.

Solution
- A Tornado + Postgres app wrapping the MetaTrader5 Python API. It fetches OHLC bars, runs demo strategies (e.g., SMA 20/50 crossover), exposes REST endpoints/controls, and can place gated market orders when `TRADING_ENABLED=1`. Includes Linux install script for MT5 under Wine.

Impact
- One lightweight hub for fetching, charting, experimenting, and (optionally) placing orders—reducing context switching and enabling rapid prototyping.

Key Features
- Fetch OHLC data: `GET /api/fetch?symbol=XAUUSD&tf=H1&count=500` → Postgres upsert
- Run strategy: `GET /api/strategy/run?symbol=XAUUSD&tf=H1&fast=20&slow=50` (places order only if enabled)
- Manual trade: `POST /api/trade` (Buy/Sell) with env guard
- Full web UI: candles, indicators, news/AI panels, trading controls

Files/Config
- `README.md` — setup, endpoints, troubleshooting (MT5 PATH, login)
- `environment.yml` / `env_linux.yaml` — conda env incl. `MetaTrader5>=5.0`
- `mt5linux.sh` — installs MT5 + WebView2 via Wine
- `.env` — `DATABASE_URL`, `MT5_PATH`, `MT5_LOGIN/PASSWORD/SERVER`, `TRADING_ENABLED`

Notes
- `MT5_PATH` must point to `terminal64.exe` within your Wine prefix
- If terminal is already logged in, credentials can be omitted
- Default symbol is gold `XAUUSD` (varies per broker naming)

