
import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import ProblemSection from '@/components/home/ProblemSection';
import SolutionsOverview from '@/components/home/SolutionsOverview';
import FeaturedCaseStudy from '@/components/home/FeaturedCaseStudy';
import Testimonials from '@/components/home/Testimonials';
import { ContactCta } from '@/components/ui/contact-cta';
import { SustainabilitySection } from '@/components/home/SustainabilitySection';
import { InteractiveDemo } from '@/components/features/InteractiveDemo';
import { PersonalizedContent } from '@/components/features/ContentPersonalization';
import { ContentRating } from '@/components/features/ContentRating';
import { useCMS } from '@/contexts/CMSContext';

const HomePage = () => {
  const { pages } = useCMS();
  const configPage = pages.find(page => page.slug === 'feature-config');
  const featuresEnabled = configPage?.content?.features || {};

  useEffect(() => {
    // Register service worker for PWA functionality
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').catch(error => {
          console.log('Service Worker registration failed:', error);
        });
      });
    }

    // Setup PWA install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later
      (window as any).deferredPrompt = e;
    });
  }, []);

  return (
    <>
      <Hero />
      <section className="bg-section-dark w-full dark:bg-gray-900">
        <ProblemSection />
      </section>
      
      {featuresEnabled.contentPersonalization && (
        <section className="bg-white w-full py-12 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <PersonalizedContent />
          </div>
        </section>
      )}
      
      <section className="bg-section-light w-full dark:bg-gray-800">
        <SolutionsOverview />
      </section>
      
      {featuresEnabled.interactiveDemos && (
        <section className="bg-white w-full py-20 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Try Our Solutions</h2>
            <InteractiveDemo />
          </div>
        </section>
      )}
      
      <section className="bg-section-dark w-full dark:bg-gray-800">
        <FeaturedCaseStudy />
      </section>
      
      {featuresEnabled.sustainability && (
        <SustainabilitySection />
      )}
      
      <section className="bg-section-light w-full dark:bg-gray-800">
        <Testimonials />
      </section>
      
      <ContactCta />
      
      {featuresEnabled.contentRatings && (
        <section className="bg-white w-full py-10 dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-3xl">
            <ContentRating contentId="home-page" contentType="documentation" />
          </div>
        </section>
      )}
    </>
  );
};

export default HomePage;
