
import { Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PricingHero from "@/components/pricing/PricingHero";
import PricingCard from "@/components/pricing/PricingCard";
import WhyOnceOffLicense from "@/components/pricing/WhyOnceOffLicense";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import PricingCTA from "@/components/pricing/PricingCTA";
import PricingStructuredData from "@/components/pricing/PricingStructuredData";

const Pricing = () => {
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
        <div className="container-tight">
          <div className="mx-auto max-w-3xl">
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
