
import React from 'react';

interface UseCaseCardProps {
  title: string;
  description: string;
  steps: string[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
}

const UseCaseCard = ({ title, description, steps, testimonial }: UseCaseCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100">
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {title}
        </h3>
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        
        <h4 className="font-semibold text-blue-600 mb-3">How it works:</h4>
        <ol className="list-decimal pl-5 space-y-3 text-gray-600 mb-6">
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
        
      </div>
    </div>
  );
};

export default UseCaseCard;
