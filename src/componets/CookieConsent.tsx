
import { useEffect, useState } from 'react';
import Clarity from '@microsoft/clarity';
import './CookieConsent.css';

const CONSENT_KEY = 'go-cookie-consent';
const CLARITY_ID = 'yx3qcbitxt';

type ConsentChoice = 'accepted' | 'rejected';

let clarityInitialized = false;

function initializeClarity() {
  if (clarityInitialized) return;

  if (!CLARITY_ID) {
    console.warn('Falta el identificador de Microsoft Clarity.');
    return;
  }

  Clarity.init(CLARITY_ID);
  clarityInitialized = true;
}

function enableClarity() {
  initializeClarity();

  if (!clarityInitialized) return;

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
}
export default function CookieConsent() {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY);

    if (saved === 'accepted' || saved === 'rejected') {
      setChoice(saved);

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

    if (allowAnalytics) {
      enableClarity();
    } else {
      disableClarity();
    }
  }

  // Si ya existe una elección, no mostramos el banner.
  if (choice !== null) return null;

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
            Tu privacidad importa
          </h2>
        </div>

        <p id="cookie-description">
          Usaremos analítica únicamente si nos das tu
          consentimiento, para comprender cómo se utiliza
          la web y mejorar la experiencia de navegación.
        </p>

        <div className="cookie-consent__details">
          <div className="cookie-consent__detail">
            <div>
              <strong>Almacenamiento esencial</strong>
              <p>
                Necesario para recordar tu elección.
              </p>
            </div>
          </div>

          <div className="cookie-consent__detail">
            <div>
              <strong>
                Analítica de Microsoft Clarity
              </strong>
              <p>
                Nos ayuda a comprender y mejorar la
                experiencia de navegación.
              </p>
            </div>
          </div>
        </div>

        <div className="cookie-consent__actions">
          <button
            type="button"
            className="cookie-btn cookie-btn--secondary"
            onClick={() => saveChoice(false)}
          >
            Rechazar
          </button>

          <button
            type="button"
            className="cookie-btn cookie-btn--primary"
            onClick={() => saveChoice(true)}
          >
            Aceptar analítica
          </button>
        </div>
      </section>
    </div>
  );
}