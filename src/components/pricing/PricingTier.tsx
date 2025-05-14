
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type PricingFeatureType = {
  title: string;
  description: string;
};

export type PricingTierType = {
  name: string;
  icon: LucideIcon;
  price: string;
  interval?: string;
  description: string;
  features: PricingFeatureType[];
  supportInfo: string;
  buttonText: string;
  buttonLink: string;
  buttonVariant?: "default" | "outline";
  buttonIcon?: LucideIcon;
  isPopular?: boolean;
  discountInfo?: ReactNode;
  footerText?: string;
};

export const PricingFeature = ({ title, description }: PricingFeatureType) => {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
        <svg
          className="h-4 w-4 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

const PricingTier = ({
  tier,
  className,
}: {
  tier: PricingTierType;
  className?: string;
}) => {
  const {
    name,
    icon: Icon,
    price,
    interval,
    description,
    features,
    supportInfo,
    buttonText,
    buttonLink,
    buttonVariant = "default",
    buttonIcon: ButtonIcon,
    isPopular,
    discountInfo,
    footerText,
  } = tier;

  return (
    <Card className={cn(
      "border-2 border-gray-200 shadow-md",
      isPopular && "border-blue-200 shadow-lg transform scale-105 z-10",
      className
    )}>
      <CardHeader className={cn(
        "text-center bg-gray-50 py-8",
        isPopular && "bg-blue-50 relative"
      )}>
        {isPopular && (
          <div className="absolute -top-4 left-0 right-0">
            <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium inline-block">
              Most Popular
            </span>
          </div>
        )}
        <div className="flex items-center justify-center mb-2">
          <Icon className={cn(
            "h-6 w-6 mr-2",
            isPopular ? "text-blue-700" : "text-gray-700"
          )} />
          <CardTitle className={cn(
            "text-2xl font-bold",
            isPopular ? "text-blue-700" : "text-gray-700"
          )}>{name}</CardTitle>
        </div>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          {interval && <span className="text-gray-600 ml-1">/{interval}</span>}
        </div>
        <CardDescription className="text-lg mt-2">{description}</CardDescription>
      </CardHeader>

      {discountInfo && (
        <div className="mx-6 -mb-3 mt-6">
          {discountInfo}
        </div>
      )}

      <CardContent className="pt-8">
        <div className="space-y-4">
          {features.map((feature, index) => (
            <PricingFeature
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-6 pt-6 border-t">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <svg
              className={cn(
                "h-5 w-5",
                isPopular ? "text-blue-600" : "text-gray-600"
              )}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m16 10-4 4-4-4" />
            </svg>
            Support & Maintenance
          </h3>
          <p className="mt-2 text-sm text-gray-600">{supportInfo}</p>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col space-y-4 pt-0 pb-8">
        <Button
          asChild
          variant={buttonVariant}
          className={cn(
            "w-full py-6 text-lg",
            buttonVariant === "outline" && "border-gray-300",
            isPopular && buttonVariant === "default" && "bg-blue-600 hover:bg-blue-700"
          )}
        >
          <Link to={buttonLink} className="flex items-center justify-center">
            {ButtonIcon && <ButtonIcon className="mr-2 h-5 w-5" />}
            {buttonText}
          </Link>
        </Button>
        {footerText && (
          <p className="text-center text-sm text-gray-500">
            {footerText}
          </p>
        )}
      </CardFooter>
    </Card>
  );
};

export default PricingTier;
