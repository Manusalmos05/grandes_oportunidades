import {TemaUsuario} from "../componets/tema.tsx";
import {GiftIllustration} from "../componets/cajaRegalo.tsx";
export function Hero(){   
    const { dark } = TemaUsuario();
    
    const scrollToParticipa = () => { document.getElementById("participa")?.scrollIntoView({ behavior: "smooth", block: "center", });
    };


    return(


      <section className="relative overflow-hidden" style={{
        background: dark
          ? "linear-gradient(160deg, #050505 0%, #0D0D0D 50%, #050505 100%)"
          : "linear-gradient(160deg, #F7F4EF 0%, #EDE9E2 50%, #F7F4EF 100%)",
          minHeight: "calc(100vh - 56px)",}}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: "60px 60px" }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ width: "80%", height: 2, background: "linear-gradient(to right, transparent, #D90416, transparent)", opacity: 0.6 }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-6"
          style={{ minHeight: "calc(100vh - 56px)" }}>
          {/* Left copy */}
          <div className="flex-1 text-center md:text-left max-w-xl mx-auto md:mx-0">
            <div className="inline-flex items-center gap-2 mb-6 animate-fade-in">

            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-none tracking-tight mb-6 animate-fade-in-up delay-100"
              style={{ fontFamily: "Montserrat", color: "var(--text-primary)" }}>
              <span className="block text-gold-gradient" style={{ fontSize: "1.1em" }}>50 Años...</span>
              <span className="block">¡Y lo</span>
              <span className="block">celebramos</span>
              <span className="block text-gold-gradient" style={{ fontSize: "1.1em" }}>CONTIGO!</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed mb-8 animate-fade-in-up delay-200 max-w-md mx-auto md:mx-0"
              style={{ color: "var(--text-secondary)" }}><strong>
              Participa en nuestro sorteo especial de aniversario y gana increíbles premios para toda la familia.</strong>
            </p>
            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 animate-fade-in-up delay-300">
              <button onClick={scrollToParticipa} className="btn-red px-8 py-4 text-sm font-black tracking-[0.15em] uppercase w-full sm:w-auto">
                PARTICIPA AHORA →
              </button>
            </div>
            <p className="mt-3 text-xs tracking-wider animate-fade-in-up delay-400" style={{ color: "var(--text-faint)" }}>
              Participación rápida y gratuita
            </p>
            <div className="flex items-center gap-3 mt-8 justify-center md:justify-start animate-fade-in-up delay-500">            
            </div>
          </div>
          {/* Right illustration */}
          <div className="flex-1 w-full max-w-md mx-auto md:max-w-lg animate-fade-in delay-200">
            <GiftIllustration />
          </div>
        </div>
      </section>
    )}