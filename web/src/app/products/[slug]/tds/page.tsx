import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, company } from "@/lib/site";
import PrintButton from "@/components/PrintButton";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: "Technical Data Sheet" };
  return {
    title: `${product.name} — Technical Data Sheet`,
    description: `Technical Data Sheet (TDS) for ${product.name} — ${product.compliance}.`,
  };
}

export default function TDSPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const docId = `TPC-TDS-${product.slug.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6)}-ZA`;

  return (
    <div className="min-h-screen bg-carbon/10 py-8 print:bg-white print:py-0">
      {/* Toolbar (hidden in print) */}
      <div className="container-x mb-6 flex items-center justify-between print:hidden">
        <Link
          href={`/products/${product.slug}`}
          className="font-heading text-sm font-semibold text-navy hover:text-teal"
        >
          ← Back to {product.name}
        </Link>
        <PrintButton />
      </div>

      {/* Sheet */}
      <div className="mx-auto max-w-[820px] bg-white shadow-card print:max-w-none print:shadow-none">
        {/* Header band */}
        <div className="bg-brand-gradient px-10 py-8 text-white print:bg-navy">
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="font-heading text-2xl font-bold tracking-tight">
                TSWANA PETROLEUM CO.
              </div>
              <div className="mt-1 font-body text-sm text-white/80">
                Bulk Fuels Division
              </div>
            </div>
            <div className="text-right font-body text-sm">
              <div className="font-heading text-base font-semibold">
                Technical Data Sheet (TDS)
              </div>
              <div className="mt-1 text-white/80">Document ID: {docId}</div>
              <div className="text-white/80">Revision: 2026/V1</div>
            </div>
          </div>
          <div className="mt-5 border-t border-white/25 pt-4 font-heading text-lg font-semibold">
            Product: {product.name}
          </div>
        </div>

        <div className="space-y-8 px-10 py-8">
          {/* 1. Description */}
          <Block n="1" title="Product Description">
            <p className="font-body leading-relaxed text-carbon">
              {product.intro}
            </p>
          </Block>

          {/* 2. Properties */}
          {product.specColumns && product.specRows && (
            <Block n="2" title="Physical & Chemical Properties">
              <table className="w-full border-collapse font-body text-sm">
                <thead>
                  <tr>
                    {product.specColumns.map((c) => (
                      <th
                        key={c}
                        className="border-b-2 border-navy px-3 py-2 text-left font-heading font-semibold text-navy"
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {product.specRows.map((r) => (
                    <tr key={r.label}>
                      <td className="border-b border-navy/15 px-3 py-2 font-semibold text-navy">
                        {r.label}
                      </td>
                      <td className="border-b border-navy/15 px-3 py-2 text-carbon">
                        {r.a}
                      </td>
                      {product.specColumns!.length >= 3 && (
                        <td className="border-b border-navy/15 px-3 py-2 text-carbon">
                          {r.b}
                        </td>
                      )}
                      {product.specColumns!.length >= 4 && (
                        <td className="border-b border-navy/15 px-3 py-2 text-carbon/70">
                          {r.method}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Block>
          )}

          {/* 3. Storage & handling */}
          <Block n="3" title="Storage & Handling Recommendations">
            <ul className="space-y-2 font-body text-sm text-carbon">
              <li>• Storage tanks must comply with SANS 10089 Part 1 specifications.</li>
              <li>
                • Regular drainage of bottom water settling sumps is recommended to
                prevent biological contamination.
              </li>
              <li>
                • Ensure all transfer hoses are certified for hydrocarbon transport
                and correctly grounded.
              </li>
            </ul>
          </Block>

          {/* 4. Licensing */}
          <Block n="4" title="Licensing & Regulatory Compliance">
            <ul className="space-y-2 font-body text-sm text-carbon">
              <li>• DMRE Wholesale License valid.</li>
              <li>
                • {product.compliance} batch verification assured via Certificate
                of Analysis (CoA).
              </li>
              <li>• Material Safety Data Sheet (MSDS) available on request.</li>
            </ul>
          </Block>

          <div className="border-t border-navy/10 pt-4 font-body text-xs text-carbon/60">
            {company.legalName} · DMRE Licensed Wholesaler · This document is for
            information purposes. All specifications should be verified against
            current SANS standards before use.
          </div>
        </div>
      </div>
    </div>
  );
}

function Block({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 font-heading text-base font-semibold uppercase tracking-wide text-navy">
        {n}. {title}
      </h2>
      {children}
    </section>
  );
}
