
import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { FeatureCard } from '@/components/ui/feature-card';
import { useCMS } from '@/contexts/CMSContext';
import { cn } from '@/lib/utils';
import { EditableContent } from '@/components/cms/EditableContent';

interface ProblemSectionProps {
  className?: string;
}

const ProblemSection: React.FC<ProblemSectionProps> = ({ className }) => {
  const { pages, updatePage, isLoading } = useCMS();
  const homePage = pages.find(page => page.slug === '/');
  const problems = homePage?.content.problems || [];

  const handleUpdateProblem = (index: number, field: 'title' | 'description', value: string) => {
    if (!homePage) return;
    
    const updatedProblems = [...problems];
    updatedProblems[index] = {
      ...updatedProblems[index],
      [field]: value
    };
    
    const updatedContent = {
      ...homePage.content,
      problems: updatedProblems
    };
    
    updatePage(homePage.id, { content: updatedContent });
  };

  return (
    <section className={cn("py-20", className)}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Insurance Industry Challenges"
          subtitle="Today's insurance agencies face significant operational challenges that impact growth and customer satisfaction."
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {isLoading ? (
            <div className="col-span-3 text-center py-12">Loading problems...</div>
          ) : (
            problems.map((problem: any, index: number) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <EditableContent
                  id={`problem-title-${index}`}
                  content={problem.title}
                  onUpdate={(value) => handleUpdateProblem(index, 'title', value)}
                  type="text"
                >
                  <FeatureCard
                    title={problem.title}
                    description={
                      <EditableContent
                        id={`problem-description-${index}`}
                        content={problem.description}
                        onUpdate={(value) => handleUpdateProblem(index, 'description', value)}
                        type="text"
                      >
                        <span>{problem.description}</span>
                      </EditableContent>
                    }
                    className="bg-white rounded-lg"
                  />
                </EditableContent>
              </div>
            ))
          )}
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
