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

- **Home** — hero, micro-stats bar, the Wholesale Advantage, brand architecture + product grid, bulk-estimator teaser, compliance/ESG, CTA
- **About** — executive summary, company overview, vision & mission, the Five Strategic Anchors, TSWANA pillars
- **Products** — catalogue grouped by energy horizon + a detail page per product with a **technical specification matrix**
- **Technical Data Sheets** — a printable/PDF-ready TDS per product (`/products/[slug]/tds`)
- **Quality & Compliance** — regulatory framework, credentials, batch-assurance
- **Just Energy Transition** — clean-energy roadmap and ESG pillars
- **Bulk Order Estimator** — interactive fuel/volume/province/delivery selector that pre-fills the quote form
- **Contact** — full contact desk + an interactive "Request a Quote" form

### Typography

Headings use **Proxima Nova** (with self-hosted **Montserrat** as the offline
stand-in) and body copy uses **Lato**, per the brand spec — all self-hosted via
`@fontsource`, so the site needs no external font CDN. See
[`brand/brand-guidelines.md`](brand/brand-guidelines.md).

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
