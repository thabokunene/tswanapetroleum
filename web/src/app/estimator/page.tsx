import type { Metadata } from "next";
import PageShell, { PageHero } from "@/components/PageShell";
import BulkEstimator from "@/components/BulkEstimator";

export const metadata: Metadata = {
  title: "Bulk Order Estimator",
  description:
    "Calculate your wholesale supply requirements. Select fuel type, volume and delivery province to request immediate CEF/BFP-aligned wholesale pricing.",
};

export default function EstimatorPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Bulk Order Estimator"
        title="Calculate Your Wholesale Supply Requirements"
        subtitle="Select your fuel type, volume, and primary delivery province to request immediate wholesale pricing."
      />
      <section className="section">
        <div className="container-x max-w-4xl">
          <BulkEstimator />
          <p className="mt-6 text-center font-body text-sm text-carbon/60">
            Pricing is formula-based and tied directly to CEF and Basic Fuel
            Price (BFP) metrics. Fixed-margin and volume-tier off-take
            structures are available on request.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
