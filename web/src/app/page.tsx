import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import {
  products,
  advantages,
  heroStats,
  brandArchitecture,
  compliancePoints,
  services,
  importCapabilities,
  sourcingOrigins,
  tradingIntro,
} from "@/lib/site";

export default function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden text-center">
        <Image
          src="/images/hero-tanker.png"
          alt="Tswana Petroleum tanker on a South African highway at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy/55 to-navy-deep/85" />
        <div className="container-narrow relative py-32">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.14em] text-teal-light">
            Global Sourcing · World-Class Standards
          </p>
          <h1 className="mt-5 animate-fade-up display-2xl text-white">
            From the world&apos;s oilfields to Africa&apos;s industrial engine.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-xl font-normal leading-relaxed text-white/80 sm:text-2xl">
            An importer and international trader of crude oil and refined
            products, delivering bulk diesel, petrol, industrial fuel oils, LPG
            and hydrogen across Southern Africa. Fully licensed, SANS-certified,
            and supply-secure.
          </p>
          <div className="mt-9 flex animate-fade-up flex-wrap items-center justify-center gap-4">
            <Link href="/products" className="btn-primary">
              Explore the range
            </Link>
            <Link
              href="/contact"
              className="link-arrow text-white hover:text-teal-light"
            >
              Become a supply partner
              <Icon name="chevron_right" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-black/[0.06] bg-white">
        <div className="container-x grid grid-cols-2 gap-y-10 py-16 md:grid-cols-4">
          {heroStats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="display-lg text-teal">{s.value}</div>
              <div className="mt-2 text-sm text-smoke">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* GLOBAL TRADING & IMPORT */}
      <section id="trading" className="section bg-navy-deep text-white">
        <div className="container-x">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-light">
                Crude &amp; Product Importing
              </p>
              <h2 className="mt-4 display-lg text-white">
                A global desk with African reach.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/75">
                {tradingIntro}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/trading" className="btn-primary">
                  Explore our trading desk
                </Link>
                <Link
                  href="/contact"
                  className="link-arrow text-white hover:text-teal-light"
                >
                  Discuss a cargo
                  <Icon name="chevron_right" size={18} />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-4xl shadow-card">
                <Image
                  src="/images/crude-tanker-port.png"
                  alt="Crude oil supertanker berthed at a marine import terminal at dawn"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {importCapabilities.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 90}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 ease-apple hover:bg-white/[0.07]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/15 text-teal-light">
                    <Icon name={c.icon} size={26} />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-white/65">
                    {c.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="mt-14 rounded-4xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-teal-light">
                Where we source
              </p>
              <div className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
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
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHOLESALE ADVANTAGE */}
      <section id="advantage" className="section bg-mist">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">The Wholesale Advantage</p>
            <h2 className="mt-4 display-lg">
              Engineered for supply security.
              <br />
              <span className="text-smoke">Built for commercial scale.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 100}>
                <div className="card card-hover h-full bg-white">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                    <Icon name={a.icon} size={26} />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-carbon">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-smoke">
                    {a.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section id="products" className="section bg-white">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Products &amp; Fuels</p>
            <h2 className="mt-4 display-lg">
              One partner across three energy horizons.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl lead">
              From conventional hydrocarbons to industrial heavy fuels and
              next-generation clean energy.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {brandArchitecture.map((group, i) => (
              <Reveal key={group.group} delay={i * 100}>
                <div className="card h-full bg-cloud">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-teal shadow-soft">
                    <Icon name={group.icon} size={26} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-carbon">
                    {group.group}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-center gap-2.5 text-[0.95rem] text-smoke"
                      >
                        <span className="h-1 w-1 rounded-full bg-teal" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 90}>
                <Link
                  href={`/products/${p.slug}`}
                  className="card card-hover group flex h-full flex-col bg-cloud"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-teal shadow-soft">
                      <Icon name={p.icon} size={24} />
                    </span>
                    <span className="text-xs font-medium text-smoke">
                      {p.spec}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-carbon">
                    {p.name}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-smoke">
                    {p.short}
                  </p>
                  <span className="link-arrow mt-5">
                    View specifications
                    <Icon name="chevron_right" size={18} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section bg-mist">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Integrated Services</p>
            <h2 className="mt-4 display-lg">
              Beyond the barrel, end to end.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl lead">
              Storage, transportation and bonded-fuel handling that keep your
              supply chain compliant and moving.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 100}>
                <Link
                  href={`/services#${s.slug}`}
                  className="card card-hover group flex h-full flex-col bg-white"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                    <Icon name={s.icon} size={26} />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-carbon">
                    {s.name}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-smoke">
                    {s.short}
                  </p>
                  <span className="link-arrow mt-5">
                    Learn more
                    <Icon name="chevron_right" size={18} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ESTIMATOR */}
      <section className="section bg-carbon text-white">
        <div className="container-narrow text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-teal-light">
              Bulk Order Estimator
            </p>
            <h2 className="mt-4 display-lg text-white">
              Your wholesale requirement, priced in a tap.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-white/70">
              Select your fuel, volume and delivery province for pricing tied
              directly to CEF and Basic Fuel Price mechanics.
            </p>
            <Link href="/estimator" className="btn-primary mt-9">
              Open the estimator
            </Link>
          </Reveal>

          <Reveal delay={150}>
            <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-4">
              {[
                { k: "Product", v: "6 fuels" },
                { k: "Volume", v: "10k to 1M+" },
                { k: "Coverage", v: "9 provinces" },
                { k: "Delivery", v: "DAP · FOB" },
              ].map((c) => (
                <div key={c.k} className="bg-carbon p-6">
                  <div className="text-2xl font-semibold tracking-tight text-teal-light">
                    {c.v}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-white/50">
                    {c.k}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMPLIANCE / ESG */}
      <section className="section bg-mist">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-4xl shadow-card">
              <Image
                src="/images/sustainability.png"
                alt="Green hydrogen and renewable energy project in the Northern Cape"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Compliance, Safety &amp; ESG</p>
            <h2 className="mt-4 display-lg">Zero compromise.</h2>
            <p className="mt-5 text-lg leading-relaxed text-smoke">
              We operate under a strict Integrated Health, Safety, Environment
              and Quality framework aligned with international best practice.
            </p>
            <ul className="mt-8 space-y-5">
              {compliancePoints.map((c) => (
                <li key={c.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                    <Icon name="check" size={15} strokeWidth={2.25} />
                  </span>
                  <span className="text-[0.95rem] leading-relaxed text-carbon">
                    <strong className="font-semibold">{c.title}.</strong>{" "}
                    <span className="text-smoke">{c.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
            <Link href="/compliance" className="link-arrow mt-8">
              Quality &amp; compliance
              <Icon name="chevron_right" size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
