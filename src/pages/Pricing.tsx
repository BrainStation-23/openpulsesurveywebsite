
import { Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PricingHero from "@/components/pricing/PricingHero";
import PricingCard from "@/components/pricing/PricingCard";
import WhyOnceOffLicense from "@/components/pricing/WhyOnceOffLicense";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import PricingCTA from "@/components/pricing/PricingCTA";
import PricingStructuredData from "@/components/pricing/PricingStructuredData";
import { useIsMobile } from "@/hooks/use-mobile";

const Pricing = () => {
  const isMobile = useIsMobile();
  
  return (
    <Layout
      title="Pricing | Open Pulse Survey"
      description="One-time license fee for Open Pulse Survey. Get lifetime access to our secure employee feedback platform."
    >
      <PricingStructuredData />
      
      {/* Hero Section */}
      <PricingHero />

      {/* Pricing section */}
      <section className="section bg-white">
        <div className={isMobile ? "container-tight" : "container max-w-7xl mx-auto px-4 sm:px-6"}>
          <div className={isMobile ? "mx-auto max-w-3xl" : "mx-auto"}>
            <PricingCard />
            <WhyOnceOffLicense />
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <PricingFAQ />

      {/* CTA Section */}
      <PricingCTA />
    </Layout>
  );
};

export default Pricing;
