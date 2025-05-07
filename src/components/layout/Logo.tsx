
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
      <div className="h-10 w-10 relative">
        <svg width="40" height="40" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <style>
            {`
            .pulse-line {
              stroke-dasharray: 120;
              stroke-dashoffset: 120;
              animation: pulseDraw 2s ease-in-out infinite;
              filter: drop-shadow(0 0 4px #a855f7);
            }
            
            @keyframes pulseDraw {
              0% {
                stroke-dashoffset: 120;
                opacity: 0;
              }
              20% {
                opacity: 1;
              }
              80% {
                stroke-dashoffset: 0;
                opacity: 1;
              }
              100% {
                stroke-dashoffset: 0;
                opacity: 0;
              }
            }
            
            .pulse-circle {
              animation: pulseBeat 2s infinite ease-in-out;
            }
            
            @keyframes pulseBeat {
              0%, 100% { r: 56; }
              50% { r: 58; }
            }
            `}
          </style>
          <circle className="pulse-circle" cx="60" cy="60" r="56" fill="#111827" stroke="white" strokeWidth="4"/>
          <path className="pulse-line" 
                d="M30 60 L45 60 L50 45 L58 75 L66 40 L72 60 L90 60" 
                stroke="#a855f7" strokeWidth="4" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
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
