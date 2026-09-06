import type { IconName } from "@/components/Icon";

export const company = {
  legalName: "Tswana Petroleum Company (Pty) Ltd",
  tradingName: "Tswana Petroleum Co.",
  tagline: "Powering South Africa. Fuelling the Future.",
  jurisdiction: "Republic of South Africa",
};

/* ------------------------------------------------------------------ */
/* Global trading & import positioning                                 */
/* ------------------------------------------------------------------ */
export const tradingIntro =
  "Tswana Petroleum Co. is an importer and international trader of crude oil and refined petroleum products. We move volume from the world's primary supply basins to the African market, connecting Gulf, West African, North Sea and US Gulf Coast cargoes with inland demand through owned and partnered terminal, pipeline and road-tanker infrastructure.";

export const importCapabilities: {
  icon: IconName;
  title: string;
  detail: string;
}[] = [
  {
    icon: "public",
    title: "Crude Oil Importing",
    detail:
      "We source and import crude oil grades, from light sweet to medium sour, arranging CIF and FOB cargoes, chartering, and discharge at South African and regional import terminals.",
  },
  {
    icon: "oil_barrel",
    title: "Refined Product Trading",
    detail:
      "Physical trading of gasoil, gasoline, jet fuel, fuel oil and naphtha in cargo and parcel sizes, backed by rigorous quality verification and independent inspection at load and discharge.",
  },
  {
    icon: "directions_boat",
    title: "Marine Freight & Chartering",
    detail:
      "Vessel chartering from VLCC and Suezmax crude carriers to clean-product tankers, with laytime, demurrage and voyage management handled end to end.",
  },
  {
    icon: "warehouse",
    title: "Import Terminal & Storage",
    detail:
      "Discharge, bonded storage and throughput at coastal import terminals, with blending, tank-farm capacity and inland distribution into the hinterland.",
  },
  {
    icon: "account_balance",
    title: "Trade Finance & Structuring",
    detail:
      "Letters of credit, structured pre-payment and off-take agreements that unlock large cargoes while managing counterparty, price and currency risk.",
  },
  {
    icon: "policy",
    title: "Risk & Compliance",
    detail:
      "Full KYC, sanctions screening, customs and excise compliance, and price-risk hedging against Platts and ICE benchmarks on every transaction.",
  },
];

export const sourcingOrigins: { region: string; note: string }[] = [
  { region: "Arabian Gulf", note: "Medium sour crude & middle distillates" },
  { region: "West Africa", note: "Light sweet crude grades" },
  { region: "North Sea", note: "Benchmark light sweet crude" },
  { region: "US Gulf Coast", note: "Crude & refined product cargoes" },
  { region: "Mediterranean", note: "Gasoil, gasoline & fuel oil" },
  { region: "India & Singapore", note: "Refined product arbitrage" },
];

export const nav = [
  { label: "Trading & Importing", href: "/trading" },
  {
    label: "Products & Fuels",
    href: "/products",
  },
  { label: "Services", href: "/services" },
  { label: "Quality & Compliance", href: "/compliance" },
  { label: "Just Energy Transition", href: "/sustainability" },
  { label: "CSI", href: "/csi" },
  { label: "About Us", href: "/about" },
  {
    label: "Supplier Connect",
    href: "https://mubadalaenergy.com/supplier-connect/",
    external: true,
  },
  { label: "Contact", href: "/contact" },
];

export const contact = {
  phone: "+27 (0) 71 111 1630",
  supplyEmail: "fuels@tswanapetroleum.co.za",
  salesEmail: "sales@tswanapetroleum.co.za",
  complianceEmail: "compliance@tswanapetroleum.co.za",
  creditEmail: "credit@tswanapetroleum.co.za",
  office: "Johannesburg, Gauteng, South Africa",
  hours: "Mon to Fri 07:00 to 17:00 · Emergency Supply 24/7",
};

export const provinces = [
  "Gauteng",
  "KwaZulu-Natal",
  "Mpumalanga",
  "Limpopo",
  "North West",
  "Free State",
  "Northern Cape",
  "Eastern Cape",
  "Western Cape",
];

