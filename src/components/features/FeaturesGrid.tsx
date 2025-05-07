import React from "react";
import FeatureCategory from "./FeatureCategory";
import FeaturesFAQ from "./FeaturesFAQ";
import AIIntegrationSection from "./AIIntegrationSection";
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

const FeaturesGrid = () => {
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
    <section className="bg-white py-16 md:py-24">
      <div className="container-tight">
        <div className="space-y-24">
          {featureCategories.map((category, idx) => (
            <FeatureCategory 
              key={idx}
              title={category.title}
              description={category.description}
              features={category.features}
            />
          ))}
          
          {/* Enhanced AI Integration Section */}
          <AIIntegrationSection />
        </div>

        {/* FAQ Section */}
        <FeaturesFAQ />
      </div>
    </section>
  );
};

export default FeaturesGrid;
