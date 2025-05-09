
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Calendar, ShieldCheck, Users, Github, Cloud, Server } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const PricingCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Open Source Tier */}
      <Card className="border-2 border-gray-200 shadow-md">
        <CardHeader className="text-center bg-gray-50 py-8">
          <div className="flex items-center justify-center mb-2">
            <Github className="h-6 w-6 text-gray-700 mr-2" />
            <CardTitle className="text-2xl font-bold text-gray-700">Open Source</CardTitle>
          </div>
          <div className="mt-4">
            <span className="text-4xl font-bold">Free</span>
          </div>
          <CardDescription className="text-lg mt-2">Self-maintained</CardDescription>
        </CardHeader>
        
        <CardContent className="pt-8">
          <div className="space-y-4">
            <PricingFeature
              title="Self-hosted solution"
              description="Deploy on your own infrastructure for complete control"
            />
            
            <PricingFeature
              title="Full source code access"
              description="Modify and customize to fit your organization's needs"
            />
            
            <PricingFeature
              title="Free minor and patch updates"
              description="Stay current with the latest improvements and bug fixes"
            />
            
            <PricingFeature
              title="Community support"
              description="Access to GitHub issues and discussions"
            />
          </div>
          
          <div className="mt-6 pt-6 border-t">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-gray-600" /> 
              Support & Maintenance
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Self-maintained with community support through GitHub. You handle all deployments, upgrades, and maintenance.
            </p>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-4 pt-0 pb-8">
          <Button asChild variant="outline" className="w-full py-6 text-lg">
            <a href="https://github.com/BrainStation-23/openpulsesurvey" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <Github className="mr-2 h-5 w-5" /> View on GitHub
            </a>
          </Button>
        </CardFooter>
      </Card>

      {/* Managed Private Cloud */}
      <Card className="border-2 border-blue-200 shadow-lg transform scale-105 z-10">
        <CardHeader className="text-center bg-blue-50 py-8 relative">
          <div className="absolute -top-4 left-0 right-0">
            <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium inline-block">
              Most Popular
            </span>
          </div>
          <div className="flex items-center justify-center mb-2">
            <Cloud className="h-6 w-6 text-blue-700 mr-2" />
            <CardTitle className="text-2xl font-bold text-blue-700">Managed Private Cloud</CardTitle>
          </div>
          <div className="mt-4">
            <span className="text-4xl font-bold">$100</span>
            <span className="text-gray-600 ml-1">/month</span>
          </div>
          <CardDescription className="text-lg mt-2">We handle the infrastructure</CardDescription>
        </CardHeader>
        
        {/* Free Trial Alert */}
        <div className="mx-6 -mb-3 mt-6">
          <Alert className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
            <Calendar className="h-5 w-5 text-indigo-600" />
            <AlertTitle className="text-indigo-800 text-base font-semibold">3-Month Free Trial</AlertTitle>
            <AlertDescription>
              <p className="text-indigo-700">
                Companies with 123+ employees can start with a <span className="font-bold">3-month free trial</span>.
              </p>
              <Button asChild className="mt-2 bg-indigo-600 hover:bg-indigo-700">
                <Link to="/contact">Check Eligibility</Link>
              </Button>
            </AlertDescription>
          </Alert>
        </div>
        
        <CardContent className="pt-8">
          <div className="space-y-4">
            <PricingFeature
              title="Dedicated private cloud"
              description="Isolated environment specifically for your organization"
            />
            
            <PricingFeature
              title="Full source code access"
              description="Same features as open source plus managed infrastructure"
            />
            
            <PricingFeature
              title="Automatic updates"
              description="We handle all maintenance and updates for you"
            />
            
            <PricingFeature
              title="Dedicated support"
              description="24-hour response time on all support requests"
            />
          </div>
          
          <div className="mt-6 pt-6 border-t">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-blue-600" /> 
              Support & Maintenance
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              We handle all hosting, maintenance, backups, security updates, and provide dedicated support with 24-hour response time.
            </p>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-4 pt-0 pb-8">
          <Button asChild className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700">
            <Link to="/contact">Start Free Trial</Link>
          </Button>
          <p className="text-center text-sm text-gray-500">
            No credit card required for trial
          </p>
        </CardFooter>
      </Card>

      {/* Enterprise License */}
      <Card className="border-2 border-gray-200 shadow-md">
        <CardHeader className="text-center bg-gray-50 py-8">
          <div className="flex items-center justify-center mb-2">
            <Server className="h-6 w-6 text-gray-700 mr-2" />
            <CardTitle className="text-2xl font-bold text-gray-700">Enterprise License</CardTitle>
          </div>
          <div className="mt-4">
            <span className="text-4xl font-bold">$5,000</span>
            <span className="text-gray-600 ml-2">one-time</span>
          </div>
          <CardDescription className="text-lg mt-2">Lifetime access</CardDescription>
        </CardHeader>
        
        <CardContent className="pt-8">
          <div className="space-y-4">
            <PricingFeature
              title="Self-hosted solution"
              description="Deploy on your own infrastructure for complete control"
            />
            
            <PricingFeature
              title="Full source code access"
              description="Modify and customize to fit your organization's needs"
            />
            
            <PricingFeature
              title="Free minor and patch updates"
              description="Stay current with the latest improvements and bug fixes"
            />
            
            <PricingFeature
              title="Major version upgrades at 30% discount"
              description="Preferential pricing for significant new feature releases"
            />
            
            <PricingFeature
              title="3 months free maintenance support"
              description="Get started with complimentary expert assistance"
            />
          </div>

          <div className="mt-6 pt-6 border-t">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-gray-600" /> 
              Support & Maintenance
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Dedicated support with 24-hour response time. 3 months of maintenance included, with option for ongoing support retainer.
            </p>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-4 pt-0 pb-8">
          <Button asChild variant="outline" className="w-full py-6 text-lg border-gray-300">
            <Link to="/contact">Request a Demo</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

const PricingFeature = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
        <Check className="h-4 w-4 text-blue-600" />
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default PricingCard;
