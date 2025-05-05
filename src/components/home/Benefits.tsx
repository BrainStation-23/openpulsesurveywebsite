
import {
  Shield,
  BarChart,
  Users,
  LineChart,
  Lock,
  Server,
} from "lucide-react";

const benefits = [
  {
    name: 'Data Security',
    description:
      'Keep all your employee feedback data within your own infrastructure. No third-party access, ever.',
    icon: Shield,
  },
  {
    name: 'Actionable Insights',
    description:
      'Transform raw feedback into clear, actionable reports with AI-powered analytics and visualization tools.',
    icon: BarChart,
  },
  {
    name: 'Custom Campaigns',
    description:
      'Design targeted surveys for specific teams or company-wide initiatives with flexible templates.',
    icon: Users,
  },
  {
    name: 'Trend Analysis',
    description:
      'Track engagement metrics over time to identify patterns and measure the impact of your initiatives.',
    icon: LineChart,
  },
  {
    name: 'Privacy-Focused',
    description:
      'Anonymous feedback options to encourage honest input while maintaining complete data privacy.',
    icon: Lock,
  },
  {
    name: 'Self-Hosted',
    description:
      'Deploy on your own servers or private cloud environment for complete control over your data.',
    icon: Server,
  },
];

const Benefits = () => {
  return (
    <section className="section bg-white">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-500">Platform Benefits</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to understand your workplace
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Open Pulse Survey combines powerful feedback collection tools with enterprise-grade security, giving you complete ownership of your employee engagement data.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="feature-card flex flex-col animate-fade-in">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                  <benefit.icon className="h-6 w-6 flex-none text-blue-500" aria-hidden="true" />
                  {benefit.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{benefit.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
