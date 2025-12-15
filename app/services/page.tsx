import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive web development services',
};

const services = [
  {
    title: 'Frontend Development',
    subtitle: 'Clean design that converts.',
    description: 'Modern, responsive interfaces designed for usability, performance, and a consistent experience across devices.',
    features: [
      'React, Next.js, and modern frameworks',
      'Responsive design for all devices',
      'Performance optimization',
      'Accessibility compliance',
    ],
  },
  {
    title: 'Backend Development',
    subtitle: 'Reliable systems behind the scenes.',
    description: 'Secure backends and APIs that power your product, handle traffic, and scale as your business grows.',
    features: [
      'RESTful and GraphQL APIs',
      'Database design and optimization',
      'Authentication and security',
      'Cloud infrastructure',
    ],
  },
  {
    title: 'SEO & Performance',
    subtitle: 'Websites built to be found.',
    description: 'Technical SEO and performance optimization to improve rankings, page speed, and user retention.',
    features: [
      'Technical SEO audits',
      'Core Web Vitals optimization',
      'Site speed improvements',
      'Search engine visibility',
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
          We provide end-to-end web development services to help businesses launch, scale, and succeed online.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800"
            >
              <h2 className="text-2xl font-bold text-black dark:text-zinc-50 mb-2">
                {service.title}
              </h2>
              <p className="text-lg font-semibold text-zinc-600 dark:text-zinc-400 mb-4">
                {service.subtitle}
              </p>
              <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start">
                    <span className="mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
