import Link from "next/link";
import Logo from "./Logo";
import { company, contact, products, sectors } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="gradient-rule" />
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-5 max-w-xs font-body text-sm leading-relaxed">
            &ldquo;{company.tagline}&rdquo;
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            Registered DMRE Wholesale Fuel License Holder.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide">
              B-BBEE Level 1
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide">
              SANS Compliant
            </span>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Energy Products
          </h4>
          <ul className="space-y-3 text-sm">
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/products/${p.slug}`}
                  className="transition-colors hover:text-teal-light"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Industry Sectors
          </h4>
          <ul className="space-y-3 text-sm">
            {sectors.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Direct Desk
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="font-semibold text-white">{company.legalName}</li>
            <li>Head Office: {contact.office}</li>
            <li>📞 Trading Desk: {contact.phone}</li>
            <li>
              📧 Direct Supply:{" "}
              <a href={`mailto:${contact.supplyEmail}`} className="hover:text-teal-light">
                {contact.supplyEmail}
              </a>
            </li>
            <li>
              📧 Compliance:{" "}
              <a href={`mailto:${contact.complianceEmail}`} className="hover:text-teal-light">
                {contact.complianceEmail}
              </a>
            </li>
            <li>🕐 {contact.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All Rights Reserved.
            SANS Standard Compliant.
          </p>
          <p>Licensed under the Petroleum Products Act (Act 120 of 1977).</p>
        </div>
      </div>
    </footer>
  );
}
