import Link from "next/link";
import BuildLaunchScale from "@/components/buildLaunchScale";
import ServicesCarousel from "@/components/ServicesCarousel";

export default function HomeMobile() {
  return (
    <div className="min-h-screen bg-[#F8F8FF] font-sans ">
      {/* Hero - Centered */}
      <div className="relative flex min-h-screen flex-col items-center justify-center gap-6 px-4 py-16 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50  z-0"
        >
          <source src="/assets/hero_animation.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50  z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-4 text-center max-w-4xl px-2">
          <h1 className="text-4xl font-bold tracking-tight text-black  leading-tight">
            Building websites that help businesses grow
          </h1>
          <p className="max-w-2xl text-lg leading-7 text-zinc-800 ">
            High-performing websites and full-stack web apps designed to look
            great, load fast, and convert
          </p>
        </div>
        <Link
          className="relative z-10 flex h-11 items-center font-bold justify-center rounded-full bg-foreground px-6 text-sm text-background transition-colors hover:underline hover:bg-[#383838] "
          href="/clients"
        >
          View Our Work
        </Link>
      </div>

      {/* Asymmetric Content - Stacked */}
      <div className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8">
            {/* Text */}
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold text-black  leading-tight">
                Everything you need to launch and scale online.
              </h2>
              <p className="text-base leading-7 text-zinc-800 ">
                From modern frontends to secure backends and database
                integration, we build systems that support real business growth.
              </p>
              <p className="text-base leading-7 text-zinc-800 ">
                We don't just build websites. We build the systems behind them.
                Each service works together to create fast, scalable, and
                reliable digital products.
              </p>
            </div>

            {/* Graph Animation */}
            <div className="flex items-center justify-center">
              <div className="w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200  ">
                <BuildLaunchScale />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Carousel */}
      <div className="pb-8 px-4">
        <div className="max-w-7xl mx-auto mb-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black  mb-2">
              What We Do
            </h2>
            <p className="text-base text-zinc-800 ">
              Our expertise across the stack
            </p>
          </div>
        </div>
        <ServicesCarousel />

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <Link
            href="/services"
            className="flex h-11 items-center font-bold justify-center rounded-full bg-foreground px-6 text-sm text-background transition-colors hover:bg-[#383838] hover:underline "
          >
            View All Services
          </Link>
        </div>
      </div>
    </div>
  );
}
