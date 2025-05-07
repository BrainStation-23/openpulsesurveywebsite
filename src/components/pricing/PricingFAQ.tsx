
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const PricingFAQ = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            {/* Highlight the free trial FAQ */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-indigo-500 shadow-md">
              <h3 className="font-semibold text-xl text-gray-900">What are the requirements for the free trial?</h3>
              <p className="mt-2 text-gray-600">
                Organizations with more than 123 employees qualify for our 3-month free trial. You'll get full access to all features during this period to evaluate the platform in your environment. No credit card or commitment is required to get started.
              </p>
              <Button asChild variant="outline" className="mt-3 border-indigo-300 text-indigo-700 hover:bg-indigo-50">
                <Link to="/contact">Check Eligibility</Link>
              </Button>
            </div>

            <div>
              <h3 className="font-semibold text-xl text-gray-900">What does the one-time license include?</h3>
              <p className="mt-2 text-gray-600">
                Your license includes the full software package, source code access, and the right to deploy on your own infrastructure. You also receive minor updates and patches free of charge.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl text-gray-900">How do major version upgrades work?</h3>
              <p className="mt-2 text-gray-600">
                When we release a major new version with significant feature additions, existing customers can upgrade at a 30% discount off the current license price.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl text-gray-900">What does the maintenance support include?</h3>
              <p className="mt-2 text-gray-600">
                Maintenance support includes technical assistance, troubleshooting, installation guidance, and configuration help. The first 3 months are included with your license, after which you can opt for a monthly support retainer.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl text-gray-900">Can I modify the source code?</h3>
              <p className="mt-2 text-gray-600">
                Yes, your license grants you the right to modify the source code to meet your specific needs. However, please note that custom modifications may affect your support eligibility or upgrade path.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
