import Link from "next/link";
import Icon from "./Icon";
import { capabilityMatrix } from "@/lib/site";

/** Where each capability detail line points. */
const links: Record<string, string> = {
  "Bulk Fuel Distribution": "/products",
  "Industrial Heavy Fuels": "/products/heavy-furnace-oil",
  "Bulk LPG & Autogas": "/products/lpg",
  "Hazardous Goods": "/compliance",
  "Bonded & Duty-Suspended": "/services#bonded-fuels",
  "Next-Gen & Clean Energy": "/products/hydrogen",
};

/**
 * The capability matrix: the ruled, data-first centrepiece of the homepage.
 * Semantically a table (it is tabular data), styled as an editorial ledger.
 */
export default function CapabilityMatrix() {
  return (
    <table className="data-table">
      <caption className="sr-only">
        Wholesale fuel capabilities, payloads, compliance basis, coverage, lead
        times and supply nodes
      </caption>
      <thead>
        <tr>
          <th scope="col" className="w-[26%]">
            Capability
          </th>
          <th scope="col" className="w-[17%]">
            Payload
          </th>
          <th scope="col" className="w-[24%]">
            Compliance basis
          </th>
          <th scope="col" className="w-[15%]">
            Coverage
          </th>
          <th scope="col" className="w-[12%]">
            Lead time
          </th>
          <th scope="col" className="w-[6%] text-right">
            Hubs
          </th>
        </tr>
      </thead>
      <tbody>
        {capabilityMatrix.map((row) => (
          <tr key={row.service}>
            <th scope="row" className="text-left font-normal">
              <span className="flex items-start gap-3">
                <Icon
                  name={row.icon}
                  size={18}
                  className="row-marker mt-1 shrink-0 text-teal"
                />
                <span>
                  <Link
                    href={links[row.service] ?? "/products"}
                    className="row-title block hover:text-teal"
                  >
                    {row.service}
                  </Link>
                  <span className="row-sub block">{row.sub}</span>
                </span>
              </span>
            </th>
            <td className="nums" data-label="Payload">
              {row.payload}
            </td>
            <td data-label="Compliance basis">
              <ul className="cell-list">
                {row.compliance.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </td>
            <td className="cell-list" data-label="Coverage">
              {row.coverage}
            </td>
            <td className="nums" data-label="Lead time">
              {row.lead}
            </td>
            <td className="nums text-right" data-label="Supply hubs">
              <span className="inline-flex items-center gap-2">
                {row.nodes}
                <Icon
                  name="chevron_right"
                  size={16}
                  className="row-marker row-marker-arrow -rotate-45 text-smoke"
                />
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
