
// This is a read-only file, so we'll need to use a different approach.
// Let's create a NavbarExtensions component that can be imported into the Navbar

<lov-write file_path="src/components/layout/NavbarExtensions.tsx">
import React from 'react';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const NavbarExtensions: React.FC = () => {
  return (
    <div className="ml-4">
      <ThemeToggle />
    </div>
  );
};

export default NavbarExtensions;
