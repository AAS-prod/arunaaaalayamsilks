import { createClient } from '@supabase/supabase-js';

// Hardcoding the strings directly ensures no hidden spaces or Vercel container path bugs
const supabaseUrl = 'https://hbuzbtxuqpgfvkgcpewo.supabase.co/rest/v1/'; // Replace with your exact Supabase Project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhidXpidHh1cXBnZnZrZ2NwZXdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxMzExMTgsImV4cCI6MjA5NzcwNzExOH0.m4MomdmGJI173blpzGwTrRMMRO3FPoeDm9MInNPldcc'; // Replace with your exact anon public key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);