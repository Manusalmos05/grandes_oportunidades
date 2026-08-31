import { useState, useRef, useCallback, useEffect } from "react";
import {TemaUsuario, ThemeToggle} from "../componets/tema.tsx";
import { GiftIllustration, ConfettiDecor } from "../componets/cajaRegalo.tsx";
import LogoMark from "../componets/logoMark.tsx";
import {IconCelebrate, IconChevronLeft, IconChevronRight, IconClock, IconFacebook, IconGift, IconInstagram, IconMapPin,  IconPhone, IconTicket, IconTikTok, IconStar} from "../icons/icons.tsx"

import { QRCard } from "../componets/qr.tsx";
import { SectionTitle } from "../sections/title.tsx";
import { BenefitCard } from "../sections/benefist.tsx";
import { StepItem } from "../sections/steps.tsx";
import { PrizeCard, prizes } from "../sections/prize.tsx";






// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const { dark, toggle } = TemaUsuario();
  const [submitted, setSubmitted]   = useState(false);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  const maxIdx = prizes.length - 1;
  const prevPrize = useCallback(() => setCarouselIdx(i => Math.max(0, i - 1)), []);
  const nextPrize = useCallback(() => setCarouselIdx(i => Math.min(maxIdx, i + 1)), [maxIdx]);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-page)", fontFamily: "Outfit, sans-serif", color: "var(--text-primary)" }}>

 

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{
        background: dark
          ? "linear-gradient(160deg, #050505 0%, #0D0D0D 50%, #050505 100%)"
          : "linear-gradient(160deg, #F7F4EF 0%, #EDE9E2 50%, #F7F4EF 100%)",
        minHeight: "calc(100vh - 56px)" }}>
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
              <div className="w-8 h-px" style={{ background: "#D4A72C" }} />
              <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#D4A72C" }}>Estamos de Aniversario</span>
              <div className="w-8 h-px" style={{ background: "#D4A72C" }} />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-none tracking-tight mb-6 animate-fade-in-up delay-100"
              style={{ fontFamily: "Montserrat", color: "var(--text-primary)" }}>
              <span className="block">¡Y lo</span>
              <span className="block">celebramos</span>
              <span className="block text-gold-gradient" style={{ fontSize: "1.1em" }}>CONTIGO!</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed mb-8 animate-fade-in-up delay-200 max-w-md mx-auto md:mx-0"
              style={{ color: "var(--text-secondary)" }}>
              Participa en nuestro sorteo especial de aniversario y gana increíbles premios para toda la familia.
            </p>
            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 animate-fade-in-up delay-300">
              <button onClick={scrollToForm} className="btn-red px-8 py-4 text-sm font-black tracking-[0.15em] uppercase w-full sm:w-auto">
                PARTICIPA AHORA →
              </button>
            </div>
            <p className="mt-3 text-xs tracking-wider animate-fade-in-up delay-400" style={{ color: "var(--text-faint)" }}>
              Participación rápida y gratuita
            </p>
            <div className="flex items-center gap-3 mt-8 justify-center md:justify-start animate-fade-in-up delay-500">
              <div className="flex -space-x-2">
                {["D90416","D4A72C","8F0010"].map(c => (
                  <div key={c} className="w-7 h-7 rounded-full border-2 flex items-center justify-center"
                    style={{ background: `#${c}`, borderColor: "var(--bg-page)" }}>
                    <span className="text-[8px] text-white font-bold">✓</span>
                  </div>
                ))}
              </div>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                <span style={{ color: "var(--text-secondary)", fontWeight: 600 }}>+500</span> participantes ya registrados
              </p>
            </div>
          </div>
          {/* Right illustration */}
          <div className="flex-1 w-full max-w-md mx-auto md:max-w-lg animate-fade-in delay-200">
            <GiftIllustration />
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20" style={{ background: "var(--bg-page-alt)", borderTop: "1px solid var(--border-gold)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <BenefitCard delay="delay-100" icon={<IconGift />} title="Premios Exclusivos"
              desc="Tarjetas regalo, outfits completos, calzado y mucho más." />
            <BenefitCard delay="delay-200" icon={<IconTicket />} title="Participación Fácil y Rápida"
              desc="Solo rellena el formulario. En menos de un minuto ya estás participando." />
            <BenefitCard delay="delay-300" icon={<IconCelebrate />} title="Celebramos Contigo"
              desc="Nuestro aniversario es vuestra celebración. ¡Gracias por estar aquí!" />
          </div>
        </div>
      </section>

      {/* ── PARTICIPA ────────────────────────────────────────────────────── */}
      <section id="participa" className="py-20 md:py-28" style={{ background: "var(--bg-page)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle label="Sorteo Especial" title="PARTICIPA —" titleGold="ES MUY FÁCIL" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
            {/* Steps */}
            <div className="lg:col-span-1">
              <h3 className="text-[11px] font-bold tracking-[0.3em] uppercase mb-8" style={{ color: "#D4A72C" }}>Sólo 3 pasos</h3>
              <StepItem num="01" title="Escanea" desc="Escanea el código QR del cartel o escaparate de la tienda para acceder al sorteo." />
              <StepItem num="02" title="Completa" desc="Introduce tus datos en el formulario. Tarda menos de un minuto." />
              <StepItem num="03" title="¡Listo!" desc="Ya estás participando. Cruzamos los dedos para que seas el ganador." />
            </div>

            {/* QR */}
            <div className="lg:col-span-1"><QRCard /></div>
          </div>
        </div>
      </section>

      {/* ── PRIZES ───────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 overflow-hidden"
        style={{ background: "var(--bg-page-alt)", borderTop: "1px solid var(--border-gold)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle label="Lo que puedes ganar" title="PREMIOS QUE TE" titleGold="ENCANTARÁN" />
          {/* Desktop */}
          <div className="hidden md:block relative">
            <div className="overflow-hidden">
              <div className="carousel-track" style={{ transform: `translateX(calc(-${carouselIdx * 240}px))` }}>
                {prizes.map((p, i) => <PrizeCard key={i} prize={p} featured={i === 0} />)}
              </div>
            </div>
            <button onClick={prevPrize} disabled={carouselIdx === 0}
              className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full transition-all
                disabled:opacity-25 hover:border-brand-gold hover:text-brand-gold"
              style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-page)", color: "var(--text-primary)" }}
              aria-label="Premio anterior"><IconChevronLeft /></button>
            <button onClick={nextPrize} disabled={carouselIdx === maxIdx}
              className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full transition-all
                disabled:opacity-25 hover:border-brand-gold hover:text-brand-gold"
              style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-page)", color: "var(--text-primary)" }}
              aria-label="Premio siguiente"><IconChevronRight /></button>
            <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Premios">
              {prizes.map((_, i) => (
                <button key={i} onClick={() => setCarouselIdx(i)} role="tab"
                  aria-selected={i === carouselIdx} aria-label={`Premio ${i + 1}`}
                  className="rounded-full transition-all"
                  style={{ width: i === carouselIdx ? 20 : 6, height: 6,
                    background: i === carouselIdx ? "#D4A72C" : "var(--border-subtle)" }} />
              ))}
            </div>
          </div>
          {/* Mobile scroll */}
          <div className="md:hidden -mx-4 px-4 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            <div className="flex gap-4 pb-4">
              {prizes.map((p, i) => <PrizeCard key={i} prize={p} featured={i === 0} />)}
              <div className="flex-shrink-0 w-4" />
            </div>
          </div>
        </div>
      </section>

      {/* ── STORE ────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: "var(--bg-page)", borderTop: "1px solid var(--border-gold)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative rounded-sm overflow-hidden" style={{ minHeight: 360 }}>
              <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=900&h=720&fit=crop&auto=format"
                alt="Interior de la tienda Grandes Oportunidades — moda para toda la familia"
                className="w-full h-full object-cover" style={{ filter: "brightness(0.55) saturate(0.7)", minHeight: 360 }}
                loading="lazy" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(217,4,22,0.12) 0%, rgba(5,5,5,0.4) 100%)" }} />
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-px" style={{ background: "#D4A72C" }} />
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: "#D4A72C" }}>Tu tienda de moda</span>
                </div>
                <p className="font-black text-xl text-white uppercase tracking-wide" style={{ fontFamily: "Montserrat" }}>
                  Grandes <span style={{ color: "#D4A72C" }}>Oportunidades</span>
                </p>
              </div>
              <div className="absolute inset-0 rounded-sm pointer-events-none" style={{ border: "1px solid var(--border-gold)" }} />
            </div>
            {/* Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-px" style={{ background: "#D90416" }} />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: "#D90416" }}>Encuéntranos</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight mb-4"
                style={{ fontFamily: "Montserrat", color: "var(--text-primary)" }}>
                VISÍTANOS EN<br /><span className="text-gold-gradient">NUESTRA TIENDA</span>
              </h2>
              <p className="mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Descubre nuestras mejores oportunidades en moda para toda la familia. Mujer, hombre y niño en un solo lugar.
              </p>
              <address className="not-italic space-y-4 mb-8">
                {[
                  { icon: <IconMapPin />, text: "Calle Principal 12, Local 3 — Tu Ciudad" },
                  { icon: <IconPhone />,  text: "+34 600 000 000" },
                  { icon: <IconClock />,  text: "Lun–Sáb: 10:00–20:30 · Dom: 11:00–14:00" },
                ].map(({ icon, text }, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <span style={{ color: "#D4A72C" }}>{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </address>
              <div className="flex items-center gap-4">
                <span className="text-[10px] tracking-widest uppercase" style={{ color: "var(--text-faint)" }}>Síguenos</span>
                {[
                  { icon: <IconInstagram />, label: "Instagram" },
                  { icon: <IconFacebook />,  label: "Facebook" },
                  { icon: <IconTikTok />,    label: "TikTok" },
                ].map(({ icon, label }) => (
                  <a key={label} href="#" aria-label={label}
                    className="w-10 h-10 flex items-center justify-center rounded-sm transition-all hover:-translate-y-0.5"
                    style={{ border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#D4A72C")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────────────────── */}
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
            <button onClick={scrollToForm} className="btn-red px-10 py-4 text-sm font-black tracking-[0.15em] uppercase">
              PARTICIPAR AHORA →
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border-gold)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <LogoMark size={36} />
                <p className="font-black text-sm tracking-[0.06em] uppercase" style={{ fontFamily: "Montserrat", color: "var(--text-primary)" }}>
                  Grandes <span style={{ color: "#D4A72C" }}>Oportunidades</span>
                </p>
              </div>
              <p className="text-xs italic leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                Tu estilo. Tu lugar. Grandes oportunidades.
              </p>
              <div className="flex items-center gap-3">
                {[
                  { icon: <IconInstagram />, label: "Instagram" },
                  { icon: <IconFacebook />,  label: "Facebook" },
                  { icon: <IconTikTok />,    label: "TikTok" },
                ].map(({ icon, label }) => (
                  <a key={label} href="#" aria-label={label} className="transition-colors"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#D4A72C")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "#D4A72C" }}>Sorteo</p>
              <ul className="space-y-2">
                {["Bases del sorteo","Política de privacidad","Contacto","¿Cómo participar?"].map(l => (
                  <li key={l}>
                    <a href="#" className="text-sm transition-colors" style={{ color: "var(--text-muted)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "#D4A72C" }}>Contacto</p>
              <address className="not-italic space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
                <p>Calle Principal 12, Local 3</p>
                <p>+34 600 000 000</p>
                <p>info@grandesoportunidades.es</p>
              </address>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
            style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-xs" style={{ color: "var(--text-faint)" }}>© 2026 Grandes Oportunidades. Todos los derechos reservados.</p>
            <p className="text-xs" style={{ color: "var(--text-faint)" }}>Diseñado con ♥ para celebrar nuestro aniversario</p>
          </div>
        </div>
      </footer>
    </div>
  );


}
