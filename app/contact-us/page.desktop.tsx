import Link from "next/link";
import ContactForm from "../components/ContactForm";

export default function ContactUsPageDesktop() {
  return (
    <div className="min-h-screen bg-[#F8F8FF]  px-8 pt-8 pb-20">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-8 text-zinc-600  hover:text-black  transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="text-5xl font-bold mb-6 text-black ">
          Contact Us
        </h1>

        <p className="text-lg text-zinc-600  mb-12">
          Leave us your contact information.
        </p>

        <ContactForm />
      </div>
    </div>
  );
}
