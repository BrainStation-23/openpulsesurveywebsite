
import React from "react";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  name: string;
  description: string;
}

interface FeatureCategoryProps {
  title: string;
  description: string;
  features: Feature[];
}

const FeatureCategory = ({ title, description, features }: FeatureCategoryProps) => {
  return (
    <div className="space-y-10">
      <div className="mx-auto max-w-2xl md:text-center">
        <h2 className="text-base font-semibold leading-7 text-blue-500">
          {title}
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => (
          <div key={i} className="flex flex-col bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div>
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-8 text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCategory;
