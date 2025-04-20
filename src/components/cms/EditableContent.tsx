
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCMS } from '@/contexts/CMSContext';

interface EditableContentProps {
  id: string;
  content: any;
  onUpdate: (newContent: any) => void;
  type?: 'text' | 'richtext' | 'image' | 'button';
  children: React.ReactNode; // Added the children prop
}

export const EditableContent: React.FC<EditableContentProps> = ({
  id,
  content,
  onUpdate,
  type = 'text',
  children
}) => {
  const { isEditMode } = useCMS();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(content);

  if (!isEditMode) {
    return <>{children}</>;
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(content);
    setIsEditing(false);
  };

  return (
    <div className="relative group">
      {!isEditing ? (
        <>
          {children}
          <div className="hidden group-hover:flex absolute -top-3 -right-3 gap-1">
            <Button 
              size="sm" 
              variant="outline" 
              className="h-6 w-6 p-0 bg-white hover:bg-teal-50 border-teal-200"
              onClick={handleEdit}
            >
              <span className="sr-only">Edit</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </Button>
          </div>
        </>
      ) : (
        <div className="border-2 border-teal-300 rounded-md p-2 bg-white">
          {type === 'text' && (
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="w-full p-1 border rounded"
            />
          )}
          {type === 'richtext' && (
            <textarea
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="w-full p-1 border rounded min-h-[100px]"
            />
          )}
          <div className="flex justify-end gap-2 mt-2">
            <Button 
              size="sm" 
              variant="outline" 
              className="h-7 py-0 px-2 hover:bg-red-50 text-red-600 hover:text-red-700 border-red-200"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button 
              size="sm" 
              className="h-7 py-0 px-2 bg-teal-500 hover:bg-teal-600"
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
