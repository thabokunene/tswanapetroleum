import { NextResponse } from "next/server";
import { validateLead, deliverLead, type LeadPayload } from "@/lib/leads";

// This handler must run on the server per-request; it is not statically
// prerenderable. If the project is ever switched to `output: "export"` this
// endpoint will stop existing — keep the app on a Node/serverless runtime.
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  // Honeypot: bots fill hidden fields humans never see. Accept silently so the
  // bot thinks it succeeded, but do not deliver.
  if (
    body &&
    typeof body === "object" &&
    typeof (body as Record<string, unknown>).company_website === "string" &&
    (body as Record<string, unknown>).company_website !== ""
  ) {
    return NextResponse.json({ ok: true, channel: "discarded" });
  }

  const validation = validateLead(body);
  if (!validation.ok) {
    return NextResponse.json(
      { ok: false, error: validation.errors.join(" ") },
      { status: 422 }
    );
  }

  const payload = body as LeadPayload;
  payload.meta = {
    submittedAt: new Date().toISOString(),
    userAgent: request.headers.get("user-agent") ?? undefined,
    referer: request.headers.get("referer") ?? undefined,
  };

  try {
    const result = await deliverLead(payload);
    if (!result.delivered) {
      // Captured to logs but not durably delivered — tell the client to fail
      // loudly rather than show a false "we got it".
      return NextResponse.json(
        {
          ok: false,
          error:
            "We could not route your submission right now. Please call or email us directly.",
        },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true, channel: result.channel });
  } catch (err) {
    console.error("[leads] delivery error:", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not route your submission right now. Please call or email us directly.",
      },
      { status: 502 }
    );
  }
}
