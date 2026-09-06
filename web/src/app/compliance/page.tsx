import type { Metadata } from "next";
import PageShell, { PageHero } from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { compliancePoints, advantages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quality & Compliance",
  description:
    "DMRE-licensed wholesaler operating under a strict HSEQ framework. SANS-certified batch assurance, zero-spill protocol and independent Certificate of Analysis on every delivery.",
};

const credentials = [
  { label: "DMRE Wholesale License", value: "Act 120 of 1977" },
  { label: "NERSA", value: "Licensed" },
  { label: "B-BBEE", value: "Level 1 · 135%" },
  { label: "Quality Standard", value: "100% SANS" },
];

export default function CompliancePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Quality & Compliance"
        title="Zero compromise on safety, environment and governance."
        subtitle="Petroleum logistics demands absolute operational discipline, backed by an Integrated HSEQ framework aligned with international best practice."
      />

      {/* Credentials */}
      <section className="border-b border-black/[0.06] bg-white">
        <div className="container-x grid gap-8 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((c) => (
            <div key={c.label} className="text-center">
              <div className="display-lg text-teal">{c.value}</div>
              <div className="mt-2 text-sm text-smoke">{c.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Regulatory Framework</p>
            <h2 className="mt-4 display-lg">Licensed, certified, accountable.</h2>
          </Reveal>
          <div className="mt-16 grid gap-5 sm:grid-cols-2">
            {compliancePoints.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 90}>
                <div className="card card-hover flex h-full items-start gap-4 bg-white">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal text-xs text-white">
                    ✓
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-carbon">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-smoke">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-carbon text-white">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-teal-light">
              Batch Assurance
            </p>
            <h2 className="mt-4 display-lg text-white">
              Integrity from terminal to tank.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 90}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-colors duration-500 hover:bg-white/10">
                  <span className="text-3xl">{a.icon}</span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-white/60">
                    {a.detail}
                  </p>
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
