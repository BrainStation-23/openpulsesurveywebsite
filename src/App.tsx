
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/common/ScrollToTop";
import ScrollToTopButton from "./components/common/ScrollToTopButton";

// Lazy load non-critical pages
const Features = lazy(() => import("./pages/Features"));
const AntiSaas = lazy(() => import("./pages/AntiSaas"));
const UseCases = lazy(() => import("./pages/UseCases"));
const Technical = lazy(() => import("./pages/Technical"));
const Contact = lazy(() => import("./pages/Contact"));
const Pricing = lazy(() => import("./pages/Pricing"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const AboutUs = lazy(() => import("./pages/AboutUs"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/features" element={<Features />} />
            <Route path="/anti-saas" element={<AntiSaas />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/technical" element={<Technical />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <ScrollToTopButton />
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
