
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { FileText, Home, Box, DollarSign, Shield, Users, Code, Mail, Info, Lock } from "lucide-react";

const Sitemap = () => {
  const pages = [
    { name: "Home", path: "/", description: "Main landing page", icon: Home, priority: "High" },
    { name: "Features", path: "/features", description: "Product features overview", icon: Box, priority: "High" },
    { name: "Pricing", path: "/pricing", description: "Pricing information", icon: DollarSign, priority: "High" },
    { name: "Anti-SaaS", path: "/anti-saas", description: "Our anti-SaaS philosophy", icon: Shield, priority: "Medium" },
    { name: "Use Cases", path: "/use-cases", description: "How organizations use our platform", icon: Users, priority: "Medium" },
    { name: "Technical", path: "/technical", description: "Technical architecture and details", icon: Code, priority: "Medium" },
    { name: "Contact", path: "/contact", description: "Contact form and information", icon: Mail, priority: "Medium" },
    { name: "About Us", path: "/about-us", description: "Our story and mission", icon: Info, priority: "Medium" },
    { name: "Privacy Policy", path: "/privacy-policy", description: "Privacy information", icon: Lock, priority: "Low" },
    { name: "Sitemap", path: "/sitemap", description: "Overview of all pages", icon: FileText, priority: "Low" },
  ];

  return (
    <Layout
      title="Sitemap | Open Pulse Survey"
      description="Complete overview of all pages on the Open Pulse Survey website."
    >
      <section className="py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Sitemap
            </h1>
            <p className="text-lg text-gray-600">
              A complete overview of all pages on the Open Pulse Survey website.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2">
              {pages.map((page) => {
                const Icon = page.icon;
                return (
                  <Link to={page.path} key={page.path}>
                    <Card className="p-6 h-full hover:shadow-md transition-shadow border-gray-200">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="p-2 bg-blue-50 rounded-full">
                            <Icon className="h-5 w-5 text-blue-600" />
                          </div>
                        </div>
                        <div>
                          <h2 className="text-lg font-medium text-gray-900 mb-1">{page.name}</h2>
                          <p className="text-sm text-gray-500 mb-2">{page.description}</p>
                          <div className="flex items-center">
                            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                              Priority: {page.priority}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 mb-4">XML Sitemap</h2>
              <p className="text-gray-600 mb-4">
                A machine-readable XML sitemap is also available for search engines at:
              </p>
              <div className="bg-gray-100 p-3 rounded-lg overflow-x-auto">
                <a 
                  href="/sitemap.xml"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://openpulsesurvey.com/sitemap.xml
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sitemap;
