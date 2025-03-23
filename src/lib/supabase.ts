import { createClient } from "@supabase/supabase-js";
import { type Database } from "@/types/supabase";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://hfynleemyhmgtmfxrhli.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmeW5sZWVteWhtZ3RtZnhyaGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3Mjk0MTcsImV4cCI6MjA1ODMwNTQxN30.jMmypXeoNtwashfGaFDc-Sw6XybQxKYo5Wt-H7nVQRI";

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
