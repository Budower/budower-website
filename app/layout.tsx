import "../styles/globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Budower — Oprogramowanie dla wykonawców budowlanych",
  description: "Kosztorysy, magazyn, rozliczenia podwykonawców i analizy rentowności w czasie rzeczywistym.",
  openGraph: {
    title: "Budower",
    description: "Oprogramowanie dla wykonawców budowlanych.",
    url: "https://budower.com",
    siteName: "Budower",
    locale: "pl_PL",
    type: "website"
  },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="pl">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
