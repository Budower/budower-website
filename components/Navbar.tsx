import Container from "./Container";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-slate-100">
      <Container>
        <div className="flex items-center justify-between py-4">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="Budower" className="h-8 w-8" />
            <span className="text-lg font-bold tracking-tight">Budower</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="/funkcje" className="hover:text-slate-900">Funkcje</a>
            <a href="/dla-kogo" className="hover:text-slate-900">Dla kogo</a>
            <a href="/cennik" className="hover:text-slate-900">Cennik</a>
            <a href="/kontakt" className="hover:text-slate-900">Kontakt</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
