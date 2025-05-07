
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from './Logo';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const navigation = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'Features',
    href: '/features'
  }, {
    name: 'Pricing',
    href: '/pricing'
  }, {
    name: 'Anti-SaaS',
    href: '/anti-saas'
  }, {
    name: 'Use Cases',
    href: '/use-cases'
  }, {
    name: 'Technical',
    href: '/technical'
  }, {
    name: 'Contact',
    href: '/contact'
  }];
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="container-tight flex items-center justify-between py-4">
        <div className="flex items-center">
          <Logo useWordmark={true} />
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map(item => (
            <Link 
              key={item.name} 
              to={item.href} 
              className="text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-x-6">
          <Button asChild variant="default" size="sm" className="bg-blue-500 hover:bg-blue-600">
            <Link to="/contact">Request Demo</Link>
          </Button>
        </div>

        {/* Mobile menu using Sheet component */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="p-0 h-10 w-10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm p-0">
              <div className="flex flex-col h-full">
                <div className="p-6">
                  <Logo useWordmark={true} />
                </div>
                <div className="flex-1 overflow-y-auto px-6 pb-6">
                  <div className="space-y-2">
                    {navigation.map(item => (
                      <Link 
                        key={item.name} 
                        to={item.href} 
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Button asChild className="w-full bg-blue-500 hover:bg-blue-600">
                      <Link to="/contact">Request Demo</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
