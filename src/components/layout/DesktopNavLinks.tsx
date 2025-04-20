
import { Link } from 'react-router-dom';
import { Wrench, Monitor, FileText, Users, MessageSquare } from 'lucide-react';
import { IndustriesMenu } from './IndustriesMenu';

export const DesktopNavLinks = () => {
  return (
    <>
      <Link to="/services" className="text-gray-700 dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-400 font-medium flex items-center gap-2">
        <Wrench className="w-4 h-4" />
        Services
      </Link>
      <Link to="/products" className="text-gray-700 dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-400 font-medium flex items-center gap-2">
        <Monitor className="w-4 h-4" />
        Products
      </Link>
      <IndustriesMenu />
      <Link to="/case-studies" className="text-gray-700 dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-400 font-medium flex items-center gap-2">
        <FileText className="w-4 h-4" />
        Case Studies
      </Link>
      <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-400 font-medium flex items-center gap-2">
        <Users className="w-4 h-4" />
        About Us
      </Link>
      <Link to="/blog" className="text-gray-700 dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-400 font-medium flex items-center gap-2">
        <MessageSquare className="w-4 h-4" />
        Blog
      </Link>
    </>
  );
};
