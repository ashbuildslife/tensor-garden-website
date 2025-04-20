
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
      <section className="bg-section-dark w-full">
        <ProblemSection />
      </section>
      <section className="bg-section-light w-full">
        <SolutionsOverview />
      </section>
      <section className="bg-section-dark w-full">
        <FeaturedCaseStudy />
      </section>
      <section className="bg-section-light w-full">
        <Testimonials />
      </section>
      <ContactCta />
    </>
  );
};

export default HomePage;
