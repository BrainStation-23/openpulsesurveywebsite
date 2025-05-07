
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showText?: boolean;
  useWordmark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", showText = true, useWordmark = false }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      {showText && !useWordmark && <span className="text-2xl font-bold text-blue-500">Open Pulse Survey</span>}
      {showText && useWordmark && (
        <img 
          src="/logo-wordmark.png" 
          alt="Open Pulse Survey" 
          className="h-10 object-contain" 
        />
      )}
    </Link>
  );
};

export default Logo;
