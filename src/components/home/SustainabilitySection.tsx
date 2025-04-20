
import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Leaf } from 'lucide-react';
import { useCMS } from '@/contexts/CMSContext';
import { EditableContent } from '@/components/cms/EditableContent';
import { cn } from '@/lib/utils';

interface SustainabilitySectionProps {
  className?: string;
}

export const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({ className }) => {
  const { pages, updatePage, isLoading } = useCMS();
  const homePage = pages.find(page => page.slug === '/');
  const sustainabilityData = homePage?.content.sustainability || {
    title: 'Our Commitment to Sustainability',
    description: 'At Tensor Garden, we believe in creating AI solutions that not only drive business efficiency but also contribute to a more sustainable future.',
    metrics: [
      {
        title: 'Reduced Paper Usage',
        value: 68,
        description: 'Our digital workflows have helped clients reduce paper consumption by up to 68%.'
      },
      {
        title: 'Lower Carbon Footprint',
        value: 42,
        description: 'By optimizing processes, we help reduce business travel and commuting needs by 42%.'
      },
      {
        title: 'Energy Efficient Solutions',
        value: 35,
        description: 'Our AI technologies use 35% less energy compared to traditional computing solutions.'
      }
    ]
  };

  const handleUpdateMetric = (index: number, field: 'title' | 'value' | 'description', value: any) => {
    if (!homePage) return;
    
    const updatedMetrics = [...(sustainabilityData.metrics || [])];
    updatedMetrics[index] = {
      ...updatedMetrics[index],
      [field]: field === 'value' ? parseInt(value, 10) : value
    };
    
    const updatedContent = {
      ...homePage.content,
      sustainability: {
        ...sustainabilityData,
        metrics: updatedMetrics
      }
    };
    
    updatePage(homePage.id, { content: updatedContent });
  };

  const handleUpdateContent = (field: 'title' | 'description', value: string) => {
    if (!homePage) return;
    
    const updatedContent = {
      ...homePage.content,
      sustainability: {
        ...sustainabilityData,
        [field]: value
      }
    };
    
    updatePage(homePage.id, { content: updatedContent });
  };

  if (isLoading) {
    return <div className="py-20 text-center">Loading sustainability data...</div>;
  }

  return (
    <section className={cn("py-20 bg-soft-green dark:bg-gray-900", className)}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-10">
          <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4">
            <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <EditableContent
            id="sustainability-title"
            content={sustainabilityData.title}
            onUpdate={(value) => handleUpdateContent('title', value)}
            type="text"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{sustainabilityData.title}</h2>
          </EditableContent>
        </div>
        
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <EditableContent
            id="sustainability-description"
            content={sustainabilityData.description}
            onUpdate={(value) => handleUpdateContent('description', value)}
            type="text"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300">{sustainabilityData.description}</p>
          </EditableContent>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {sustainabilityData.metrics?.map((metric, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="pt-6">
                <EditableContent
                  id={`sustainability-metric-title-${index}`}
                  content={metric.title}
                  onUpdate={(value) => handleUpdateMetric(index, 'title', value)}
                  type="text"
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{metric.title}</h3>
                </EditableContent>
                
                <div className="my-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Progress</span>
                    <EditableContent
                      id={`sustainability-metric-value-${index}`}
                      content={metric.value.toString()}
                      onUpdate={(value) => handleUpdateMetric(index, 'value', value)}
                      type="text"
                    >
                      <span className="text-sm font-bold text-green-600 dark:text-green-400">{metric.value}%</span>
                    </EditableContent>
                  </div>
                  <Progress value={metric.value} className="h-2 bg-gray-200 dark:bg-gray-700" indicatorClassName="bg-green-500 dark:bg-green-600" />
                </div>
                
                <EditableContent
                  id={`sustainability-metric-description-${index}`}
                  content={metric.description}
                  onUpdate={(value) => handleUpdateMetric(index, 'description', value)}
                  type="text"
                >
                  <p className="text-gray-600 dark:text-gray-300">{metric.description}</p>
                </EditableContent>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
