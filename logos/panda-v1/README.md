# LazyingArt panda · seated edition

Approved September 27, 2026. The smiling panda, peach cheeks and green bamboo are the LazyingArt company mark, not a replacement icon for the individual L & N, Bunko or EchoMind apps.

![LazyingArt seated panda](logo-256.png)

## Pick an asset

| Use | File |
| --- | --- |
| Approved original, unchanged | `source/panda-seated-original.png` · 1254 × 1254 |
| Transparent source | `source/panda-seated-transparent.png` · 1254 × 1254 |
| Website logo | `logo-256.png` or `logo-512.png` |
| Larger transparent mark | `logo-1024.png` |
| Horizontal brand wordmark/banner | `source/banner-original.png` |
| Small browser tab | `web/favicon.ico`, or the 16/32/48/96px PNGs |
| Apple home-screen shortcut | `web/apple-touch-icon.png` · 180px |
| Web manifest icons | `web/icon-192.png`, `web/icon-512.png` |
| Maskable launcher icon | `web/maskable-512.png` · inset full panda on white |
| App/store source | `app/app-icon-1024.png` · opaque square, no baked-in corners |
| iOS asset catalogue starter | `app/ios/AppIcon.appiconset/` |
| Android legacy launcher sizes | `app/android/mipmap-*/ic_launcher.png` · 48–192px |

The favicon uses a close-up face derivative so the smile remains readable. App and home-screen icons use the approved full seated panda on its original light background. Transparent files preserve the panda's white face and belly. On very dark backgrounds, use the opaque app icon or a light backing so the black ears remain visible.

The native assets are reusable files, not a submitted app release. They have not replaced any individual product's store icon. The old logo and SVG/wordmark files elsewhere remain historical assets, not vector versions of this new raster mark.

## Rebuild and verify

With Node.js and ImageMagick installed, run `node logos/panda-v1/build.mjs` from the repository root, then `cd logos/panda-v1 && sha256sum -c SHA256SUMS`. Packaging resizes and encodes the existing masters; it does not regenerate their artwork. See [generation prompts](GENERATION.md) for the built-in image edits.

Website integrations use an explicit PNG favicon, ICO fallback, Apple touch icon and web manifest. Reference: [Google favicon guidance](https://developers.google.com/search/docs/appearance/favicon-in-search) and [web-manifest icons](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/icons).
