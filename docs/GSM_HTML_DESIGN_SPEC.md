# Herbox Graphic Standard Manual (GSM v5.0) — Web Implementation Guide

**Author:** Pixel (UI/UX Specialist & Visual Cockpit Designer)  
**Target Repository:** [felixzzz/herbox_design_system](https://github.com/felixzzz/herbox_design_system.git)  
**Source Document:** Herbox GSM 5.0 (19 Pages)

---

## 1. Aesthetic Direction & Architectural Philosophy
The Herbox web GSM rejects generic SaaS documentation templates and corporate BI bloat in favor of **Japandi Minimalist Telemetry**:
- **Wabi-Sabi Warmth**: Background uses a subtle tactile Tatami dot matrix grounded on Ivory Base (`#F7F4E2`) rather than sterile `#FFFFFF`.
- **Botanical Forest Contrast**: Primary brand typography and structure use deep Forest Green (`#265A32`) with Midnight Forest Green (`#112316`) for deep dark-mode states.
- **Culinary Vitality Accent**: Coral Red (`#ED5855`) is reserved for high-impact accents, badges, warnings, and calls-to-action.
- **Zen Micro-Interactions**: Smooth glassmorphic panels (`backdrop-filter: blur(12px)`), 1-click clipboard telemetry with floating toast notifications, and interactive typography/logo simulators.

---

## 2. Recommended Section Hierarchy for `index.html`

| Section | Title | Key Interactive & Visual Elements |
|---|---|---|
| **00. Telemetry Header** | Sticky Navigation & Cockpit Controls | Brand logomark, live dark/ivory mode toggle, section anchor jump links, GitHub repo button. |
| **Hero** | Brand Manifesto & Fast-Casual Telemetry | High-density heading with Shrimp font, organic botanical background watermark, quick CTAs to palette and asset downloads. |
| **01. Brand DNA** | Core Tenets & Value Pillars | 3 Japandi glass cards: *Organic Integrity* (green), *Vibrant Vitality* (coral), *Japandi Clarity* (zen space). |
| **02. Color Matrix** | Telemetry Color Swatches & Contrast | 4 primary brand cards (Coral Red, Forest Green, Ivory Base, Leaf Sage). 1-click copy HEX to clipboard, RGB/CMYK values, and WCAG accessibility contrast ratios. |
| **03. Logotype Suite** | Logo Architecture, Clearspace & Don'ts | **Interactive Logo Canvas**: Toggle backgrounds between Ivory, Forest Green, Dark Midnight, and Pure White. Visual 1X Clearspace overlay and strict **Logo Don'ts** violation gallery (stretched, shaded, rotated, low contrast). |
| **04. Typography Lab** | Typographic Hierarchy & Live Specimen | Interactive font selector (Shrimp Display vs. Coves Bold/Light vs. Google fallbacks Fredoka/Nunito), live font size slider (16px–96px), editable specimen textarea, and typographic scale context table. |
| **05. Supergraphics & Packaging** | Packaging Telemetry & Mockups | Eco-Kraft Salad Bowl Sleeve specs (Die-cut SL-01), rPET Cold-Pressed Juice Label (FDA Food Grade), and Monospaced Thermal POS Kitchen Expediting Ticket. |
| **06. Asset Hub** | Production Downloads & Token JSON | Direct download cards for font files (`SHRIMP.ttf`, `Coves Bold.otf`), PNG logo suites, and embedded `tokens.json` code block with 1-click token copy. |

---

## 3. Deployment File Structure

Place `index.html` in the root of the `herbox-design-system` repository alongside:
```
herbox-design-system/
├── index.html                  <-- Created by Pixel
├── DESIGN_SYSTEM_SPEC.md
├── tokens.json
├── herbox-tokens.css
└── assets/
    ├── fonts/
    │   ├── SHRIMP.ttf
    │   ├── Coves Bold.otf
    │   └── Coves Light.otf
    └── logos/
        └── png/
            ├── Herbox Logo-red.png
            ├── Herbox Logo-offwhite.png
            ├── Herbox Logo-green.png
            └── Herbox Logo-black.png
```

The template is fully self-contained using CDN Tailwind CSS and Lucide icons, while gracefully referencing local fonts, logos, and tokens.
