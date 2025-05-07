
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Calendar, ShieldCheck, Users } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const PricingCard = () => {
  return (
    <Card className="border-2 border-blue-200 shadow-lg">
      <CardHeader className="text-center bg-blue-50 py-8">
        <CardTitle className="text-3xl font-bold text-blue-700">Enterprise License</CardTitle>
        <div className="mt-4">
          <span className="text-5xl font-bold">$5,000</span>
          <span className="text-gray-600 ml-2">USD</span>
        </div>
        <CardDescription className="text-lg mt-2">One-time payment, lifetime access</CardDescription>
      </CardHeader>
      
      {/* Free Trial Alert - Second Prominent Mention */}
      <div className="mx-6 -mb-3 mt-6">
        <Alert className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
          <Calendar className="h-5 w-5 text-indigo-600" />
          <AlertTitle className="text-indigo-800 text-lg font-semibold">Try Before You Buy</AlertTitle>
          <AlertDescription>
            <p className="text-indigo-700">
              Eligible companies with 123+ employees can start with a <span className="font-bold">3-month free trial</span> with full access to all features.
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

        <FreeTrialSection />

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

const FreeTrialSection = () => {
  return (
    <div className="mt-8 pt-6 border-t">
      <div className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 p-1 shadow-lg transform hover:scale-[1.01] transition-all">
        <div className="bg-white rounded-md p-5">
          <h3 className="font-bold text-xl flex items-center gap-2 text-indigo-700">
            <Users className="h-6 w-6 text-indigo-600" /> 
            3-Month Free Trial Available
          </h3>
          <div className="mt-3">
            <p className="text-gray-700 font-medium">
              Companies with <span className="font-bold">more than 123 employees</span> qualify for our comprehensive 3-month free trial program:
            </p>
            <ul className="mt-2 space-y-2">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span>Full access to all platform features</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span>Complete deployment assistance</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span>No credit card or commitment required</span>
              </li>
            </ul>
            <div className="mt-4">
              <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700">
                <Link to="/contact" className="py-5 text-base">Check Your Eligibility Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
