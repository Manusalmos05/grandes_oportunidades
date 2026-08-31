import { useState, useEffect } from 'react'
import { IconSun, IconMoon } from '@/icons/icons';

export function TemaUsuario() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return true;
    const stored = localStorage.getItem("go-theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("go-theme", dark ? "dark" : "light");
  }, [dark]);

  return { dark, toggle: () => setDark(d => !d) };
}


// ─── Theme Toggle ─────────────────────────────────────────────────────────────
export function ThemeToggle({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  return (
    <button onClick={toggle}
      aria-label={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={dark ? "Modo claro" : "Modo oscuro"}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full transition-all text-xs font-semibold"
      style={{ background: "var(--toggle-bg)", border: "1px solid var(--toggle-border)", color: "var(--toggle-text)" }}>
      {dark ? <IconSun /> : <IconMoon />}
      <span className="hidden sm:inline">{dark ? "Claro" : "Oscuro"}</span>
    </button>
  );
}