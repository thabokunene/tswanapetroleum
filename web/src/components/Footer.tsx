import Link from "next/link";
import CookiePreferencesButton from "@/components/CookiePreferencesButton";
import Logo from "@/components/Logo";
import { company, contact, products, sectors, networkTicker } from "@/lib/site";

const columns = [
  {
    title: "Company",
    links: [
      { label: "Trading & Importing", href: "/trading" },
      { label: "Services", href: "/services" },
      { label: "About Us", href: "/about" },
      { label: "Just Energy Transition", href: "/sustainability" },
      { label: "Corporate Social Investment", href: "/csi" },
    ],
  },
  {
    title: "Commercial",
    links: [
      { label: "Request a Quote", href: "/contact" },
      { label: "Bulk Order Estimator", href: "/estimator" },
      { label: "Apply for Credit Facility", href: "/credit-application" },
      { label: "Quality & Compliance", href: "/compliance" },
      { label: "Supplier Code of Conduct", href: "/supplier-code-of-conduct" },
      {
        label: "Supplier Connect",
        href: "https://mubadalaenergy.com/supplier-connect/",
        external: true,
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/60">
      {/* Network roll-call */}
      <div className="overflow-hidden border-b border-white/10 py-4">
        <div className="flex w-max animate-marquee font-display text-[0.6875rem] font-semibold uppercase tracking-label text-white/50">
          {[...networkTicker, ...networkTicker].map((node, i) => (
            <span key={`${node}-${i}`} className="mx-4">
              {node} <span className="text-teal/70">·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-white/60">
              {company.tagline}
            </p>
            <p className="mt-4 max-w-xs font-body text-[0.8rem] leading-relaxed text-white/55">
              Registered DMRE wholesale fuel licence holder · B-BBEE Level 1 ·
              SANS-compliant supply.
            </p>
            <Link href="/contact" className="link-arrow link-arrow-invert mt-6">
              Request a quote
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="border-b border-white/15 pb-3 font-display text-[0.625rem] font-bold uppercase tracking-label text-white/60">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5 text-[0.85rem]">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      {...("external" in l && l.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="border-b border-white/15 pb-3 font-display text-[0.625rem] font-bold uppercase tracking-label text-white/60">
              Direct desks
            </h4>
            <ul className="mt-4 space-y-4 text-[0.85rem]">
              <li>
                <div className="font-display text-[0.625rem] font-bold uppercase tracking-label text-white/50">
                  Supply &amp; trading
                </div>
                <a
                  href={`mailto:${contact.supplyEmail}`}
                  className="transition-colors hover:text-white"
                >
                  {contact.supplyEmail}
                </a>
              </li>
              <li>
                <div className="font-display text-[0.625rem] font-bold uppercase tracking-label text-white/50">
                  Sales
                </div>
                <a
                  href={`mailto:${contact.salesEmail}`}
                  className="transition-colors hover:text-white"
                >
                  {contact.salesEmail}
                </a>
              </li>
              <li>
                <div className="font-display text-[0.625rem] font-bold uppercase tracking-label text-white/50">
                  Compliance
                </div>
                <a
                  href={`mailto:${contact.complianceEmail}`}
                  className="transition-colors hover:text-white"
                >
                  {contact.complianceEmail}
                </a>
              </li>
              <li>
                <div className="font-display text-[0.625rem] font-bold uppercase tracking-label text-white/50">
                  Telephone
                </div>
                <a
                  href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Products & sectors index */}
        <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-2">
          <div>
            <h4 className="font-display text-[0.625rem] font-bold uppercase tracking-label text-white/60">
              Energy products
            </h4>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[0.85rem]">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="transition-colors hover:text-white"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-[0.625rem] font-bold uppercase tracking-label text-white/60">
              Industry sectors
            </h4>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[0.85rem]">
              {sectors.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-3 text-[0.75rem] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {company.legalName}. All rights
              reserved.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span>{contact.office}</span>
              <Link
                href="/privacy-statement"
                className="transition-colors hover:text-white"
              >
                Privacy Statement
              </Link>
              <CookiePreferencesButton className="transition-colors hover:text-white">
                Cookie Preferences
              </CookiePreferencesButton>
            </div>
          </div>
          <p className="mt-4 text-[0.75rem] text-white/50">
            Licensed under the Petroleum Products Act (Act 120 of 1977). Prices
            are linked to Central Energy Fund (CEF) and Basic Fuel Price (BFP)
            mechanics. All product specifications should be verified against
            current SANS standards and DFFE regulations before publication.
          </p>
        </div>
      </div>
    </footer>
  );
}