/* ------------------------------------------------------------------ */
/* Brand architecture                                                  */
/* ------------------------------------------------------------------ */
export const brandArchitecture: {
  group: string;
  icon: IconName;
  items: string[];
}[] = [
  {
    group: "Conventional Fuels",
    icon: "local_gas_station",
    items: ["Diesel 50ppm", "Diesel 500ppm", "Petrol 93 / 95", "Illuminating Paraffin"],
  },
  {
    group: "Industrial Heavy Fuels",
    icon: "factory",
    items: ["Heavy Furnace Oil", "Light Blending Fuel (LBF)", "Solvents"],
  },
  {
    group: "Next-Gen & Clean Energy",
    icon: "water_drop",
    items: ["Hydrogen (Green / Blue)", "LPG Bulk", "Autogas", "Biofuels"],
  },
  {
    group: "Crude & Traded Cargoes",
    icon: "oil_barrel",
    items: ["Crude Oil (Sweet / Sour)", "Gasoil Cargoes", "Fuel Oil", "Naphtha & Jet"],
  },
];

/* ------------------------------------------------------------------ */
/* Products                                                            */
/* ------------------------------------------------------------------ */
export type SpecRow = { label: string; a: string; b?: string; method?: string };

export type Product = {
  slug: string;
  icon: IconName;
  category: "Crude & Trading" | "Conventional" | "Industrial" | "Clean Energy";
  name: string;
  short: string;
  headline: string;
  compliance: string;
  supply: string;
  spec: string; // short badge
  intro: string;
  applications: string[];
  /** Optional technical spec matrix */
  specColumns?: string[];
  specRows?: SpecRow[];
  /** Optional extra bullet groups */
  bullets?: { title: string; items: string[] }[];
};

