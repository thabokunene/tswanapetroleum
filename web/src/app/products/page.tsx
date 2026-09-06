import type { Metadata } from "next";
import Link from "next/link";
import PageShell, { PageHero } from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
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
        title="The energy of today. The fuels of tomorrow."
        subtitle="A full portfolio supplied at wholesale scale, from conventional hydrocarbons to next-generation clean energy."
      />

      {productCategories.map((cat, ci) => {
        const items = products.filter((p) => p.category === cat.key);
        return (
          <section
            key={cat.key}
            className={`section ${ci % 2 === 1 ? "bg-mist" : "bg-white"}`}
          >
            <div className="container-x">
              <Reveal>
                <h2 className="display-lg">{cat.label}</h2>
              </Reveal>
              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p, i) => (
                  <Reveal key={p.slug} delay={(i % 3) * 90}>
                    <Link
                      href={`/products/${p.slug}`}
                      className="card card-hover group flex h-full flex-col bg-cloud"
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-teal shadow-soft">
                          <Icon name={p.icon} size={24} />
                        </span>
                        <span className="text-xs font-medium text-smoke">
                          {p.spec}
                        </span>
                      </div>
                      <h3 className="mt-5 text-lg font-semibold tracking-tight text-carbon">
                        {p.name}
                      </h3>
                      <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-smoke">
                        {p.short}
                      </p>
                      <span className="mt-4 text-xs text-smoke/80">
                        {p.compliance}
                      </span>
                      <span className="link-arrow mt-4">
                        View specifications
                        <Icon name="chevron_right" size={18} />
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
