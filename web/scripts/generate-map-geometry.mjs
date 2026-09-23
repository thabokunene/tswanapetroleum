/**
 * generate-map-geometry.mjs
 * ---------------------------------------------------------------------------
 * Builds `src/lib/geography.ts` — the flat vector geometry used by the
 * national supply-network map on the homepage.
 *
 * Source data: Natural Earth 1:50m admin-0 country boundaries (public domain),
 * consumed through the npm mirrors `world-atlas` + `topojson-client`, which are
 * dev dependencies only — they are never shipped to the browser.
 *
 *     cd web && node scripts/generate-map-geometry.mjs
 *
 * What it does:
 *   1. Extracts South Africa (with its Lesotho/Eswatini enclave rings) and the
 *      surrounding neighbours.
 *   2. Simplifies each ring with Douglas–Peucker and drops specks/islands.
 *   3. Projects everything equirectangularly at latitude −29° onto a 760×620
 *      viewBox, so plain long/lat pairs can be projected with the same maths.
 *   4. Writes country paths, real depot coordinates and the primary corridor
 *      polylines as SVG path data.
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { feature } = require("topojson-client");
const topo = require("world-atlas/countries-50m.json");

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT_FILE = join(HERE, "..", "src", "lib", "geography.ts");

/* ------------------------------------------------------------------ */
/* 1. Country geometry                                                 */
/* ------------------------------------------------------------------ */
const find = (id) =>
  feature(
    topo,
    topo.objects.countries.geometries.find((g) => String(g.id) === id)
  ).geometry;

const SOUTH_AFRICA = find("710");
const LESOTHO = find("426");
const ESWATINI = find("748");
const NEIGHBOURS = ["516", "072", "716", "508"].map(find); // Namibia, Botswana, Zimbabwe, Mozambique

const polys = (geo) =>
  geo.type === "Polygon" ? [geo.coordinates] : geo.coordinates;

/* ------------------------------------------------------------------ */
/* 2. Projection                                                       */
/* ------------------------------------------------------------------ */
const LAT_REF = -29; // standard parallel for the latitude correction
const KX = Math.cos((LAT_REF * Math.PI) / 180);
const WIDTH = 760;
const HEIGHT = 620;
const PAD = 26;

/** Frame the map on South Africa's mainland extremities. */
function mainlandRing(geo) {
  return polys(geo)
    .slice()
    .sort((a, b) => b[0].length - a[0].length)[0][0];
}

const frame = mainlandRing(SOUTH_AFRICA);
const lons = frame.map((p) => p[0]);
const lats = frame.map((p) => p[1]);
const BBOX = [
  Math.min(...lons),
  Math.min(...lats),
  Math.max(...lons),
  Math.max(...lats),
];

const spanX = (BBOX[2] - BBOX[0]) * KX;
const spanY = BBOX[3] - BBOX[1];
const SCALE = Math.min((WIDTH - PAD * 2) / spanX, (HEIGHT - PAD * 2) / spanY);
const ORIGIN_X = (WIDTH - spanX * SCALE) / 2;
const ORIGIN_Y = (HEIGHT - spanY * SCALE) / 2;

const project = ([lon, lat]) => [
  ORIGIN_X + (lon - BBOX[0]) * KX * SCALE,
  ORIGIN_Y + (BBOX[3] - lat) * SCALE,
];

/* ------------------------------------------------------------------ */
/* 3. Simplification                                                   */
/* ------------------------------------------------------------------ */
function sqSegDist(p, a, b) {
  let x = a[0];
  let y = a[1];
  let dx = b[0] - x;
  let dy = b[1] - y;
  if (dx !== 0 || dy !== 0) {
    const t = ((p[0] - x) * dx + (p[1] - y) * dy) / (dx * dx + dy * dy);
    if (t > 1) {
      x = b[0];
      y = b[1];
    } else if (t > 0) {
      x += dx * t;
      y += dy * t;
    }
  }
  dx = p[0] - x;
  dy = p[1] - y;
  return dx * dx + dy * dy;
}

function dpStep(pts, first, last, sqTol, out) {
  let maxSq = sqTol;
  let idx = -1;
  for (let i = first + 1; i < last; i++) {
    const sq = sqSegDist(pts[i], pts[first], pts[last]);
    if (sq > maxSq) {
      idx = i;
      maxSq = sq;
    }
  }
  if (idx > 0) {
    if (idx - first > 1) dpStep(pts, first, idx, sqTol, out);
    out.push(pts[idx]);
    if (last - idx > 1) dpStep(pts, idx, last, sqTol, out);
  }
}

