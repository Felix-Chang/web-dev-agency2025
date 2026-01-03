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

export default function ClientsPageDesktop() {
  return (
    <div className="min-h-screen bg-[#F8F8FF]  p-8">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-8 text-zinc-600  hover:text-black  transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="text-5xl font-bold mb-6 text-black ">
          Our Clients
        </h1>

        <p className="text-lg text-zinc-600  mb-12">
          We're proud to work with amazing companies and individuals.
        </p>

        {/* Who We Help Section */}
        <div className="bg-white  rounded-lg p-8 mb-12 border border-zinc-200 ">
          <h2 className="text-3xl font-bold mb-4 text-black ">
            Who We Help
          </h2>
          <p className="text-lg text-zinc-600  mb-6">
            We work with startups, small businesses, and growing teams looking
            to build or improve their online presence. Whether you're launching
            something new or reworking an existing website, we're here to help
            you succeed.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">✓</span>
              <span className="text-zinc-700 ">
                <strong>Early-stage startups</strong> ready to establish their
                digital foundation
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">✓</span>
              <span className="text-zinc-700 ">
                <strong>Local & service-based businesses</strong> looking to
                grow their customer base
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">✓</span>
              <span className="text-zinc-700 ">
                <strong>Online brands & creators</strong> building their unique
                presence
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">✓</span>
              <span className="text-zinc-700 ">
                <strong>Businesses seeking rebranding</strong> or website
                redesigns to stay competitive
              </span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-6">
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

        {/* Client Testimonial Section */}
        <div className="mt-16 grid grid-cols-2 gap-8">
          {/* Left Half - Testimonial Card */}
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100   rounded-lg p-8 border border-blue-200 ">
            <blockquote className="text-xl font-medium text-zinc-800  mb-6 italic">
              Working with Felix Web Studio transformed our online presence.
              They understood our vision and delivered a website that exceeded
              our expectations. Our customer engagement has increased
              significantly since launch.
            </blockquote>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                JD
              </div>
              <div>
                <p className="font-bold text-lg text-zinc-900 ">
                  Jane Doe
                </p>
                <p className="text-zinc-600  font-semibold">
                  CEO, TechStart Inc.
                </p>
                <p className="text-zinc-500  text-sm mt-1">
                  A SaaS platform helping small businesses streamline their
                  operations
                </p>
              </div>
            </div>
          </div>

          {/* Right Half - Communication Image */}
          <div className="flex items-center justify-center">
            <Image
              src="/assets/communication.jpg"
              alt="Communication"
              width={600}
              height={600}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-12 pb-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-black ">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-zinc-600  mb-8 max-w-2xl mx-auto">
            Let's discuss your project and bring your vision to life.
          </p>
          <Link
            href="/contact-us"
            className="inline-block font-bold rounded-full bg-foreground px-6 py-2 text-background transition-colors hover:bg-[#383838] hover:underline "
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
