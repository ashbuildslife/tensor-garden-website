
import React from 'react';
import { useCMS } from '@/contexts/CMSContext';
import { EditableContent } from '@/components/cms/EditableContent';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export const FeatureConfig: React.FC = () => {
  const { pages, updatePage, isLoading } = useCMS();
  const configPage = pages.find(page => page.slug === 'feature-config');

  const handleUpdateFeature = (featureKey: string, value: boolean) => {
    if (!configPage) return;
    
    const updatedContent = {
      ...configPage.content,
      features: {
        ...(configPage.content?.features || {}),
        [featureKey]: value
      }
    };
    
    updatePage(configPage.id, { content: updatedContent });
  };

  const features = [
    { key: 'darkMode', label: 'Dark Mode Support' },
    { key: 'aiChat', label: 'AI Chat Assistant' },
    { key: 'contentPersonalization', label: 'Content Personalization' },
    { key: 'interactiveDemos', label: 'Interactive Product Demos' },
    { key: 'multilingual', label: 'Multilingual Support' },
    { key: 'accessibility', label: 'Enhanced Accessibility' },
    { key: 'voiceSearch', label: 'Voice Search' },
    { key: 'pwaSupport', label: 'Progressive Web App' },
    { key: 'analytics', label: 'Advanced Analytics' },
    { key: 'arVrIntegration', label: 'AR/VR Integration' },
    { key: 'sustainability', label: 'Sustainability Section' },
    { key: 'contentRatings', label: 'Content Ratings and Feedback' }
  ];

  if (isLoading) {
    return <div>Loading feature configuration...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Feature Configuration</h2>
      <div className="bg-white rounded-lg shadow p-4 dark:bg-gray-800">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.key} className="flex items-center space-x-2">
              <Switch 
                id={`feature-${feature.key}`}
                checked={configPage?.content?.features?.[feature.key] || false}
                onCheckedChange={(checked) => handleUpdateFeature(feature.key, checked)}
              />
              <Label htmlFor={`feature-${feature.key}`}>{feature.label}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
