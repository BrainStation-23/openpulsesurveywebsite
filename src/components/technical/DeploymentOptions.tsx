
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cloud } from "lucide-react";

const DeploymentOptions = () => {
  return (
    <>
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
                <div className="bg-blue-50 p-3 rounded-full mb-2">
                  <Cloud className="h-6 w-6 text-blue-600" />
                </div>
                <span className="font-medium text-gray-800 mb-1">AWS</span>
                <span className="text-xs text-gray-500">Amazon Web Services</span>
              </div>
              <div className="p-4 bg-gray-50 rounded flex flex-col items-center justify-center">
                <div className="bg-blue-50 p-3 rounded-full mb-2">
                  <Cloud className="h-6 w-6 text-blue-700" />
                </div>
                <span className="font-medium text-gray-800 mb-1">Azure</span>
                <span className="text-xs text-gray-500">Microsoft Azure</span>
              </div>
              <div className="p-4 bg-gray-50 rounded flex flex-col items-center justify-center">
                <div className="bg-blue-50 p-3 rounded-full mb-2">
                  <Cloud className="h-6 w-6 text-green-600" />
                </div>
                <span className="font-medium text-gray-800 mb-1">GCP</span>
                <span className="text-xs text-gray-500">Google Cloud Platform</span>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default DeploymentOptions;
