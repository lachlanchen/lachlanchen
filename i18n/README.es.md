[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)


[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# Lachlan Chen · él/él

| [![Creator & CEO](https://img.shields.io/badge/Creator%20%26%20CEO-LazyingArt%20LLC-0f766e?style=flat-square)](https://lazying.art) | [![Cofounder & COO](https://img.shields.io/badge/Cofounder%20%26%20COO-LightMind%20Tech%20Ltd-1d4ed8?style=flat-square)](https://lightmind.art) | [![Profile Repository](https://img.shields.io/badge/GitHub-Profile%20README-111827?style=flat-square)](https://github.com/lachlanchen/lachlanchen) | [![Google Scholar](https://img.shields.io/badge/Scholar-Profile-4285F4?style=flat-square)](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-Lachlan%20Chen-0A66C2?style=flat-square)](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |
|---|---|---|---|---|

Construyo **herramientas y sistemas** que ayudan a las personas a crear, aprender y recordar con menos fricción.

> **The Art of Lazying**
> Build less. Unlock more life.

## 📌 Descripción general

Este repositorio es el **README de perfil de GitHub** de [`lachlanchen`](https://github.com/lachlanchen). Es de enfoque documental y multilingüe, y está diseñado para que `README.md` siga siendo la entrada canónica del perfil mientras las variantes traducidas viven en `i18n/`.

## 🎯 Resumen del perfil

| Dimensión | Detalle |
|---|---|
| Propósito del repositorio | Contenido de la página de inicio del perfil de GitHub |
| Idioma canónico | `README.md` |
| Variantes localizadas | `i18n/` |
| Flujo de actualización | `scripts/*` + snapshots de `.auto-readme-work/` |

## ✨ Características del perfil

| Área | Capacidad |
|---|---|
| Modelo de contenido | Contenido público centralizado en `README.md` |
| Internacionalización | Entradas multilingües en `i18n/` |
| Automatización | Scripts ligeros para actualizaciones masivas de README |
| Visibilidad de financiación | Panel de donaciones/apoyo a nivel de perfil |
| Curación de proyectos | Resúmenes cortos de una línea para la galería de proyectos |

## 🗂️ Estructura del proyecto

| Ruta | Propósito |
|---|---|
| `README.md` | Perfil principal en inglés usado en la página de GitHub. |
| `i18n/` | Variantes de perfil traducidas. |
| `projects/` | Índices y notas de proyectos locales. |
| `scripts/push_readme_only.sh` | Ayudante de flujo Git para preparar/publicar solo `README.md`. |
| `scripts/update-read-me/` | Herramientas para actualizaciones locales del perfil. |
| `scripts/auto-update-readme/` | Pipelines usados al actualizar varios repositorios en lote. |
| `.github/FUNDING.yml` | Metadatos de patrocinio/financiación de GitHub. |
| `figs/` | Activos de banner y distintivos usados por el contenido del perfil. |

## ✅ Requisitos previos

- `git`
- `bash` (para ejecutar scripts de mantenimiento)
- `rg` (recomendado: los scripts del repositorio usan ripgrep para comprobar duplicados)

Supuesto: no se requieren dependencias de tiempo de ejecución específicas de idioma para ver/editar este README.

## 🛠️ Instalación / Puesta en marcha

```bash
git clone git@github.com:lachlanchen/lachlanchen.git
cd lachlanchen
```

Este repositorio está orientado a documentación; no se requiere ninguna cadena de herramientas de compilación o pruebas.

## 🚀 Uso

### Actualizar este README de perfil directamente

- Edita directamente las secciones en `README.md`.
- Conserva el contenido sustantivo y evita bloques duplicados (especialmente el banner o el panel de soporte).

### Usar los scripts proporcionados

```bash
bash scripts/update-read-me/run_lachlanchen_only.sh
```

Después de validar las actualizaciones, publica solo el README:

```bash
bash scripts/push_readme_only.sh
```

## 🧩 Configuración

- Mantén los enlaces de navegación por idioma al inicio del archivo y con espejo en las carpetas de traducción.
- El banner se coloca debajo de los enlaces de idioma para todas las variantes.
- El panel de soporte se fija en la sección inferior antes de Contacto/Licencia.
- Usa URLs absolutas en lo posible para enlaces externos para mejorar la portabilidad del perfil.
- Asume que la rama canónica y la ruta del repositorio en flujos locales es `main` y `/home/lachlan/ProjectsLFS/lachlanchen`.

## 🧪 Ejemplos

- Añadir una nueva variante traducida del perfil
  1. Crea `i18n/README.xx.md` con la misma estructura de encabezados.
  2. Añade un enlace de idioma al inicio de `README.md` y de la nueva traducción.
- Añadir una nueva entrada de repositorio núcleo
  1. Añade una línea al final de la tabla de repositorios núcleo en `README.md`.
  2. Incluye un resumen breve de una línea y la URL canónica del repositorio.
- Ejecuta el pipeline de perfil desde `.auto-readme-work/` cuando haya salidas disponibles.

## 🧭 Acerca de

| Rol | Enfoque |
|---|---|
| Creator & CEO | **LazyingArt LLC** |
| Cofundador & COO | **LightMind Tech Ltd** |
| Enfoque de misión | Productos prácticos de IA, sistemas de conocimiento y flujos creativos |

## 🔗 Enlaces rápidos

| Área | Enlace |
|---|---|
| 🌐 Sitios web | [lazying.art](https://lazying.art) · [onlyideas.art](https://onlyideas.art) |
| 🧠 EchoMind | [chat.lazying.art](https://chat.lazying.art) |
| 📚 Centro de investigación | [paper.lazying.art](https://paper.lazying.art) · [ideas.onlyideas.art](https://ideas.onlyideas.art) |
| 🎓 Google Scholar | [scholar profile](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) |
| 💼 LinkedIn | [lachlan-chen-7a056a233](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |

## 🚀 Repositorios núcleo

| Proyecto | Resumen | Enlace |
|---|---|---|
| 🤖 **LazyingArtBot (LAB)** | Base de asistencia y automatización en el ecosistema LazyingArt | [Repositorio](https://github.com/lachlanchen/LazyingArtBot) |
| 🧩 **AutoAppDev** | Herramientas para agilizar flujos de desarrollo de aplicaciones | [Repositorio](https://github.com/lachlanchen/AutoAppDev) |
| 📖 **AutoNovelWriter** | Flujos de escritura creativa y generación de historias de larga extensión | [Repositorio](https://github.com/lachlanchen/AutoNovelWriter) |
| 🧠 **AgInTi** | Experimentación con agentes AI humanoides y diseño de sistemas | [Repositorio](https://github.com/lachlanchen/AgInTi) |

## 🎯 Lo que me importa

**The Art of Lazying** significa diseñar sistemas que reducen el esfuerzo innecesario sin perder profundidad, calidad y creatividad humana.

## 🧩 Proyectos clave

| Proyecto | Resumen |
|---|---|
| OpenHI | Imagen hiperespectral basada en eventos con auto calibración |
| EchoMind | Voz y chat multilingües para aprender y crear |
| AutoPublish + AutoPubMonitor | Canales de automatización de borrador a publicación |
| LazyEdit | Edición asistida por IA, subtítulos, resaltados y empaquetado |

## ❤️ Support

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://camo.githubusercontent.com/24a4914f0b42c6f435f9e101621f1e52535b02c225764b2f6cc99416926004b7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f6e6174652d4c617a79696e674172742d3045413545393f7374796c653d666f722d7468652d6261646765266c6f676f3d6b6f2d6669266c6f676f436f6c6f723d7768697465)](https://chat.lazying.art/donate) | [![PayPal](https://camo.githubusercontent.com/d0f57e8b016517a4b06961b24d0ca87d62fdba16e18bbdb6aba28e978dc0ea21/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f50617950616c2d526f6e677a686f754368656e2d3030343537433f7374796c653d666f722d7468652d6261646765266c6f676f3d70617970616c266c6f676f436f6c6f723d7768697465)](https://paypal.me/RongzhouChen) | [![Stripe](https://camo.githubusercontent.com/1152dfe04b6943afe3a8d2953676749603fb9f95e24088c92c97a01a897b4942/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5374726970652d446f6e6174652d3633354246463f7374796c653d666f722d7468652d6261646765266c6f676f3d737472697065266c6f676f436f6c6f723d7768697465)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |

## 📬 Contacto

| Canal | Valor |
|---|---|
| Correo electrónico | `lach@lazying.art` |
| Sitio web | https://lazying.art |

## 🧪 Solución de problemas

- Pueden aparecer bloques duplicados de banner/soporte tras las ejecuciones del pipeline: elimina duplicados y conserva solo un bloque canónico de cada uno.
- Traducciones de enlaces rápidos rotas: verifica que los archivos objetivo existan en `i18n/`.
- Los fallos de scripts suelen provenir de `bash` o `rg` ausentes en el PATH; instala estas dependencias y vuelve a ejecutar desde la raíz del repositorio.
- Si un enlace apunta a una rama o nombre de repositorio obsoleto, actualízalo a la ruta canónica del repositorio.

## 🧰 Notas de desarrollo

- Sigue ediciones incrementales: primero actualiza `README.md`, luego refleja en traducciones solo cuando el alcance lo requiera.
- Prefiere filas de tabla legibles y resúmenes cortos de una línea.
- Mantén las variantes no inglesas alineadas con el mismo orden de secciones para garantizar consistencia.
- El directorio `.auto-readme-work/` contiene snapshots de pipeline y planes de idioma; trátalo como contexto generado.

## 🗺️ Hoja de ruta

- Mantener todos los enlaces actualizados y verificados cada trimestre.
- Añadir una sección ligera para experimentos activos y estados de indicadores.
- Ampliar la documentación de `scripts/` con requisitos previos y notas de seguridad.
- Publicar una sección minimalista tipo changelog para actualizaciones de perfil destacadas.

## 🤝 Contribuir

Las contribuciones son bienvenidas.

- Abre un issue para correcciones o mejoras.
- Mantén las ediciones enfocadas y con alcance incremental.
- Si añades una sección nueva importante, actualiza los archivos de idioma espejo cuando sea posible.
- Coordina las ediciones con los scripts de automatización existentes para evitar conflictos de merge.

## 📄 Licencia

Supuesto: este repositorio no tiene actualmente un archivo de licencia dedicado en la raíz. Si quieres una licencia explícita, añade un archivo `LICENSE` estándar (por ejemplo `MIT` o `Apache-2.0`) e incluye aquí el aviso correspondiente.

Build less. Live more.
