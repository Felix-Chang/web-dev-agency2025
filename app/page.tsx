import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-center gap-8 py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center mt-12 gap-8 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-black dark:text-zinc-50">
            Welcome to "Our Agency"
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-800 dark:text-zinc-400">
            We help businesses grow with high-performing websites.
          </p>
        </div>
        <div className="flex flex-col gap-8 text-base font-medium sm:flex-row">
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full bg-foreground px-8 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-auto"
            href="/clients"
          >
            View Our Clients
          </Link>
        </div>

        <div className="flex flex-col items-center gap-4 text-left mt-32 max-w-2xl">
          <h2 className="text-3xl font-bold text-black dark:text-zinc-50">
            Everything you need to launch and scale online.
          </h2>
          <p className="text-lg leading-7 text-zinc-600 dark:text-zinc-400">
            From modern frontends to secure backends and database integration, we build systems that support real business growth.
          </p>
        </div>
      </main>
      
    </div>
  );
}
