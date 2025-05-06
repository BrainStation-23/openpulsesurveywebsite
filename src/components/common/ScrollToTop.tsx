
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/facebook-pixel";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    // Track page view for Facebook Pixel
    trackPageView();
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
