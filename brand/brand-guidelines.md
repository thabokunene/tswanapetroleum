# Tswana Petroleum Co. — Brand Guidelines

The source-of-truth brand system that the website (`/web`) is built from.

## Typography System

| Role | Typeface | Weights | Notes |
|---|---|---|---|
| Display & headers | **Proxima Nova** | 700 Bold · 600 SemiBold · 400 Regular | Licensed font used in production |
| Body & technical data | **Lato** | 300 Light · 400 Regular · 400 Italic · 700 Bold | Self-hosted via `@fontsource/lato` |

> **Offline note:** Proxima Nova is a licensed font not redistributable via npm.
> The site self-hosts **Montserrat** (`@fontsource/montserrat`) as a close
> geometric stand-in, placed *second* in the CSS font stack
> (`--font-heading: "Proxima Nova", "Montserrat", …`) so the licensed Proxima
> Nova automatically takes over wherever it is installed/served. Swap in the
> real webfont files to go fully brand-accurate.

### Hierarchy (see `web/src/app/globals.css`)

- `h1 / .heading-xl` — 3.25rem, weight 700, tracking −0.02em, Deep Navy
- `h2 / .heading-lg` — 2.25rem, weight 600, tracking −0.01em, Deep Navy
- `h3 / .card-title` — 1.5rem, weight 600, Tswana Teal
- `.lead` — 1.25rem, Lato Light 300, Deep Navy
- `p / body` — 1.05rem, Lato Regular, line-height 1.65, Slate Charcoal
- Buttons — Proxima Nova SemiBold, uppercase, letter-spacing 0.04em

## Color Palette

| Role | Name | HEX | Usage |
|---|---|---|---|
| Primary | Tswana Teal | `#00A3A1` | Logos, headers, CTAs, primary accents |
| Secondary | Deep Navy | `#002855` | Body text, footers, dark backgrounds |
| Accent 1 | Energy Mint | `#00C4B3` | Interactive / hover / gradients |
| Accent 2 | Flame Amber | `#F5A623` | Alerts, fuel-type icons, energy motifs |
| Neutral Light | Cloud / Light Surface | `#F4F7F9` | Backgrounds, card surfaces |
| Neutral Dark | Slate Charcoal | `#2D3436` | Secondary body text, borders |

**Gradient Signature:** `#002855 → #00A3A1 → #00C4B3`.

## Identity

- **Legal name:** Tswana Petroleum Company (Pty) Ltd
- **Trading name:** Tswana Petroleum Co.
- **Tagline:** *Powering South Africa. Fuelling the Future.*
- **Regulatory:** DMRE Wholesale License Holder · NERSA Licensed · SANS Compliant · B-BBEE Level 1
- **Voice:** Authoritative yet approachable · technically precise · proudly South African with pan-African ambition · sustainability-conscious.

## Brand Architecture

- **Conventional Fuels** — Diesel 50/500ppm, Petrol 93/95, Illuminating Paraffin
- **Industrial Heavy Fuels** — Heavy Furnace Oil, Light Blending Fuel, Solvents
- **Next-Gen & Clean Energy** — Hydrogen (Green/Blue), LPG Bulk, Autogas, Biofuels

## The TSWANA Pillars

Trust · Safety · Wholesale Excellence · Accountability · Next-Gen Energy · African Pride

## Assets

- `web/public/images/logo-mark.png` — primary logo mark
- `web/public/images/hero-tanker.png` — hero photography (teal-graded)
- `web/public/images/sustainability.png` — ESG / green-hydrogen visual

The full content package lives in [`brand-package.md`](./brand-package.md).
