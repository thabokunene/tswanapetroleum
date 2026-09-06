import type { Metadata } from "next";
import Image from "next/image";
import PageShell, { PageHero } from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Just Energy Transition",
  description:
    "Our Just Energy Transition Strategy: balancing reliable fossil-fuel supply with green hydrogen and LPG infrastructure, aligned to South Africa's Hydrogen Society Roadmap.",
};

const pillars = [
  {
    icon: "🌍",
    title: "Environmental",
    points: [
      "Reducing Scope 1 & 2 emissions by 30% by 2030",
      "Investing in green hydrogen infrastructure",
      "Zero-spill logistics protocol with dry-break couplings",
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

const roadmap = [
  {
    phase: "Phase 1",
    title: "Industrial supply",
    desc: "Grey and blue hydrogen and commercial-scale LPG supply for industrial clients migrating from heavy distillates.",
  },
  {
    phase: "Phase 2",
    title: "Green partnerships",
    desc: "Green hydrogen partnerships with Northern Cape and Limpopo producers, leveraging South Africa's platinum-group-metal advantage.",
  },
  {
    phase: "Phase 3",
    title: "Refuelling network",
    desc: "Integrated hydrogen refuelling station (HRS) network supporting zero-emission heavy transport and mining haulage.",
  },
];

export default function SustainabilityPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Just Energy Transition"
        title="The Energy of Today. The Fuels of Tomorrow."
        subtitle="Our Just Energy Transition Strategy balances the immediate need for reliable fossil fuels with a long-term commitment to decarbonisation."
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
            <p className="font-body text-lg leading-relaxed text-carbon/80">
              Aligned with the South African Department of Science and
              Innovation&apos;s <strong className="text-navy">Hydrogen Society
              Roadmap (HSRM)</strong>, Tswana Petroleum Co. is positioning itself
              at the leading edge of commercial clean energy supply — while
              maintaining the ultra-reliable conventional fuel chains our clients
              depend on today.
            </p>
            <blockquote className="mt-8 border-l-4 border-teal pl-6 font-body text-xl font-medium italic text-navy">
              &ldquo;We believe the same energy that powers South Africa&apos;s
              economy must also protect its future.&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section bg-white">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Clean Energy Roadmap</p>
            <h2 className="mt-4 heading-lg">Building the supply corridors</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {roadmap.map((r, i) => (
              <Reveal key={r.phase} delay={i * 100}>
                <div className="card card-hover h-full">
                  <span className="font-heading text-sm font-bold uppercase tracking-wide text-teal">
                    {r.phase}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-semibold text-navy">
                    {r.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-carbon/70">
                    {r.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ESG pillars */}
      <section className="section">
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
                  <h3 className="mt-4 font-heading text-xl font-semibold text-navy">
                    {p.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        <span className="font-body text-sm leading-relaxed text-carbon/80">
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
