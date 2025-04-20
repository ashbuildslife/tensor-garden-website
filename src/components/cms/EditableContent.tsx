
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCMS } from '@/contexts/CMSContext';
import { Edit } from 'lucide-react';

interface EditableContentProps {
  id: string;
  content: any;
  onUpdate: (newContent: any) => void;
  type?: 'text' | 'richtext' | 'image' | 'button';
  children: React.ReactNode;
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
              <Edit className="h-3 w-3" />
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
