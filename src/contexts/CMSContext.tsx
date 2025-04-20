
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';

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
  updatePage: (pageId: string, content: Partial<PageContent>) => Promise<void>;
  updateBlogPost: (postId: string, content: Partial<BlogPost>) => Promise<void>;
  updateCaseStudy: (studyId: string, content: Partial<CaseStudy>) => Promise<void>;
  updateTestimonial: (testimonialId: string, content: Partial<Testimonial>) => Promise<void>;
  updateService: (serviceId: string, content: Partial<Service>) => Promise<void>;
  updateProduct: (productId: string, content: Partial<Product>) => Promise<void>;
  addBlogPost: (post: BlogPost) => Promise<void>;
  addCaseStudy: (study: CaseStudy) => Promise<void>;
  addTestimonial: (testimonial: Testimonial) => Promise<void>;
  isEditMode: boolean;
  toggleEditMode: () => void;
  isLoading: boolean;
}

// Create context
const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider = ({ children }: { children: ReactNode }) => {
  const [pages, setPages] = useState<PageContent[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch content from Supabase on component mount
  useEffect(() => {
    const fetchContent = async () => {
      try {
        setIsLoading(true);
        
        // Fetch pages
        const { data: pagesData, error: pagesError } = await supabase
          .from('cms_content')
          .select('*')
          .eq('type', 'page');
        
        if (pagesError) throw pagesError;
        
        // Transform the data to match our frontend model
        const transformedPages = pagesData.map(page => ({
          id: page.id,
          title: page.title,
          description: page.meta_description || '',
          content: page.content as Record<string, any>,
          slug: page.slug,
          isPublished: page.is_published,
          createdAt: page.created_at,
          updatedAt: page.updated_at
        }));
        
        setPages(transformedPages);
        
        // Similar fetches for other content types would be here
        // For now, we'll focus on pages since they're the most important
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching CMS content:', error);
        toast({
          title: 'Error',
          description: 'Failed to load content. Please try again later.',
          variant: 'destructive'
        });
        setIsLoading(false);
      }
    };
    
    fetchContent();
  }, []);

  const updatePage = async (pageId: string, content: Partial<PageContent>) => {
    try {
      // First update local state for immediate UI feedback
      setPages(pages.map(page => 
        page.id === pageId ? { ...page, ...content, updatedAt: new Date().toISOString() } : page
      ));
      
      // Prepare data for Supabase
      const supabaseData = {
        ...(content.title && { title: content.title }),
        ...(content.description && { meta_description: content.description }),
        ...(content.content && { content: content.content }),
        ...(content.slug && { slug: content.slug }),
        ...(content.isPublished !== undefined && { is_published: content.isPublished }),
        updated_at: new Date().toISOString()
      };
      
      // Update in Supabase
      const { error } = await supabase
        .from('cms_content')
        .update(supabaseData)
        .eq('id', pageId);
      
      if (error) throw error;
      
      toast({
        title: 'Success',
        description: 'Page updated successfully!'
      });
    } catch (error) {
      console.error('Error updating page:', error);
      toast({
        title: 'Error',
        description: 'Failed to update page. Please try again.',
        variant: 'destructive'
      });
      
      // Fetch the latest data to ensure UI state is correct
      const { data } = await supabase
        .from('cms_content')
        .select('*')
        .eq('id', pageId)
        .single();
      
      if (data) {
        setPages(pages.map(page => 
          page.id === pageId ? {
            ...page,
            title: data.title,
            description: data.meta_description || '',
            content: data.content,
            slug: data.slug,
            isPublished: data.is_published,
            updatedAt: data.updated_at
          } : page
        ));
      }
    }
  };

  // Remaining methods would follow a similar pattern
  const updateBlogPost = async (postId: string, content: Partial<BlogPost>) => {
    // Implementation would be similar to updatePage
    setBlogPosts(blogPosts.map(post => 
      post.id === postId ? { ...post, ...content, updatedAt: new Date().toISOString() } : post
    ));
  };

  const updateCaseStudy = async (studyId: string, content: Partial<CaseStudy>) => {
    // Implementation would be similar to updatePage
    setCaseStudies(caseStudies.map(study => 
      study.id === studyId ? { ...study, ...content, updatedAt: new Date().toISOString() } : study
    ));
  };

  const updateTestimonial = async (testimonialId: string, content: Partial<Testimonial>) => {
    // Implementation would be similar to updatePage
    setTestimonials(testimonials.map(testimonial => 
      testimonial.id === testimonialId ? { ...testimonial, ...content } : testimonial
    ));
  };

  const updateService = async (serviceId: string, content: Partial<Service>) => {
    // Implementation would be similar to updatePage
    setServices(services.map(service => 
      service.id === serviceId ? { ...service, ...content } : service
    ));
  };

  const updateProduct = async (productId: string, content: Partial<Product>) => {
    // Implementation would be similar to updatePage
    setProducts(products.map(product => 
      product.id === productId ? { ...product, ...content } : product
    ));
  };

  const addBlogPost = async (post: BlogPost) => {
    // Implementation would be similar to updatePage, but for creation
    setBlogPosts([...blogPosts, post]);
  };

  const addCaseStudy = async (study: CaseStudy) => {
    // Implementation would be similar to updatePage, but for creation
    setCaseStudies([...caseStudies, study]);
  };

  const addTestimonial = async (testimonial: Testimonial) => {
    // Implementation would be similar to updatePage, but for creation
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
    isLoading
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
