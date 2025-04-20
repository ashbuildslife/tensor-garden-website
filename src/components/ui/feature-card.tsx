
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string | React.ReactNode;  // Update to accept both string and React.ReactNode
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function FeatureCard({ title, description, icon, className, style }: FeatureCardProps) {
  return (
    <Card className={cn("card-shadow h-full transition-all hover:border-teal-300", className)} style={style}>
      <CardHeader>
        {icon && <div className="mb-4 text-teal-500">{icon}</div>}
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
