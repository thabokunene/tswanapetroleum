"use client";

import { useEffect, useRef, useState } from "react";
import Stat from "./Stat";
import { proofStats } from "@/lib/site";

/**
 * Credentials band. Values that are purely numeric count up once when the
 * block scrolls into view; anything with a word in it ("Level 1") renders
 * statically. Honours prefers-reduced-motion.
 */
function CountUp({ value, accent }: { value: string; accent?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const numeric = /^(\d+)(%?)$/.exec(value);
    const el = ref.current;
    if (!el || !numeric) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const target = Number(numeric[1]);
    const suffix = numeric[2];
    let frame = 0;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const duration = 900;

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(`${Math.round(target * eased)}${suffix}`);
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} className={accent ? "text-teal-light" : undefined}>
      {display}
    </span>
  );
}

export default function CredentialBand() {
  return (
    <dl className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {proofStats.map((stat) => (
        <div key={stat.label} className="border-t border-white/15 pt-5">
          <Stat
            value={<CountUp value={stat.value} accent={stat.accent} />}
            label={stat.label}
          />
        </div>
      ))}
    </dl>
  );
}
