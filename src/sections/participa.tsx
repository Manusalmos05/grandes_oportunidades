import {SectionTitle} from "../componets/title.tsx";
import { StepItem } from "../componets/steps.tsx";
import { RedesCard } from "../componets/publicaciones.tsx";

export function ParticipaSection() {
  return ( 
  <section id="participa" className="py-20 md:py-28" style={{ background: "var(--bg-page)" }} > 
    <div className="max-w-7xl mx-auto px-4 sm:px-6"> 
      <SectionTitle label="Sorteo Especial" title="PARTICIPA —" titleGold="ES MUY FÁCIL" /> 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 items-start">
        {/* EN REDES SOCIALES */} 
        <div> 
          <h3 className="text-[11px] font-bold tracking-[0.3em] uppercase mb-8" style={{ color: "#D4A72C" }} > En nuestras redes sociales </h3> 
          <StepItem num="01" title="Síguenos" desc="En Facebook e Instagram." /> 
          <StepItem num="02" title="Dale Like" desc="A nuestra publicación sobre el sorteo en Instagram y Facebook." /> 
          <StepItem num="03" title="Etiqueta" desc="A un amigo en la publicación." /> 
          </div> 
          {/* REDES SOCIALES CARD */} 
          <div className="flex justify-center lg:pt-6"> 
            <RedesCard /> 
            </div> 
            {/* EN TIENDA */} 
            <div> 
              <h3 className="text-[11px] font-bold tracking-[0.3em] uppercase mb-8" style={{ color: "#D4A72C" }} > En nuestra Tienda </h3> 
              <StepItem num="01" title="Visítanos" desc="En Calle Federico Rogel 1, Orihuela." /> 
              <StepItem num="02" title="Compra" desc="Valor superior a 10 €." /> 
              <StepItem num="03" title="Ticket" desc="Deposita el ticket con tus datos en nuestra tienda." /> 
            </div>   
      </div>         
    </div>           
  </section>             
); }