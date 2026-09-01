import {IconFacebook, IconInstagram, IconTikTok} from "../icons/icons.tsx";
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
    )
}