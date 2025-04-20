
import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "Tensor Garden's AI automation has transformed our certificate processing workflow. What used to take 30 minutes now takes just 4 minutes. The ROI was immediate and substantial.",
    name: "Sarah Johnson",
    title: "Operations Manager",
    company: "Pacific Insurance Agency"
  },
  {
    quote: "The AI sales assistant Tensor Garden developed for us has become an invaluable team member. It handles after-hours inquiries and has increased our lead conversion by over 30%.",
    name: "Michael Chen",
    title: "Agency Principal",
    company: "Cornerstone Insurance"
  },
  {
    quote: "Working with Tensor Garden to automate our quoting process was seamless. Their team understood our unique workflow challenges and delivered a solution that exceeded our expectations.",
    name: "Rachel Torres",
    title: "Chief Operating Officer",
    company: "Specialty Risk MGA"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Client Testimonials"
          subtitle="Hear what our clients have to say about their experience working with Tensor Garden."
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-shadow border-0 shadow-lg hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-8">
                <svg className="h-8 w-8 text-teal-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}, {testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
