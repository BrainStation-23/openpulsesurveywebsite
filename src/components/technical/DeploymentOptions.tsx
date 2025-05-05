
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Server, Cloud } from "lucide-react";

const DeploymentOptions = () => {
  const [activeTab, setActiveTab] = useState<"self-hosted" | "cloud">("self-hosted");

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
        Deployment Options
      </h2>
      
      <div className="flex flex-col space-y-6">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-2">
          <div className="inline-flex p-1 rounded-lg bg-gray-100 shadow-sm">
            <Button
              variant={activeTab === "self-hosted" ? "default" : "ghost"}
              className={`flex items-center gap-2 rounded-md px-6 py-3 ${
                activeTab === "self-hosted" 
                  ? "bg-white text-blue-600 shadow-sm" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setActiveTab("self-hosted")}
            >
              <Server className="h-5 w-5" />
              <span className="font-medium">Self-Hosted</span>
            </Button>
            <Button
              variant={activeTab === "cloud" ? "default" : "ghost"}
              className={`flex items-center gap-2 rounded-md px-6 py-3 ${
                activeTab === "cloud" 
                  ? "bg-white text-blue-600 shadow-sm" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setActiveTab("cloud")}
            >
              <Cloud className="h-5 w-5" />
              <span className="font-medium">Private Cloud</span>
            </Button>
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "self-hosted" && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">On-Premises Deployment</h3>
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
              
              <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Technical Requirements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-3 border-b pb-2 border-gray-200">Minimum Specs</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                        4 CPU cores
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                        16 GB RAM
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                        100 GB SSD storage
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                        Linux-based OS
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-3 border-b pb-2 border-gray-200">Required Software</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                        Docker Engine
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                        Docker Compose or Kubernetes
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                        Nginx or similar reverse proxy
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                        SSL certificates
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === "cloud" && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Private Cloud Deployment</h3>
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
              
              <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Supported Cloud Platforms</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="p-5 bg-gray-50 rounded-lg flex flex-col items-center justify-center hover:shadow-md transition-all duration-200 border border-gray-200">
                    <div className="bg-blue-50 p-4 rounded-full mb-3">
                      <i className="devicon-amazonwebservices-plain colored text-4xl"></i>
                    </div>
                    <span className="font-medium text-gray-800 mb-1">AWS</span>
                    <span className="text-xs text-gray-500">Amazon Web Services</span>
                  </div>
                  <div className="p-5 bg-gray-50 rounded-lg flex flex-col items-center justify-center hover:shadow-md transition-all duration-200 border border-gray-200">
                    <div className="bg-blue-50 p-4 rounded-full mb-3">
                      <i className="devicon-azure-plain colored text-4xl"></i>
                    </div>
                    <span className="font-medium text-gray-800 mb-1">Azure</span>
                    <span className="text-xs text-gray-500">Microsoft Azure</span>
                  </div>
                  <div className="p-5 bg-gray-50 rounded-lg flex flex-col items-center justify-center hover:shadow-md transition-all duration-200 border border-gray-200">
                    <div className="bg-blue-50 p-4 rounded-full mb-3">
                      <i className="devicon-googlecloud-plain colored text-4xl"></i>
                    </div>
                    <span className="font-medium text-gray-800 mb-1">GCP</span>
                    <span className="text-xs text-gray-500">Google Cloud Platform</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DeploymentOptions;
