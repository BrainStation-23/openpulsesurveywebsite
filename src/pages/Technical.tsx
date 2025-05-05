
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Database, Lock, Server, Code, Shield, Layers } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

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
              Built on open-source technologies for security, scalability, and complete data sovereignty
            </p>
            <div className="mt-8 flex justify-center gap-6">
              <div className="flex flex-col items-center">
                <div className="bg-white/10 p-3 rounded-full">
                  <Code className="h-6 w-6 text-blue-300" />
                </div>
                <span className="mt-2 text-white font-medium">React</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/10 p-3 rounded-full">
                  <Database className="h-6 w-6 text-green-300" />
                </div>
                <span className="mt-2 text-white font-medium">Supabase</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="overflow-hidden border-blue-100">
                  <div className="bg-blue-50 p-6 flex items-center gap-4 border-b border-blue-100">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <Code className="h-8 w-8 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-900">Frontend: React</h3>
                      <p className="text-blue-700">Open-source UI library</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Component-based architecture for reusability
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        React hooks for state management
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        TypeScript for type safety and better developer experience
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Responsive design for all device types
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border-green-100">
                  <div className="bg-green-50 p-6 flex items-center gap-4 border-b border-green-100">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <Database className="h-8 w-8 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-900">Backend: Supabase</h3>
                      <p className="text-green-700">Open-source Firebase alternative</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 flex-none text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        PostgreSQL database for robust data storage
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 flex-none text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Built-in authentication and authorization
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 flex-none text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Row-level security for granular data access control
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 flex-none text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Realtime subscriptions for live updates
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Architecture Diagram */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6">
                System Architecture Overview
              </h3>
              
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg mb-8">
                <div className="w-full aspect-[16/9] bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                  <div className="grid grid-rows-3 h-full">
                    {/* User Layer */}
                    <div className="flex flex-col">
                      <div className="text-center mb-2 font-medium text-gray-700">User Layer</div>
                      <div className="flex-1 flex items-center justify-center gap-8">
                        <div className="bg-gray-50 border border-gray-200 p-3 rounded-lg flex flex-col items-center">
                          <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mb-1">
                            <span className="text-blue-700 font-medium">U</span>
                          </div>
                          <span className="text-xs">Employees</span>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 p-3 rounded-lg flex flex-col items-center">
                          <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mb-1">
                            <span className="text-blue-700 font-medium">U</span>
                          </div>
                          <span className="text-xs">HR Team</span>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 p-3 rounded-lg flex flex-col items-center">
                          <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mb-1">
                            <span className="text-blue-700 font-medium">U</span>
                          </div>
                          <span className="text-xs">Management</span>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                          <path d="M12 5v14M5 12h14"></path>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Frontend Layer */}
                    <div className="flex flex-col">
                      <div className="text-center mb-2 font-medium text-gray-700">Frontend Layer (React)</div>
                      <div className="flex-1 flex items-center justify-center gap-6">
                        <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg flex flex-col items-center">
                          <Code className="h-5 w-5 text-blue-600 mb-1" />
                          <span className="text-xs">Survey UI</span>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg flex flex-col items-center">
                          <Code className="h-5 w-5 text-blue-600 mb-1" />
                          <span className="text-xs">Analytics Dashboard</span>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg flex flex-col items-center">
                          <Code className="h-5 w-5 text-blue-600 mb-1" />
                          <span className="text-xs">Admin Console</span>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                          <path d="M12 5v14M5 12h14"></path>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Backend Layer */}
                    <div className="flex flex-col">
                      <div className="text-center mb-2 font-medium text-gray-700">Backend Layer (Supabase)</div>
                      <div className="flex-1 grid grid-cols-3 gap-4">
                        <div className="bg-green-50 border border-green-200 p-3 rounded-lg flex flex-col items-center justify-center">
                          <Database className="h-5 w-5 text-green-600 mb-1" />
                          <span className="text-xs">PostgreSQL Database</span>
                        </div>
                        <div className="bg-green-50 border border-green-200 p-3 rounded-lg flex flex-col items-center justify-center">
                          <Lock className="h-5 w-5 text-green-600 mb-1" />
                          <span className="text-xs">Authentication</span>
                        </div>
                        <div className="bg-green-50 border border-green-200 p-3 rounded-lg flex flex-col items-center justify-center">
                          <Server className="h-5 w-5 text-green-600 mb-1" />
                          <span className="text-xs">Edge Functions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-sm text-gray-600">
                  <p className="font-medium mb-2">Data Flow:</p>
                  <ul className="space-y-1 list-disc pl-5">
                    <li>User interactions in the React frontend trigger API calls to Supabase</li>
                    <li>Supabase Authentication verifies user permissions</li>
                    <li>PostgreSQL database with row-level security enforces data access rules</li>
                    <li>Edge functions handle complex operations and third-party integrations</li>
                    <li>Realtime subscriptions keep the UI updated with the latest data</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Deployment Options
            </h2>
            
            <Tabs defaultValue="self-hosted" className="mb-16">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="self-hosted" className="text-base py-3">Self-Hosted</TabsTrigger>
                <TabsTrigger value="cloud" className="text-base py-3">Private Cloud</TabsTrigger>
              </TabsList>
              
              <TabsContent value="self-hosted" className="space-y-6">
                <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 p-6">
                  <h3 className="text-xl font-semibold mb-4">On-Premises Deployment</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Docker containers for both React frontend and Supabase backend
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Kubernetes orchestration for high availability
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Complete control over hardware specifications and scaling
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Ideal for organizations with strict data residency requirements
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 p-6">
                  <h3 className="text-xl font-semibold mb-4">Technical Requirements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Minimum Specs</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>4 CPU cores</li>
                        <li>16 GB RAM</li>
                        <li>100 GB SSD storage</li>
                        <li>Linux-based OS</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Required Software</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>Docker Engine</li>
                        <li>Docker Compose or Kubernetes</li>
                        <li>Nginx or similar reverse proxy</li>
                        <li>SSL certificates</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="cloud" className="space-y-6">
                <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 p-6">
                  <h3 className="text-xl font-semibold mb-4">Private Cloud Deployment</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Deploy on AWS, Azure, or Google Cloud Platform
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Automated infrastructure provisioning with Terraform
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Cloud-native services for database and object storage
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Balance of control and managed services
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 p-6">
                  <h3 className="text-xl font-semibold mb-4">Supported Cloud Platforms</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div className="p-4 bg-gray-50 rounded flex flex-col items-center justify-center">
                      <span className="font-medium text-gray-800 mb-1">AWS</span>
                      <span className="text-xs text-gray-500">Amazon Web Services</span>
                    </div>
                    <div className="p-4 bg-gray-50 rounded flex flex-col items-center justify-center">
                      <span className="font-medium text-gray-800 mb-1">Azure</span>
                      <span className="text-xs text-gray-500">Microsoft Azure</span>
                    </div>
                    <div className="p-4 bg-gray-50 rounded flex flex-col items-center justify-center">
                      <span className="font-medium text-gray-800 mb-1">GCP</span>
                      <span className="text-xs text-gray-500">Google Cloud Platform</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

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
                      Security is built into every layer of the Open Pulse Survey platform, leveraging the robust security features of both React and Supabase. From encrypted data storage to secure API endpoints and strict authentication controls, we've designed the system to protect your sensitive employee feedback data.
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
                        AES-256 encryption for data at rest
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
                        PostgreSQL native encryption features
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Survey response anonymization
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
                        Supabase row-level security policies
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
                        JWT-based authentication
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 flex-none text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Comprehensive audit logging
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
                  Open Pulse Survey is designed to help you maintain compliance with data protection regulations. By leveraging Supabase and self-hosting, you maintain complete control over data storage locations and retention policies.
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
                    Yes, Open Pulse Survey supports integration with LDAP, Active Directory, and other identity providers through standard protocols like OAuth 2.0 and SAML. Supabase's authentication system makes this integration straightforward, allowing you to use your existing user management systems.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold py-4">
                    How does the AI analysis work without sending data externally?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-0 text-gray-600">
                    Our AI analysis engine is deployed as part of your installation. We use optimized machine learning models that run within your environment using Supabase Edge Functions. No data is sent to external services for processing, ensuring complete data privacy while still providing powerful analytics capabilities.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold py-4">
                    What backup and disaster recovery options are available?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-0 text-gray-600">
                    The platform includes built-in backup capabilities that leverage PostgreSQL's native backup features. Backups can be scheduled to run automatically at your preferred intervals and stored locally or to a network location/cloud storage. We recommend implementing redundancy at both the application and database layers for mission-critical deployments.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold py-4">
                    How can we customize the platform beyond the provided features?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-0 text-gray-600">
                    As an open-source solution built on React and Supabase, Open Pulse Survey is highly customizable. Enterprise licenses include access to the source code, API documentation, and developer resources. The React component architecture makes UI customization straightforward, while Supabase provides extensive backend customization options through database functions and webhooks.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold py-4">
                    What are the benefits of using open-source technologies?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-0 text-gray-600">
                    By leveraging open-source technologies like React and Supabase, Open Pulse Survey provides several advantages: transparency (you can see how the code works), security (community-vetted code), flexibility (extensive customization options), cost efficiency (no ongoing license costs for the core technologies), and future-proofing (you're not locked into proprietary systems).
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to explore deployment options?</h3>
              <p className="text-gray-700 mb-6">
                Our technical team can provide a detailed walkthrough of the architecture and help you plan your deployment strategy for your React and Supabase-based employee feedback platform.
              </p>
              <Button asChild className="bg-blue-500 hover:bg-blue-600">
                <Link to="/contact">Contact Our Technical Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Technical;
