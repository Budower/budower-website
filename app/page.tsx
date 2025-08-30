export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center p-6">
      <img src="/logo.png" alt="Budower logo" className="w-28 h-28 mb-6" />
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700">Budower</h1>
      <p className="mt-4 max-w-xl text-lg text-gray-600">
        Oprogramowanie dla wykonawców budowlanych: kosztorysy, magazyn, rozliczenia podwykonawców i analizy rentowności w czasie rzeczywistym.
      </p>
      <a
        href="mailto:kontakt@budower.com"
        className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700"
      >
        Skontaktuj się
      </a>
    </main>
  );
}
