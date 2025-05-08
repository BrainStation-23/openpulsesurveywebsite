
// Type definitions for Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GA_MEASUREMENT_ID = 'G-5LGMS8D53W';

/**
 * Initialize Google Analytics
 */
export const initGoogleAnalytics = (): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Already initialized by the script in index.html
    console.log('Google Analytics already initialized');
  }
};

/**
 * Track page view
 * @param url - Page URL path
 */
export const trackPageView = (url: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

/**
 * Track event
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
  if (typeof window !== 'undefined' && window.gtag) {
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
