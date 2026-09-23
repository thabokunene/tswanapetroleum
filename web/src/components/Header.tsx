"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import Logo from "./Logo";
import { contact, nav } from "@/lib/site";

/** Everything except the contact route, which becomes the header CTA. */
const primaryNav = nav.filter((item) => item.href !== "/contact");

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-navy/10 bg-white/85 backdrop-blur-xl">
      {/* Utility strip — the operations-desk details, on every page. */}
      <div className="hidden border-b border-navy/10 bg-navy text-white/80 md:block">
        <div className="container-x flex h-10 items-center justify-between gap-8 font-display text-[0.6875rem] font-semibold uppercase tracking-label">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-2 transition-colors hover:text-teal-light"
            >
              <Icon name="call" size={14} />
              {contact.phone}
            </a>
            <span className="h-3 w-px bg-white/20" aria-hidden="true" />
            <span className="flex items-center gap-2 text-white/60">
              <Icon name="schedule" size={14} />
              Emergency supply 24/7
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-white/60">
              DMRE licensed wholesale distributor
            </span>
            <span className="h-3 w-px bg-white/20" aria-hidden="true" />
            <Link
              href="/credit-application"
              className="transition-colors hover:text-teal-light"
            >
              Apply for credit
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="container-x flex h-[60px] items-center justify-between gap-6 md:h-[72px]">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-2 font-display text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-navy/75 transition-colors hover:text-navy"
            >
              {item.label}
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-teal transition-transform duration-300 ease-editorial group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn-primary hidden md:inline-flex">
            Request a quote
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 flex h-10 w-10 items-center justify-center text-navy lg:hidden"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M3 7h18M3 12h18M3 17h18" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="max-h-[calc(100vh-60px)] overflow-y-auto border-t border-navy/10 bg-white">
          <div className="container-x flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-navy/[0.08] py-4 font-display text-lg font-semibold tracking-tight text-navy"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/credit-application"
              onClick={() => setOpen(false)}
              className="border-b border-navy/[0.08] py-4 font-display text-lg font-semibold tracking-tight text-navy"
            >
              Apply for credit
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-6 w-full"
            >
              Request a quote
            </Link>
            <a
              href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
              className="mt-4 flex items-center gap-2 pb-4 font-display text-sm font-semibold uppercase tracking-label text-smoke"
            >
              <Icon name="call" size={16} />
              24/7 emergency supply · {contact.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
