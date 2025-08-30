import Hero from "../components/Hero";
import LogoCloud from "../components/LogoCloud";
import Stats from "../components/Stats";
import FeatureGrid from "../components/FeatureGrid";
import FinalCTA from "../components/FinalCTA";

export default function Home(){
  return (
    <main>
      {/* SANITY MARKER V2 */}
      <div className="text-center text-xs text-blue-600">DEPLOY-MARKER: v2</div>
      <Hero />
      <LogoCloud />
      <Stats />
      <FeatureGrid />
      <FinalCTA />
    </main>
  );
}
