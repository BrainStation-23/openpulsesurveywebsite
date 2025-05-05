
import { useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import { Mail, Phone, MessageSquare, Calendar } from "lucide-react";

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          region: string;
          target?: string;
        }) => void;
      };
    };
  }
}

const Contact = () => {
  useEffect(() => {
    // Load HubSpot script
    const script = document.createElement('script');
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "1864636",
          formId: "53de4a36-0af9-486a-8e66-9b6ca262357f",
          region: "na1",
          target: "#hubspot-form-container"
        });
      }
    };

    return () => {
      // Clean up script on unmount
      document.body.removeChild(script);
    };
  }, []);

  // Add structured data for SEO
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Open Pulse Survey",
    "url": window.location.origin,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    }
  };

  return (
    <Layout
      title="Contact Us | Open Pulse Survey"
      description="Request a demo or get in touch with our team to learn how Open Pulse Survey can help your organization collect and act on employee feedback securely."
    >
      {/* Add structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactStructuredData) }} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24 sm:py-32">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Get in touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Request a demo or speak with our team about how Open Pulse Survey can work for your organization
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-white">
        <div className="container-tight">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Contact information
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                Have questions about Open Pulse Survey? Our team is here to help you understand how our platform can meet your organization's unique needs.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex gap-x-4 items-start">
                  <div className="flex-none bg-blue-50 p-2 rounded-md">
                    <Mail className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">
                      <a href="mailto:info@openpulsesurvey.com" className="hover:text-blue-500">info@openpulsesurvey.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-x-4 items-start">
                  <div className="flex-none bg-blue-50 p-2 rounded-md">
                    <Phone className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600">
                      <a href="tel:+15551234567" className="hover:text-blue-500">+1 (555) 123-4567</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-x-4 items-start">
                  <div className="flex-none bg-blue-50 p-2 rounded-md">
                    <MessageSquare className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Live Chat</h3>
                    <p className="mt-1 text-gray-600">
                      Available Monday-Friday, 9AM-5PM EST
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-x-4 items-start">
                  <div className="flex-none bg-blue-50 p-2 rounded-md">
                    <Calendar className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Schedule a Call</h3>
                    <p className="mt-1 text-gray-600">
                      Use our booking system to schedule a call with our team
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">What happens next?</h3>
                <ol className="ml-5 space-y-4 text-gray-600 list-decimal">
                  <li>We'll reach out to schedule a discovery call to understand your needs</li>
                  <li>Our team will prepare a personalized demo tailored to your organization</li>
                  <li>We'll walk you through deployment options and answer technical questions</li>
                  <li>If you decide to proceed, we'll provide a detailed implementation plan</li>
                </ol>
              </div>
            </div>

            {/* HubSpot form */}
            <div>
              <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Request a demo
                </h2>
                <p className="mt-2 text-gray-600 mb-6">
                  Fill out the form below and we'll get back to you within one business day
                </p>
                
                {/* HubSpot Form Container */}
                <div id="hubspot-form-container"></div>
                
                <p className="text-xs text-gray-500 mt-4">
                  By submitting this form, you agree to our <a href="#" className="text-blue-500 hover:underline">privacy policy</a>. We'll never share your information with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
