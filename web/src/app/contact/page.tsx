import type { Metadata } from "next";
import PageShell, { PageHero } from "@/components/PageShell";
import QuoteForm from "@/components/QuoteForm";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description:
    "Let's fuel your business. Whether you need 10,000 litres or 10 million, Tswana Petroleum Co. delivers — on time, on spec, and on budget.",
};

const details = [
  { icon: "📞", label: "Trading Desk", value: contact.phone },
  {
    icon: "📧",
    label: "Direct Supply",
    value: contact.supplyEmail,
    href: `mailto:${contact.supplyEmail}`,
  },
  {
    icon: "📧",
    label: "Sales",
    value: contact.salesEmail,
    href: `mailto:${contact.salesEmail}`,
  },
  {
    icon: "🛡️",
    label: "Compliance",
    value: contact.complianceEmail,
    href: `mailto:${contact.complianceEmail}`,
  },
  { icon: "📍", label: "Head Office", value: contact.office },
  { icon: "🕐", label: "Trading Hours", value: contact.hours },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Fuel Your Business."
        subtitle="Whether you need 10,000 litres or 10 million, Tswana Petroleum Co. delivers — on time, on spec, and on budget."
      />

      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-navy">
              Get in touch
            </h2>
            <p className="mt-3 font-body text-carbon/70">
              Our commercial supply team responds to enquiries within one
              business day. Emergency supply support is available around the
              clock.
            </p>
            <ul className="mt-8 space-y-5">
              {details.map((d) => (
                <li key={d.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-xl">
                    {d.icon}
                  </span>
                  <div>
                    <div className="font-body text-xs font-bold uppercase tracking-wide text-carbon/50">
                      {d.label}
                    </div>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="font-heading text-lg font-semibold text-navy hover:text-teal"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <div className="font-heading text-lg font-semibold text-navy">
                        {d.value}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl bg-navy p-7 text-white">
              <h3 className="font-heading text-lg font-semibold">
                Become a Supply Partner
              </h3>
              <p className="mt-2 font-body text-sm text-white/75">
                Interested in off-take agreements or long-term contracts? Mention
                it in your message and our partnerships team will be in touch.
              </p>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>
    </PageShell>
  );
}
