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
    title: `${product.name} Technical Data Sheet`,
    description: `Technical Data Sheet (TDS) for ${product.name}, ${product.compliance}.`,
  };
}

export default function TDSPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const docId = `TPC-TDS-${product.slug
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 6)}-ZA`;

  return (
    <div className="min-h-screen bg-cloud py-10 print:bg-white print:py-0">
      {/* Toolbar (hidden in print) */}
      <div className="container-narrow mb-6 flex items-center justify-between no-print">
        <Link
          href={`/products/${product.slug}`}
          className="text-sm font-medium text-carbon hover:text-teal"
        >
          ‹ Back to {product.name}
        </Link>
        <PrintButton />
      </div>

      {/* Sheet */}
      <div className="mx-auto max-w-[820px] overflow-hidden rounded-3xl bg-white shadow-card print:max-w-none print:rounded-none print:shadow-none">
        {/* Header band */}
        <div className="bg-brand-gradient px-10 py-10 text-white print:bg-navy">
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="text-2xl font-semibold tracking-tight">
                Tswana Petroleum Co.
              </div>
              <div className="mt-1 text-sm text-white/80">Bulk Fuels Division</div>
            </div>
            <div className="text-right text-sm">
              <div className="font-semibold">Technical Data Sheet</div>
              <div className="mt-1 text-white/80">Document ID: {docId}</div>
              <div className="text-white/80">Revision: 2026 / V1</div>
            </div>
          </div>
          <div className="mt-6 border-t border-white/25 pt-5 text-xl font-semibold tracking-tight">
            {product.name}
          </div>
        </div>

        <div className="space-y-9 px-10 py-10">
          <Block n="1" title="Product description">
            <p className="leading-relaxed text-smoke">{product.intro}</p>
          </Block>

          {product.specColumns && product.specRows && (
            <Block n="2" title="Physical & chemical properties">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    {product.specColumns.map((c) => (
                      <th
                        key={c}
                        className="border-b border-carbon/15 px-3 py-2.5 text-left font-semibold text-carbon"
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {product.specRows.map((r) => (
                    <tr key={r.label}>
                      <td className="border-b border-carbon/[0.06] px-3 py-2.5 font-medium text-carbon">
                        {r.label}
                      </td>
                      <td className="border-b border-carbon/[0.06] px-3 py-2.5 text-smoke">
                        {r.a}
                      </td>
                      {product.specColumns!.length >= 3 && (
                        <td className="border-b border-carbon/[0.06] px-3 py-2.5 text-smoke">
                          {r.b}
                        </td>
                      )}
                      {product.specColumns!.length >= 4 && (
                        <td className="border-b border-carbon/[0.06] px-3 py-2.5 text-smoke">
                          {r.method}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Block>
          )}

          <Block n="3" title="Storage & handling recommendations">
            <ul className="space-y-2 text-sm text-smoke">
              <li>• Storage tanks must comply with SANS 10089 Part 1 specifications.</li>
              <li>
                • Regular drainage of bottom water settling sumps is recommended
                to prevent biological contamination.
              </li>
              <li>
                • Ensure all transfer hoses are certified for hydrocarbon
                transport and correctly grounded.
              </li>
            </ul>
          </Block>

          <Block n="4" title="Licensing & regulatory compliance">
            <ul className="space-y-2 text-sm text-smoke">
              <li>• DMRE Wholesale License valid.</li>
              <li>
                • {product.compliance} batch verification assured via Certificate
                of Analysis (CoA).
              </li>
              <li>• Material Safety Data Sheet (MSDS) available on request.</li>
            </ul>
          </Block>

          <div className="border-t border-carbon/10 pt-5 text-xs text-smoke">
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
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal">
        {n} · {title}
      </h2>
      {children}
    </section>
  );
}
