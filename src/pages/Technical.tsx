
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/technical/HeroSection";
import ArchitectureDiagram from "@/components/technical/ArchitectureDiagram";
import OpenSourceStack from "@/components/technical/OpenSourceStack";
import DeploymentOptions from "@/components/technical/DeploymentOptions";
import SecurityAndCompliance from "@/components/technical/SecurityAndCompliance";
import TechnicalFAQ from "@/components/technical/TechnicalFAQ";
import ContactCTA from "@/components/technical/ContactCTA";
import DevIconLoader from "@/components/technical/DevIconLoader";

const Technical = () => {
  return (
    <Layout
      title="Technical Architecture | Open Pulse Survey"
      description="Learn about the technical architecture, deployment options, and security features of Open Pulse Survey."
    >
      <DevIconLoader />
      <HeroSection />
      <ArchitectureDiagram />
      <OpenSourceStack />
      <DeploymentOptions />
      <SecurityAndCompliance />
      <TechnicalFAQ />
      <ContactCTA />
    </Layout>
  );
};

export default Technical;
