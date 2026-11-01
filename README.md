# PageFive — business card websites for small businesses

**Пет дизайна. Един сайт.**

Single-page marketing site for a productized website service:

- **New site from scratch:** 200–250 €
- **Modernization of an existing site:** 150–200 €

The offer: the client fills in a short questionnaire, sends text/photos, receives
**5 design concepts**, picks one, and the site is published for free on GitHub Pages
under the client's own account. Delivery in **3–5 working days**.

---

## Live site

https://pagefive.net/ — deployed on Cloudflare Pages from this repository.

> The repo also works with GitHub Pages if you ever need a fallback:
> **Settings → Pages → Deploy from a branch → `main` / `(root)`**.

---

## Structure

```
.
├── index.html   # the entire site (HTML + CSS + a little vanilla JS)
└── README.md
```

No build step, no framework, no dependencies — deploy-ready as-is.

Production client sites are planned as **HTML generated with Hugo**, hosted free on
GitHub Pages (one account per client).

---

## Sections on the page

1. Hero — offer, CTA, browser/business-card mockup, key stats
2. Services — two packages with prices and what is included
3. Process — 5 steps from questionnaire to publishing
4. Questionnaire — sample of the strict intake questions
5. Designs — 5 mini theme previews (classic, warm, minimal, corporate, bold)
6. FAQ — timeline, ownership, fees, editing, domain
7. Contact — email / phone / location + JSON-LD `ProfessionalService`

---

## Before going live

Replace the placeholders:

- `hello@pagefive.net` → real email (appears in CTA, footer JSON-LD)
- `vashiyat-biznes.bg` → example domain shown in the mockup (cosmetic)

Prices, delivery time and package contents are set in the copy — adjust as needed.

---

## Tech notes

- Bulgarian only (`lang="bg"`)
- Fonts: Raleway (headings) + Open Sans (body) via Google Fonts
- Palette inspired by goldenpages.bg, bgservice.net and aksis.bg:
  navy `#0b2438`, orange `#ff6a00`, blue `#1872c5`, yellow `#fdc600`
- Light theme, responsive down to small phones
- `prefers-reduced-motion` respected
- FAQ uses native `<details>` — no JS needed
