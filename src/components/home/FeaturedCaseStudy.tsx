
import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useCMS } from '@/contexts/CMSContext';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { EditableContent } from '@/components/cms/EditableContent';

interface FeaturedCaseStudyProps {
  className?: string;
}

const FeaturedCaseStudy: React.FC<FeaturedCaseStudyProps> = ({ className }) => {
  const { pages, updatePage, isLoading } = useCMS();
  const homePage = pages.find(page => page.slug === '/');
  const featuredCaseStudy = homePage?.content.featuredCaseStudy;

  const handleUpdateCaseStudy = (field: string, value: string) => {
    if (!homePage) return;
    
    const updatedContent = {
      ...homePage.content,
      featuredCaseStudy: {
        ...homePage.content.featuredCaseStudy,
        [field]: value
      }
    };
    
    updatePage(homePage.id, { content: updatedContent });
  };

  return (
    <section className={cn("py-20", className)}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Client Success"
          subtitle="See how our AI solutions have transformed operations for insurance businesses."
        />
        
        {isLoading ? (
          <div className="text-center py-12">Loading case study...</div>
        ) : (
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <EditableContent
                  id="case-study-title"
                  content={featuredCaseStudy?.title || 'Quoting Automation'}
                  onUpdate={(value) => handleUpdateCaseStudy('title', value)}
                  type="text"
                >
                  <h3 className="heading-md mb-4">{featuredCaseStudy?.title || 'Quoting Automation'}</h3>
                </EditableContent>
                
                <EditableContent
                  id="case-study-metrics"
                  content={featuredCaseStudy?.metrics || '15 min saved per quote × 400 monthly leads'}
                  onUpdate={(value) => handleUpdateCaseStudy('metrics', value)}
                  type="text"
                >
                  <div className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full inline-block text-sm font-medium mb-4">
                    {featuredCaseStudy?.metrics || '15 min saved per quote × 400 monthly leads'}
                  </div>
                </EditableContent>
                
                <EditableContent
                  id="case-study-description"
                  content={featuredCaseStudy?.description || 
                    'We helped a specialty MGA automate their quoting process, saving 100 hours monthly and improving response times from days to minutes.'}
                  onUpdate={(value) => handleUpdateCaseStudy('description', value)}
                  type="richtext"
                >
                  <p className="text-gray-600 mb-6">
                    {featuredCaseStudy?.description || 
                    'We helped a specialty MGA automate their quoting process, saving 100 hours monthly and improving response times from days to minutes.'}
                  </p>
                </EditableContent>
                
                <EditableContent
                  id="case-study-link-text"
                  content={featuredCaseStudy?.linkText || 'View Case Study'}
                  onUpdate={(value) => handleUpdateCaseStudy('linkText', value)}
                  type="text"
                >
                  <Button asChild variant="outline" className="outlined-button w-fit">
                    <Link to={featuredCaseStudy?.link || '/case-studies/quoting-automation'} className="flex items-center gap-2">
                      {featuredCaseStudy?.linkText || 'View Case Study'} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </EditableContent>
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
        )}
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
