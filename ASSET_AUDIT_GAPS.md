# Herbox Brand Assets: Audit Gaps & Rekomendasi
**Auditor:** Vault (Storage & Cloud Drive Specialist)  
**Status Audit:** Evaluasi Kesiapan Aset untuk Git & Reusable Presentation/Deck  
**Tanggal:** 24 Oktober 2026  

Dokumen ini memetakan **gap inventaris aset** di Google Drive dan memberikan **action plan konkret** agar design system Herbox 100% reusable dan mandiri saat dimasukkan ke repositori Git.

---

## 🔍 Ringkasan Gap & Tingkat Urgensi

| Aset / Kategori | Status Saat Ini di Drive | Risiko / Hambatan | Urgensi |
| :--- | :--- | :--- | :---: |
| **1. Font Installation Files (Shrimp & Coves)** | ❌ **TIDAK ADA** file `.otf` / `.ttf` di Google Drive. Hanya tertulis namanya di PDF GSM. | Saat tim membuka file PPT/Keynote di laptop baru, font akan hilang/berantakan (*font missing error*). | 🔴 **Tinggi** |
| **2. Master Vector Logo (.SVG / .AI)** | ⚠️ **Hanya ada PNG Raster** di `Brand asset/` (tidak ada file SVG terisolasi). | Logo pecah jika dicetak besar, disematkan pada proyektor 4K, atau diolah di web vector. | 🔴 **Tinggi** |
| **3. Master Template Slide (.POTX / .KTH)** | ⚠️ **Hanya ada slide lama** per event (12.12.20), belum ada *master slide theme*. | Setiap orang harus mengatur ulang warna, font, margin, dan posisi logo setiap kali membuat deck baru. | 🟡 **Sedang** |
| **4. Komponen Supergraphic Vektor** | ⚠️ **Tersegel dalam PDF GSM** dan file flattened JPEG (`instapost-02.jpg`). | Tim desain/marketing tidak bisa langsung drag-and-drop bentuk kurva bento ke slide atau Canva. | 🟡 **Sedang** |
| **5. Struktur Arsip Foto Menu** | ⚠️ **Tersebar** di `Photo untuk SHopeeFood`, `photo catering`, dan `Photos`. | Sulit menemukan foto hero resolusi tinggi yang sudah dipotong rapi (*transparent PNG* atau *clean bento*). | 🟢 **Rendah** |

---

## 🛠️ Rekomendasi Solusi & Action Plan

### 1. Masalah Font: Standardisasi Font Package
* **Solusi Instan (Sudah Diterapkan di Token):** Gunakan Google Fonts fallback (**Fredoka** untuk judul, **Nunito** untuk teks isi). Kedua font ini gratis, open-source, dan dapat diakses langsung oleh Google Slides tanpa instalasi lokal.
* **Tindakan Lanjutan:** 
  * Cari atau unggah master file `Shrimp.otf` dan `Coves.otf` ke folder baru:  
    `Google Drive/Shared drives/Tyfel/Herbox/Brand asset/Fonts/`
  * Tambahkan folder `fonts/` di dalam repositori Git Herbox ini.

### 2. Masalah Vektor Logo: Ekspor SVG Master
* **Tindakan Lanjutan:**
  * Buka master artwork di `/Users/felixsalim/Library/CloudStorage/GoogleDrive-felix@salim.bz/Shared drives/Tyfel/Herbox/Marketing/Herbox x BlueSky/catering July.ai` atau ekstrak vector outline dari PDF GSM.
  * Ekspor menjadi 4 file SVG standar:
    1. `herbox-logo-red.svg`
    2. `herbox-logo-green.svg`
    3. `herbox-logo-offwhite.svg`
    4. `herbox-logo-black.svg`
  * Simpan di repositori Git `herbox-design-system/assets/logos/` dan sinkronkan ke Google Drive.

### 3. Masalah Presentasi: Pembuatan Master Slide (.potx / Keynote)
* **Tindakan Lanjutan:**
  * Buat satu file template master presentasi (`Herbox_Master_Presentation_v1.potx` atau Google Slides Master Theme) yang memuat **5 layout archetype** dari spesifikasi:
    1. Cover Slide (Forest Green & Warm Ivory)
    2. Bento Grid (3-column product showcase)
    3. Problem vs Solution
    4. Key Metrics / Traction (Large Red Numbers)
    5. Closing & CTA
  * Siapkan *slide color theme* dengan palette warna resmi agar tinggal 1-klik di PowerPoint.

### 4. Isolasi Supergraphics Bentuk Organik
* **Tindakan Lanjutan:**
  * Ekstrak bentuk-bentuk kurva organik dari halaman 15–19 PDF GSM menjadi aset individual (format SVG transparan).
  * Dengan demikian, tim yang membuat presentasi bisa menempatkan aksen bentuk bento di pojok slide secara fleksibel.

---

## 📦 Rekomendasi Struktur Repositori Git Ideal

Jika folder ini akan dijadikan repositori Git resmi tim, berikut struktur folder lengkap yang disarankan:

```text
herbox-design-system/
├── README.md
├── DESIGN_SYSTEM_SPEC.md
├── ASSET_AUDIT_GAPS.md
├── tokens.json
├── herbox-tokens.css
├── tailwind.herbox.config.js
├── assets/
│   ├── logos/
│   │   ├── svg/          # herbox-logo-red.svg, offwhite.svg, green.svg, black.svg
│   │   └── png/          # Versi raster high-res 300dpi transparan
│   ├── supergraphics/    # Aksen bentuk bento organik (SVG/PNG)
│   ├── fonts/            # Shrimp.otf, Coves-Light.otf, Coves-Bold.otf
│   └── templates/        # Herbox_Master_Template.potx (PowerPoint)
└── examples/
    └── slide-deck-sample.html # Preview visual berbasis web
```
