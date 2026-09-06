"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/Icon";

const STORAGE_KEY = "tswana-cookie-consent";
const PRIVACY_URL = "https://www.petronas.com/privacy-statement";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // Storage blocked (private mode / cookies disabled): show the banner.
      setVisible(true);
    }
  }, []);

  function persist(consent: Omit<Consent, "timestamp">) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ ...consent, timestamp: new Date().toISOString() })
      );
    } catch {
      /* ignore write failures */
    }
    setVisible(false);
    setShowSettings(false);
  }

  const acceptAll = () =>
    persist({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () =>
    persist({ necessary: true, analytics: false, marketing: false });
  const saveSettings = () =>
    persist({ necessary: true, analytics, marketing });

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-black/[0.06] bg-white/85 shadow-2xl shadow-black/10 backdrop-blur-xl backdrop-saturate-150">
        <div className="p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
              <Icon name="shield" size={20} />
            </span>
            <div>
              <h2 className="text-base font-semibold tracking-tight text-carbon">
                We value your privacy
              </h2>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-smoke">
                By clicking &ldquo;Accept All Cookies&rdquo; or when you
                select/confirm your cookies settings, you agree to the storing of
                cookies on your device to enhance site navigation, analyze site
                usage, and/or assist in our marketing efforts. When you do this,
                you accept the associated{" "}
                <a
                  href={PRIVACY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-teal underline underline-offset-2 hover:text-teal-light"
                >
                  Privacy Statement
                </a>
                .
              </p>
            </div>
          </div>

          {showSettings && (
            <div className="mt-6 space-y-3 border-t border-black/[0.06] pt-6">
              <ToggleRow
                title="Strictly necessary"
                description="Required for core site functionality and security. Always active."
                checked
                disabled
              />
              <ToggleRow
                title="Analytics"
                description="Help us understand how the site is used so we can improve it."
                checked={analytics}
                onChange={setAnalytics}
              />
              <ToggleRow
                title="Marketing"
                description="Used to deliver and measure relevant communications."
                checked={marketing}
                onChange={setMarketing}
              />
            </div>
          )}

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:justify-end">
            {showSettings ? (
              <button onClick={saveSettings} className="btn-dark order-1 sm:order-none">
                Confirm my choices
              </button>
            ) : (
              <button
                onClick={() => setShowSettings(true)}
                className="rounded-full border border-carbon/15 px-6 py-3 text-base font-medium text-carbon transition-all duration-300 ease-apple hover:bg-cloud"
              >
                Cookie Settings
              </button>
            )}
            <button
              onClick={rejectAll}
              className="rounded-full border border-carbon/15 px-6 py-3 text-base font-medium text-carbon transition-all duration-300 ease-apple hover:bg-cloud"
            >
              Reject All
            </button>
            <button onClick={acceptAll} className="btn-primary">
              Accept All Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToggleRow({
  title,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-sm font-semibold text-carbon">{title}</p>
        <p className="mt-0.5 text-[0.8rem] leading-relaxed text-smoke">
          {description}
        </p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={`relative mt-1 h-6 w-11 shrink-0 rounded-full transition-colors duration-300 ${
          checked ? "bg-teal" : "bg-carbon/20"
        } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-300 ${
            checked ? "translate-x-[22px]" : "translate-x-0.5"
          }`}
        />
      </button>
    </div>
  );
}
