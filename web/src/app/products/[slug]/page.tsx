import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { products } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.headline,
  };
}

export default function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <PageShell>
      <section className="relative overflow-hidden bg-brand-gradient-soft py-20 text-white md:py-28">
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-teal-light/20 blur-3xl" />
        <div className="container-x relative">
          <Link
            href="/products"
            className="text-sm font-semibold text-white/70 hover:text-white"
          >
            ← All products
          </Link>
          <div className="mt-6 flex items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-4xl">
              {product.icon}
            </span>
            <span className="rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
              {product.spec}
            </span>
          </div>
          <h1 className="mt-6 heading-xl max-w-4xl">{product.headline}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">{product.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-amber">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-navy">
              Typical Applications
            </h2>
            <ul className="mt-6 space-y-4">
              {product.applications.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    ✓
                  </span>
                  <span className="text-lg text-carbon/80">{a}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            {product.bullets.map((b) => (
              <div key={b.title} className="rounded-2xl bg-cloud p-8">
                <h2 className="font-display text-2xl font-bold text-navy">
                  {b.title}
                </h2>
                <ul className="mt-6 space-y-4">
                  {b.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal" />
                      <span className="text-carbon/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <h2 className="heading-lg">Explore other products</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="card card-hover group flex h-full flex-col"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-2xl">
                  {p.icon}
                </span>
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
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
