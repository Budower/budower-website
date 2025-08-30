import Container from "./Container";
import Button from "./Button";
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
      <Container>
        <div className="py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Pełna kontrola nad inwestycją od A do Z
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Kosztorysy, zakupy, magazyn, rozliczenia podwykonawców i analizy rentowności w czasie rzeczywistym.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button href="mailto:kontakt@budower.com">Umów demo</Button>
            <a href="/funkcje" className="font-semibold text-slate-700 hover:text-slate-900">Zobacz funkcje →</a>
          </div>
        </div>
      </Container>
    </section>
  );
}
