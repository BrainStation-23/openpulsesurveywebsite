
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Benefits from "@/components/home/Benefits";
import AudienceSplit from "@/components/home/AudienceSplit";
import FeatureHighlights from "@/components/home/FeatureHighlights";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import { useEffect } from "react";

const Index = () => {
  // Add structured data for SEO
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Open Pulse Survey",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "description": "A self-hosted employee feedback platform for HR professionals and management teams that keeps internal data secure.",
      "offers": {
        "@type": "Offer",
        "price": "Custom pricing",
        "priceCurrency": "USD"
      }
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <Hero />
      <Benefits />
      <AudienceSplit />
      <FeatureHighlights />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
