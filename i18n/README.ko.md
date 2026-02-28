[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)


[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# Lachlan Chen · he/him

| [![Creator & CEO](https://img.shields.io/badge/Creator%20%26%20CEO-LazyingArt%20LLC-0f766e?style=flat-square)](https://lazying.art) | [![Cofounder & COO](https://img.shields.io/badge/Cofounder%20%26%20COO-LightMind%20Tech%20Ltd-1d4ed8?style=flat-square)](https://lightmind.art) | [![Profile Repository](https://img.shields.io/badge/GitHub-Profile%20README-111827?style=flat-square)](https://github.com/lachlanchen/lachlanchen) | [![Google Scholar](https://img.shields.io/badge/Scholar-Profile-4285F4?style=flat-square)](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-Lachlan%20Chen-0A66C2?style=flat-square)](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |
|---|---|---|---|---|

저는 사람들이 덜 복잡하게 **만들고**, **배우고**, **기억**할 수 있도록 돕는 **도구와 시스템**을 만듭니다.

> **The Art of Lazying**  
> Build less. Unlock more life.

## 📌 개요

이 저장소는 [`lachlanchen`](https://github.com/lachlanchen) 계정용 **GitHub 프로필 README 저장소**입니다. 문서 중심 구조로 구성되어 있으며, `README.md`를 정식 프로필 진입점으로 유지하고 번역본은 `i18n/` 폴더에 보관합니다.

## 🎯 프로필 스냅샷

| 항목 | 상세 |
|---|---|
| 저장소 목적 | GitHub 프로필 홈페이지 콘텐츠 |
| 기본 언어 | `README.md` |
| 현지화 버전 | `i18n/` |
| 업데이트 워크플로 | `scripts/*` + `.auto-readme-work/` 스냅샷 |

## ✨ 프로필 기능

| 영역 | 기능 |
|---|---|
| 콘텐츠 모델 | `README.md`의 공개 프로필 콘텐츠를 중앙 집중화 |
| 국제화 | `i18n/`의 다국어 진입점 |
| 자동화 | 대량 README 업데이트를 위한 경량 스크립트 |
| 후원 노출 | 프로필 레벨의 후원/기부 패널 |
| 프로젝트 큐레이션 | 한 줄 요약 기반의 프로젝트 갤러리 |

## 🗂️ 프로젝트 구조

| 경로 | 용도 |
|---|---|
| `README.md` | GitHub 프로필 페이지에 표시되는 주 영문 프로필 |
| `i18n/` | 번역된 프로필 변형 |
| `projects/` | 로컬 프로젝트 인덱스 및 노트 |
| `scripts/push_readme_only.sh` | `README.md`만 스테이징/게시하도록 돕는 Git 워크플로 스크립트 |
| `scripts/update-read-me/` | 로컬 프로필 업데이트 도구 |
| `scripts/auto-update-readme/` | 다중 저장소 배치 업데이트 시 사용하는 파이프라인 |
| `.github/FUNDING.yml` | GitHub Sponsors 및 후원 메타데이터 |
| `figs/` | 프로필 콘텐츠에서 사용하는 배너 및 배지 자산 |

## ✅ 사전 요구 사항

- `git`
- `bash` (유지보수 스크립트 실행용)
- `rg` (권장: 저장소 스크립트에서 중복 검사에 `ripgrep` 사용)

가정: 이 README를 보고 편집하는 데 언어별 런타임 의존성은 필요하지 않습니다.

## 🛠️ 설치 / 부트스트랩

```bash
git clone git@github.com:lachlanchen/lachlanchen.git
cd lachlanchen
```

이 저장소는 문서 중심이므로 별도의 빌드/테스트/설치 도구 체인은 필요하지 않습니다.

## 🚀 사용법

### 이 프로필 README를 직접 업데이트

- `README.md`의 섹션을 직접 편집합니다.
- 핵심 내용을 유지하면서 배너/지원 블록 같은 중복은 피합니다(특히 중복 방지).

### 제공된 스크립트 사용

```bash
bash scripts/update-read-me/run_lachlanchen_only.sh
```

업데이트 검증 후에 README만 배포합니다.

```bash
bash scripts/push_readme_only.sh
```

## 🧩 구성

- 파일 상단에 언어 내비게이션 링크를 유지하고 번역 폴더와 동기화합니다.
- 모든 번역본에서 배너는 언어 링크 아래에 배치합니다.
- 지원 패널은 하단부에서 Contact/License 앞에 고정 배치합니다.
- 외부 링크는 가능한 한 절대 경로 URL을 사용해 프로필 이동성을 높입니다.
- 로컬 워크플로의 기본 브랜치/경로는 각각 `main` 및 `/home/lachlan/ProjectsLFS/lachlanchen`입니다.

## 🧪 예시

- 새 번역 프로필 변형 추가
  1. 동일한 헤더 구조로 `i18n/README.xx.md`를 생성합니다.
  2. `README.md`와 새 번역 파일의 상단에 언어 링크를 추가합니다.
- 새 핵심 저장소 항목 추가
  1. `README.md`의 핵심 저장소 표에 한 줄을 추가합니다.
  2. 간결한 한 줄 요약과 정식 저장소 URL을 함께 넣습니다.
- 가능할 경우 `.auto-readme-work/` 출력 결과에서 프로필 파이프라인을 실행합니다.

## 🧭 소개

| 역할 | 집중 분야 |
|---|---|
| Creator & CEO | **LazyingArt LLC** |
| Cofounder & COO | **LightMind Tech Ltd** |
| 미션 포커스 | 실용적인 AI 제품, 지식 시스템, 크리에이티브 워크플로 |

## 🔗 빠른 링크

| 영역 | 링크 |
|---|---|
| 🌐 웹사이트 | [lazying.art](https://lazying.art) · [onlyideas.art](https://onlyideas.art) |
| 🧠 EchoMind | [chat.lazying.art](https://chat.lazying.art) |
| 📚 리서치 허브 | [paper.lazying.art](https://paper.lazying.art) · [ideas.onlyideas.art](https://ideas.onlyideas.art) |
| 🎓 Google Scholar | [scholar profile](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) |
| 💼 LinkedIn | [lachlan-chen-7a056a233](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |

## 🚀 핵심 저장소

| 프로젝트 | 요약 | 링크 |
|---|---|---|
| 🤖 **LazyingArtBot (LAB)** | LazyingArt 생태계의 AI 어시스턴트 및 자동화 기반 | [Repository](https://github.com/lachlanchen/LazyingArtBot) |
| 🧩 **AutoAppDev** | 앱 개발 워크플로를 간소화하기 위한 도구 | [Repository](https://github.com/lachlanchen/AutoAppDev) |
| 📖 **AutoNovelWriter** | 장문 창작 및 스토리 생성 워크플로 | [Repository](https://github.com/lachlanchen/AutoNovelWriter) |
| 🧠 **AgInTi** | 휴머노이드 AI 에이전트 실험과 시스템 설계 | [Repository](https://github.com/lachlanchen/AgInTi) |

## 🎯 내가 중요하게 여기는 것

**The Art of Lazying**은 불필요한 노력을 줄이면서도 깊이, 품질, 인간의 창의성을 유지하는 시스템을 설계하는 것입니다.

## 🧩 주요 프로젝트

| 프로젝트 | 요약 |
|---|---|
| OpenHI | 자기 보정형 이벤트 기반 하이퍼스펙트럴 이미징 |
| EchoMind | 학습과 창작을 위한 다국어 음성/채팅 |
| AutoPublish + AutoPubMonitor | 초안에서 게시까지의 자동화 파이프라인 |
| LazyEdit | AI 지원 편집, 자막, 하이라이트, 패키징 |

## ❤️ Support

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://camo.githubusercontent.com/24a4914f0b42c6f435f9e101621f1e52535b02c225764b2f6cc99416926004b7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f6e6174652d4c617a79696e674172742d3045413545393f7374796c653d666f722d7468652d6261646765266c6f676f3d6b6f2d6669266c6f676f436f6c6f723d7768697465)](https://chat.lazying.art/donate) | [![PayPal](https://camo.githubusercontent.com/d0f57e8b016517a4b06961b24d0ca87d62fdba16e18bbdb6aba28e978dc0ea21/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f50617950616c2d526f6e677a686f754368656e2d3030343537433f7374796c653d666f722d7468652d6261646765266c6f676f3d70617970616c266c6f676f436f6c6f723d7768697465)](https://paypal.me/RongzhouChen) | [![Stripe](https://camo.githubusercontent.com/1152dfe04b6943afe3a8d2953676749603fb9f95e24088c92c97a01a897b4942/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5374726970652d446f6e6174652d3633354246463f7374796c653d666f722d7468652d6261646765266c6f676f3d737472697065266c6f676f436f6c6f723d7768697465)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |

## 📬 연락처

| 채널 | 값 |
|---|---|
| 이메일 | `lach@lazying.art` |
| 웹사이트 | https://lazying.art |

## 🧪 문제 해결

- 파이프라인 실행 후 배너/지원 블록이 중복될 수 있습니다. 각 블록은 하나만 남기고 중복본은 삭제하세요.
- 빠른 링크 번역이 깨짐: `i18n/`에 대상 파일이 존재하는지 확인하세요.
- 스크립트 오류는 대개 `bash` 또는 `rg`가 PATH에 없어서 발생합니다. 설치 후 저장소 루트에서 다시 실행하세요.
- 링크가 오래된 브랜치 또는 저장소 이름을 가리키면 정식 저장소 경로로 업데이트하세요.

## 🧰 개발 노트

- 점진적 편집을 따르세요: 먼저 `README.md`를 갱신하고, 범위가 필요할 때만 번역본에 반영합니다.
- 읽기 쉬운 표 행과 간단한 한 줄 요약을 선호합니다.
- 비영어 버전은 동일한 섹션 순서를 유지해 정합성을 맞춥니다.
- `.auto-readme-work/` 디렉터리에는 파이프라인 스냅샷과 언어별 계획이 들어 있으며, 생성된 컨텍스트로 취급하세요.

## 🗺️ 로드맵

- 모든 링크를 최신 상태로 유지하고 분기별로 점검합니다.
- 진행 중 실험과 상태 배지를 위한 가벼운 섹션을 추가합니다.
- `scripts/` 문서를 필수 조건과 안전 주의사항으로 확장합니다.
- 주요 프로필 업데이트를 위한 최소한의 변경 이력 섹션을 공개합니다.

## 🤝 기여

기여를 환영합니다.

- 수정이나 업데이트는 이슈로 등록해 주세요.
- 변경은 초점이 분명하고 증분 단위로 유지하세요.
- 주요 신규 섹션을 추가할 때는 가능하면 번역 파일도 함께 갱신하세요.
- 병합 충돌을 줄이기 위해 기존 자동화 스크립트와 조율해 작업하세요.

## 📄 라이선스

가정: 이 저장소는 현재 루트에 전용 라이선스 파일이 없습니다. 명시적 라이선스가 필요하면 표준 `LICENSE` 파일(예: `MIT` 또는 `Apache-2.0`)을 추가하고 이곳에 고지사항을 기재하세요.

Build less. Live more.
