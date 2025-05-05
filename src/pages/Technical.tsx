
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/technical/HeroSection";
import OpenSourceStack from "@/components/technical/OpenSourceStack";
import ArchitectureDiagram from "@/components/technical/ArchitectureDiagram";
import DeploymentOptions from "@/components/technical/DeploymentOptions";
import SecurityAndCompliance from "@/components/technical/SecurityAndCompliance";
import TechnicalFAQ from "@/components/technical/TechnicalFAQ";
import ContactCTA from "@/components/technical/ContactCTA";

const Technical = () => {
  return (
    <Layout
      title="Technical Details | Open Pulse Survey"
      description="Learn about the technical architecture, deployment options, and security features of Open Pulse Survey, the self-hosted employee feedback platform."
    >
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Built on Open Source Technologies
            </h2>
            
            <p className="text-lg text-gray-600 mb-10">
              Open Pulse Survey leverages powerful open-source technologies to deliver a secure, scalable, and customizable platform that respects your data sovereignty. Our architecture emphasizes privacy and performance while delivering enterprise-grade analytics capabilities.
            </p>

            {/* Open Source Stack */}
            <OpenSourceStack />

            {/* Architecture Diagram */}
            <ArchitectureDiagram />

            {/* Deployment Options */}
            <DeploymentOptions />

            {/* Security & Compliance */}
            <SecurityAndCompliance />

            {/* Technical FAQ */}
            <TechnicalFAQ />

            {/* CTA */}
            <ContactCTA />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Technical;
