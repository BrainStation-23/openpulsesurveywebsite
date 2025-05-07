
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Benefits from "@/components/home/Benefits";
import AudienceSplit from "@/components/home/AudienceSplit";
import FeatureHighlights from "@/components/home/FeatureHighlights";
import Testimonials from "@/components/home/Testimonials";
import VideoTrailer from "@/components/home/VideoTrailer";
import CTA from "@/components/home/CTA";
import { useEffect } from "react";

// Enhanced structured data for better SEO
const structuredData = {
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
  },
  "publisher": {
    "@type": "Organization",
    "name": "Open Pulse Survey",
    "logo": {
      "@type": "ImageObject",
      "url": window.location.origin + "/logo.svg"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "featureList": "Self-hosted, Data Security, Actionable Insights, Custom Campaigns, Trend Analysis, Privacy-Focused",
  "screenshot": window.location.origin + "/opengraph-image.png",
  "softwareHelp": {
    "@type": "CreativeWork",
    "url": window.location.origin + "/technical"
  }
};

// Supplementary Organization schema to establish the brand entity
const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Open Pulse Survey",
  "url": window.location.origin,
  "logo": window.location.origin + "/logo.svg",
  "sameAs": [
    "https://twitter.com/openpulsesurvey",
    "https://www.linkedin.com/company/openpulsesurvey"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "contact@openpulsesurvey.com",
    "url": window.location.origin + "/contact"
  }
};

const Index = () => {
  // Add structured data for SEO
  useEffect(() => {
    // Add the SoftwareApplication schema
    const softwareScript = document.createElement('script');
    softwareScript.type = 'application/ld+json';
    softwareScript.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(softwareScript);
    
    // Add the Organization schema
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.innerHTML = JSON.stringify(organizationData);
    document.head.appendChild(orgScript);
    
    return () => {
      document.head.removeChild(softwareScript);
      document.head.removeChild(orgScript);
    };
  }, []);

  return (
    <Layout>
      <Hero />
      <Benefits />
      <AudienceSplit />
      <FeatureHighlights />
      <VideoTrailer />
      <CTA />
    </Layout>
  );
};

export default Index;
