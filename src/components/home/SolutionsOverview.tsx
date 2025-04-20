
import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Book, FileSearch, Lightbulb, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const solutionsData = [
  {
    title: 'AI Consulting Services',
    description: 'Our strategic consulting helps identify automation opportunities and develop AI roadmaps tailored to your insurance business.',
    icon: <Lightbulb className="h-10 w-10" />,
    link: '/services/consulting'
  },
  {
    title: 'Process Automation',
    description: 'We automate repetitive tasks in quoting, policy issuance, certificates, and claims processing to save time and reduce errors.',
    icon: <FileSearch className="h-10 w-10" />,
    link: '/services/automation'
  },
  {
    title: 'AI Agent Development',
    description: 'Custom AI assistants that can handle customer inquiries, quote submissions, and routine client communications.',
    icon: <Users className="h-10 w-10" />,
    link: '/services/ai-agents'
  },
  {
    title: 'Training & Change Management',
    description: 'We provide comprehensive training and change management to ensure successful adoption of new AI technologies.',
    icon: <Book className="h-10 w-10" />,
    link: '/services/training'
  }
];

interface SolutionsOverviewProps {
  className?: string;
}

const SolutionsOverview: React.FC<SolutionsOverviewProps> = ({ className }) => {
  return (
    <section className={cn("py-20", className)}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our AI Solutions"
          subtitle="We offer a comprehensive suite of AI solutions designed specifically for insurance agencies and MGAs."
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {solutionsData.map((solution, index) => (
            <Card key={index} className="card-shadow hover:border-teal-300 transition-all animate-fade-in bg-white" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full p-2 bg-teal-100 text-teal-600">
                  {solution.icon}
                </div>
                <div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{solution.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-0 flex items-center gap-2">
                  <Link to={solution.link}>
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
