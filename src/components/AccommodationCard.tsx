
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface AccommodationCardProps {
  name: string;
  image: string;
  price?: string;
  rating: number;
  description: string;
  features: string[];
  distance?: string;
}

const AccommodationCard = ({
  name,
  image,
  price,
  rating,
  description,
  features,
  distance
}: AccommodationCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {price && (
          <div className="absolute bottom-3 right-3 bg-white py-1 px-3 rounded-full font-semibold text-sm shadow">
            {price}
          </div>
        )}
        {distance && (
          <div className="absolute top-3 left-3 bg-black/70 text-white py-1 px-3 rounded-full text-xs">
            {distance} from sanctuary
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex items-center bg-green-50 px-2 py-1 rounded">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium ml-1">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mt-2 mb-3 text-sm">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <Badge key={index} variant="outline" className="bg-gray-50">
              {feature}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccommodationCard;
