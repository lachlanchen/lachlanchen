[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)


[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# Lachlan Chen · он/его

| [![Creator & CEO](https://img.shields.io/badge/Creator%20%26%20CEO-LazyingArt%20LLC-0f766e?style=flat-square)](https://lazying.art) | [![Cofounder & COO](https://img.shields.io/badge/Cofounder%20%26%20COO-LightMind%20Tech%20Ltd-1d4ed8?style=flat-square)](https://lightmind.art) | [![Profile Repository](https://img.shields.io/badge/GitHub-Profile%20README-111827?style=flat-square)](https://github.com/lachlanchen/lachlanchen) | [![Google Scholar](https://img.shields.io/badge/Scholar-Profile-4285F4?style=flat-square)](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-Lachlan%20Chen-0A66C2?style=flat-square)](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |
|---|---|---|---|---|

Я создаю **инструменты и системы**, которые помогают людям создавать, учиться и лучше запоминать с меньшим количеством лишних усилий.

> **The Art of Lazying**  
> Build less. Unlock more life.

## 📌 Обзор

Этот репозиторий — **GitHub profile README repository** для [`lachlanchen`](https://github.com/lachlanchen). Он документ-ориентирован, мультиязычный и настроен так, чтобы `README.md` оставался канонической точкой входа профиля, а переводные версии находились в `i18n/`.

## 🎯 Срез профиля

| Размер | Детали |
|---|---|
| Назначение репозитория | Содержимое домашней страницы GitHub профиля |
| Канонический язык | `README.md` |
| Локализованные варианты | `i18n/` |
| Процесс обновления | `scripts/*` + снапшоты `.auto-readme-work/` |

## ✨ Особенности профиля

| Область | Возможность |
|---|---|
| Модель контента | Централизованное содержимое публичного профиля в `README.md` |
| Интернационализация | Многоязычные входные точки в `i18n/` |
| Автоматизация | Лёгкие скрипты для массового обновления README |
| Вовлечение спонсоров | Панель пожертвований/поддержки на уровне профиля |
| Курирование проектов | Короткие, однострочные описания проектов |

## 🗂️ Структура проекта

| Путь | Цель |
|---|---|
| `README.md` | Основной английский профиль, используемый на странице GitHub |
| `i18n/` | Переводы профиля |
| `projects/` | Локальные индексы проектов и заметки |
| `scripts/push_readme_only.sh` | Помощник Git для staging/публикации только `README.md` |
| `scripts/update-read-me/` | Инструменты для локального обновления профиля |
| `scripts/auto-update-readme/` | Конвейеры для пакетного обновления нескольких репозиториев |
| `.github/FUNDING.yml` | Метаданные спонсорства/Funding GitHub |
| `figs/` | Баннеры и бейджи, используемые в содержимом профиля |

## ✅ Предварительные требования

- `git`
- `bash` (для запуска служебных скриптов)
- `rg` (рекомендуется: скрипты репозитория используют ripgrep для проверки дубликатов)

Предположение: для просмотра/редактирования этого README не требуются языково-специфические зависимости.

## 🛠️ Установка / Начальная настройка

```bash
git clone git@github.com:lachlanchen/lachlanchen.git
cd lachlanchen
```

Этот репозиторий ориентирован на документацию; цепочка сборки/тестирования/установки не требуется.

## 🚀 Использование

### Обновление профиля README напрямую

- Редактируйте разделы в `README.md` напрямую.
- Сохраняйте содержимое, избегая дублирующихся блоков (особенно баннера и support-панели).

### Используйте поставленные скрипты

```bash
bash scripts/update-read-me/run_lachlanchen_only.sh
```

После проверки изменений публикуйте только README:

```bash
bash scripts/push_readme_only.sh
```

## 🧩 Конфигурация

- Оставляйте ссылки на языковую навигацию в верхней части файла и зеркально поддерживайте их для папки переводов.
- Баннер размещается ниже языковых ссылок во всех вариантах.
- Support-панель находится в нижней части перед Contact/License.
- Используйте абсолютные URL для внешних ссылок, где это возможно, для переносимости профиля.
- Предполагается, что каноническая ветка/путь — `main`, а корень репозитория в локальных workflow — `/home/lachlan/ProjectsLFS/lachlanchen`.

## 🧪 Примеры

- Добавить новый перевод профиля
  1. Создайте `i18n/README.xx.md` с той же структурой заголовков.
  2. Добавьте языковую ссылку в начало `README.md` и нового перевода.
- Добавить новую ключевую запись репозитория
  1. Добавьте одну строку в таблицу Core Repositories в `README.md`.
  2. Укажите краткое однострочное описание и канонический URL репозитория.
- Запускайте профильный конвейер из `.auto-readme-work/`, когда он доступен.

## 🧭 Обо мне

| Роль | Фокус |
|---|---|
| Creator & CEO | **LazyingArt LLC** |
| Cofounder & COO | **LightMind Tech Ltd** |
| Миссия | Практичные AI-продукты, системы знаний и творческие рабочие процессы |

## 🔗 Быстрые ссылки

| Область | Ссылка |
|---|---|
| 🌐 Сайты | [lazying.art](https://lazying.art) · [onlyideas.art](https://onlyideas.art) |
| 🧠 EchoMind | [chat.lazying.art](https://chat.lazying.art) |
| 📚 Research Hub | [paper.lazying.art](https://paper.lazying.art) · [ideas.onlyideas.art](https://ideas.onlyideas.art) |
| 🎓 Google Scholar | [scholar profile](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) |
| 💼 LinkedIn | [lachlan-chen-7a056a233](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |

## 🚀 Core Repositories

| Проект | Кратко | Ссылка |
|---|---|---|
| 🤖 **LazyingArtBot (LAB)** | AI-ассистент и база автоматизации в экосистеме LazyingArt | [Repository](https://github.com/lachlanchen/LazyingArtBot) |
| 🧩 **AutoAppDev** | Инструменты для упрощения процессов разработки приложений | [Repository](https://github.com/lachlanchen/AutoAppDev) |
| 📖 **AutoNovelWriter** | Длинный креативный текст и рабочие процессы генерации историй | [Repository](https://github.com/lachlanchen/AutoNovelWriter) |
| 🧠 **AgInTi** | Эксперименты с гуманоидными AI-агентами и проектированием систем | [Repository](https://github.com/lachlanchen/AgInTi) |

## 🎯 Что важно для меня

**The Art of Lazying** означает проектирование систем, которые уменьшают ненужные усилия, сохраняя глубину, качество и человеческое творчество.

## 🧩 Ключевые проекты

| Проект | Краткое описание |
|---|---|
| OpenHI | Самокалибрируемая гиперспектральная съёмка на основе событий |
| EchoMind | Многоязычное голосовое и чат-общение для обучения и творчества |
| AutoPublish + AutoPubMonitor | Пайплайны автоматизации от черновика к публикации |
| LazyEdit | Редактирование с поддержкой ИИ, субтитры, выделение фрагментов, упаковка |

## ❤️ Support

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://camo.githubusercontent.com/24a4914f0b42c6f435f9e101621f1e52535b02c225764b2f6cc99416926004b7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f6e6174652d4c617a79696e674172742d3045413545393f7374796c653d666f722d7468652d6261646765266c6f676f3d6b6f2d6669266c6f676f436f6c6f723d7768697465)](https://chat.lazying.art/donate) | [![PayPal](https://camo.githubusercontent.com/d0f57e8b016517a4b06961b24d0ca87d62fdba16e18bbdb6aba28e978dc0ea21/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f50617950616c2d526f6e677a686f754368656e2d3030343537433f7374796c653d666f722d7468652d6261646765266c6f676f3d70617970616c266c6f676f436f6c6f723d7768697465)](https://paypal.me/RongzhouChen) | [![Stripe](https://camo.githubusercontent.com/1152dfe04b6943afe3a8d2953676749603fb9f95e24088c92c97a01a897b4942/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5374726970652d446f6e6174652d3633354246463f7374796c653d666f722d7468652d6261646765266c6f676f3d737472697065266c6f676f436f6c6f723d7768697465)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |

## 📬 Contact

| Канал | Значение |
|---|---|
| Email | `lach@lazying.art` |
| Website | https://lazying.art |

## 🧪 Устранение неполадок

- После выполнения конвейера дублируются баннер/поддержка: удаляйте дубликаты и оставляйте по одному каноническому блоку каждого.
- Ошибки перевода быстрых ссылок: проверьте существование целевых файлов в `i18n/`.
- Сбои скриптов обычно вызваны отсутствием `bash` или `rg` в PATH; установите зависимости и повторите запуск из корня репозитория.
- Если ссылка указывает на устаревшую ветку или имя репозитория, обновите её на канонический путь.

## 🧰 Заметки по разработке

- Соблюдайте инкрементальные изменения: сначала обновляйте `README.md`, затем зеркально переносите изменения в переводы, только если это требуется по объему задачи.
- Предпочитайте читаемые строки в таблицах и короткие однострочные описания.
- Поддерживайте соответствие переводов той же последовательности разделов для согласованности.
- Папка `.auto-readme-work/` содержит снапшоты конвейера и планы языков; считайте её сгенерированным контекстом.

## 🗺️ Дорожная карта

- Поддерживайте все ссылки актуальными и проверенными каждый квартал.
- Добавьте лёгкий раздел для активных экспериментов и статусных бейджей.
- Расширьте документацию `scripts/` заметками по предварительным требованиям и безопасности.
- Опубликуйте минимальный раздел changelog-формата для заметных обновлений профиля.

## 🤝 Участие

Добро пожаловать в contributions.

- Откройте issue для исправлений или обновлений.
- Держите правки сфокусированными и инкрементальными.
- При добавлении крупного нового раздела обновляйте mirrored language-файлы по возможности.
- Координируйте изменения с существующими скриптами автоматизации, чтобы избежать лишних конфликтов слияния.

## 📄 License

Предположение: в этом репозитории сейчас нет отдельного файла лицензии в корне. Если нужна явная лицензия, добавьте стандартный файл `LICENSE` (например, `MIT` или `Apache-2.0`) и укажите уведомление здесь.

Build less. Live more.
