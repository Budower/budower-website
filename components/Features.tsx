import Container from "./Container";
const items = [
  { title: "Kosztorysy i kalkulacje", desc: "Tworzenie, import, warianty, porównania plan vs wykonanie." },
  { title: "Magazyn materiałów i narzędzi", desc: "Stany, rezerwacje, PZ/WZ, historia ruchów i serwisów." },
  { title: "Podwykonawcy i rozliczenia", desc: "Umowy, protokoły, etapy, potrącenia, terminy." },
  { title: "Analizy i budżety", desc: "Budżety cząstkowe, KPI, prognozy EAC, odchylenia." },
  { title: "Planowanie zasobów", desc: "Harmonogram, obłożenie ekip, konflikty i sugestie." },
  { title: "Integracje", desc: "Księgowość, kosztorysy, API i webhooks." }
];
export default function Features() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-bold text-slate-900">{i.title}</h3>
              <p className="mt-2 text-slate-600">{i.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
