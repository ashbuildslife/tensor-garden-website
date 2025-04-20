
import React from 'react';
import { Link } from 'react-router-dom';

const industries = [
  {
    title: "Healthcare & Insurance",
    description: "Transform patient care and risk assessment with AI",
    href: "/industries/healthcare"
  },
  {
    title: "Financial Services",
    description: "Optimize trading and risk management workflows",
    href: "/industries/finance"
  },
  {
    title: "Manufacturing",
    description: "Enhance productivity and reduce operational costs",
    href: "/industries/manufacturing"
  },
  {
    title: "Retail & E-commerce",
    description: "Personalize customer experiences at scale",
    href: "/industries/retail"
  }
];

const IndustriesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Industries</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {industries.map((industry) => (
          <Link
            key={industry.href}
            to={industry.href}
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-colors"
          >
            <h2 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
              {industry.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {industry.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default IndustriesPage;
