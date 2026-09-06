// Single source of truth for cookie consent.
// Consent is stored in localStorage and broadcast via a window event so any
// script-loader (analytics, marketing) can react live when the user changes
// their choice — without a page reload.

export const CONSENT_STORAGE_KEY = "tswana-cookie-consent";
export const CONSENT_EVENT = "tswana:consent-changed";

export type ConsentCategory = "necessary" | "analytics" | "marketing";

export interface ConsentState {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      timestamp: parsed.timestamp ?? new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function writeConsent(consent: {
  analytics: boolean;
  marketing: boolean;
}): ConsentState {
  const state: ConsentState = {
    necessary: true,
    analytics: consent.analytics,
    marketing: consent.marketing,
    timestamp: new Date().toISOString(),
  };
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage blocked — consent applies for this session only */
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: state }));
  }
  return state;
}

export function hasConsentDecision(): boolean {
  return readConsent() !== null;
}

/** Subscribe to consent changes. Returns an unsubscribe function. */
export function onConsentChange(
  handler: (state: ConsentState) => void
): () => void {
  if (typeof window === "undefined") return () => {};
  const listener = (e: Event) => {
    const detail = (e as CustomEvent<ConsentState>).detail ?? readConsent();
    if (detail) handler(detail);
  };
  window.addEventListener(CONSENT_EVENT, listener);
  return () => window.removeEventListener(CONSENT_EVENT, listener);
}
