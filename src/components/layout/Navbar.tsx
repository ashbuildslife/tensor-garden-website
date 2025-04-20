
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DesktopNavLinks } from './DesktopNavLinks';
import { MobileNavLinks } from './MobileNavLinks';
import NavbarExtensions from './NavbarExtensions';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-teal-600 dark:text-teal-400">Tensor Garden</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
              <DesktopNavLinks />
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <NavbarExtensions />
          </div>
          <div className="flex items-center sm:hidden">
            {/* Theme toggle for mobile, outside of menu */}
            <div className="mr-4">
              <NavbarExtensions />
            </div>
            <Button 
              variant="ghost" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="text-gray-700 dark:text-gray-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1 px-4">
            <MobileNavLinks closeMenu={closeMenu} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
