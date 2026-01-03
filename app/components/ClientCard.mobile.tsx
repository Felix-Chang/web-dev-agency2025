import Image from "next/image";

interface ClientCardProps {
  name: string;
  description: string;
  image?: string;
  URL?: string;
}

export default function ClientCardMobile({
  name,
  description,
  image,
  URL,
}: ClientCardProps) {
  return (
    <div className="bg-white  p-4 rounded-lg border border-zinc-100 ">
      {image && (
        <div className="relative mb-3 rounded-md">
          <div className="overflow-hidden rounded-md bg-zinc-200  flex items-center justify-center h-40">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain rounded-md"
            />
          </div>
          {URL && (
            <a
              href={URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 right-2 bg-white/90  p-2 rounded-md shadow-md"
              aria-label="Open in new tab"
            >
              <Image
                src="/assets/open_in_new_24.png"
                alt="Open in new tab"
                width={20}
                height={20}
              />
            </a>
          )}
        </div>
      )}
      <h3 className="text-lg font-semibold mb-2 text-black ">
        {name}
      </h3>
      <p className="text-sm text-zinc-600 ">{description}</p>
    </div>
  );
}
