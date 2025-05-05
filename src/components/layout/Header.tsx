import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  return <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="container-tight flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-500">Open Pulse Survey</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map(item => <Link key={item.name} to={item.href} className="text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors">
              {item.name}
            </Link>)}
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-x-6">
          <Button asChild variant="default" size="sm" className="bg-blue-500 hover:bg-blue-600">
            <Link to="/contact">Request Demo</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && <div className="lg:hidden absolute inset-x-0 top-0 z-50">
            <div className="fixed inset-0 bg-black/25" onClick={() => setMobileMenuOpen(false)} />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
              <div className="flex items-center justify-between">
                <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <span className="text-2xl font-bold text-blue-500">Open Pulse</span>
                </Link>
                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map(item => <Link key={item.name} to={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                        {item.name}
                      </Link>)}
                  </div>
                  <div className="py-6">
                    <Button asChild className="w-full bg-blue-500 hover:bg-blue-600" onClick={() => setMobileMenuOpen(false)}>
                      <Link to="/contact">Request Demo</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;