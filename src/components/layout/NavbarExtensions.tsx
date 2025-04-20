
import React from 'react';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const NavbarExtensions: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <ThemeToggle />
    </div>
  );
};

export default NavbarExtensions;
