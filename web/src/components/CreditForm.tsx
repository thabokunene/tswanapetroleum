"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { products, services, provinces } from "@/lib/site";

export default function CreditForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-4xl bg-cloud p-12 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-teal text-white">
          <Icon name="check" size={32} strokeWidth={2.25} />
        </span>
        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-carbon">
          Application received.
        </h3>
        <p className="mt-3 max-w-md text-smoke">
          Thank you. Our credit desk will review your application and respond
          within two business days. We may request supporting documents such as
          company registration, VAT certificate, and bank details.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn-dark mt-8">
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-4xl bg-cloud p-8 sm:p-10"
    >
      {/* Company details */}
      <Fieldset title="Company details" icon="inventory">
        <Field label="Registered company name" name="company" required className="sm:col-span-2" />
        <Field label="Trading name" name="tradingName" />
        <Field label="Company registration no." name="regNo" required />
        <Field label="VAT number" name="vat" />
        <Field label="Years in operation" name="years" type="number" />
        <div className="sm:col-span-2">
          <Label>Business type</Label>
          <select name="businessType" className="ci" defaultValue="">
            <option value="" disabled>
              Select business type
            </option>
            {[
              "Private Company (Pty) Ltd",
              "Close Corporation (CC)",
              "Public Company (Ltd)",
              "Partnership",
              "Sole Proprietor",
              "Government / SOE",
            ].map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </Fieldset>

      {/* Contact & address */}
      <Fieldset title="Contact & address" icon="place">
        <Field label="Contact person" name="contactName" required />
        <Field label="Position / role" name="role" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Physical address" name="address" required className="sm:col-span-2" />
        <Field label="City / town" name="city" />
        <div>
          <Label>Province</Label>
          <select name="province" className="ci" defaultValue={provinces[0]}>
            {provinces.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </Fieldset>

      {/* Facility requested */}
      <Fieldset title="Credit facility requested" icon="request_quote">
        <Field
          label="Credit limit requested (ZAR)"
          name="creditLimit"
          placeholder="e.g. 2,500,000"
          required
        />
        <div>
          <Label>Payment terms requested</Label>
          <select name="terms" className="ci" defaultValue="">
            <option value="" disabled>
              Select terms
            </option>
            {["7 days", "14 days", "30 days", "COD (cash on delivery)"].map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <Field
          label="Estimated monthly spend (ZAR)"
          name="monthlySpend"
          placeholder="e.g. 1,800,000"
          className="sm:col-span-2"
        />
        <div className="sm:col-span-2">
          <Label>Products &amp; services required</Label>
          <div className="mt-2 grid gap-2.5 sm:grid-cols-2">
            {[...products.map((p) => p.name), ...services.map((s) => s.name)].map(
              (item) => (
                <label
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-2.5 text-sm text-carbon"
                >
                  <input
                    type="checkbox"
                    name="requirements"
                    value={item}
                    className="h-4 w-4 accent-teal"
                  />
                  {item}
                </label>
              )
            )}
          </div>
        </div>
      </Fieldset>

      {/* Trade & bank references */}
      <Fieldset title="Trade & bank references" icon="verified_user">
        <Field label="Bank name" name="bankName" />
        <Field label="Bank account number" name="bankAccount" />
        <Field label="Trade reference 1 (company & contact)" name="ref1" className="sm:col-span-2" />
        <Field label="Trade reference 2 (company & contact)" name="ref2" className="sm:col-span-2" />
        <div className="sm:col-span-2">
          <Label>Additional notes</Label>
          <textarea
            name="notes"
            rows={3}
            placeholder="Delivery sites, existing suppliers, or anything else we should know."
            className="ci resize-none"
          />
        </div>
      </Fieldset>

      {/* Consent */}
      <label className="mt-2 flex items-start gap-3 text-sm text-smoke">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 accent-teal"
        />
        <span>
          I confirm the information provided is accurate and authorise Tswana
          Petroleum Co. to conduct credit and trade-reference checks in line with
          the National Credit Act and POPIA.
        </span>
      </label>

      <button type="submit" className="btn-primary mt-7 w-full">
        Submit credit application
      </button>
      <p className="mt-3 text-center text-xs text-smoke">
        Supporting documents (company registration, VAT certificate, bank
        confirmation) may be requested after submission.
      </p>

      <style jsx>{`
        :global(.ci) {
          margin-top: 0.375rem;
          width: 100%;
          border-radius: 0.875rem;
          border: 1px solid rgba(0, 0, 0, 0.1);
          background: #fff;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: #1d1d1f;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        :global(.ci:focus) {
          border-color: #00a3a1;
          box-shadow: 0 0 0 3px rgba(0, 163, 161, 0.15);
        }
      `}</style>
    </form>
  );
}

function Fieldset({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ComponentProps<typeof Icon>["name"];
  children: React.ReactNode;
}) {
  return (
    <div className="mb-9">
      <div className="mb-4 flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal/10 text-teal">
          <Icon name={icon} size={18} />
        </span>
        <h3 className="text-base font-semibold tracking-tight text-carbon">
          {title}
        </h3>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">{children}</div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-xs font-medium uppercase tracking-wide text-smoke">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label>
        {label}
        {required && <span className="text-amber"> *</span>}
      </Label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="ci"
      />
    </div>
  );
}
