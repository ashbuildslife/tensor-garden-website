
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';

const supabaseUrl = "https://rgqwzalqpqjomacihgnu.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJncXd6YWxxcHFqb21hY2loZ251Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxMTUxNDQsImV4cCI6MjA2MDY5MTE0NH0.6sjjM1iHE3Qmq-ze-uXCzcMEW-4fNrvtAR1IpuPVeVQ";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    
    // Get the latest backup log entry
    const { data: latestBackup, error: fetchError } = await supabase
      .from('backup_logs')
      .select('*')
      .order('backup_date', { ascending: false })
      .limit(1)
      .single();

    if (fetchError) {
      console.error('Error fetching latest backup:', fetchError);
      throw new Error('Failed to fetch latest backup information');
    }

    // Get database tables backup
    const { data: tables, error: tablesError } = await supabase
      .rpc('get_all_tables_data');

    if (tablesError) {
      console.error('Error backing up tables:', tablesError);
      
      // Update backup log with error status
      await supabase
        .from('backup_logs')
        .update({
          status: 'failed',
          details: { error: tablesError.message }
        })
        .eq('id', latestBackup.id);

      throw new Error('Failed to backup tables');
    }

    // Update backup log with success status
    await supabase
      .from('backup_logs')
      .update({
        status: 'completed',
        details: {
          tables_backed_up: tables.length,
          backup_size: JSON.stringify(tables).length
        }
      })
      .eq('id', latestBackup.id);

    console.log('Backup completed successfully');
    return new Response(JSON.stringify({ status: 'success' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in backup function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
