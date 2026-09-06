import Link from "next/link";
import Logo from "./Logo";
import { contact, nav, products } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="gradient-rule" />
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Proudly South African wholesale distributor of petroleum and next-generation
            energy products. We don&apos;t just move fuel — we move economies.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide">
              B-BBEE Compliant
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide">
              ISO 9001 · 14001
            </span>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-white">
            Company
          </h4>
          <ul className="space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-teal-light">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-white">
            Products
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
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-white">
            Get in Touch
          </h4>
          <ul className="space-y-3 text-sm">
            <li>📞 {contact.phone}</li>
            <li>
              📧{" "}
              <a href={`mailto:${contact.email}`} className="hover:text-teal-light">
                {contact.email}
              </a>
            </li>
            <li>📍 {contact.office}</li>
            <li>🕐 {contact.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Tswana Petroleum Co. All rights reserved.</p>
          <p>Licensed under the Petroleum Products Act (Act 120 of 1977).</p>
        </div>
      </div>
    </footer>
  );
}
