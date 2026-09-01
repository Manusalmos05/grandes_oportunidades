
// ─── Section Title ─────────────────────────────────────────────────────────────
export function SectionTitle({ label, title, titleGold }: { label?: string; title: string; titleGold?: string }) {
  return (
    <div className="text-center mb-12">
      {label && <p className="text-xs font-semibold tracking-[0.3em] mb-3 uppercase" style={{ color: "#D4A72C" }}>{label}</p>}
      <div className="flex items-center justify-center gap-4">
        <div className="h-px flex-1 max-w-[80px]" style={{ background: "linear-gradient(to right, transparent, #D4A72C)" }} />
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight" style={{ fontFamily: "Montserrat,sans-serif", color: "var(--text-primary)" }}>
          {title}{" "}
          {titleGold && <span className="text-gold-gradient">{titleGold}</span>}
        </h2>
        <div className="h-px flex-1 max-w-[80px]" style={{ background: "linear-gradient(to left, transparent, #D4A72C)" }} />
      </div>
    </div>
  );
}
