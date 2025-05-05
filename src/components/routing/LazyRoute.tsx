import React, { Suspense, ComponentType } from 'react';

// Simple loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

type LazyRouteProps = {
  component: React.LazyExoticComponent<ComponentType<any>>;
  fallback?: React.ReactNode;
};

// Component that handles lazy loading with Suspense
const LazyRoute: React.FC<LazyRouteProps> = ({ 
  component: Component,
  fallback = <PageLoader />
}) => {
  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  );
};

export default LazyRoute;