import Link from "next/link";
import Image from "next/image";
import ClientCard from "../components/ClientCard";

const clients = [
  {
    id: 1,
    name: "Hurts So Good Tattoos",
    description: "Tattoo Studio in Denton & Austin, TX",
    image: "/assets/tattoo.png",
    URL: "https://www.hurtssogoodtattoo.com/",
  },
  {
    id: 2,
    name: "Client Name",
    description: "Description of the client or project work done.",
  },
  {
    id: 3,
    name: "Client Name",
    description: "Description of the client or project work done.",
  },
  {
    id: 4,
    name: "Client Name",
    description: "Description of the client or project work done.",
  },
  {
    id: 5,
    name: "Client Name",
    description: "Description of the client or project work done.",
  },
  {
    id: 6,
    name: "Client Name",
    description: "Description of the client or project work done.",
  },
];

export default function ClientsPageMobile() {
  return (
    <div className="min-h-screen bg-[#F8F8FF]  p-4">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-6 text-sm text-zinc-600  hover:text-black  transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold mb-4 text-black ">
          Our Clients
        </h1>

        <p className="text-base text-zinc-600  mb-8">
          We're proud to work with amazing companies and individuals.
        </p>

        {/* Who We Help Section */}
        <div className="bg-white  rounded-lg p-6 mb-8 border border-zinc-200 ">
          <h2 className="text-2xl font-bold mb-3 text-black ">
            Who We Help
          </h2>
          <p className="text-base text-zinc-600  mb-4">
            We work with startups, small businesses, and growing teams looking
            to build or improve their online presence. Whether you're launching
            something new or reworking an existing website, we're here to help
            you succeed.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-0.5">✓</span>
              <span className="text-sm text-zinc-700 ">
                <strong>Early-stage startups</strong> ready to establish their
                digital foundation
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-0.5">✓</span>
              <span className="text-sm text-zinc-700 ">
                <strong>Local & service-based businesses</strong> looking to
                grow their customer base
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-0.5">✓</span>
              <span className="text-sm text-zinc-700 ">
                <strong>Online brands & creators</strong> building their unique
                presence
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-0.5">✓</span>
              <span className="text-sm text-zinc-700 ">
                <strong>Businesses seeking rebranding</strong> or website
                redesigns to stay competitive
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          {clients.map((client) => (
            <ClientCard
              key={client.id}
              name={client.name}
              description={client.description}
              image={client.image}
              URL={client.URL}
            />
          ))}
        </div>

        {/* Client Testimonial Section - Stacked */}
        <div className="mt-12 flex flex-col gap-6">
          {/* Testimonial Card */}
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100   rounded-lg p-6 border border-blue-200 ">
            <blockquote className="text-base font-medium text-zinc-800  mb-4 italic">
              Working with Felix Web Studio transformed our online presence.
              They understood our vision and delivered a website that exceeded
              our expectations. Our customer engagement has increased
              significantly since launch.
            </blockquote>
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                JD
              </div>
              <div>
                <p className="font-bold text-base text-zinc-900 ">
                  Jane Doe
                </p>
                <p className="text-sm text-zinc-600  font-semibold">
                  CEO, TechStart Inc.
                </p>
                <p className="text-xs text-zinc-500  mt-1">
                  A SaaS platform helping small businesses streamline their
                  operations
                </p>
              </div>
            </div>
          </div>

          {/* Communication Image */}
          <div className="flex items-center justify-center">
            <Image
              src="/assets/communication.jpg"
              alt="Communication"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-6 pb-12 text-center">
          <h2 className="text-2xl font-bold mb-3 text-black ">
            Ready to Work Together?
          </h2>
          <p className="text-base text-zinc-600  mb-6 max-w-2xl mx-auto">
            Let's discuss your project and bring your vision to life.
          </p>
          <Link
            href="/contact-us"
            className="inline-block font-bold rounded-full bg-foreground px-6 py-2 text-sm text-background transition-colors hover:bg-[#383838] hover:underline "
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
