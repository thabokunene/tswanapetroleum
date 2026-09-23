"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { corridors } from "@/lib/site";
import {
  MAP_HEIGHT,
  MAP_WIDTH,
  corridorRoutes,
  mapPaths,
  nodePositions,
} from "@/lib/geography";

/**
 * National supply-network map.
 *
 * Country geometry and corridor polylines are generated from Natural Earth
 * data (see scripts/generate-map-geometry.mjs); the corridor dossiers come from
 * `site.ts`. Selecting a corridor highlights its road network and its supply
 * nodes, and swaps the dossier panel on the right.
 */
export default function NetworkMap() {
  const [activeId, setActiveId] = useState(corridors[0].id);
  const active = useMemo(
    () => corridors.find((c) => c.id === activeId) ?? corridors[0],
    [activeId]
  );

  const activeRoutes = new Set(active.routes);
  const activeNodes = new Set(active.nodes);

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
      {/* ---------------------------------------------------------------- map */}
      <div className="lg:col-span-8">
        <div className="border border-white/10 bg-navy-ink p-3 sm:p-6">
          <svg
            viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
            className="h-auto w-full"
            role="img"
            aria-label={`Supply network map of South Africa showing the ${
              active.label
            } corridor between ${active.terminals.join(", ")}.`}
          >
            <defs>
              <clipPath id="network-frame">
                <rect x="0" y="0" width={MAP_WIDTH} height={MAP_HEIGHT} />
              </clipPath>
            </defs>

            <g clipPath="url(#network-frame)">
              {/* neighbouring states */}
              <path
                d={mapPaths.neighbours}
                fill="#04203c"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="1"
              />
              {/* South Africa — the enclave rings punch out Lesotho/Eswatini */}
              <path
                d={mapPaths.southAfrica}
                fillRule="evenodd"
                fill="rgba(0,163,161,0.14)"
                stroke="rgba(0,196,179,0.55)"
                strokeWidth="1.1"
              />
              <path
                d={mapPaths.lesotho}
                fill="#04203c"
                stroke="rgba(255,255,255,0.09)"
                strokeWidth="0.9"
              />
              <path
                d={mapPaths.eswatini}
                fill="#04203c"
                stroke="rgba(255,255,255,0.09)"
                strokeWidth="0.9"
              />

              {/* corridors: inactive first so the active line sits on top */}
              {corridorRoutes.map((route) => {
                const isActive = activeRoutes.has(route.id);
                return (
                  <path
                    key={route.id}
                    d={route.d}
                    fill="none"
                    stroke={isActive ? "#F5A623" : "rgba(255,255,255,0.22)"}
                    strokeWidth={isActive ? 2.4 : 1}
                    strokeDasharray={isActive ? undefined : "3 4"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <title>{route.name}</title>
                  </path>
                );
              })}

              {/* supply nodes */}
              {Object.entries(nodePositions).map(([id, p]) => {
                const isActive = activeNodes.has(id);
                return (
                  <g key={id}>
                    {isActive && (
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r={11}
                        fill="none"
                        stroke="rgba(0,196,179,0.4)"
                        strokeWidth="1"
                      />
                    )}
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={isActive ? 4.6 : 3}
                      fill={isActive ? "#00C4B3" : "rgba(255,255,255,0.75)"}
                      stroke="#00162F"
                      strokeWidth="1.6"
                    />
                  </g>
                );
              })}
            </g>
          </svg>
        </div>

        {/* corridor index */}
        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Supply corridors">
          {corridors.map((c) => {
            const isActive = c.id === activeId;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveId(c.id)}
                aria-pressed={isActive}
                className={`border px-3 py-2 text-left font-display text-[0.6875rem] font-semibold uppercase tracking-[0.08em] transition-colors duration-300 ${
                  isActive
                    ? "border-teal bg-teal/15 text-white"
                    : "border-white/15 text-white/55 hover:border-white/40 hover:text-white"
                }`}
              >
                {c.roads}
                <span className="ml-2 font-normal text-white/55">{c.distance}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ------------------------------------------------------------ dossier */}
      <div className="lg:col-span-4">
        <div className="h-full border-l border-white/10 pl-6 lg:pl-8">
          <p className="font-display text-[0.6875rem] font-bold uppercase tracking-label text-teal-light">
            Corridor dossier
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white">
            {active.label}
          </h3>
          <p className="mt-1 font-body text-sm text-white/50">{active.roads}</p>

          <hr className="my-6 border-white/10" />

          <dl>
            <div className="flex items-baseline justify-between gap-4 border-b border-white/10 py-3">
              <dt className="field-label text-white/60">Distance</dt>
              <dd className="field-value text-white">{active.distance}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 border-b border-white/10 py-3">
              <dt className="field-label text-white/60">Transit</dt>
              <dd className="field-value text-white">{active.transit}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 border-b border-white/10 py-3">
              <dt className="field-label text-white/60">Modes</dt>
              <dd className="field-value text-white">Road tanker</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 border-b border-white/10 py-3">
              <dt className="field-label text-white/60">Lanes</dt>
              <dd className="field-value max-w-[60%] text-white">{active.lanes}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 border-b border-white/10 py-3">
              <dt className="field-label text-white/60">Supply points</dt>
              <dd className="field-value max-w-[60%] text-white">
                {active.terminals.join(" · ")}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 border-b border-white/10 py-3">
              <dt className="field-label text-white/60">Duty</dt>
              <dd className="field-value max-w-[60%] text-white">
                Bonded and duty-suspended available
              </dd>
            </div>
          </dl>

          <div className="mt-6">
            <p className="field-label text-white/60">Products carried</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {active.products.map((product) => (
                <li
                  key={product}
                  className="border border-white/15 px-2.5 py-1 font-body text-[0.75rem] text-white/70"
                >
                  {product}
                </li>
              ))}
            </ul>
          </div>

          <Link href="/contact" className="link-arrow link-arrow-invert mt-8">
            Request this corridor
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>

          <p className="mt-6 font-body text-[0.7rem] leading-relaxed text-white/50">
            Distances are road kilometres between named supply points and are
            indicative; transit times assume compliant driver hours and standard
            border and weighbridge conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
