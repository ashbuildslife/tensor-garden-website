
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Upload the logo image to public folder
const logoUrl = '/lovable-uploads/e8a1821c-f610-4ece-a65f-d21aa16f0383.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={logoUrl} 
              alt="Tensor Garden Logo" 
              className="h-14 w-auto" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <Button asChild className="cta-button">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
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
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4">
          <div className="flex flex-col space-y-4">
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

const NavLinks = () => {
  return (
    <>
      <Link to="/services" className="text-gray-700 hover:text-teal-500 font-medium">
        Services
      </Link>
      <Link to="/products" className="text-gray-700 hover:text-teal-500 font-medium">
        Products
      </Link>
      <Link to="/case-studies" className="text-gray-700 hover:text-teal-500 font-medium">
        Case Studies
      </Link>
      <Link to="/about" className="text-gray-700 hover:text-teal-500 font-medium">
        About Us
      </Link>
      <Link to="/blog" className="text-gray-700 hover:text-teal-500 font-medium">
        Blog
      </Link>
    </>
  );
};

const MobileNavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <>
      <Link 
        to="/services" 
        className="text-gray-700 hover:text-teal-500 font-medium py-2"
        onClick={closeMenu}
      >
        Services
      </Link>
      <Link 
        to="/products" 
        className="text-gray-700 hover:text-teal-500 font-medium py-2"
        onClick={closeMenu}
      >
        Products
      </Link>
      <Link 
        to="/case-studies" 
        className="text-gray-700 hover:text-teal-500 font-medium py-2"
        onClick={closeMenu}
      >
        Case Studies
      </Link>
      <Link 
        to="/about" 
        className="text-gray-700 hover:text-teal-500 font-medium py-2"
        onClick={closeMenu}
      >
        About Us
      </Link>
      <Link 
        to="/blog" 
        className="text-gray-700 hover:text-teal-500 font-medium py-2"
        onClick={closeMenu}
      >
        Blog
      </Link>
    </>
  );
};

export default Navbar;
