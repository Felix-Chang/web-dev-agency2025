import Image from "next/image";

interface ClientCardProps {
  name: string;
  description: string;
  image?: string;
  URL?: string;
}

export default function ClientCardDesktop({
  name,
  description,
  image,
  URL,
}: ClientCardProps) {
  return (
    <div className="bg-white  p-6 rounded-lg border border-zinc-100  hover:shadow-xl transition-shadow duration-300">
      {image && (
        <div className="group relative mb-4 rounded-md hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <div className="overflow-hidden rounded-md bg-zinc-200  flex items-center justify-center h-48">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
          {URL && (
            <a
              href={URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 right-2 bg-white/90  hover:bg-white  p-2 rounded-md transition-colors shadow-md"
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
      <h3 className="text-xl font-semibold mb-2 text-black ">
        {name}
      </h3>
      <p className="text-zinc-600 ">{description}</p>
    </div>
  );
}
