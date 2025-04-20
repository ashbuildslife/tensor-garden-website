
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, ThumbsUp, ThumbsDown } from 'lucide-react';

interface PersonalizedContentProps {
  userId?: string;  // Optional, for logged in users
}

export const PersonalizedContent: React.FC<PersonalizedContentProps> = ({ userId }) => {
  const [contentType, setContentType] = useState<'default' | 'personalized'>('default');
  const [visitCount, setVisitCount] = useState(0);
  const [interests, setInterests] = useState<string[]>([]);
  
  useEffect(() => {
    // Load user preferences from local storage
    const storedVisitCount = parseInt(localStorage.getItem('visitCount') || '0', 10);
    const storedInterests = JSON.parse(localStorage.getItem('interests') || '[]');
    
    setVisitCount(storedVisitCount + 1);
    setInterests(storedInterests);
    
    // Store the updated visit count
    localStorage.setItem('visitCount', (storedVisitCount + 1).toString());
    
    // After 2 visits, start showing personalized content
    if (storedVisitCount >= 1) {
      setContentType('personalized');
    }
  }, []);
  
  const handleInterestSelection = (interest: string, isInterested: boolean) => {
    let newInterests: string[];
    
    if (isInterested) {
      newInterests = [...interests, interest];
    } else {
      newInterests = interests.filter(i => i !== interest);
    }
    
    setInterests(newInterests);
    localStorage.setItem('interests', JSON.stringify(newInterests));
  };
  
  const recommendedContent = [
    { id: 1, title: 'Process Automation for Insurance Agencies', type: 'article' },
    { id: 2, title: 'AI Chatbots for Customer Service', type: 'case-study' },
    { id: 3, title: 'Reducing Document Processing Time by 70%', type: 'demo' },
  ];
  
  // Filter content based on user interests
  const filteredContent = recommendedContent.filter(content => {
    // If no interests selected, show all
    if (interests.length === 0) return true;
    
    // Simple matching algorithm based on title
    return interests.some(interest => 
      content.title.toLowerCase().includes(interest.toLowerCase())
    );
  });
  
  if (contentType === 'default') {
    return (
      <Card className="w-full max-w-md mx-auto border-teal-200 dark:border-teal-800 dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <User className="mr-2 h-5 w-5 text-teal-600 dark:text-teal-400" />
            Help Us Personalize Your Experience
          </CardTitle>
          <CardDescription>
            What topics are you most interested in?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {['Process Automation', 'AI Assistants', 'Document Processing', 'Insurance'].map((topic) => (
              <div key={topic} className="flex justify-between items-center">
                <span>{topic}</span>
                <div className="flex space-x-1">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`p-0 h-8 w-8 ${interests.includes(topic) ? 'bg-green-100 text-green-700' : ''}`}
                    onClick={() => handleInterestSelection(topic, true)}
                  >
                    <ThumbsUp className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="p-0 h-8 w-8"
                    onClick={() => handleInterestSelection(topic, false)}
                  >
                    <ThumbsDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            variant="default" 
            className="w-full bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700"
            onClick={() => setContentType('personalized')}
          >
            Show Personalized Content
          </Button>
        </CardFooter>
      </Card>
    );
  }
  
  return (
    <Card className="w-full max-w-md mx-auto border-teal-200 dark:border-teal-800 dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <User className="mr-2 h-5 w-5 text-teal-600 dark:text-teal-400" />
          Recommended For You
        </CardTitle>
        <CardDescription>
          Based on your interests{visitCount > 1 ? ' and previous visits' : ''}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {filteredContent.map((content) => (
            <div key={content.id} className="p-3 border rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
              <div className="font-medium">{content.title}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 uppercase">{content.type}</div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => setContentType('default')}
        >
          Update Preferences
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => {
            localStorage.removeItem('interests');
            localStorage.removeItem('visitCount');
            setInterests([]);
            setVisitCount(1);
            setContentType('default');
          }}
        >
          Reset Personalization
        </Button>
      </CardFooter>
    </Card>
  );
};
