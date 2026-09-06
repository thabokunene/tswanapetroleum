import Link from "next/link";
import { company, contact, products, sectors } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-cloud text-smoke">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-xs font-semibold text-carbon">
              Tswana Petroleum Co.
            </h4>
            <p className="mt-3 max-w-xs text-[0.8rem] leading-relaxed">
              &ldquo;{company.tagline}&rdquo;
            </p>
            <p className="mt-2 text-[0.8rem] leading-relaxed">
              Registered DMRE Wholesale Fuel License Holder · B-BBEE Level 1 ·
              SANS Compliant.
            </p>
            <ul className="mt-4 space-y-2.5 text-[0.8rem]">
              {[
                { label: "About Us", href: "/about" },
                { label: "Quality & Compliance", href: "/compliance" },
                { label: "Just Energy Transition", href: "/sustainability" },
                { label: "Corporate Social Investment", href: "/csi" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="transition-colors hover:text-carbon"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-carbon">Energy Products</h4>
            <ul className="mt-3 space-y-2.5 text-[0.8rem]">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="transition-colors hover:text-carbon"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-carbon">Industry Sectors</h4>
            <ul className="mt-3 space-y-2.5 text-[0.8rem]">
              {sectors.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-carbon">Direct Desk</h4>
            <ul className="mt-3 space-y-2.5 text-[0.8rem]">
              <li className="font-medium text-carbon">{company.legalName}</li>
              <li>{contact.office}</li>
              <li>{contact.phone}</li>
              <li>
                <a
                  href={`mailto:${contact.supplyEmail}`}
                  className="transition-colors hover:text-carbon"
                >
                  {contact.supplyEmail}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.complianceEmail}`}
                  className="transition-colors hover:text-carbon"
                >
                  {contact.complianceEmail}
                </a>
              </li>
              <li>{contact.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-black/[0.08] pt-7 text-[0.75rem] sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All Rights Reserved.
          </p>
          <p>Licensed under the Petroleum Products Act (Act 120 of 1977).</p>
        </div>
      </div>
    </footer>
  );
}
