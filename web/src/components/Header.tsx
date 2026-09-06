"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-white/70 backdrop-blur-xl backdrop-saturate-150">
      <div className="container-x flex h-14 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.8rem] font-normal text-carbon/80 transition-colors duration-200 hover:text-carbon"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-teal px-4 py-1.5 text-[0.8rem] font-medium text-white transition-all duration-300 ease-apple hover:bg-teal-light"
          >
            Request a Quote
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center text-carbon md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 8h16M4 16h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile full-screen menu */}
      {open && (
        <div className="border-t border-black/[0.06] bg-white/95 backdrop-blur-xl md:hidden">
          <div className="container-x flex flex-col gap-1 py-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3.5 text-lg font-medium text-carbon transition-colors hover:bg-cloud"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
