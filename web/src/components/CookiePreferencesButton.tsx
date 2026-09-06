"use client";

import { openCookieSettings } from "@/components/CookieConsent";

export default function CookiePreferencesButton({
  className = "",
  children = "Manage cookie preferences",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className={
        className ||
        "font-medium text-teal underline underline-offset-2 transition-colors hover:text-teal-light"
      }
    >
      {children}
    </button>
  );
}
