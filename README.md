# Nguyễn Tuấn — Full-stack Developer Portfolio

> **Trang Portfolio cá nhân của Nguyễn Tuấn** — Lập trình viên Full-stack chuyên về Next.js, Laravel, NestJS và hệ thống đám mây. Giao diện được thiết kế hiện đại, tinh tế theo phong cách tối giản (lấy cảm hứng từ Matt Farley) kết hợp bộ màu **Deep Ocean & Emerald** độc bản, hỗ trợ đầy đủ Dark / Light mode và đa ngôn ngữ (Tiếng Việt / English).

[![Next.js](https://img.shields.io/badge/Next.js-16.4.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Impeccable Score](https://img.shields.io/badge/Impeccable_Critique-32%2F32_(100%25)-10B981?style=flat-square)](https://github.com/NguyenTuan03/portfolio)

---

## 🌟 Điểm nổi bật (Key Highlights)

- 🎨 **Ngôn ngữ thiết kế Deep Ocean & Emerald**: Kết hợp sắc xanh biển sâu quyền lực (`#0B152D` / `#1E40AF`) cùng sắc ngọc lục bảo công nghệ (`#10B981`), tạo sự tin cậy, chuyên nghiệp và chiều sâu thị giác.
- 🌓 **Hỗ trợ toàn diện Dark / Light Mode**: Chuyển đổi giao diện sáng/tối mượt mà thông qua `next-themes` và hệ thống token CSS biến thể.
- 🌐 **Đa ngôn ngữ chuẩn mực (i18n)**: Kiến trúc App Router tĩnh với từ điển type-safe (`/vi` và `/en`), kiểm soát chặt chẽ bằng TypeScript `satisfies Dictionary`.
- 💻 **Giao diện Desk Devices SVG độc quyền**: Minh họa không gian làm việc (MacBook code editor, iPad, iPhone, tách cà phê) được dựng hoàn toàn bằng SVG thuần, tối ưu dung lượng và tốc độ tải trang.
- 📱 **Mobile-First & Touch-Friendly**: Mọi thẻ dự án đều hiển thị nút tương tác trực tiếp trên màn hình cảm ứng di động, song song với hiệu ứng hover gradient cao cấp trên máy tính.
- ⚡ **Kênh liên lạc đa kênh tức thì**:
  - Nút **Email** trực tiếp (`mailto:`).
  - Nút **Sao chép Email** với phản hồi thị giác tức thì (Clipboard API).
  - Nút chat nhanh **Zalo** (`https://zalo.me/0905038319`).
  - Nút liên kết **Facebook** cá nhân (`https://www.facebook.com/2011tuan2011`).
  - Liên kết kho mã nguồn **GitHub** cá nhân.
- 🏆 **Điểm Impeccable Design: 32/32 (100%)**: Đáp ứng hoàn hảo 8/8 tiêu chuẩn Nielsen Norman về công thái học giao diện và trải nghiệm người dùng.

---

## 🛠️ Công nghệ sử dụng (Tech Stack)

| Thành phần | Công nghệ / Thư viện | Mô tả |
|---|---|---|
| **Core Framework** | [Next.js 16 (Turbopack)](https://nextjs.org/) | App Router, Static Site Generation (SSG), Partial Prerendering |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strict type-safety, 100% Enum-based logic, tuyệt đối không dùng `any` |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + Vanilla CSS Tokens | Quản lý màu sắc HSL qua CSS Variables trong `app/globals.css` |
| **Icons** | [Phosphor Icons](https://phosphoricons.com/) + Custom SVGs | `@phosphor-icons/react` kết hợp SVG Zalo & Desk Devices tối ưu |
| **Theme Management** | [`next-themes`](https://github.com/pacocoursey/next-themes) | Ngăn chặn hiện tượng giật sáng (FOUC) khi tải trang |
| **Package Manager** | [pnpm](https://pnpm.io/) | Quản lý gói dependencies nhanh và tiết kiệm dung lượng |

---

## 📐 Cấu trúc thư mục (Project Structure)

```text
portfolio/
├── app/
│   ├── [lang]/                     # Định tuyến đa ngôn ngữ (/vi, /en)
│   │   ├── dictionaries/           # File từ điển json (vi.json, en.json)
│   │   ├── dictionaries.ts         # Type-safe loader từ điển i18n
│   │   ├── layout.tsx              # Root layout của từng ngôn ngữ
│   │   └── page.tsx                # Trang chủ tổng hợp tất cả các section
│   ├── globals.css                 # Design tokens, màu sắc HSL, tiện ích UI
│   ├── layout.tsx                  # Root HTML wrapper
│   └── favicon.ico / icons         # Web icons và PWA metadata
├── components/
│   ├── icons/
│   │   └── zalo-icon.tsx           # Component icon Zalo vector chuẩn
│   ├── sections/                   # Các section chính trên trang landing
│   │   ├── hero.tsx                # Hero banner: Avatar glow, heading & CTAs
│   │   ├── about.tsx               # Khung giới thiệu nền xanh đại dương
│   │   ├── skills.tsx              # Thẻ kỹ năng 3 cột nổi đè banner
│   │   ├── projects.tsx            # Danh sách dự án nổi bật 2x2 grid
│   │   └── contact.tsx             # Callout "Bắt đầu dự án" đa kênh liên lạc
│   ├── button-link.tsx             # Reusable link dạng nút pill
│   ├── copy-email-button.tsx       # Nút sao chép email + toast phản hồi
│   ├── hero-devices.tsx            # Tranh minh họa góc làm việc bằng vector SVG
│   ├── language-switch.tsx         # Bộ chuyển đổi Tiếng Việt / English
│   ├── site-footer.tsx             # Footer chứa monogram, quote và social pills
│   ├── site-header.tsx             # Header sticky với monogram, nav và nút gọi chào
│   └── theme-toggle.tsx            # Nút chuyển Dark / Light mode
├── lib/
│   ├── i18n.ts                     # Cấu hình danh sách ngôn ngữ hỗ trợ
│   └── site.ts                     # Thông tin cá nhân, enum kênh mạng xã hội, links
├── public/                         # Ảnh đại diện avatar, media assets tĩnh
├── .impeccable/                    # Báo cáo đánh giá chất lượng thiết kế UI/UX
├── next.config.ts                  # Cấu hình Next.js
└── package.json                    # Scripts và dependencies
```

---

## 🚀 Khởi chạy dự án (Getting Started)

### 1. Yêu cầu môi trường
- **Node.js**: >= 20.0.0
- **pnpm**: >= 9.0.0 (khuyên dùng)

### 2. Cài đặt thư viện
```bash
pnpm install
```

### 3. Chạy môi trường phát triển (Development)
```bash
pnpm dev
```
Truy cập [http://localhost:3000](http://localhost:3000) trên trình duyệt của bạn.

### 4. Kiểm tra kiểu dữ liệu (TypeScript Check)
```bash
pnpm typecheck
```
*Lệnh này sẽ tự động chạy `next typegen` để sinh types cho App Router và sau đó kiểm tra TypeScript với `tsc --noEmit`.*

### 5. Build bản phát hành (Production Build)
```bash
pnpm build
```
Chạy thử bản build production trên máy:
```bash
pnpm start
```

---

## 👨‍💻 Thông tin tác giả & Liên hệ (Contact)

- **Họ và tên**: Nguyễn Tuấn
- **Vị trí**: Full-stack Developer
- **Email**: [nguyenanhtuan.170164@gmail.com](mailto:nguyenanhtuan.170164@gmail.com)
- **Số điện thoại / Zalo**: [0905 038 319](https://zalo.me/0905038319)
- **Facebook**: [facebook.com/2011tuan2011](https://www.facebook.com/2011tuan2011)
- **GitHub**: [@NguyenTuan03](https://github.com/NguyenTuan03)
- **Website**: [nguyentuan03.com](https://nguyentuan03.com)

---

Handcrafted with ❤️ by **Nguyễn Tuấn** · © 2026
