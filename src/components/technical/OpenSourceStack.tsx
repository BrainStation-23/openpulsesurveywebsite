
import { Code, Database, Lock, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const OpenSourceStack = () => {
  return (
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
  );
};

export default OpenSourceStack;
