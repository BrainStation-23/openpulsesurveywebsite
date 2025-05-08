
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X, Check, Info } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { trackEvent } from "@/lib/google-analytics";

const CONSENT_COOKIE_NAME = "analytics-consent";

type ConsentStatus = "granted" | "denied" | "pending";

/**
 * Sets a cookie with the given name, value, and days until expiration
 */
const setCookie = (name: string, value: string, days: number) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

/**
 * Gets a cookie by name
 */
const getCookie = (name: string): string | null => {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
};

/**
 * Delete a cookie by name
 */
const deleteCookie = (name: string) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
};

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>("pending");
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    // Check if user has already made a choice
    const existingConsent = getCookie(CONSENT_COOKIE_NAME);
    
    if (existingConsent === "true") {
      setConsentStatus("granted");
      setShowConsent(false);
    } else if (existingConsent === "false") {
      setConsentStatus("denied");
      setShowConsent(false);
    } else {
      // Show the consent banner after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setCookie(CONSENT_COOKIE_NAME, "true", 365);
    setConsentStatus("granted");
    setShowConsent(false);
    
    // Track the consent event
    trackEvent("cookie_consent", "preferences", "accepted");

    // Reload the page to activate analytics
    window.location.reload();
  };

  const handleDecline = () => {
    setCookie(CONSENT_COOKIE_NAME, "false", 365);
    setConsentStatus("denied");
    setShowConsent(false);
    
    // Track the consent event (if possible without consent)
    try {
      trackEvent("cookie_consent", "preferences", "declined");
    } catch (e) {
      console.log("Could not track decline event due to cookies being disabled");
    }
  };

  const handleSavePreferences = () => {
    if (analyticsEnabled) {
      handleAccept();
    } else {
      handleDecline();
    }
    setShowDetails(false);
  };

  const handleOpenPreferences = () => {
    // Remove existing cookie to reset state
    deleteCookie(CONSENT_COOKIE_NAME);
    setShowConsent(false);
    setShowDetails(true);
  };

  const handleManageSettings = () => {
    setShowConsent(false);
    setShowDetails(true);
  };
  
  if (!showConsent && consentStatus !== "pending" && !showDetails) return null;

  return (
    <>
      {/* Minimal Cookie Banner */}
      {showConsent && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-50 border border-gray-200 dark:border-gray-700 animate-in fade-in slide-in-from-bottom-5">
          <div className="flex items-start">
            <div className="flex-shrink-0 text-blue-500 mr-3 mt-0.5">
              <Cookie size={20} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                This site uses cookies to analyze traffic and improve your experience.
              </p>
              <div className="mt-3 flex flex-col sm:flex-row gap-2">
                <Button size="sm" variant="outline" onClick={handleDecline}>
                  Decline
                </Button>
                <Button size="sm" variant="outline" onClick={handleManageSettings}>
                  Settings
                </Button>
                <Button size="sm" onClick={handleAccept}>
                  Accept
                </Button>
              </div>
            </div>
            <button 
              onClick={() => setShowConsent(false)} 
              className="ml-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Detailed Settings Sheet */}
      <Sheet open={showDetails} onOpenChange={setShowDetails}>
        <SheetContent className="w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle className="flex items-center">
              <Cookie className="mr-2" size={18} /> 
              Cookie Preferences
            </SheetTitle>
            <SheetDescription>
              Configure your cookie preferences to control how we use data from your visit.
            </SheetDescription>
          </SheetHeader>

          <div className="mt-6 space-y-6">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                We value your privacy. You can change these settings anytime.
              </AlertDescription>
            </Alert>

            <div>
              <h3 className="text-lg font-medium">Essential Cookies</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                These cookies are necessary for the website to function and cannot be disabled.
              </p>
              <div className="mt-3 flex items-center">
                <Checkbox id="essential" checked disabled />
                <Label htmlFor="essential" className="ml-2">Always active</Label>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium">Analytics Cookies</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                These cookies help us understand how visitors interact with our website and improve user experience.
              </p>
              <div className="mt-3 flex items-center">
                <Checkbox 
                  id="analytics" 
                  checked={analyticsEnabled} 
                  onCheckedChange={(checked) => setAnalyticsEnabled(checked === true)}
                />
                <Label htmlFor="analytics" className="ml-2">Enable analytics</Label>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <Button onClick={handleSavePreferences}>
                <Check className="mr-2 h-4 w-4" />
                Save Preferences
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default CookieConsent;
