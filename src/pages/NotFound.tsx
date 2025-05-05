
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout
      title="Page Not Found | Open Pulse Survey"
      description="The page you're looking for could not be found."
    >
      <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page not found</h2>
          <p className="text-lg text-gray-600 mb-8">
            We're sorry, but the page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-blue-500 hover:bg-blue-600">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
