
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { memo } from 'react';

// Memoize Hero component to prevent unnecessary re-renders
const Hero = memo(() => {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-orange-50 to-white">
      <div className="container-tight pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Secure employee feedback that stays <span className="text-primary">within your walls</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Open Pulse Survey is the self-hosted platform that helps HR professionals and management teams collect, analyze, and act on employee feedback without compromising internal data security.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button 
              asChild 
              className="text-lg px-8 py-6"
              aria-label="Request a demo of Open Pulse Survey"
            >
              <Link to="/contact">Request a Demo</Link>
            </Button>
            <Link 
              to="/features" 
              className="text-base font-semibold leading-7 text-gray-900 flex items-center"
              aria-label="Explore Open Pulse Survey features"
            >
              Explore Features
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div 
        className="absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(135deg, rgba(255,238,204,0.5) 0%, rgba(255,255,255,1) 100%)'
        }}
      />
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero;
