import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import {
  products,
  advantages,
  heroStats,
  brandArchitecture,
  compliancePoints,
} from "@/lib/site";

export default function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <Image
          src="/images/hero-tanker.png"
          alt="Tswana Petroleum tanker on a South African highway at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy/85 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent" />
        <div className="container-x relative py-32">
          <div className="max-w-2xl">
            <p className="eyebrow animate-fade-up bg-white/10 text-white">
              Wholesale Energy · World-Class Standards
            </p>
            <h1 className="mt-6 animate-fade-up heading-xl text-white">
              The Energy Behind Africa&apos;s{" "}
              <span className="text-gradient">Industrial Engine.</span>
            </h1>
            <p className="mt-6 max-w-xl animate-fade-up font-body text-lg font-light leading-relaxed text-cloud">
              Tswana Petroleum Co. delivers bulk diesel, petrol, industrial fuel
              oils, LPG, and hydrogen across South Africa. Fully licensed,
              SANS-certified, and backed by resilient multi-terminal wholesale
              logistics.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary">
                Explore Product Range
              </Link>
              <Link href="/contact" className="btn-outline">
                Become a Supply Partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MICRO-STATS BAR */}
      <section className="relative z-10 bg-navy">
        <div className="container-x grid grid-cols-2 divide-white/10 py-8 md:grid-cols-4 md:divide-x">
          {heroStats.map((s) => (
            <div key={s.label} className="px-4 py-3 text-center">
              <div className="font-heading text-2xl font-semibold text-teal-light sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 font-body text-sm text-white/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <div className="gradient-rule" />
      </section>

      {/* WHOLESALE ADVANTAGE */}
      <section id="advantage" className="section">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">The Wholesale Advantage</p>
            <h2 className="mt-4 heading-lg">
              Engineered for supply security. Built for commercial scale.
            </h2>
            <p className="mt-4 font-body text-lg text-carbon/70">
              When production schedules, freight operations, and heavy machinery
              cannot afford downtime, industry leaders rely on Tswana Petroleum
              Co.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 90}>
                <div className="card card-hover h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-2xl">
                    {a.icon}
                  </span>
                  <h3 className="mt-5 card-title text-xl">{a.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-carbon/70">
                    {a.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND ARCHITECTURE / PRODUCT GROUPS */}
      <section id="products" className="section bg-white">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Products & Fuels</p>
            <h2 className="mt-4 heading-lg">
              One partner across three energy horizons
            </h2>
            <p className="mt-4 font-body text-lg text-carbon/70">
              From conventional hydrocarbons to industrial heavy fuels and
              next-generation clean energy — a full portfolio supplied at
              wholesale scale.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {brandArchitecture.map((group, i) => (
              <Reveal key={group.group} delay={i * 100}>
                <div className="h-full rounded-2xl border border-navy/10 bg-cloud p-7">
                  <span className="text-3xl">{group.icon}</span>
                  <h3 className="mt-4 font-heading text-lg font-semibold uppercase tracking-wide text-navy">
                    {group.group}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-center gap-2 font-body text-sm text-carbon/80"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 90}>
                <Link
                  href={`/products/${p.slug}`}
                  className="card card-hover group flex h-full flex-col"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-2xl">
                      {p.icon}
                    </span>
                    <span className="rounded-full bg-cloud px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-teal">
                      {p.spec}
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-navy">
                    {p.name}
                  </h3>
                  <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-carbon/70">
                    {p.short}
                  </p>
                  <span className="mt-5 font-heading text-sm font-semibold text-teal transition-transform group-hover:translate-x-1">
                    View specifications →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BULK ESTIMATOR TEASER */}
      <section className="section bg-brand-gradient text-white">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow bg-white/15 text-white">Bulk Order Estimator</p>
            <h2 className="mt-4 heading-lg text-white">
              Calculate your wholesale supply requirements
            </h2>
            <p className="mt-4 font-body text-lg text-white/85">
              Select your fuel type, volume, and delivery province to request
              immediate wholesale pricing tied to CEF and Basic Fuel Price (BFP)
              mechanics.
            </p>
            <Link href="/estimator" className="btn-amber mt-8">
              Open the Estimator
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "Product", v: "6 fuel categories" },
                { k: "Volume", v: "10k – 1M+ L / kg" },
                { k: "Coverage", v: "All 9 provinces" },
                { k: "Delivery", v: "DAP or FOB" },
              ].map((c) => (
                <div
                  key={c.k}
                  className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur"
                >
                  <div className="font-body text-xs uppercase tracking-wide text-white/60">
                    {c.k}
                  </div>
                  <div className="mt-1 font-heading text-lg font-semibold text-white">
                    {c.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMPLIANCE & ESG */}
      <section className="section bg-cloud">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
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
            <p className="eyebrow">Compliance, Safety & ESG</p>
            <h2 className="mt-4 heading-lg">
              Zero compromise: safety, environment &amp; governance
            </h2>
            <p className="mt-5 font-body text-lg leading-relaxed text-carbon/80">
              Petroleum logistics demands absolute operational discipline. We
              operate under a strict Integrated Health, Safety, Environment, and
              Quality (HSEQ) management framework aligned with international best
              practice.
            </p>
            <ul className="mt-6 space-y-4">
              {compliancePoints.map((c) => (
                <li key={c.title} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    ✓
                  </span>
                  <span className="font-body text-carbon/80">
                    <strong className="text-navy">{c.title}:</strong> {c.desc}
                  </span>
                </li>
              ))}
            </ul>
            <Link href="/compliance" className="btn-ghost mt-8">
              Explore quality &amp; compliance →
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
