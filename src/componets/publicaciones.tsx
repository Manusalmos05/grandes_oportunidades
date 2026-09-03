import {IconFacebook,IconInstagram, IconSmartphone} from "../icons/icons.tsx"

// ─── Redes Card ────────────────────────────────────────────────────────────────
export function RedesCard() {
  return (
    <div className="card-gold-border rounded-sm p-6 flex flex-col items-center text-center">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-4 h-px" style={{ background: "#D4A72C" }} />
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: "#D4A72C" }}>Síguenos y Participa</p>
        <div className="w-4 h-px" style={{ background: "#D4A72C" }} />
      </div>
      <p className="text-xs mb-5" style={{ color: "var(--text-muted)" }}>Accede al sorteo al instante</p>
      <div className="grid grid-cols-2 gap-4 rounded-sm mb-4 animate-pulse-gold"
      style={{
            background: "var(--bg-header)",
            border: "1px solid var(--border-gold)",
          }}
        >
          <a
            href="https://www.facebook.com/p/Grandes-Oportunidades-Orihuela-100044479254829/" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center p-4 rounded-sm transition-transform hover:scale-110"
            aria-label="Facebook"
          >
            <IconFacebook />
          </a>

          <a
            href="https://instagram.com/go_orihuela?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center p-4 rounded-sm transition-transform hover:scale-110"
            aria-label="Instagram"
          >
            <IconInstagram />
          </a>
        </div>
      <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
        <IconSmartphone />
        <span>Visita nuestras redes sociales</span>
      </div>
    </div>

  );
}
