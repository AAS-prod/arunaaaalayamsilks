import { createClient } from '@supabase/supabase-js';

// Clean the variables to ensure no hidden spaces or string disconnects exist
const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim();
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').trim();

// This will help us catch if the system variables are empty
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("CRITICAL: Supabase keys are missing from the environment environment containers.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);