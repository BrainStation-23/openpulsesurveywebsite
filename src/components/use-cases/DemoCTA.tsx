
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DemoCTA = () => {
  return (
    <div className="mt-12 mx-auto max-w-3xl">
      <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to see it in action?</h3>
        <p className="text-gray-700 mb-6">
          Our team can provide a personalized demonstration showing how Open Pulse Survey can be tailored to your organization's specific needs.
        </p>
        <Button asChild className="bg-blue-500 hover:bg-blue-600">
          <Link to="/contact">Schedule a Demo</Link>
        </Button>
      </div>
    </div>
  );
};

export default DemoCTA;
