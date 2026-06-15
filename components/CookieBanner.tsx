"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import Link from "next/link";
import { useEffect, useState } from "react";

const CONSENT_KEY = "cookie_consent";
const GA_ID = "G-58KJX531NH";

type Consent = "accepted" | "declined" | null;

export default function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as Consent;
    if (stored) {
      setConsent(stored);
    } else {
      // Small delay so banner doesn't flash on first paint
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setConsent("declined");
    setVisible(false);
  };

  return (
    <>
      {/* Load GA only when accepted */}
      {consent === "accepted" && <GoogleAnalytics gaId={GA_ID} />}

      {/* Banner */}
      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
          <div className="max-w-2xl mx-auto bg-[#1A1A1A] border border-white/10 rounded-xl p-5 shadow-2xl">
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              We use cookies to keep you logged in and, with your consent, to understand how visitors use our
              site via Google Analytics.{" "}
              <Link href="/cookies" className="text-white/90 underline underline-offset-2 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              {" · "}
              <Link href="/privacy-policy" className="text-white/90 underline underline-offset-2 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={accept}
                className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors cursor-pointer"
              >
                Accept all
              </button>
              <button
                onClick={decline}
                className="px-4 py-2 rounded-lg border border-white/15 text-white/60 text-sm hover:text-white hover:border-white/30 transition-colors cursor-pointer"
              >
                Essential only
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
