import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageShell, { PageHero } from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import {
  importCapabilities,
  sourcingOrigins,
  globalStats,
  tradingIntro,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Trading & Importing",
  description:
    "Tswana Petroleum Co. is an importer and international trader of crude oil and refined petroleum products, connecting the world's primary supply basins with the African market through cargo trading, chartering, terminal storage and inland distribution.",
};

const tradedProducts = [
  { name: "Crude Oil", note: "Light sweet to medium sour grades" },
  { name: "Gasoil / Diesel", note: "10ppm, 50ppm and 500ppm cargoes" },
  { name: "Gasoline", note: "Unleaded 93 / 95 blendstock & finished" },
  { name: "Jet A-1 / Kerosene", note: "Aviation and illuminating grades" },
  { name: "Fuel Oil", note: "180 / 380 cSt and low-sulphur grades" },
  { name: "Naphtha & Blendstock", note: "Petrochemical and blending feedstock" },
];

const tradeFlow = [
  {
    step: "01",
    title: "Origination",
    desc: "We identify and secure cargoes at competitive economics from producers, refiners and international suppliers across six primary basins.",
  },
  {
    step: "02",
    title: "Structuring & Finance",
    desc: "Letters of credit, pre-payment and off-take structures are arranged with our banking partners, with counterparty KYC and sanctions screening completed.",
  },
  {
    step: "03",
    title: "Freight & Inspection",
    desc: "Vessels are chartered and voyages managed end to end, with independent quantity and quality inspection at both load and discharge ports.",
  },
  {
    step: "04",
    title: "Discharge & Distribution",
    desc: "Product is discharged into coastal import terminals, cleared through customs, stored and distributed inland via pipeline and our road-tanker network.",
  },
];

export default function TradingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Trading & Importing"
        title="Importer and international trader of crude and refined products."
        subtitle="Connecting the world's primary supply basins with the African market."
      />

      {/* Intro + hero image */}
      <section className="section bg-white">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Our Global Desk</p>
            <h2 className="mt-4 display-lg">Volume, moved with precision.</h2>
            <p className="mt-6 text-lg leading-relaxed text-smoke">
              {tradingIntro}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-smoke">
              Every transaction is underwritten by disciplined risk management,
              transparent benchmark pricing, and the operational muscle to
              discharge, store and distribute product deep into the hinterland.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-4xl shadow-card">
              <Image
                src="/images/crude-tanker-port.png"
                alt="Crude oil supertanker berthed at a marine import terminal"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Global stats */}
      <section className="border-y border-black/[0.06] bg-mist">
        <div className="container-x grid grid-cols-2 gap-y-10 py-16 md:grid-cols-4">
          {globalStats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="display-lg text-teal">{s.value}</div>
              <div className="mx-auto mt-2 max-w-[12rem] text-sm text-smoke">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="section bg-white">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Trading Capabilities</p>
            <h2 className="mt-4 display-lg">Full-service, cargo to customer.</h2>
            <p className="mx-auto mt-5 max-w-2xl lead">
              An integrated capability set that spans sourcing, freight, finance
              and physical delivery.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {importCapabilities.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 90}>
                <div className="card card-hover h-full bg-cloud">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                    <Icon name={c.icon} size={26} />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-carbon">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-smoke">
                    {c.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing map */}
      <section className="section bg-navy-deep text-white">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-4xl shadow-card">
              <Image
                src="/images/global-trade.png"
                alt="Global energy and shipping trade routes centred on Africa and the Middle East"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-light">
              Where We Source
            </p>
            <h2 className="mt-4 display-lg text-white">
              Six basins. One reliable route to market.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Diversified origination means resilience. We hold relationships
              across the world&apos;s primary crude and product basins, so supply
              keeps flowing through cycles, disruptions and price swings.
            </p>
            <div className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {sourcingOrigins.map((o) => (
                <div key={o.region} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-light" />
                  <div>
                    <div className="font-semibold tracking-tight text-white">
                      {o.region}
                    </div>
                    <div className="text-sm text-white/55">{o.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Products traded */}
      <section className="section bg-white">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Products Traded</p>
            <h2 className="mt-4 display-lg">Crude and the full refined slate.</h2>
          </Reveal>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tradedProducts.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 80}>
                <div className="card h-full bg-cloud">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-teal shadow-soft">
                    <Icon name="oil_barrel" size={24} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-carbon">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-smoke">
                    {p.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trade flow */}
      <section className="section bg-mist">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">How a Cargo Moves</p>
            <h2 className="mt-4 display-lg">From origination to offloading.</h2>
          </Reveal>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tradeFlow.map((f, i) => (
              <Reveal key={f.step} delay={(i % 4) * 80}>
                <div className="card h-full bg-white">
                  <span className="text-3xl font-semibold tracking-tight text-teal/25">
                    {f.step}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight text-carbon">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-smoke">
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal image band */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <Image
          src="/images/import-terminal.png"
          alt="Coastal petroleum import and storage terminal with tanker at berth"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy/70 to-navy-deep/40" />
        <div className="container-x relative py-24">
          <Reveal className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-light">
              Import Terminal Infrastructure
            </p>
            <h2 className="mt-4 display-lg text-white">
              Landed, stored, and delivered.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              Coastal discharge, bonded storage and inland distribution turn
              imported cargoes into product at your gate, on spec and on
              schedule.
            </p>
            <Link href="/services#storage-facilities" className="btn-primary mt-8">
              Storage &amp; logistics
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
