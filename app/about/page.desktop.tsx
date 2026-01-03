import Link from "next/link";
import Image from "next/image";

export default function AboutDesktop() {
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
          About
        </h1>

        {/* Main Content Section */}
        <div className="grid grid-cols-2 gap-12 my-12">
          {/* Left: Image */}
          <div className="flex justify-left">
            <div className="w-full max-w-md aspect-square justify-center rounded-lg overflow-hidden bg-gradient-to-br from-zinc-300 to-zinc-400   flex items-center justify-center">
              <span className="text-zinc-500  text-lg">
                Your Photo Here
              </span>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col gap-6">
            <p className="text-xl text-zinc-600 ">
              Hi, I'm Michael, the founder of "Our Agency".
            </p>
            <p className="text-xl text-zinc-700 ">
              With over 7 years of experience in professional web development
              and design, I've helped many businesses transform their online
              presence.
            </p>
            <p className="text-xl text-zinc-700 ">
              I started this agency because I believe every business deserves a
              website that not only looks great but actually drives results.
              Whether it's a sleek landing page or a complex full-stack
              application, I'm passionate about building digital products that
              make a difference.
            </p>
            <p className="text-xl text-zinc-700 ">
              I take a business-first approach to every project. That means
              understanding your goals, your customers, and what success
              actually looks like—not just writing code. I prioritize clear
              communication, fast feedback, and transparency throughout the
              process, and I'm always available to discuss ideas, updates, or
              changes.
            </p>
            <p className="text-xl text-zinc-700 font-bold">Education</p>
            <p className="text-xl text-zinc-700 ">
              B.S. in Computer Science | University of Southern California
            </p>
            <p className="text-xl text-zinc-700 ">
              M.S. in Artificial Intelligence | University of Texas at Austin
            </p>
          </div>
        </div>

        {/* Skills/Expertise Section */}
        <div className="bg-white  rounded-lg p-8 mb-12 border border-zinc-200 ">
          <h2 className="text-3xl font-bold mb-6 text-black ">
            My Expertise
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold text-black ">
                Frontend Development
              </h3>
              <p className="text-zinc-600 ">
                Creating beautiful, responsive interfaces with React, Next.js,
                and modern CSS frameworks.
              </p>
              <div className="mt-4">
                <Image
                  src="/assets/undraw_add-post_prex.png"
                  alt="Programming illustration"
                  width={300}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold text-black ">
                Backend Systems
              </h3>
              <p className="text-zinc-600 ">
                Building robust APIs and server infrastructure that scales with
                your business.
              </p>
              <div className="mt-4">
                <Image
                  src="/assets/undraw_programming_j1zw.png"
                  alt="Add post illustration"
                  width={300}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold text-black ">
                Full-Stack Solutions
              </h3>
              <p className="text-zinc-600 ">
                End-to-end development from concept to deployment and beyond.
              </p>
              <div className="mt-4">
                <Image
                  src="/assets/undraw_check-boxes_x5fg.png"
                  alt="Check boxes illustration"
                  width={300}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
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
