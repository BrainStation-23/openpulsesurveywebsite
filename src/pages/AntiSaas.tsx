
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Server, Lock, Database, Shield } from "lucide-react";

const AntiSaas = () => {
  return (
    <Layout
      title="Anti-SaaS Philosophy | Open Pulse Survey"
      description="Learn about the Open Pulse Survey anti-SaaS philosophy. We believe in self-hosted solutions that keep your employee data secure and within your control."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-24 sm:py-32">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Anti-SaaS Philosophy
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Why we believe your employee feedback data should never leave your organization's walls.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Why Self-Hosting Matters for Employee Feedback
            </h2>
            
            <p className="text-lg text-gray-600 mb-10">
              When it comes to collecting honest feedback from your employees, trust is everything. Traditional SaaS survey platforms require you to upload your organizational structure, employee data, and store sensitive feedback on their servers. At Open Pulse Survey, we believe there's a better way.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="feature-card">
                <Server className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Your Servers, Your Control</h3>
                <p className="text-gray-600">
                  Deploy Open Pulse Survey on your own infrastructure, whether on-premises or in your private cloud environment. No employee data ever leaves your network.
                </p>
              </div>
              
              <div className="feature-card">
                <Lock className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Complete Data Ownership</h3>
                <p className="text-gray-600">
                  Your employee feedback belongs to you alone. No third-party access, no data mining, no unexpected changes to terms of service.
                </p>
              </div>
              
              <div className="feature-card">
                <Database className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Isolated Data Per Client</h3>
                <p className="text-gray-600">
                  Unlike multi-tenant SaaS solutions, each Open Pulse Survey installation is completely independent, eliminating cross-contamination risks.
                </p>
              </div>
              
              <div className="feature-card">
                <Shield className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Privacy by Design</h3>
                <p className="text-gray-600">
                  Our architecture was built from the ground up with privacy and security as the foundation, not as afterthoughts.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              The Problem with Traditional SaaS Survey Platforms
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r">
                <h3 className="text-xl font-semibold text-red-700 mb-2">Data Vulnerability</h3>
                <p className="text-gray-700">
                  Your sensitive employee feedback and organizational data are stored on third-party servers, often subject to different jurisdictional laws and potential security breaches outside your control.
                </p>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r">
                <h3 className="text-xl font-semibold text-red-700 mb-2">Limited Customization</h3>
                <p className="text-gray-700">
                  SaaS platforms typically restrict how much you can customize the product to fit your specific organizational needs and security requirements.
                </p>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r">
                <h3 className="text-xl font-semibold text-red-700 mb-2">Long-term Cost Escalation</h3>
                <p className="text-gray-700">
                  SaaS platforms often start with low entry pricing that increases substantially as you scale users or need additional features, creating unpredictable long-term costs.
                </p>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r">
                <h3 className="text-xl font-semibold text-red-700 mb-2">Vendor Lock-in</h3>
                <p className="text-gray-700">
                  Many SaaS platforms make it difficult to export your historical data in useful formats, effectively locking you into their ecosystem once you've invested time in their platform.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              The Open Pulse Alternative
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              We've built Open Pulse Survey as the antithesis to the traditional SaaS model, while still providing all the modern features and capabilities you'd expect from a premium feedback platform.
            </p>
            
            <ul className="space-y-4 mb-12">
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">One-time licensing fee instead of perpetual subscriptions</span>
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">Full access to the source code for your licensed instance</span>
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">Optional maintenance contracts without forced upgrades</span>
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">Complete data portability and export capabilities</span>
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">Integration with your existing authentication systems</span>
              </li>
            </ul>

            <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h3>
              <p className="text-gray-700 mb-4">
                We will never pivot to a SaaS model. We believe in the fundamental right of organizations to control their own data, especially when it comes to sensitive employee feedback that can make or break your company culture.
              </p>
              <p className="text-gray-700">
                With Open Pulse Survey, what you see is what you get—a powerful employee feedback platform that respects your data sovereignty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Take control of your employee feedback data
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Learn how Open Pulse Survey can be deployed within your organization's infrastructure.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild className="bg-white text-primary hover:bg-orange-50">
                <Link to="/technical">Technical Details</Link>
              </Button>
              <Button asChild variant="ghost" className="text-white hover:bg-primary/80">
                <Link to="/contact">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AntiSaas;
