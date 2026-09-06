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

  const pct = ((volume - 10_000) / (1_000_000 - 10_000)) * 100;

  const quoteHref =
    `/contact?product=${encodeURIComponent(product)}` +
    `&volume=${encodeURIComponent(formatVolume(volume))}` +
    `&province=${encodeURIComponent(province)}` +
    `&delivery=${encodeURIComponent(delivery)}`;

  return (
    <div className="rounded-4xl bg-cloud p-8 sm:p-10">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label className="text-xs font-medium uppercase tracking-wide text-smoke">
            1 · Product category
          </label>
          <select
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="est-input"
          >
            {products.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs font-medium uppercase tracking-wide text-smoke">
            3 · Destination province
          </label>
          <select
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            className="est-input"
          >
            {provinces.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium uppercase tracking-wide text-smoke">
              2 · Estimated monthly volume
            </label>
            <span className="text-lg font-semibold tracking-tight text-teal">
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
            className="mt-4 h-1.5 w-full cursor-pointer appearance-none rounded-full accent-teal"
            style={{
              background: `linear-gradient(90deg, #00A3A1 ${pct}%, #E2E2E7 ${pct}%)`,
            }}
          />
          <div className="mt-1.5 flex justify-between text-xs text-smoke">
            <span>10,000 L</span>
            <span>1,000,000+ L / kg</span>
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="text-xs font-medium uppercase tracking-wide text-smoke">
            4 · Delivery mechanism
          </label>
          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            {deliveryModes.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setDelivery(m)}
                className={`rounded-2xl border px-4 py-3.5 text-left text-sm font-medium transition-all duration-300 ease-apple ${
                  delivery === m
                    ? "border-teal bg-white text-carbon shadow-soft"
                    : "border-black/10 bg-white/50 text-smoke hover:border-teal/40"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Link href={quoteHref} className="btn-primary mt-8 w-full">
        Generate commercial quotation
      </Link>

      <style jsx>{`
        :global(.est-input) {
          margin-top: 0.5rem;
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
        :global(.est-input:focus) {
          border-color: #00a3a1;
          box-shadow: 0 0 0 3px rgba(0, 163, 161, 0.15);
        }
      `}</style>
    </div>
  );
}
