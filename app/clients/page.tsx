import type { Metadata } from 'next';
import Link from 'next/link';
import ClientCard from '../components/client-card';

export const metadata: Metadata = {
  title: 'Our Clients',
  description: 'Meet our valued clients and partners',
};

const clients = [
  {
    id: 1,
    name: 'Client Name',
    description: 'Description of the client or project work done.',
  },
  {
    id: 2,
    name: 'Client Name',
    description: 'Description of the client or project work done.',
  },
  {
    id: 3,
    name: 'Client Name',
    description: 'Description of the client or project work done.',
  },
  {
    id: 4,
    name: 'Client Name',
    description: 'Description of the client or project work done.',
  },
  {
    id: 5,
    name: 'Client Name',
    description: 'Description of the client or project work done.',
  },
  {
    id: 6,
    name: 'Client Name',
    description: 'Description of the client or project work done.',
  },
  // Add more clients here
];

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-[#F8F8FF] dark:bg-[1B1B1B] p-8">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-8 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="text-5xl font-bold mb-6 text-black dark:text-zinc-50">
          Our Clients
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
          We're proud to work with amazing companies and individuals.
        </p>

        {/* Who We Help Section */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg p-8 mb-12 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-zinc-50">
            Who We Help
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
            We work with startups, small businesses, and growing teams looking to build or improve their online presence. Whether you're launching something new or reworking an existing website, we're here to help you succeed.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">✓</span>
              <span className="text-zinc-700 dark:text-zinc-300">
                <strong>Early-stage startups</strong> ready to establish their digital foundation
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">✓</span>
              <span className="text-zinc-700 dark:text-zinc-300">
                <strong>Local & service-based businesses</strong> looking to grow their customer base
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">✓</span>
              <span className="text-zinc-700 dark:text-zinc-300">
                <strong>Online brands & creators</strong> building their unique presence
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">✓</span>
              <span className="text-zinc-700 dark:text-zinc-300">
                <strong>Businesses seeking rebranding</strong> or website redesigns to stay competitive
              </span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client) => (
            <ClientCard
              key={client.id}
              name={client.name}
              description={client.description}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
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