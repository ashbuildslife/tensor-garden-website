
import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { FeatureCard } from '@/components/ui/feature-card';
import { useCMS } from '@/contexts/CMSContext';

const ProblemSection = () => {
  const { pages } = useCMS();
  const homePage = pages.find(page => page.slug === '/');
  const problems = homePage?.content.problems || [];

  return (
    <section className="bg-white py-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Insurance Industry Challenges"
          subtitle="Today's insurance agencies face significant operational challenges that impact growth and customer satisfaction."
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {problems.map((problem: any, index: number) => (
            <FeatureCard
              key={index}
              title={problem.title}
              description={problem.description}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tensor Garden's AI solutions are specifically designed to address these challenges, helping insurance agencies and MGAs optimize operations and drive growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
