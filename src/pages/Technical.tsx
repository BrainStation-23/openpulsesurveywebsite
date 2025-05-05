
import { useEffect } from "react";
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
  // Mark this page for identification in cleanup logic
  useEffect(() => {
    document.body.setAttribute('data-page', 'technical');
    
    return () => {
      document.body.removeAttribute('data-page');
    };
  }, []);

  return (
    <Layout
      title="Technical Architecture | Open Pulse Survey"
      description="Learn about the technical architecture, deployment options, and security features of Open Pulse Survey."
    >
      <div className="container-tight">
        <DevIconLoader />
        <HeroSection />
        <ArchitectureDiagram />
        <OpenSourceStack />
        <DeploymentOptions />
        <SecurityAndCompliance />
        <TechnicalFAQ />
        <ContactCTA />
      </div>
    </Layout>
  );
};

export default Technical;
