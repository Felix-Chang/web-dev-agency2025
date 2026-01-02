import Link from "next/link";
import ContactForm from "../components/ContactForm";

export default function ContactUsPageMobile() {
  return (
    <div className="min-h-screen bg-[#F8F8FF] dark:bg-[1B1B1B] px-4 pt-6 pb-16">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-6 text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold mb-4 text-black dark:text-zinc-50">
          Contact Us
        </h1>

        <p className="text-base text-zinc-600 dark:text-zinc-400 mb-8">
          Leave us your contact information.
        </p>

        <ContactForm />
      </div>
    </div>
  );
}
