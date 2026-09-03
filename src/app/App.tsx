import { BenefitsSection } from "../sections/benefistSection.tsx";
import { RulesSection } from "../sections/rules.tsx";
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

      <TiendaSection />
      
      <GraciasSection />
      
      <RulesSection />

      <FooterSection />
      
    </div>
  );


}
