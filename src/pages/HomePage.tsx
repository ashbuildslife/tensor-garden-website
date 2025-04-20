
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
      <section className="bg-soft-purple w-full">
        <ProblemSection />
      </section>
      <section className="bg-soft-yellow w-full">
        <SolutionsOverview />
      </section>
      <section className="bg-soft-pink w-full">
        <FeaturedCaseStudy />
      </section>
      <section className="bg-soft-green w-full">
        <Testimonials />
      </section>
      <ContactCta />
    </>
  );
};

export default HomePage;

