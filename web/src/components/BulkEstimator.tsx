"use client";

import { useState } from "react";
import Link from "next/link";
import { products, provinces } from "@/lib/site";

const deliveryModes = [
  "Delivered At Place (DAP) via Tanker",
  "Free On Board (FOB) Depot Collection",
];

function formatVolume(v: number) {
  if (v >= 1_000_000) return "1,000,000+ L / kg";
  return `${v.toLocaleString("en-ZA")} L / kg`;
}

export default function BulkEstimator() {
  const [product, setProduct] = useState(products[0].name);
  const [volume, setVolume] = useState(50_000);
  const [province, setProvince] = useState(provinces[0]);
  const [delivery, setDelivery] = useState(deliveryModes[0]);

  const quoteHref =
    `/contact?product=${encodeURIComponent(product)}` +
    `&volume=${encodeURIComponent(formatVolume(volume))}` +
    `&province=${encodeURIComponent(province)}` +
    `&delivery=${encodeURIComponent(delivery)}`;

  return (
    <div className="rounded-3xl border border-navy/5 bg-white p-8 shadow-card md:p-10">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Product category */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wide text-carbon/60">
            1. Product category
          </label>
          <select
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="mt-2 w-full rounded-xl border border-navy/15 bg-cloud px-4 py-3 text-sm text-navy outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
          >
            {products.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        {/* Destination province */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wide text-carbon/60">
            3. Destination province
          </label>
          <select
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            className="mt-2 w-full rounded-xl border border-navy/15 bg-cloud px-4 py-3 text-sm text-navy outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
          >
            {provinces.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* Volume slider */}
        <div className="md:col-span-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wide text-carbon/60">
              2. Estimated monthly volume
            </label>
            <span className="font-heading text-lg font-semibold text-teal">
              {formatVolume(volume)}
            </span>
          </div>
          <input
            type="range"
            min={10_000}
            max={1_000_000}
            step={10_000}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-cloud accent-teal"
            style={{
              background: `linear-gradient(90deg, #00A3A1 ${
                ((volume - 10_000) / (1_000_000 - 10_000)) * 100
              }%, #E2E8ED ${((volume - 10_000) / (1_000_000 - 10_000)) * 100}%)`,
            }}
          />
          <div className="mt-1 flex justify-between text-xs text-carbon/50">
            <span>10,000 L</span>
            <span>1,000,000+ L / kg</span>
          </div>
        </div>

        {/* Delivery mechanism */}
        <div className="md:col-span-2">
          <label className="text-xs font-bold uppercase tracking-wide text-carbon/60">
            4. Delivery mechanism
          </label>
          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            {deliveryModes.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setDelivery(m)}
                className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                  delivery === m
                    ? "border-teal bg-teal/10 text-navy"
                    : "border-navy/15 bg-cloud text-carbon/70 hover:border-teal/40"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Link href={quoteHref} className="btn-primary mt-8 w-full">
        Generate Commercial Quotation
      </Link>
    </div>
  );
}
