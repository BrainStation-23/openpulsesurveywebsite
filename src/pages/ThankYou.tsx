
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const ThankYou = () => {
  return (
    <Layout
      title="Thank You | Open Pulse Survey"
      description="Thank you for contacting Open Pulse Survey. We have received your request and will get back to you shortly."
    >
      <section className="bg-gradient-to-b from-blue-50 to-white py-24 sm:py-32">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Thank You!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your message has been received. Our team will get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What happens next?</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <ol className="space-y-4 text-left">
                <li className="flex gap-3">
                  <span className="flex-none bg-blue-50 rounded-full p-1">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-sm">1</span>
                  </span>
                  <span className="mt-0.5">
                    <span className="text-gray-900 font-medium">Review</span> — Our team will review your request within one business day
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-none bg-blue-50 rounded-full p-1">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-sm">2</span>
                  </span>
                  <span className="mt-0.5">
                    <span className="text-gray-900 font-medium">Contact</span> — We'll reach out to schedule a discovery call
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-none bg-blue-50 rounded-full p-1">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-sm">3</span>
                  </span>
                  <span className="mt-0.5">
                    <span className="text-gray-900 font-medium">Demo</span> — We'll prepare a personalized demo for your organization
                  </span>
                </li>
              </ol>
              
              <div className="mt-8">
                <Button asChild variant="outline" className="mx-auto">
                  <Link to="/">Return to Home</Link>
                </Button>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-2">Have questions while you wait?</h3>
              <p className="text-gray-600 mb-4">
                Check out these resources or explore our website further:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-1">Frequently Asked Questions</h4>
                  <p className="text-sm text-gray-600">Find answers to common questions about Open Pulse Survey.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-1">Documentation</h4>
                  <p className="text-sm text-gray-600">Explore our technical documentation and implementation guides.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ThankYou;
