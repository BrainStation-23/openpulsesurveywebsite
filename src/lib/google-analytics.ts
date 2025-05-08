
// Type definitions for Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GA_MEASUREMENT_ID = 'G-5LGMS8D53W';
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

/**
 * Initialize Google Analytics respecting user consent
 */
export const initGoogleAnalytics = (): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    if (hasAnalyticsConsent()) {
      // Initialize with consent
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
      console.log('Google Analytics initialized with consent');
    } else {
      // Initialize without consent
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
      console.log('Google Analytics initialized without consent');
    }
  }
};

/**
 * Track page view if consent is given
 * @param url - Page URL path
 */
export const trackPageView = (url: string): void => {
  if (typeof window !== 'undefined' && window.gtag && hasAnalyticsConsent()) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

/**
 * Track event if consent is given
 * @param action - Event action
 * @param category - Event category
 * @param label - Event label
 * @param value - Event value
 */
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
): void => {
  if (typeof window !== 'undefined' && window.gtag && hasAnalyticsConsent()) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export default {
  initGoogleAnalytics,
  trackPageView,
  trackEvent,
};
