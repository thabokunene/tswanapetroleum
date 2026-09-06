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
  { label: "DMRE Wholesale License", value: "Petroleum Products Act (Act 120 of 1977)" },
  { label: "NERSA", value: "Licensed" },
  { label: "B-BBEE", value: "Level 1 Contributor · 135% recognition" },
  { label: "Quality Standard", value: "100% SANS specification" },
];

export default function CompliancePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Quality & Compliance"
        title="Zero Compromise: Safety, Environment & Governance"
        subtitle="Petroleum logistics demands absolute operational discipline, backed by an Integrated HSEQ management framework aligned with international best practice."
      />

      {/* Credentials strip */}
      <section className="border-b border-navy/5 bg-white">
        <div className="container-x grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((c) => (
            <div key={c.label} className="rounded-2xl bg-cloud p-6">
              <div className="font-body text-xs font-bold uppercase tracking-wide text-carbon/50">
                {c.label}
              </div>
              <div className="mt-2 font-heading text-base font-semibold text-navy">
                {c.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Regulatory Framework</p>
            <h2 className="mt-4 heading-lg">Licensed, certified, accountable</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {compliancePoints.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 90}>
                <div className="card card-hover flex h-full items-start gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-navy">
                      {c.title}
                    </h3>
                    <p className="mt-1 font-body text-sm leading-relaxed text-carbon/70">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow bg-teal-light/15 text-teal-light">
              Batch Assurance
            </p>
            <h2 className="mt-4 heading-lg text-white">
              SANS-certified integrity, from terminal to tank
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 90}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-colors hover:border-teal-light/40 hover:bg-white/10">
                  <span className="text-3xl">{a.icon}</span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-white">
                    {a.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-white/70">
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
