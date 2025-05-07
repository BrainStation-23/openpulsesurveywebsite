
import { Link } from 'react-router-dom';
import { ShieldCheck } from "lucide-react";

const WhyOnceOffLicense = () => {
  return (
    <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-100">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <ShieldCheck className="h-8 w-8 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-900">Support & Maintenance Differences</h3>
          <p className="mt-2 text-gray-600">
            The main difference between our three tiers is the level of support and maintenance provided. Open Source is self-maintained with community support, Managed Private Cloud includes infrastructure management with 24-hour response time, while Enterprise provides dedicated support plus the advantage of a one-time license fee.
          </p>
          <div className="mt-4 flex items-center">
            <Link to="/contact" className="text-blue-600 hover:underline">
              Contact us to discuss which option is right for you
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyOnceOffLicense;
