
import { Building } from "lucide-react";
import { Link } from "react-router-dom";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface NGODiscountAlertProps {
  discountPercentage?: number;
  originalPrice?: string;
  discountedPrice?: string;
  variant?: "default" | "highlight";
}

const NGODiscountAlert = ({ 
  discountPercentage = 50, 
  originalPrice,
  discountedPrice,
  variant = "default"
}: NGODiscountAlertProps) => {
  const priceInfo = originalPrice && discountedPrice 
    ? `Pay ${discountedPrice} instead of ${originalPrice}` 
    : '';
  
  return (
    <Alert className={
      variant === "highlight" 
        ? "bg-gradient-to-r from-green-50 to-teal-50 border-green-200" 
        : "bg-green-50 border-green-200"
    }>
      <Building className="h-5 w-5 text-green-600" />
      <AlertTitle className="text-green-800 text-base font-semibold">NGO Discount Available</AlertTitle>
      <AlertDescription>
        <p className="text-green-700">
          Non-profit organizations qualify for a <span className="font-bold">{discountPercentage}% discount</span> on this plan. {priceInfo}
        </p>
        <Button asChild className="mt-2 bg-green-600 hover:bg-green-700">
          <Link to="/contact">Apply for NGO Discount</Link>
        </Button>
      </AlertDescription>
    </Alert>
  );
};

export default NGODiscountAlert;
