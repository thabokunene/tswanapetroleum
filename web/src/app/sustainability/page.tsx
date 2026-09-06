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
        title="The energy of today. The fuels of tomorrow."
        subtitle="Balancing the immediate need for reliable fossil fuels with a long-term commitment to decarbonisation."
      />

      <section className="section bg-white">
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
            <p className="text-lg leading-relaxed text-smoke">
              Aligned with the Department of Science and Innovation&apos;s{" "}
              <strong className="font-semibold text-carbon">
                Hydrogen Society Roadmap (HSRM)
              </strong>
              , we are positioning at the leading edge of commercial clean energy
              supply — while maintaining the ultra-reliable conventional fuel
              chains our clients depend on today.
            </p>
            <blockquote className="mt-8 border-l-2 border-teal pl-6 text-2xl font-medium leading-snug tracking-tight text-carbon">
              &ldquo;The same energy that powers South Africa&apos;s economy must
              also protect its future.&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Clean Energy Roadmap</p>
            <h2 className="mt-4 display-lg">Building the supply corridors.</h2>
          </Reveal>
          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {roadmap.map((r, i) => (
              <Reveal key={r.phase} delay={i * 100}>
                <div className="card card-hover h-full bg-white">
                  <span className="text-sm font-semibold uppercase tracking-wide text-teal">
                    {r.phase}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-carbon">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-smoke">
                    {r.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Our ESG Commitments</p>
            <h2 className="mt-4 display-lg">Three pillars, one responsibility.</h2>
          </Reveal>
          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="card card-hover h-full bg-cloud">
                  <span className="text-4xl">{p.icon}</span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-carbon">
                    {p.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
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

      <CTASection />
    </PageShell>
  );
}