export const products: Product[] = [
  {
    slug: "crude-oil",
    icon: "oil_barrel",
    category: "Crude & Trading",
    name: "Crude Oil (Imported Cargoes)",
    short:
      "Imported crude grades, from light sweet to medium sour, traded in cargo lots on CIF and FOB terms.",
    headline: "Crude Oil Importing & Cargo Trading",
    compliance: "Platts / ICE Benchmark Linked",
    supply: "Cargo lots (Suezmax / VLCC), CIF & FOB terms",
    spec: "API / sulphur graded",
    intro:
      "As an importer and physical trader of crude oil, Tswana Petroleum Co. sources cargoes from the world's primary supply basins and delivers them into the African market. We handle grade selection, chartering, discharge and inland distribution, backed by independent inspection at load and discharge and price-risk management against Platts and ICE benchmarks.",
    applications: [
      "Refinery and processing-plant feedstock supply",
      "Blending-house and reprocessing operations",
      "Regional traders and off-take partners",
      "Strategic and commercial crude storage programmes",
    ],
    specColumns: ["Parameter", "Typical Range", "Basis", "Notes"],
    specRows: [
      { label: "API Gravity", a: "22° to 45°", b: "Light to medium", method: "ASTM D287" },
      { label: "Sulphur Content", a: "0.1% to 3.5% m/m", b: "Sweet to sour", method: "ASTM D4294" },
      { label: "Cargo Size", a: "80,000 to 300,000 MT", b: "Suezmax / VLCC", method: "Charter party" },
      { label: "Delivery Terms", a: "CIF / FOB / DES", b: "Incoterms 2020", method: "Contract" },
      { label: "Inspection", a: "Independent at load & discharge", b: "SGS / Intertek", method: "Q&Q survey" },
    ],
    bullets: [
      {
        title: "How We Trade Crude",
        items: [
          "Grade selection matched to refinery yield and demand",
          "Vessel chartering, laytime and demurrage management",
          "Letters of credit and structured trade finance",
          "Full KYC, sanctions screening and Incoterms structuring",
          "Price hedging against Dated Brent and ICE benchmarks",
        ],
      },
    ],
  },
  {
    slug: "diesel",
    icon: "local_gas_station",
    category: "Conventional",
    name: "Automotive Diesel (50ppm & 500ppm)",
    short: "Ultra-low-sulphur and industrial-grade gasoil, formulated for HPCR engines.",
    headline: "Automotive Diesel Fuel (50ppm & 500ppm)",
    compliance: "SANS 342:2020",
    supply: "Bulk Road Tanker Loads (10,000L to 40,000L)",
    spec: "SANS 342",
    intro:
      "Tswana Petroleum supplies premium-grade Ultra-Low Sulphur Diesel (50ppm) and Standard Industrial Diesel (500ppm). Formulated to protect modern high-pressure common rail (HPCR) fuel injection systems, our gasoil ensures maximum combustion efficiency, reduced injector fouling, and lower particulate emissions.",
    applications: [
      "Long-haul freight fleets and heavy logistics operators",
      "Open-cast and underground mining mobile equipment",
      "Commercial agriculture, harvesting machinery and stationary irrigation systems",
      "Critical hospital, data centre and commercial real estate standby generation",
    ],
    specColumns: ["Parameter", "50ppm Specification", "500ppm Specification", "Testing Method"],
    specRows: [
      { label: "Sulphur Content", a: "≤ 50.0 mg/kg", b: "≤ 500.0 mg/kg", method: "ASTM D5453" },
      { label: "Density @ 20°C", a: "800.0 to 850.0 kg/m³", b: "800.0 to 855.0 kg/m³", method: "ASTM D4052" },
      { label: "Flash Point (PMCC)", a: "≥ 55.0 °C", b: "≥ 55.0 °C", method: "ASTM D93" },
      { label: "Cetane Number", a: "≥ 45.0", b: "≥ 45.0", method: "ASTM D613" },
      { label: "Water Content", a: "≤ 200 mg/kg", b: "≤ 200 mg/kg", method: "ASTM D6304" },
      { label: "Total Contamination", a: "≤ 24 mg/kg", b: "≤ 24 mg/kg", method: "IP 440" },
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
    icon: "local_gas_station",
    category: "Conventional",
    name: "Unleaded Petrol (ULP 93 & 95)",
    short: "Clean-burning anti-knock Mogas with controlled volatility for the interior.",
    headline: "Unleaded Petrol (ULP 93 & ULP 95)",
    compliance: "SANS 228:2020",
    supply: "Depot Bridging & Forecourt Drops",
    spec: "SANS 228",
    intro:
      "Sourced directly from primary coastal refineries and inland pipeline hubs, our Unleaded Petrol 93 (Inland) and Unleaded Petrol 95 (Coastal and Inland) provide clean-burning anti-knock performance. Controlled volatility parameters eliminate vapour-lock issues in high-altitude interior operations while maximising fuel economy.",
    applications: [
      "Independent retail stations and forecourt operators",
      "Commercial depots and depot bridging",
      "Government and municipal fleets",
      "High-compression petrol engine fleets",
    ],
    specColumns: ["Metric", "ULP 93 Specification", "ULP 95 Specification", "Significance"],
    specRows: [
      { label: "Research Octane Number (RON)", a: "Min 93.0", b: "Min 95.0", method: "Anti-knock rating" },
      { label: "Benzene Content", a: "Max 3.0% vol", b: "Max 3.0% vol", method: "Lower emissions" },
      { label: "Reid Vapour Pressure (RVP)", a: "45 to 75 kPa (seasonal)", b: "45 to 75 kPa (seasonal)", method: "Reliable cold starting" },
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
    icon: "local_fire_department",
    category: "Clean Energy",
    name: "Bulk LPG & Commercial Propane",
    short: "Custom propane/butane blends delivering instant, controllable thermal energy.",
    headline: "Bulk Liquefied Petroleum Gas (LPG)",
    compliance: "SANS 1528 / SANS 10087",
    supply: "5-Ton to 25-Ton Bulk Road Tankers",
    spec: "SANS 1528",
    intro:
      "Tswana Petroleum supplies commercial and industrial-grade LPG (custom Propane/Butane blends). As an exceptional thermal energy source, our bulk LPG delivers instant, controllable heat with significantly reduced carbon monoxide and carbon dioxide output compared to coal or heavy fuel oils.",
    applications: [
      "Agro-processing: grain drying, poultry house heating and commercial greenhouses",
      "Metallurgy & kilns: heat-treatment furnaces, ceramic kilns and metal cutting",
      "Food & beverage manufacturing: industrial ovens, steam boilers and brewing",
      "Fleet autogas: dedicated vehicle conversions for lower maintenance and fuel costs",
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
    icon: "water_drop",
    category: "Clean Energy",
    name: "Industrial & Fuel-Cell Hydrogen",
    short: "Grade 5.0 (99.999%) compressed hydrogen for fuel cells and heavy industry.",
    headline: "Industrial & Fuel-Cell Grade Hydrogen",
    compliance: "ISO 14687:2019 / Grade 5.0 (99.999% Pure)",
    supply: "Tube trailers (200 to 500 bar) & manifolded cylinder skids",
    spec: "ISO 14687",
    intro:
      "Aligned with the South African Department of Science and Innovation's Hydrogen Society Roadmap (HSRM), Tswana Petroleum Co. is positioning itself at the leading edge of commercial hydrogen supply. We engineer supply pathways for compressed gaseous hydrogen (CGH₂) across heavy industry, zero-emission transportation, and mining decarbonisation pilots.",
    applications: [
      "PEM fuel cells and heavy mining haulage conversions",
      "Zero-emission transportation and FCEV heavy transport",
      "Industrial chemical reduction and feedstock (ammonia, methanol)",
      "Power generation and grid balancing",
    ],
    bullets: [
      {
        title: "Hydrogen Supply Framework",
        items: [
          "Grade 4.5 to 5.0 High Purity (99.99% to 99.999%) for PEM fuel cells and industrial reduction",
          "Logistics: high-pressure tube trailers (200 to 500 bar) and manifolded cylinder skids (MCPs)",
          "Decarbonisation advisory: turnkey planning for migration from heavy distillates to hydrogen/natural-gas dual-fuel systems",
        ],
      },
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
    icon: "factory",
    category: "Industrial",
    name: "Heavy Furnace Oil (HFO 180 & 380)",
    short: "High-calorific boiler fuel with stable atomisation and low ash content.",
    headline: "Heavy Furnace Oil & Industrial Boiler Fuel",
    compliance: "SANS 10178 / ISO 8217",
    supply: "Insulated, Steam-Heated Tankers",
    spec: "180 & 380 cSt",
    intro:
      "For thermal energy operations requiring high calorific value at competitive pricing, Tswana Petroleum distributes high-density Heavy Furnace Oils. Available in 180 cSt and 380 cSt viscosities, our HFO is tested for stable atomisation, minimal burner-tip carbonisation, and consistent energy release.",
    applications: [
      "Cement clinker kilns and asphalt batching plants",
      "Steel and metal smelting",
      "Steam generation stations and power station boiler fuel",
      "Marine bunker fuel (IFO 180 / IFO 380 grades)",
    ],
    bullets: [
      {
        title: "Performance & Quality Metrics",
        items: [
          "Gross Calorific Value (GCV): ~41.5 to 43.0 MJ/kg",
          "Ash content: < 0.10% m/m, reducing maintenance on heat exchangers and refractory linings",
          "Low Vanadium and Sodium levels to prevent high-temperature corrosion",
          "Heated tanker delivery to maintain flow properties",
        ],
      },
    ],
  },
  {
    slug: "light-blending-fuel",
    icon: "oil_barrel",
    category: "Industrial",
    name: "Light Blending Fuel (LBF)",
    short: "Middle-distillate intermediate for blending houses and specialised burners.",
    headline: "Light Blending Fuel (LBF) & Process Fuels",
    compliance: "Engineered Viscosity Intermediate Distillates",
    supply: "Bulk supply to blending houses & processing facilities",
    spec: "CoA supplied",
    intro:
      "Tswana Petroleum sources and distributes Light Blending Fuel (LBF) designed for fuel blending houses, specialised burners, and custom thermal processing facilities. LBF offers a middle-distillate profile with lower viscosity than standard HFO, reducing pre-heating energy requirements while maintaining high energy density.",
    applications: [
      "Independent fuel blenders and compounders",
      "Small-scale refineries and modular processing units",
      "Specialised burners and custom thermal processing",
      "Fuel traders and export terminals",
    ],
    bullets: [
      {
        title: "Product Highlights",
        items: [
          "Consistent distillation curve and flash point",
          "Lower viscosity than standard HFO, reducing pre-heating energy",
          "Low sediment and water content",
          "Certificate of Analysis (CoA) with every delivery",
        ],
      },
    ],
  },
];

export const productCategories = [
  { key: "Crude & Trading", label: "Crude & Traded Cargoes" },
  { key: "Conventional", label: "Conventional Fuels" },
  { key: "Industrial", label: "Industrial Heavy Fuels" },
  { key: "Clean Energy", label: "Next-Gen & Clean Energy" },
] as const;

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */
export type Service = {
  slug: string;
  icon: IconName;
  name: string;
  short: string;
  intro: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "storage-facilities",
    icon: "warehouse",
    name: "Storage Facilities",
    short: "Licensed bulk storage and depot capacity at strategic inland and coastal nodes.",
    intro:
      "Tswana Petroleum operates and partners on licensed bulk storage across strategic coastal and inland nodes, giving clients secure holding capacity, throughput flexibility, and a buffer against supply-chain volatility.",
    features: [
      "Licensed bulk tank farms and depot capacity",
      "Coastal import-terminal and inland node access",
      "Throughput, blending and decanting capability",
      "Tank-gauging, mass-balance and stock reconciliation",
      "SANS 10089-compliant storage and firefighting systems",
      "Vendor-managed inventory and consignment stock options",
    ],
  },
  {
    slug: "transportation",
    icon: "local_shipping",
    name: "Transportation",
    short: "Hazchem-certified, GPS-tracked road-tanker logistics with nationwide reach.",
    intro:
      "Our vetted fleet and transport partners move product safely and on schedule to any site in the country, backed by real-time telematics, calibrated compartments, and full compliance with hazardous-goods regulations.",
    features: [
      "Hazchem-certified, telematics-tracked road tankers",
      "Calibrated, seal-monitored compartments",
      "Automated bottom loading (ABL) for zero product degradation",
      "Delivered At Place (DAP) and depot-collection (FOB) options",
      "Cross-border and abnormal-load logistics",
      "24/7 dispatch and emergency-supply response",
    ],
  },
  {
    slug: "bonded-fuels",
    icon: "inventory",
    name: "Bonded Fuels",
    short: "Duty-suspended and rebated fuel supply for qualifying and export operations.",
    intro:
      "Tswana Petroleum supplies bonded, duty-suspended and rebated fuels for qualifying users, cross-border trade and export operations, managing the customs, licensing and documentation so your product moves compliantly.",
    features: [
      "Duty-suspended and customs-bonded fuel supply",
      "Diesel rebate support for qualifying primary-sector users",
      "Cross-border, transit and export fuel handling",
      "SARS customs documentation and excise compliance",
      "Bonded-warehouse storage and throughput",
      "Full audit trail and reconciliation reporting",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Strategy, values, advantages                                        */
/* ------------------------------------------------------------------ */
export const strategicAnchors = [
  {
    title: "Absolute Product Integrity",
    desc: "Every drop SANS-compliant, verified by independent Certificate of Analysis (CoA) testing.",
  },
  {
    title: "Unbroken Supply Chains",
    desc: "Multi-terminal sourcing across Durban, Richards Bay, Cape Town and Sasolburg nodes.",
  },
  {
    title: "Complete Price Transparency",
    desc: "Directly aligned with Central Energy Fund (CEF) and Basic Fuel Price (BFP) mechanics.",
  },
  {
    title: "Broad-Based Transformation",
    desc: "100% Black-owned, driving genuine B-BBEE value across industrial procurement supply chains.",
  },
  {
    title: "Future Energy Integration",
    desc: "Active development of commercial-scale LPG infrastructure and green hydrogen supply networks.",
  },
];

export const values = [
  { letter: "T", value: "Trust", desc: "Every litre delivered is measured, certified, and accounted for." },
  { letter: "S", value: "Safety", desc: "Zero-harm operations across storage, handling, and transport." },
  { letter: "W", value: "Wholesale Excellence", desc: "Unmatched logistics, volume capacity, and pricing transparency." },
  { letter: "A", value: "Accountability", desc: "Full regulatory compliance with SANS, NERSA, and DMRE standards." },
  { letter: "N", value: "Next-Gen Energy", desc: "Pioneering hydrogen, LPG, and low-carbon fuel solutions." },
  { letter: "A", value: "African Pride", desc: "Rooted in South Africa, scaling across the continent." },
];

export const advantages: {
  icon: IconName;
  title: string;
  detail: string;
}[] = [
  {
    icon: "public",
    title: "Global Sourcing & Importing",
    detail:
      "As an importer of crude and refined products, we originate cargoes from six primary international basins, insulating clients from local refinery outages and single-source risk.",
  },
  {
    icon: "hub",
    title: "Multi-Point Depot Off-Take",
    detail:
      "Direct allocations across primary import terminals (Durban, Richards Bay, Cape Town) and inland distribution hubs ensure zero single-point failure risks.",
  },
  {
    icon: "verified_user",
    title: "Hazchem-Certified Transport Fleet",
    detail:
      "Fully telematics-tracked, calibrated, and seal-monitored bulk road tankers equipped with automated bottom loading (ABL) systems for zero product degradation.",
  },
  {
    icon: "trending_up",
    title: "Transparent Wholesale Pricing",
    detail:
      "Pricing models tied directly to CEF and Basic Fuel Price (BFP) formulas. Fixed-margin, formula-based, or volume-tier off-take structures available.",
  },
  {
    icon: "science",
    title: "SANS-Certified Batch Assurance",
    detail:
      "Independent laboratory testing for every consignment. Certificates of Analysis (CoA) accompany every delivery run before offloading at your site.",
  },
  {
    icon: "bolt",
    title: "Future-Proof Fuel Transition",
    detail:
      "Scale from conventional diesel and HFO into LPG and hydrogen supply contracts with a single commercial partner as your sustainability goals evolve.",
  },
  {
    icon: "workspace_premium",
    title: "B-BBEE Level 1 Contributor",
    detail:
      "135% procurement recognition value, improving your scorecard and demonstrating commitment to transformed, sustainable local enterprise.",
  },
];

export const heroStats = [
  { value: "6", label: "Global Supply Basins" },
  { value: "VLCC", label: "Cargo Chartering Scale" },
  { value: "100% SANS", label: "Quality Specification" },
  { value: "Level 1", label: "B-BBEE Procurement" },
];

export const globalStats = [
  { value: "6", label: "international sourcing basins" },
  { value: "2M+", label: "barrels per cargo capability" },
  { value: "24/7", label: "trading & operations desk" },
  { value: "Platts / ICE", label: "benchmark-linked pricing" },
];

export const sectors = [
  "Mining & Mineral Extraction",
  "Road Freight & Logistics",
  "Agriculture & Forestry",
  "Manufacturing & Heavy Boilers",
  "Retail Forecourt Operators",
  "Maritime & Bunkering",
  "Refineries & Reprocessing",
  "International Traders & Off-takers",
];

export const compliancePoints = [
  {
    title: "DMRE Licensed Wholesaler",
    desc: "Operating under the Petroleum Products Act (Act 120 of 1977, as amended).",
  },
  {
    title: "Hazardous Substances Act Compliant",
    desc: "Strict alignment with Act 15 of 1973 for handling and transport.",
  },
  {
    title: "Zero-Spill Protocol",
    desc: "All off-take and off-loading operations follow standard dry-break couplings and vapour recovery protocols.",
  },
  {
    title: "Community Value Creation",
    desc: "Reinvesting in technical skills development across logistics and renewable energies within local communities.",
  },
];

/* ------------------------------------------------------------------ */
/* Corporate Social Investment (CSI)                                   */
/* Focus: Education, Environment, and Access to Water where we operate */
/* ------------------------------------------------------------------ */
export const csiStats = [
  { value: "3", label: "focus areas guiding every programme" },
  { value: "150+", label: "bursaries & learnerships funded" },
  { value: "9", label: "provinces reached through outreach" },
  { value: "60%", label: "CSI spend directed to host communities" },
];

export const csiPillars: {
  icon: IconName;
  title: string;
  desc: string;
  points: string[];
}[] = [
  {
    icon: "school",
    title: "Education",
    desc: "Building the technical talent pipeline for South Africa's energy sector through bursaries, learnerships and school support in the communities where we operate.",
    points: [
      "University bursaries in engineering, chemistry and logistics",
      "Hazchem and Code-14 driver-training academy",
      "School science-lab sponsorships and STEM outreach",
    ],
  },
  {
    icon: "eco",
    title: "Environment",
    desc: "Protecting the ecosystems around our operations while creating the green skills a lower-carbon economy will depend on.",
    points: [
      "Land rehabilitation and indigenous tree-planting drives",
      "Green-skills training for the hydrogen and renewables economy",
      "Clean-cooking LPG programmes that cut indoor-air pollution",
    ],
  },
  {
    icon: "water",
    title: "Access to Water",
    desc: "Investing in reliable, clean water for the host communities where we operate, from boreholes to sanitation infrastructure.",
    points: [
      "Borehole drilling and solar-pumped water points",
      "Rainwater harvesting and storage at schools and clinics",
      "Sanitation and water-safety infrastructure support",
    ],
  },
];

export const csiPrograms = [
  {
    tag: "Education",
    title: "Tswana Future Engineers Bursary",
    desc: "Full-cost bursaries for underrepresented youth studying engineering, chemistry and supply-chain management at South African universities.",
  },
  {
    tag: "Environment",
    title: "Green Corridors Initiative",
    desc: "Land-rehabilitation, tree-planting and green-skills training that restore ecosystems along our supply corridors.",
  },
  {
    tag: "Access to Water",
    title: "Water for Communities Programme",
    desc: "Borehole, solar-pump and rainwater-harvesting projects delivering clean, reliable water to schools and clinics in host communities.",
  },
  {
    tag: "Education",
    title: "Driver & Artisan Academy",
    desc: "Accredited Hazchem and Code-14 training that places graduates directly into our vetted transport network and partner fleets.",
  },
];
