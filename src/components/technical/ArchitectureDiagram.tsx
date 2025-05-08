
import { Database, Lock, Server, Code } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const ArchitectureDiagram = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold mb-6">
        System Architecture Overview
      </h3>
      
      <div className="bg-gray-50 border border-gray-200 p-4 md:p-8 rounded-lg mb-8">
        {isMobile ? (
          // Mobile view - vertical stack
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            {/* User Layer */}
            <div className="mb-6">
              <div className="text-center mb-3 font-medium text-gray-700 pb-2 border-b border-gray-100">
                User Layer
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-gray-50 border border-gray-200 p-2 rounded-lg flex flex-col items-center">
                  <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mb-1">
                    <span className="text-blue-700 font-medium text-xs">U</span>
                  </div>
                  <span className="text-xs text-center">Employees</span>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-2 rounded-lg flex flex-col items-center">
                  <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mb-1">
                    <span className="text-blue-700 font-medium text-xs">U</span>
                  </div>
                  <span className="text-xs text-center">HR Team</span>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-2 rounded-lg flex flex-col items-center">
                  <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mb-1">
                    <span className="text-blue-700 font-medium text-xs">U</span>
                  </div>
                  <span className="text-xs text-center">Management</span>
                </div>
              </div>
            </div>
            
            {/* Frontend Layer */}
            <div className="mb-6">
              <div className="text-center mb-3 font-medium text-gray-700 pb-2 border-b border-gray-100">
                Frontend Layer (React)
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-blue-50 border border-blue-200 p-2 rounded-lg flex flex-col items-center">
                  <Code className="h-4 w-4 text-blue-600 mb-1" />
                  <span className="text-xs text-center">Survey UI</span>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-2 rounded-lg flex flex-col items-center">
                  <Code className="h-4 w-4 text-blue-600 mb-1" />
                  <span className="text-xs text-center">Analytics</span>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-2 rounded-lg flex flex-col items-center">
                  <Code className="h-4 w-4 text-blue-600 mb-1" />
                  <span className="text-xs text-center">Admin</span>
                </div>
              </div>
            </div>
            
            {/* Backend Layer */}
            <div>
              <div className="text-center mb-3 font-medium text-gray-700 pb-2 border-b border-gray-100">
                Backend Layer (Supabase)
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-green-50 border border-green-200 p-2 rounded-lg flex flex-col items-center">
                  <Database className="h-4 w-4 text-green-600 mb-1" />
                  <span className="text-xs text-center">PostgreSQL</span>
                </div>
                <div className="bg-green-50 border border-green-200 p-2 rounded-lg flex flex-col items-center">
                  <Lock className="h-4 w-4 text-green-600 mb-1" />
                  <span className="text-xs text-center">Auth</span>
                </div>
                <div className="bg-green-50 border border-green-200 p-2 rounded-lg flex flex-col items-center">
                  <Server className="h-4 w-4 text-green-600 mb-1" />
                  <span className="text-xs text-center">Functions</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Desktop view - layered approach
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
        )}
        
        <div className="mt-4 md:mt-6 text-xs md:text-sm text-gray-600">
          <p className="font-medium mb-1 md:mb-2">Data Flow:</p>
          <ul className="space-y-0.5 md:space-y-1 list-disc pl-4 md:pl-5">
            <li>User interactions in the React frontend trigger API calls to Supabase</li>
            <li>Supabase Authentication verifies user permissions</li>
            <li>PostgreSQL database with row-level security enforces data access rules</li>
            <li>Edge functions handle complex operations and third-party integrations</li>
            <li>Realtime subscriptions keep the UI updated with the latest data</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
