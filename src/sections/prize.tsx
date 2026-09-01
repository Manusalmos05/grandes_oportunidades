import { useCallback } from "react";
import {SectionTitle} from "../componets/title.tsx";
import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "../icons/icons.tsx";
// ─── Prize Card ───────────────────────────────────────────────────────────────
export const prizes = [
  { rank: "1er", suffix: "PREMIO", name: "Tarjeta Regalo",  value: "200€", desc: "Gasta en lo que más te guste de nuestra colección", badgeColor: "#D4A72C", img: "photo-1558769132-cb1aea458c5e" },
  { rank: "2º",  suffix: "PREMIO", name: "Set de Compras",  value: "150€", desc: "Un look completo seleccionado por nuestros estilistas",    badgeColor: "#C0C0C0", img: "photo-1441984904996-e0b6ba687e04" },
  { rank: "3er", suffix: "PREMIO", name: "Outfit Completo", value: "100€", desc: "Conjunto premium de temporada para brillar cada día",     badgeColor: "#CD7F32", img: "photo-1523381210434-271e8be1f52b" },
  { rank: "4º",  suffix: "PREMIO", name: "Calzado Exclusivo", value: "80€", desc: "Zapatos o zapatillas de las mejores marcas",             badgeColor: "#888",    img: "photo-1542291026-7eec264c27ff" },
  { rank: "5º",  suffix: "PREMIO", name: "Gorra Exclusiva", value: "50€",  desc: "Accesorio premium de nuestra colección limitada",        badgeColor: "#888",    img: "photo-1588850561407-ed78c282e89b" },
];

export function PrizeCard({ prize, featured = false }: { prize: typeof prizes[0]; featured?: boolean }) {
  return (
    <article className="flex-shrink-0 rounded-sm overflow-hidden transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
      style={{ width: 220, background: "var(--bg-card-2)",
        border: `1px solid ${featured ? prize.badgeColor : "var(--border-subtle)"}`,
        boxShadow: featured ? `0 8px 32px rgba(212,167,44,0.2)` : "var(--shadow-card)" }}>
      <div className="relative overflow-hidden" style={{ height: 160 }}>
        <img src={`https://images.unsplash.com/${prize.img}?w=440&h=320&fit=crop&auto=format`}
          alt={`${prize.rank} ${prize.suffix}: ${prize.name}`} className="w-full h-full object-cover" loading="lazy"
          style={{ filter: "brightness(0.7) saturate(0.8)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--bg-card-2) 0%, transparent 60%)" }} />
        <div className="absolute top-3 left-3 px-2 py-1 rounded-sm" style={{ background: prize.badgeColor, opacity: 0.92 }}>
          <span className="text-[10px] font-black tracking-wider text-black">{prize.rank} {prize.suffix}</span>
        </div>
      </div>
      <div className="p-4">
        <p className="font-black text-base tracking-tight mb-1" style={{ color: "var(--text-primary)" }}>{prize.name}</p>
        <p className="text-xl font-black mb-2" style={{ color: prize.badgeColor === "#D4A72C" ? "#D4A72C" : prize.badgeColor }}>{prize.value}</p>
        <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{prize.desc}</p>
      </div>
    </article>
  );
}


export function PrizesSection() {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const maxIdx = prizes.length - 1;
  const prevPrize = useCallback(() => setCarouselIdx(i => Math.max(0, i - 1)), []);
  const nextPrize = useCallback(() => setCarouselIdx(i => Math.min(maxIdx, i + 1)), [maxIdx]);
  
  return (
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
  )
}