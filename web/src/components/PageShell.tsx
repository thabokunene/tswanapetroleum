import Header from "./Header";
import Footer from "./Footer";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {/* Offsets the fixed header: 60px bar on mobile, 40px utility strip + 72px bar on desktop. */}
      <main className="pt-[60px] md:pt-[112px]">{children}</main>
      <Footer />
    </>
  );
}

/**
 * Editorial page opener used by the inner pages: ruled micro-label, tight
 * display heading, and a lead paragraph set against the grid.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-navy/10 bg-white pt-16 pb-14 md:pt-24 md:pb-20">
      <div className="container-x grid-12">
        <div className="col-2-10">
          <div className="micro-label">{eyebrow}</div>
          <h1 className="display-xl text-navy">{title}</h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl font-body text-lg font-light leading-relaxed text-smoke">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
