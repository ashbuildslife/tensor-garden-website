
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ContactCtaProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

export function ContactCta({
  title = "Ready to transform your insurance workflows?",
  description = "Get in touch with our team to schedule a free consultation and discover how Tensor Garden can help your business grow.",
  ctaText = "Schedule a Consultation",
  ctaLink = "/contact"
}: ContactCtaProps) {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-purple-500 py-16">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="heading-lg text-white mb-4">{title}</h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
          {description}
        </p>
        <Button asChild className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-6">
          <Link to={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
    </section>
  );
}
