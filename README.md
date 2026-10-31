# LootFast Landing Page

Landing page tiếng Việt, HTML/CSS/JavaScript tĩnh, không cần cài dependency hoặc build. Không gọi API và không thu thập dữ liệu người dùng.

## Xem tại máy

```sh
python3 -m http.server 4173
```

Mở http://localhost:4173.

## Deploy Vercel

Import repo `PEXE-LOOTFAST/LootFast-LandingPage`. Chọn framework `Other`, root directory `.`; không đặt build command; output directory `.`. Deploy.

## Trước khi công bố

- Cập nhật link tải app thật và trạng thái phát hành tại `#download`, CTA và FAQ trong `index.html`.
- Khi có domain chính thức, thêm canonical, og:url và đổi og:image thành URL tuyệt đối tại domain đó.
- Bổ sung liên kết chính sách bảo mật và điều khoản đã được chủ dự án duyệt. Không tự tạo điều khoản pháp lý hay liên kết giả.
- Chỉ dùng số liệu, đánh giá và ảnh giao diện đã xác minh. Hình món ăn hiện là minh họa.

## Cấu trúc

- `index.html`: nội dung và SEO
- `style.css`: giao diện responsive, trạng thái focus, reduced motion
- `app.js`: menu di động, animation, năm bản quyền
- `404.html`: trang lỗi
- `assets/`: ảnh và favicon
- `vercel.json`: cấu hình web tĩnh

Ảnh minh họa: https://images.unsplash.com/photo-1547592180-85f173990554. Font Manrope tải từ Google Fonts. Biểu tượng thương hiệu trên web là wordmark và dấu mũi tên tạm dựng, cần đối chiếu bộ nhận diện chính thức.
