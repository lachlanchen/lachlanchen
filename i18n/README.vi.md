[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)


[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# Lachlan Chen · he/him

| [![Creator & CEO](https://img.shields.io/badge/Creator%20%26%20CEO-LazyingArt%20LLC-0f766e?style=flat-square)](https://lazying.art) | [![Cofounder & COO](https://img.shields.io/badge/Cofounder%20%26%20COO-LightMind%20Tech%20Ltd-1d4ed8?style=flat-square)](https://lightmind.art) | [![Profile Repository](https://img.shields.io/badge/GitHub-Profile%20README-111827?style=flat-square)](https://github.com/lachlanchen/lachlanchen) | [![Google Scholar](https://img.shields.io/badge/Scholar-Profile-4285F4?style=flat-square)](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-Lachlan%20Chen-0A66C2?style=flat-square)](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |
|---|---|---|---|---|

Tôi xây dựng các **công cụ và hệ thống** giúp mọi người sáng tạo, học tập và ghi nhớ với ít ma sát hơn.

> **The Art of Lazying**  
> Xây ít hơn. Khai mở nhiều hơn trong cuộc sống.

## 📌 Tổng quan

Kho này là **repo README hồ sơ GitHub** cho [`lachlanchen`](https://github.com/lachlanchen). Nó theo hướng documentation-first, đa ngôn ngữ, và được thiết kế để `README.md` luôn là điểm vào hồ sơ chuẩn, trong khi các bản dịch nằm trong `i18n/`.

## 🎯 Tóm tắt Hồ sơ

| Khía cạnh | Chi tiết |
|---|---|
| Mục đích repo | Nội dung trang chủ hồ sơ GitHub |
| Ngôn ngữ chuẩn | `README.md` |
| Bản địa hóa | `i18n/` |
| Quy trình cập nhật | `scripts/*` + các snapshot `.auto-readme-work/` |

## ✨ Tính năng Hồ sơ

| Lĩnh vực | Khả năng |
|---|---|
| Mô hình nội dung | Nội dung hồ sơ công khai tập trung trong `README.md` |
| Quốc tế hóa | Các điểm vào đa ngôn ngữ trong `i18n/` |
| Tự động hóa | Các script nhẹ để cập nhật đồng loạt README |
| Tầm nhìn tài trợ | Khối đóng góp/hỗ trợ ở cấp hồ sơ |
| Chọn lọc dự án | Danh mục tóm tắt dự án ngắn, một dòng |

## 🗂️ Cấu trúc dự án

| Đường dẫn | Mục đích |
|---|---|
| `README.md` | Hồ sơ tiếng Anh chính được dùng trên trang GitHub profile. |
| `i18n/` | Các biến thể hồ sơ đã dịch. |
| `projects/` | Chỉ mục dự án và ghi chú cục bộ. |
| `scripts/push_readme_only.sh` | Trợ lý luồng làm việc Git để stage/publish chỉ `README.md`. |
| `scripts/update-read-me/` | Công cụ trợ giúp cập nhật hồ sơ cục bộ. |
| `scripts/auto-update-readme/` | Pipeline dùng khi cập nhật nhiều repo theo lô. |
| `.github/FUNDING.yml` | Metadata nhà tài trợ / tài trợ trên GitHub. |
| `figs/` | Tài sản banner và badge dùng trong nội dung hồ sơ. |

## ✅ Điều kiện tiên quyết

- `git`
- `bash` (để chạy script bảo trì)
- `rg` (khuyến nghị: script repo dùng ripgrep cho kiểm tra trùng lặp)

Giả định: không cần phụ thuộc runtime theo ngôn ngữ cho việc xem/sửa README này.

## 🛠️ Cài đặt / Khởi tạo

```bash
git clone git@github.com:lachlanchen/lachlanchen.git
cd lachlanchen
```

Repo này tập trung vào tài liệu; không yêu cầu chuỗi công cụ build/test/install.

## 🚀 Cách sử dụng

### Cập nhật trực tiếp hồ sơ README

- Chỉnh sửa trực tiếp các section trong `README.md`.
- Giữ nội dung chính, tránh lặp lại block trùng lặp (đặc biệt là banner/support panel).

### Sử dụng các script có sẵn

```bash
bash scripts/update-read-me/run_lachlanchen_only.sh
```

Sau khi kiểm tra cập nhật, chỉ publish phần README:

```bash
bash scripts/push_readme_only.sh
```

## 🧩 Cấu hình

- Giữ liên kết chuyển ngôn ngữ ở đầu file và đồng bộ sang các thư mục dịch.
- Banner đặt ngay dưới đường dẫn chuyển ngôn ngữ cho mọi phiên bản.
- Support panel nằm ở phần cuối, trên phần Contact/License.
- Dùng URL tuyệt đối cho liên kết bên ngoài khi có thể để tăng tính di động cho hồ sơ.
- Giả định branch/path chuẩn là `main` và repository root là `/home/lachlan/ProjectsLFS/lachlanchen` trong quy trình local.

## 🧪 Ví dụ

- Thêm một biến thể hồ sơ đã dịch mới
  1. Tạo `i18n/README.xx.md` với cùng cấu trúc heading.
  2. Thêm một liên kết ngôn ngữ ở đầu cả `README.md` và bản dịch mới.
- Thêm mục repo cốt lõi mới
  1. Thêm một dòng vào bảng Core Repositories trong `README.md`.
  2. Bao gồm tóm tắt ngắn gọn một dòng và URL repo chuẩn.
- Chạy pipeline hồ sơ từ output `.auto-readme-work/` khi có sẵn.

## 🧭 Giới thiệu

| Vai trò | Trọng tâm |
|---|---|
| Creator & CEO | **LazyingArt LLC** |
| Cofounder & COO | **LightMind Tech Ltd** |
| Mục tiêu sứ mệnh | Sản phẩm AI thực tế, hệ thống tri thức, và quy trình sáng tạo |

## 🔗 Liên kết nhanh

| Lĩnh vực | Link |
|---|---|
| 🌐 Websites | [lazying.art](https://lazying.art) · [onlyideas.art](https://onlyideas.art) |
| 🧠 EchoMind | [chat.lazying.art](https://chat.lazying.art) |
| 📚 Research Hub | [paper.lazying.art](https://paper.lazying.art) · [ideas.onlyideas.art](https://ideas.onlyideas.art) |
| 🎓 Google Scholar | [scholar profile](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en) |
| 💼 LinkedIn | [lachlan-chen-7a056a233](https://hk.linkedin.com/in/lachlan-chen-7a056a233) |

## 🚀 Core Repositories

| Dự án | Tóm tắt | Link |
|---|---|---|
| 🤖 **LazyingArtBot (LAB)** | Nền tảng trợ lý AI và tự động hóa trong hệ sinh thái LazyingArt | [Repository](https://github.com/lachlanchen/LazyingArtBot) |
| 🧩 **AutoAppDev** | Công cụ tối ưu quy trình phát triển ứng dụng | [Repository](https://github.com/lachlanchen/AutoAppDev) |
| 📖 **AutoNovelWriter** | Quy trình sáng tạo câu chuyện và viết sáng tạo dạng dài | [Repository](https://github.com/lachlanchen/AutoNovelWriter) |
| 🧠 **AgInTi** | Thử nghiệm tác nhân AI dạng humanoid và thiết kế hệ thống | [Repository](https://github.com/lachlanchen/AgInTi) |

## 🎯 Điều tôi quan tâm

**The Art of Lazying** là thiết kế các hệ thống giảm bớt nỗ lực không cần thiết trong khi vẫn giữ được chiều sâu, chất lượng, và tính sáng tạo của con người.

## 🧩 Dự án nổi bật

| Dự án | Tóm tắt |
|---|---|
| OpenHI | Tối ưu nội sinh hình ảnh siêu phổ theo sự kiện |
| EchoMind | Đa ngôn ngữ thoại/chat cho học tập và sáng tạo |
| AutoPublish + AutoPubMonitor | Pipeline tự động hóa từ bản nháp đến xuất bản |
| LazyEdit | Chỉnh sửa, phụ đề, đánh dấu nổi bật và đóng gói với trợ giúp AI |

## ❤️ Support

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://camo.githubusercontent.com/24a4914f0b42c6f435f9e101621f1e52535b02c225764b2f6cc99416926004b7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f6e6174652d4c617a79696e674172742d3045413545393f7374796c653d666f722d7468652d6261646765266c6f676f3d6b6f2d6669266c6f676f436f6c6f723d7768697465)](https://chat.lazying.art/donate) | [![PayPal](https://camo.githubusercontent.com/d0f57e8b016517a4b06961b24d0ca87d62fdba16e18bbdb6aba28e978dc0ea21/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f50617950616c2d526f6e677a686f754368656e2d3030343537433f7374796c653d666f722d7468652d6261646765266c6f676f3d70617970616c266c6f676f436f6c6f723d7768697465)](https://paypal.me/RongzhouChen) | [![Stripe](https://camo.githubusercontent.com/1152dfe04b6943afe3a8d2953676749603fb9f95e24088c92c97a01a897b4942/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5374726970652d446f6e6174652d3633354246463f7374796c653d666f722d7468652d6261646765266c6f676f3d737472697065266c6f676f436f6c6f723d7768697465)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |

## 📬 Liên hệ

| Kênh | Giá trị |
|---|---|
| Email | `lach@lazying.art` |
| Website | https://lazying.art |

## 🧪 Xử lý sự cố

- Các block banner/support xuất hiện trùng lặp sau khi pipeline chạy: hãy xóa trùng và giữ đúng một block chuẩn cho mỗi loại.
- Bản dịch quick-link sai: xác nhận các file đích tồn tại trong `i18n/`.
- Lỗi script thường do thiếu `bash` hoặc `rg` trong PATH; hãy cài các phụ thuộc này rồi chạy lại từ repo root.
- Nếu liên kết trỏ sang nhánh/tên repo cũ, cập nhật về đường dẫn repo chuẩn.

## 🧰 Ghi chú phát triển

- Ưu tiên chỉnh sửa tăng dần: cập nhật `README.md` trước, rồi đồng bộ bản dịch nếu phạm vi công việc yêu cầu.
- Ưu tiên các hàng bảng dễ đọc cho con người và tóm tắt ngắn gọn một dòng.
- Giữ các bản không tiếng Anh đồng bộ cùng thứ tự section để nhất quán.
- Thư mục `.auto-readme-work/` chứa snapshot pipeline và kế hoạch ngôn ngữ; hãy xem như bối cảnh tạo ra.

## 🗺️ Lộ trình

- Giữ tất cả liên kết cập nhật và được kiểm tra mỗi quý.
- Thêm một mục nhẹ cho thí nghiệm đang chạy và badge trạng thái.
- Mở rộng tài liệu `scripts/` với phần lưu ý tiền điều kiện và an toàn.
- Công bố một mục nhật ký cập nhật hồ sơ kiểu changelog tối thiểu cho các thay đổi nổi bật.

## 🤝 Đóng góp

Đóng góp đều được chào đón.

- Mở issue cho các sửa lỗi hoặc cập nhật.
- Giữ chỉnh sửa tập trung và theo phạm vi tăng dần.
- Khi thêm một section mới lớn, cập nhật file ngôn ngữ song hành khi có thể.
- Điều phối chỉnh sửa với các script tự động hiện có để tránh xung đột merge.

## 📄 License

Giả định: repository này hiện chưa có file license riêng ở root. Nếu bạn muốn cấp phép rõ ràng, hãy thêm file `LICENSE` chuẩn (ví dụ `MIT` hoặc `Apache-2.0`) và đưa phần thông báo ở đây.

Build less. Live more.
