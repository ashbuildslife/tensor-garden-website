
import React from 'react';
import { useCMS } from '@/contexts/CMSContext';
import { EditableContent } from '@/components/cms/EditableContent';

export const LLMConfig: React.FC = () => {
  const { pages, updatePage, isLoading } = useCMS();
  const configPage = pages.find(page => page.slug === 'llm-config');

  const handleUpdateConfig = (newContent: string) => {
    if (!configPage) return;
    
    const updatedContent = {
      ...configPage.content,
      llmConfig: newContent
    };
    
    updatePage(configPage.id, { content: updatedContent });

    // Update the LLMs.txt file content
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(newContent);
      const blob = new Blob([data], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = 'LLMs.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error updating LLMs.txt:', error);
    }
  };

  if (isLoading) {
    return <div>Loading LLM configuration...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">LLMs.txt Configuration</h2>
      <div className="bg-white rounded-lg shadow p-4">
        <EditableContent
          id="llm-config"
          content={configPage?.content?.llmConfig || ''}
          onUpdate={handleUpdateConfig}
          type="richtext"
        >
          <pre className="whitespace-pre-wrap font-mono text-sm">
            {configPage?.content?.llmConfig || 'No configuration set'}
          </pre>
        </EditableContent>
      </div>
    </div>
  );
};
