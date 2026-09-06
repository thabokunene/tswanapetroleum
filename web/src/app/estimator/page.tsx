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
        title="Your wholesale requirement, priced in a tap."
        subtitle="Select your fuel type, volume and delivery province to request immediate wholesale pricing."
      />
      <section className="section bg-white">
        <div className="container-narrow">
          <BulkEstimator />
          <p className="mt-6 text-center text-sm text-smoke">
            Pricing is formula-based and tied directly to CEF and Basic Fuel
            Price (BFP) metrics. Fixed-margin and volume-tier off-take structures
            are available on request.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
