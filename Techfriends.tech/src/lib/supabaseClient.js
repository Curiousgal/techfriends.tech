import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fsmyxolfsadzioamszmz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzbXl4b2xmc2FkemlvYW1zem16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4NjMxMzgsImV4cCI6MjA2NTQzOTEzOH0.os1les86GpZbfyTMPyAYSTKWA1aisQs8d9w1823facA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);