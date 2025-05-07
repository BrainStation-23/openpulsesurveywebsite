
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PricingCTA = () => {
  return (
    <section className="section bg-gradient-to-r from-indigo-600 to-purple-700">
      <div className="container-tight">
        <div className="mx-auto max-w-xl text-center">
          <Badge variant="outline" className="mb-4 bg-white/10 text-white border-white/30">Get Started Today</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Ready for a 3-month free trial?
          </h2>
          <p className="mt-4 text-lg text-indigo-100">
            Companies with 123+ employees can try our platform at no cost. Contact our team today to check eligibility or request a demo.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-white text-indigo-600 hover:bg-indigo-50">
              <Link to="/contact">Check Trial Eligibility</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-indigo-500">
              <Link to="/features">Explore Features</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
