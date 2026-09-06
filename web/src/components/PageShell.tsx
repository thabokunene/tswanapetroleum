import Header from "./Header";
import Footer from "./Footer";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-14">{children}</main>
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
    <section className="bg-mist pt-24 pb-16 text-center md:pt-32 md:pb-20">
      <div className="container-narrow">
        <p className="eyebrow animate-fade-up">{eyebrow}</p>
        <h1 className="mt-4 animate-fade-up display-xl text-carbon">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl animate-fade-up lead">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
