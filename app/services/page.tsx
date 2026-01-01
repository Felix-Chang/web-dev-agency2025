import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive web development services",
};

const services = [
  {
    title: "Frontend Development",
    subtitle: "Clean design that converts.",
    description:
      "Modern, responsive interfaces designed for usability, performance, and a consistent experience across devices.",
    features: [
      "Modern frameworks",
      "Responsive design for all devices",
      "Performance optimization",
      "Accessibility compliance",
    ],
  },
  {
    title: "Backend Integration",
    subtitle: "Reliable systems behind the scenes.",
    description:
      "Setting up the services that power your website, including databases, authentication, analytics, and third-party APIs.",
    features: [
      "External service integrations",
      "Data management and storage",
      "Security and user authentication",
      "Deployment and infrastructure setup",
    ],
  },
  {
    title: "SEO & Performance",
    subtitle: "Websites built to be found.",
    description:
      "Technical SEO and performance optimization to improve rankings, page speed, and user retention.",
    features: [
      "Technical SEO audits",
      "Core Web Vitals optimization",
      "Site speed improvements",
      "Search engine visibility",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F8F8FF] dark:bg-[#1B1B1B] p-8">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-8 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="text-5xl font-bold mb-6 text-black dark:text-zinc-50">
          What We Do
        </h1>

        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-16 max-w-3xl">
          We provide end-to-end web development services to help businesses
          launch, scale, and succeed online.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800 flex flex-col"
            >
              <h2 className="text-2xl font-bold text-black dark:text-zinc-50 mb-2">
                {service.title}
              </h2>
              <p className="text-lg font-semibold text-zinc-600 dark:text-zinc-400 mb-4">
                {service.subtitle}
              </p>
              <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400 mb-6 flex-grow">
                {service.description}
              </p>
              <ul className="space-y-2 mt-auto">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start"
                  >
                    <span className="mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 pb-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-zinc-50">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and bring your vision to life.
          </p>
          <Link
            href="/contact-us"
            className="inline-block font-bold rounded-full bg-foreground px-6 py-2 text-background transition-colors hover:bg-[#383838] hover:underline dark:hover:bg-[#ccc]"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
