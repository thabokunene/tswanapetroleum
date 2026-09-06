import type { Metadata } from "next";
import "./globals.css";

// Body & technical data: Lato (per brand spec)
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/400-italic.css";
import "@fontsource/lato/700.css";

// Display & headers: Proxima Nova in production; Montserrat is the self-hosted
// offline stand-in and sits second in the CSS font stack so the licensed
// Proxima Nova takes over wherever it is available.
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tswanapetroleum.co.za"),
  title: {
    default: "Tswana Petroleum Co. | Powering South Africa. Fuelling the Future.",
    template: "%s | Tswana Petroleum Co.",
  },
  description:
    "Tswana Petroleum Co. is a licensed South African bulk fuel wholesaler — diesel 50/500ppm, petrol, LPG, hydrogen, heavy furnace oil and light blending fuel — delivered on time, on spec, and on budget across Southern Africa.",
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
      <body>{children}</body>
    </html>
  );
}
