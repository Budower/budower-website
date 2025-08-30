import Container from "./Container";

export default function Navbar(){
  return (
    <header className="sticky top-0 z-50 border-b bg-[color:var(--panel)]/80 backdrop-blur"
      style={{borderColor: 'rgba(229,231,235,0.9)'}}>
      <Container>
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.svg" className="h-8 w-8" alt="Budower"/>
            <span className="text-lg font-bold tracking-tight">Budower</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm" style={{color:'var(--muted)'}}>
            <a href="#" className="hover:opacity-100 opacity-80" style={{color:'inherit'}}>Funkcje</a>
            <a href="#" className="hover:opacity-100 opacity-80" style={{color:'inherit'}}>Dla kogo</a>
            <a href="#" className="hover:opacity-100 opacity-80" style={{color:'inherit'}}>Cennik</a>
            <a href="#" className="hover:opacity-100 opacity-80" style={{color:'inherit'}}>Kontakt</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
