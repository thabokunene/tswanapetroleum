import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import CapabilityMatrix from "@/components/CapabilityMatrix";
import CredentialBand from "@/components/CredentialBand";
import NetworkMap from "@/components/NetworkMap";
import Stat from "@/components/Stat";
import Icon from "@/components/Icon";
import {
  advantages,
  brandArchitecture,
  complianceFramework,
  contact,
  deploymentFile,
  fleetSpec,
  heroStats,
  importCapabilities,
  networkTicker,
  services,
  sectors,
  sourcingOrigins,
  tradingIntro,
} from "@/lib/site";

const ArrowMark = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const NEArrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

export default function Home() {
  return (
    <PageShell>
      {/* ================================================== 01 · HERO */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-navy-ink text-white">
        <Image
          src="/images/hero-fleet.png"
          alt="Bulk fuel tankers line-hauling on a South African highway at blue hour, refinery silhouettes on the horizon"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy-ink via-navy-ink/70 to-navy-ink/40"
          aria-hidden="true"
        />

        <div className="container-x relative w-full pt-28 pb-10">
          <div className="max-w-4xl">
            <p className="font-display text-[0.6875rem] font-bold uppercase tracking-label text-teal-light">
              01 — Wholesale energy &amp; international trading
            </p>
            <h1 className="display-2xl mt-6 text-white">
              Powering South Africa.
              <br />
              Fuelling the future
              <span className="text-teal-accent">.</span>
            </h1>
            <p className="mt-7 max-w-2xl font-body text-lg font-light leading-relaxed text-white/70 sm:text-xl">
              Licensed wholesale distributor and importer of bulk diesel, petrol,
              LPG, industrial fuel oils and hydrogen. Sourced from six
              international basins and delivered on time, on spec and on budget
              across all nine provinces.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Request a quote
              </Link>
              <Link href="/estimator" className="btn-outline-invert">
                Bulk order estimator
              </Link>
              <Link
                href="/trading"
                className="link-arrow link-arrow-invert ml-1"
              >
                Trading &amp; importing
                <ArrowMark />
              </Link>
            </div>
          </div>

          {/* Hero ledger */}
          <dl className="mt-16 grid gap-y-8 border-t border-white/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {heroStats.map((stat) => (
              <Stat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </dl>
        </div>
      </section>

      {/* ================================================== 02 · CREDENTIALS */}
      <section className="bg-navy-deep py-14 text-white">
        <div className="container-x">
          <CredentialBand />
        </div>
      </section>

      {/* ================================================== 03 · CAPABILITIES */}
      <section id="capabilities" className="section bg-white">
        <div className="container-x">
          <div className="grid-12 items-end">
            <div className="col-2-6">
              <div className="micro-label">02 — Capability matrix</div>
              <h2 className="display-xl">
                What we move<span className="text-teal-accent">.</span>
              </h2>
            </div>
            <div className="col-8-12">
              <p className="font-body text-base font-light leading-relaxed text-smoke lg:pl-8">
                Six wholesale capability lines, each with its own specification
                basis, payload envelope and lead time. Every batch is certified
                before it leaves the terminal.
              </p>
            </div>
          </div>

          <Reveal className="mt-14">
            <CapabilityMatrix />
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <p className="font-body text-[0.8rem] leading-relaxed text-smoke lg:col-span-2">
              Payloads are per vehicle and assume standard rig limits; abnormal
              and project volumes are quoted per movement. Lead times run from
              confirmed order and cleared credit, and assume available terminal
              allocation.
            </p>
            <Link href="/services" className="link-arrow lg:justify-self-end">
              Integrated services
              <ArrowMark />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================== 04 · NETWORK */}
      <section id="network" className="section bg-navy-deep text-white">
        <div className="container-x">
          <div className="grid-12 items-end">
            <div className="col-2-6">
              <div className="micro-label micro-label-invert">
                03 — National supply network
              </div>
              <h2 className="display-xl text-white">
                Fifteen supply points.
                <br />
                One dispatch desk
                <span className="text-teal-accent">.</span>
              </h2>
            </div>
            <div className="col-8-12">
              <p className="font-body text-base font-light leading-relaxed text-white/60 lg:pl-8">
                Coastal import terminals, inland hubs and industrial nodes linked
                by eight primary road corridors. Select a corridor to read its
                dossier.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <NetworkMap />
          </div>
        </div>

        {/* Running roll-call of terminals and hubs */}
        <div className="mt-16 overflow-hidden border-y border-white/10 py-4">
          <div className="flex w-max animate-marquee font-display text-[0.6875rem] font-semibold uppercase tracking-label text-white/50">
            {[...networkTicker, ...networkTicker].map((node, i) => (
              <span key={`${node}-${i}`} className="mx-4">
                {node} <span className="text-teal/70">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== 05 · TRADING */}
      <section id="trading" className="section bg-white">
        <div className="container-x">
          <div className="grid-12 items-center">
            <div className="col-2-6">
              <div className="micro-label">04 — Trading &amp; importing</div>
              <h2 className="display-lg">
                A global sourcing desk with an inland footprint
                <span className="text-teal-accent">.</span>
              </h2>
              <p className="mt-6 font-body text-base font-light leading-relaxed text-smoke">
                {tradingIntro}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link href="/trading" className="btn-outline">
                  Explore the trading desk
                </Link>
                <Link href="/contact" className="link-arrow">
                  Discuss a cargo
                  <ArrowMark />
                </Link>
              </div>
            </div>
            <div className="col-8-12">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/crude-tanker-port.png"
                  alt="Crude oil tanker berthed at a marine import terminal at dawn"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Import capability ledger */}
          <div className="mt-16 grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {importCapabilities.map((c) => (
              <div key={c.title} className="card card-hover">
                <div className="flex items-start gap-3">
                  <Icon name={c.icon} size={20} className="mt-1 shrink-0 text-teal" />
                  <div>
                    <h3 className="font-display text-base font-bold tracking-tight text-navy">
                      {c.title}
                    </h3>
                    <p className="mt-2 font-body text-[0.9rem] leading-relaxed text-smoke">
                      {c.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-navy/15 pt-10">
            <p className="field-label">Where we source</p>
            <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
              {sourcingOrigins.map((o) => (
                <li
                  key={o.region}
                  className="flex items-baseline justify-between gap-4 border-b border-navy/[0.08] pb-3"
                >
                  <span className="font-display text-[0.9rem] font-semibold tracking-tight text-navy">
                    {o.region}
                  </span>
                  <span className="text-right font-body text-[0.8rem] text-smoke">
                    {o.note}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================================================== 06 · FLEET & COMPLIANCE */}
      <section id="fleet" className="section bg-cloud">
        <div className="container-x">
          <div className="grid-12 items-end">
            <div className="col-2-6">
              <div className="micro-label">05 — Fleet &amp; compliance</div>
              <h2 className="display-xl">
                Built for hazardous loads
                <span className="text-teal-accent">.</span>
              </h2>
            </div>
            <div className="col-8-12">
              <p className="font-body text-base font-light leading-relaxed text-smoke lg:pl-8">
                Hazchem-certified vehicles, calibrated and seal-monitored
                compartments, and drivers trained for flammable-liquid duty.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/hero-tanker.png"
                  alt="Bulk fuel tanker on the road with a refinery in the background"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="field-label border-b border-navy/15 pb-3">
                Fleet configuration
              </p>
              <dl>
                {fleetSpec.map((row) => (
                  <div
                    key={row.label}
                    className="grid gap-2 border-b border-navy/[0.08] py-5 sm:grid-cols-[160px_1fr] sm:gap-8"
                  >
                    <dt className="field-label pt-1">{row.label}</dt>
                    <dd className="font-body text-[0.95rem] leading-relaxed text-navy">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href={`mailto:${contact.supplyEmail}?subject=Capability%20statement%20request`}
                className="link-arrow mt-8"
              >
                Request the capability statement
                <ArrowMark />
              </a>
            </div>
          </div>

          {/* Regulatory framework */}
          <div className="mt-20">
            <div className="micro-label">Regulatory framework</div>
            <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {complianceFramework.map((item) => (
                <div key={item.title} className="card">
                  <h3 className="font-display text-base font-bold tracking-tight text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-body text-[0.9rem] leading-relaxed text-smoke">
                    {item.desc}
                  </p>
                  <p className="mt-3 font-display text-[0.625rem] font-bold uppercase tracking-label text-teal">
                    {item.reference}
                  </p>
                </div>
              ))}
              <div className="card card-hover">
                <h3 className="font-display text-base font-bold tracking-tight text-navy">
                  B-BBEE Level 1
                </h3>
                <p className="mt-2 font-body text-[0.9rem] leading-relaxed text-smoke">
                  100% black-owned, delivering 135% procurement recognition to
                  industrial buyers and public-sector supply chains.
                </p>
                <Link href="/about" className="link-arrow mt-4">
                  About the company
                  <ArrowMark />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== 07 · SECTORS & SERVICES */}
      <section className="section bg-white">
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="micro-label">06 — Who we supply</div>
            <h2 className="display-lg">
              Industry runs on assured supply
              <span className="text-teal-accent">.</span>
            </h2>
            <ul className="mt-8">
              {sectors.map((sector) => (
                <li
                  key={sector}
                  className="flex items-center justify-between gap-6 border-b border-navy/[0.08] py-3.5 font-body text-[0.95rem] text-navy"
                >
                  {sector}
                  <span className="text-smoke">
                    <NEArrow />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="micro-label">07 — Integrated services</div>
            <h2 className="display-lg">
              Beyond the barrel
              <span className="text-teal-accent">.</span>
            </h2>
            <div className="mt-8 space-y-10">
              {services.map((service) => (
                <div key={service.slug} className="card card-hover">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="font-display text-lg font-bold tracking-tight text-navy">
                        {service.name}
                      </h3>
                      <p className="mt-2 max-w-lg font-body text-[0.95rem] leading-relaxed text-smoke">
                        {service.short}
                      </p>
                    </div>
                    <Icon
                      name={service.icon}
                      size={22}
                      className="mt-1 shrink-0 text-teal"
                    />
                  </div>
                  <Link href={`/services#${service.slug}`} className="link-arrow mt-4">
                    Service detail
                    <ArrowMark />
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-12 border-t border-navy/15 pt-8">
              <p className="field-label">Supply terms</p>
              <dl className="mt-4 grid gap-x-10 gap-y-6 sm:grid-cols-3">
                {[
                  { value: "CEF / BFP linked", label: "Formula or fixed-margin pricing" },
                  { value: "DAP & FOB", label: "Delivered, or depot collection" },
                  { value: "Volume tiers", label: "10,000 L to 10 million L" },
                ].map((term) => (
                  <Stat
                    key={term.value}
                    value={term.value}
                    label={term.label}
                    tone="dark"
                    valueClassName="font-display text-base font-bold"
                    labelClassName="mt-1 font-body text-[0.8rem] normal-case tracking-normal text-smoke"
                  />
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== 08 · CAPABILITY IN PRACTICE */}
      <section className="section bg-navy text-white">
        <div className="container-x">
          <div className="grid-12 items-end">
            <div className="col-2-6">
              <div className="micro-label micro-label-invert">
                {deploymentFile.eyebrow}
              </div>
              <h2 className="display-lg text-white">{deploymentFile.title}</h2>
              <p className="mt-5 max-w-xl font-body text-base font-light leading-relaxed text-white/60">
                {deploymentFile.subtitle}
              </p>
            </div>
            <div className="col-8-12">
              <div className="relative aspect-[16/9] overflow-hidden lg:ml-8">
                <Image
                  src="/images/abnormal-load.png"
                  alt="Abnormal-load lowbed trailer carrying a power transformer past cooling towers at dusk"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {deploymentFile.stages.map((stage, i) => (
              <Reveal key={stage.title} delay={i * 80}>
                <div className="border-t border-white/15 pt-6">
                  <p className="font-display text-[0.625rem] font-bold uppercase tracking-label text-teal-light">
                    {String(i + 1).padStart(2, "0")} · {stage.title}
                  </p>
                  <p className="mt-3 font-body text-[0.95rem] leading-relaxed text-white/70">
                    {stage.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <dl className="mt-16 grid gap-y-8 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {deploymentFile.stats.map((stat) => (
              <Stat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                accent={stat.accent}
              />
            ))}
          </dl>

          <p className="mt-10 max-w-2xl font-body text-[0.75rem] leading-relaxed text-white/50">
            {deploymentFile.disclaimer}
          </p>
        </div>
      </section>

      {/* ================================================== 09 · PRODUCT ARCHITECTURE */}
      <section className="section bg-cloud">
        <div className="container-x">
          <div className="grid-12 items-end">
            <div className="col-2-6">
              <div className="micro-label">08 — Energy horizons</div>
              <h2 className="display-xl">
                One partner, three horizons
                <span className="text-teal-accent">.</span>
              </h2>
            </div>
            <div className="col-8-12">
              <p className="font-body text-base font-light leading-relaxed text-smoke lg:pl-8">
                Conventional fuels, industrial heavy fuels and next-generation
                clean energy — supplied under one commercial agreement as your
                transition needs change.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {brandArchitecture.map((group) => (
              <div key={group.group} className="border-t border-navy/15 pt-6">
                <Icon name={group.icon} size={22} className="text-teal" />
                <h3 className="mt-4 font-display text-base font-bold tracking-tight text-navy">
                  {group.group}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="font-body text-[0.9rem] leading-relaxed text-smoke"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* The wholesale advantage, as a ruled ledger */}
          <div className="mt-16 border-t border-navy/15 pt-10">
            <div className="micro-label">The wholesale advantage</div>
            <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {advantages.slice(0, 6).map((advantage) => (
                <div key={advantage.title}>
                  <h3 className="font-display text-base font-bold tracking-tight text-navy">
                    {advantage.title}
                  </h3>
                  <p className="mt-2 font-body text-[0.9rem] leading-relaxed text-smoke">
                    {advantage.detail}
                  </p>
                </div>
              ))}
            </div>
            <Link href="/products" className="link-arrow mt-10">
              Full product catalogue
              <ArrowMark />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
