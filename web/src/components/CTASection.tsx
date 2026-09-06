import Link from "next/link";
import { contact } from "@/lib/site";

export default function CTASection() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-8 py-16 text-white md:px-16 md:py-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-teal-light/20 blur-3xl" />
          <div className="relative max-w-3xl">
            <p className="eyebrow bg-white/15 text-white">Let&apos;s Fuel Your Business</p>
            <h2 className="mt-5 heading-lg text-white">
              Whether you need 10,000 litres or 10 million, we deliver — on time,
              on spec, and on budget.
            </h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-amber">
                Request a Quote
              </Link>
              <Link href="/products" className="btn-outline">
                View Product Catalogue
              </Link>
              <a href={`mailto:${contact.email}`} className="btn-outline">
                Become a Supply Partner
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
