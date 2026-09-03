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
          <StepItem num="01" title="Síguenos">
              En{" "}
              <a
                href="https://www.facebook.com/p/Grandes-Oportunidades-Orihuela-100044479254829/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold transition-colors hover:opacity-70"
                style={{ color: "#D4A72C" }}
              >
                Facebook
              </a>{" "}
              e{" "}
              <a
                href="https://www.instagram.com/go_orihuela?igshid=MzRlODBiNWFlZA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold transition-colors hover:opacity-70"
                style={{ color: "#D4A72C" }}
              >
                Instagram
              </a>
              .
            </StepItem>
          
          <StepItem num="02" title="Dale Like">
            A la publicacion del sorteo en {" "}
            <a
                href="https://www.facebook.com/p/Grandes-Oportunidades-Orihuela-100044479254829/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold transition-colors hover:opacity-70"
                style={{ color: "#D4A72C" }}
              >Facebook</a>
              {" "}e{" "}
              <a
                href="https://www.instagram.com/go_orihuela?igshid=MzRlODBiNWFlZA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold transition-colors hover:opacity-70"
                style={{ color: "#D4A72C" }}
              >Instagram</a>.
          </StepItem>
          <StepItem num="03" title="Etiqueta" >
            A un amigo en los comentarios de la publicación del sorteo en {" "}
            <a
              href="https://www.facebook.com/p/Grandes-Oportunidades-Orihuela-100044479254829/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-colors hover:opacity-70"
              style={{ color: "#D4A72C" }}
            >
              Facebook
            </a>
            {" "}e{" "}
            <a
              href="https://www.instagram.com/go_orihuela?igshid=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-colors hover:opacity-70"
              style={{ color: "#D4A72C" }}
            >
              Instagram
            </a>.

          </StepItem>
          </div> 
          {/* REDES SOCIALES CARD */} 
          <div className="flex justify-center lg:pt-6"> 
            <RedesCard /> 
            </div> 
            {/* EN TIENDA */} 
            <div> 
              <h3 className="text-[11px] font-bold tracking-[0.3em] uppercase mb-8" style={{ color: "#D4A72C" }} > En nuestra Tienda </h3> 
              <StepItem num="01" title="Visítanos" children="En Calle Alfonso XIII 36 - Orihuela." /> 
              <StepItem num="02" title="Compra" children="Cualquier producto." /> 
              <StepItem num="03" title="Ticket" children="Deposita el ticket con tus datos en nuestra tienda." /> 
            </div>   
      </div>         
    </div>           
  </section>             
); }