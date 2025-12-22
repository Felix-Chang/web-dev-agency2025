import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about the founder and the agency",
};

export default function About() {
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
          About
        </h1>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left: Image */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-zinc-300 to-zinc-400 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center">
              {/* Placeholder for person image */}
              <span className="text-zinc-500 dark:text-zinc-400 text-lg">
                Your Photo Here
              </span>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col gap-6">
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Hi, I'm Michael, the founder of "Our Agency".
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              With over 7 years of experience in web development and design,
              I've helped many businesses transform their online presence.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              I started this agency because I believe every business deserves a
              website that not only looks great but actually drives results.
              Whether it's a sleek landing page or a complex full-stack
              application, I'm passionate about building digital products that
              make a difference.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              When I'm not coding, you can find me [hobby/interest], exploring
              new technologies, or working with clients to bring their visions
              to life.
            </p>
          </div>
        </div>

        {/* Skills/Expertise Section */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg p-8 mb-12 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-zinc-50">
            My Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold text-black dark:text-zinc-50">
                Frontend Development
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Creating beautiful, responsive interfaces with React, Next.js,
                and modern CSS frameworks.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold text-black dark:text-zinc-50">
                Backend Systems
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Building robust APIs and server infrastructure that scales with
                your business.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold text-black dark:text-zinc-50">
                Full-Stack Solutions
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                End-to-end development from concept to deployment and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-12 pb-16 text-center">
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
