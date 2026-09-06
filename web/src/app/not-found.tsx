import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="section">
        <div className="container-x flex min-h-[50vh] flex-col items-center justify-center text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 heading-lg">This page ran out of fuel.</h1>
          <p className="mt-4 max-w-md text-carbon/70">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
            Let&apos;s get you back on the road.
          </p>
          <Link href="/" className="btn-primary mt-8">
            Back to home
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
