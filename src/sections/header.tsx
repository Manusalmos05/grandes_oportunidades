import { TemaUsuario, ThemeToggle } from "../componets/tema";
import {useRef} from "react"
import LogoMark from "../componets/logoMark";
export function Header(){   

     const { dark, toggle } = TemaUsuario();
     const scrollToParticipa = () => { document.getElementById("participa")?.scrollIntoView({ behavior: "smooth", block: "center", });
    };

    return(
     
     
     
      <header className="sticky top-0 z-50" style={{ background: "var(--bg-header)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border-gold)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0" aria-label="Grandes Oportunidades — Inicio">
            <LogoMark size={40} />
            <div className="hidden sm:block">
              <p className="font-black text-sm tracking-[0.09em] uppercase leading-tight"
                style={{ fontFamily: "Montserrat", color: "var(--text-primary)" }}>
                Grandes <span style={{ color: "#D4A72C" }}>Oportunidades</span>
              </p>
            </div>
          </a>
          <p className="hidden md:block text-[11px] tracking-wider italic text-center flex-1"
            style={{ color: "var(--text-muted)" }}>
            Cada día más Grandes - Cada día más Oprtunidades.
          </p>
          <div className="flex items-center gap-2 flex-shrink-0">
            <ThemeToggle dark={dark} toggle={toggle} />
            <button onClick={scrollToParticipa} className="btn-red px-4 py-2 text-[11px] font-black tracking-[0.12em] uppercase">
              PARTICIPA
            </button>
          </div>
        </div>
      </header>
      );

}