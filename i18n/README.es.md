[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)


[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# Lachlan Chen · él

[![Creator & CEO](https://img.shields.io/badge/Creator%20%26%20CEO-LazyingArt%20LLC-0f766e?style=flat-square)](https://lazying.art)
[![Cofounder & COO](https://img.shields.io/badge/Cofounder%20%26%20COO-LightMind%20Tech%20Ltd-1d4ed8?style=flat-square)](https://lightmind.art)
[![Profile Repository](https://img.shields.io/badge/GitHub-Profile%20README-111827?style=flat-square)](https://github.com/lachlanchen/lachlanchen)
[![Google Scholar](https://img.shields.io/badge/Scholar-Profile-4285F4?style=flat-square)](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Lachlan%20Chen-0A66C2?style=flat-square)](https://hk.linkedin.com/in/lachlan-chen-7a056a233)

Construyo **herramientas y sistemas** que ayudan a las personas a crear, aprender y recordar con menos fricción.

> **The Art of Lazying**  
> Construye menos. Desbloquea más vida.

---

## 📌 Resumen

Este repositorio es el **repositorio README de perfil de GitHub** para [`lachlanchen`](https://github.com/lachlanchen).  
Está orientado a la documentación y es multilingüe, con `README.md` como entrada canónica del perfil y variantes traducidas en `i18n/`.

## 🧭 Sobre mí

- Creator & CEO de **LazyingArt LLC**
- Cofounder & COO en **LightMind Tech Ltd**
- Enfoque: productos prácticos de IA, sistemas de conocimiento y flujos de trabajo creativos

## 🔗 Enlaces rápidos

| Área | Enlace |
|---|---|
| 🌐 Sitios web | [lazying.art](https://lazying.art) · [onlyideas.art](https://onlyideas.art) |
| 🧠 EchoMind | [chat.lazying.art](https://chat.lazying.art) |
| 📚 Centro de investigación | [paper.lazying.art](https://paper.lazying.art) · [ideas.onlyideas.art](https://ideas.onlyideas.art) |
| 🎓 Google Scholar | [perfil de Scholar](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) |
| 💼 LinkedIn | [lachlan-chen-7a056a233](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |

## 🚀 Repositorios principales

| Proyecto | Resumen | Enlace |
|---|---|---|
| 🤖 **LazyingArtBot (LAB)** | Asistente de IA y base de automatización dentro del ecosistema LazyingArt | [Repository](https://github.com/lachlanchen/LazyingArtBot) |
| 🧩 **AutoAppDev** | Herramientas para agilizar flujos de desarrollo de aplicaciones | [Repository](https://github.com/lachlanchen/AutoAppDev) |
| 📖 **AutoNovelWriter** | Flujos de trabajo para escritura creativa de formato largo y generación de historias | [Repository](https://github.com/lachlanchen/AutoNovelWriter) |
| 🧠 **AgInTi** | Experimentación con agentes de IA humanoides y diseño de sistemas | [Repository](https://github.com/lachlanchen/AgInTi) |

## 🎯 Lo que me importa

**The Art of Lazying** significa diseñar sistemas que reduzcan el esfuerzo innecesario sin perder profundidad, calidad ni creatividad humana.

## ✨ Características

- Mantenimiento del README de perfil canónico de GitHub en un solo repositorio.
- Documentos de perfil multilingües en `i18n/`.
- Notas curadas de proyectos del ecosistema en `projects/`.
- Recursos de marca y visuales en `figs/`, `logos/` y `logos-bamboo/`.
- Script auxiliar para publicar solo README: `scripts/push_readme_only.sh`.

## 🗂️ Estructura del proyecto

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

Notas:
- Los enlaces simbólicos en el nivel superior (por ejemplo `EchoMind`, `AutoPublication`, `IdeasGlass`) apuntan a repositorios locales externos y son enlaces de conveniencia.
- Este repositorio no define una única aplicación ejecutable en la raíz.

## ✅ Requisitos previos

- Git
- Bash (para usar el script auxiliar)
- Cuenta de GitHub con acceso a este repositorio de perfil

## 📥 Instalación

```bash
git clone https://github.com/lachlanchen/lachlanchen.git
cd lachlanchen
```

## ▶️ Uso

Flujo de trabajo principal:

1. Edita `README.md` (contenido canónico en inglés/raíz del perfil).
2. Mantén alineados los archivos de idioma en `i18n/`.
3. Verifica enlaces y secciones.
4. Haz commit solo de `README.md` al publicar actualizaciones de solo README.

Auxiliar para push de solo README:

```bash
scripts/push_readme_only.sh -m "Update profile README" -b main
```

Comportamiento del script:

1. Hace fetch de `origin`.
2. Crea un worktree temporal desde `origin/<branch>`.
3. Copia el `README.md` raíz al worktree temporal.
4. Hace commit y push solo de `README.md`.
5. Limpia el estado temporal.

## ⚙️ Configuración

- Las opciones de idioma se mantienen como una **única línea de selección de idioma en la parte superior** de cada variante de README.
- Los enlaces actuales del README raíz apuntan a:
  - `README.md` (inglés/raíz)
  - `i18n/README.ar.md`, `README.es.md`, `README.fr.md`, `README.ja.md`, `README.ko.md`, `README.vi.md`, `README.zh-Hans.md`, `README.zh-Hant.md`, `README.de.md`, `README.ru.md`
- Los enlaces de patrocinio están configurados en `.github/FUNDING.yml`.

## 🧪 Ejemplos

Ejemplos de mantenimiento del perfil:

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

Ejemplos de comandos del ecosistema documentados en `projects/*.md` (repositorios externos):

```bash
python voice_chatbot_app_dual_enhanced.py
python autopub.py
python process_video.py
./service_manager.sh start
python vad_lang_subtitle.py --video-path <video>
python vit_captioner_video.py --video_path <video>
```

## 🛠️ Notas de desarrollo

- Este es un repositorio de perfil/documentación, no un paquete de software monolítico.
- Mantén los cambios concisos, orientados al público y fieles al repositorio.
- Conserva el contenido sustantivo existente al reorganizar.
- Si un detalle es incierto, prioriza conservar el texto actual y añadir una nota de aclaración.

## 🧯 Solución de problemas

- `No README changes compared to origin/main`: tu `README.md` local coincide con el remoto; no es necesario hacer push.
- Error de renderizado de imagen/banner: verifica rutas como `figs/banner.png` y URLs raw/blob de GitHub.
- Líneas de navegación de idioma inconsistentes: mantén exactamente una línea de opciones de idioma en la parte superior de cada variante README.
- Desajuste entre contenido raíz e i18n: actualiza las traducciones después de finalizar las ediciones del README raíz.

## 🗺️ Hoja de ruta

- Mantener paridad consistente de secciones entre `README.md` y `i18n/README.*.md`.
- Mantener sincronizados los enlaces del ecosistema con proyectos y dominios activos.
- Seguir mejorando la claridad de los catálogos de proyectos en `projects/catalog.md` y `projects/sites.md`.
- Añadir verificaciones ligeras para integridad de enlaces y consistencia de la barra de idiomas.

## 🤝 Contribuciones

Las contribuciones son bienvenidas para mejorar la claridad del perfil, la precisión de enlaces y la consistencia multilingüe.

1. Haz fork o crea una rama desde el `main` más reciente.
2. Propón mejoras enfocadas de README/i18n.
3. Abre un PR con un resumen claro de los cambios.

Si editas este repositorio directamente, asegúrate de aislar los commits centrados en README de otros cambios locales no relacionados.

## ❤️ Apoyo / Patrocinio

- GitHub Sponsors: https://github.com/sponsors/lachlanchen
- Donar: https://chat.lazying.art/donate
- LazyingArt: https://lazying.art
- EchoMind: https://chat.lazying.art
- OnlyIdeas: https://onlyideas.art

## 🙏 Agradecimientos

- Gracias a colaboradores y usuarios en todo el ecosistema de LazyingArt y LightMind.
- Agradecimiento a las comunidades de código abierto y a los investigadores que apoyan herramientas prácticas de IA y el intercambio de conocimiento.

## 📄 Licencia

Actualmente no existe un archivo `LICENSE` a nivel de repositorio.  
Suposición: tratar el contenido como material de perfil/documentación salvo que se añada una licencia explícitamente.
