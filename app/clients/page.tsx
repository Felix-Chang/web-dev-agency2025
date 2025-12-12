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
  // Add more clients here
];

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client) => (
            <ClientCard
              key={client.id}
              name={client.name}
              description={client.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}