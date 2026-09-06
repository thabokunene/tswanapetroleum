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

- **Home** — hero, stats, about snapshot, product grid, TSWANA values, the Tswana Advantage, sustainability teaser, CTA
- **About** — full company story, mission, vision, core values
- **Products** — catalogue + a detail page per product (diesel, petrol, LPG, hydrogen, HFO, LBF)
- **Sustainability** — Just Energy Transition strategy and ESG pillars
- **Contact** — details + an interactive "Request a Quote" form

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
