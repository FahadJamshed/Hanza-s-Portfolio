"use client";

import { useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "cookie-consent";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(window.localStorage.getItem(COOKIE_CONSENT_KEY) === null);
  }, []);

  const chooseCookies = (choice: "accepted" | "rejected") => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, choice);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <aside
      className="cookie-consent"
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      <div className="cookie-consent-copy">
        <p className="cookie-consent-title">Cookies, kept simple.</p>
        <p className="cookie-consent-text">
          We use cookies to keep this portfolio running smoothly. Choose what
          works for you.
        </p>
      </div>
      <div className="cookie-consent-actions">
        <button
          type="button"
          className="cookie-consent-button cookie-consent-button-muted"
          onClick={() => chooseCookies("rejected")}
        >
          Reject
        </button>
        <button
          type="button"
          className="cookie-consent-button cookie-consent-button-primary"
          onClick={() => chooseCookies("accepted")}
        >
          Accept all
        </button>
      </div>
    </aside>
  );
}