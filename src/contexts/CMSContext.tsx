
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define content types for our CMS
export interface PageContent {
  id: string;
  title: string;
  description: string;
  content: Record<string, any>;
  slug: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client: string;
  challenge: string;
  solution: string;
  results: string;
  featuredImage: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  quote: string;
  avatar: string;
  isPublished: boolean;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  content: Record<string, any>;
  isPublished: boolean;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  pricing: {
    monthly: number;
    annual: number;
    setupFee?: number;
  };
  isPublished: boolean;
}

interface CMSContextType {
  pages: PageContent[];
  blogPosts: BlogPost[];
  caseStudies: CaseStudy[];
  testimonials: Testimonial[];
  services: Service[];
  products: Product[];
  updatePage: (pageId: string, content: Partial<PageContent>) => void;
  updateBlogPost: (postId: string, content: Partial<BlogPost>) => void;
  updateCaseStudy: (studyId: string, content: Partial<CaseStudy>) => void;
  updateTestimonial: (testimonialId: string, content: Partial<Testimonial>) => void;
  updateService: (serviceId: string, content: Partial<Service>) => void;
  updateProduct: (productId: string, content: Partial<Product>) => void;
  addBlogPost: (post: BlogPost) => void;
  addCaseStudy: (study: CaseStudy) => void;
  addTestimonial: (testimonial: Testimonial) => void;
  isEditMode: boolean;
  toggleEditMode: () => void;
}

// Initial dummy data
const initialPages: PageContent[] = [
  {
    id: 'home',
    title: 'Tensor Garden - Cultivating AI Solutions for Insurance',
    description: 'Tensor Garden provides AI solutions for the insurance industry, specializing in automation, AI agents, and consulting services.',
    content: {
      hero: {
        headline: 'Cultivating AI Solutions for Insurance',
        subheadline: 'We help insurance agencies and MGAs grow with AI-powered automation',
        ctaText: 'Schedule a Consultation',
        ctaLink: '/contact',
      },
      problems: [
        {
          title: 'Manual Processes',
          description: 'Insurance agencies waste countless hours on repetitive tasks that could be automated.'
        },
        {
          title: 'Slow Response Times',
          description: 'Traditional workflows lead to delayed quote turnaround and frustrated clients.'
        },
        {
          title: 'Operational Inefficiency',
          description: 'Outdated systems and processes create bottlenecks and revenue leakage.'
        },
      ],
      featuredCaseStudy: {
        title: 'Quoting Automation',
        metrics: '15 min saved per quote × 400 monthly leads',
        description: 'We helped a specialty MGA automate their quoting process, saving 100 hours monthly.',
        linkText: 'View Case Study',
        link: '/case-studies/quoting-automation',
      },
    },
    slug: '/',
    isPublished: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];

// Placeholder data for other content types
const initialBlogPosts: BlogPost[] = [];
const initialCaseStudies: CaseStudy[] = [];
const initialTestimonials: Testimonial[] = [];
const initialServices: Service[] = [];
const initialProducts: Product[] = [];

// Create context
const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider = ({ children }: { children: ReactNode }) => {
  const [pages, setPages] = useState<PageContent[]>(initialPages);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogPosts);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(initialCaseStudies);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [services, setServices] = useState<Service[]>(initialServices);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isEditMode, setIsEditMode] = useState(false);

  const updatePage = (pageId: string, content: Partial<PageContent>) => {
    setPages(pages.map(page => 
      page.id === pageId ? { ...page, ...content, updatedAt: new Date().toISOString() } : page
    ));
  };

  const updateBlogPost = (postId: string, content: Partial<BlogPost>) => {
    setBlogPosts(blogPosts.map(post => 
      post.id === postId ? { ...post, ...content, updatedAt: new Date().toISOString() } : post
    ));
  };

  const updateCaseStudy = (studyId: string, content: Partial<CaseStudy>) => {
    setCaseStudies(caseStudies.map(study => 
      study.id === studyId ? { ...study, ...content, updatedAt: new Date().toISOString() } : study
    ));
  };

  const updateTestimonial = (testimonialId: string, content: Partial<Testimonial>) => {
    setTestimonials(testimonials.map(testimonial => 
      testimonial.id === testimonialId ? { ...testimonial, ...content } : testimonial
    ));
  };

  const updateService = (serviceId: string, content: Partial<Service>) => {
    setServices(services.map(service => 
      service.id === serviceId ? { ...service, ...content } : service
    ));
  };

  const updateProduct = (productId: string, content: Partial<Product>) => {
    setProducts(products.map(product => 
      product.id === productId ? { ...product, ...content } : product
    ));
  };

  const addBlogPost = (post: BlogPost) => {
    setBlogPosts([...blogPosts, post]);
  };

  const addCaseStudy = (study: CaseStudy) => {
    setCaseStudies([...caseStudies, study]);
  };

  const addTestimonial = (testimonial: Testimonial) => {
    setTestimonials([...testimonials, testimonial]);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const value = {
    pages,
    blogPosts,
    caseStudies,
    testimonials,
    services,
    products,
    updatePage,
    updateBlogPost,
    updateCaseStudy,
    updateTestimonial,
    updateService,
    updateProduct,
    addBlogPost,
    addCaseStudy,
    addTestimonial,
    isEditMode,
    toggleEditMode,
  };

  return <CMSContext.Provider value={value}>{children}</CMSContext.Provider>;
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (context === undefined) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};
