
import { useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import { Mail, Shield, Clock, CheckCircle } from "lucide-react";

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
    "url": window.location.origin
  };

  return (
    <Layout
      title="Contact Us | Open Pulse Survey"
      description="Get in touch with our team to learn how Open Pulse Survey can help your organization collect and act on employee feedback securely."
    >
      {/* Add structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactStructuredData) }} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Get in touch with our team
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have questions about Open Pulse Survey? Fill out the form below and we'll get back to you within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-white pb-24">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-12">
            {/* Form section - larger column */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                  Request a demo or ask us anything
                </h2>
                
                {/* HubSpot Form Container */}
                <div id="hubspot-form-container" className="mb-4"></div>
                
                <p className="text-xs text-gray-500 mt-6">
                  By submitting this form, you agree to our <a href="#" className="text-blue-500 hover:underline">privacy policy</a>. We respect your privacy and will never share your information with third parties.
                </p>
              </div>
            </div>

            {/* Trust signals - smaller column */}
            <div className="lg:col-span-5 mt-10 lg:mt-0">
              <div className="sticky top-8">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Why reach out to us?</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-none bg-blue-50 p-3 rounded-full">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">No spam guarantee</h4>
                      <p className="mt-1 text-gray-600">
                        We'll only contact you about Open Pulse Survey and your inquiry. No marketing emails.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-none bg-blue-50 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Quick response time</h4>
                      <p className="mt-1 text-gray-600">
                        Our team typically responds within one business day to all inquiries.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-none bg-blue-50 p-3 rounded-full">
                      <CheckCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Tailored solutions</h4>
                      <p className="mt-1 text-gray-600">
                        We'll provide personalized guidance based on your organization's needs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-none bg-blue-50 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Direct conversation</h4>
                      <p className="mt-1 text-gray-600">
                        Your message goes directly to our team, not a generic inbox.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-5 bg-blue-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">What happens next?</h4>
                  <ol className="ml-5 space-y-3 text-gray-600 list-decimal">
                    <li>We'll review your request and contact you via email</li>
                    <li>If needed, we'll schedule a call to discuss your requirements</li>
                    <li>We'll prepare a personalized demo tailored to your organization</li>
                    <li>You'll get all the information needed to make an informed decision</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
