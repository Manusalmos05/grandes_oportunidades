
import { useEffect, useState } from 'react';
import Clarity from '@microsoft/clarity';
import './CookieConsent.css';

const CONSENT_KEY = 'go-cookie-consent';
const CLARITY_ID = import.meta.env.VITE_ID_CLARITY;

type ConsentChoice = 'accepted' | 'rejected';

let clarityInitialized = false;

function enableClarity() {
  if (!CLARITY_ID) {
    console.warn('Falta VITE_ID_CLARITY en el entorno.');
    return;
  }

  if (!clarityInitialized) {
    Clarity.init(CLARITY_ID);
    clarityInitialized = true;
  }

  Clarity.consentV2({
    ad_Storage: 'denied',
    analytics_Storage: 'granted',
  });
}

function disableClarity() {
  if (!clarityInitialized) return;

  Clarity.consentV2({
    ad_Storage: 'denied',
    analytics_Storage: 'denied',
  });

  // Revoca el consentimiento y elimina las cookies de Clarity.
  Clarity.consent(false);
}

export default function CookieConsent() {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY);

    if (saved === 'accepted' || saved === 'rejected') {
      setChoice(saved);
      setAnalytics(saved === 'accepted');

      if (saved === 'accepted') {
        enableClarity();
      }
    }
  }, []);

  function saveChoice(allowAnalytics: boolean) {
    const nextChoice: ConsentChoice = allowAnalytics
      ? 'accepted'
      : 'rejected';

    localStorage.setItem(CONSENT_KEY, nextChoice);
    setChoice(nextChoice);
    setAnalytics(allowAnalytics);
    setSettingsOpen(false);

    if (allowAnalytics) {
      enableClarity();
    } else {
      disableClarity();
    }
  }

  // El usuario ya ha elegido y no está cambiando sus preferencias.
  if (choice !== null && !settingsOpen) {
    return (
      <button
        type="button"
        className="cookie-settings-trigger"
        onClick={() => setSettingsOpen(true)}
        aria-label="Configurar cookies"
      >
        Configurar cookies
      </button>
    );
  }

  return (
    <div
      className="cookie-consent-backdrop"
      role="presentation"
    >
      <section
        className="cookie-consent"
        role="dialog"
        aria-modal="false"
        aria-labelledby="cookie-title"
        aria-describedby="cookie-description"
      >
        <div className="cookie-consent__header">
          <span className="cookie-consent__eyebrow">
            PRIVACIDAD
          </span>

          <h2 id="cookie-title">
            {settingsOpen
              ? 'Configura tus cookies'
              : 'Tu privacidad importa'}
          </h2>
        </div>

        <p id="cookie-description">
          Usaremos cookies solo para contar las vistas de página y mejorar la experiencia de navegación. No se recopilará información personal ni se compartirá con terceros.
        </p>

        <div className="cookie-consent__details">
          <div className="cookie-consent__detail">
            <div>
              <strong>Almacenamiento esencial</strong>
              <p>Necesario para recordar tu elección.</p>
            </div>
            <span className="cookie-consent__always">
              Siempre activo
            </span>
          </div>

          <div className="cookie-consent__detail">
            <div>
              <strong>Analítica de Microsoft Clarity</strong>
              <p>
                Nos ayuda a mejorar la experiencia de navegación.
              </p>
            </div>

            {settingsOpen ? (
              <label className="cookie-consent__switch">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(event) =>
                    setAnalytics(event.target.checked)
                  }
                />
                <span>Permitir</span>
              </label>
            ) : (
              <span className="cookie-consent__optional">
                Opcional
              </span>
            )}
          </div>
        </div>
        <div className="cookie-consent__actions">
          {settingsOpen ? (
            <>
              <button
                type="button"
                className="cookie-btn cookie-btn--secondary"
                onClick={() => saveChoice(false)}
              >
                Rechazar todas
              </button>

              <button
                type="button"
                className="cookie-btn cookie-btn--secondary"
                onClick={() => saveChoice(analytics)}
              >
                Guardar selección
              </button>

              <button
                type="button"
                className="cookie-btn cookie-btn--primary"
                onClick={() => saveChoice(true)}
              >
                Aceptar todas
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="cookie-btn cookie-btn--secondary"
                onClick={() => saveChoice(false)}
              >
                Rechazar
              </button>

              <button
                type="button"
                className="cookie-btn cookie-btn--secondary"
                onClick={() => {
                  setAnalytics(false);
                  setSettingsOpen(true);
                }}
              >
                Configurar
              </button>

              <button
                type="button"
                className="cookie-btn cookie-btn--primary"
                onClick={() => saveChoice(true)}
              >
                Aceptar todas
              </button>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
