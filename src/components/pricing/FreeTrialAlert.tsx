
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface FreeTrialAlertProps {
  trialDuration?: string;
  minEmployees?: number;
  variant?: "default" | "highlight";
}

const FreeTrialAlert = ({ 
  trialDuration = "3-month", 
  minEmployees = 123,
  variant = "default" 
}: FreeTrialAlertProps) => {
  return (
    <Alert className={
      variant === "highlight" 
        ? "bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200" 
        : "bg-indigo-50 border-indigo-200"
    }>
      <Calendar className="h-5 w-5 text-indigo-600" />
      <AlertTitle className="text-indigo-800 text-base font-semibold">{trialDuration} Free Trial</AlertTitle>
      <AlertDescription>
        <p className="text-indigo-700">
          Companies with {minEmployees}+ employees can start with a <span className="font-bold">{trialDuration} free trial</span>.
        </p>
        <Button asChild className="mt-2 bg-indigo-600 hover:bg-indigo-700">
          <Link to="/contact">Check Eligibility</Link>
        </Button>
      </AlertDescription>
    </Alert>
  );
};

export default FreeTrialAlert;
