
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  BarChart,
  FileText,
  Calendar,
  TrendingUp,
  MessageSquare,
  Lock,
  Shield,
  Users,
  ChartPie,
  Settings,
} from "lucide-react";

const Features = () => {
  const featureCategories = [
    {
      title: "Survey Management",
      description: "Comprehensive tools for creating, distributing, and managing employee surveys",
      features: [
        {
          icon: FileText,
          name: "Customizable Templates",
          description: "Choose from a variety of professionally designed templates or create your own from scratch."
        },
        {
          icon: Calendar,
          name: "Smart Reminders",
          description: "Automatically send reminders to boost participation rates without manual follow-up."
        },
        {
          icon: MessageSquare,
          name: "Anonymous Feedback",
          description: "Enable anonymous responses to encourage honest and open feedback from employees."
        },
        {
          icon: Users,
          name: "Targeted Distribution",
          description: "Send surveys to specific departments, teams, or employee segments as needed."
        }
      ]
    },
    {
      title: "Analytics & Insights",
      description: "Transform raw feedback into actionable intelligence with AI-powered analytics",
      features: [
        {
          icon: BarChart,
          name: "AI-Generated Reports",
          description: "Automatically analyze responses and generate insightful reports highlighting key trends."
        },
        {
          icon: ChartPie,
          name: "Visual Dashboards",
          description: "Interactive dashboards that visualize employee sentiment and engagement metrics."
        },
        {
          icon: TrendingUp,
          name: "Campaign Comparison",
          description: "Compare results across different time periods to track improvements and trends."
        },
        {
          icon: Settings,
          name: "Custom Analysis",
          description: "Create your own metrics and analytics models tailored to your organization's needs."
        }
      ]
    },
    {
      title: "Security & Privacy",
      description: "Enterprise-grade security features that keep your employee data completely private",
      features: [
        {
          icon: Shield,
          name: "Self-Hosted Infrastructure",
          description: "Deploy on your own servers or private cloud for complete data ownership."
        },
        {
          icon: Lock,
          name: "End-to-End Encryption",
          description: "All survey data is encrypted both in transit and at rest for maximum protection."
        },
        {
          icon: Users,
          name: "Role-Based Access",
          description: "Granular access controls ensure data is only accessible to authorized personnel."
        },
        {
          icon: Shield,
          name: "Compliance Ready",
          description: "Built to help you maintain compliance with relevant data protection regulations."
        }
      ]
    }
  ];

  return (
    <Layout
      title="Features | Open Pulse Survey - Secure Employee Feedback Platform"
      description="Explore the comprehensive features of Open Pulse Survey, the self-hosted employee feedback platform that keeps your data secure."
    >
      {/* Hero Section */}
      <section className="relative isolate bg-gradient-to-b from-blue-50 to-white py-24 sm:py-32">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Powerful features for impactful feedback
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Open Pulse Survey combines enterprise-grade security with powerful feedback tools to help you gather, analyze, and act on employee insights—all while keeping your data within your control.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid by Category */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-tight">
          <div className="space-y-24">
            {featureCategories.map((category, idx) => (
              <div key={idx} className="space-y-10">
                <div className="mx-auto max-w-2xl md:text-center">
                  <h2 className="text-base font-semibold leading-7 text-blue-500">
                    {category.title}
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {category.features.map((feature, i) => (
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
            ))}
          </div>

          {/* FAQ Section */}
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
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 md:py-24">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              See Open Pulse Survey in action
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Request a personalized demo to see how our features can work for your organization's specific needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild className="bg-white text-blue-600 hover:bg-blue-50">
                <Link to="/contact">Request Demo</Link>
              </Button>
              <Button asChild variant="ghost" className="text-white hover:bg-blue-500">
                <Link to="/technical">Technical Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
