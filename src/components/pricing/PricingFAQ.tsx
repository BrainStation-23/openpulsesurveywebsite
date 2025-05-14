
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
                Organizations with more than 123 employees qualify for our 3-month free trial of the Managed Private Cloud service. You'll get full access to all features during this period with dedicated support. No credit card or commitment is required to get started.
              </p>
              <Button asChild variant="outline" className="mt-3 border-indigo-300 text-indigo-700 hover:bg-indigo-50">
                <Link to="/contact">Check Eligibility</Link>
              </Button>
            </div>
            
            {/* NGO Discount FAQ */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-green-500 shadow-md">
              <h3 className="font-semibold text-xl text-gray-900">How does the NGO discount work?</h3>
              <p className="mt-2 text-gray-600">
                We offer a 50% discount on both our Managed Private Cloud service and Enterprise License for verified non-profit organizations. This brings the monthly cloud cost down to $125 (instead of $250) or reduces the one-time enterprise license to $2,500 (instead of $5,000). To apply for this discount, contact us with proof of your non-profit status.
              </p>
              <Button asChild variant="outline" className="mt-3 border-green-300 text-green-700 hover:bg-green-50">
                <Link to="/contact">Apply for NGO Discount</Link>
              </Button>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-gray-900">What's the difference between the three pricing tiers?</h3>
              <p className="mt-2 text-gray-600">
                All tiers offer the same features. The main differences are in how they're deployed and supported. Open Source is free but self-maintained. Managed Private Cloud ($250/month) includes hosting and maintenance. Enterprise ($5,000 one-time) provides lifetime access with initial support and optional ongoing maintenance.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl text-gray-900">What does the Managed Private Cloud service include?</h3>
              <p className="mt-2 text-gray-600">
                With Managed Private Cloud, we take care of hosting, maintenance, updates, backups, and security. You get a dedicated environment with your data completely isolated. Support is provided with a 24-hour response time guarantee.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl text-gray-900">What does the one-time Enterprise license include?</h3>
              <p className="mt-2 text-gray-600">
                Your Enterprise license includes the full software package, source code access, and the right to deploy on your own infrastructure. You also receive minor updates, patches, 3 months of maintenance support, and a 30% discount on future major version upgrades.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl text-gray-900">What if I choose the open source version?</h3>
              <p className="mt-2 text-gray-600">
                The open source version gives you free access to the full codebase with the same features as the paid tiers. However, you'll need to handle hosting, maintenance, updates, and security yourself. Community support is available through GitHub issues and discussions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl text-gray-900">Can I modify the source code?</h3>
              <p className="mt-2 text-gray-600">
                Yes, all tiers grant you the right to modify the source code to meet your specific needs. However, please note that custom modifications may affect your support eligibility for the paid tiers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
