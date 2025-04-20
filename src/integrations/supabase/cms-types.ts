
import { Json } from "./types";

export interface CmsContent {
  id: string;
  type: 'page' | 'blog_post' | 'case_study' | 'service' | 'product' | 'testimonial' | 'feature_config';
  title: string;
  slug: string;
  meta_description: string | null;
  meta_keywords: string | null;
  content: Json;
  is_published: boolean;
  created_at: string;
  updated_at: string;
  author_id: string | null;
  version: number;
}

export interface CmsContentVersion {
  id: string;
  content_id: string;
  version: number;
  content: Json;
  created_at: string;
  author_id: string | null;
}

export interface CmsNavigation {
  id: string;
  title: string;
  parent_id: string | null;
  content_id: string | null;
  external_url: string | null;
  order_index: number;
  is_published: boolean;
}

export interface CmsMedia {
  id: string;
  filename: string;
  storage_path: string;
  mime_type: string;
  size: number;
  dimensions: Json | null;
  alt_text: string | null;
  created_at: string;
  uploaded_by: string | null;
}

export interface CmsSeoSettings {
  id: string;
  content_id: string | null;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  og_title: string | null;
  og_description: string | null;
  og_image_id: string | null;
  twitter_title: string | null;
  twitter_description: string | null;
  twitter_image_id: string | null;
  canonical_url: string | null;
  is_indexable: boolean | null;
  updated_at: string;
}
