# Tugas 6 PPL

# Travel Wishlist - Aplikasi Pencatat Destinasi Wisata

## Deskripsi

Aplikasi Travel Wishlist adalah aplikasi web sederhana yang memungkinkan pengguna untuk mencatat dan mengelola daftar destinasi wisata impian mereka. Aplikasi ini dibuat menggunakan AdonisJS dan SQLite.

## Fitur

-   Menambahkan destinasi wisata baru
-   Melihat daftar semua destinasi
-   Melihat detail destinasi tertentu
-   Notifikasi feedback via flash message

## Teknologi

-   AdonisJS
-   SQLite
-   HTML/CSS

## Panduan Instalasi

1. Clone repository:

    ```bash
    git clone https://github.com/khalidalghifarii/Tugas-6-main.git
    ```

2. Masuk ke direktori proyek:

    ```bash
    cd Tugas-6-main/travel-wishlist
    ```

3. Install dependensi:

    ```bash
    npm install
    ```

4. Jalankan migrasi database:

    ```bash
    node ace migration:fresh
    ```

5. Jalankan seeding database:

    ```bash
    node ace db:seed
    ```

6. Jalankan aplikasi:

    ```bash
    node ace serve --watch
    ```

7. Buka browser dan akses http://localhost:3333

## Struktur Proyek

-   app/models/destination.ts - Model untuk destinasi wisata
-   app/controllers/destinations_controller.ts - Controller untuk menangani request
-   resources/views/destinations/ - View untuk tampilan aplikasi
-   start/routes.ts - Definisi rute aplikasi
-   database/migrations/ - File migrasi database

## Anggota Kelompok

-   Khalid
-   Naufal
-   Willy
