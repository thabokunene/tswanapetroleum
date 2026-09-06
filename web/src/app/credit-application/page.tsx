import type { Metadata } from "next";
import PageShell, { PageHero } from "@/components/PageShell";
import CreditForm from "@/components/CreditForm";
import Icon from "@/components/Icon";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Credit Application",
  description:
    "Apply for a Tswana Petroleum Co. trade account and credit facility to unlock contract pricing, scheduled deliveries and consolidated monthly billing.",
};

const benefits = [
  {
    icon: "trending_up" as const,
    title: "Contract pricing",
    desc: "CEF and BFP-aligned rates with volume-tier and fixed-margin structures.",
  },
  {
    icon: "local_shipping" as const,
    title: "Scheduled deliveries",
    desc: "Priority dispatch and planned replenishment across all nine provinces.",
  },
  {
    icon: "request_quote" as const,
    title: "Consolidated billing",
    desc: "One monthly statement across every product and service you draw on.",
  },
];

export default function CreditApplicationPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Apply for Credit Facility"
        title="Open a trade account."
        subtitle="Apply for a credit facility to unlock contract pricing, scheduled deliveries and consolidated monthly billing."
      />

      {/* Benefits */}
      <section className="border-b border-black/[0.06] bg-white">
        <div className="container-x grid gap-6 py-14 md:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                <Icon name={b.icon} size={24} />
              </span>
              <div>
                <h3 className="text-base font-semibold tracking-tight text-carbon">
                  {b.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-smoke">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-carbon">
              How it works
            </h2>
            <ol className="mt-6 space-y-5">
              {[
                "Complete and submit the application below.",
                "Our credit desk reviews and runs trade and bank reference checks.",
                "We confirm your limit and terms, then activate your account.",
                "Start ordering with contract pricing and monthly billing.",
              ].map((step, i) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-carbon text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="text-[0.95rem] leading-relaxed text-carbon">
                    {step}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-3xl bg-white p-7 shadow-soft">
              <h3 className="text-base font-semibold tracking-tight text-carbon">
                Credit desk
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-smoke">
                Questions about your application? Contact our credit desk
                directly.
              </p>
              <a
                href={`mailto:${contact.creditEmail}`}
                className="link-arrow mt-3"
              >
                {contact.creditEmail}
                <Icon name="chevron_right" size={18} />
              </a>
            </div>
          </div>

          <CreditForm />
        </div>
      </section>
    </PageShell>
  );
}
