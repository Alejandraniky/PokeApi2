import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://otqfdtbgcgliapgpwcka.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90cWZkdGJnY2dsaWFwZ3B3Y2thIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMzgwODIsImV4cCI6MjA2MjkxNDA4Mn0.0AxxKjF94Sd5ogruoTeTMHudEYQin1OsUgvjOwgGn1Q';
export const supabase = createClient(supabaseUrl, supabaseKey);