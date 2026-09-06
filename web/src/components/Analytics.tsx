"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { onConsentChange, readConsent } from "@/lib/consent";

// Public env vars — safe to expose; they only load third-party tags.
// Set these in your host to activate the respective tools:
//   NEXT_PUBLIC_GA_ID      e.g. "G-XXXXXXXXXX"   (Google Analytics 4 — analytics consent)
//   NEXT_PUBLIC_META_PIXEL e.g. "123456789012345" (Meta Pixel — marketing consent)
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const META_PIXEL = process.env.NEXT_PUBLIC_META_PIXEL;

export default function Analytics() {
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const apply = () => {
      const c = readConsent();
      setAnalytics(Boolean(c?.analytics));
      setMarketing(Boolean(c?.marketing));
    };
    apply();
    return onConsentChange(apply);
  }, []);

  return (
    <>
      {/* Google Analytics 4 — gated on analytics consent */}
      {GA_ID && analytics && (
        <>
          <Script
            id="ga-src"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('consent', 'default', { analytics_storage: 'granted' });
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {/* Meta Pixel — gated on marketing consent */}
      {META_PIXEL && marketing && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
