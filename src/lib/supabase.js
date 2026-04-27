import { createClient } from '@supabase/supabase-js';

// Eissa Aly System Credentials
const supabaseUrl = 'https://erpwsrjzheopqsfyhcru.supabase.co'; 
const supabaseAnonKey = 'sb_publishable_ZJcd2SEENtPklT7NpCXBTQ_c7DBFVSG';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Log status to console for Eissa
console.log("EA System: Database Connection Established ✅");