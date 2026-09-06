import Image from "next/image";
import Link from "next/link";

export default function Logo({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const textColor = variant === "light" ? "text-white" : "text-navy";
  const subColor = variant === "light" ? "text-teal-light" : "text-teal";
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="relative block h-11 w-11 shrink-0">
        <Image
          src="/images/logo-mark.png"
          alt="Tswana Petroleum Co. logo"
          fill
          sizes="44px"
          className="object-contain"
          priority
        />
      </span>
      <span className="leading-none">
        <span
          className={`block font-heading text-lg font-bold tracking-tight ${textColor}`}
        >
          TSWANA
        </span>
        <span
          className={`block font-heading text-[0.62rem] font-semibold uppercase tracking-[0.28em] ${subColor}`}
        >
          Petroleum Co.
        </span>
      </span>
    </Link>
  );
}
