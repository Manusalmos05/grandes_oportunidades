// ─── Logo ─────────────────────────────────────────────────────────────────────
export default function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <circle cx="40" cy="40" r="38" stroke="#D4A72C" strokeWidth="2" fill="white"/>
      <image href={`${import.meta.env.BASE_URL}logo.png`} x="4"
        y="4"
        width="72" 
        height="72" 
        style={{ clipPath: "circle(50%)" }} 
      />
    </svg>
  );
}