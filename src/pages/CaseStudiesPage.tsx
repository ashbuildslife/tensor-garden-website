
import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ContactCta } from '@/components/ui/contact-cta';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 'certificate-automation',
    title: 'Certificate Automation',
    client: 'Regional Insurance Agency',
    challenge: 'Manual certificate processing was consuming over 40 hours per week and led to frequent errors and delays.',
    solution: 'AI-powered certificate automation system that extracts data, generates certificates, and handles delivery.',
    results: '87% reduction in processing time, from 30 minutes to 4 minutes per certificate.',
    metrics: [
      { label: 'Time Savings', value: '87%' },
      { label: 'Processing Time', value: '4 min' },
      { label: 'Staff Capacity Increase', value: '35%' }
    ]
  },
  {
    id: 'ai-sales-agent',
    title: 'AI Sales Agent',
    client: 'Independent P&C Agency',
    challenge: 'Slow lead response times and inability to handle after-hours inquiries led to lost opportunities.',
    solution: '24/7 AI sales assistant that qualifies leads, answers common questions, and schedules appointments.',
    results: '34% increase in lead conversion and improved customer satisfaction through immediate responses.',
    metrics: [
      { label: 'Lead Conversion Increase', value: '34%' },
      { label: 'Response Time', value: 'Instant' },
      { label: 'After-hours Inquiries Handled', value: '100%' }
    ]
  },
  {
    id: 'quoting-automation',
    title: 'Quoting Automation',
    client: 'Specialty MGA',
    challenge: 'Manual quoting process across multiple carrier websites was causing significant delays and errors.',
    solution: 'Automated carrier website navigation and data entry system with centralized quoting dashboard.',
    results: '15 minutes saved per quote across 400 monthly submissions, reclaiming 100+ hours of staff time.',
    metrics: [
      { label: 'Time Saved Per Quote', value: '15 min' },
      { label: 'Monthly Hours Saved', value: '100+' },
      { label: 'Quote Accuracy', value: '99.7%' }
    ]
  }
];

const CaseStudiesPage = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm text-teal-600 font-medium uppercase tracking-widest mb-4 block">
              Client Success
            </span>
            
            <h1 className="heading-xl mb-6">
              Case Studies
            </h1>
            
            <p className="text-xl text-gray-600">
              Real results from insurance agencies and MGAs that have partnered with Tensor Garden.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Success Stories"
            subtitle="See how our AI solutions have transformed operations for our insurance industry clients."
          />
          
          <div className="space-y-16 mt-12">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-sm text-teal-600 font-medium uppercase tracking-widest mb-2 block">
                      {study.client}
                    </span>
                    
                    <h3 className="heading-md mb-4">{study.title}</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-800">Challenge:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800">Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800">Results:</h4>
                        <p className="text-gray-600">{study.results}</p>
                      </div>
                    </div>
                    
                    <Button asChild variant="outline" className="outlined-button w-fit mt-4">
                      <Link to={`/case-studies/${study.id}`} className="flex items-center gap-2">
                        View Full Case Study <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="bg-gradient-to-r from-teal-500 to-purple-500 text-white md:h-auto">
                    <div className="h-full flex flex-col items-center justify-center p-8">
                      <h4 className="text-xl font-medium mb-8">Key Metrics</h4>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
                        {study.metrics.map((metric, i) => (
                          <div key={i} className="text-center">
                            <div className="text-4xl font-bold mb-2">{metric.value}</div>
                            <p className="text-white/80 font-medium">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ContactCta
        title="Want similar results for your agency?"
        description="Contact us to discuss how we can help you achieve similar outcomes with our AI solutions."
      />
    </>
  );
};

export default CaseStudiesPage;
