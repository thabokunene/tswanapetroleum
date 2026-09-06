import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import SpecTable from "@/components/SpecTable";
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
      {/* Hero — centered Apple product style */}
      <section className="bg-mist pt-24 pb-16 text-center md:pt-32 md:pb-20">
        <div className="container-narrow">
          <Reveal>
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-4xl shadow-soft">
              {product.icon}
            </span>
            <p className="mt-6 eyebrow">{product.spec}</p>
            <h1 className="mt-3 display-xl text-carbon">{product.headline}</h1>
            <p className="mx-auto mt-6 max-w-2xl lead">{product.intro}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Request a quote
              </Link>
              {product.specColumns && (
                <Link
                  href={`/products/${product.slug}/tds`}
                  className="btn-dark"
                >
                  Technical data sheet
                </Link>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Compliance / supply meta strip */}
      <section className="border-b border-black/[0.06] bg-white">
        <div className="container-x grid gap-6 py-10 sm:grid-cols-2">
          <div className="text-center sm:text-left">
            <div className="text-xs uppercase tracking-wide text-smoke">
              Compliance
            </div>
            <div className="mt-1 text-lg font-semibold tracking-tight text-carbon">
              {product.compliance}
            </div>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-xs uppercase tracking-wide text-smoke">
              Supply
            </div>
            <div className="mt-1 text-lg font-semibold tracking-tight text-carbon">
              {product.supply}
            </div>
          </div>
        </div>
      </section>

      {/* Spec matrix */}
      {product.specColumns && product.specRows && (
        <section className="section bg-white">
          <div className="container-x">
            <Reveal>
              <p className="eyebrow">Technical Specification</p>
              <h2 className="mt-4 display-lg">Verified performance parameters.</h2>
              <div className="mt-10 overflow-x-auto rounded-3xl bg-cloud p-2 sm:p-6">
                <SpecTable
                  columns={product.specColumns}
                  rows={product.specRows}
                />
              </div>
              <p className="mt-4 text-sm text-smoke">
                Typical values shown. An independent Certificate of Analysis
                (CoA) accompanies every consignment before offloading.
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Applications + highlights */}
      <section className="section bg-mist">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-carbon">
              Typical applications
            </h2>
            <ul className="mt-6 space-y-4">
              {product.applications.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal text-xs text-white">
                    ✓
                  </span>
                  <span className="text-[1.05rem] text-carbon">{a}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="space-y-6">
            {product.bullets?.map((b) => (
              <div key={b.title} className="rounded-3xl bg-white p-8 shadow-soft">
                <h2 className="text-xl font-semibold tracking-tight text-carbon">
                  {b.title}
                </h2>
                <ul className="mt-5 space-y-3.5">
                  {b.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                      <span className="text-[0.95rem] text-smoke">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Other products */}
      <section className="section bg-white">
        <div className="container-x">
          <h2 className="display-lg">Explore other products.</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="card card-hover group flex h-full flex-col bg-cloud"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-xl shadow-soft">
                  {p.icon}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-carbon">
                  {p.name}
                </h3>
                <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-smoke">
                  {p.short}
                </p>
                <span className="link-arrow mt-5">
                  View specifications <span aria-hidden>›</span>
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
