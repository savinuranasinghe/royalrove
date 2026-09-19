"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./CookieConsent.css";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const savedChoice = document.cookie
      .split("; ")
      .find((item) => item.startsWith("cookie_consent="))
      ?.slice("cookie_consent=".length);
    const openSettings = () => setVisible(true);
    window.addEventListener("royalrove:cookie-settings", openSettings);

    if (savedChoice !== "all" && savedChoice !== "essential") {
      const timer = window.setTimeout(() => setVisible(true), 800);
      return () => {
        window.clearTimeout(timer);
        window.removeEventListener("royalrove:cookie-settings", openSettings);
      };
    }
    return () => window.removeEventListener("royalrove:cookie-settings", openSettings);
  }, []);

  const handleConsent = (type: "all" | "essential") => {
    const maxAge = 60 * 60 * 24 * 365;
    document.cookie = `cookie_consent=${type}; path=/; max-age=${maxAge}; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      className="cookie-banner"
      role="region"
      aria-labelledby="cookie-banner-title"
      aria-live="polite"
    >
      <div className="cookie-banner__inner">
        <div className="cookie-banner__copy">
          <p className="cookie-banner__eyebrow">Royal Rove · Privacy</p>
          <h2 id="cookie-banner-title">Your visit, your choice.</h2>
          <p className="cookie-banner__text">
            We use a cookie to remember your choice. Choose essential cookies only
            or allow all cookies. Read our{" "}
            <Link href="/privacy-policy" className="cookie-banner__link">
              Privacy Policy
            </Link>{" "}
            to learn more.
          </p>
        </div>
        <div className="cookie-banner__actions">
          <button
            type="button"
            className="cookie-banner__btn cookie-banner__btn--essential"
            onClick={() => handleConsent("essential")}
          >
            Essential Only
          </button>
          <button
            type="button"
            className="cookie-banner__btn cookie-banner__btn--accept"
            onClick={() => handleConsent("all")}
          >
            Accept All
          </button>
        </div>
      </div>
    </aside>
  );
}
