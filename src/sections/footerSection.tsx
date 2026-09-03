import {IconFacebook, IconInstagram, IconMapPin, IconSmartphone, IconPhone} from "../icons/icons.tsx";
import LogoMark from "../componets/logoMark.tsx";

export function FooterSection() {
  
    return (
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
                Cada dia más Grandes, cada dia más Oportunidades.
              </p>
              <div className="flex items-center gap-3">
                {[
                  { icon: <IconInstagram />, label: "Instagram", href: "https://instagram.com/go_orihuela?igshid=MzRlODBiNWFlZA==" },
                  { icon: <IconFacebook />,  label: "Facebook", href: "https://www.facebook.com/p/Grandes-Oportunidades-Orihuela-100044479254829/" },
                 
                ].map(({ icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="transition-colors"
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
                {[{ text: "Bases del sorteo", href: "#bases" }, { text: "¿Cómo participar?", href: "#participa" }].map(l => (
                  <li key={l.text}>
                    <a href={l.href} className="text-sm transition-colors" style={{ color: "var(--text-muted)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                      {l.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "#D4A72C" }}>Contacto</p>
              <address className="not-italic text-sm text-[var(--text-muted)] flex flex-col gap-2">
                <p className="flex items-center gap-2">{<IconMapPin />}Calle Alfonso XIII 36 — Orihuela</p>
                <p className="flex items-center gap-2">{<IconPhone />}+34 965 30 44 94</p>
                <p className="flex items-center gap-2">{<IconSmartphone />}638 677 315</p>
              </address>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
            style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-xs" style={{ color: "var(--text-faint)" }}>© 2026 Grandes Oportunidades. Todos los derechos reservados.</p>
            <p className="text-xs" style={{ color: "var(--text-faint)" }}>Diseñado con ♥ para celebrar nuestro aniversario 50</p>
          </div>
        </div>
      </footer>
    )
}