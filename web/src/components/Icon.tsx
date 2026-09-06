import type { SVGProps } from "react";

/**
 * Material-outlined-style icon set.
 * Consistent 24x24 grid, 1.75 stroke, rounded caps/joins, currentColor.
 * Add new glyphs to `paths` keyed by a Material-Symbols-like name.
 */
export type IconName =
  | "local_gas_station"
  | "factory"
  | "water_drop"
  | "local_fire_department"
  | "oil_barrel"
  | "hub"
  | "verified_user"
  | "trending_up"
  | "science"
  | "bolt"
  | "workspace_premium"
  | "school"
  | "eco"
  | "water"
  | "warehouse"
  | "local_shipping"
  | "inventory"
  | "request_quote"
  | "check"
  | "chevron_right"
  | "call"
  | "mail"
  | "place"
  | "schedule"
  | "shield"
  | "public"
  | "directions_boat"
  | "account_balance"
  | "policy";

const paths: Record<IconName, React.ReactNode> = {
  local_gas_station: (
    <>
      <path d="M4 21V6a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v15" />
      <path d="M3 21h11" />
      <path d="M4 12h9" />
      <path d="M13 8h3.5a1.5 1.5 0 0 1 1.5 1.5V16a1.5 1.5 0 0 0 3 0V9l-2.5-2.5" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V9l6 4V9l6 4V6l3-2v17z" />
      <path d="M3 21h18" />
      <path d="M7 17h2M12 17h2M17 17h1" />
    </>
  ),
  water_drop: <path d="M12 3.5c3.5 4 6 7 6 10a6 6 0 0 1-12 0c0-3 2.5-6 6-10Z" />,
  local_fire_department: (
    <path d="M12 3s5 3.5 5 9a5 5 0 0 1-10 0c0-1.5.6-2.8 1.4-3.7C8.9 9.9 9 11 10 11.5c0-2 .8-3.8 2-5.5.2 1.3 1 2.2 2 3-.3-2-1-4-2-6Z" />
  ),
  oil_barrel: (
    <>
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <path d="M5 9h14M5 15h14" />
      <path d="M9 4v16M15 4v16" />
    </>
  ),
  hub: (
    <>
      <circle cx="12" cy="12" r="2.3" />
      <circle cx="12" cy="4.5" r="1.8" />
      <circle cx="5" cy="18" r="1.8" />
      <circle cx="19" cy="18" r="1.8" />
      <path d="M12 9.7V6.3M10.4 13.4 6.3 16.7M13.6 13.4l4.1 3.3" />
    </>
  ),
  verified_user: (
    <>
      <path d="M12 3 5 6v6c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  trending_up: (
    <>
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
  science: (
    <>
      <path d="M9 3h6M10 3v6l-5 8a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 17l-5-8V3" />
      <path d="M7.5 14h9" />
    </>
  ),
  bolt: <path d="M13 3 5 13h5l-1 8 8-11h-5z" />,
  workspace_premium: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7" />
    </>
  ),
  school: (
    <>
      <path d="m12 4 10 5-10 5L2 9z" />
      <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
      <path d="M22 9v5" />
    </>
  ),
  eco: (
    <>
      <path d="M20 5s-3-1-7 0S6 8 5.5 12 7 19 7 19s3-9 12-11" />
      <path d="M7 19c0-4 2.5-7 6-8.5" />
    </>
  ),
  water: (
    <path d="M12 3.5c3.5 4 6 7 6 10a6 6 0 0 1-12 0c0-3 2.5-6 6-10Z M9 15c0 1.7 1.3 3 3 3" />
  ),
  warehouse: (
    <>
      <path d="M3 21V8l9-4 9 4v13" />
      <path d="M3 21h18" />
      <rect x="7" y="12" width="10" height="9" />
      <path d="M7 15.5h10M7 18.5h10" />
    </>
  ),
  local_shipping: (
    <>
      <path d="M2 6h11v11H2z" />
      <path d="M13 9h4l4 4v4h-8z" />
      <circle cx="6.5" cy="18" r="1.8" />
      <circle cx="17.5" cy="18" r="1.8" />
    </>
  ),
  inventory: (
    <>
      <rect x="4" y="7" width="16" height="14" rx="1.5" />
      <path d="M3 4h18v3H3z" />
      <path d="M9.5 11h5" />
    </>
  ),
  request_quote: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4" />
      <path d="M12.5 10.5h-2a1.25 1.25 0 0 0 0 2.5h1.5a1.25 1.25 0 0 1 0 2.5h-2" />
      <path d="M11 9v1M11 16v1" />
    </>
  ),
  check: <path d="m5 12 5 5 9-11" />,
  chevron_right: <path d="m9 6 6 6-6 6" />,
  call: (
    <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 6a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </>
  ),
  place: (
    <>
      <path d="M12 21s7-6.3 7-12a7 7 0 0 0-14 0c0 5.7 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  schedule: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  shield: (
    <path d="M12 3 5 6v6c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6z" />
  ),
  public: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.5 3.8 5.6 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.6-3.8-9S9.5 5.5 12 3Z" />
    </>
  ),
  directions_boat: (
    <>
      <path d="M4 18l-1.5-4.5a1 1 0 0 1 .9-1.3L12 11l7.6 1.2a1 1 0 0 1 .9 1.3L19 18" />
      <path d="M12 11V5l4 2v3" />
      <path d="M8 8h4" />
      <path d="M3 20c1.2.8 2.5.8 3.7 0 1.2-.8 2.4-.8 3.6 0 1.2.8 2.4.8 3.6 0 1.2-.8 2.5-.8 3.7 0" />
    </>
  ),
  account_balance: (
    <>
      <path d="M12 3 3 8h18z" />
      <path d="M5 10v7M9.5 10v7M14.5 10v7M19 10v7" />
      <path d="M3 20h18" />
    </>
  ),
  policy: (
    <>
      <path d="M12 3 5 6v6c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6z" />
      <circle cx="11" cy="11" r="2.5" />
      <path d="m12.8 12.8 2.2 2.2" />
    </>
  ),
};

export default function Icon({
  name,
  size = 24,
  className,
  ...rest
}: {
  name: IconName;
  size?: number;
} & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
