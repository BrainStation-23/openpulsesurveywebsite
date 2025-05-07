
import React from "react";

const FeaturesFAQ = () => {
  return (
    <div className="mt-24 mx-auto max-w-3xl">
      <div className="mx-auto max-w-2xl md:text-center">
        <h2 className="text-base font-semibold leading-7 text-blue-500">FAQ</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Frequently asked questions
        </p>
      </div>

      <div className="mt-10 space-y-8">
        <div>
          <h3 className="text-lg font-semibold leading-7 text-gray-900">
            Can I import data from other survey platforms?
          </h3>
          <p className="mt-2 text-base leading-7 text-gray-600">
            Yes, Open Pulse Survey supports importing data from most major survey platforms. Our migration tools make it easy to bring your historical data with you.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold leading-7 text-gray-900">
            What infrastructure do I need to self-host?
          </h3>
          <p className="mt-2 text-base leading-7 text-gray-600">
            Open Pulse Survey can be deployed using Docker on any server environment. We recommend a dedicated VM or container with at least 4GB RAM and 20GB storage for most organizations.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold leading-7 text-gray-900">
            How does the AI reporting work with self-hosted data?
          </h3>
          <p className="mt-2 text-base leading-7 text-gray-600">
            Our AI engine runs entirely within your environment. No data is ever sent to external services for processing, ensuring complete privacy of your employee feedback.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesFAQ;
