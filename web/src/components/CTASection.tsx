import Link from "next/link";
import { contact } from "@/lib/site";

export default function CTASection() {
  return (
    <section className="section bg-white">
      <div className="container-narrow text-center">
        <p className="eyebrow">Let&apos;s fuel your business</p>
        <h2 className="mt-4 display-lg">
          From 10,000 litres to 10 million.
          <br />
          <span className="text-smoke">On time. On spec. On budget.</span>
        </h2>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Request a quote
          </Link>
          <Link href="/estimator" className="btn-dark">
            Bulk order estimator
          </Link>
        </div>
        <p className="mt-6 text-sm text-smoke">
          Prefer to talk?{" "}
          <a
            href={`mailto:${contact.supplyEmail}`}
            className="text-teal hover:underline"
          >
            {contact.supplyEmail}
          </a>
        </p>
      </div>
    </section>
  );
}
