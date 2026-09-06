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
            <td>{r.label}</td>
            <td>{r.a}</td>
            {hasB && <td>{r.b}</td>}
            {hasMethod && <td>{r.method}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
