"use client";

import { useState } from "react";
import type { LeadType } from "@/lib/leads";

type Status = "idle" | "submitting" | "success" | "error";

// Turns an HTML form's FormData into the API payload, correctly preserving
// multi-value fields (e.g. checkbox groups sharing one `name`).
function serializeForm(form: HTMLFormElement): Record<string, string | string[]> {
  const fd = new FormData(form);
  const out: Record<string, string | string[]> = {};
  for (const key of Array.from(new Set(fd.keys()))) {
    const values = fd.getAll(key).map((v) => (typeof v === "string" ? v : ""));
    out[key] = values.length > 1 ? values : values[0] ?? "";
  }
  return out;
}

export function useLeadSubmit(type: LeadType) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function submit(form: HTMLFormElement) {
    setStatus("submitting");
    setError(null);

    const fields = serializeForm(form);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, fields }),
      });
      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!res.ok || !data?.ok) {
        setError(
          data?.error ??
            "Something went wrong sending your request. Please try again."
        );
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setError(
        "We could not reach our servers. Please check your connection or contact us directly."
      );
      setStatus("error");
    }
  }

  function reset() {
    setStatus("idle");
    setError(null);
  }

  return { status, error, submit, reset };
}
