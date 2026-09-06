import type { Metadata } from "next";
import Link from "next/link";
import PageShell, { PageHero } from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products & Services",
  description:
    "One supplier, every fuel, delivered. Wholesale diesel, petrol, LPG, hydrogen, heavy furnace oil and light blending fuel across South Africa.",
};

export default function ProductsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Products & Services"
        title="One Supplier. Every Fuel. Delivered."
        subtitle="From the pumps to the plant floor — Tswana Petroleum Co. is your single-source wholesale energy partner."
      />

      <section className="section">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>

      <CTASection />
    </PageShell>
  );
}
