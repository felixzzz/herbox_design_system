# Herbox Design System (HDS) & Interactive GSM Portal
> **Brand:** Herbox (Herbivore's Box) — Delightful, approachable, and plant-based everyday food.  
> **Maintainer:** Vault (Storage & Cloud Drive Specialist) & Pixel (UI/UX Specialist & Visual Cockpit Designer)  
> **Repository:** [https://github.com/felixzzz/herbox_design_system](https://github.com/felixzzz/herbox_design_system)

---

## 🌐 Live Interactive Graphic Standard Manual (GSM)
Dokumentasi brand Herbox kini tersedia dalam format interaktif web portal mandiri: **[`index.html`](./index.html)**.
Didesain dengan arsitektur **Japandi Minimalist Telemetry** oleh `@Pixel`:
- **Live Theme Toggle:** Mendukung *Warm Ivory Zen Mode* (`#F7F4E2`) dan *Midnight Forest Dark Mode* (`#112316`).
- **Interactive Color Swatches:** 1-klik salin HEX ke clipboard, nilai CMYK, RGB, Pantone, dan rasio kontras WCAG AA/AAA.
- **Dynamic Logo Suite & Clearspace:** Uji varian logo (`red`, `green`, `offwhite`, `black`) di atas 4 warna kanvas dengan panduan clearspace 1X dan panduan larangan (*Logo Don'ts*).
- **Interactive Typography Lab:** Coba langsung font kanonikal (**Shrimp** & **Coves**) serta fallback (**Fredoka** & **Nunito**) dengan slider ukuran font real-time (16px–96px) dan editable textarea.
- **F&B Packaging Telemetry:** Simulasi desain kemasan riil (Kraft Salad Bowl Sleeve, rPET Juice Label, Thermal Kitchen Order Ticket).
- **Direct Asset Hub:** Tombol unduh langsung untuk font `.ttf`/`.otf`, logo master transparent PNG, dan embedded `tokens.json`.

*Bisa dibuka langsung secara lokal di browser (`open index.html`) atau diaktifkan lewat **GitHub Pages** (Settings > Pages > Deploy from branch `main` root).*

---

## 📁 Struktur Repositori

```text
herbox-design-system/
├── index.html                  # Interactive GSM & Brand Web Portal (Japandi Minimalist Telemetry)
├── README.md                   # Petunjuk penggunaan & integrasi repositori
├── DESIGN_SYSTEM_SPEC.md       # Spesifikasi desain lengkap (Colors, Typography, UI, PPT Archetypes)
├── tokens.json                 # W3C Standard Design Tokens (Figma Tokens / Style Dictionary)
├── herbox-tokens.css           # CSS Custom Properties & Google Fonts fallback
├── tailwind.herbox.config.js   # Konfigurasi preset Tailwind CSS siap pakai
├── ASSET_AUDIT_GAPS.md         # Audit gap & feedback kelengkapan aset Drive
├── docs/
│   └── GSM_HTML_DESIGN_SPEC.md # Panduan arsitektur & implementasi web GSM v5.0 oleh Pixel
├── assets/
│   ├── fonts/                  # Font kanonikal resmi (Shrimp.ttf, Coves Bold.otf, Coves Light.otf)
│   └── logos/png/              # Master logo transparan resmi (Red, Green, Offwhite, Black)
└── examples/
    └── slide-archetypes.html   # Preview 3 arketipe layout slide presentasi 16:9
```

---

## 🚀 Cara Penggunaan Singkat

### 1. Untuk Presentasi & Slide Deck (PowerPoint / Keynote / Google Slides)
* **Warna Utama Slide:** 
  * Background: **Warm Ivory** (`#F7F4E2`)
  * Teks & Kontras: **Forest Green** (`#265A32`) atau **Dark Charcoal** (`#161917`)
  * Aksen & Tombol CTA: **Coral Red** (`#ED5855`)
* **Font Slide:**
  * Title/Cover: **Shrimp** (Fallback jika tidak terinstall: **Fredoka Bold** / **Outfit Black**)
  * Body/Bullet Points: **Coves Light / Bold** (Fallback: **Nunito** / **Poppins**)
* *Panduan layout slide lengkap tersedia di [DESIGN_SYSTEM_SPEC.md](./DESIGN_SYSTEM_SPEC.md#7-reusable-presentation--slide-deck-guidelines-pptkeynote).*

### 2. Untuk Proyek Web & Frontend
* **CSS Standar:** Import `herbox-tokens.css` ke entry point proyek Anda.
* **Tailwind CSS:** Tambahkan `tailwind.herbox.config.js` ke konfigurasi Tailwind proyek Anda (`presets: [require('./tailwind.herbox.config.js')]`).

### 3. Untuk Desain UI/UX (Figma / Penpot)
* Import `tokens.json` menggunakan plugin **Tokens Studio for Figma** atau **Style Dictionary** untuk sinkronisasi token warna, radius, dan tipografi langsung ke Figma Styles.
