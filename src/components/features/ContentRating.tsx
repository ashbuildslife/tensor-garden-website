
import React, { useState, useEffect } from 'react';
import { Star, ThumbsUp, ThumbsDown, MessageSquare, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

interface ContentRatingProps {
  contentId: string;
  contentType: 'blog' | 'case-study' | 'documentation';
}

export const ContentRating: React.FC<ContentRatingProps> = ({ contentId, contentType }) => {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [hasRated, setHasRated] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  
  // Check if user has already rated this content
  useEffect(() => {
    const ratedContent = JSON.parse(localStorage.getItem('ratedContent') || '{}');
    if (ratedContent[contentId]) {
      setHasRated(true);
      setRating(ratedContent[contentId].rating);
    }
  }, [contentId]);
  
  const handleRating = (value: number) => {
    setRating(value);
  };
  
  const handleThumbsRating = (isUp: boolean) => {
    setRating(isUp ? 5 : 1);
    
    // Save simple rating immediately
    if (!showForm) {
      saveRating(isUp ? 5 : 1, '');
    }
  };
  
  const saveRating = (ratingValue: number, feedbackText: string) => {
    // In a real implementation, this would send data to the server
    // For now, we'll just store it in localStorage
    const ratedContent = JSON.parse(localStorage.getItem('ratedContent') || '{}');
    ratedContent[contentId] = {
      rating: ratingValue,
      feedback: feedbackText,
      timestamp: new Date().toISOString(),
      contentType
    };
    
    localStorage.setItem('ratedContent', JSON.stringify(ratedContent));
    setHasRated(true);
    setShowThankYou(true);
    
    toast({
      title: 'Thank you for your feedback!',
      description: 'Your rating has been recorded.',
    });
    
    // Hide thank you message after 3 seconds
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };
  
  const handleSubmit = () => {
    if (rating === null) {
      toast({
        title: 'Please select a rating',
        variant: 'destructive',
      });
      return;
    }
    
    saveRating(rating, feedback);
    setShowForm(false);
    setFeedback('');
  };
  
  if (hasRated && !showThankYou) {
    return (
      <div className="border-t pt-4 mt-8 dark:border-gray-700">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          You've already rated this content. Thank you for your feedback!
        </div>
      </div>
    );
  }
  
  if (showThankYou) {
    return (
      <div className="border-t pt-4 mt-8 animate-fade-in dark:border-gray-700">
        <div className="bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-3 rounded-md flex items-center">
          <ThumbsUp className="h-5 w-5 mr-2" />
          <span>Thank you for your feedback! It helps us improve our content.</span>
        </div>
      </div>
    );
  }
  
  return (
    <div className="border-t pt-4 mt-8 dark:border-gray-700">
      <h3 className="text-lg font-medium mb-4 flex items-center">
        <MessageSquare className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400" />
        Was this content helpful?
      </h3>
      
      {!showForm ? (
        <div className="flex space-x-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center space-x-1"
            onClick={() => handleThumbsRating(true)}
          >
            <ThumbsUp className="h-4 w-4" />
            <span>Yes</span>
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center space-x-1"
            onClick={() => handleThumbsRating(false)}
          >
            <ThumbsDown className="h-4 w-4" />
            <span>No</span>
          </Button>
          <Button 
            variant="link" 
            size="sm" 
            className="text-teal-600 dark:text-teal-400"
            onClick={() => setShowForm(true)}
          >
            Leave detailed feedback
          </Button>
        </div>
      ) : (
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center">
            <div className="mr-2 text-sm font-medium">Rate this content:</div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((value) => (
                <Button
                  key={value}
                  variant="ghost"
                  size="sm"
                  className={`p-0 w-8 h-8 ${rating === value ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'}`}
                  onClick={() => handleRating(value)}
                >
                  <Star className="h-5 w-5 fill-current" />
                </Button>
              ))}
            </div>
          </div>
          
          <div>
            <label htmlFor="feedback" className="block text-sm font-medium mb-1">
              Your feedback (optional)
            </label>
            <Textarea
              id="feedback"
              placeholder="Tell us what you think about this content..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="resize-none h-24 dark:bg-gray-800"
            />
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </Button>
            <Button 
              variant="default" 
              size="sm"
              onClick={handleSubmit}
              className="bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700"
            >
              Submit Feedback
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
