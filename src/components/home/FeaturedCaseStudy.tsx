
import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useCMS } from '@/contexts/CMSContext';
import { ArrowRight } from 'lucide-react';

const FeaturedCaseStudy = () => {
  const { pages } = useCMS();
  const homePage = pages.find(page => page.slug === '/');
  const featuredCaseStudy = homePage?.content.featuredCaseStudy;

  return (
    <section className="bg-white py-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Client Success"
          subtitle="See how our AI solutions have transformed operations for insurance businesses."
        />
        
        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="heading-md mb-4">{featuredCaseStudy?.title || 'Quoting Automation'}</h3>
              
              <div className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full inline-block text-sm font-medium mb-4">
                {featuredCaseStudy?.metrics || '15 min saved per quote × 400 monthly leads'}
              </div>
              
              <p className="text-gray-600 mb-6">
                {featuredCaseStudy?.description || 
                'We helped a specialty MGA automate their quoting process, saving 100 hours monthly and improving response times from days to minutes.'}
              </p>
              
              <Button asChild variant="outline" className="outlined-button w-fit">
                <Link to={featuredCaseStudy?.link || '/case-studies/quoting-automation'} className="flex items-center gap-2">
                  {featuredCaseStudy?.linkText || 'View Case Study'} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="bg-purple-100 md:h-auto">
              <div className="h-full flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-purple-600 mb-2">100+</div>
                  <p className="text-purple-800 font-medium">Hours saved monthly</p>
                </div>
                <div className="mx-8 h-16 border-r border-purple-300"></div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-purple-600 mb-2">3x</div>
                  <p className="text-purple-800 font-medium">Faster quote turnaround</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
