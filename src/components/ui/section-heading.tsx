
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  centered = false, 
  className 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      'mb-12',
      centered && 'text-center',
      className
    )}>
      <h2 className="heading-lg gradient-text inline-block dark:text-white">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-200 max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
