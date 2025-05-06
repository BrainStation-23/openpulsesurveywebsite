
import React, { Suspense, ComponentType } from 'react';

// Minimal fallback for extremely slow connections - invisible on fast connections
const MinimalFallback = () => (
  <div className="min-h-[50vh]"></div>
);

type LazyRouteProps = {
  component: React.LazyExoticComponent<ComponentType<any>>;
  fallback?: React.ReactNode;
};

// Component that handles lazy loading with Suspense
const LazyRoute: React.FC<LazyRouteProps> = ({ 
  component: Component,
  fallback = <MinimalFallback />
}) => {
  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  );
};

export default LazyRoute;
