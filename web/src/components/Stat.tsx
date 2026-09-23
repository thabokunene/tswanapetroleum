/**
 * A single figure from a `<dl>` ledger: value on top, uppercase label beneath.
 *
 * The DOM order stays valid HTML (`dt` then `dd`) and `flex-col-reverse` puts
 * the figure above its label visually.
 */
export default function Stat({
  value,
  label,
  accent = false,
  valueClassName = "numeral-lg",
  labelClassName,
  tone = "light",
}: {
  value: React.ReactNode;
  label: string;
  accent?: boolean;
  valueClassName?: string;
  labelClassName?: string;
  /** "light" for dark surfaces (white type), "dark" for white surfaces. */
  tone?: "light" | "dark";
}) {
  const valueColour = accent
    ? "text-teal-light"
    : tone === "light"
      ? "text-white"
      : "text-navy";
  const labelColour =
    labelClassName ?? (tone === "light" ? "text-white/50" : "text-smoke");
  return (
    <div className="flex flex-col-reverse">
      <dt
        className={`mt-3 max-w-[18rem] font-display text-[0.6875rem] font-semibold uppercase tracking-label ${labelColour}`}
      >
        {label}
      </dt>
      <dd className={`${valueClassName} ${valueColour}`}>
        {value}
      </dd>
    </div>
  );
}
