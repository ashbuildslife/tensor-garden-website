
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Accessibility, Mic, Globe, Smartphone,
  VolumeX, Volume2, ZoomIn, ZoomOut
} from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Slider } from '@/components/ui/slider';
import { toast } from '@/components/ui/use-toast';

export const UsabilityFeatures: React.FC = () => {
  const [fontSize, setFontSize] = useState(100);
  const [muted, setMuted] = useState(false);
  const [isListening, setIsListening] = useState(false);
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'zh', name: 'Chinese' },
  ];

  const handleFontSizeChange = (value: number[]) => {
    const newSize = value[0];
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const toggleMute = () => {
    setMuted(!muted);
    // In a real implementation, this would mute all audio elements
    document.querySelectorAll('audio, video').forEach((el: any) => {
      el.muted = !muted;
    });
    toast({
      title: muted ? 'Sound enabled' : 'Sound muted',
      duration: 2000,
    });
  };

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 10, 150);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 10, 70);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const resetFontSize = () => {
    setFontSize(100);
    document.documentElement.style.fontSize = '100%';
  };

  const changeLanguage = (code: string) => {
    // In a real implementation, this would change the site language
    toast({
      title: `Language changed to ${languages.find(l => l.code === code)?.name}`,
      duration: 2000,
    });
  };

  const handleVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window)) {
      toast({
        title: 'Voice recognition not supported',
        description: 'Your browser does not support voice recognition.',
        variant: 'destructive',
      });
      return;
    }
    
    setIsListening(true);
    
    // @ts-ignore - SpeechRecognition is not in the TypeScript types
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      // In a real implementation, this would perform a search
      toast({
        title: 'Voice search',
        description: `Searching for: "${transcript}"`,
      });
      setIsListening(false);
    };
    
    recognition.onerror = () => {
      setIsListening(false);
      toast({
        title: 'Voice recognition error',
        variant: 'destructive',
      });
    };
    
    recognition.onend = () => {
      setIsListening(false);
    };
    
    recognition.start();
  };

  const installPwa = () => {
    // Check if the app can be installed (PWA)
    // @ts-ignore - BeforeInstallPromptEvent is not in the TypeScript types
    const deferredPrompt = (window as any).deferredPrompt;
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          toast({
            title: 'App installed successfully!',
          });
        }
        // Reset the deferred prompt variable
        (window as any).deferredPrompt = null;
      });
    } else {
      toast({
        title: 'Installation not available',
        description: 'This app is either already installed or cannot be installed on your device.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="fixed top-20 right-4 z-30 flex flex-col space-y-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button 
            size="icon" 
            variant="outline" 
            className="rounded-full bg-white shadow-md hover:shadow-lg dark:bg-gray-800"
            aria-label="Accessibility options"
          >
            <Accessibility className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-60 p-4 dark:bg-gray-800">
          <div className="space-y-4">
            <h3 className="font-medium">Accessibility Options</h3>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span>Font Size ({fontSize}%)</span>
                <div className="flex space-x-1">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-6 w-6 p-0"
                    onClick={decreaseFontSize}
                  >
                    <ZoomOut className="h-3 w-3" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-6 w-6 p-0"
                    onClick={increaseFontSize}
                  >
                    <ZoomIn className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <Slider 
                value={[fontSize]} 
                min={70} 
                max={150} 
                step={5}
                onValueChange={handleFontSizeChange}
              />
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-2 h-7 text-xs w-full"
                onClick={resetFontSize}
              >
                Reset to Default
              </Button>
            </div>
            
            <div>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={toggleMute}
              >
                {muted ? <VolumeX className="mr-2 h-4 w-4" /> : <Volume2 className="mr-2 h-4 w-4" />}
                {muted ? 'Enable Sound' : 'Mute Sound'}
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <Button 
        size="icon" 
        variant="outline" 
        className={`rounded-full bg-white shadow-md hover:shadow-lg ${isListening ? 'bg-red-100 text-red-600 animate-pulse' : ''} dark:bg-gray-800`}
        aria-label="Voice search"
        onClick={handleVoiceSearch}
      >
        <Mic className="h-4 w-4" />
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            size="icon" 
            variant="outline" 
            className="rounded-full bg-white shadow-md hover:shadow-lg dark:bg-gray-800"
            aria-label="Change language"
          >
            <Globe className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="dark:bg-gray-800">
          {languages.map((lang) => (
            <DropdownMenuItem 
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
            >
              {lang.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Button 
        size="icon" 
        variant="outline" 
        className="rounded-full bg-white shadow-md hover:shadow-lg dark:bg-gray-800"
        aria-label="Install app"
        onClick={installPwa}
      >
        <Smartphone className="h-4 w-4" />
      </Button>
    </div>
  );
};
