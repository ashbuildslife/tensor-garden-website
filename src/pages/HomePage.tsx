
import React from 'react';
import Hero from '@/components/home/Hero';
import ProblemSection from '@/components/home/ProblemSection';
import SolutionsOverview from '@/components/home/SolutionsOverview';
import FeaturedCaseStudy from '@/components/home/FeaturedCaseStudy';
import Testimonials from '@/components/home/Testimonials';
import { ContactCta } from '@/components/ui/contact-cta';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionsOverview />
      <FeaturedCaseStudy />
      <Testimonials />
      <ContactCta />
    </>
  );
};

export default HomePage;
