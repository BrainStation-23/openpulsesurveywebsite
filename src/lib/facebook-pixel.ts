
// Type definitions for Facebook Pixel
interface FacebookPixelEvent {
  [key: string]: string | number | boolean | object;
}

interface FacebookPixel {
  push: (args: any[]) => void;
  init: (pixelId: string, extraParams?: object) => void;
  track: (event: string, data?: FacebookPixelEvent) => void;
  trackCustom: (event: string, data?: FacebookPixelEvent) => void;
  trackSingle: (pixelId: string, event: string, data?: FacebookPixelEvent) => void;
  trackSingleCustom: (pixelId: string, event: string, data?: FacebookPixelEvent) => void;
}

// Declare fbq as a global variable
declare global {
  interface Window {
    fbq?: FacebookPixel;
  }
}

// Pixel ID - Replace with your actual Pixel ID when implementing
const FACEBOOK_PIXEL_ID = 'FACEBOOK_PIXEL_ID_HERE';

/**
 * Initialize Facebook Pixel
 */
export const initFacebookPixel = (): void => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('init', FACEBOOK_PIXEL_ID);
  }
};

/**
 * Track page view
 */
export const trackPageView = (): void => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

/**
 * Track standard event
 * @param event - Standard event name
 * @param data - Event parameters
 */
export const trackEvent = (event: string, data?: FacebookPixelEvent): void => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', event, data);
  }
};

/**
 * Track custom event
 * @param event - Custom event name
 * @param data - Event parameters
 */
export const trackCustomEvent = (event: string, data?: FacebookPixelEvent): void => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', event, data);
  }
};

// Convenience methods for common events
export const trackContact = (data?: FacebookPixelEvent): void => {
  trackEvent('Contact', data);
};

export const trackCompleteRegistration = (data?: FacebookPixelEvent): void => {
  trackEvent('CompleteRegistration', data);
};

export const trackLeadSubmission = (data?: FacebookPixelEvent): void => {
  trackEvent('Lead', data);
};

export const trackDemoRequest = (data?: FacebookPixelEvent): void => {
  trackCustomEvent('DemoRequest', data);
};

export const trackFeatureView = (featureName: string): void => {
  trackCustomEvent('FeatureView', { feature: featureName });
};

export default {
  initFacebookPixel,
  trackPageView,
  trackEvent,
  trackCustomEvent,
  trackContact,
  trackCompleteRegistration,
  trackLeadSubmission,
  trackDemoRequest,
  trackFeatureView
};
