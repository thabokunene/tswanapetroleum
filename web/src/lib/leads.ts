// Shared lead-intake types and server-side delivery.
// Delivery is pluggable and configured entirely via environment variables so
// no secrets live in the repo:
//   1. RESEND_API_KEY (+ LEADS_TO_EMAIL, LEADS_FROM_EMAIL) -> email via Resend REST API
//   2. LEADS_WEBHOOK_URL -> generic JSON POST (Slack / Zapier / CRM / n8n)
//   3. neither set -> structured console.error, captured by host log drains
// Delivery is dependency-free (uses global fetch) so the build works offline.

export type LeadType = "quote" | "credit";

export interface LeadPayload {
  type: LeadType;
  fields: Record<string, string | string[]>;
  meta?: {
    submittedAt: string;
    userAgent?: string;
    referer?: string;
  };
}

// Server-side required-field contract per form. Client validation is
// bypassable, so this is the real gate.
const REQUIRED: Record<LeadType, string[]> = {
  quote: ["name", "company", "email"],
  credit: [
    "company",
    "regNo",
    "contactName",
    "email",
    "phone",
    "address",
    "creditLimit",
    "consent",
  ],
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface ValidationResult {
  ok: boolean;
  errors: string[];
}

export function validateLead(payload: unknown): ValidationResult {
  const errors: string[] = [];

  if (!payload || typeof payload !== "object") {
    return { ok: false, errors: ["Malformed request body."] };
  }
  const p = payload as Partial<LeadPayload>;

  if (p.type !== "quote" && p.type !== "credit") {
    return { ok: false, errors: ["Unknown lead type."] };
  }
  if (!p.fields || typeof p.fields !== "object") {
    return { ok: false, errors: ["Missing form fields."] };
  }

  const fields = p.fields as Record<string, unknown>;
  const get = (k: string): string => {
    const v = fields[k];
    if (Array.isArray(v)) return v.join(", ").trim();
    return typeof v === "string" ? v.trim() : "";
  };

  for (const key of REQUIRED[p.type]) {
    if (!get(key)) errors.push(`Field "${key}" is required.`);
  }

  const email = get("email");
  if (email && !EMAIL_RE.test(email)) {
    errors.push("Email address is not valid.");
  }

  // Length guard against oversized payloads / abuse.
  const total = JSON.stringify(fields).length;
  if (total > 20_000) errors.push("Submission is too large.");

  return { ok: errors.length === 0, errors };
}

function formatFields(fields: Record<string, string | string[]>): string {
  return Object.entries(fields)
    .filter(([, v]) => (Array.isArray(v) ? v.length : String(v).trim()))
    .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
    .join("\n");
}

export interface DeliveryResult {
  delivered: boolean;
  channel: "resend" | "webhook" | "log";
}

/**
 * Deliver a validated lead. Never throws to the caller for a delivery-channel
 * failure of the "log" fallback; a hard failure of a *configured* channel
 * (Resend/webhook) is surfaced so the API can return a 502 and the UI can tell
 * the user to phone instead of falsely reporting success.
 */
export async function deliverLead(payload: LeadPayload): Promise<DeliveryResult> {
  const subject = `New ${payload.type === "credit" ? "credit application" : "wholesale quote"} lead — ${
    (payload.fields.company as string) || (payload.fields.name as string) || "unknown"
  }`;
  const body = `${subject}\n\n${formatFields(payload.fields)}\n\nSubmitted: ${
    payload.meta?.submittedAt ?? new Date().toISOString()
  }`;

  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEADS_TO_EMAIL;
  const fromEmail = process.env.LEADS_FROM_EMAIL;

  if (resendKey && toEmail && fromEmail) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: (payload.fields.email as string) || undefined,
        subject,
        text: body,
      }),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      throw new Error(`Resend delivery failed (${res.status}): ${detail}`);
    }
    return { delivered: true, channel: "resend" };
  }

  const webhook = process.env.LEADS_WEBHOOK_URL;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject, ...payload }),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      throw new Error(`Webhook delivery failed (${res.status}): ${detail}`);
    }
    return { delivered: true, channel: "webhook" };
  }

  // No sink configured: persist to the server log so the lead is at least
  // recoverable from log drains, and signal that it was NOT durably delivered.
  console.error("[leads] NO DELIVERY CHANNEL CONFIGURED — lead captured to logs only:\n" + body);
  return { delivered: false, channel: "log" };
}
