
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Activity, Send, X, Mic, MinusCircle } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m your AI assistant. How can I help you with Tensor Garden\'s services today?',
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom of chat
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Simulate AI response (this would be replaced with actual API call)
    setTimeout(() => {
      const responseMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `Thanks for your question about "${input}". Tensor Garden's AI solutions can help with this by automating your workflows and providing intelligent insights.`,
        sender: 'assistant',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, responseMessage]);
    }, 1000);
  };

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Voice recognition is not supported by your browser.');
      return;
    }
    
    setIsListening(true);
    
    // @ts-ignore - SpeechRecognition is not in the TypeScript types
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setIsListening(false);
    };
    
    recognition.onerror = () => {
      setIsListening(false);
    };
    
    recognition.onend = () => {
      setIsListening(false);
    };
    
    recognition.start();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  const minimizeChat = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {isOpen ? (
        <Card className="w-80 md:w-96 shadow-lg animate-fade-in border-2 border-teal-500 dark:border-teal-400 dark:bg-gray-800">
          <CardHeader className="bg-gradient-to-r from-teal-600 to-purple-600 text-white p-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg flex items-center">
                <Activity className="mr-2 h-5 w-5" />
                AI Assistant
              </CardTitle>
              <div className="flex space-x-1">
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-white hover:bg-white/20" onClick={minimizeChat}>
                  <MinusCircle className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-white hover:bg-white/20" onClick={toggleChat}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <ScrollArea className="h-64 px-4 py-2">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
              >
                {message.sender === 'assistant' && (
                  <Avatar className="h-8 w-8 mr-2 bg-teal-100 dark:bg-teal-800">
                    <Activity className="h-4 w-4 text-teal-600 dark:text-teal-300" />
                  </Avatar>
                )}
                <div 
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user' 
                      ? 'bg-teal-500 text-white dark:bg-teal-600' 
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </ScrollArea>
          <CardFooter className="border-t p-3">
            <div className="flex w-full space-x-2">
              <Input
                ref={inputRef}
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 dark:bg-gray-700 dark:text-white"
              />
              <Button 
                onClick={handleVoiceInput} 
                variant="outline" 
                size="icon"
                className={`${isListening ? 'bg-red-100 text-red-600 animate-pulse' : ''} dark:bg-gray-700 dark:text-white`}
              >
                <Mic className="h-4 w-4" />
              </Button>
              <Button onClick={handleSend} size="icon" className="bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ) : (
        <Button 
          onClick={toggleChat} 
          className="h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 flex items-center justify-center"
        >
          <Activity className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};
