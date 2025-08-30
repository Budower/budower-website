import Container from "./Container";

const stats = [
  { k: "projekty", v: "1200+" },
  { k: "użytkownicy", v: "8k+" },
  { k: "pozycje w magazynie", v: "1.2M" },
  { k: "integracje", v: "20+" },
];

export default function Stats(){
  return (
    <section className="py-14 border-y" style={{background:'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6))', borderColor:'rgba(229,231,235,0.9)'}}>
      <Container>
        <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          {stats.map(s => (
            <div key={s.k} className="card py-6">
              <div className="text-3xl font-extrabold tracking-tight" style={{color:'var(--primary)'}}>{s.v}</div>
              <div className="mt-1 text-sm" style={{color:'var(--muted)'}}>{s.k}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
