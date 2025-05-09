
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <div className="bg-orange-50 p-8 rounded-xl border border-orange-100 mb-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to explore deployment options?</h3>
      <p className="text-gray-700 mb-6">
        Our technical team can provide a detailed walkthrough of the architecture and help you plan your deployment strategy for your React and Supabase-based employee feedback platform.
      </p>
      <Button asChild>
        <Link to="/contact">Contact Our Technical Team</Link>
      </Button>
    </div>
  );
};

export default ContactCTA;
