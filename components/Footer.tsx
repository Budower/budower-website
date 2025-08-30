import Container from "./Container";
export default function Footer() {
  return (
    <footer className="border-t border-slate-100 py-8 mt-20 text-sm text-slate-500">
      <Container>
        <div className="flex items-center justify-between">
          <span>© Budower</span>
          <div className="flex gap-4">
            <a href="/polityka-prywatnosci">Polityka prywatności</a>
            <a href="/regulamin">Regulamin</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
