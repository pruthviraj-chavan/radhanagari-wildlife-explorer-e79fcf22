
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SightingCardProps {
  image: string;
  name: string;
  localName: string;
  category: string;
  description: string;
  rarity: "common" | "uncommon" | "rare" | "very-rare";
}

const SightingCard = ({
  image,
  name,
  localName,
  category,
  description,
  rarity,
}: SightingCardProps) => {
  const rarityConfig = {
    "common": { color: "bg-green-500", label: "Common" },
    "uncommon": { color: "bg-blue-500", label: "Uncommon" },
    "rare": { color: "bg-purple-500", label: "Rare" },
    "very-rare": { color: "bg-red-500", label: "Very Rare" },
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className={cn("absolute top-3 right-3 px-2 py-1 rounded-full text-xs text-white font-medium", rarityConfig[rarity].color)}>
          {rarityConfig[rarity].label}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-green-700">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-sm italic text-gray-600 mb-3">{localName}</p>
        <p className="text-gray-700 flex-grow">{description}</p>
      </div>
    </Card>
  );
};

export default SightingCard;
