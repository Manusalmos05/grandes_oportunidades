
import LogoMark from "./logoMark"

// ─── Confetti ─────────────────────────────────────────────────────────────────

export function ConfettiDecor() {
  const pieces = [
    { x: "8%",  y: "15%", color: "#D4A72C", size: 8,  delay: 0,   dur: 3 },
    { x: "15%", y: "70%", color: "#D90416", size: 6,  delay: 0.5, dur: 2.8 },
    { x: "88%", y: "12%", color: "#F2C65C", size: 7,  delay: 0.3, dur: 3.5 },
    { x: "92%", y: "60%", color: "#D90416", size: 5,  delay: 0.8, dur: 2.5 },
    { x: "75%", y: "85%", color: "#D4A72C", size: 9,  delay: 0.2, dur: 3.2 },
    { x: "5%",  y: "45%", color: "#F2C65C", size: 5,  delay: 1,   dur: 2.7 },
    { x: "60%", y: "5%",  color: "#D90416", size: 6,  delay: 0.6, dur: 3.8 },
    { x: "45%", y: "92%", color: "#D4A72C", size: 7,  delay: 0.4, dur: 3.1 },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {pieces.map((p, i) => (
        <div key={i} className="absolute animate-float"
          style={{ left: p.x, top: p.y, animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s` }}>
          <div style={{ width: p.size, height: p.size, backgroundColor: p.color,
            transform: `rotate(${i * 37}deg)`, opacity: 0.75, borderRadius: i % 2 === 0 ? "1px" : "50%" }} />
        </div>
      ))}
    </div>
  );
}

// ─── Gift Illustration ────────────────────────────────────────────────────────
export function GiftIllustration() {
  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[340px]" aria-hidden="true">
      <ConfettiDecor />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div style={{ width: 280, height: 280, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(217,4,22,0.18) 0%, rgba(212,167,44,0.08) 50%, transparent 75%)" }} />
      </div>
      {/* Badge */}
      <div className="absolute top-8 right-8 z-20 animate-pulse-gold flex flex-col items-center justify-center"
        style={{ width: 80, height: 80, border: "2px solid #D4A72C", borderRadius: "50%",
          background: "var(--bg-card)" }}>
        <span style={{ fontFamily: "Montserrat", fontWeight: 800, fontSize: 9, color: "#D4A72C",
          letterSpacing: "0.1em", textAlign: "center", lineHeight: 1.2 }}>SORTEO</span>
        <span style={{ fontFamily: "Montserrat", fontWeight: 900, fontSize: 8, color: "var(--text-primary)",
          letterSpacing: "0.05em", textAlign: "center" }}>ANIVERSARIO</span>
      </div>
      {/* Gift SVG */}
      <div className="animate-float relative z-10" style={{ animationDuration: "4s" }}>
        <svg width="220" height="240" viewBox="0 0 220 240" fill="none">
          <rect x="20" y="110" width="180" height="120" rx="4" fill="var(--bg-card)" stroke="#D4A72C" strokeWidth="1.5"/>
          <rect x="10" y="90"  width="200" height="28"  rx="4" fill="var(--bg-card-2)" stroke="#D4A72C" strokeWidth="1.5"/>
          <rect x="10" y="90"  width="200" height="10"  rx="4" fill="rgba(212,167,44,0.08)"/>
          <rect x="98" y="110" width="24"  height="120" fill="#D90416" opacity="0.85"/>
          <rect x="98" y="90"  width="24"  height="28"  fill="#D90416"/>
          <ellipse cx="85"  cy="75" rx="28" ry="16" fill="#D90416" transform="rotate(-30 85 75)"/>
          <ellipse cx="85"  cy="75" rx="18" ry="8"  fill="#8F0010" transform="rotate(-30 85 75)"/>
          <ellipse cx="135" cy="75" rx="28" ry="16" fill="#D90416" transform="rotate(30 135 75)"/>
          <ellipse cx="135" cy="75" rx="18" ry="8"  fill="#8F0010" transform="rotate(30 135 75)"/>
          <ellipse cx="110" cy="82" rx="14" ry="12" fill="#D90416"/>
          <ellipse cx="110" cy="82" rx="7"  ry="6"  fill="#8F0010"/>
          <circle cx="50"  cy="155" r="3" fill="#D4A72C" opacity="0.6"/>
          <circle cx="170" cy="155" r="3" fill="#D4A72C" opacity="0.6"/>
          <circle cx="50"  cy="185" r="3" fill="#D4A72C" opacity="0.4"/>
          <circle cx="170" cy="185" r="3" fill="#D4A72C" opacity="0.4"/>
          <polygon points="55,130 57,136 63,136 58,140 60,146 55,142 50,146 52,140 47,136 53,136" fill="#D4A72C" opacity="0.7"/>
          <polygon points="165,220 166,223 169,223 167,225 167,228 165,226 163,228 163,225 161,223 164,223" fill="#F2C65C" opacity="0.8"/>
        </svg>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <LogoMark size={32} />
        </div>
      </div>
      {/* Balloons */}
      <div className="absolute left-4 bottom-12 animate-float" style={{ animationDelay: "0.8s", animationDuration: "3.5s" }}>
        <svg width="45" height="70" viewBox="0 0 45 70">
          <ellipse cx="22" cy="25" rx="18" ry="22" fill="var(--bg-card)" stroke="#D90416" strokeWidth="1.5"/>
          <ellipse cx="16" cy="18" rx="5" ry="7" fill="rgba(217,4,22,0.2)"/>
          <path d="M22 47 Q18 55 22 65" stroke="#D4A72C" strokeWidth="1" fill="none"/>
        </svg>
      </div>
      <div className="absolute right-4 bottom-16 animate-float" style={{ animationDelay: "1.2s", animationDuration: "3s" }}>
        <svg width="38" height="60" viewBox="0 0 38 60">
          <ellipse cx="19" cy="20" rx="15" ry="18" fill="#D90416" opacity="0.85"/>
          <ellipse cx="13" cy="14" rx="4"  ry="6"  fill="rgba(255,255,255,0.15)"/>
          <path d="M19 38 Q16 46 19 56" stroke="#D4A72C" strokeWidth="1" fill="none"/>
        </svg>
      </div>
      {/* Sparkles */}
      <div className="absolute top-12 left-12 animate-shimmer">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="#F2C65C">
          <path d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z"/>
        </svg>
      </div>
      <div className="absolute top-20 right-16 animate-shimmer delay-300">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="#D4A72C">
          <path d="M6 0 L7 5 L12 6 L7 7 L6 12 L5 7 L0 6 L5 5 Z"/>
        </svg>
      </div>
    </div>
  );
}
