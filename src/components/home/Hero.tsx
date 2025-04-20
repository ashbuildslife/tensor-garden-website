
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useCMS } from '@/contexts/CMSContext';

const Hero = () => {
  const { pages } = useCMS();
  const homePage = pages.find(page => page.slug === '/');
  const heroContent = homePage?.content.hero;

  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#0D6E6E_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container max-w-7xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <span className="text-sm text-teal-600 font-medium uppercase tracking-widest mb-4 block">
            AI Solutions for Insurance
          </span>
          
          <h1 className="heading-xl mb-6 animate-fade-in">
            {heroContent?.headline || 'Cultivating AI Solutions for Insurance'}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
            {heroContent?.subheadline || 'We help insurance agencies and MGAs grow with AI-powered automation'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Button asChild size="lg" className="cta-button">
              <Link to={heroContent?.ctaLink || '/contact'}>
                {heroContent?.ctaText || 'Schedule a Consultation'}
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="outlined-button">
              <Link to="/case-studies">
                View Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
