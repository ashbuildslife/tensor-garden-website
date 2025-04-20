
import { Link } from 'react-router-dom';
import { Wrench, Monitor, FileText, Users, MessageSquare } from 'lucide-react';

interface MobileNavLinksProps {
  closeMenu: () => void;
}

export const MobileNavLinks = ({ closeMenu }: MobileNavLinksProps) => {
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
