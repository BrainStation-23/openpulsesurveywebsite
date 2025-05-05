
import React, { useEffect } from 'react';

const DevIconLoader = () => {
  useEffect(() => {
    // Check if the link element already exists to prevent duplicates
    const existingLink = document.querySelector('link[href*="devicon.min.css"]');
    
    if (!existingLink) {
      const link = document.createElement('link');
      link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
      link.rel = 'stylesheet';
      link.id = 'devicon-stylesheet';
      document.head.appendChild(link);
    }

    return () => {
      // Only remove if this component added it
      const linkElement = document.getElementById('devicon-stylesheet');
      if (linkElement && !document.querySelector('[data-page="technical"]')) {
        document.head.removeChild(linkElement);
      }
    };
  }, []);

  return null;
};

export default DevIconLoader;
