import Container from "./Container";
import { Calculator, Boxes, Handshake, BarChart3, CalendarRange, Link2 } from "lucide-react";

const features = [
  { title: "Kosztorysy i kalkulacje", desc: "Warianty, narzuty, porównania plan vs wykonanie.", Icon: Calculator },
  { title: "Magazyn i zakupy", desc: "Stany, PZ/WZ/RW, rezerwacje, lokalizacje.", Icon: Boxes },
  { title: "Podwykonawcy", desc: "Umowy, protokoły, etapy i potrącenia.", Icon: Handshake },
  { title: "Analizy i budżety", desc: "KPI, odchylenia, prognozy EAC.", Icon: BarChart3 },
  { title: "Planowanie zasobów", desc: "Harmonogram, konflikty i sugestie.", Icon: CalendarRange },
  { title: "Integracje", desc: "Księgowość, kosztorysy, API i webhooks.", Icon: Link2 },
];

export default function FeatureGrid(){
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({title, desc, Icon}) => (
            <div key={title} className="relative rounded-2xl p-6 shadow-[0_10px_36px_rgba(16,24,40,0.06)] card">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl"
                   style={{background:'color-mix(in oklab, var(--accent) 18%, white)'}}>
                <Icon className="h-5 w-5" style={{color:'var(--primary)'}} />
              </div>
              <h3 className="mt-3 text-lg font-bold" style={{color:'var(--ink)'}}>{title}</h3>
              <p className="mt-1" style={{color:'var(--muted)'}}>{desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent hover:ring-[color:var(--primary)]/20 transition" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
