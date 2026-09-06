import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
  display: "swap",
  weight: "100 900",
});

const geistDisplay = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-display",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tswanapetroleum.co.za"),
  title: {
    default: "Tswana Petroleum Co. | Powering South Africa. Fuelling the Future.",
    template: "%s | Tswana Petroleum Co.",
  },
  description:
    "Tswana Petroleum Co. is a proudly South African wholesale distributor of petroleum products — diesel, petrol, LPG, hydrogen, heavy furnace oil and light blending fuel — delivered on time, on spec, and on budget.",
  keywords: [
    "bulk diesel supplier South Africa",
    "wholesale petrol",
    "LPG supplier",
    "hydrogen fuel",
    "heavy furnace oil",
    "CEF linked pricing",
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
    <html lang="en-ZA" className={`${geist.variable} ${geistDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
