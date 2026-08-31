

// ─── Benefit Card ─────────────────────────────────────────────────────────────
export function BenefitCard({ icon, title, desc, delay }: { icon: React.ReactNode; title: string; desc: string; delay: string }) {
  return (
    <div className={`flex flex-col items-center text-center p-6 rounded-sm card-gold-border animate-fade-in-up ${delay}`}>
      <div className="mb-4" style={{ color: "#D4A72C" }}>{icon}</div>
      <h3 className="font-black text-sm tracking-[0.15em] uppercase mb-2" style={{ color: "var(--text-primary)" }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{desc}</p>
    </div>
  );
}