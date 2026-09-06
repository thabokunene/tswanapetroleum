"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/site";

function QuoteFormInner() {
  const params = useSearchParams();
  const [submitted, setSubmitted] = useState(false);

  const presetProduct = params.get("product") ?? "";
  const presetVolume = params.get("volume")?.replace(/ L \/ kg| L/g, "") ?? "";
  const presetProvince = params.get("province") ?? "";
  const presetDelivery = params.get("delivery") ?? "";
  const presetMessage = presetDelivery
    ? `Preferred delivery: ${presetDelivery}${
        presetProvince ? ` · Destination: ${presetProvince}` : ""
      }`
    : "";

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl bg-brand-gradient p-12 text-center text-white">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-3xl">
          ✓
        </span>
        <h3 className="mt-6 text-2xl font-semibold">
          Thank you — request received.
        </h3>
        <p className="mt-3 max-w-sm font-body text-white/85">
          A member of our commercial supply team will be in touch within one
          business day. For urgent supply, call our 24/7 line.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn-outline mt-8">
          Submit another request
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
      className="rounded-3xl border border-navy/5 bg-white p-8 shadow-card"
    >
      <h2 className="text-2xl font-semibold text-navy">Request a Wholesale Quote</h2>
      <p className="mt-2 font-body text-sm text-carbon/60">
        Tell us what you need and we&apos;ll respond with CEF / BFP-aligned
        pricing.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Company" name="company" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />

        <div className="sm:col-span-2">
          <Label>Product of interest</Label>
          <select
            name="product"
            className="mt-1.5 w-full rounded-xl border border-navy/15 bg-cloud px-4 py-3 text-sm text-navy outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
            defaultValue={presetProduct || ""}
          >
            <option value="" disabled>
              Select a product…
            </option>
            {products.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Multiple / Other">Multiple / Other</option>
          </select>
        </div>

        <Field
          label="Estimated volume (litres / kg per month)"
          name="volume"
          placeholder="e.g. 50,000"
          defaultValue={presetVolume}
          className="sm:col-span-2"
        />

        <div className="sm:col-span-2">
          <Label>Message</Label>
          <textarea
            name="message"
            rows={4}
            defaultValue={presetMessage}
            placeholder="Delivery location, timing, and any special requirements…"
            className="mt-1.5 w-full rounded-xl border border-navy/15 bg-cloud px-4 py-3 text-sm text-navy outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
          />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-7 w-full">
        Send Request
      </button>
      <p className="mt-3 text-center font-body text-xs text-carbon/50">
        By submitting, you agree to be contacted about your enquiry.
      </p>
    </form>
  );
}

export default function QuoteForm() {
  return (
    <Suspense
      fallback={
        <div className="rounded-3xl border border-navy/5 bg-white p-8 shadow-card">
          <div className="h-6 w-48 animate-pulse rounded bg-cloud" />
        </div>
      }
    >
      <QuoteFormInner />
    </Suspense>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-xs font-bold uppercase tracking-wide text-carbon/60">
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
  defaultValue,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
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
        defaultValue={defaultValue}
        className="mt-1.5 w-full rounded-xl border border-navy/15 bg-cloud px-4 py-3 text-sm text-navy outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
      />
    </div>
  );
}
