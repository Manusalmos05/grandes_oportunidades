import {createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { IconSun, IconMoon } from '@/icons/icons';

interface TemaContextType {
  dark: boolean;
  toggle: () => void;
}

const TemaContext = createContext<TemaContextType | undefined>(undefined);
export function TemaProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return true;

    const stored = localStorage.getItem("go-theme");

    if (stored) {
      return stored === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    );

    localStorage.setItem(
      "go-theme",
      dark ? "dark" : "light"
    );
  }, [dark]);

  const toggle = () => {
    setDark((current) => !current);
  };

  return (
    <TemaContext.Provider value={{ dark, toggle }}>
      {children}
    </TemaContext.Provider>
  );
}

export function TemaUsuario() {
  const context = useContext(TemaContext);

  if (!context) {
    throw new Error(
      "TemaUsuario debe utilizarse dentro de TemaProvider"
    );
  }

  return context;
}

// ─── Theme Toggle ───────────────────────────────────────────────

export function ThemeToggle({
  dark,
  toggle,
}: {
  dark: boolean;
  toggle: () => void;
}) {
  return (
    <button
      onClick={toggle}
      aria-label={
        dark
          ? "Cambiar a modo claro"
          : "Cambiar a modo oscuro"
      }
      title={dark ? "Modo claro" : "Modo oscuro"}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full transition-all text-xs font-semibold"
      style={{
        background: "var(--toggle-bg)",
        border: "1px solid var(--toggle-border)",
        color: "var(--toggle-text)",
      }}
    >
      {dark ? <IconSun /> : <IconMoon />}

      <span className="hidden sm:inline">
        {dark ? "Claro" : "Oscuro"}
      </span>
    </button>
  );
}