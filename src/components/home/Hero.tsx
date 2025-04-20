
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useCMS } from '@/contexts/CMSContext';
import { EditableContent } from '@/components/cms/EditableContent';

const Hero = () => {
  const { pages, updatePage, isLoading } = useCMS();
  const homePage = pages.find(page => page.slug === '/');
  const heroContent = homePage?.content.hero;

  const handleUpdateHeadline = (newValue: string) => {
    if (!homePage) return;
    
    const updatedContent = {
      ...homePage.content,
      hero: {
        ...homePage.content.hero,
        headline: newValue
      }
    };
    
    updatePage(homePage.id, { content: updatedContent });
  };

  const handleUpdateSubheadline = (newValue: string) => {
    if (!homePage) return;
    
    const updatedContent = {
      ...homePage.content,
      hero: {
        ...homePage.content.hero,
        subheadline: newValue
      }
    };
    
    updatePage(homePage.id, { content: updatedContent });
  };

  const handleUpdateCtaText = (newValue: string) => {
    if (!homePage) return;
    
    const updatedContent = {
      ...homePage.content,
      hero: {
        ...homePage.content.hero,
        ctaText: newValue
      }
    };
    
    updatePage(homePage.id, { content: updatedContent });
  };

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
          
          <EditableContent
            id="hero-headline"
            content={heroContent?.headline || 'Cultivating AI Solutions for Insurance'}
            onUpdate={handleUpdateHeadline}
            type="text"
          >
            <h1 className="heading-xl mb-6 animate-fade-in">
              {isLoading ? 'Loading...' : (heroContent?.headline || 'Cultivating AI Solutions for Insurance')}
            </h1>
          </EditableContent>
          
          <EditableContent
            id="hero-subheadline"
            content={heroContent?.subheadline || 'We help insurance agencies and MGAs grow with AI-powered automation'}
            onUpdate={handleUpdateSubheadline}
            type="text"
          >
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
              {isLoading ? 'Loading...' : (heroContent?.subheadline || 'We help insurance agencies and MGAs grow with AI-powered automation')}
            </p>
          </EditableContent>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <EditableContent
              id="hero-cta"
              content={heroContent?.ctaText || 'Schedule a Consultation'}
              onUpdate={handleUpdateCtaText}
              type="text"
            >
              <Button asChild size="lg" className="cta-button">
                <Link to={heroContent?.ctaLink || '/contact'}>
                  {isLoading ? 'Loading...' : (heroContent?.ctaText || 'Schedule a Consultation')}
                </Link>
              </Button>
            </EditableContent>
            
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
