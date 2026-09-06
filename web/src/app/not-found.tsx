import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="section bg-mist">
        <div className="container-narrow flex min-h-[50vh] flex-col items-center justify-center text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 display-lg">This page ran out of fuel.</h1>
          <p className="mt-4 max-w-md text-smoke">
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
