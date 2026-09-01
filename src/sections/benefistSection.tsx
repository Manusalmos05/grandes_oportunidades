// ─── Benefit Card ─────────────────────────────────────────────────────────────
import {IconGift, IconTicket, IconCelebrate} from "../icons/icons.tsx";
export function BenefitCard({ icon, title, desc, delay }: { icon: React.ReactNode; title: string; desc: string; delay: string }) {
  return (
    <div className={`flex flex-col items-center text-center p-6 rounded-sm card-gold-border animate-fade-in-up ${delay}`}>
      <div className="mb-4" style={{ color: "#D4A72C" }}>{icon}</div>
      <h3 className="font-black text-sm tracking-[0.15em] uppercase mb-2" style={{ color: "var(--text-primary)" }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{desc}</p>
    </div>
  );
}


export function BenefitsSection() {
    return (
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
    )
}