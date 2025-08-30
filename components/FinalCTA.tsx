import Container from "./Container";

export default function FinalCTA(){
  return (
    <section className="py-20">
      <Container>
        <div className="card p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{color:'var(--ink)'}}>
            Zaczynamy budowę Twojej przewagi
          </h2>
          <p className="mx-auto mt-3 max-w-2xl" style={{color:'var(--muted)'}}>
            Dołącz do firm, które prowadzą projekty z pełną kontrolą budżetów, zasobów i rozliczeń.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="#" className="btn-primary">Umów demo</a>
            <a href="#" className="btn-ghost">Skontaktuj się →</a>
          </div>
        </div>
      </Container>
    </section>
  );
}
