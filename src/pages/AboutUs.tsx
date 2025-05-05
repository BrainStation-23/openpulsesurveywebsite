
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { Book } from "lucide-react";

const AboutUs = () => {
  return (
    <Layout
      title="About Open Pulse Survey | Our Story"
      description="Learn about the team behind Open Pulse Survey and how our self-hosted employee feedback platform came to be."
    >
      <section className="container-tight py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Our Story</h1>
            <p className="text-xl text-gray-600">
              The journey behind Open Pulse Survey and our mission to transform employee feedback
            </p>
          </div>

          <Card className="p-8 mb-12">
            <div className="prose prose-blue max-w-none">
              <h2 className="flex items-center text-2xl font-semibold text-gray-900 mb-6">
                <Book className="mr-2 h-5 w-5 text-blue-500" />
                How It All Began
              </h2>
              
              <p>
                Open Pulse Survey was born out of frustration with existing employee feedback tools that were either:
              </p>
              
              <ul>
                <li>Too expensive for many organizations</li>
                <li>Storing sensitive company data in third-party clouds</li>
                <li>Difficult to customize for specific organizational needs</li>
                <li>Lacking transparency about how data was being used</li>
              </ul>
              
              <p>
                In 2023, a team of HR technology experts and software developers came together with a shared vision: 
                to create an employee feedback platform that organizations could fully own and control.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The Anti-SaaS Approach</h3>
              
              <p>
                After years of watching organizations struggle with vendor lock-in, unpredictable pricing increases, 
                and concerns about data security, we decided to challenge the conventional SaaS model. We believed 
                that critical internal systems like employee feedback platforms should be self-hosted and fully 
                controlled by the organizations using them.
              </p>
              
              <p>
                This led to our <strong>Anti-SaaS philosophy</strong> — the idea that some software simply shouldn't 
                be delivered as a service, especially when it handles sensitive internal data that organizations 
                should keep within their own infrastructure.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Building for Transparency</h3>
              
              <p>
                We built Open Pulse Survey with complete transparency in mind. Our open-source approach means that 
                organizations can see exactly how the platform works, customize it to their specific needs, and deploy 
                it wherever they want — whether on their own servers, their private cloud, or through a managed 
                hosting provider they trust.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Where We Are Today</h3>
              
              <p>
                Today, Open Pulse Survey is used by organizations of all sizes that value data sovereignty and 
                customization. From small businesses to large enterprises, our platform helps teams collect actionable 
                employee feedback while maintaining complete control over their data.
              </p>
              
              <p>
                Our team continues to grow, guided by our core belief that organizations should have the freedom to 
                own and control their critical internal tools without sacrificing quality or usability.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h3>
              
              <p>
                We're on a mission to transform how organizations collect and act on employee feedback by providing 
                a secure, customizable platform that respects data sovereignty and puts control back in the hands of 
                the organizations that use it.
              </p>
            </div>
          </Card>

          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Connect With Us</h2>
            <p className="text-gray-700 mb-6">
              We're always looking to improve Open Pulse Survey and would love to hear your feedback or answer any questions.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
