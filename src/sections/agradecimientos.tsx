import{IconStar}from"../icons/icons.tsx";
import{ConfettiDecor}from"../componets/cajaRegalo.tsx";

import{TemaUsuario}from"../componets/tema.tsx"; 
import { useRef } from "react";

export function GraciasSection() {
    const { dark } = TemaUsuario();
    const formRef = useRef<HTMLDivElement>(null);
    const scrollToParticipa = () => { document.getElementById("participa")?.scrollIntoView({ behavior: "smooth", block: "center", });
    };
    return (
        <section className="py-24 md:py-32 relative overflow-hidden"
                style={{ background: dark ? "linear-gradient(160deg, #0A0A0A 0%, #050505 100%)" : "linear-gradient(160deg, #EDE9E2 0%, #F7F4EF 100%)" }}>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div style={{ width: 600, height: 300, borderRadius: "50%",
                    background: "radial-gradient(ellipse, rgba(217,4,22,0.08) 0%, transparent 70%)" }} />
                </div>
                <ConfettiDecor />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                  <div className="flex justify-center gap-1.5 mb-6" style={{ color: "#D4A72C" }}>
                    {[...Array(5)].map((_, i) => <IconStar key={i} />)}
                  </div>
                  <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--text-muted)" }}>
                    Un millón de gracias
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-6"
                    style={{ fontFamily: "Montserrat", color: "var(--text-primary)" }}>
                    GRACIAS POR SER PARTE<br />DE NUESTRO ANIVERSARIO
                  </h2>
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-px flex-1 max-w-[100px]" style={{ background: "linear-gradient(to right, transparent, #D90416)" }} />
                    <span style={{ color: "#D90416", fontSize: "1.25rem" }} aria-hidden="true">♥</span>
                    <div className="h-px flex-1 max-w-[100px]" style={{ background: "linear-gradient(to left, transparent, #D90416)" }} />
                  </div>
                  <p className="text-5xl sm:text-6xl md:text-7xl" style={{ fontFamily: "Dancing Script, cursive", color: "#F2C65C", lineHeight: 1.2 }}>
                    ¡Vamos por más!
                  </p>
                  <div className="mt-10">
                    <button onClick={scrollToParticipa} className="btn-red px-10 py-4 text-sm font-black tracking-[0.15em] uppercase">
                      PARTICIPAR AHORA →
                    </button>
                  </div>
                </div>
              </section>
    )
}