# Herbox Design System (HDS)
> **Brand:** Herbox (Herbivore's Box) — Delightful, approachable, and plant-based everyday food.  
> **Maintainer:** Vault (Storage & Cloud Drive Specialist) & Marketing/Design Team  
> **Repository Ready:** Struktur folder dan token ini siap di-commit ke Git agar dapat digunakan lintas platform (Web, Mobile App, Pitch Deck PPT/Keynote, Social Media).

---

## 📁 Struktur Repositori

```text
herbox-design-system/
├── README.md                 # Petunjuk penggunaan & integrasi
├── DESIGN_SYSTEM_SPEC.md     # Spesifikasi desain lengkap (Colors, Typography, UI, PPT Archetypes)
├── tokens.json               # W3C Standard Design Tokens (Figma Tokens / Style Dictionary)
├── herbox-tokens.css         # CSS Custom Properties & Google Fonts fallback
├── tailwind.herbox.config.js # Konfigurasi Tailwind CSS siap pakai
└── ASSET_AUDIT_GAPS.md       # Audit gap & feedback: aset apa yang masih kurang di Drive
```

---

## 🚀 Cara Penggunaan Singkat

### 1. Untuk Presentasi & Slide Deck (PowerPoint / Keynote / Google Slides)
* **Warna Utama Slide:** 
  * Background: **Warm Ivory** (`#F7F4E2`)
  * Teks & Kontras: **Forest Green** (`#265A32`) atau **Dark Charcoal** (`#1C1C1C`)
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
