
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturesCTA = () => {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            See Open Pulse Survey in action
          </h2>
          <p className="mt-6 text-lg leading-8 text-blue-100">
            Request a personalized demo to see how our features can work for your organization's specific needs.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild className="bg-white text-primary hover:bg-blue-50">
              <Link to="/contact">Request Demo</Link>
            </Button>
            <Button asChild variant="ghost" className="text-white hover:bg-primary/80">
              <Link to="/technical">Technical Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCTA;
