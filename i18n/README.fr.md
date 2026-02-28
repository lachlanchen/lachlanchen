[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)


[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# Lachlan Chen · il/lui

[![Creator & CEO](https://img.shields.io/badge/Creator%20%26%20CEO-LazyingArt%20LLC-0f766e?style=flat-square)](https://lazying.art)
[![Cofounder & COO](https://img.shields.io/badge/Cofounder%20%26%20COO-LightMind%20Tech%20Ltd-1d4ed8?style=flat-square)](https://lightmind.art)
[![Profile Repository](https://img.shields.io/badge/GitHub-Profile%20README-111827?style=flat-square)](https://github.com/lachlanchen/lachlanchen)
[![Google Scholar](https://img.shields.io/badge/Scholar-Profile-4285F4?style=flat-square)](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Lachlan%20Chen-0A66C2?style=flat-square)](https://hk.linkedin.com/in/lachlan-chen-7a056a233)

Je construis des **outils et des systèmes** qui aident les gens a creer, apprendre et memoriser avec moins de friction.

> **The Art of Lazying**  
> Build less. Unlock more life.

---

## 📌 Vue d'ensemble

Ce depot est le **depot README de profil GitHub** pour [`lachlanchen`](https://github.com/lachlanchen).  
Il est axe sur la documentation et multilingue, avec `README.md` comme entree de profil canonique et des variantes traduites dans `i18n/`.

## 🧭 A propos

- Creator & CEO de **LazyingArt LLC**
- Cofounder & COO chez **LightMind Tech Ltd**
- Focus : produits IA pratiques, systemes de connaissance et workflows creatifs

## 🔗 Liens rapides

| Section | Lien |
|---|---|
| 🌐 Sites web | [lazying.art](https://lazying.art) · [onlyideas.art](https://onlyideas.art) |
| 🧠 EchoMind | [chat.lazying.art](https://chat.lazying.art) |
| 📚 Hub recherche | [paper.lazying.art](https://paper.lazying.art) · [ideas.onlyideas.art](https://ideas.onlyideas.art) |
| 🎓 Google Scholar | [profil Scholar](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) |
| 💼 LinkedIn | [lachlan-chen-7a056a233](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |

## 🚀 Depots principaux

| Projet | Resume | Lien |
|---|---|---|
| 🤖 **LazyingArtBot (LAB)** | Assistant IA et base d'automatisation dans l'ecosysteme LazyingArt | [Repository](https://github.com/lachlanchen/LazyingArtBot) |
| 🧩 **AutoAppDev** | Outils pour rationaliser les workflows de developpement d'applications | [Repository](https://github.com/lachlanchen/AutoAppDev) |
| 📖 **AutoNovelWriter** | Workflows d'ecriture creative longue et de generation d'histoires | [Repository](https://github.com/lachlanchen/AutoNovelWriter) |
| 🧠 **AgInTi** | Experimentation d'agents IA humanoides et conception de systemes | [Repository](https://github.com/lachlanchen/AgInTi) |

## 🎯 Ce qui m'importe

**The Art of Lazying** signifie concevoir des systemes qui reduisent les efforts inutiles tout en preservant la profondeur, la qualite et la creativite humaine.

## ✨ Fonctionnalites

- Maintenance centralisee du README de profil GitHub canonique dans un seul depot.
- Documents de profil multilingues dans `i18n/`.
- Notes de projets de l'ecosysteme organisees dans `projects/`.
- Ressources de marque et visuelles dans `figs/`, `logos/` et `logos-bamboo/`.
- Script d'aide a la publication README uniquement : `scripts/push_readme_only.sh`.

## 🗂️ Structure du projet

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

Notes :
- Les symlinks a la racine (par exemple `EchoMind`, `AutoPublication`, `IdeasGlass`) pointent vers des depots locaux externes et servent de liens pratiques.
- Ce depot ne definit pas un runtime applicatif unique a la racine.

## ✅ Prerequis

- Git
- Bash (pour utiliser le script d'aide)
- Compte GitHub avec acces a ce depot de profil

## 📥 Installation

```bash
git clone https://github.com/lachlanchen/lachlanchen.git
cd lachlanchen
```

## ▶️ Utilisation

Workflow principal :

1. Modifier `README.md` (contenu de profil canonique en anglais/a la racine).
2. Garder les fichiers de langue dans `i18n/` alignes.
3. Verifier les liens et les sections.
4. Commit uniquement `README.md` lors de la publication de mises a jour README-only.

Aide a la publication README-only :

```bash
scripts/push_readme_only.sh -m "Update profile README" -b main
```

Comportement du script :

1. Recupere `origin`.
2. Cree un worktree temporaire depuis `origin/<branch>`.
3. Copie le `README.md` racine dans le worktree temporaire.
4. Commit et push uniquement `README.md`.
5. Nettoie l'etat temporaire.

## ⚙️ Configuration

- Les options de langue sont conservees comme **une seule ligne de selection de langue en haut** de chaque variante README.
- Les liens du README racine pointent actuellement vers :
  - `README.md` (anglais/racine)
  - `i18n/README.ar.md`, `README.es.md`, `README.fr.md`, `README.ja.md`, `README.ko.md`, `README.vi.md`, `README.zh-Hans.md`, `README.zh-Hant.md`, `README.de.md`, `README.ru.md`
- Les liens de sponsoring sont configures dans `.github/FUNDING.yml`.

## 🧪 Exemples

Exemples de maintenance du profil :

```bash
# Stage and commit only README
git add README.md
git commit -m "Refine profile README"
git push origin main
```

```bash
# Use helper to publish README-only from a dirty working tree
scripts/push_readme_only.sh -m "Update README badges and links" -b main
```

Exemples de commandes d'ecosysteme documentes dans `projects/*.md` (depots externes) :

```bash
python voice_chatbot_app_dual_enhanced.py
python autopub.py
python process_video.py
./service_manager.sh start
python vad_lang_subtitle.py --video-path <video>
python vit_captioner_video.py --video_path <video>
```

## 🛠️ Notes de developpement

- Il s'agit d'un depot de profil/documentation, pas d'un package logiciel monolithique.
- Garder les changements concis, orientes public et fideles au depot.
- Preserver le contenu substantiel existant lors des reorganisations.
- Si un detail est incertain, preferer conserver le texte actuel et ajouter une note de clarification.

## 🧯 Depannage

- `No README changes compared to origin/main` : votre `README.md` local correspond au distant ; aucun push n'est necessaire.
- Affichage casse des images/bannieres : verifier les chemins comme `figs/banner.png` et les URLs GitHub raw/blob.
- Lignes de navigation de langue incoherentes : conserver exactement une ligne d'options de langue en haut de chaque variante README.
- Decalage entre contenu racine et i18n : mettre a jour les traductions apres finalisation des modifications du README racine.

## 🗺️ Feuille de route

- Maintenir une parite de sections coherente entre `README.md` et `i18n/README.*.md`.
- Garder les liens de l'ecosysteme synchronises avec les projets actifs et les domaines.
- Continuer d'ameliorer la clarte des catalogues de projets dans `projects/catalog.md` et `projects/sites.md`.
- Ajouter des verifications legeres de l'integrite des liens et de la coherence de la barre de langue.

## 🤝 Contributions

Les contributions sont bienvenues pour la clarte du profil, la precision des liens et la coherence multilingue.

1. Forker ou brancher depuis le dernier `main`.
2. Proposer des ameliorations ciblees de README/i18n.
3. Ouvrir une PR avec un resume clair des changements.

Si vous modifiez ce depot directement, assurez-vous que les commits axes README sont isoles des changements locaux non lies.

## ❤️ Support / Sponsor

- GitHub Sponsors: https://github.com/sponsors/lachlanchen
- Donate: https://chat.lazying.art/donate
- LazyingArt: https://lazying.art
- EchoMind: https://chat.lazying.art
- OnlyIdeas: https://onlyideas.art

## 🙏 Remerciements

- Merci aux collaborateurs et aux utilisateurs de tout l'ecosysteme LazyingArt et LightMind.
- Reconnaissance aux communautes open source et aux chercheurs qui soutiennent les outils IA pratiques et le partage des connaissances.

## 📄 Licence

Aucun fichier `LICENSE` au niveau du depot n'est actuellement present.  
Hypothese : traiter le contenu comme du materiel de profil/documentation, sauf ajout explicite d'une licence.
