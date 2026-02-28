[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)


[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# Lachlan Chen · er/ihm

[![Creator & CEO](https://img.shields.io/badge/Creator%20%26%20CEO-LazyingArt%20LLC-0f766e?style=flat-square)](https://lazying.art)
[![Cofounder & COO](https://img.shields.io/badge/Cofounder%20%26%20COO-LightMind%20Tech%20Ltd-1d4ed8?style=flat-square)](https://lightmind.art)
[![Profile Repository](https://img.shields.io/badge/GitHub-Profile%20README-111827?style=flat-square)](https://github.com/lachlanchen/lachlanchen)
[![Google Scholar](https://img.shields.io/badge/Scholar-Profile-4285F4?style=flat-square)](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Lachlan%20Chen-0A66C2?style=flat-square)](https://hk.linkedin.com/in/lachlan-chen-7a056a233)

Ich entwickle **Tools und Systeme**, die Menschen helfen, mit weniger Reibung zu erstellen, zu lernen und zu erinnern.

> **The Art of Lazying**  
> Weniger bauen. Mehr Leben freischalten.

---

## 📌 Überblick

Dieses Repository ist das **GitHub-Profile-README-Repository** für [`lachlanchen`](https://github.com/lachlanchen).  
Es ist dokumentationsorientiert und mehrsprachig, mit `README.md` als kanonischem Profileinstieg und übersetzten Varianten unter `i18n/`.

## 🧭 Über mich

- Creator & CEO von **LazyingArt LLC**
- Cofounder & COO bei **LightMind Tech Ltd**
- Fokus: praktische KI-Produkte, Wissenssysteme und kreative Workflows

## 🔗 Schnellzugriffe

| Bereich | Link |
|---|---|
| 🌐 Websites | [lazying.art](https://lazying.art) · [onlyideas.art](https://onlyideas.art) |
| 🧠 EchoMind | [chat.lazying.art](https://chat.lazying.art) |
| 📚 Forschungs-Hub | [paper.lazying.art](https://paper.lazying.art) · [ideas.onlyideas.art](https://ideas.onlyideas.art) |
| 🎓 Google Scholar | [Scholar-Profil](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) |
| 💼 LinkedIn | [lachlan-chen-7a056a233](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |

## 🚀 Kern-Repositories

| Projekt | Zusammenfassung | Link |
|---|---|---|
| 🤖 **LazyingArtBot (LAB)** | KI-Assistent und Automatisierungsgrundlage im LazyingArt-Ökosystem | [Repository](https://github.com/lachlanchen/LazyingArtBot) |
| 🧩 **AutoAppDev** | Tooling zur Optimierung von App-Entwicklungs-Workflows | [Repository](https://github.com/lachlanchen/AutoAppDev) |
| 📖 **AutoNovelWriter** | Workflows für kreatives Langform-Schreiben und Story-Generierung | [Repository](https://github.com/lachlanchen/AutoNovelWriter) |
| 🧠 **AgInTi** | Experimente mit humanoiden KI-Agenten und Systemdesign | [Repository](https://github.com/lachlanchen/AgInTi) |

## 🎯 Was mir wichtig ist

**The Art of Lazying** bedeutet, Systeme so zu gestalten, dass unnötiger Aufwand reduziert wird, ohne Tiefe, Qualität und menschliche Kreativität zu verlieren.

## ✨ Funktionen

- Pflege des kanonischen GitHub-Profile-READMEs in einem Repository.
- Mehrsprachige Profildokumente in `i18n/`.
- Kuratierte Notizen zu Ökosystem-Projekten in `projects/`.
- Branding- und visuelle Assets in `figs/`, `logos/` und `logos-bamboo/`.
- Hilfsskript für README-only-Veröffentlichung: `scripts/push_readme_only.sh`.

## 🗂️ Projektstruktur

```text
.
├── README.md
├── i18n/
│   ├── README.en.md
│   ├── README.ar.md README.es.md README.fr.md README.de.md README.ru.md
│   ├── README.ja.md README.ko.md README.vi.md
│   └── README.zh-CN.md README.zh-Hans.md README.zh-Hant.md README.zh-TW.md
├── projects/
│   ├── README.md
│   ├── catalog.md
│   ├── sites.md
│   └── *.md
├── figs/
├── logos/
├── logos-bamboo/
├── .github/FUNDING.yml
└── scripts/push_readme_only.sh
```

Hinweise:
- Symlinks auf Top-Level-Ebene (zum Beispiel `EchoMind`, `AutoPublication`, `IdeasGlass`) verweisen auf externe lokale Repositories und dienen als Komfort-Links.
- Dieses Repository definiert auf Root-Ebene keine einzelne App-Laufzeit.

## ✅ Voraussetzungen

- Git
- Bash (für die Nutzung des Hilfsskripts)
- GitHub-Konto mit Zugriff auf dieses Profil-Repository

## 📥 Installation

```bash
git clone https://github.com/lachlanchen/lachlanchen.git
cd lachlanchen
```

## ▶️ Nutzung

Primärer Workflow:

1. `README.md` bearbeiten (kanonischer englischer/root Profilinhalt).
2. Sprachdateien in `i18n/` synchron halten.
3. Links und Abschnitte prüfen.
4. Beim Veröffentlichen von README-only-Updates nur `README.md` committen.

README-only-Push-Helfer:

```bash
scripts/push_readme_only.sh -m "Update profile README" -b main
```

Skriptverhalten:

1. Holt `origin`.
2. Erstellt ein temporäres Worktree von `origin/<branch>`.
3. Kopiert das Root-`README.md` in das temporäre Worktree.
4. Committet und pusht nur `README.md`.
5. Bereinigt den temporären Zustand.

## ⚙️ Konfiguration

- Sprachoptionen werden als **eine einzige Sprach-Auswahlzeile am Anfang** jeder README-Variante geführt.
- Root-README-Links verweisen derzeit auf:
  - `README.md` (Englisch/Root)
  - `i18n/README.ar.md`, `README.es.md`, `README.fr.md`, `README.ja.md`, `README.ko.md`, `README.vi.md`, `README.zh-Hans.md`, `README.zh-Hant.md`, `README.de.md`, `README.ru.md`
- Sponsoring-Links sind in `.github/FUNDING.yml` konfiguriert.

## 🧪 Beispiele

Beispiele für die Profilpflege:

```bash
# Nur README stagen und committen
git add README.md
git commit -m "Refine profile README"
git push origin main
```

```bash
# Helper verwenden, um README-only aus einem Dirty Working Tree zu veröffentlichen
scripts/push_readme_only.sh -m "Update README badges and links" -b main
```

Beispiele für Ökosystem-Befehle, dokumentiert in `projects/*.md` (externe Repositories):

```bash
python voice_chatbot_app_dual_enhanced.py
python autopub.py
python process_video.py
./service_manager.sh start
python vad_lang_subtitle.py --video-path <video>
python vit_captioner_video.py --video_path <video>
```

## 🛠️ Entwicklungsnotizen

- Dies ist ein Profil-/Dokumentations-Repository, kein monolithisches Softwarepaket.
- Änderungen sollten prägnant, öffentlichkeitsorientiert und repository-genau sein.
- Inhaltlich wesentliche bestehende Inhalte bei Reorganisationen erhalten.
- Wenn ein Detail unklar ist, aktuellen Text bevorzugt beibehalten und eine Klarstellungsnotiz ergänzen.

## 🧯 Fehlerbehebung

- `No README changes compared to origin/main`: Dein lokales `README.md` entspricht dem Remote-Stand; ein Push ist nicht nötig.
- Fehlerhafte Bild-/Bannerdarstellung: Pfade wie `figs/banner.png` sowie GitHub-raw/blob-URLs prüfen.
- Inkonsistente Sprach-Navigationszeilen: Genau eine Sprachoptionen-Zeile am Anfang jeder README-Variante beibehalten.
- Abweichung zwischen Root- und i18n-Inhalten: Übersetzungen nach finalen Root-README-Änderungen aktualisieren.

## 🗺️ Roadmap

- Konsistente Abschnittsparität zwischen `README.md` und `i18n/README.*.md` beibehalten.
- Ökosystem-Links mit aktiven Projekten und Domains synchron halten.
- Die Klarheit der Projektkataloge in `projects/catalog.md` und `projects/sites.md` weiter verbessern.
- Leichte Validierungschecks für Linkintegrität und Konsistenz der Sprachleiste ergänzen.

## 🤝 Mitwirken

Beiträge zur Profilklarheit, Linkgenauigkeit und mehrsprachigen Konsistenz sind willkommen.

1. Forken oder vom aktuellen `main` einen Branch erstellen.
2. Fokussierte Verbesserungen an README/i18n vorschlagen.
3. PR mit klarer Zusammenfassung der Änderungen öffnen.

Wenn dieses Repository direkt bearbeitet wird, sollten README-fokussierte Commits von nicht zusammenhängenden lokalen Dateänderungen getrennt werden.

## ❤️ Support / Sponsor

- GitHub Sponsors: https://github.com/sponsors/lachlanchen
- Donate: https://chat.lazying.art/donate
- LazyingArt: https://lazying.art
- EchoMind: https://chat.lazying.art
- OnlyIdeas: https://onlyideas.art

## 🙏 Danksagung

- Dank an Mitwirkende und Nutzende im gesamten LazyingArt- und LightMind-Ökosystem.
- Wertschätzung für Open-Source-Communities und Forschende, die praktische KI-Tools und Wissensaustausch unterstützen.

## 📄 Lizenz

Derzeit ist keine repository-weite `LICENSE`-Datei vorhanden.  
Annahme: Inhalte als Profil-/Dokumentationsmaterial behandeln, sofern keine Lizenz explizit hinzugefügt wird.
