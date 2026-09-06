import type { Metadata } from "next";
import PageShell, { PageHero } from "@/components/PageShell";
import CookiePreferencesButton from "@/components/CookiePreferencesButton";
import { company, contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Statement",
  description:
    "How Tswana Petroleum Co. collects, uses, protects and shares your personal information, in line with the Protection of Personal Information Act (POPIA).",
};

const lastUpdated = "6 September 2026";

export default function PrivacyStatementPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Legal"
        title="Privacy Statement"
        subtitle="How we collect, use, protect and share your personal information."
      />

      <section className="section bg-white">
        <div className="container-narrow">
          <p className="text-sm text-smoke">Last updated: {lastUpdated}</p>

          <div className="prose-legal mt-8 space-y-10">
            <Block title="1. Who we are">
              <p>
                {company.legalName} (&ldquo;{company.tradingName}&rdquo;,
                &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) is a
                licensed bulk petroleum wholesaler incorporated in the{" "}
                {company.jurisdiction}. We are the responsible party (data
                controller) for the personal information described in this
                statement.
              </p>
            </Block>

            <Block title="2. Scope">
              <p>
                This Privacy Statement applies to personal information we process
                through this website, our quote and credit-application forms, and
                related commercial dealings. It should be read together with our
                cookie preferences, which you can change at any time.
              </p>
            </Block>

            <Block title="3. Information we collect">
              <ul>
                <li>
                  <strong>Contact &amp; business details</strong> you provide
                  through the Request a Quote and Credit Application forms
                  (name, company, role, email, phone, physical address).
                </li>
                <li>
                  <strong>Commercial &amp; credit information</strong> such as
                  company registration and VAT numbers, requested credit limits,
                  estimated volumes, bank and trade references.
                </li>
                <li>
                  <strong>Technical &amp; usage data</strong> such as IP address,
                  browser type, pages visited and referring URLs, collected via
                  cookies and similar technologies where you have consented.
                </li>
              </ul>
            </Block>

            <Block title="4. How we use your information">
              <ul>
                <li>To respond to enquiries and prepare wholesale quotes.</li>
                <li>
                  To assess and administer credit applications, including credit
                  and trade-reference checks as authorised by you.
                </li>
                <li>To fulfil supply contracts, deliveries and billing.</li>
                <li>
                  To operate, secure and improve our website and services.
                </li>
                <li>
                  To send you relevant communications, where you have consented
                  or where permitted by law.
                </li>
                <li>To comply with our legal and regulatory obligations.</li>
              </ul>
            </Block>

            <Block title="5. Lawful basis (POPIA)">
              <p>
                We process personal information under one or more of the
                following justifications recognised by the Protection of Personal
                Information Act, 2013 (POPIA): your consent; the conclusion or
                performance of a contract; compliance with a legal obligation; or
                our legitimate interests balanced against your rights.
              </p>
            </Block>

            <Block title="6. Cookies">
              <p>
                We use cookies that are strictly necessary for the site to
                function, and — only with your consent — analytics and marketing
                cookies to understand site usage and assist our marketing
                efforts. You can accept, reject or customise non-essential
                cookies at any time.
              </p>
              <p className="mt-4">
                <CookiePreferencesButton />
              </p>
            </Block>

            <Block title="7. Sharing your information">
              <p>
                We may share personal information with service providers acting
                on our behalf (for example, credit bureaux, trade referees, IT
                and logistics providers), and with authorities where required by
                law. We require third parties to protect your information and to
                process it only for the purposes we specify.
              </p>
            </Block>

            <Block title="8. Cross-border transfers">
              <p>
                Where personal information is transferred outside the Republic of
                South Africa, we take reasonable steps to ensure it receives a
                level of protection consistent with POPIA.
              </p>
            </Block>

            <Block title="9. Retention">
              <p>
                We keep personal information only for as long as necessary to
                fulfil the purposes described here, including to satisfy legal,
                accounting, tax or reporting requirements, after which it is
                securely deleted or anonymised.
              </p>
            </Block>

            <Block title="10. Security">
              <p>
                We maintain appropriate technical and organisational measures to
                protect personal information against unauthorised access, loss or
                misuse. No method of transmission or storage is completely
                secure, but we work to protect your information and to notify you
                and the Regulator of material breaches as required by law.
              </p>
            </Block>

            <Block title="11. Your rights">
              <p>
                Subject to POPIA, you have the right to access your personal
                information, to request correction or deletion, to object to
                certain processing, and to withdraw consent at any time. You also
                have the right to lodge a complaint with the Information
                Regulator (South Africa).
              </p>
            </Block>

            <Block title="12. Contact us">
              <p>
                To exercise your rights or for any privacy query, contact our
                Information Officer:
              </p>
              <ul>
                <li>
                  Email:{" "}
                  <a
                    href={`mailto:${contact.complianceEmail}`}
                    className="text-teal underline underline-offset-2"
                  >
                    {contact.complianceEmail}
                  </a>
                </li>
                <li>Phone: {contact.phone}</li>
                <li>Address: {contact.office}</li>
              </ul>
            </Block>

            <Block title="13. Changes to this statement">
              <p>
                We may update this Privacy Statement from time to time. The
                &ldquo;Last updated&rdquo; date above reflects the latest
                revision. Material changes will be brought to your attention where
                appropriate.
              </p>
            </Block>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold tracking-tight text-carbon">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[0.95rem] leading-relaxed text-smoke [&_a]:font-medium [&_li]:ml-1 [&_strong]:text-carbon [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </div>
  );
}
