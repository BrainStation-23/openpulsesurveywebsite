
import React from 'react';

const PricingStructuredData = () => {
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Open Pulse Survey",
    "description": "Self-hosted employee feedback platform for HR professionals and management teams",
    "offers": [
      {
        "@type": "Offer",
        "name": "Open Source",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Self-maintained open source version",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Managed Private Cloud",
        "price": "250",
        "priceCurrency": "USD",
        "description": "Fully managed private cloud solution with dedicated support",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31"
      },
      {
        "@type": "Offer",
        "name": "Enterprise License",
        "price": "5000",
        "priceCurrency": "USD",
        "description": "One-time enterprise license with lifetime access",
        "availability": "https://schema.org/InStock"
      }
    ]
  };

  return (
    <script 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingStructuredData) }}
    />
  );
};

export default PricingStructuredData;
