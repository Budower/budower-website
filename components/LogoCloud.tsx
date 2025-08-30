import Container from "./Container";

const logos = ["Constructa","Primeline","UrbanCore","BuildSys","InfraX","MetroGrid"];

export default function LogoCloud(){
  return (
    <section className="py-12 border-y" style={{borderColor:'rgba(229,231,235,0.9)', background:'color-mix(in oklab, white 70%, transparent)'}}>
      <Container>
        <div className="text-center text-xs uppercase tracking-[0.3em]" style={{color:'var(--muted)'}}>Zaufali nam</div>
        <div className="mt-6 grid grid-cols-2 gap-6 opacity-80 md:grid-cols-3 lg:grid-cols-6">
          {logos.map(l => (
            <div key={l} className="flex items-center justify-center rounded-xl px-3 py-3 text-sm"
                 style={{border:'1px solid rgba(229,231,235,0.9)', background:'var(--panel)', color:'var(--muted)'}}>
              {l}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
