
import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ContactCta } from '@/components/ui/contact-cta';
import { ArrowRight, Check } from 'lucide-react';

const ProductPage = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm text-teal-600 dark:text-teal-400 font-medium uppercase tracking-widest mb-4 block">
              Our Products
            </span>
            
            <h1 className="heading-xl mb-6 dark:text-white">
              AI-Powered Software for Insurance
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Purpose-built SaaS products designed to solve specific challenges in insurance operations.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-teal-500 dark:border-teal-400 overflow-hidden">
              <div className="bg-teal-500 dark:bg-teal-600 px-6 py-2 text-white text-center">
                <span className="font-medium">FEATURED PRODUCT</span>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl dark:text-white">Submission Management Platform</CardTitle>
                <CardDescription className="text-lg dark:text-gray-300">
                  Streamline and automate your insurance submission workflow from receipt to quote
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-medium text-lg mb-4 dark:text-white">Key Features</h3>
                    <ul className="space-y-3">
                      {[
                        'Email inbox monitoring and data extraction',
                        'Automated submission categorization and routing',
                        'Carrier appetite matching',
                        'Quote tracking and analytics',
                        'Client communication automation',
                        'Integration with agency management systems'
                      ].map((feature, i) => (
                        <li key={i} className="flex gap-2">
                          <Check className="h-5 w-5 text-teal-500 dark:text-teal-400 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg mb-4 dark:text-white">Benefits</h3>
                    <ul className="space-y-3">
                      {[
                        'Reduce submission processing time by 60%',
                        'Eliminate data entry errors',
                        'Improve producer productivity',
                        'Enhance client experience with faster responses',
                        'Generate insights from submission data',
                        'Scale your business without adding staff'
                      ].map((benefit, i) => (
                        <li key={i} className="flex gap-2">
                          <Check className="h-5 w-5 text-teal-500 dark:text-teal-400 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="font-medium text-lg mb-4 dark:text-white">Pricing</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-gray-700 p-4 rounded border dark:border-gray-600">
                      <div className="text-lg font-medium mb-1 dark:text-white">Starter</div>
                      <div className="text-3xl font-bold mb-2 dark:text-white">$299<span className="text-base font-normal text-gray-500 dark:text-gray-400">/mo</span></div>
                      <div className="text-gray-600 dark:text-gray-300 text-sm">Up to 200 submissions/month</div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-700 p-4 rounded border dark:border-gray-600">
                      <div className="text-lg font-medium mb-1 dark:text-white">Growth</div>
                      <div className="text-3xl font-bold mb-2 dark:text-white">$499<span className="text-base font-normal text-gray-500 dark:text-gray-400">/mo</span></div>
                      <div className="text-gray-600 dark:text-gray-300 text-sm">Up to 500 submissions/month</div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-700 p-4 rounded border dark:border-gray-600">
                      <div className="text-lg font-medium mb-1 dark:text-white">Enterprise</div>
                      <div className="text-3xl font-bold mb-2 dark:text-white">$899<span className="text-base font-normal text-gray-500 dark:text-gray-400">/mo</span></div>
                      <div className="text-gray-600 dark:text-gray-300 text-sm">Unlimited submissions</div>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-center gap-4 pb-8">
                <Button asChild className="cta-button">
                  <Link to="/contact">Request a Demo</Link>
                </Button>
                
                <Button asChild variant="outline" className="outlined-button">
                  <Link to="/products/submission-management">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card className="card-shadow dark:border-gray-700">
              <CardHeader>
                <span className="text-purple-500 dark:text-purple-400 text-sm font-medium uppercase">Coming Soon</span>
                <CardTitle className="text-xl dark:text-white">Certificate Management</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  AI-powered certificate of insurance processing, tracking, and management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our Certificate Management platform will automate the entire certificate workflow, from request to delivery, ensuring compliance and saving countless hours of manual work.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    'Automated certificate generation',
                    'Vendor compliance tracking',
                    'Expiration monitoring and renewals',
                    'OCR for certificate reading',
                    'Integration with agency management systems'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-purple-400"></div>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="border-purple-500 dark:border-purple-400 text-purple-500 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20">
                  <Link to="/contact" className="flex items-center gap-2">
                    Join Waitlist <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="card-shadow dark:border-gray-700">
              <CardHeader>
                <span className="text-teal-500 dark:text-teal-400 text-sm font-medium uppercase">Partnership Opportunity</span>
                <CardTitle className="text-xl dark:text-white">Co-Development Program</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Partner with us to build the next generation of insurance technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Have a specific automation need in your agency? Our Co-Development Program allows you to partner with us to build a custom solution while sharing in the future profits.
                </p>
                <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg mb-6">
                  <h4 className="font-medium mb-2 dark:text-white">25% Profit-Sharing Model</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    As a co-development partner, you receive 25% of all future revenue from the solution we build together, with minimal upfront investment.
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  This program is ideal for agencies that have identified a significant automation opportunity but don't want to bear the full cost of custom development.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="outlined-button">
                  <Link to="/contact" className="flex items-center gap-2">
                    Apply for Partnership <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      <ContactCta
        title="Interested in our AI products?"
        description="Contact us to schedule a demo or discuss how our solutions can fit your specific needs."
      />
    </>
  );
};

export default ProductPage;
