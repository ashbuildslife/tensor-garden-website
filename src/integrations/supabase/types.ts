export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      cms_content: {
        Row: {
          author_id: string | null
          content: Json
          created_at: string
          id: string
          is_published: boolean | null
          meta_description: string | null
          meta_keywords: string | null
          slug: string
          title: string
          type: string
          updated_at: string
          version: number
        }
        Insert: {
          author_id?: string | null
          content: Json
          created_at?: string
          id?: string
          is_published?: boolean | null
          meta_description?: string | null
          meta_keywords?: string | null
          slug: string
          title: string
          type: string
          updated_at?: string
          version?: number
        }
        Update: {
          author_id?: string | null
          content?: Json
          created_at?: string
          id?: string
          is_published?: boolean | null
          meta_description?: string | null
          meta_keywords?: string | null
          slug?: string
          title?: string
          type?: string
          updated_at?: string
          version?: number
        }
        Relationships: []
      }
      cms_content_versions: {
        Row: {
          author_id: string | null
          content: Json
          content_id: string | null
          created_at: string
          id: string
          version: number
        }
        Insert: {
          author_id?: string | null
          content: Json
          content_id?: string | null
          created_at?: string
          id?: string
          version: number
        }
        Update: {
          author_id?: string | null
          content?: Json
          content_id?: string | null
          created_at?: string
          id?: string
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "cms_content_versions_content_id_fkey"
            columns: ["content_id"]
            isOneToOne: false
            referencedRelation: "cms_content"
            referencedColumns: ["id"]
          },
        ]
      }
      cms_media: {
        Row: {
          alt_text: string | null
          created_at: string
          dimensions: Json | null
          filename: string
          id: string
          mime_type: string
          size: number
          storage_path: string
          uploaded_by: string | null
        }
        Insert: {
          alt_text?: string | null
          created_at?: string
          dimensions?: Json | null
          filename: string
          id?: string
          mime_type: string
          size: number
          storage_path: string
          uploaded_by?: string | null
        }
        Update: {
          alt_text?: string | null
          created_at?: string
          dimensions?: Json | null
          filename?: string
          id?: string
          mime_type?: string
          size?: number
          storage_path?: string
          uploaded_by?: string | null
        }
        Relationships: []
      }
      cms_navigation: {
        Row: {
          content_id: string | null
          external_url: string | null
          id: string
          is_published: boolean | null
          order_index: number
          parent_id: string | null
          title: string
        }
        Insert: {
          content_id?: string | null
          external_url?: string | null
          id?: string
          is_published?: boolean | null
          order_index?: number
          parent_id?: string | null
          title: string
        }
        Update: {
          content_id?: string | null
          external_url?: string | null
          id?: string
          is_published?: boolean | null
          order_index?: number
          parent_id?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "cms_navigation_content_id_fkey"
            columns: ["content_id"]
            isOneToOne: false
            referencedRelation: "cms_content"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cms_navigation_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "cms_navigation"
            referencedColumns: ["id"]
          },
        ]
      }
      cms_seo_settings: {
        Row: {
          canonical_url: string | null
          content_id: string | null
          id: string
          is_indexable: boolean | null
          meta_description: string | null
          meta_keywords: string | null
          meta_title: string | null
          og_description: string | null
          og_image_id: string | null
          og_title: string | null
          twitter_description: string | null
          twitter_image_id: string | null
          twitter_title: string | null
          updated_at: string
        }
        Insert: {
          canonical_url?: string | null
          content_id?: string | null
          id?: string
          is_indexable?: boolean | null
          meta_description?: string | null
          meta_keywords?: string | null
          meta_title?: string | null
          og_description?: string | null
          og_image_id?: string | null
          og_title?: string | null
          twitter_description?: string | null
          twitter_image_id?: string | null
          twitter_title?: string | null
          updated_at?: string
        }
        Update: {
          canonical_url?: string | null
          content_id?: string | null
          id?: string
          is_indexable?: boolean | null
          meta_description?: string | null
          meta_keywords?: string | null
          meta_title?: string | null
          og_description?: string | null
          og_image_id?: string | null
          og_title?: string | null
          twitter_description?: string | null
          twitter_image_id?: string | null
          twitter_title?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "cms_seo_settings_content_id_fkey"
            columns: ["content_id"]
            isOneToOne: false
            referencedRelation: "cms_content"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cms_seo_settings_og_image_id_fkey"
            columns: ["og_image_id"]
            isOneToOne: false
            referencedRelation: "cms_media"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cms_seo_settings_twitter_image_id_fkey"
            columns: ["twitter_image_id"]
            isOneToOne: false
            referencedRelation: "cms_media"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
