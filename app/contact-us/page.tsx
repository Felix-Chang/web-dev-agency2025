import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '../components/contact-form';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Leave us your contact information',
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#F8F8FF] dark:bg-[1B1B1B] px-8 pt-8 pb-20">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-8 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="text-5xl font-bold mb-6 text-black dark:text-zinc-50">
          Contact Us
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
          Leave us your contact information.
        </p>

        <ContactForm />
      </div>
    </div>
  );
}