
import { Github, Cloud, Server } from "lucide-react";
import PricingTier, { PricingTierType } from "./PricingTier";
import NGODiscountAlert from "./NGODiscountAlert";
import FreeTrialAlert from "./FreeTrialAlert";

const PricingCard = () => {
  const pricingTiers: PricingTierType[] = [
    {
      name: "Open Source",
      icon: Github,
      price: "Free",
      description: "Self-maintained",
      features: [
        {
          title: "Self-hosted solution",
          description: "Deploy on your own infrastructure for complete control"
        },
        {
          title: "Full source code access",
          description: "Modify and customize to fit your organization's needs"
        },
        {
          title: "Free minor and patch updates",
          description: "Stay current with the latest improvements and bug fixes"
        },
        {
          title: "Community support",
          description: "Access to GitHub issues and discussions"
        },
      ],
      supportInfo: "Self-maintained with community support through GitHub. You handle all deployments, upgrades, and maintenance.",
      buttonText: "View on GitHub",
      buttonLink: "https://github.com/BrainStation-23/openpulsesurvey",
      buttonVariant: "outline",
      buttonIcon: Github,
    },
    {
      name: "Managed Private Cloud",
      icon: Cloud,
      price: "$250",
      interval: "month",
      description: "We handle the infrastructure",
      isPopular: true,
      features: [
        {
          title: "Dedicated private cloud",
          description: "Isolated environment specifically for your organization"
        },
        {
          title: "Full source code access",
          description: "Same features as open source plus managed infrastructure"
        },
        {
          title: "Automatic updates",
          description: "We handle all maintenance and updates for you"
        },
        {
          title: "Dedicated support",
          description: "24-hour response time on all support requests"
        },
      ],
      supportInfo: "We handle all hosting, maintenance, backups, security updates, and provide dedicated support with 24-hour response time.",
      buttonText: "Start Free Trial",
      buttonLink: "/contact",
      buttonVariant: "default",
      footerText: "No credit card required for trial",
      discountInfo: (
        <>
          <NGODiscountAlert 
            discountPercentage={50} 
            originalPrice="$250/month" 
            discountedPrice="$125/month"
            variant="highlight" 
          />
          <div className="mt-4">
            <FreeTrialAlert 
              trialDuration="3-Month" 
              minEmployees={123}
              variant="highlight" 
            />
          </div>
        </>
      )
    },
    {
      name: "Enterprise License",
      icon: Server,
      price: "$5,000",
      description: "Lifetime access",
      features: [
        {
          title: "Self-hosted solution",
          description: "Deploy on your own infrastructure for complete control"
        },
        {
          title: "Full source code access",
          description: "Modify and customize to fit your organization's needs"
        },
        {
          title: "Free minor and patch updates",
          description: "Stay current with the latest improvements and bug fixes"
        },
        {
          title: "Major version upgrades at 30% discount",
          description: "Preferential pricing for significant new feature releases"
        },
        {
          title: "3 months free maintenance support",
          description: "Get started with complimentary expert assistance"
        },
      ],
      supportInfo: "Dedicated support with 24-hour response time. 3 months of maintenance included, with option for ongoing support retainer.",
      buttonText: "Request a Demo",
      buttonLink: "/contact",
      buttonVariant: "outline",
      discountInfo: (
        <NGODiscountAlert 
          discountPercentage={50} 
          originalPrice="$5,000" 
          discountedPrice="$2,500"
        />
      )
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {pricingTiers.map((tier, index) => (
        <PricingTier key={index} tier={tier} />
      ))}
    </div>
  );
};

export default PricingCard;
