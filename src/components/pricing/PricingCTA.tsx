
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cloud } from "lucide-react";

const PricingCTA = () => {
  return (
    <section className="section bg-gradient-to-r from-primary to-primary/80">
      <div className="container-tight">
        <div className="mx-auto max-w-xl text-center">
          <Badge variant="outline" className="mb-4 bg-white/10 text-white border-white/30">Try Managed Cloud</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Start your 3-month free trial today
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Companies with 123+ employees can try our Managed Private Cloud solution at no cost. Get full features with dedicated support.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-white text-primary hover:bg-orange-50">
              <Link to="/contact" className="flex items-center">
                <Cloud className="mr-2 h-5 w-5" />
                Start Free Cloud Trial
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-primary/90">
              <Link to="/features">Explore Features</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
