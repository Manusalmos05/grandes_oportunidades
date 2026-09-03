import { IconMapPin, IconPhone, IconClock, IconInstagram, IconFacebook, IconSmartphone } from "../icons/icons.tsx";

export function TiendaSection() {
    return (
        <section className="py-20 md:py-28" style={{ background: "var(--bg-page)", borderTop: "1px solid var(--border-gold)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Image */}
                    <div className="relative rounded-sm overflow-hidden" style={{ minHeight: 350 }}>
                      <img src={`${import.meta.env.BASE_URL}/tienda.png`}
                        alt="Exterior de la tienda Grandes Oportunidades antes y ahora"
                        className="w-full h-full object-cover" style={{ filter: "brightness(0.55) saturate(0.7)", minHeight: 350 }}
                        loading="lazy" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(217,4,22,0.12) 0%, rgba(5,5,5,0.4) 100%)" }} />
                      <div className="absolute bottom-6 left-6">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-px" style={{ background: "#D4A72C" }} />
                          <span className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: "#D4A72C" }}>Tu tienda de moda</span>
                        </div>
                        
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
                          { icon: <IconMapPin />, text: "Calle Alfonso XIII 36 — Orihuela" },
                          { icon: <IconPhone />,  text: "+34 965 30 44 94" },
                          { icon: <IconSmartphone />, text: "638 677 315" },
                          { icon: <IconClock />,  text: "Lun–Sáb: 10:00–13:45 | 17:00–20:45" },
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
                            {
                              key: "Instagram",
                              label: "Instagram",
                              href: "https://instagram.com/go_orihuela?igshid=MzRlODBiNWFlZA==",
                              icon: <IconInstagram />,
                            },
                            {
                              key: "Facebook",
                              label: "Facebook",
                              href: "https://www.facebook.com/p/Grandes-Oportunidades-Orihuela-100044479254829/",
                              icon: <IconFacebook />,
                            },
                        ].map(({  key, label, href, icon }) => (
                          <a key={key} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
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
    )
}