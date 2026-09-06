import type { Metadata } from "next";
import Image from "next/image";
import PageShell, { PageHero } from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Sustainability & ESG",
  description:
    "Our Just Energy Transition Strategy: reducing emissions, investing in green hydrogen, and building a diversified, cleaner energy portfolio for South Africa.",
};

const pillars = [
  {
    icon: "🌍",
    title: "Environmental",
    points: [
      "Reducing Scope 1 & 2 emissions by 30% by 2030",
      "Investing in green hydrogen infrastructure",
      "Zero-spill logistics protocol",
    ],
  },
  {
    icon: "👥",
    title: "Social",
    points: [
      "Skills development programmes in host communities",
      "Preferential procurement from SMMEs",
      "STEM bursaries for underrepresented youth",
    ],
  },
  {
    icon: "🏛️",
    title: "Governance",
    points: [
      "Transparent supply chain reporting",
      "Anti-corruption compliance",
      "Annual third-party ESG audits",
    ],
  },
];

export default function SustainabilityPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Sustainability & ESG"
        title="Energising Growth. Protecting the Planet."
        subtitle="The energy landscape is evolving — and we are evolving with it."
      />

      <section className="section">
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
            <p className="text-lg leading-relaxed text-carbon/80">
              At Tswana Petroleum Co., we recognise that the energy landscape is
              evolving — and we are evolving with it. Our{" "}
              <strong className="text-navy">
                Just Energy Transition Strategy
              </strong>{" "}
              balances the immediate need for reliable fossil fuels with a
              long-term commitment to decarbonisation.
            </p>
            <blockquote className="mt-8 border-l-4 border-teal pl-6 text-xl font-medium italic text-navy">
              &ldquo;We believe the same energy that powers South Africa&apos;s
              economy must also protect its future.&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Our ESG Commitments</p>
            <h2 className="mt-4 heading-lg">Three pillars, one responsibility</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="card card-hover h-full">
                  <span className="text-4xl">{p.icon}</span>
                  <h3 className="mt-4 font-display text-xl font-bold text-navy">
                    {p.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        <span className="text-sm leading-relaxed text-carbon/80">
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

      <CTASection />
    </PageShell>
  );
}
