
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Play, ArrowRight, Loader2, Check } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

export const InteractiveDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('document-processing');
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<any>(null);
  
  // Document processing demo state
  const [documentInput, setDocumentInput] = useState('');
  
  // AI assistant demo state
  const [assistantPrompt, setAssistantPrompt] = useState('');
  
  // Process automation demo state
  const [automationSteps, setAutomationSteps] = useState<string[]>([
    'Extract data from form',
    'Validate information',
    'Generate policy document',
    'Send to approval queue'
  ]);
  
  const runDemo = () => {
    setIsRunning(true);
    setIsComplete(false);
    setProgress(0);
    setResults(null);
    
    // Simulate processing with progress updates
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.floor(Math.random() * 10) + 5;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          
          setTimeout(() => {
            // Generate demo results based on active tab
            generateResults();
            setIsRunning(false);
            setIsComplete(true);
          }, 500);
          
          return 100;
        }
        
        return newProgress;
      });
    }, 600);
  };
  
  const generateResults = () => {
    switch (activeTab) {
      case 'document-processing':
        setResults({
          extractedData: {
            policyNumber: 'POL-2025-78901',
            insuredName: 'Acme Corporation',
            coverage: '$2,000,000',
            effectiveDate: '2025-05-01',
            expiryDate: '2026-05-01'
          },
          processingTime: '4.2 seconds',
          accuracy: '97%'
        });
        break;
        
      case 'ai-assistant':
        setResults({
          response: assistantPrompt 
            ? `Based on your question about "${assistantPrompt}", I'd recommend our automated certificate processing solution that can reduce processing time by up to 80%. Would you like to schedule a demo?`
            : 'Our AI assistant can provide personalized recommendations based on your insurance needs. Try asking a specific question.',
          responseTime: '1.8 seconds',
          confidenceScore: '89%'
        });
        break;
        
      case 'process-automation':
        setResults({
          completedSteps: automationSteps,
          totalTime: '28.5 seconds',
          manualEquivalent: '45 minutes',
          timeReduction: '94.7%'
        });
        break;
        
      default:
        setResults({
          message: 'Demo completed successfully!'
        });
    }
  };
  
  const resetDemo = () => {
    setIsComplete(false);
    setResults(null);
    
    toast({
      title: 'Demo reset',
      description: 'You can now run the demo again.',
    });
  };
  
  const getProgressColorClass = () => {
    if (progress < 30) return 'bg-blue-500';
    if (progress < 70) return 'bg-amber-500';
    return 'bg-green-500';
  };

  return (
    <Card className="w-full max-w-3xl mx-auto border-teal-200 dark:border-teal-800 dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <Play className="mr-2 h-5 w-5 text-teal-600 dark:text-teal-400" />
          Interactive Product Demo
        </CardTitle>
        <CardDescription>
          Try our AI solutions in action with this interactive demo
        </CardDescription>
      </CardHeader>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="px-6">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="document-processing">Document Processing</TabsTrigger>
            <TabsTrigger value="ai-assistant">AI Assistant</TabsTrigger>
            <TabsTrigger value="process-automation">Process Automation</TabsTrigger>
          </TabsList>
        </div>
        
        <CardContent>
          <TabsContent value="document-processing" className="mt-0">
            <div className="space-y-4">
              <div>
                <Label htmlFor="document-input">Sample Certificate of Insurance</Label>
                <Textarea value={documentInput} onChange={(e) => setDocumentInput(e.target.value)} placeholder="Paste certificate text or use the default sample..." className="h-32" />
              </div>
              <Button 
                onClick={runDemo} 
                disabled={isRunning}
                className="w-full bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700"
              >
                {isRunning ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing Document...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Process Certificate
                  </>
                )}
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="ai-assistant" className="mt-0">
            <div className="space-y-4">
              <div>
                <Label htmlFor="assistant-prompt">Ask our AI Assistant</Label>
                <Input 
                  id="assistant-prompt"
                  value={assistantPrompt}
                  onChange={(e) => setAssistantPrompt(e.target.value)}
                  placeholder="e.g., How can I automate certificate processing?"
                  className="dark:bg-gray-700"
                />
              </div>
              <Button 
                onClick={runDemo}
                disabled={isRunning}
                className="w-full bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700"
              >
                {isRunning ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Assistant is thinking...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Get AI Response
                  </>
                )}
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="process-automation" className="mt-0">
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                <div className="text-sm font-medium mb-2">Workflow Steps</div>
                <ol className="list-decimal list-inside space-y-1">
                  {automationSteps.map((step, index) => (
                    <li key={index} className="text-sm">{step}</li>
                  ))}
                </ol>
              </div>
              <Button 
                onClick={runDemo}
                disabled={isRunning}
                className="w-full bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700"
              >
                {isRunning ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Running Automation...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Run Automation
                  </>
                )}
              </Button>
            </div>
          </TabsContent>
          
          {isRunning && (
            <div className="mt-6 space-y-2 animate-fade-in">
              <div className="flex justify-between text-sm">
                <span>Processing...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${getProgressColorClass()}`} 
                  style={{ width: `${progress}%`, transition: 'width 0.3s ease-in-out' }}
                ></div>
              </div>
            </div>
          )}
          
          {isComplete && results && (
            <div className="mt-6 bg-gray-50 dark:bg-gray-700 rounded-md p-4 animate-fade-in">
              <div className="flex items-center text-green-600 dark:text-green-400 mb-3">
                <Check className="h-5 w-5 mr-2" />
                <span className="font-medium">Processing Complete</span>
              </div>
              
              {activeTab === 'document-processing' && (
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium">Extracted Data:</div>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      {Object.entries(results.extractedData).map(([key, value]) => (
                        <div key={key} className="text-sm">
                          <span className="text-gray-500 dark:text-gray-400">{key}: </span>
                          <span>{value as string}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between text-sm pt-2 border-t dark:border-gray-600">
                    <div>Processing Time: <span className="font-medium">{results.processingTime}</span></div>
                    <div>Accuracy: <span className="font-medium">{results.accuracy}</span></div>
                  </div>
                </div>
              )}
              
              {activeTab === 'ai-assistant' && (
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium">AI Response:</div>
                    <div className="p-3 bg-white dark:bg-gray-800 rounded border mt-1 text-sm">
                      {results.response}
                    </div>
                  </div>
                  <div className="flex justify-between text-sm pt-2 border-t dark:border-gray-600">
                    <div>Response Time: <span className="font-medium">{results.responseTime}</span></div>
                    <div>Confidence: <span className="font-medium">{results.confidenceScore}</span></div>
                  </div>
                </div>
              )}
              
              {activeTab === 'process-automation' && (
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium">Completed Steps:</div>
                    <div className="mt-1">
                      {results.completedSteps.map((step: string, index: number) => (
                        <div key={index} className="flex items-center text-sm mb-1">
                          <Check className="h-4 w-4 mr-1 text-green-500" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t dark:border-gray-600 text-sm">
                    <div>Total Time: <span className="font-medium">{results.totalTime}</span></div>
                    <div>Manual Equivalent: <span className="font-medium">{results.manualEquivalent}</span></div>
                    <div>Time Reduction: <span className="font-medium text-green-600 dark:text-green-400">{results.timeReduction}</span></div>
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Tabs>
      
      <CardFooter className="flex justify-between border-t p-4 dark:border-gray-700">
        <Button variant="ghost" size="sm" onClick={resetDemo} disabled={!isComplete}>
          Reset Demo
        </Button>
        <Button className="bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700" size="sm">
          Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const Textarea = ({ value, onChange, placeholder, className }: any) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder || ''}
      className={`w-full rounded-md border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 ${className || ''}`}
    />
  );
};
