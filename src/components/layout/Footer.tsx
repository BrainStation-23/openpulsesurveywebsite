
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Youtube, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-tight py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <Logo useWordmark={true} />
            <p className="mt-4 text-base text-gray-600 max-w-md">
              Collect and act on employee feedback while keeping your internal data secure. Open Pulse Survey is your self-hosted employee feedback platform.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="https://www.youtube.com/@OpenPulseSurvey" 
                 className="text-gray-500 hover:text-red-500 transition-colors" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label="YouTube Channel">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/openpulsesurvey" 
                 className="text-gray-500 hover:text-blue-500 transition-colors" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label="Facebook Page">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/open-pulse-survey/" 
                 className="text-gray-500 hover:text-blue-600 transition-colors"
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label="LinkedIn Page">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com/BrainStation-23/openpulsesurvey" 
                 className="text-gray-500 hover:text-blue-500 transition-colors"
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="GitHub Repository">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Platform</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/features" className="text-base text-gray-600 hover:text-blue-500">Features</Link>
              </li>
              <li>
                <Link to="/anti-saas" className="text-base text-gray-600 hover:text-blue-500">Anti-SaaS Philosophy</Link>
              </li>
              <li>
                <Link to="/technical" className="text-base text-gray-600 hover:text-blue-500">Technical Details</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/use-cases" className="text-base text-gray-600 hover:text-blue-500">Use Cases</Link>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-blue-500">Blog</a>
              </li>
              <li>
                <a href="https://docs.openpulsesurvey.com/" className="text-base text-gray-600 hover:text-blue-500">Documentation</a>
              </li>
              <li>
                <Link to="/sitemap" className="text-base text-gray-600 hover:text-blue-500">Sitemap</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/about-us" className="text-base text-gray-600 hover:text-blue-500">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-gray-600 hover:text-blue-500">Contact</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-base text-gray-600 hover:text-blue-500">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-500">&copy; {new Date().getFullYear()} Open Pulse Survey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
