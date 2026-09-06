import Header from "./Header";
import Footer from "./Footer";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-[76px]">{children}</main>
      <Footer />
    </>
  );
}

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
    <section className="relative overflow-hidden bg-brand-gradient-soft py-20 text-white md:py-28">
      <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-teal-light/20 blur-3xl" />
      <div className="container-x relative">
        <p className="eyebrow bg-white/15 text-white">{eyebrow}</p>
        <h1 className="mt-5 heading-xl max-w-4xl">{title}</h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg text-white/85">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
