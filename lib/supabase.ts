import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hbuzbtxuqpgfvkgcpewo.supabase.co';

const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhidXpidHh1cXBnZnZrZ2NwZXdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxMzExMTgsImV4cCI6MjA5NzcwNzExOH0.m4MomdmGJI173blpzGwTrRMMRO3FPoeDm9MInNPldcc';

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);