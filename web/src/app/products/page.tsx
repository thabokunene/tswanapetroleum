import type { Metadata } from "next";
import Link from "next/link";
import PageShell, { PageHero } from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { products, productCategories } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products & Fuels",
  description:
    "One supplier, every fuel, delivered. Wholesale diesel 50/500ppm, petrol 93/95, bulk LPG, hydrogen, heavy furnace oil and light blending fuel across South Africa.",
};

export default function ProductsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Products & Fuels"
        title="The Energy of Today. The Fuels of Tomorrow."
        subtitle="From the pumps to the plant floor — Tswana Petroleum Co. is your single-source wholesale energy partner, from conventional hydrocarbons to next-generation clean energy."
      />

      {productCategories.map((cat, ci) => {
        const items = products.filter((p) => p.category === cat.key);
        return (
          <section
            key={cat.key}
            className={`section ${ci % 2 === 1 ? "bg-white" : ""}`}
          >
            <div className="container-x">
              <Reveal>
                <h2 className="heading-lg">{cat.label}</h2>
              </Reveal>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p, i) => (
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
                      <h3 className="mt-5 font-heading text-xl font-semibold text-navy">
                        {p.name}
                      </h3>
                      <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-carbon/70">
                        {p.short}
                      </p>
                      <span className="mt-4 font-body text-xs uppercase tracking-wide text-carbon/50">
                        {p.compliance}
                      </span>
                      <span className="mt-4 font-heading text-sm font-semibold text-teal transition-transform group-hover:translate-x-1">
                        View specifications →
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTASection />
    </PageShell>
  );
}
