
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import ScrollToTopButton from "./components/common/ScrollToTopButton";
import LazyRoute from "./components/routing/LazyRoute";
import React, { useEffect } from "react";
import { initFacebookPixel } from "@/lib/facebook-pixel";
import { initHotjar } from "@/lib/hotjar";
import { initGoogleAnalytics, trackPageView } from "@/lib/google-analytics";
import { initClarity } from "@/lib/clarity";
import CookieConsent from "./components/common/CookieConsent";

// Lazy load all pages
const Index = React.lazy(() => import("./pages/Index"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Features = React.lazy(() => import("./pages/Features"));
const AntiSaas = React.lazy(() => import("./pages/AntiSaas"));
const UseCases = React.lazy(() => import("./pages/UseCases"));
const Technical = React.lazy(() => import("./pages/Technical"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Pricing = React.lazy(() => import("./pages/Pricing"));
const ThankYou = React.lazy(() => import("./pages/ThankYou"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const Sitemap = React.lazy(() => import("./pages/Sitemap"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Improves performance by avoiding unnecessary refetches
      retry: 1, // Limit retries for failed queries
    },
  },
});

// Page tracker component
const PageTracker: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);
  
  return null;
};

const App = () => {
  // Initialize tracking tools
  useEffect(() => {
    initFacebookPixel();
    initHotjar();
    initGoogleAnalytics();
    initClarity(); // Add Microsoft Clarity initialization
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <ScrollToTop />
          <Toaster />
          <PageTracker />
          <Routes>
            <Route path="/" element={<LazyRoute component={Index} />} />
            <Route path="/features" element={<LazyRoute component={Features} />} />
            <Route path="/anti-saas" element={<LazyRoute component={AntiSaas} />} />
            <Route path="/use-cases" element={<LazyRoute component={UseCases} />} />
            <Route path="/technical" element={<LazyRoute component={Technical} />} />
            <Route path="/contact" element={<LazyRoute component={Contact} />} />
            <Route path="/pricing" element={<LazyRoute component={Pricing} />} />
            <Route path="/thank-you" element={<LazyRoute component={ThankYou} />} />
            <Route path="/about-us" element={<LazyRoute component={AboutUs} />} />
            <Route path="/privacy-policy" element={<LazyRoute component={PrivacyPolicy} />} />
            <Route path="/sitemap" element={<LazyRoute component={Sitemap} />} />
            <Route path="*" element={<LazyRoute component={NotFound} />} />
          </Routes>
          <ScrollToTopButton />
          <CookieConsent />
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