function simplify(pts, tol) {
  const out = [pts[0]];
  dpStep(pts, 0, pts.length - 1, tol * tol, out);
  out.push(pts[pts.length - 1]);
  return out;
}

function ringArea(pts) {
  let a = 0;
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i];
    const q = pts[(i + 1) % pts.length];
    a += p[0] * q[1] - q[0] * p[1];
  }
  return Math.abs(a / 2);
}

const round = (n) => Math.round(n * 10) / 10;

/** A ring is worth drawing only if it touches the framed canvas at all. */
function touchesFrame(pts) {
  const xs = pts.map((p) => p[0]);
  const ys = pts.map((p) => p[1]);
  return (
    Math.max(...xs) > -40 &&
    Math.min(...xs) < WIDTH + 40 &&
    Math.max(...ys) > -40 &&
    Math.min(...ys) < HEIGHT + 40
  );
}

/** Multi-ring countries: every ring is emitted (enclaves become holes). */
function toPath(geo, tol, dropBelow = 0) {
  const out = [];
  for (const poly of polys(geo)) {
    for (const ring of poly) {
      const projectedRing = ring.map(project);
      if (!touchesFrame(projectedRing)) continue;
      const simplified = simplify(projectedRing, tol);
      if (simplified.length < 4) continue;
      if (ringArea(simplified) < dropBelow) continue;
      out.push(
        "M" +
          simplified
            .map((p) => `${round(p[0])},${round(p[1])}`)
            .join("L") +
          "Z"
      );
    }
  }
  return out.join("");
}

/* ------------------------------------------------------------------ */
/* 4. Supply nodes (real coordinates) and corridors                    */
/* ------------------------------------------------------------------ */
const NODES = {
  saldanha: [17.9442, -33.0117],
  capeTown: [18.4241, -33.9249],
  mosselBay: [22.146, -34.183],
  coega: [25.67, -33.79],
  eastLondon: [27.9, -33.03],
  durban: [31.0218, -29.8587],
  richardsBay: [32.0376, -28.7807],
  johannesburg: [28.0473, -26.2041],
  sasolburg: [27.818, -26.812],
  rustenburg: [27.2423, -25.6672],
  polokwane: [29.452, -23.9045],
  mbombela: [30.9694, -25.4753],
  kimberley: [24.75, -28.73],
  bloemfontein: [26.2041, -29.0852],
  upington: [21.25, -28.45],
};

