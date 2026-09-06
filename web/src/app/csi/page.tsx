import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageShell, { PageHero } from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { csiStats, csiPillars, csiPrograms } from "@/lib/site";

export const metadata: Metadata = {
  title: "Corporate Social Investment",
  description:
    "Tswana Petroleum Co.'s Corporate Social Investment (CSI) focuses on Education, Environment, and Access to Water in the communities where we operate.",
};

export default function CSIPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Corporate Social Investment"
        title="Energy that lifts communities."
        subtitle="We reinvest in the people and places that power South Africa, focusing on education, the environment, and access to water where we operate."
      />

      {/* Intro + image */}
      <section className="section bg-white">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-4xl shadow-card">
              <Image
                src="/images/csi.png"
                alt="Tswana Petroleum mentor guiding students through a STEM workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Our Commitment</p>
            <h2 className="mt-4 display-lg">More than a licence to operate.</h2>
            <p className="mt-5 text-lg leading-relaxed text-smoke">
              As a 100% South African-owned energy wholesaler, we believe growth
              must be shared. Our Corporate Social Investment strategy channels
              real resources into three focus areas: education, the environment,
              and access to water, with a deliberate focus on the host
              communities where we operate.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-smoke">
              Every programme is designed to be measurable, locally led, and
              aligned with our Just Energy Transition, creating the skills and
              resilience that a lower-carbon economy will depend on.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Impact stats */}
      <section className="border-y border-black/[0.06] bg-mist">
        <div className="container-x grid gap-8 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {csiStats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="display-lg text-teal">{s.value}</div>
              <div className="mt-2 text-sm leading-snug text-smoke">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="section bg-white">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Our Focus Areas</p>
            <h2 className="mt-4 display-lg">Three areas, real impact.</h2>
          </Reveal>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {csiPillars.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 100}>
                <div className="card card-hover h-full bg-cloud">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-teal shadow-soft">
                    <Icon name={p.icon} size={26} />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-carbon">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-smoke">
                    {p.desc}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        <span className="text-[0.95rem] leading-relaxed text-smoke">
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship programmes */}
      <section className="section bg-mist">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Flagship Programmes</p>
            <h2 className="mt-4 display-lg">Investment in action.</h2>
          </Reveal>
          <div className="mt-16 grid gap-5 sm:grid-cols-2">
            {csiPrograms.map((prog, i) => (
              <Reveal key={prog.title} delay={(i % 2) * 90}>
                <div className="card card-hover h-full bg-white">
                  <span className="inline-flex rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal">
                    {prog.tag}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-carbon">
                    {prog.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-smoke">
                    {prog.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Governance note + partnership CTA */}
      <section className="section bg-carbon text-white">
        <div className="container-narrow text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-teal-light">
              Transparent &amp; Accountable
            </p>
            <h2 className="mt-4 display-lg text-white">
              Impact you can measure.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-white/70">
              Our CSI spend is reported annually, independently reviewed, and
              contributes to our B-BBEE Socio-Economic Development scorecard.
              Partner with us to co-invest in your community.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Partner on a programme
              </Link>
              <Link
                href="/sustainability"
                className="link-arrow text-white hover:text-teal-light"
              >
                Our Just Energy Transition
                <Icon name="chevron_right" size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
