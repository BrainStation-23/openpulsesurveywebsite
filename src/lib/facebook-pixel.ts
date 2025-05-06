
// Type definitions for Facebook Pixel
// The correct way to type fbq is as a function with properties
declare global {
  interface Window {
    fbq?: FacebookPixelFunction;
    _fbq?: any;
  }
}

// Define fbq as a function with properties rather than just an interface
type FacebookPixelFunction = {
  (
    action: string,
    eventName: string,
    params?: Record<string, any>
  ): void;
  (
    action: string,
    pixelId: string,
    eventName?: string,
    params?: Record<string, any>
  ): void;
  callMethod?: (...args: any[]) => void;
  queue?: any[];
  push?: (...args: any[]) => void;
  loaded?: boolean;
  version?: string;
  // Include additional properties as needed
} & Function;

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
export const trackEvent = (event: string, data?: Record<string, any>): void => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', event, data);
  }
};

/**
 * Track custom event
 * @param event - Custom event name
 * @param data - Event parameters
 */
export const trackCustomEvent = (event: string, data?: Record<string, any>): void => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', event, data);
  }
};

// Convenience methods for common events
export const trackContact = (data?: Record<string, any>): void => {
  trackEvent('Contact', data);
};

export const trackCompleteRegistration = (data?: Record<string, any>): void => {
  trackEvent('CompleteRegistration', data);
};

export const trackLeadSubmission = (data?: Record<string, any>): void => {
  trackEvent('Lead', data);
};

export const trackDemoRequest = (data?: Record<string, any>): void => {
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
