interface ClientCardProps {
  name: string;
  description: string;
  image?: string;
}

export default function ClientCard({ name, description, image }: ClientCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
      {image && (
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
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
