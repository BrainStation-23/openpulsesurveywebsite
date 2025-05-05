
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import AntiSaas from "./pages/AntiSaas";
import UseCases from "./pages/UseCases";
import Technical from "./pages/Technical";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import ThankYou from "./pages/ThankYou";
import ScrollToTop from "./components/common/ScrollToTop";
import ScrollToTopButton from "./components/common/ScrollToTopButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/anti-saas" element={<AntiSaas />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/technical" element={<Technical />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTopButton />
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
