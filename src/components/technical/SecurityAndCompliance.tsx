
import { Shield } from "lucide-react";

const SecurityAndCompliance = () => {
  return (
    <>
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
    </>
  );
};

export default SecurityAndCompliance;
