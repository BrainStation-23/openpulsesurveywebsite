
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
            How do I set up AI integrations with external providers?
          </h3>
          <p className="mt-2 text-base leading-7 text-gray-600">
            Open Pulse Survey includes a dedicated configuration panel where you can enter API keys for services like Gemini, Claude, or OpenAI. For self-hosted models like Ollama or LM Studio, you can specify your custom endpoint URL and authentication details. Enterprise users can configure connections to AWS Bedrock, Azure OpenAI, or Vercel AI. All credentials are stored securely and only used within your environment.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold leading-7 text-gray-900">
            Are my survey data and AI interactions kept private?
          </h3>
          <p className="mt-2 text-base leading-7 text-gray-600">
            Absolutely. With Open Pulse Survey, your data never leaves your infrastructure unless you explicitly configure external AI services. When using self-hosted models or private cloud deployments, all data processing happens within your security perimeter, ensuring complete data sovereignty and compliance with privacy regulations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesFAQ;
