import type { Metadata } from "next";
import PageShell, { PageHero } from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "One of South Africa's most trusted petroleum product wholesalers — supplying diesel, petrol, LPG, hydrogen, HFO and LBF while investing in a cleaner energy future.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Us"
        title="We don't just move fuel. We move economies."
        subtitle="Founded on the belief that reliable energy is the backbone of economic growth."
      />

      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-[1.5fr_1fr]">
          <Reveal className="space-y-6 text-lg leading-relaxed text-carbon/80">
            <p>
              <strong className="text-navy">Tswana Petroleum Co.</strong> has
              established itself as one of South Africa&apos;s most trusted
              petroleum product wholesalers. Headquartered in South Africa, we
              supply a comprehensive portfolio of energy products — including{" "}
              <strong className="text-navy">
                diesel, petrol, LPG, hydrogen, heavy furnace oil, and light
                blending fuel (LBF)
              </strong>{" "}
              — to a diverse network of retail stations, mining operations,
              logistics fleets, manufacturing plants, and agricultural
              enterprises.
            </p>
            <p>
              Our name honours the rich heritage of the Tswana people, reflecting
              our deep roots in the African continent and our commitment to
              community-driven growth. We operate at the intersection of{" "}
              <strong className="text-navy">tradition and innovation</strong>,
              maintaining robust conventional fuel supply chains while actively
              investing in cleaner energy alternatives such as green hydrogen and
              LPG to support South Africa&apos;s Just Energy Transition.
            </p>
            <p>
              With strategically located storage and distribution infrastructure,
              a fleet of certified transport partners, and a team of seasoned
              energy professionals, Tswana Petroleum Co. guarantees{" "}
              <strong className="text-navy">
                on-time delivery, regulatory compliance, and product integrity
              </strong>{" "}
              at every point in the supply chain.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-6">
              <div className="rounded-2xl border border-teal/20 bg-teal/5 p-7">
                <h3 className="eyebrow">🎯 Mission</h3>
                <p className="mt-3 text-base leading-relaxed text-carbon/80">
                  To provide South African industries and communities with safe,
                  reliable, and competitively priced petroleum and alternative
                  energy products through an efficient, transparent, and
                  sustainable wholesale supply chain.
                </p>
              </div>
              <div className="rounded-2xl border border-navy/10 bg-navy p-7 text-white">
                <h3 className="eyebrow bg-teal-light/15 text-teal-light">
                  🔭 Vision
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/85">
                  To become Southern Africa&apos;s most trusted and innovative
                  energy wholesaler — leading the transition from fossil fuels to
                  a diversified, cleaner energy portfolio by 2035.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">💎 Core Values</p>
            <h2 className="mt-4 heading-lg">The TSWANA Pillars</h2>
            <p className="mt-4 text-lg text-carbon/70">
              Six principles spelled out in our name — the foundation of every
              partnership and every delivery.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.value} delay={(i % 3) * 90}>
                <div className="card card-hover flex h-full gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-gradient font-display text-2xl font-extrabold text-white">
                    {v.letter}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy">
                      {v.value}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-carbon/70">
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
