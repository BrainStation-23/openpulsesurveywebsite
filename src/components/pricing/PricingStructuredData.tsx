
import React from 'react';

const PricingStructuredData = () => {
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Open Pulse Survey",
    "description": "Self-hosted employee feedback platform for HR professionals and management teams",
    "offers": {
      "@type": "Offer",
      "price": "5000",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <script 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingStructuredData) }}
    />
  );
};

export default PricingStructuredData;
