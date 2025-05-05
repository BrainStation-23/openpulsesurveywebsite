
import { Link } from 'react-router-dom';
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Info, Users, Key, ShieldCheck } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Pricing = () => {
  // Add structured data for SEO
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Open Pulse Survey",
    "description": "Self-hosted employee feedback platform for HR professionals and management teams",
    "offers": {
      "@type": "Offer",
      "price": "5000",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <Layout
      title="Pricing | Open Pulse Survey"
      description="One-time license fee for Open Pulse Survey. Get lifetime access to our secure employee feedback platform."
    >
      {/* Add structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingStructuredData) }} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24 sm:py-32">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              One-time license fee with lifetime access. Own your data and your software.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section className="section bg-white">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl">
            <Card className="border-2 border-blue-200 shadow-lg">
              <CardHeader className="text-center bg-blue-50 py-8">
                <CardTitle className="text-3xl font-bold text-blue-700">Enterprise License</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold">$5,000</span>
                  <span className="text-gray-600 ml-2">USD</span>
                </div>
                <CardDescription className="text-lg mt-2">One-time payment, lifetime access</CardDescription>
              </CardHeader>
              
              <CardContent className="pt-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Self-hosted solution</p>
                      <p className="text-sm text-gray-500">Deploy on your own infrastructure for complete control</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Full source code access</p>
                      <p className="text-sm text-gray-500">Modify and customize to fit your organization's needs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Free minor and patch updates</p>
                      <p className="text-sm text-gray-500">Stay current with the latest improvements and bug fixes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Major version upgrades at 30% discount</p>
                      <p className="text-sm text-gray-500">Preferential pricing for significant new feature releases</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">3 months free maintenance support</p>
                      <p className="text-sm text-gray-500">Get started with complimentary expert assistance</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" /> 
                    Free Trial for Eligible Companies
                  </h3>
                  <div className="mt-3 bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 pt-0.5">
                        <Info className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-700">
                          Companies with <strong>more than 123 employees</strong> can qualify for a 3-month free trial. No credit card required.
                        </p>
                        <p className="text-sm text-gray-700 mt-1">
                          <Link to="/contact" className="text-blue-600 hover:underline">Contact us</Link> to check eligibility and get started.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-blue-600" /> 
                    Optional Maintenance Support
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    After your complimentary 3-month period, ongoing maintenance support is available as a monthly retainer. Contact us for custom pricing based on your implementation.
                  </p>
                </div>
              </CardContent>
              
              <CardFooter className="flex flex-col space-y-4 pt-0 pb-8">
                <Button asChild className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700">
                  <Link to="/contact">Request a Demo</Link>
                </Button>
                <p className="text-center text-sm text-gray-500">
                  Want to learn more about our licensing model?{" "}
                  <Link to="/contact" className="text-blue-600 hover:underline">
                    Contact our team
                  </Link>
                </p>
              </CardFooter>
            </Card>

            <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Key className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Why One-Time Licensing?</h3>
                  <p className="mt-2 text-gray-600">
                    Open Pulse Survey believes in transparent pricing with no recurring fees. You buy the license once and own the software forever. This aligns with our anti-SaaS philosophy, ensuring you retain full control of your employee data without ongoing costs.
                  </p>
                  <div className="mt-4 flex items-center">
                    <Link to="/anti-saas" className="text-blue-600 hover:underline">
                      Learn more about our Anti-SaaS approach
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="section bg-gray-50">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-xl text-gray-900">What does the one-time license include?</h3>
                <p className="mt-2 text-gray-600">
                  Your license includes the full software package, source code access, and the right to deploy on your own infrastructure. You also receive minor updates and patches free of charge.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-gray-900">How do major version upgrades work?</h3>
                <p className="mt-2 text-gray-600">
                  When we release a major new version with significant feature additions, existing customers can upgrade at a 30% discount off the current license price.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-gray-900">What are the requirements for the free trial?</h3>
                <p className="mt-2 text-gray-600">
                  Organizations with more than 123 employees qualify for our 3-month free trial. You'll get full access to all features during this period to evaluate the platform in your environment.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-gray-900">What does the maintenance support include?</h3>
                <p className="mt-2 text-gray-600">
                  Maintenance support includes technical assistance, troubleshooting, installation guidance, and configuration help. The first 3 months are included with your license, after which you can opt for a monthly support retainer.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-gray-900">Can I modify the source code?</h3>
                <p className="mt-2 text-gray-600">
                  Yes, your license grants you the right to modify the source code to meet your specific needs. However, please note that custom modifications may affect your support eligibility or upgrade path.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-blue-600">
        <div className="container-tight">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Contact our team today to discuss your specific needs, check trial eligibility, or schedule a personalized demo.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-white text-blue-600 hover:bg-blue-50">
                <Link to="/contact">Request a Demo</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-blue-500">
                <Link to="/features">Explore Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
