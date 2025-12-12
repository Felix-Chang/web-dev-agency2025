'use server';

import { supabase } from '@/lib/supabase';

export async function submitContactForm(formData: FormData) {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // Validate the data
  if (!firstName || !lastName || !email) {
    return { success: false, error: 'Please fill in all required fields' };
  }

  // Insert into Supabase
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert([
      {
        first_name: firstName,
        last_name: lastName,
        email: email,
        message: message,
        submitted_at: new Date().toISOString(),
      },
    ])
    .select();

  if (error) {
    console.error('Error submitting form:', error);
    return { success: false, error: `Failed to submit: ${error.message}` };
  }

  return { success: true };
}
