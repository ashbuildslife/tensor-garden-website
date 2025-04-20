
import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ContactCta } from '@/components/ui/contact-cta';
import { ArrowRight, Book, FileSearch, Lightbulb, Users } from 'lucide-react';

const services = [
  {
    id: 'consulting',
    title: 'AI Consulting Services',
    description: 'Strategic assessment and planning to identify automation opportunities in your insurance operations.',
    icon: <Lightbulb className="h-10 w-10" />,
    features: [
      'Workflow assessment and analysis',
      'AI opportunity identification',
      'ROI calculation and prioritization',
      'Implementation roadmap',
      'Technology recommendations'
    ]
  },
  {
    id: 'automation',
    title: 'Process Automation',
    description: 'End-to-end automation of manual workflows in policy, claims, and certificate management.',
    icon: <FileSearch className="h-10 w-10" />,
    features: [
      'Carrier website navigation',
      'Data extraction and entry',
      'Document generation',
      'Email and workflow integration',
      'Custom automation scripts'
    ]
  },
  {
    id: 'ai-agents',
    title: 'AI Agent Development',
    description: 'Custom AI assistants for sales, service, and operations roles in your insurance agency.',
    icon: <Users className="h-10 w-10" />,
    features: [
      'Customer inquiry handling',
      'Quote submission processing',
      'After-hours support',
      'Internal knowledge management',
      'Lead qualification'
    ]
  },
  {
    id: 'training',
    title: 'Training & Change Management',
    description: 'Comprehensive training and support to ensure successful adoption of new AI technologies.',
    icon: <Book className="h-10 w-10" />,
    features: [
      'Staff training programs',
      'Change management support',
      'Documentation and knowledge base',
      'Video tutorials',
      'Ongoing support'
    ]
  }
];

const ServicePage = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm text-teal-600 dark:text-teal-400 font-medium uppercase tracking-widest mb-4 block">
              Our Services
            </span>
            
            <h1 className="heading-xl mb-6 dark:text-white">
              AI Solutions Tailored for Insurance
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300">
              From strategic consulting to implementation, we provide comprehensive AI services designed specifically for insurance agencies and MGAs.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Service Offerings"
            subtitle="We provide end-to-end AI solutions to transform your insurance operations and drive growth."
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {services.map((service) => (
              <Card key={service.id} className="card-shadow hover:border-teal-300 transition-all dark:border-gray-800">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full p-2 bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl dark:text-white">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 dark:text-gray-300">{service.description}</CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-teal-500 dark:bg-teal-400"></div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="outlined-button dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900/20">
                    <Link to={`/services/${service.id}`} className="flex items-center gap-2">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <ContactCta
        title="Ready to transform your insurance operations?"
        description="Schedule a consultation to discuss how our AI services can help your business grow."
      />
    </>
  );
};

export default ServicePage;
