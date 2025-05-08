
const CLARITY_ID = "rgd5umhztu";
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
 * Initialize Microsoft Clarity respecting user consent
 */
export const initClarity = (): void => {
  // Check if we already have the clarity function
  if (typeof window !== 'undefined' && hasAnalyticsConsent() && typeof (window as any).clarity === 'undefined') {
    // Just in case Clarity wasn't loaded via the HTML snippet
    try {
      (function(c: any, l: Document, a: string, r: string, i: string, t: any, y: any){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", CLARITY_ID);
      
      console.log('Microsoft Clarity initialized from React');
    } catch (error) {
      console.error('Failed to initialize Microsoft Clarity:', error);
    }
  }
};

export default {
  initClarity
};
