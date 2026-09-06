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
        title="Wholesale energy solutions built for African industry."
        subtitle="An independent, wholly South African-owned bulk fuel wholesaler, logistics operator, and clean energy distributor."
      />

      {/* Executive summary */}
      <section className="section bg-white">
        <div className="container-narrow space-y-6 text-lg leading-relaxed text-smoke">
          <Reveal>
            <p>
              <strong className="font-semibold text-carbon">
                {company.tradingName}
              </strong>{" "}
              is an independent, wholly South African-owned bulk fuel wholesaler,
              logistics operator, and clean energy distributor. Operating under a
              Department of Mineral Resources and Energy (DMRE) wholesale license,
              we deliver liquid fuels, heavy industrial distillates, and
              alternative gases across the mining, agriculture, manufacturing,
              maritime, logistics, and retail reseller sectors of Southern Africa.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p>
              In a market defined by price volatility, supply bottlenecks, and
              evolving decarbonisation targets, we act as a strategic energy
              partner, maintaining relationships with primary import terminals,
              major local refiners, and pipeline operators to guarantee security
              of supply, transparent pricing benchmarks, and SANS-certified
              product integrity.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p>
              Our name honours the rich heritage of the Tswana people. We operate
              at the intersection of{" "}
              <strong className="font-semibold text-carbon">
                tradition and innovation
              </strong>
              , maintaining robust conventional supply chains while building the
              commercial corridors for clean hydrogen and lower-carbon fuels.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Company facts */}
      <section className="border-y border-black/[0.06] bg-mist">
        <div className="container-x grid gap-8 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label}>
              <div className="text-xs uppercase tracking-wide text-smoke">
                {f.label}
              </div>
              <div className="mt-2 text-base font-semibold tracking-tight text-carbon">
                {f.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-white">
        <div className="container-x grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full bg-cloud">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-teal">
                Our Vision
              </h3>
              <p className="mt-4 text-xl leading-relaxed tracking-tight text-carbon">
                To be Southern Africa&apos;s premier indigenous energy wholesaler, pioneering the secure distribution of conventional hydrocarbons
                while establishing the commercial supply corridors for clean
                hydrogen and lower-carbon fuels.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card h-full bg-carbon">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-teal-light">
                Our Mission
              </h3>
              <p className="mt-4 text-xl leading-relaxed tracking-tight text-white">
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
      <section className="section bg-mist">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Strategic Mandate</p>
            <h2 className="mt-4 display-lg">The five strategic anchors.</h2>
          </Reveal>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {strategicAnchors.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 90}>
                <div className="card card-hover h-full bg-white">
                  <span className="text-3xl font-semibold tracking-tight text-teal/25">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight text-carbon">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-smoke">
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
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Core Values</p>
            <h2 className="mt-4 display-lg">The TSWANA pillars.</h2>
          </Reveal>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.value} delay={(i % 3) * 90}>
                <div className="card card-hover flex h-full gap-5 bg-cloud">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-xl font-semibold text-white">
                    {v.letter}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-carbon">
                      {v.value}
                    </h3>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-smoke">
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
