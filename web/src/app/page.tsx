import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { products, values, advantages } from "@/lib/site";

const stats = [
  { value: "6", label: "Energy products" },
  { value: "9", label: "Provinces served" },
  { value: "24/7", label: "Emergency supply" },
  { value: "2035", label: "Clean-energy vision" },
];

export default function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <Image
          src="/images/hero-tanker.png"
          alt="Tswana Petroleum tanker on a South African highway at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy/80 to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent" />
        <div className="container-x relative py-32">
          <div className="max-w-2xl">
            <p className="eyebrow animate-fade-up bg-white/10 text-white">
              Wholesale Energy · World-Class Standards
            </p>
            <h1 className="mt-6 animate-fade-up font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              One Supplier. Every Fuel.{" "}
              <span className="text-gradient">Delivered.</span>
            </h1>
            <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-white/85">
              From the pumps to the plant floor — Tswana Petroleum Co. is your
              single-source wholesale energy partner. Powering South Africa,
              fuelling the future.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-amber">
                Request a Quote
              </Link>
              <Link href="/products" className="btn-outline">
                View Product Catalogue
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <div className="gradient-rule" />
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-navy/5 bg-white">
        <div className="container-x grid grid-cols-2 gap-6 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-extrabold text-teal">
                {s.value}
              </div>
              <div className="mt-1 text-sm font-medium text-carbon/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO / ABOUT SNAPSHOT */}
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Who We Are</p>
            <h2 className="mt-4 heading-lg">
              The energy behind every journey — rooted in South Africa,
              scaling across the continent.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-carbon/80">
              Tswana Petroleum Co. is a proudly South African wholesale
              distributor of petroleum products, serving industries, retailers,
              and commercial enterprises across the nation. From conventional
              fuels to next-generation solutions like hydrogen, we deliver
              reliable supply, competitive pricing, and uncompromising quality.
            </p>
            <p className="mt-4 text-lg font-semibold text-navy">
              Because Africa&apos;s growth runs on energy.
            </p>
            <Link href="/about" className="btn-ghost mt-8">
              Read our story →
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { t: "Reliable Supply", d: "On-time delivery backed by strategic depots and a vetted tanker fleet." },
                { t: "Regulatory Compliance", d: "Licensed, SANS-aligned, and B-BBEE compliant across every product." },
                { t: "Product Integrity", d: "Certified quality with full traceability from refinery to forecourt." },
                { t: "Just Energy Transition", d: "Investing in green hydrogen, LPG and low-carbon fuel solutions." },
              ].map((c) => (
                <div key={c.t} className="card card-hover">
                  <h3 className="font-display text-lg font-bold text-navy">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-carbon/70">{c.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="section bg-white">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Products & Services</p>
            <h2 className="mt-4 heading-lg">
              A comprehensive portfolio of energy products
            </h2>
            <p className="mt-4 text-lg text-carbon/70">
              Diesel, petrol, LPG, hydrogen, heavy furnace oil and light
              blending fuel — supplied at wholesale scale to every sector of the
              economy.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 90}>
                <Link
                  href={`/products/${p.slug}`}
                  className="card card-hover group flex h-full flex-col"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-2xl">
                      {p.icon}
                    </span>
                    <span className="rounded-full bg-cloud px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-teal">
                      {p.spec}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy">
                    {p.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-carbon/70">
                    {p.short}
                  </p>
                  <span className="mt-5 text-sm font-semibold text-teal transition-transform group-hover:translate-x-1">
                    Explore product →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">The TSWANA Pillars</p>
            <h2 className="mt-4 heading-lg">Core values that carry every litre</h2>
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

      {/* ADVANTAGE */}
      <section id="advantage" className="section bg-navy text-white">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow bg-teal-light/15 text-teal-light">
              🏆 The Tswana Advantage
            </p>
            <h2 className="mt-4 heading-lg text-white">
              Why leading operators choose Tswana Petroleum Co.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 90}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-colors hover:border-teal-light/40 hover:bg-white/10">
                  <span className="text-3xl">{a.icon}</span>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {a.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY TEASER */}
      <section className="section bg-white">
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
            <p className="eyebrow">Sustainability & ESG</p>
            <h2 className="mt-4 heading-lg">
              Energising growth. Protecting the planet.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-carbon/80">
              Our Just Energy Transition Strategy balances the immediate need for
              reliable fossil fuels with a long-term commitment to
              decarbonisation — reducing Scope 1 &amp; 2 emissions by 30% by 2030
              and investing in green hydrogen infrastructure.
            </p>
            <blockquote className="mt-6 border-l-4 border-teal pl-5 text-lg font-medium italic text-navy">
              &ldquo;We believe the same energy that powers South Africa&apos;s
              economy must also protect its future.&rdquo;
            </blockquote>
            <Link href="/sustainability" className="btn-ghost mt-8">
              Explore our ESG commitments →
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
