
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MobileNavLinks } from './MobileNavLinks';
import { DesktopNavLinks } from './DesktopNavLinks';

// For debugging purposes - try an embedded SVG logo as fallback
const SvgLogo = () => (
  <svg width="180" height="40" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#14b8a6" />
    <path d="M8 20h24" stroke="white" strokeWidth="4" strokeLinecap="round" />
    <path d="M20 8v24" stroke="white" strokeWidth="4" strokeLinecap="round" />
    <text x="50" y="25" fontFamily="Arial" fontSize="18" fontWeight="bold" fill="#14b8a6">Tensor Garden</text>
  </svg>
);

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
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [logoError, setLogoError] = useState(false);
  
  // For debugging - log available images in public folder
  useEffect(() => {
    console.log("Current logo path being used:", logoUrl);
    console.log("Logo loaded state:", logoLoaded);
    console.log("Logo error state:", logoError);
  }, [logoLoaded, logoError]);

  // Instead of hardcoding a path that might not exist, use the SVG logo
  const logoUrl = '/lovable-uploads/30382601-3781-4f5e-a103-d085f7a855ae.png'; 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoError = () => {
    console.error("Logo failed to load from path:", logoUrl);
    setLogoError(true);
  };

  const handleLogoLoad = () => {
    console.log("Logo loaded successfully from:", logoUrl);
    setLogoLoaded(true);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            {logoError ? (
              <SvgLogo />
            ) : (
              <img 
                src={logoUrl} 
                alt="Tensor Garden Logo" 
                className="h-12 w-auto object-contain" 
                style={{ maxWidth: '180px' }}
                onError={handleLogoError}
                onLoad={handleLogoLoad}
              />
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
