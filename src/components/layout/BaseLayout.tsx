
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { CMSProvider } from '@/contexts/CMSContext';

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <CMSProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </CMSProvider>
  );
};

export default BaseLayout;
