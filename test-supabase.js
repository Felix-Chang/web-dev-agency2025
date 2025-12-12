const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('Testing Supabase connection...');
console.log('URL:', supabaseUrl ? '✓ Set' : '✗ Missing');
console.log('Key:', supabaseKey ? '✓ Set' : '✗ Missing');

if (!supabaseUrl || !supabaseKey) {
  console.error('\n✗ Environment variables not set properly');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Test the connection
async function testConnection() {
  try {
    // Try to query the contact_submissions table
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .limit(1);

    if (error) {
      console.error('\n✗ Supabase Error:', error.message);
      console.log('\nPossible issues:');
      console.log('1. Table "contact_submissions" doesn\'t exist');
      console.log('2. Incorrect API credentials');
      console.log('3. Row Level Security (RLS) is enabled - need to disable or add policies');
      process.exit(1);
    }

    console.log('\n✓ Supabase connection successful!');
    console.log('Table is accessible and ready to receive submissions.');
  } catch (err) {
    console.error('\n✗ Connection failed:', err.message);
    process.exit(1);
  }
}

testConnection();
