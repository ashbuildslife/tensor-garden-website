
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCMS } from '@/contexts/CMSContext';
import { X } from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const { isEditMode, toggleEditMode } = useCMS();
  const [isPanelExpanded, setIsPanelExpanded] = useState(false);

  if (!isEditMode) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          className="bg-gray-800 hover:bg-gray-700 text-white"
          onClick={toggleEditMode}
        >
          Enter Edit Mode
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 right-0 z-50 bg-white shadow-lg border border-gray-200 rounded-tl-lg overflow-hidden transition-all duration-300 ease-in-out">
      <div className="bg-gray-100 p-3 flex justify-between items-center">
        <h3 className="font-medium">CMS Admin Panel</h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => setIsPanelExpanded(!isPanelExpanded)}
          >
            {isPanelExpanded ? '−' : '+'}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50"
            onClick={toggleEditMode}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {isPanelExpanded && (
        <div className="p-4 w-80">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm">
                  Page Settings
                </Button>
                <Button variant="outline" size="sm">
                  Media Library
                </Button>
                <Button variant="outline" size="sm">
                  Navigation
                </Button>
                <Button variant="outline" size="sm">
                  SEO
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Help</h4>
              <p className="text-xs text-gray-600">
                Click on any content with a highlighted border to edit. Changes will be saved automatically.
              </p>
            </div>

            <div className="pt-4 border-t">
              <Button className="w-full bg-teal-500 hover:bg-teal-600">
                Publish Changes
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-teal-500 text-white p-2 text-xs text-center">
        {isPanelExpanded ? 'Click + to collapse panel' : 'Click + to expand panel'}
      </div>
    </div>
  );
};
