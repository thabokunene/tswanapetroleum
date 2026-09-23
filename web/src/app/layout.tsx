import type { Metadata } from "next";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";

// Brand typography, self-hosted so no external font CDN is required.
//   Display  — Proxima Nova (licensed, served when available) with Montserrat
//              as the close geometric stand-in, per brand/brand-guidelines.md.
//   Body     — Lato, as specified in the brand guidelines.
// Latin subsets only: three weights each keeps the critical path light.
import "@fontsource/montserrat/latin-400.css";
import "@fontsource/montserrat/latin-600.css";
import "@fontsource/montserrat/latin-700.css";
import "@fontsource/lato/latin-300.css";
import "@fontsource/lato/latin-400.css";
import "@fontsource/lato/latin-700.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tswanapetroleum.co.za"),
  title: {
    default: "Tswana Petroleum Co. | Powering South Africa. Fuelling the Future.",
    template: "%s | Tswana Petroleum Co.",
  },
  description:
    "Tswana Petroleum Co. is a licensed South African bulk fuel wholesaler of diesel 50/500ppm, petrol, LPG, hydrogen, heavy furnace oil and light blending fuel, delivered on time, on spec, and on budget across Southern Africa.",
  keywords: [
    "bulk diesel supplier South Africa",
    "wholesale petrol",
    "LPG supplier",
    "hydrogen fuel",
    "heavy furnace oil",
    "CEF linked pricing",
    "DMRE wholesale license",
    "SANS 342",
    "Tswana Petroleum",
  ],
  openGraph: {
    title: "Tswana Petroleum Co.",
    description:
      "Wholesale energy, world-class standards. One supplier. Every fuel. Delivered.",
    type: "website",
    locale: "en_ZA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <body>
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
