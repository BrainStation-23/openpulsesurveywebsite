
import { Link } from 'react-router-dom';
import { Key } from "lucide-react";

const WhyOnceOffLicense = () => {
  return (
    <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-100">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Key className="h-8 w-8 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-900">Why One-Time Licensing?</h3>
          <p className="mt-2 text-gray-600">
            Open Pulse Survey believes in transparent pricing with no recurring fees. You buy the license once and own the software forever. This aligns with our anti-SaaS philosophy, ensuring you retain full control of your employee data without ongoing costs.
          </p>
          <div className="mt-4 flex items-center">
            <Link to="/anti-saas" className="text-blue-600 hover:underline">
              Learn more about our Anti-SaaS approach
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyOnceOffLicense;
