
import { useState, useEffect } from "react";

const CONSENT_COOKIE_NAME = "analytics-consent";

/**
 * Gets a cookie by name
 */
const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null;
  
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
};

/**
 * Hook that checks if analytics consent has been granted
 * @returns {boolean} true if consent granted, false otherwise
 */
export const useAnalyticsConsent = (): boolean => {
  const [hasConsent, setHasConsent] = useState<boolean>(false);

  useEffect(() => {
    const checkConsent = () => {
      const consent = getCookie(CONSENT_COOKIE_NAME);
      setHasConsent(consent === "true");
    };

    // Check immediately on mount
    checkConsent();

    // Listen for changes to the cookie
    const handleStorageChange = () => {
      checkConsent();
    };

    // Listen for cookie changes via storage event
    window.addEventListener("storage", handleStorageChange);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return hasConsent;
};

export default useAnalyticsConsent;
