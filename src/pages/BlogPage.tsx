
import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ContactCta } from '@/components/ui/contact-cta';
import { ArrowRight } from 'lucide-react';

const categories = [
  'All',
  'AI in Insurance',
  'Process Automation',
  'Industry Trends',
  'Technology Insights'
];

const blogPosts = [
  {
    id: 'ai-automation-trends-2023',
    title: 'AI Automation Trends Reshaping Insurance in 2023',
    excerpt: 'Explore the key AI and automation trends that are transforming insurance operations and creating competitive advantages.',
    category: 'Industry Trends',
    date: 'October 15, 2023',
    readTime: '6 min read'
  },
  {
    id: 'certificate-management-automation',
    title: 'How AI is Revolutionizing Certificate of Insurance Management',
    excerpt: 'Discover how modern AI technologies are eliminating the headaches of manual certificate processing.',
    category: 'Process Automation',
    date: 'September 28, 2023',
    readTime: '8 min read'
  },
  {
    id: 'roi-ai-insurance',
    title: 'Calculating ROI: The Business Case for AI in Insurance Agencies',
    excerpt: 'A practical guide to understanding and measuring the return on investment from AI automation initiatives.',
    category: 'AI in Insurance',
    date: 'September 12, 2023',
    readTime: '7 min read'
  },
  {
    id: 'agent-productivity',
    title: '5 Ways AI Assistants Boost Insurance Agent Productivity',
    excerpt: 'Learn how AI assistants are helping insurance agents focus on high-value activities instead of routine tasks.',
    category: 'Technology Insights',
    date: 'August 31, 2023',
    readTime: '5 min read'
  },
  {
    id: 'data-extraction',
    title: 'The Evolution of Data Extraction in Insurance: From OCR to AI',
    excerpt: 'How insurance data extraction technology has evolved and what it means for modern agencies.',
    category: 'Technology Insights',
    date: 'August 15, 2023',
    readTime: '9 min read'
  }
];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
  return (
    <>
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm text-teal-600 font-medium uppercase tracking-widest mb-4 block">
              Our Blog
            </span>
            
            <h1 className="heading-xl mb-6">
              Insights on AI in Insurance
            </h1>
            
            <p className="text-xl text-gray-600">
              Explore our latest articles on AI, automation, and industry trends in the insurance space.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-teal-100 text-teal-800'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card key={post.id} className="card-shadow overflow-hidden flex flex-col h-full">
                <div className="aspect-[16/9] bg-gray-100"></div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium px-3 py-1 bg-teal-100 text-teal-800 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {post.date} · {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button asChild variant="ghost" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-0 flex items-center gap-2">
                    <Link to={`/blog/${post.id}`}>
                      Read Article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <ContactCta
        title="Want to stay updated?"
        description="Subscribe to our newsletter to receive the latest insights on AI in insurance."
        ctaText="Subscribe Now"
        ctaLink="/contact"
      />
    </>
  );
};

export default BlogPage;
