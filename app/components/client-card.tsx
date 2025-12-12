import Image from 'next/image';

interface ClientCardProps {
  name: string;
  description: string;
  image?: string;
  URL?: string;
}

export default function ClientCard({ name, description, image, URL }: ClientCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
      {image && (
        <div className="relative mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover rounded-md"
          />
          {URL && (
            <a
              href={URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 right-2 bg-white/90 dark:bg-zinc-900/90 hover:bg-white dark:hover:bg-zinc-800 p-2 rounded-md transition-colors shadow-md"
              aria-label="Open in new tab"
            >
              <Image
                src="/assets/open_in_new_24.png"
                alt="Open in new tab"
                width={24}
                height={24}
              />
            </a>
          )}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2 text-black dark:text-zinc-50">
        {name}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </div>
  );
}
