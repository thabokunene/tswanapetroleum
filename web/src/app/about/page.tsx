import type { Metadata } from "next";
import PageShell, { PageHero } from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { values, strategicAnchors, company } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Tswana Petroleum Co. is an independent, wholly South African-owned bulk fuel wholesaler, logistics operator, and clean energy distributor operating under a DMRE wholesale license.",
};

const facts = [
  { label: "Legal Name", value: company.legalName },
  { label: "Trading Name", value: company.tradingName },
  { label: "Jurisdiction", value: company.jurisdiction },
  { label: "Ownership", value: "100% Black-owned · B-BBEE Level 1" },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Us"
        title="Uncompromising Wholesale Energy Solutions Built for African Industry"
        subtitle="An independent, wholly South African-owned bulk fuel wholesaler, logistics operator, and clean energy distributor."
      />

      {/* Executive summary */}
      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-[1.5fr_1fr]">
          <Reveal className="space-y-6 font-body text-lg leading-relaxed text-carbon/80">
            <p>
              <strong className="text-navy">{company.tradingName}</strong> is an
              independent, wholly South African-owned bulk fuel wholesaler,
              logistics operator, and clean energy distributor. Operating under a
              Department of Mineral Resources and Energy (DMRE) wholesale license,
              we deliver liquid fuels, heavy industrial distillates, and
              alternative gases to the mining, agriculture, manufacturing,
              maritime, logistics, and retail reseller sectors across Southern
              Africa.
            </p>
            <p>
              In a market defined by price volatility, supply bottlenecks, and
              evolving decarbonisation targets, Tswana Petroleum Co. acts as a
              strategic energy partner. We maintain relationships with primary
              import terminals, major local refiners, and pipeline operators to
              guarantee security of supply, transparent pricing benchmarks, and
              SANS-certified product integrity.
            </p>
            <p>
              Our name honours the rich heritage of the Tswana people, reflecting
              our deep roots in the African continent and our commitment to
              community-driven growth. We operate at the intersection of{" "}
              <strong className="text-navy">tradition and innovation</strong> —
              maintaining robust conventional supply chains while building the
              commercial corridors for clean hydrogen and lower-carbon fuels.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-navy/10 bg-cloud p-7">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy">
                Company Overview
              </h3>
              <dl className="mt-5 space-y-4">
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt className="font-body text-xs font-bold uppercase tracking-wide text-carbon/50">
                      {f.label}
                    </dt>
                    <dd className="mt-0.5 font-heading text-base font-semibold text-navy">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-white">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-teal/20 bg-teal/5 p-8">
              <h3 className="card-title">Our Vision</h3>
              <p className="mt-3 font-body text-lg leading-relaxed text-carbon/80">
                To be Southern Africa&apos;s premier indigenous energy wholesaler —
                pioneering the secure distribution of conventional hydrocarbons
                while establishing the commercial supply corridors for clean
                hydrogen and lower-carbon fuels.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-2xl bg-navy p-8 text-white">
              <h3 className="font-heading text-2xl font-semibold text-teal-light">
                Our Mission
              </h3>
              <p className="mt-3 font-body text-lg leading-relaxed text-white/85">
                To empower African commerce by engineering an ultra-reliable,
                compliant, and cost-efficient wholesale fuel supply chain that
                protects client operational continuity while accelerating
                sustainable energy adoption.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Strategic anchors */}
      <section className="section">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Strategic Mandate</p>
            <h2 className="mt-4 heading-lg">The Five Strategic Anchors</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {strategicAnchors.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 90}>
                <div className="card card-hover h-full">
                  <span className="font-heading text-3xl font-bold text-teal/30">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-navy">
                    {a.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-carbon/70">
                    {a.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TSWANA pillars */}
      <section className="section bg-white">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Core Values</p>
            <h2 className="mt-4 heading-lg">The TSWANA Pillars</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.value} delay={(i % 3) * 90}>
                <div className="card card-hover flex h-full gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-gradient font-heading text-2xl font-bold text-white">
                    {v.letter}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-navy">
                      {v.value}
                    </h3>
                    <p className="mt-1 font-body text-sm leading-relaxed text-carbon/70">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
