
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const PricingHero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24 sm:py-32">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Choose Your Perfect Plan
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From open source to managed cloud to enterprise license, we have options for every organization.
          </p>
          
          {/* Free Trial Highlight Banner */}
          <div className="mt-10 rounded-xl overflow-hidden shadow-xl">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-4 text-center">
              <h2 className="text-2xl font-bold text-white">3-Month Free Trial</h2>
              <p className="text-white/90 mt-1">For Managed Private Cloud - Companies with 123+ employees</p>
            </div>
            <div className="bg-white p-5 border-t-4 border-indigo-200">
              <p className="font-medium text-gray-700">No credit card required. Full access to all features with dedicated support.</p>
              <Button asChild className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white">
                <Link to="/contact" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Check Eligibility Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
