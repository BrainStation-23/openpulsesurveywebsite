
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import RoleSelector from "@/components/use-cases/RoleSelector";
import HRUseCases from "@/components/use-cases/HRUseCases";
import ManagementUseCases from "@/components/use-cases/ManagementUseCases";
import DemoCTA from "@/components/use-cases/DemoCTA";

const UseCases = () => {
  const [selectedRole, setSelectedRole] = useState("hr");

  return (
    <Layout
      title="Use Cases | Open Pulse Survey"
      description="Explore how HR professionals and management teams use Open Pulse Survey to collect and act on employee feedback while ensuring data security."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24 sm:py-32">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              How teams use Open Pulse Survey
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover how HR professionals and management teams leverage our platform to drive positive change in their organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-tight">
          <RoleSelector 
            selectedRole={selectedRole} 
            onRoleChange={setSelectedRole} 
          />
            
          <div className="mt-12">
            {selectedRole === "hr" && <HRUseCases />}
            {selectedRole === "management" && <ManagementUseCases />}
          </div>

          <DemoCTA />
        </div>
      </section>
    </Layout>
  );
};

export default UseCases;
