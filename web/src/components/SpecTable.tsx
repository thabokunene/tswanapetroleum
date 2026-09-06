import type { SpecRow } from "@/lib/site";

export default function SpecTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: SpecRow[];
}) {
  const hasMethod = columns.length >= 4;
  const hasB = columns.length >= 3;

  return (
    <div className="overflow-x-auto rounded-2xl border border-navy/10 shadow-card">
      <table className="spec-table">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label}>
              <td className="font-semibold text-navy">{r.label}</td>
              <td>{r.a}</td>
              {hasB && <td>{r.b}</td>}
              {hasMethod && <td className="text-carbon/70">{r.method}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
