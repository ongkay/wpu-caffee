# Proyek Point of Sale (POS)

Ini adalah aplikasi Point of Sale (POS) berbasis web yang dibangun menggunakan Next.js dan TypeScript. Aplikasi ini dirancang untuk mengelola menu, meja, pesanan, dan pengguna dalam sebuah lingkungan restoran atau kafe.

## Teknologi Utama

- **Framework**: Next.js
- **Bahasa**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: Supabase (diasumsikan dari struktur `lib/supabase`)
- **Manajemen State**: Zustand (diasumsikan dari `stores/auth-store.ts`)
- **Validasi Form**: Zod

## Struktur Folder

Berikut adalah gambaran umum struktur folder dan file dalam proyek ini:

```
/
├── public/
├── src/
│   ├── actions/
│   │   ├── auth-action.ts
│   │   └── storage-action.ts
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── layout.tsx
│   │   │   └── login/
│   │   │       ├── actions.ts
│   │   │       ├── page.tsx
│   │   │       └── _components/
│   │   │           └── login.tsx
│   │   ├── (dashboard)/
│   │   │   ├── _components/
│   │   │   │   └── dashboard-breadcrumb.tsx
│   │   │   ├── admin/
│   │   │   │   ├── _components/
│   │   │   │   │   └── dashboard.tsx
│   │   │   │   ├── menu/
│   │   │   │   │   ├── _components/
│   │   │   │   │   │   ├── dialog-create-menu.tsx
│   │   │   │   │   │   ├── dialog-delete-menu.tsx
│   │   │   │   │   │   ├── dialog-update-menu.tsx
│   │   │   │   │   │   ├── form-menu.tsx
│   │   │   │   │   │   └── menu.tsx
│   │   │   │   │   ├── actions.ts
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   ├── table/
│   │   │   │   │   ├── _components/
│   │   │   │   │   │   ├── dialog-create-table.tsx
│   │   │   │   │   │   ├── dialog-delete-table.tsx
│   │   │   │   │   │   ├── dialog-update-table.tsx
│   │   │   │   │   │   ├── form-table.tsx
│   │   │   │   │   │   └── table.tsx
│   │   │   │   │   ├── actions.ts
│   │   │   │   │   └── page.tsx
│   │   │   │   └── user/
│   │   │   │       ├── _components/
│   │   │   │       │   ├── dialog-create-user.tsx
│   │   │   │       │   ├── dialog-delete-user.tsx
│   │   │   │       │   ├── dialog-update-user.tsx
│   │   │   │       │   ├── form-user.tsx
│   │   │   │       │   └── user.tsx
│   │   │   │       ├── actions.ts
│   │   │   │       └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── order/
│   │   │       ├── [id]/
│   │   │       │   ├── _components/
│   │   │       │   │   ├── detail-order.tsx
│   │   │       │   │   └── summary.tsx
│   │   │       │   ├── add/
│   │   │       │   │   ├── _components/
│   │   │       │   │   │   ├── add-order-item.tsx
│   │   │       │   │   │   ├── card-menu.tsx
│   │   │       │   │   │   ├── cart.tsx
│   │   │       │   │   │   └── loading-card-menu.tsx
│   │   │       │   │   └── page.tsx
│   │   │       │   └── page.tsx
│   │   │       ├── _components/
│   │   │       │   ├── dialog-create-order.tsx
│   │   │       │   └── order.tsx
│   │   │       ├── actions.ts
│   │   │       └── page.tsx
│   │   ├── payment/
│   │   │   ├── failed/
│   │   │   │   ├── _components/
│   │   │   │   │   └── failed.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── success/
│   │   │       ├── _components/
│   │   │       │   └── success.tsx
│   │   │       └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── common/
│   │   │   ├── app-sidebar.tsx
│   │   │   ├── darkmode-toggle.tsx
│   │   │   ├── data-table.tsx
│   │   │   ├── dialog-delete.tsx
│   │   │   ├── dropdown-action.tsx
│   │   │   ├── form-image.tsx
│   │   │   ├── form-input.tsx
│   │   │   ├── form-select.tsx
│   │   │   ├── line-chart.tsx
│   │   │   └── pagination-data-table.tsx
│   │   └── ui/
│   │       ├── avatar.tsx
│   │       ├── ...
│   ├── configs/
│   │   └── environment.ts
│   ├── constants/
│   │   ├── auth-constant.ts
│   │   ├── data-table-constant.ts
│   │   ├── general-constant.ts
│   │   ├── menu-constant.ts
│   │   ├── order-constant.ts
│   │   ├── sidebar-constant.ts
│   │   ├── table-constant.ts
│   │   └── user-constant.ts
│   ├── hooks/
│   │   ├── use-data-table.tsx
│   │   ├── use-debounce.tsx
│   │   ├── use-mobile.ts
│   │   └── use-pricing.tsx
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts
│   │   │   ├── default.ts
│   │   │   ├── middleware.ts
│   │   │   └── server.ts
│   │   └── utils.ts
│   ├── migrations/
│   │   ├── 001-auth-profiles.sql
│   │   ├── 002-menu.sql
│   │   ├── 003-table.sql
│   │   └── 004-order.sql
│   ├── providers/
│   │   ├── auth-store-provider.tsx
│   │   ├── react-query-provider.tsx
│   │   └── theme-provider.tsx
│   ├── stores/
│   │   └── auth-store.ts
│   ├── types/
│   │   ├── auth.d.ts
│   │   ├── general.d.ts
│   │   ├── menu.d.ts
│   │   ├── midtrans.d.ts
│   │   ├── order.d.ts
│   │   └── table.d.ts
│   └── validations/
│       ├── auth-validation.ts
│       ├── menu-validation.ts
│       ├── order-validation.ts
│       └── table-validation.ts
├── .gitignore
├── components.json
├── env.example
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

### Penjelasan Detail Folder `src`

- **`actions`**: Berisi `server actions` untuk operasi backend yang aman, seperti `auth-action.ts` untuk login/logout dan `storage-action.ts` untuk upload file.

- **`app`**: Inti dari aplikasi dengan Next.js App Router.

  - **`(auth)`**: Grup rute untuk halaman-halaman terkait autentikasi.
  - **`(dashboard)`**: Grup rute untuk area yang memerlukan login. Berisi layout utama dashboard dan modul-modul seperti `admin` dan `order`.
  - **`admin`**: Sub-modul untuk manajemen data master (`menu`, `table`, `user`). Setiap bagian memiliki halaman (`page.tsx`), aksi (`actions.ts`), dan komponen UI khusus (`_components`).
  - **`order`**: Sub-modul untuk manajemen pesanan, mulai dari pembuatan, penambahan item, hingga melihat detail pesanan.
  - **`payment`**: Halaman untuk menangani callback atau status setelah proses pembayaran (berhasil atau gagal).

- **`components`**: Komponen React yang dapat digunakan kembali.

  - **`common`**: Komponen yang lebih kompleks dan spesifik untuk aplikasi ini, seperti `app-sidebar.tsx` atau `data-table.tsx`.
  - **`ui`**: Komponen UI dasar yang umumnya berasal dari `shadcn/ui`, seperti `button.tsx`, `card.tsx`, dan `input.tsx`.

- **`configs`**: Menyimpan file konfigurasi, seperti `environment.ts` untuk mengelola variabel lingkungan secara terpusat dan aman.

- **`constants`**: Tempat untuk menyimpan nilai-nilai konstan yang digunakan di seluruh aplikasi untuk menghindari _hardcoding_, seperti `sidebar-constant.ts` untuk menu navigasi atau `menu-constant.ts` untuk data terkait menu.

- **`hooks`**: Kumpulan _custom hooks_ React untuk mengisolasi dan menggunakan kembali logika stateful, contohnya `use-data-table.tsx` untuk logika tabel atau `use-debounce.tsx` untuk menunda eksekusi fungsi.

- **`lib`**: Berisi pustaka dan fungsi utilitas.

  - **`supabase`**: Kumpulan file untuk berinteraksi dengan Supabase, dipisahkan untuk sisi `client`, `server`, dan `middleware`.
  - **`utils.ts`**: Fungsi-fungsi bantuan umum yang digunakan di berbagai bagian aplikasi.

- **`migrations`**: Berisi skrip SQL untuk evolusi skema database. Setiap file menandai sebuah perubahan pada struktur tabel.

- **`providers`**: Komponen _wrapper_ yang menyediakan _context_ untuk seluruh aplikasi, seperti `react-query-provider.tsx` untuk caching data, `theme-provider.tsx` untuk tema gelap/terang, dan `auth-store-provider.tsx` untuk state autentikasi.

- **`stores`**: Berisi _stores_ dari Zustand untuk manajemen state global, seperti `auth-store.ts` yang menyimpan data sesi pengguna.

- **`types`**: Kumpulan file definisi tipe (`.d.ts`) untuk memastikan _type-safety_ di seluruh proyek untuk entitas seperti `menu`, `order`, `user`, dll.

- **`validations`**: Berisi skema validasi dari Zod. Digunakan untuk memvalidasi data formulir dan payload API, memastikan integritas data sebelum diproses.

## Cara Menjalankan Proyek

1.  **Install Dependensi**:

    ```bash
    npm install
    ```

2.  **Konfigurasi Environment**:
    Salin file `env.example` menjadi `.env` dan isi variabel environment yang diperlukan (misalnya, kredensial Supabase).

3.  **Jalankan Aplikasi Development**:
    ```bash
    npm run dev
    ```
    Aplikasi akan berjalan di `http://localhost:3000`.
