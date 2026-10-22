---
name: site-style-cloner
description: >-
  Use this skill whenever the user wants to clone, replicate, or adapt 100% of the visual style,
  aesthetic, typography, layout grid, micro-interactions, and design tokens of any target website
  (e.g., Framer templates, Awwwards portfolios, brutalist/editorial studios) and customize it for a
  brand like Monsieur Flemme.
---

# Site Style Cloner & Brand Harmonizer

This skill guides the extraction and 100% reproduction of any modern website's design language, layout architecture, typography, micro-interactions, and visual aesthetic, adapting it into a designated brand identity.

---

## 1. Deconstruction & Token Harvesting Workflow

When given a URL or design reference (e.g. `https://monodrift.framer.website/`):

### Step 1: Extract Core Design Tokens
- **Backgrounds**: Exact HEX/HSL values (e.g., obsidian dark `#0B0B0C`, matte surface `#141416`, card surface `#1C1C1F`).
- **Typography Matrix**:
  - Primary Display/Heading: Architectural, high-impact sans/mono (e.g., `Syne`, `Tektur`, `Lilita One`, `Fragment Mono`).
  - Monospace Data / Badges: Technical metadata tags `[ INDEX ]`, `[ 01 // 03 ]`.
  - Body Copy: Clean grotesque or geometric sans (`Inter`, `Plus Jakarta Sans`, `Figtree`).
  - Letter Spacing & Line Height: Tight tracking (`-0.03em` to `-0.01em`), ultra-compact heading line-height (`0.92` to `1.05`).
- **Accents & Contrast**:
  - Primary Accent (e.g. Neon mint `#52FF9D`, Electric Blue `#388BFD`, Sunset Orange `#FF6B00`).
  - Secondary Borders: Translucent outlines (`rgba(255, 255, 255, 0.08)` to `0.15`).
- **Border Radius & Shadows**:
  - Sharp brutalist (`0px` or `2px`) vs Rounded capsule (`12px` to `24px`, pill badges `9999px`).
  - Diffuse glow: `box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5)`.

### Step 2: Extract Page Architecture
1. **Sticky Glass Navigation Bar**:
   - Monospace/bold typographic brandmark.
   - Status badge with live indicator (e.g., pulsing green dot `[ KICKOFF // PROCHAINE SÉANCE ]`).
   - Pill-shaped high-contrast CTA button.
2. **Hero Section**:
   - Giant editorial headline (all-caps or high-contrast weight).
   - Value statement / subtitle.
   - Interactive badge cluster (available seats, date, format).
   - High-impact dual CTA (Primary filled + Secondary Ghost/Bordered).
3. **Dynamic Ticker / Marquee**:
   - Infinite smooth scrolling banner with highlighted notices, quotes, or event alerts.
4. **Editorial Showcase Grid**:
   - Asymmetrical or 2/3-column card grid.
   - Large ordinal numbers (`01`, `02`, `03`).
   - Project/Experience cards with hover zoom, glowing borders, and tag pills.
5. **Data & Metrics / Social Proof**:
   - Brutalist counter cards ("WHAT WE COUNT NOT WHAT WE CLAIM").
6. **Editorial Program / Service Breakdown**:
   - Timeline cards or interactive accordion with clean border lines.
7. **Pricing / Access Passes**:
   - Monodrift-style tiered cards with feature checkmarks and direct purchase CTA.
8. **Interactive Booking / Contact Section**:
   - Technical form fields with clean underlines, monospace labels, and instant action (e.g. WhatsApp redirection).
9. **Bracketed Editorial Footer**:
   - Sectioned into `[ NAVIGATION ]`, `[ STUDIO / CLUB ]`, `[ SOCIALS ]`, `[ RIGHT NOW ]`.

---

## 2. Monsieur Flemme Brand Harmonization Rules

When adapting any external luxury/editorial design to **Monsieur Flemme**:
- **Tone**: Relaxed yet uncompromisingly sharp, humorous yet ultra-premium ("La flemme assumée, le cinéma célébré").
- **Core Activities**:
  - **Flemme Club**: Ciné-débrief, projections cultes, goûter gourmand, pop-corn, karaoké libérateur.
  - **Événements Spéciaux**: Soirées thématiques (ex: Soirée Spéciale Halloween avec ambiance frissons & chill).
  - **Merch / Shop**: Gardé pour une étape ultérieure, tout en réservant l'espace architectural dans la navigation.
- **Color Union**:
  - Deep obsidian (`#0A0A0C` / `#0E0E10`) with Monsieur Flemme signature accents (Bleu Royal `#2B78C4`, Terracotta / Brown `#5C241C`, Neon Lime `#52FF9D` ou Pumpkin Orange `#FF6B00` pour Halloween).
- **Typography Blend**:
  - Display: `Syne` / `Lilita One` / `Tektur` / `Space Grotesk`.
  - Body: `Plus Jakarta Sans` / `Inter`.
  - Technical: `Space Grotesk` / `Fragment Mono`.

---

## 3. Implementation Checklist
- [ ] 100% responsive across mobile, tablet, and widescreen.
- [ ] Framer-grade smooth hover effects (`transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1)`).
- [ ] Accessible color contrasts meeting WCAG standards.
- [ ] Zero placeholder image broken links (use genuine assets or styled typographic fallbacks).
- [ ] Interactive state feedback on buttons, inputs, and tabs.