/** Real long/lat waypoints traced along the national freight routes. */
const ROUTES = [
  {
    id: "n1-south",
    name: "N1 · Cape Town to Johannesburg",
    nodes: ["capeTown", "bloemfontein", "sasolburg", "johannesburg"],
    via: [
      [20.8605, -33.1941], // Laingsburg
      [22.5829, -32.3564], // Beaufort West
      [23.7719, -31.4876], // Three Sisters
      [25.0978, -30.7195], // Colesberg
      [26.2041, -29.0852], // Bloemfontein
      [27.2333, -27.6667], // Kroonstad
      [27.818, -26.812], // Sasolburg
    ],
  },
  {
    id: "n1-north",
    name: "N1 · Johannesburg to Beitbridge",
    nodes: ["johannesburg", "polokwane"],
    via: [
      [28.1881, -25.7461], // Pretoria
      [28.2924, -24.8799], // Bela-Bela
      [29.452, -23.9045], // Polokwane
    ],
  },
  {
    id: "n3",
    name: "N3 · Durban to Johannesburg",
    nodes: ["durban", "johannesburg"],
    via: [
      [30.3931, -29.6006], // Pietermaritzburg
      [29.8703, -29.0042], // Estcourt
      [29.1306, -28.2679], // Harrismith
      [28.7500, -27.8546], // Warden
      [28.3600, -26.5037], // Heidelberg
    ],
  },
  {
    id: "n2-coast",
    name: "N2 · Garden Route to KwaZulu-Natal",
    nodes: [
      "capeTown",
      "mosselBay",
      "coega",
      "eastLondon",
      "durban",
    ],
    via: [
      [20.4400, -34.0217], // Swellendam
      [22.146, -34.183], // Mossel Bay
      [23.0472, -34.0363], // Knysna
      [24.7641, -34.0323], // Humansdorp
      [25.67, -33.79], // Coega
      [27.9, -33.03], // East London
      [28.7807, -31.5876], // Mthatha
      [30.4519, -30.7428], // Port Shepstone
    ],
  },
  {
    id: "n2-north",
    name: "N2 · Richards Bay to Durban",
    nodes: ["richardsBay", "durban"],
    via: [[31.8967, -28.7562]],
  },
  {
    id: "n7",
    name: "N7 · Cape Town to Saldanha Bay",
    nodes: ["capeTown", "saldanha"],
    via: [[18.4800, -33.3500]], // N7 north of the city
  },
  {
    id: "n4",
    name: "N4 · Mbombela to Gauteng",
    nodes: ["mbombela", "johannesburg"],
    via: [
      [30.4400, -25.6800], // Machadodorp
      [29.4635, -25.7702], // Middelburg
      [29.2000, -25.8800], // eMalahleni (Witbank)
      [28.1881, -25.7461], // Pretoria
    ],
  },
  {
    id: "n12",
    name: "N12 · Gauteng to Kimberley and Upington",
    nodes: ["johannesburg", "kimberley", "upington"],
    via: [
      [26.6601, -26.8700], // Klerksdorp
      [24.75, -28.73], // Kimberley
      [21.25, -28.45], // Upington
    ],
  },
  {
    id: "n4-west",
    name: "N4 · Platinum Belt",
    nodes: ["johannesburg", "rustenburg"],
    via: [
      [27.7697, -26.0980], // Krugersdorp
      [27.2423, -25.6672], // Rustenburg
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 5. Emit TypeScript                                                  */
/* ------------------------------------------------------------------ */
const nodeEntries = Object.entries(NODES).map(([id, coord]) => {
  const [x, y] = project(coord);
  return `  ${id}: { x: ${round(x)}, y: ${round(y)} },`;
});

const routeEntries = ROUTES.map((route) => {
  const points = [...route.via];
  const path = (points.length ? points : []).map(project);
  // Anchor the polyline to the node coordinates it connects.
  const first = project(NODES[route.nodes[0]]);
  const last = project(NODES[route.nodes[route.nodes.length - 1]]);
  const dedupe = (pts) =>
    pts.filter(
      (p, i) => i === 0 || p[0] !== pts[i - 1][0] || p[1] !== pts[i - 1][1]
    );
  const d =
    "M" +
    dedupe([first, ...path, last])
      .map((p) => `${round(p[0])},${round(p[1])}`)
      .join("L");
  return `  {
    id: ${JSON.stringify(route.id)},
    name: ${JSON.stringify(route.name)},
    nodes: ${JSON.stringify(route.nodes)},
    d: ${JSON.stringify(d)},
  },`;
}).join("\n");

const file = `/**
 * geography.ts — GENERATED FILE, DO NOT EDIT BY HAND.
 *
 * Flat vector geometry for the national supply-network map: South Africa and
 * its neighbours plus the primary road corridors between our supply hubs.
 *
 * Regenerate with:
 *   cd web
 *   npm i -D world-atlas topojson-client
 *   node scripts/generate-map-geometry.mjs
 *   npm uninstall world-atlas topojson-client
 *
 * Source: Natural Earth 1:50m admin-0 boundaries (public domain), simplified
 * with Douglas–Peucker and projected equirectangularly at latitude −29°.
 * Coordinates are on a ${WIDTH}×${HEIGHT} viewBox.
 */

export const MAP_WIDTH = ${WIDTH};
export const MAP_HEIGHT = ${HEIGHT};

/** Country outlines. South Africa carries its Lesotho/Eswatini enclave rings. */
export const mapPaths = {
  neighbours: "${toPath(NEIGHBOURS[0], 0.9)}${toPath(NEIGHBOURS[1], 0.9)}${toPath(NEIGHBOURS[2], 0.9)}${toPath(NEIGHBOURS[3], 0.9)}",
  southAfrica: "${toPath(SOUTH_AFRICA, 0.55)}",
  lesotho: "${toPath(LESOTHO, 0.35)}",
  eswatini: "${toPath(ESWATINI, 0.35)}",
};

/** Supply-hub positions, keyed by the node ids used in \`site.ts\`. */
export const nodePositions: Record<string, { x: number; y: number }> = {
${nodeEntries.join("\n")}
};

export type CorridorRoute = {
  id: string;
  name: string;
  /** Node ids this corridor touches, used to highlight the active network. */
  nodes: string[];
  /** SVG path data. */
  d: string;
};

export const corridorRoutes: CorridorRoute[] = [
${routeEntries}
];
`;

mkdirSync(dirname(OUT_FILE), { recursive: true });
writeFileSync(OUT_FILE, file);
console.log(
  `geography.ts written — ${Object.keys(NODES).length} nodes, ${ROUTES.length} corridors, ${file.length.toLocaleString()} bytes`
);
