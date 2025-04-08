
import { cn } from "@/lib/utils";

interface FounderCardProps {
  name: string;
  role: string;
  image: string;
  description: string;
  className?: string;
}

export const FounderCard = ({
  name,
  role,
  image,
  description,
  className
}: FounderCardProps) => {
  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow", className)}>
      <div className="p-2">
        <div className="aspect-square overflow-hidden rounded-full mb-3 mx-auto w-24 h-24">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-primary mb-2">{role}</p>
          <p className="text-xs text-gray-600 line-clamp-3">{description}</p>
        </div>
      </div>
    </div>
  );
};
