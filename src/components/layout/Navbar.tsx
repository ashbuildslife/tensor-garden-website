import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MobileNavLinks } from './MobileNavLinks';
import { DesktopNavLinks } from './DesktopNavLinks';

const logoUrl = '/lovable-uploads/be881746-c243-4981-bf8c-d533235c978f.png';

const industries = [
  {
    title: "Healthcare & Insurance",
    description: "Transform patient care and risk assessment with AI",
    href: "/industries/healthcare"
  },
  {
    title: "Financial Services",
    description: "Optimize trading and risk management workflows",
    href: "/industries/finance"
  },
  {
    title: "Manufacturing",
    description: "Enhance productivity and reduce operational costs",
    href: "/industries/manufacturing"
  },
  {
    title: "Retail & E-commerce",
    description: "Personalize customer experiences at scale",
    href: "/industries/retail"
  }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('Logo failed to load', e);
    setLogoError(true);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            {!logoError ? (
              <img 
                src={logoUrl} 
                alt="Tensor Garden Logo" 
                className="h-14 w-auto" 
                onError={handleLogoError}
              />
            ) : (
              <div className="text-xl font-bold text-gray-700">Tensor Garden</div>
            )}
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <DesktopNavLinks />
            <Button asChild className="cta-button">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-teal-500 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4">
          <div className="flex flex-col space-y-4">
            <div className="space-y-4">
              <div className="font-medium text-gray-700">Industries</div>
              {industries.map((industry) => (
                <Link
                  key={industry.href}
                  to={industry.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block pl-4 py-2 text-gray-700 hover:text-teal-500"
                >
                  {industry.title}
                </Link>
              ))}
            </div>
            <MobileNavLinks closeMenu={() => setIsMenuOpen(false)} />
            <Button asChild className="cta-button w-full">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
