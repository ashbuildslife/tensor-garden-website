
import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Mail, MapPin, Phone } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <>
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm text-teal-600 font-medium uppercase tracking-widest mb-4 block">
              Contact Us
            </span>
            
            <h1 className="heading-xl mb-6">
              Let's Discuss Your AI Journey
            </h1>
            
            <p className="text-xl text-gray-600">
              Get in touch to learn how Tensor Garden can help transform your insurance operations with AI.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <SectionHeading
                title="Get in Touch"
                subtitle="Fill out the form below and we'll get back to you as soon as possible."
              />
              
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full min-h-[150px]"
                      />
                    </div>
                    
                    <Button type="submit" className="cta-button" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              <div className="mt-12">
                <SectionHeading
                  title="Frequently Asked Questions"
                  subtitle="Find answers to common questions about our services and approach."
                />
                
                <Accordion type="single" collapsible className="mt-6">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      What makes Tensor Garden different from other automation companies?
                    </AccordionTrigger>
                    <AccordionContent>
                      Unlike general automation vendors, we exclusively focus on the insurance industry and understand its unique workflows, compliance requirements, and operational challenges. Our solutions are built specifically for insurance agencies and MGAs, not adapted from generic automation tools.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      How quickly can we implement your solutions?
                    </AccordionTrigger>
                    <AccordionContent>
                      Implementation timelines vary depending on the complexity of the solution and your existing systems. Our SaaS products can typically be implemented within 2-4 weeks, while custom AI solutions may take 4-12 weeks from initial assessment to full deployment.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">
                      Do you integrate with agency management systems?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, our solutions can integrate with most major agency management systems, including Applied Epic, AMS360, HawkSoft, and QQ Catalyst. We also offer custom integrations for other systems as needed.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">
                      What kind of ROI can we expect from your AI solutions?
                    </AccordionTrigger>
                    <AccordionContent>
                      Most of our clients see a positive ROI within 3-6 months. The exact return depends on your current processes, volume, and the specific solution implemented. For example, our certificate automation clients typically see an 80-90% reduction in processing time, while our quoting automation solutions save 10-20 minutes per quote.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left">
                      How do you handle data security and compliance?
                    </AccordionTrigger>
                    <AccordionContent>
                      Data security is a top priority. We follow industry best practices for encryption, access controls, and secure development. Our solutions are designed to help you maintain compliance with relevant regulations, and we can provide detailed information about our security measures during the consultation process.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="heading-sm mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-teal-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Location</p>
                      <p className="text-gray-600">Wyoming, USA</p>
                      <p className="text-gray-600 mt-1">Remote team with partners based in Kansas and California</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-teal-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <a href="mailto:info@tensorgarden.com" className="text-teal-600 hover:underline">
                        info@tensorgarden.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-teal-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <a href="tel:+18005551234" className="text-teal-600 hover:underline">
                        +1 (800) 555-1234
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Calendar className="h-5 w-5 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800 text-lg">Schedule a Discovery Call</h3>
                    <p className="text-gray-600 mt-1">Book a no-obligation 30-minute call to discuss your specific challenges and how we can help.</p>
                  </div>
                </div>
                
                <Button className="secondary-button w-full">Schedule a Call</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
