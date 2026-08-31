import {IconSmartphone} from "../icons/icons.tsx"

// ─── QR (placeholder) ─────────────────────────────────────────────────────────
export function QRCodeSVG({ size = 180 }: { size?: number }) {
  const cells = [
    "11111110101111111","10000010001000001","10111010110101101",
    "10111010011101101","10111011001001101","10000010110000001",
    "11111111111111111","00000001100000000","11011011001011011",
    "00110100010101010","10101011110011101","01010100001010100",
    "00000001101100011","10000011011000001","10111011100110101",
    "10111010001001011","11111110110111011",
  ];
  const cell = size / cells.length;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label="Código QR para participar en el sorteo">
      <rect width={size} height={size} fill="white" rx="4"/>
      {cells.map((row, r) =>
        row.split("").map((c, col) =>
          c === "1" ? (
            <rect key={`${r}-${col}`} x={col * cell + 1} y={r * cell + 1}
              width={cell - 0.5} height={cell - 0.5} fill="#050505"/>
          ) : null
        )
      )}
    </svg>
  );
}



// ─── QR Card ──────────────────────────────────────────────────────────────────
export function QRCard() {
  return (
    <div className="card-gold-border rounded-sm p-6 flex flex-col items-center text-center">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-4 h-px" style={{ background: "#D4A72C" }} />
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: "#D4A72C" }}>Escanea y Participa</p>
        <div className="w-4 h-px" style={{ background: "#D4A72C" }} />
      </div>
      <p className="text-xs mb-5" style={{ color: "var(--text-muted)" }}>Accede al sorteo al instante</p>
      <div className="p-3 bg-white rounded-sm mb-4 animate-pulse-gold">
        <QRCodeSVG size={160} />
      </div>
      <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
        <IconSmartphone />
        <span>Apunta tu cámara y participa al instante</span>
      </div>
    </div>
  );
}
