


// ─── Step Item ────────────────────────────────────────────────────────────────
export function StepItem({ num, title, children}: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 mb-8 last:mb-0">
      <div className="flex-shrink-0 w-14">
        <span className="text-4xl font-black leading-none text-gold-gradient" style={{ fontFamily: "Montserrat" }}>{num}</span>
      </div>
      <div className="pt-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-6 h-px" style={{ background: "#D90416" }} />
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: "#D90416" }}>{title}</p>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{children}</p>
      </div>
    </div>
  );
}
