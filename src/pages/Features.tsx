
import Layout from "@/components/layout/Layout";
import FeaturesHero from "@/components/features/FeaturesHero";
import FeaturesGrid from "@/components/features/FeaturesGrid";
import FeaturesCTA from "@/components/features/FeaturesCTA";
import DevIconLoader from "@/components/technical/DevIconLoader";

const Features = () => {
  return (
    <Layout
      title="Features | Open Pulse Survey - Secure Employee Feedback Platform"
      description="Explore the comprehensive features of Open Pulse Survey, the self-hosted employee feedback platform that keeps your data secure."
    >
      <DevIconLoader />
      
      {/* Hero Section */}
      <FeaturesHero />

      {/* Features Grid by Category */}
      <FeaturesGrid />

      {/* CTA */}
      <FeaturesCTA />
    </Layout>
  );
};

export default Features;
