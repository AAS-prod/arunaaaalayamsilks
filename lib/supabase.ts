import { createClient } from '@supabase/supabase-js';

// Clean and fallback safely to a valid string format so the URL parser doesn't crash
const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-project.supabase.co').trim();
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').trim();

export const supabase = createClient(supabaseUrl, supabaseAnonKey);