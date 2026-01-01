'use client';

import { useState } from 'react';
import { submitContactForm } from '../actions/contact';
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    setMessage(null);

    try {
      const formData = new FormData(form);
      const result = await submitContactForm(formData);

      console.log('Form submission result:', result);

      if (result?.success) {
        setMessage({ type: 'success', text: 'Thank you! Your message has been submitted.' });
        form.reset();
      } else {
        setMessage({ type: 'error', text: result?.error || 'Something went wrong.' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setMessage({ type: 'error', text: 'An unexpected error occurred.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FieldGroup>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLegend>First Name</FieldLegend>
              <Input
                name="firstName"
                placeholder="First Name"
                required
              />
            </Field>
            <Field>
              <FieldLegend>Last Name</FieldLegend>
              <Input
                name="lastName"
                placeholder="Last Name"
                required
              />
            </Field>
            <Field>
              <FieldLegend>Email</FieldLegend>
              <Input
                name="email"
                type="email"
                placeholder="email@example.com"
                required
              />
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <Textarea
                id="message"
                name="message"
                placeholder="Add any additional comments"
                className="resize-none"
              />
            </Field>
          </FieldGroup>
        </FieldSet>
        {message && (
          <div
            className={`p-4 rounded-md mb-4 ${
              message.type === 'success'
                ? 'bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                : 'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400'
            }`}
          >
            {message.text}
          </div>
        )}
        <Field orientation="horizontal">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
