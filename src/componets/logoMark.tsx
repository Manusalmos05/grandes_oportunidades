// ─── Logo ─────────────────────────────────────────────────────────────────────
export default function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <circle cx="40" cy="40" r="38" stroke="#D4A72C" strokeWidth="2"/>
      <text x="40" y="53" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="36" fill="#D4A72C">G</text>
      <text x="58" y="72" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="22" fill="#D90416">O</text>
    </svg>
  );
}