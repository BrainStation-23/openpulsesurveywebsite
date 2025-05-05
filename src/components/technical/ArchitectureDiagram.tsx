
import { Database, Lock, Server, Code } from "lucide-react";

const ArchitectureDiagram = () => {
  return (
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
  );
};

export default ArchitectureDiagram;
