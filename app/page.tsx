import Link from "next/link";
import BuildLaunchScale from "./components/buildLaunchScale";
import ServicesCarousel from "./components/ServicesCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F8FF] font-sans dark:bg-[1B1B1B]">
      {/* Hero - Centered */}
      <div className="relative flex min-h-screen flex-col items-center justify-center gap-6 lg:gap-8 px-4 lg:px-6 py-16 lg:py-24 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50 lg:opacity-60 dark:opacity-30 dark:lg:opacity-40 z-0"
        >
          <source src="/assets/hero_animation.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 dark:to-black/50 z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-4 lg:gap-8 text-center max-w-4xl px-2">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-black dark:text-zinc-50 leading-tight lg:leading-tight">
            Building websites that help businesses grow
          </h1>
          <p className="max-w-2xl text-lg lg:text-2xl leading-7 lg:leading-8 text-zinc-800 dark:text-zinc-400">
            High-performing websites and full-stack web apps designed to look
            great, load fast, and convert
          </p>
        </div>
        <Link
          className="relative z-10 flex h-11 lg:h-12 items-center font-bold justify-center rounded-full bg-foreground px-6 lg:px-8 text-sm lg:text-base text-background transition-colors hover:underline hover:bg-[#383838] dark:hover:bg-[#ccc]"
          href="/clients"
        >
          View Our Work
        </Link>
      </div>

      {/* Asymmetric Content */}
      <div className="px-4 py-12 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            {/* Left: Text */}
            <div className="flex flex-col gap-4 lg:gap-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-black dark:text-zinc-50 leading-tight">
                Everything you need to launch and scale online.
              </h2>
              <p className="text-base lg:text-xl leading-7 lg:leading-8 text-zinc-800 dark:text-zinc-400">
                From modern frontends to secure backends and database
                integration, we build systems that support real business growth.
              </p>
              <p className="text-base lg:text-xl leading-7 lg:leading-8 text-zinc-800 dark:text-zinc-400">
                We don't just build websites. We build the systems behind them.
                Each service works together to create fast, scalable, and
                reliable digital products.
              </p>
            </div>

            {/* Right: Graph Animation */}
            <div className="flex items-center justify-center">
              <div className="w-full h-64 lg:h-96 rounded-xl lg:rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
                <BuildLaunchScale />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Carousel */}
      <div className="pb-8 lg:pb-12 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto mb-6 lg:mb-8">
          <div className="text-center lg:text-right pr-0 lg:pr-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-zinc-50 mb-2 lg:mb-4">
              What We Do
            </h2>
            <p className="text-base lg:text-xl text-zinc-800 dark:text-zinc-400">
              Our expertise across the stack
            </p>
          </div>
        </div>
        <ServicesCarousel />

        {/* CTA Button */}
        <div className="flex justify-center mt-8 lg:mt-16">
          <Link
            href="/services"
            className="flex h-11 lg:h-12 items-center font-bold justify-center rounded-full bg-foreground px-6 lg:px-8 text-sm lg:text-base text-background transition-colors hover:bg-[#383838] hover:underline dark:hover:bg-[#ccc]"
          >
            View All Services
          </Link>
        </div>
      </div>
    </div>
  );
}
