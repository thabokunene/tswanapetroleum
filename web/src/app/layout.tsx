import type { Metadata } from "next";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";

// Apple-style UI: Inter is the closest self-hosted substitute for SF Pro.
// Loaded across the full weight range for large-and-light display headings.
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

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
