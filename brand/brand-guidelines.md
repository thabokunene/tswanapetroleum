# Tswana Petroleum Co. — Brand Guidelines

The source-of-truth brand system that the website (`/web`) is built from.

## Typography System

| Role | Typeface | Weights | Notes |
|---|---|---|---|
| Display, data & UI | **Proxima Nova** | 700 Bold · 600 SemiBold · 400 Regular | Licensed font used in production |
| Body & technical data | **Lato** | 300 Light · 400 Regular · 400 Italic · 700 Bold | Self-hosted via `@fontsource/lato` |

> **Offline note:** Proxima Nova is a licensed font not redistributable via npm.
> The site self-hosts **Montserrat** (`@fontsource/montserrat`) as a close
> geometric stand-in, placed *second* in the CSS font stack
> (`--font-display: "Proxima Nova", "Montserrat", …`) so the licensed Proxima
> Nova automatically takes over wherever it is installed/served. Swap in the
> real webfont files to go fully brand-accurate.

### Hierarchy (see `web/src/app/globals.css`)

Display type is **uppercase, tightly tracked and heavy**; body type is light and
generous. Every figure on the site uses tabular numerals.

| Token | Size | Weight | Case | Use |
|---|---|---|---|---|
| `.display-2xl` | `clamp(2.75rem, 8.5vw, 6.5rem)` | 700 | UPPER | Homepage hero statement |
| `.display-xl` | `clamp(2.25rem, 5.2vw, 3.75rem)` | 700 | UPPER | Section headlines |
| `.display-lg` | `clamp(1.875rem, 3.8vw, 3rem)` | 700 | UPPER | Sub-section headlines |
| `.display-md` | `clamp(1.25rem, 2vw, 1.6rem)` | 600 | UPPER | Panel headings |
| `.numeral-xl` / `.numeral-lg` | `clamp(…, 5vw, 4.5rem)` / `clamp(2rem, 3.2vw, 2.75rem)` | 700 | — | Statistics and figures (tabular) |
| `.lead` | `1.125rem+` | 300 | Sentence | Introductory paragraphs, Slate Charcoal |
| `.field-label` / `.micro-label` | `0.625–0.6875rem` | 700 | UPPER | Labels, eyebrows, 0.16–0.18em tracking |
| `p / body` | `1.0625rem`, line-height 1.65 | 400 | Sentence | Body copy, Deep Navy |
| Buttons | `0.8125rem` | 700 | UPPER | 0.08em tracking, 2px corners |

Full stops and emphasis marks in headlines take **Tswana Teal** (`.text-teal-accent`).

## Color Palette

| Role | Name | HEX | Usage |
|---|---|---|---|
| Primary | Tswana Teal | `#00A3A1` | Logos, headers, CTAs, primary accents, active rules |
| Secondary | Deep Navy | `#002855` | Body text, footers, dark backgrounds |
| Accent 1 | Energy Mint | `#00C4B3` | Interactive / hover / gradients |
| Accent 2 | Flame Amber | `#F5A623` | Alerts, fuel-type icons, energy motifs, the active corridor |
| Neutral Light | Cloud / Light Surface | `#F4F7F9` | Backgrounds, card surfaces |
| Neutral Dark | Slate Charcoal | `#2D3436` | Secondary body text, borders |

**Gradient Signature:** `#002855 → #00A3A1 → #00C4B3`.

## Design System

The website follows one **editorial, data-first** system. It is deliberately not
a card-and-shadow interface:

- **Rules over boxes.** Hairlines (`rgba(0,40,85,0.12)` on light, `rgba(255,255,255,0.12)`
  on dark) separate content; corners are square (2px); there are no drop shadows.
- **A 12-column grid with real margins.** Content sits between columns 2 and 11
  on desktop (`.grid-12` + `.col-2-6`, `.col-2-10`, `.col-8-12`, …) and collapses
  to a single column on small screens.
- **Micro-labels** anchor every section: 11px uppercase, 0.16em tracking, ruled
  to the edge of the container.
- **Data is the decoration.** Capability tables, corridor dossiers and
  specification matrices carry the story; figures use tabular numerals.
- **Two surfaces only.** White/Cloud for light sections, Deep Navy / Navy Ink
  (`#001C3D`, `#00162F`) for dark sections — used to mark the operations-heavy
  parts of the page (credentials, network, capability file).

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
- `web/public/images/hero-fleet.png` — homepage hero, tanker line-haul at blue hour
- `web/public/images/abnormal-load.png` — abnormal-load / project-cargo photography
- `web/public/images/sustainability.png` — ESG / green-hydrogen visual

The full content package lives in [`brand-package.md`](./brand-package.md).
