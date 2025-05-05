
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Database, Lock, Server, Code, Shield } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Technical = () => {
  return (
    <Layout
      title="Technical Details | Open Pulse Survey"
      description="Learn about the technical architecture, deployment options, and security features of Open Pulse Survey, the self-hosted employee feedback platform."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-24 sm:py-32">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Technical Architecture
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Designed for security, scalability, and complete data sovereignty
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              A Modern Stack Built for Enterprise Needs
            </h2>
            
            <p className="text-lg text-gray-600 mb-10">
              Open Pulse Survey is built with modern technologies chosen for their security, reliability, and ease of deployment in enterprise environments. Our architecture emphasizes data privacy while delivering powerful analytics capabilities.
            </p>

            {/* Architecture Diagram */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-6">
                System Architecture Overview
              </h3>
              
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg mb-8">
                <div className="w-full aspect-[16/9] bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                  <div className="h-full flex flex-col">
                    <div className="flex-1 flex items-center justify-center bg-gray-50 border border-dashed border-gray-200 rounded mb-4">
                      <span className="text-gray-400 text-center">Architecture Diagram<br/>(Visualized in production version)</span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded flex flex-col items-center justify-center">
                        <Database className="h-8 w-8 text-blue-500 mb-2" />
                        <span className="text-sm font-medium text-blue-900">Data Storage</span>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded flex flex-col items-center justify-center">
                        <Server className="h-8 w-8 text-blue-500 mb-2" />
                        <span className="text-sm font-medium text-blue-900">API Layer</span>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded flex flex-col items-center justify-center">
                        <Code className="h-8 w-8 text-blue-500 mb-2" />
                        <span className="text-sm font-medium text-blue-900">Frontend</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="feature-card">
                  <Server className="h-8 w-8 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Deployment Options</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Docker containers
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Kubernetes orchestration
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Private cloud (AWS, Azure, GCP)
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      On-premises data centers
                    </li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <Database className="h-8 w-8 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Data Storage</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      PostgreSQL database
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Encrypted at rest and in transit
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Automated backup solutions
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Data retention policies
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
                Security & Compliance
              </h2>
              
              <div className="mb-12">
                <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 p-8 mb-8">
                  <div className="flex items-start mb-6">
                    <Shield className="h-8 w-8 text-blue-500 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Security By Design
                      </h3>
                      <p className="text-gray-600">
                        Security is built into every layer of the Open Pulse Survey platform. From encrypted data storage to secure API endpoints and strict authentication controls, we've designed the system to protect your sensitive employee feedback data.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Data Protection</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          AES-256 encryption
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          TLS 1.3 for all connections
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          Anonymization options
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Access Controls</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          Role-based permissions
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          LDAP/SSO integration
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          Audit logging
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Compliance Framework
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    Open Pulse Survey is designed to help you maintain compliance with data protection regulations. When deployed in your environment, you maintain complete control over data storage locations and retention policies.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-gray-50 rounded flex items-center justify-center">
                      <span className="font-medium text-gray-800">GDPR</span>
                    </div>
                    <div className="p-4 bg-gray-50 rounded flex items-center justify-center">
                      <span className="font-medium text-gray-800">CCPA</span>
                    </div>
                    <div className="p-4 bg-gray-50 rounded flex items-center justify-center">
                      <span className="font-medium text-gray-800">ISO 27001</span>
                    </div>
                    <div className="p-4 bg-gray-50 rounded flex items-center justify-center">
                      <span className="font-medium text-gray-800">HIPAA</span>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
                Technical FAQ
              </h2>
              
              <div className="mb-16">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  <AccordionItem value="item-1" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-left font-semibold py-4">
                      What are the minimum system requirements?
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-0 text-gray-600">
                      For small to medium organizations (up to 500 employees), we recommend a minimum of 4 CPU cores, 8GB RAM, and 50GB storage space. For larger organizations or high survey volumes, scaling resources accordingly is advised. The platform is designed to scale horizontally for increased load.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-left font-semibold py-4">
                      Can I integrate with our existing LDAP/Active Directory?
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-0 text-gray-600">
                      Yes, Open Pulse Survey supports integration with LDAP, Active Directory, and other identity providers through standard protocols like OAuth 2.0 and SAML. This allows you to use your existing user management systems for authentication and authorization.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-left font-semibold py-4">
                      How does the AI analysis work without sending data externally?
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-0 text-gray-600">
                      Our AI analysis engine is deployed as part of your installation. We use optimized machine learning models that run within your environment. No data is sent to external services for processing, ensuring complete data privacy while still providing powerful analytics capabilities.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-left font-semibold py-4">
                      What backup and disaster recovery options are available?
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-0 text-gray-600">
                      The platform includes built-in backup capabilities that can be scheduled to run automatically at your preferred intervals. Backups can be stored locally or to a network location/cloud storage. We recommend implementing redundancy at both the application and database layers for mission-critical deployments.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-left font-semibold py-4">
                      Can we customize the platform beyond the provided features?
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-0 text-gray-600">
                      Yes, Open Pulse Survey is designed with customization in mind. Enterprise licenses include access to the source code, API documentation, and developer resources. Our professional services team can also work with you to implement custom features or integrations specific to your organization's needs.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to explore deployment options?</h3>
                <p className="text-gray-700 mb-6">
                  Our technical team can provide a detailed walkthrough of the architecture and help you plan your deployment strategy.
                </p>
                <Button asChild className="bg-blue-500 hover:bg-blue-600">
                  <Link to="/contact">Contact Our Technical Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Technical;
