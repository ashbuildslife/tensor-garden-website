import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Building2, Wrench, Monitor, FileText, Users, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const logoUrl = '/lovable-uploads/e8a1821c-f610-4ece-a65f-d21aa16f0383.png';

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoUrl} alt="Tensor Garden Logo" className="h-14 w-auto" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-teal-500 font-medium">
                    <span className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      Industries
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2">
                      {industries.map((industry) => (
                        <Link
                          key={industry.href}
                          to={industry.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{industry.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {industry.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavLinks />
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

const NavLinks = () => {
  return (
    <>
      <Link to="/services" className="text-gray-700 hover:text-teal-500 font-medium flex items-center gap-2">
        <Wrench className="w-4 h-4" />
        Services
      </Link>
      <Link to="/products" className="text-gray-700 hover:text-teal-500 font-medium flex items-center gap-2">
        <Monitor className="w-4 h-4" />
        Products
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-gray-700 hover:text-teal-500 font-medium">
              <span className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Industries
              </span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2">
                {industries.map((industry) => (
                  <Link
                    key={industry.href}
                    to={industry.href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">{industry.title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {industry.description}
                    </p>
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Link to="/case-studies" className="text-gray-700 hover:text-teal-500 font-medium flex items-center gap-2">
        <FileText className="w-4 h-4" />
        Case Studies
      </Link>
      <Link to="/about" className="text-gray-700 hover:text-teal-500 font-medium flex items-center gap-2">
        <Users className="w-4 h-4" />
        About Us
      </Link>
      <Link to="/blog" className="text-gray-700 hover:text-teal-500 font-medium flex items-center gap-2">
        <MessageSquare className="w-4 h-4" />
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
        className="text-gray-700 hover:text-teal-500 font-medium py-2 flex items-center gap-2"
        onClick={closeMenu}
      >
        <Wrench className="w-4 h-4" />
        Services
      </Link>
      <Link 
        to="/products" 
        className="text-gray-700 hover:text-teal-500 font-medium py-2 flex items-center gap-2"
        onClick={closeMenu}
      >
        <Monitor className="w-4 h-4" />
        Products
      </Link>
      <Link 
        to="/case-studies" 
        className="text-gray-700 hover:text-teal-500 font-medium py-2 flex items-center gap-2"
        onClick={closeMenu}
      >
        <FileText className="w-4 h-4" />
        Case Studies
      </Link>
      <Link 
        to="/about" 
        className="text-gray-700 hover:text-teal-500 font-medium py-2 flex items-center gap-2"
        onClick={closeMenu}
      >
        <Users className="w-4 h-4" />
        About Us
      </Link>
      <Link 
        to="/blog" 
        className="text-gray-700 hover:text-teal-500 font-medium py-2 flex items-center gap-2"
        onClick={closeMenu}
      >
        <MessageSquare className="w-4 h-4" />
        Blog
      </Link>
    </>
  );
};

export default Navbar;
