
import Hotjar from '@hotjar/browser';

const siteId = 6394150;
const hotjarVersion = 6;
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
 * Checks if user has given consent for analytics
 */
const hasAnalyticsConsent = (): boolean => {
  return getCookie(CONSENT_COOKIE_NAME) === "true";
};

export const initHotjar = (): void => {
  if (typeof window !== 'undefined' && hasAnalyticsConsent()) {
    Hotjar.init(siteId, hotjarVersion);
  }
};

export default {
  initHotjar
};
