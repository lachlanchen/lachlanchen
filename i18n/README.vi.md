[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)


[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# Lachlan Chen · he/him

[![Creator & CEO](https://img.shields.io/badge/Creator%20%26%20CEO-LazyingArt%20LLC-0f766e?style=flat-square)](https://lazying.art)
[![Cofounder & COO](https://img.shields.io/badge/Cofounder%20%26%20COO-LightMind%20Tech%20Ltd-1d4ed8?style=flat-square)](https://lightmind.art)
[![Profile Repository](https://img.shields.io/badge/GitHub-Profile%20README-111827?style=flat-square)](https://github.com/lachlanchen/lachlanchen)
[![Google Scholar](https://img.shields.io/badge/Scholar-Profile-4285F4?style=flat-square)](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Lachlan%20Chen-0A66C2?style=flat-square)](https://hk.linkedin.com/in/lachlan-chen-7a056a233)

Tôi xây dựng **công cụ và hệ thống** giúp mọi người sáng tạo, học hỏi và ghi nhớ với ít trở ngại hơn.

> **The Art of Lazying**  
> Xây ít hơn. Mở khóa nhiều cuộc sống hơn.

---

## 📌 Tổng Quan

Kho lưu trữ này là **repo README hồ sơ GitHub** cho [`lachlanchen`](https://github.com/lachlanchen).  
Nó theo hướng tài liệu-là-trước-tiên và đa ngôn ngữ, với `README.md` là mục hồ sơ chuẩn và các bản dịch nằm trong `i18n/`.

## 🧭 Giới Thiệu

- Creator & CEO của **LazyingArt LLC**
- Cofounder & COO tại **LightMind Tech Ltd**
- Trọng tâm: sản phẩm AI thực dụng, hệ thống tri thức và quy trình sáng tạo

## 🔗 Liên Kết Nhanh

| Mảng | Liên kết |
|---|---|
| 🌐 Website | [lazying.art](https://lazying.art) · [onlyideas.art](https://onlyideas.art) |
| 🧠 EchoMind | [chat.lazying.art](https://chat.lazying.art) |
| 📚 Trung tâm nghiên cứu | [paper.lazying.art](https://paper.lazying.art) · [ideas.onlyideas.art](https://ideas.onlyideas.art) |
| 🎓 Google Scholar | [hồ sơ scholar](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) |
| 💼 LinkedIn | [lachlan-chen-7a056a233](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |

## 🚀 Các Kho Mã Nòng Cốt

| Dự án | Tóm tắt | Liên kết |
|---|---|---|
| 🤖 **LazyingArtBot (LAB)** | Trợ lý AI và nền tảng tự động hóa trong hệ sinh thái LazyingArt | [Repository](https://github.com/lachlanchen/LazyingArtBot) |
| 🧩 **AutoAppDev** | Bộ công cụ tinh gọn quy trình phát triển ứng dụng | [Repository](https://github.com/lachlanchen/AutoAppDev) |
| 📖 **AutoNovelWriter** | Quy trình viết sáng tạo dài hơi và tạo sinh truyện | [Repository](https://github.com/lachlanchen/AutoNovelWriter) |
| 🧠 **AgInTi** | Thử nghiệm AI agent hình người và thiết kế hệ thống | [Repository](https://github.com/lachlanchen/AgInTi) |

## 🎯 Điều Tôi Theo Đuổi

**The Art of Lazying** nghĩa là thiết kế hệ thống giảm nỗ lực không cần thiết nhưng vẫn giữ được chiều sâu, chất lượng và sáng tạo của con người.

## ✨ Tính Năng

- Duy trì README hồ sơ GitHub chuẩn trong một kho lưu trữ duy nhất.
- Tài liệu hồ sơ đa ngôn ngữ trong `i18n/`.
- Ghi chú dự án hệ sinh thái đã tuyển chọn trong `projects/`.
- Tài sản nhận diện và hình ảnh trong `figs/`, `logos/`, và `logos-bamboo/`.
- Script hỗ trợ publish chỉ README: `scripts/push_readme_only.sh`.

## 🗂️ Cấu Trúc Dự Án

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

Ghi chú:
- Các symlink cấp cao nhất (ví dụ `EchoMind`, `AutoPublication`, `IdeasGlass`) trỏ đến các kho local bên ngoài và chỉ là liên kết tiện dụng.
- Kho này không định nghĩa một app runtime đơn lẻ ở thư mục gốc.

## ✅ Điều Kiện Tiên Quyết

- Git
- Bash (để dùng helper script)
- Tài khoản GitHub có quyền truy cập kho hồ sơ này

## 📥 Cài Đặt

```bash
git clone https://github.com/lachlanchen/lachlanchen.git
cd lachlanchen
```

## ▶️ Cách Dùng

Quy trình chính:

1. Chỉnh sửa `README.md` (nội dung hồ sơ chuẩn tiếng Anh/gốc).
2. Giữ các file ngôn ngữ trong `i18n/` đồng bộ.
3. Kiểm tra liên kết và các mục.
4. Chỉ commit `README.md` khi xuất bản cập nhật chỉ-README.

Helper để push chỉ README:

```bash
scripts/push_readme_only.sh -m "Update profile README" -b main
```

Hành vi của script:

1. Fetch `origin`.
2. Tạo một worktree tạm từ `origin/<branch>`.
3. Sao chép `README.md` ở thư mục gốc vào worktree tạm.
4. Commit và push chỉ `README.md`.
5. Dọn dẹp trạng thái tạm.

## ⚙️ Cấu Hình

- Tùy chọn ngôn ngữ được giữ ở dạng **một dòng chọn ngôn ngữ duy nhất ở đầu** mỗi biến thể README.
- Liên kết README gốc hiện trỏ đến:
  - `i18n/README.ar.md`, `README.es.md`, `README.fr.md`, `README.ja.md`, `README.ko.md`, `README.vi.md`, `README.zh-Hans.md`, `README.zh-Hant.md`, `README.de.md`, `README.ru.md`
- Liên kết tài trợ được cấu hình trong `.github/FUNDING.yml`.

## 🧪 Ví Dụ

Ví dụ bảo trì hồ sơ:

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

Ví dụ lệnh hệ sinh thái được ghi trong `projects/*.md` (các kho bên ngoài):

```bash
python voice_chatbot_app_dual_enhanced.py
python autopub.py
python process_video.py
./service_manager.sh start
python vad_lang_subtitle.py --video-path <video>
python vit_captioner_video.py --video_path <video>
```

## 🛠️ Ghi Chú Phát Triển

- Đây là kho hồ sơ/tài liệu, không phải một gói phần mềm nguyên khối.
- Giữ thay đổi ngắn gọn, hướng công khai và chính xác theo trạng thái kho.
- Bảo toàn nội dung quan trọng hiện có khi tái tổ chức.
- Nếu một chi tiết chưa chắc chắn, ưu tiên giữ nguyên nội dung hiện tại và thêm ghi chú làm rõ.

## 🧯 Khắc Phục Sự Cố

- `No README changes compared to origin/main`: `README.md` cục bộ của bạn trùng với remote; không cần push.
- Banner/hình ảnh hiển thị lỗi: kiểm tra đường dẫn như `figs/banner.png` và URL GitHub dạng raw/blob.
- Dòng chọn ngôn ngữ không nhất quán: giữ đúng một dòng tùy chọn ngôn ngữ ở đầu mỗi biến thể README.
- Nội dung gốc và i18n lệch nhau: cập nhật bản dịch sau khi chốt chỉnh sửa README gốc.

## 🗺️ Lộ Trình

- Duy trì độ tương ứng mục giữa `README.md` và `i18n/README.*.md`.
- Giữ các liên kết hệ sinh thái đồng bộ với dự án và domain đang hoạt động.
- Tiếp tục cải thiện độ rõ ràng của danh mục dự án trong `projects/catalog.md` và `projects/sites.md`.
- Bổ sung các kiểm tra nhẹ cho tính toàn vẹn liên kết và tính nhất quán của thanh ngôn ngữ.

## 🤝 Đóng Góp

Hoan nghênh đóng góp để cải thiện độ rõ ràng hồ sơ, độ chính xác liên kết và tính nhất quán đa ngôn ngữ.

1. Fork hoặc tạo nhánh từ `main` mới nhất.
2. Đề xuất cải tiến tập trung cho README/i18n.
3. Mở PR với mô tả thay đổi rõ ràng.

Nếu chỉnh sửa trực tiếp kho này, hãy đảm bảo commit tập trung vào README được tách khỏi các thay đổi local không liên quan.

## ❤️ Hỗ Trợ / Tài Trợ

- GitHub Sponsors: https://github.com/sponsors/lachlanchen
- Donate: https://chat.lazying.art/donate
- LazyingArt: https://lazying.art
- EchoMind: https://chat.lazying.art
- OnlyIdeas: https://onlyideas.art

## 🙏 Lời Cảm Ơn

- Cảm ơn các cộng tác viên và người dùng trong toàn hệ sinh thái LazyingArt và LightMind.
- Trân trọng cộng đồng mã nguồn mở và các nhà nghiên cứu đã hỗ trợ công cụ AI thực dụng và chia sẻ tri thức.

## 📄 Giấy Phép

Hiện chưa có file `LICENSE` ở cấp kho.  
Giả định: xem nội dung như tài liệu/hồ sơ cá nhân trừ khi có giấy phép được thêm rõ ràng.
