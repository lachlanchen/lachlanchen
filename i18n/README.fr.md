[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)


[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# Lachlan Chen · il/lui

| [![Creator & CEO](https://img.shields.io/badge/Creator%20%26%20CEO-LazyingArt%20LLC-0f766e?style=flat-square)](https://lazying.art) | [![Cofounder & COO](https://img.shields.io/badge/Cofounder%20%26%20COO-LightMind%20Tech%20Ltd-1d4ed8?style=flat-square)](https://lightmind.art) | [![Profile Repository](https://img.shields.io/badge/GitHub-Profile%20README-111827?style=flat-square)](https://github.com/lachlanchen/lachlanchen) | [![Google Scholar](https://img.shields.io/badge/Scholar-Profile-4285F4?style=flat-square)](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-Lachlan%20Chen-0A66C2?style=flat-square)](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |
|---|---|---|---|---|

Je construis des **outils et systèmes** qui aident les gens à créer, apprendre et mémoriser avec moins de friction.

> **The Art of Lazying**  
> Build less. Unlock more life.

## 📌 Vue d'ensemble

Ce dépôt est le **README de profil GitHub** de [`lachlanchen`](https://github.com/lachlanchen). Il est centré sur la documentation, multilingue, et conçu pour que `README.md` reste le point d'entrée canonique du profil, tandis que les variantes traduites résident dans `i18n/`.

## 🎯 Aperçu du profil

| Dimension | Détail |
|---|---|
| Objectif du dépôt | Contenu principal de la page GitHub du profil |
| Langue canonique | `README.md` |
| Variantes localisées | `i18n/` |
| Workflow de mise à jour | `scripts/*` + instantanés `.auto-readme-work/` |

## ✨ Fonctionnalités du profil

| Domaine | Capacité |
|---|---|
| Modèle de contenu | Contenu public du profil centralisé dans `README.md` |
| Internationalisation | Points d'entrée multilingues dans `i18n/` |
| Automatisation | Scripts légers pour les mises à jour groupées du README |
| Visibilité du financement | Panneau de dons/soutien au niveau du profil |
| Curation de projets | Résumés de projets courts, sur une ligne |

## 🗂️ Structure du dépôt

| Chemin | Objectif |
|---|---|
| `README.md` | Version principale en anglais utilisée sur la page de profil GitHub. |
| `i18n/` | Variantes de profil traduites. |
| `projects/` | Index et notes locales des projets. |
| `scripts/push_readme_only.sh` | Assistant Git pour préparer/publier uniquement `README.md`. |
| `scripts/update-read-me/` | Outils pour les mises à jour locales du profil. |
| `scripts/auto-update-readme/` | Pipelines utilisés lors de mises à jour batch multi-repo. |
| `.github/FUNDING.yml` | Métadonnées GitHub Sponsors / financement. |
| `figs/` | Ressources banner et badges utilisées par le contenu du profil. |

## ✅ Prérequis

- `git`
- `bash` (pour exécuter les scripts de maintenance)
- `rg` (recommandé : les scripts du dépôt utilisent ripgrep pour la détection de doublons)

Hypothèse : aucune dépendance d'exécution spécifique à la langue n'est nécessaire pour lire/éditer ce README.

## 🛠️ Installation / Démarrage

```bash
git clone git@github.com:lachlanchen/lachlanchen.git
cd lachlanchen
```

Ce dépôt est centré sur la documentation ; aucune chaîne de build/test/installation n'est nécessaire.

## 🚀 Utilisation

### Mettre à jour directement ce profil README

- Modifiez les sections de `README.md` directement.
- Conservez le contenu substantiel tout en évitant les blocs en double (notamment la bannière/panneau de support).

### Utiliser les scripts fournis

```bash
bash scripts/update-read-me/run_lachlanchen_only.sh
```

Après validation, publiez uniquement le README :

```bash
bash scripts/push_readme_only.sh
```

## 🧩 Configuration

- Conservez les liens de navigation de langue en haut du fichier et répercutés dans les dossiers de traduction.
- La bannière est placée sous les liens de langue pour toutes les variantes.
- Le panneau de support est ancré dans la partie basse avant Contact/License.
- Préférez les URLs absolues pour les liens externes, autant que possible, pour la portabilité du profil.
- Supposez que la branche et le chemin canoniques sont respectivement `main` et `/home/lachlan/ProjectsLFS/lachlanchen` dans les workflows locaux.

## 🧪 Exemples

- Ajouter une nouvelle variante de profil traduite
  1. Créez `i18n/README.xx.md` avec la même structure d'en-têtes.
  2. Ajoutez un lien de langue en haut de `README.md` et de la nouvelle traduction.
- Ajouter une nouvelle entrée au dépôt cœur
  1. Ajoutez une ligne à la table des Core Repositories dans `README.md`.
  2. Incluez un résumé concis d'une ligne et l'URL canonique du dépôt.
- Lancez le pipeline de profil depuis les sorties `.auto-readme-work/` quand disponibles.

## 🧭 À propos

| Rôle | Focus |
|---|---|
| Creator & CEO | **LazyingArt LLC** |
| Cofondateur & COO | **LightMind Tech Ltd** |
| Mission principale | Produits IA pratiques, systèmes de connaissances et workflows créatifs |

## 🔗 Liens rapides

| Domaine | Lien |
|---|---|
| 🌐 Sites web | [lazying.art](https://lazying.art) · [onlyideas.art](https://onlyideas.art) |
| 🧠 EchoMind | [chat.lazying.art](https://chat.lazying.art) |
| 📚 Hub recherche | [paper.lazying.art](https://paper.lazying.art) · [ideas.onlyideas.art](https://ideas.onlyideas.art) |
| 🎓 Google Scholar | [profil académique](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) |
| 💼 LinkedIn | [lachlan-chen-7a056a233](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |

## 🚀 Dépôts principaux

| Projet | Résumé | Lien |
|---|---|---|
| 🤖 **LazyingArtBot (LAB)** | Assistant IA et socle d'automatisation dans l'écosystème LazyingArt | [Repository](https://github.com/lachlanchen/LazyingArtBot) |
| 🧩 **AutoAppDev** | Outils pour rationaliser les workflows de développement d'apps | [Repository](https://github.com/lachlanchen/AutoAppDev) |
| 📖 **AutoNovelWriter** | Workflows de rédaction créative de long format et génération d'histoires | [Repository](https://github.com/lachlanchen/AutoNovelWriter) |
| 🧠 **AgInTi** | Expérimentation d'agents IA humanoïdes et conception de systèmes | [Repository](https://github.com/lachlanchen/AgInTi) |

## 🎯 Ce qui me tient à cœur

**The Art of Lazying** signifie concevoir des systèmes qui réduisent l'effort inutile tout en préservant la profondeur, la qualité et la créativité humaine.

## 🧩 Projets clés

| Projet | Résumé |
|---|---|
| OpenHI | Imagerie hyperspectrale auto-calibrée basée sur des événements |
| EchoMind | Voix et chat multilingues pour apprendre et créer |
| AutoPublish + AutoPubMonitor | Pipelines d'automatisation du flux brouillon → publication |
| LazyEdit | Montage assisté par IA, sous-titres, highlights, packaging |

## ❤️ Support

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://camo.githubusercontent.com/24a4914f0b42c6f435f9e101621f1e52535b02c225764b2f6cc99416926004b7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f6e6174652d4c617a79696e674172742d3045413545393f7374796c653d666f722d7468652d6261646765266c6f676f3d6b6f2d6669266c6f676f436f6c6f723d7768697465)](https://chat.lazying.art/donate) | [![PayPal](https://camo.githubusercontent.com/d0f57e8b016517a4b06961b24d0ca87d62fdba16e18bbdb6aba28e978dc0ea21/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f50617950616c2d526f6e677a686f754368656e2d3030343537433f7374796c653d666f722d7468652d6261646765266c6f676f3d70617970616c266c6f676f436f6c6f723d7768697465)](https://paypal.me/RongzhouChen) | [![Stripe](https://camo.githubusercontent.com/1152dfe04b6943afe3a8d2953676749603fb9f95e24088c92c97a01a897b4942/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5374726970652d446f6e6174652d3633354246463f7374796c653d666f722d7468652d6261646765266c6f676f3d737472697065266c6f676f436f6c6f723d7768697465)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |

## 📬 Contact

| Canal | Valeur |
|---|---|
| Email | `lach@lazying.art` |
| Site web | https://lazying.art |

## 🧪 Dépannage

- Des doublons de bannière/panneau de support apparaissent après des exécutions de pipeline : supprimez les doublons et gardez un seul bloc canonique de chaque.
- Problèmes de traductions de liens rapides : vérifiez que les fichiers cibles existent bien dans `i18n/`.
- Les erreurs de script proviennent souvent d'une absence de `bash` ou `rg` dans le PATH ; installez ces dépendances et relancez depuis la racine du dépôt.
- Si un lien pointe vers une branche ou un dépôt obsolète, mettez-le à jour vers le chemin de dépôt canonique.

## 🧰 Notes de développement

- Suivez des modifications incrémentales : mettez d'abord à jour `README.md`, puis répliquez dans les traductions uniquement si le périmètre le nécessite.
- Préférez des lignes de tableau lisibles par l'homme et des résumés concis sur une ligne.
- Gardez les variantes non anglophones alignées sur le même ordre de sections pour la cohérence.
- Le dossier `.auto-readme-work/` contient des instantanés de pipeline et des plans linguistiques ; traitez-le comme un contexte généré.

## 🗺️ Feuille de route

- Garder tous les liens à jour et validés chaque trimestre.
- Ajouter une section légère pour les expériences actives et les badges d'état.
- Étendre la documentation des `scripts/` avec des prérequis et notes de sécurité.
- Publier une section de style changelog minimaliste pour les mises à jour notables du profil.

## 🤝 Contribuer

Les contributions sont les bienvenues.

- Ouvrez une issue pour les corrections ou mises à jour.
- Gardez les modifications ciblées et incrémentales.
- Lors de l'ajout d'une section majeure, mettez à jour les versions traduites correspondantes lorsque possible.
- Coordonnez les modifications avec les scripts d'automatisation existants pour éviter les conflits de merge.

## 📄 Licence

Hypothèse : ce dépôt ne comporte actuellement pas de fichier de licence dédié à la racine. Si vous souhaitez un licence explicite, ajoutez un fichier standard `LICENSE` (par exemple `MIT` ou `Apache-2.0`) et mentionnez l'avis ici.

Build less. Live more.
