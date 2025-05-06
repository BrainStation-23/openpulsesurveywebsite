
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { trackCustomEvent } from '@/lib/facebook-pixel';

const CTA = () => {
  const handleDemoClick = () => {
    trackCustomEvent('DemoClick', { location: 'homepage_cta' });
  };
  
  const handlePricingClick = () => {
    trackCustomEvent('PricingClick', { location: 'homepage_cta' });
  };

  return (
    <section className="section bg-blue-600">
      <div className="container-tight relative isolate overflow-hidden">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your employee feedback process?
          </h2>
          <p className="mt-6 text-lg leading-8 text-blue-100">
            Join organizations that prioritize both employee engagement and data security. Open Pulse Survey gives you the tools you need without compromising your internal data.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button 
              asChild 
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
              onClick={handleDemoClick}
            >
              <Link to="/contact">Request a Demo</Link>
            </Button>
            <Button 
              asChild 
              variant="ghost" 
              className="text-white hover:bg-blue-500"
              onClick={handlePricingClick}
            >
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
