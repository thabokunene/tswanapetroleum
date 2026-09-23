# Tswana Petroleum Co.

Brand identity and marketing website for **Tswana Petroleum Co.** — a proudly
South African wholesale distributor of petroleum and next-generation energy
products.

> *Powering South Africa. Fuelling the Future.*

## What's in this repo

| Path | Description |
|---|---|
| `web/` | The marketing website — Next.js 14 (App Router) + TypeScript + Tailwind CSS |
| `brand/` | Brand guidelines and the full content package |
| `assets/` | Original master exports of the generated brand imagery/logo |

## The website

A responsive, animated multi-page site built entirely from the brand package:

- **Home** — editorial hero, credentials band, **capability matrix**, interactive
  **national supply-network map**, trading & importing desk, fleet & regulatory
  framework, sectors, a capability-in-practice file, energy horizons and CTA
- **About** — executive summary, company overview, vision & mission, the Five Strategic Anchors, TSWANA pillars
- **Products** — catalogue grouped by energy horizon + a detail page per product with a **technical specification matrix**
- **Technical Data Sheets** — a printable/PDF-ready TDS per product (`/products/[slug]/tds`)
- **Quality & Compliance** — regulatory framework, credentials, batch-assurance
- **Just Energy Transition** — clean-energy roadmap and ESG pillars
- **Bulk Order Estimator** — interactive fuel/volume/province/delivery selector that pre-fills the quote form
- **Contact** — full contact desk + an interactive "Request a Quote" form

### Design system

The site runs on one editorial system, defined in `web/src/app/globals.css` and
driven by the tokens in `web/tailwind.config.ts`:

- **Ruled rather than carded** — hairline dividers, square 2px corners and no
  drop shadows; hierarchy comes from rules, scale and space.
- **A real 12-column grid** (`.grid-12` with `.col-2-6`, `.col-8-12`, …) with
  generous margins, collapsing to a single column on small screens.
- **Micro-labels** — 11px uppercase, 0.16em tracking, with a rule that runs to
  the edge of the container.
- **Tabular numerals** — every figure, distance and lead time uses
  `font-variant-numeric: tabular-nums`, so data columns align.
- **Data tables** (`.data-table`) that stack into labelled blocks on phones.
- **Palette** — Deep Navy `#002855` for text and dark surfaces, Tswana Teal
  `#00A3A1` for accents and rules, Energy Mint `#00C4B3` for interactivity,
  Flame Amber `#F5A623` for the active corridor and fuel motifs, Cloud
  `#F4F7F9` for section fields.

### Typography

Headings and data use **Proxima Nova** (with self-hosted **Montserrat** as the
offline stand-in) and body copy uses **Lato**, per the brand spec — all
self-hosted via `@fontsource`, so the site needs no external font CDN. See
[`brand/brand-guidelines.md`](brand/brand-guidelines.md).

### The supply-network map

The homepage map is real cartography, not an illustration. It is generated from
Natural Earth 1:50m boundaries (public domain) and committed as
`web/src/lib/geography.ts`:

```bash
cd web
node scripts/generate-map-geometry.mjs   # regenerates src/lib/geography.ts
```

The script simplifies the country outlines (Douglas–Peucker), projects them
equirectangularly at latitude −29°, and emits the supply-hub coordinates and
corridor polylines. `world-atlas` and `topojson-client` are dev dependencies
only. Corridor dossiers (distances, transit times, products) live in
`web/src/lib/site.ts`, where each corridor lists the node and route ids it
highlights.

### Run it locally

```bash
cd web
npm install
npm run dev      # http://localhost:3000
```

### Production build

```bash
cd web
npm run build && npm start
```

All routes are statically prerendered (SSG), so the site can also be exported
and hosted on any static/CDN host.

## Brand system

Colours, typography and tokens are defined in `web/tailwind.config.ts` and
`web/src/app/globals.css`, driven by the palette documented in
[`brand/brand-guidelines.md`](brand/brand-guidelines.md). All site copy is
centralised in `web/src/lib/site.ts`.

> All product specifications should be verified against current SANS standards
> and DFFE regulations before publication.
