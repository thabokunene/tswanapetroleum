import type { Metadata } from "next";
import Link from "next/link";
import PageShell, { PageHero } from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Integrated energy services from Tswana Petroleum Co.: licensed storage facilities, Hazchem-certified transportation, and customs-bonded fuel supply.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Beyond the barrel, end to end."
        subtitle="Storage, transportation and bonded-fuel handling that keep your supply chain compliant, secure and moving."
      />

      {/* Quick nav */}
      <section className="border-b border-black/[0.06] bg-white">
        <div className="container-x flex flex-wrap justify-center gap-3 py-8">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-cloud px-5 py-2.5 text-sm font-medium text-carbon transition-colors hover:bg-teal/10 hover:text-teal"
            >
              <Icon name={s.icon} size={18} />
              {s.name}
            </a>
          ))}
        </div>
      </section>

      {services.map((s, i) => (
        <section
          key={s.slug}
          id={s.slug}
          className={`section scroll-mt-24 ${i % 2 === 1 ? "bg-mist" : "bg-white"}`}
        >
          <div className="container-x grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <span className="flex h-14 w-14 items-center justify-center rounded-3xl bg-teal/10 text-teal">
                <Icon name={s.icon} size={30} />
              </span>
              <h2 className="mt-6 display-lg">{s.name}</h2>
              <p className="mt-5 text-lg leading-relaxed text-smoke">{s.intro}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Enquire about {s.name.toLowerCase()}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid gap-3 sm:grid-cols-2">
                {s.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-start gap-3 rounded-2xl bg-cloud p-5"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                      <Icon name="check" size={15} strokeWidth={2.25} />
                    </span>
                    <span className="text-[0.95rem] leading-relaxed text-carbon">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* Credit application prompt */}
      <section className="section bg-carbon text-white">
        <div className="container-narrow text-center">
          <Reveal>
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-white/10 text-teal-light">
              <Icon name="request_quote" size={30} />
            </span>
            <h2 className="mt-6 display-lg text-white">Open a trade account.</h2>
            <p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-white/70">
              Apply for a credit facility to unlock contract pricing, scheduled
              deliveries and consolidated monthly billing across every product
              and service.
            </p>
            <Link href="/credit-application" className="btn-primary mt-9">
              Apply for credit
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
