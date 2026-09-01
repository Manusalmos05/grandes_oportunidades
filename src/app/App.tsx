import { BenefitsSection } from "../sections/benefistSection.tsx";
import { PrizesSection } from "../sections/prize.tsx";
import { Header } from "../sections/header.tsx";
import {Hero} from "../sections/hero.tsx";
import {ParticipaSection} from "../sections/participa.tsx";
import { TiendaSection } from "../sections/tiendaSection.tsx";
import { GraciasSection } from "../sections/agradecimientos.tsx";
import { FooterSection } from "../sections/footerSection.tsx";







// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-page)", fontFamily: "Outfit, sans-serif", color: "var(--text-primary)" }}>


      <Header/>

      <Hero/>

      <BenefitsSection />
      
      <ParticipaSection />

      <PrizesSection />

      <TiendaSection />
      
      <GraciasSection />

      <FooterSection />
      
    </div>
  );


}
