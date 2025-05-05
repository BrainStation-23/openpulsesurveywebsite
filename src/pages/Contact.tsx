
import { useState } from 'react';
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MessageSquare, Calendar } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo request submitted",
      description: "Our team will contact you shortly to schedule your demo.",
    });
    setFormSubmitted(true);
  };

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

            {/* Contact form */}
            <div>
              <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Request a demo
                </h2>
                <p className="mt-2 text-gray-600">
                  Fill out the form below and we'll get back to you within one business day
                </p>
                
                {formSubmitted ? (
                  <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-100 text-center">
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Thank you!</h3>
                    <p className="text-green-700">
                      Your demo request has been submitted successfully. One of our team members will contact you shortly to schedule your personalized demo.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                          First name
                        </label>
                        <Input
                          type="text"
                          name="first-name"
                          id="first-name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                          Last name
                        </label>
                        <Input
                          type="text"
                          name="last-name"
                          id="last-name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          id="phone"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company
                        </label>
                        <Input
                          type="text"
                          name="company"
                          id="company"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                          Your role
                        </label>
                        <Select name="role">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hr">HR Professional</SelectItem>
                            <SelectItem value="executive">Executive/Management</SelectItem>
                            <SelectItem value="it">IT Department</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="company-size" className="block text-sm font-medium text-gray-700 mb-1">
                          Company size
                        </label>
                        <Select name="company-size">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select company size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-50">1-50 employees</SelectItem>
                            <SelectItem value="51-200">51-200 employees</SelectItem>
                            <SelectItem value="201-500">201-500 employees</SelectItem>
                            <SelectItem value="501-1000">501-1000 employees</SelectItem>
                            <SelectItem value="1000+">1000+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <Textarea
                          name="message"
                          id="message"
                          rows={4}
                          placeholder="Tell us about your specific needs and questions"
                        />
                      </div>
                    </div>
                    <div>
                      <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                        Request Demo
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">
                      By submitting this form, you agree to our <a href="#" className="text-blue-500 hover:underline">privacy policy</a>. We'll never share your information with third parties.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
