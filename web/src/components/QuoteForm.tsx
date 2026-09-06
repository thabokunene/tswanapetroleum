"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Icon from "@/components/Icon";
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
      <div className="flex flex-col items-center justify-center rounded-4xl bg-cloud p-12 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-teal text-white">
          <Icon name="check" size={32} strokeWidth={2.25} />
        </span>
        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-carbon">
          Request received.
        </h3>
        <p className="mt-3 max-w-sm text-smoke">
          A member of our commercial supply team will be in touch within one
          business day. For urgent supply, call our 24/7 line.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn-dark mt-8">
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
      className="rounded-4xl bg-cloud p-8 sm:p-10"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-carbon">
        Request a wholesale quote
      </h2>
      <p className="mt-2 text-sm text-smoke">
        Tell us what you need and we&apos;ll respond with CEF / BFP-aligned
        pricing.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Company" name="company" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />

        <div className="sm:col-span-2">
          <Label>Product of interest</Label>
          <select
            name="product"
            className="input"
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
            className="input resize-none"
          />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-7 w-full">
        Send request
      </button>
      <p className="mt-3 text-center text-xs text-smoke">
        By submitting, you agree to be contacted about your enquiry.
      </p>

      <style jsx>{`
        :global(.input) {
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
        :global(.input:focus) {
          border-color: #00a3a1;
          box-shadow: 0 0 0 3px rgba(0, 163, 161, 0.15);
        }
      `}</style>
    </form>
  );
}

export default function QuoteForm() {
  return (
    <Suspense
      fallback={
        <div className="rounded-4xl bg-cloud p-10">
          <div className="h-6 w-48 animate-pulse rounded bg-white" />
        </div>
      }
    >
      <QuoteFormInner />
    </Suspense>
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
        className="input"
      />
    </div>
  );
}
