import Link from "next/link";
import BuildLaunchScale from "./components/buildLaunchScale";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F8FF] font-sans dark:bg-[1B1B1B]">
      {/* Hero - Centered */}
      <div className="relative flex min-h-screen flex-col items-center justify-center gap-8 px-6 py-24 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50 dark:opacity-40 z-0"
        >
          <source src="/assets/hero_animation.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 dark:to-black/50 z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-8 text-center max-w-3xl">
          <h1 className="text-6xl font-bold tracking-tight text-black dark:text-zinc-50">
            Welcome to "Our Agency"
          </h1>
          <p className="max-w-2xl text-xl leading-8 text-zinc-800 dark:text-zinc-400">
            We help businesses grow with high-performing websites.
          </p>
        </div>
        <Link
          className="relative z-10 flex h-12 items-center font-bold justify-center rounded-full bg-foreground px-8 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          href="/clients"
        >
          View Our Clients
        </Link>
      </div>

      {/* Asymmetric Content */}
      <div className="min-h-screen px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text */}
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-zinc-50 leading-tight">
                Everything you need to launch and scale online.
              </h2>
              <p className="text-xl leading-8 text-zinc-600 dark:text-zinc-400">
                From modern frontends to secure backends and database integration, we build systems that support real business growth.
              </p>
            </div>

            {/* Right: Graph Animation */}
            <div className="flex items-center justify-center">
              <div className="w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
                <BuildLaunchScale/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
