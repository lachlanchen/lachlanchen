[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)


[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# Lachlan Chen · he/him

| [![Creator & CEO](https://img.shields.io/badge/Creator%20%26%20CEO-LazyingArt%20LLC-0f766e?style=flat-square)](https://lazying.art) | [![Cofounder & COO](https://img.shields.io/badge/Cofounder%20%26%20COO-LightMind%20Tech%20Ltd-1d4ed8?style=flat-square)](https://lightmind.art) | [![Profile Repository](https://img.shields.io/badge/GitHub-Profile%20README-111827?style=flat-square)](https://github.com/lachlanchen/lachlanchen) | [![Google Scholar](https://img.shields.io/badge/Scholar-Profile-4285F4?style=flat-square)](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-Lachlan%20Chen-0A66C2?style=flat-square)](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |
|---|---|---|---|---|

أبني **أدوات وأنظمة** تساعد الناس على الإنشاء والتعلّم والتذكّر بانسيابية أقل.

> **The Art of Lazying**  
> ابنِ أقل. وامنح مساحة أكبر للحياة.

## 📌 نظرة عامة

هذا المستودع هو **مستودع ملف تعريف GitHub** للحساب [`lachlanchen`](https://github.com/lachlanchen). هو موجّه أولًا للتوثيق، ومتعدّد اللغات، ومصمَّم بحيث تظل `README.md` هي نقطة الدخول المعتمدة لصفحة الملف الشخصي، بينما تبقى النسخ المترجمة ضمن `i18n/`.

## 🎯 لقطة سريعة للملف الشخصي

| البعد | التفاصيل |
|---|---|
| غرض المستودع | محتوى الصفحة الرئيسية لملف GitHub الشخصي |
| اللغة المرجعية | `README.md` |
| النسخ المحلية | `i18n/` |
| سير العمل | لقطات `.auto-readme-work/` + `scripts/*` |

## ✨ مميزات الملف الشخصي

| المجال | القدرة |
|---|---|
| نموذج المحتوى | محتوى الملف الشخصي العام المتمركز في `README.md` |
| التدويل | نقاط دخول متعددة اللغات في `i18n/` |
| الأتمتة | سكربتات خفيفة لتحديثات جماعية لملفات README |
| شفافية التمويل | لوحة تبرعات/دعم على مستوى الملف الشخصي |
| تنسيق المشاريع | ملخصات مختصرة من سطر واحد لكل مشروع |

## 🗂️ هيكلة المشروع

| المسار | الغرض |
|---|---|
| `README.md` | النسخة الإنجليزية الرئيسية المستخدمة في صفحة GitHub الشخصية |
| `i18n/` | نسخ الملف الشخصي المترجمة |
| `projects/` | فهارس وملاحظات المشاريع المحلية |
| `scripts/push_readme_only.sh` | أداة مساعدة لسير عمل Git لنشر `README.md` فقط |
| `scripts/update-read-me/` | أدوات لمساعدات تحديث الملف الشخصي محليًا |
| `scripts/auto-update-readme/` | خطوط أنابيب تُستخدم عند تحديث عدة مستودعات دفعة واحدة |
| `.github/FUNDING.yml` | بيانات الرعاية والتمويل عبر GitHub Sponsors |
| `figs/` | أصول اللافتة والشارات المستخدمة في محتوى الملف الشخصي |

## ✅ المتطلبات المسبقة

- `git`
- `bash` (لتشغيل سكربتات الصيانة)
- `rg` (موصى به: تستخدمه السكربتات في فحوص التكرار)

الافتراض: لا توجد متطلبات تشغيلية خاصة بلغة معينة لعرض/تحرير هذا README.

## 🛠️ التثبيت / الإعداد الأولي

```bash
git clone git@github.com:lachlanchen/lachlanchen.git
cd lachlanchen
```

هذا المستودع يركّز على التوثيق؛ لا يحتاج إلى سلسلة أدوات للبناء أو الاختبار أو التثبيت.

## 🚀 الاستخدام

### تحديث ملف README هذا مباشرة

- حدّث الأقسام في `README.md` مباشرة.
- احتفظ بالمحتوى الجوهري مع تجنب تكرار الكتل (خصوصًا لوحة اللافتة ولوحة الدعم).

### استخدام السكربتات المرفقة

```bash
bash scripts/update-read-me/run_lachlanchen_only.sh
```

بعد التحقق من التحديثات، انشر ملف README فقط:

```bash
bash scripts/push_readme_only.sh
```

## 🧩 الإعداد

- احتفظ بروابط التنقل بين اللغات في أعلى الملف ومرآتها داخل مجلدات الترجمة.
- توضع اللافتة أسفل روابط اللغات في جميع النسخ.
- تضمن لوحة الدعم في القسم السفلي قبل Contact/License.
- استخدم روابط مطلقة قدر الإمكان للروابط الخارجية من أجل قابلية نقل الملف الشخصي.
- افترض أنّ الفرع/المسار المرجعي هو `main` وأنّ جذر المستودع هو `/home/lachlan/ProjectsLFS/lachlanchen` في تدفقات العمل المحلية.

## 🧪 أمثلة

- إضافة نسخة ملف شخصي مترجمة جديدة
  1. أنشئ `i18n/README.xx.md` بنفس هيكلة العناوين.
  2. أضف رابط لغة في أعلى كل من `README.md` ونسخة الترجمة الجديدة.
- إضافة مستودع مركزي جديد
  1. أضف سطرًا إلى جدول المستودعات الأساسية في `README.md`.
  2. أدرج ملخصًا مختصرًا في سطر واحد ورابط المستودع المرجعي.
- شغّل خط أنابيب الملف الشخصي من نتائج `.auto-readme-work/` عند توفرها.

## 🧭 نبذة

| الدور | التركيز |
|---|---|
| Creator & CEO | **LazyingArt LLC** |
| Cofounder & COO | **LightMind Tech Ltd** |
| تركيز المهمة | منتجات ذكاء اصطناعي عملية، وأنظمة معرفية، وسير عمل إبداعية |

## 🔗 روابط سريعة

| المجال | الرابط |
|---|---|
| 🌐 المواقع الإلكترونية | [lazying.art](https://lazying.art) · [onlyideas.art](https://onlyideas.art) |
| 🧠 EchoMind | [chat.lazying.art](https://chat.lazying.art) |
| 📚 مركز الأبحاث | [paper.lazying.art](https://paper.lazying.art) · [ideas.onlyideas.art](https://ideas.onlyideas.art) |
| 🎓 Google Scholar | [ملف الباحث](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) |
| 💼 LinkedIn | [lachlan-chen-7a056a233](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |

## 🚀 المستودعات الأساسية

| المشروع | الملخص | الرابط |
|---|---|---|
| 🤖 **LazyingArtBot (LAB)** | مساعدة ذكاء اصطناعي وأساس أتمتة داخل منظومة LazyingArt | [Repository](https://github.com/lachlanchen/LazyingArtBot) |
| 🧩 **AutoAppDev** | أدوات لتبسيط وتسريع سير عمل تطوير التطبيقات | [Repository](https://github.com/lachlanchen/AutoAppDev) |
| 📖 **AutoNovelWriter** | سير عمل للكتابة الإبداعية طويلة المدى وتوليد القصص | [Repository](https://github.com/lachlanchen/AutoNovelWriter) |
| 🧠 **AgInTi** | تجريب وكلاء ذكاء اصطناعي بشري المظهر وتصميم النظم | [Repository](https://github.com/lachlanchen/AgInTi) |

## 🎯 ما يهمني

تعني **The Art of Lazying** تصميم أنظمة تقلل الجهد غير الضروري مع الحفاظ على العمق والجودة والإبداع الإنساني.

## 🧩 المشاريع الرئيسية

| المشروع | الملخص |
|---|---|
| OpenHI | تصوير طيفي فائضي قائم على الأحداث مع معايرة ذاتية |
| EchoMind | صوت/محادثة متعدد اللغات للتعلّم والإبداع |
| AutoPublish + AutoPubMonitor | خط أنابيب أتمتة من المسودة إلى النشر |
| LazyEdit | تحرير فيديو باستخدام الذكاء الاصطناعي: ترجمات، لقطات مركزة، التغليف |

## ❤️ Support

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://camo.githubusercontent.com/24a4914f0b42c6f435f9e101621f1e52535b02c225764b2f6cc99416926004b7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f6e6174652d4c617a79696e674172742d3045413545393f7374796c653d666f722d7468652d6261646765266c6f676f3d6b6f2d6669266c6f676f436f6c6f723d7768697465)](https://chat.lazying.art/donate) | [![PayPal](https://camo.githubusercontent.com/d0f57e8b016517a4b06961b24d0ca87d62fdba16e18bbdb6aba28e978dc0ea21/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f50617950616c2d526f6e677a686f754368656e2d3030343537433f7374796c653d666f722d7468652d6261646765266c6f676f3d70617970616c266c6f676f436f6c6f723d7768697465)](https://paypal.me/RongzhouChen) | [![Stripe](https://camo.githubusercontent.com/1152dfe04b6943afe3a8d2953676749603fb9f95e24088c92c97a01a897b4942/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5374726970652d446f6e6174652d3633354246463f7374796c653d666f722d7468652d6261646765266c6f676f3d737472697065266c6f676f436f6c6f723d7768697465)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |

## 📬 Contact

| القناة | القيمة |
|---|---|
| البريد الإلكتروني | `lach@lazying.art` |
| الموقع | https://lazying.art |

## 🧪 استكشاف الأخطاء وإصلاحها

- تظهر كتل اللافتة/الدعم مكررة بعد تشغيل خطوط الأنابيب: احذف التكرارات واحتفظ بكتلة كلٍ منها فقط.
- ترجمة الروابط السريعة معطوبة: تأكد من وجود الملفات الهدف في `i18n/`.
- غالبًا ما تفشل السكربتات بسبب عدم وجود `bash` أو `rg` في PATH؛ ثبّت هذه الاعتمادات ثم أعد التشغيل من جذر المستودع.
- إذا كان رابط ما يشير إلى فرع أو اسم مستودع قديم، حدّثه إلى المسار الرسمي.

## 🧰 ملاحظات التطوير

- اتبع التعديلات التراكمية: حدّث `README.md` أولًا، ثمّ انسخها إلى الترجمة فقط عندما يتطلب النطاق ذلك.
- قدّم صفوف جداول مقروءة وموجزة في سطر واحد.
- حافظ على تنسيق النسخ غير الإنجليزية وفق نفس ترتيب الأقسام.
- يحتوي دليل `.auto-readme-work/` على لقطات خط أنابيب وخطط لغوية؛ عومل كـسياق مُولَّد.

## 🗺️ خارطة الطريق

- تحديث جميع الروابط دوريًا واختبارها كل ثلاثة أشهر.
- إضافة قسم خفيف لتجارب نشطة وشارات الحالة.
- توسيع وثائق `scripts/` بملاحظات المتطلبات الأمنية.
- نشر قسم تحديثات ملف شخصي بنمط سجل تغييرات مبسط للأحداث البارزة.

## 🤝 المساهمة

المساهمات مرحّب بها.

- افتح Issue لتصحيح أو تحديث أي شيء.
- أبقِ التعديلات مركّزة وتراكمية.
- عند إضافة قسم جديد كبير، حدّث ملفات الترجمة المقابلة حيثما أمكن.
- نسّق التعديلات مع السكربتات الحالية لتفادي تكرر الاندماجات.

## 📄 الترخيص

الافتراض: لا يحتوي هذا المستودع حاليًا على ملف ترخيص مخصّص في الجذر. إذا أردت ترخيصًا صريحًا، أضف ملف `LICENSE` نموذجيًا (مثل `MIT` أو `Apache-2.0`) وضمّن ملاحظة هنا.

Build less. Live more.
