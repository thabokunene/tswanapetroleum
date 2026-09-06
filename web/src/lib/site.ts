export const nav = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Why Us", href: "/#advantage" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Contact", href: "/contact" },
];

export const contact = {
  phone: "+27 (0) 11 000 0000",
  email: "sales@tswanapetroleum.co.za",
  office: "Sandton, Gauteng, South Africa",
  hours: "Mon–Fri 07:00–17:00 · Emergency Supply 24/7",
};

export type Product = {
  slug: string;
  icon: string;
  name: string;
  short: string;
  headline: string;
  intro: string;
  spec: string;
  bullets: { title: string; items: string[] }[];
  applications: string[];
};

export const products: Product[] = [
  {
    slug: "diesel",
    icon: "⛽",
    name: "Diesel (50ppm & 500ppm)",
    short: "Ultra-low-sulphur and industrial-grade diesel to SANS 342.",
    headline: "High-Performance Diesel for Heavy-Duty Demands",
    intro:
      "Tswana Petroleum Co. supplies both 50ppm ultra-low-sulphur diesel and 500ppm industrial-grade diesel sourced from South Africa's leading refineries and import terminals. Our diesel meets SANS 342 specifications.",
    spec: "SANS 342",
    applications: [
      "Long-haul logistics and fleet operations",
      "Mining and earthmoving equipment",
      "Agricultural machinery",
      "Backup power generation",
    ],
    bullets: [
      {
        title: "Why Choose Tswana Diesel?",
        items: [
          "Consistent cetane ratings for optimal combustion",
          "Bulk and scheduled delivery options",
          "Real-time pricing linked to the Central Energy Fund (CEF) slate",
          "Cold-flow additives available for high-altitude operations",
        ],
      },
    ],
  },
  {
    slug: "petrol",
    icon: "⛽",
    name: "Petrol (93 & 95 Octane)",
    short: "Lead-free 93 & 95 octane unleaded petrol to SANS 228.",
    headline: "Premium Petrol. Wholesale Scale. Retail Reach.",
    intro:
      "We distribute 93 and 95 octane unleaded petrol compliant with SANS 228 specifications to independent retail stations, commercial depots, and government fleets across all nine provinces.",
    spec: "SANS 228",
    applications: [
      "Independent retail stations",
      "Commercial depots",
      "Government and municipal fleets",
      "Forecourt supply networks",
    ],
    bullets: [
      {
        title: "Key Advantages",
        items: [
          "Lead-free, low-benzene formulations",
          "Consistent octane stability during storage and transit",
          "Flexible offtake agreements (spot and contract)",
          "Full traceability from refinery to forecourt",
        ],
      },
    ],
  },
  {
    slug: "lpg",
    icon: "🔥",
    name: "Gas & LPG",
    short: "Clean-burning liquefied petroleum gas for industry, commerce and home.",
    headline: "Clean-Burning LPG for Industry, Commerce, and Home",
    intro:
      "As South Africa accelerates its shift toward cleaner fuels, LPG stands at the forefront. Tswana Petroleum Co. supplies bulk and cylinder-ready LPG across sectors.",
    spec: "SANS 1528 · PER",
    applications: [
      "Industrial heating and processing",
      "Commercial kitchens and hospitality",
      "Residential heating and cooking",
      "Autogas (LPG vehicle conversions)",
    ],
    bullets: [
      {
        title: "Our LPG Promise",
        items: [
          "Propane/butane blends tailored to your application",
          "Compliant with SANS 1528 and Pressure Equipment Regulations (PER)",
          "Bulk tanker and cylinder exchange programmes",
          "Dedicated safety training for your handling teams",
        ],
      },
    ],
  },
  {
    slug: "hydrogen",
    icon: "💧",
    name: "Hydrogen",
    short: "Industrial and fuel-cell-grade hydrogen — the fuel of the future.",
    headline: "The Fuel of the Future — Available Today",
    intro:
      "Tswana Petroleum Co. is proud to be among the first South African wholesalers to offer industrial and fuel-cell-grade hydrogen. As the nation leverages its platinum-group-metal advantage for green hydrogen production, we are building the supply infrastructure to match.",
    spec: "Fuel-cell grade",
    applications: [
      "Fuel-cell electric vehicles (FCEVs) and heavy transport",
      "Mining haul trucks and underground ventilation",
      "Industrial feedstock (ammonia, methanol, refining)",
      "Power generation and grid balancing",
    ],
    bullets: [
      {
        title: "Our Hydrogen Roadmap",
        items: [
          "Phase 1: Grey and blue hydrogen supply for industrial clients",
          "Phase 2: Green hydrogen partnerships with Northern Cape and Limpopo producers",
          "Phase 3: Integrated hydrogen refuelling station (HRS) network",
        ],
      },
    ],
  },
  {
    slug: "heavy-furnace-oil",
    icon: "🏭",
    name: "Heavy Furnace Oil (HFO)",
    short: "Maximum heat, minimum cost — industrial-grade furnace oil.",
    headline: "Maximum Heat. Minimum Cost. Industrial-Grade HFO.",
    intro:
      "Our Heavy Furnace Oil is engineered for high-temperature industrial processes where energy density and cost efficiency are paramount.",
    spec: "180 & 380 cSt",
    applications: [
      "Cement and brick kilns",
      "Steel and metal smelting",
      "Power station boiler fuel",
      "Marine bunker fuel (IFO 180 / IFO 380 grades)",
    ],
    bullets: [
      {
        title: "Specifications & Service",
        items: [
          "Viscosity grades: 180 cSt and 380 cSt",
          "Sulphur content compliant with IMO 2020 and local regulations",
          "Heated tanker delivery to maintain flow properties",
          "Long-term supply contracts with price-hedging options",
        ],
      },
    ],
  },
  {
    slug: "light-blending-fuel",
    icon: "🛢️",
    name: "Light Blending Fuel (LBF)",
    short: "Precision blending components for refiners and distributors.",
    headline: "Precision Blending Components for Refiners and Distributors",
    intro:
      "Tswana Petroleum Co. supplies Light Blending Fuel (LBF) — a critical intermediate product used in the formulation of diesel, heating oil, and other distillate blends.",
    spec: "CoA supplied",
    applications: [
      "Independent fuel blenders and compounders",
      "Small-scale refineries and modular processing units",
      "Fuel traders and export terminals",
    ],
    bullets: [
      {
        title: "Product Highlights",
        items: [
          "Consistent distillation curve and flash point",
          "Low sediment and water content",
          "Customisable blend ratios on request",
          "Certificate of Analysis (CoA) with every delivery",
        ],
      },
    ],
  },
];

