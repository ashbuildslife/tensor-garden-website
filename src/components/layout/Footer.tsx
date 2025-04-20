
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <h2 className="text-xl font-serif font-bold text-teal-400">Tensor Garden</h2>
              <p className="text-sm text-gray-400 mt-1">Where Intelligence Grows</p>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Cultivating AI solutions for the insurance industry, specializing in automation, AI agents, and consulting services.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/consulting" className="text-gray-400 hover:text-teal-400 transition-colors">
                  AI Consulting
                </Link>
              </li>
              <li>
                <Link to="/services/automation" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Process Automation
                </Link>
              </li>
              <li>
                <Link to="/services/ai-agents" className="text-gray-400 hover:text-teal-400 transition-colors">
                  AI Agent Development
                </Link>
              </li>
              <li>
                <Link to="/services/training" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Training & Change Management
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>Tensor Garden LLC</p>
              <p>Wyoming, USA</p>
              <a href="mailto:info@tensorgarden.com" className="hover:text-teal-400 transition-colors block">
                info@tensorgarden.com
              </a>
            </address>
            
            <div className="mt-6">
              <Link to="/contact" className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md transition-colors inline-block">
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Tensor Garden LLC. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-teal-400 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-teal-400 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
