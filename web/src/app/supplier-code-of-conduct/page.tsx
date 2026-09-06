import type { Metadata } from "next";
import Link from "next/link";
import PageShell, { PageHero } from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import Icon, { type IconName } from "@/components/Icon";
import { company, contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Supplier Code of Conduct",
  description:
    "The standards of ethics, safety, human rights, environmental care and compliance that Tswana Petroleum Co. expects of every supplier, contractor and business partner.",
};

const lastUpdated = "6 September 2026";

const principles: { icon: IconName; title: string; points: string[] }[] = [
  {
    icon: "policy",
    title: "Ethics & Anti-Corruption",
    points: [
      "Zero tolerance for bribery, kickbacks, facilitation payments or fraud.",
      "No conflicts of interest without prior written disclosure.",
      "Fair competition and compliance with all antitrust laws.",
      "Accurate books, records and invoicing at all times.",
    ],
  },
  {
    icon: "verified_user",
    title: "Legal & Sanctions Compliance",
    points: [
      "Full compliance with all applicable laws and regulations.",
      "Adherence to international sanctions and export-control regimes.",
      "Robust KYC, beneficial-ownership and counterparty transparency.",
      "No dealing in illicit, smuggled or misdeclared product.",
    ],
  },
  {
    icon: "shield",
    title: "Health, Safety & Security",
    points: [
      "A zero-harm mindset across all sites, cargoes and transport.",
      "Compliance with the Hazardous Substances Act and OHS Act.",
      "Certified handling, loading and emergency-response procedures.",
      "Fit-for-purpose, inspected and maintained equipment and vehicles.",
    ],
  },
  {
    icon: "eco",
    title: "Environment & Sustainability",
    points: [
      "Zero-spill operations with dry-break couplings and containment.",
      "Responsible waste, emissions and resource management.",
      "Support for the transition to lower-carbon fuels.",
      "Valid environmental authorisations and permits.",
    ],
  },
  {
    icon: "school",
    title: "Labour & Human Rights",
    points: [
      "No child, forced or trafficked labour anywhere in the supply chain.",
      "Fair wages, working hours and freedom of association.",
      "A workplace free from discrimination, harassment and abuse.",
      "Safe, dignified conditions for all workers.",
    ],
  },
  {
    icon: "workspace_premium",
    title: "Quality & Product Integrity",
    points: [
      "Product supplied on-spec, to SANS and contractual standards.",
      "Independent Certificate of Analysis and full traceability.",
      "Accurate quantity, quality and documentation on every delivery.",
      "Prompt disclosure of any quality or supply deviation.",
    ],
  },
];

export default function SupplierCodeOfConductPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Suppliers & Partners"
        title="Supplier Code of Conduct"
        subtitle="The standards of integrity, safety and compliance we expect of every supplier, contractor and partner."
      />

      {/* Intro */}
      <section className="section bg-white">
        <div className="container-narrow space-y-6 text-lg leading-relaxed text-smoke">
          <p className="text-sm text-smoke">Last updated: {lastUpdated}</p>
          <Reveal>
            <p>
              {company.legalName} (&ldquo;{company.tradingName}&rdquo;) is
              committed to conducting business ethically, safely and in full
              compliance with the law. As an importer and trader of crude and
              refined products, our reputation and our licence to operate depend
              on the conduct of everyone in our value chain.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p>
              This Code sets out the minimum standards we require of all
              suppliers, contractors, agents, hauliers and business partners
              (&ldquo;Suppliers&rdquo;). We expect Suppliers to uphold these
              standards, to cascade equivalent expectations to their own
              sub-suppliers, and to demonstrate compliance on request.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="section bg-mist">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Our Expectations</p>
            <h2 className="mt-4 display-lg">Six commitments, non-negotiable.</h2>
          </Reveal>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 90}>
                <div className="card h-full bg-white">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                    <Icon name={p.icon} size={26} />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-carbon">
                    {p.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                          <Icon name="check" size={13} strokeWidth={2.25} />
                        </span>
                        <span className="text-[0.9rem] leading-relaxed text-smoke">
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

      {/* Compliance & reporting */}
      <section className="section bg-white">
        <div className="container-x grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full bg-cloud">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-teal">
                Compliance &amp; Audit
              </h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-smoke">
                Compliance with this Code is a condition of doing business with
                Tswana Petroleum Co. We may verify adherence through
                self-assessment, documentation review or on-site audit. Suppliers
                are expected to co-operate fully and to remediate any gaps within
                agreed timeframes. Serious or persistent breaches may result in
                suspension or termination of the relationship.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card h-full bg-carbon text-white">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-teal-light">
                Raising a Concern
              </h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-white/75">
                We encourage anyone who becomes aware of a breach of this Code to
                report it in good faith and in confidence. Reports may be made to
                our compliance office. We do not tolerate retaliation against
                anyone who raises a genuine concern.
              </p>
              <a
                href={`mailto:${contact.complianceEmail}`}
                className="mt-6 inline-flex items-center gap-2 font-medium text-teal-light hover:underline"
              >
                <Icon name="mail" size={18} />
                {contact.complianceEmail}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Become a supplier */}
      <section className="section bg-mist">
        <div className="container-narrow text-center">
          <Reveal>
            <p className="eyebrow">Work With Us</p>
            <h2 className="mt-4 display-lg">Become an approved supplier.</h2>
            <p className="mx-auto mt-5 max-w-xl lead">
              If your business meets these standards, we would like to hear from
              you. Get in touch to begin the supplier onboarding process.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Register your interest
              </Link>
              <Link href="/credit-application" className="btn-dark">
                Apply for a credit facility
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