export const values = [
  { letter: "T", value: "Trust", desc: "Every litre delivered is measured, certified, and accounted for." },
  { letter: "S", value: "Safety", desc: "Zero-harm operations across storage, handling, and transport." },
  { letter: "W", value: "Wholesale Excellence", desc: "Unmatched logistics, volume capacity, and pricing transparency." },
  { letter: "A", value: "Accountability", desc: "Full regulatory compliance with SANS, NERSA, and DFFE standards." },
  { letter: "N", value: "Next-Gen Energy", desc: "Pioneering hydrogen, LPG, and low-carbon fuel solutions." },
  { letter: "A", value: "African Pride", desc: "Rooted in South Africa, scaling across the continent." },
];

export const advantages = [
  { icon: "📍", title: "Strategic Locations", detail: "Depots and storage facilities near key industrial hubs — Gauteng, KZN, Mpumalanga, and the Western Cape." },
  { icon: "🚛", title: "Reliable Logistics", detail: "A vetted fleet of Hazchem-certified road tankers with GPS-tracked, real-time delivery monitoring." },
  { icon: "💰", title: "Competitive Pricing", detail: "Transparent, CEF-linked pricing with volume discounts and flexible payment terms." },
  { icon: "📋", title: "Full Compliance", detail: "Licensed under the Petroleum Products Act (Act 120 of 1977). B-BBEE compliant. ISO 9001 & 14001 aligned." },
  { icon: "🌱", title: "Sustainability Focus", detail: "Actively expanding our clean energy portfolio — hydrogen, LPG, and biofuel blending." },
  { icon: "🤝", title: "Partnership Approach", detail: "Dedicated account managers, 24/7 supply support, and custom offtake agreements." },
];
