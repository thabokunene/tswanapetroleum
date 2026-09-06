import Image from "next/image";
import Link from "next/link";

export default function Logo({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const textColor = variant === "light" ? "text-white" : "text-carbon";
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className="relative block h-8 w-8 shrink-0">
        <Image
          src="/images/logo-mark.png"
          alt="Tswana Petroleum Co. logo"
          fill
          sizes="32px"
          className="object-contain"
          priority
        />
      </span>
      <span
        className={`text-[0.95rem] font-semibold tracking-tight ${textColor}`}
      >
        Tswana Petroleum
      </span>
    </Link>
  );
}
