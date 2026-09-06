import type { Metadata } from "next";
import PageShell, { PageHero } from "@/components/PageShell";
import QuoteForm from "@/components/QuoteForm";
import Icon, { type IconName } from "@/components/Icon";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description:
    "Let's fuel your business. Whether you need 10,000 litres or 10 million, Tswana Petroleum Co. delivers on time, on spec, and on budget.",
};

const details: {
  icon: IconName;
  label: string;
  value: string;
  href?: string;
}[] = [
  { icon: "call", label: "Trading Desk", value: contact.phone },
  {
    icon: "mail",
    label: "Direct Supply",
    value: contact.supplyEmail,
    href: `mailto:${contact.supplyEmail}`,
  },
  {
    icon: "mail",
    label: "Sales",
    value: contact.salesEmail,
    href: `mailto:${contact.salesEmail}`,
  },
  {
    icon: "shield",
    label: "Compliance",
    value: contact.complianceEmail,
    href: `mailto:${contact.complianceEmail}`,
  },
  { icon: "place", label: "Head Office", value: contact.office },
  { icon: "schedule", label: "Trading Hours", value: contact.hours },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact Us"
        title="Let's fuel your business."
        subtitle="Whether you need 10,000 litres or 10 million, on time, on spec, and on budget."
      />

      <section className="section bg-white">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-carbon">
              Get in touch
            </h2>
            <p className="mt-3 text-smoke">
              Our commercial supply team responds within one business day.
              Emergency supply support is available around the clock.
            </p>
            <ul className="mt-8 space-y-5">
              {details.map((d) => (
                <li key={d.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cloud text-teal">
                    <Icon name={d.icon} size={22} />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-smoke">
                      {d.label}
                    </div>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="text-lg font-medium tracking-tight text-carbon hover:text-teal"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <div className="text-lg font-medium tracking-tight text-carbon">
                        {d.value}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-3xl bg-carbon p-8 text-white">
              <h3 className="text-lg font-semibold tracking-tight">
                Become a supply partner
              </h3>
              <p className="mt-2 text-sm text-white/70">
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
