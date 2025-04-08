
import { StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ShopCardProps {
  name: string;
  image: string;
  price: string;
  rating: number;
  description: string;
  features: string[];
  location?: string;
  className?: string;
}

const ShopCard = ({
  name,
  image,
  price,
  rating,
  description,
  features,
  location,
  className
}: ShopCardProps) => {
  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow", className)}>
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium flex items-center">
            {rating} <StarIcon className="w-3 h-3 ml-0.5" />
          </div>
        </div>
        
        {location && (
          <p className="mt-1 text-sm text-gray-600">{location}</p>
        )}
        
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
        
        <div className="mt-3 flex flex-wrap gap-1">
          {features.map((feature, idx) => (
            <span 
              key={idx} 
              className="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs font-medium text-gray-700"
            >
              {feature}
            </span>
          ))}
        </div>
        
        <div className="mt-4 text-sm font-medium">
          Price: <span className="text-green-700">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
