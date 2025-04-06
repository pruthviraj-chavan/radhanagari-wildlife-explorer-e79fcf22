
import { cn } from "@/lib/utils";

interface FoodCardProps {
  name: string;
  localName: string;
  description: string;
  image: string;
  isVeg?: boolean;
  isSpicy?: 1 | 2 | 3;
}

const FoodCard = ({
  name,
  localName,
  description,
  image,
  isVeg = false,
  isSpicy = 1
}: FoodCardProps) => {
  const spicyLevel = {
    1: "Mild",
    2: "Medium",
    3: "Hot"
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 rounded-full p-1" style={{ backgroundColor: isVeg ? '#48c774' : '#ff3860' }}>
          <div className="w-4 h-4 rounded-full border-2 border-white"></div>
        </div>
        <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
          Spicy: {Array(isSpicy).fill('🌶️').join('')}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600 italic mb-2">{localName}</p>
        <p className="text-gray-700 text-sm flex-grow">{description}</p>
        
        <div className="mt-3 flex justify-between items-center">
          <span className={cn(
            "text-xs font-medium px-2 py-1 rounded",
            isVeg ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          )}>
            {isVeg ? "Vegetarian" : "Non-vegetarian"}
          </span>
          <span className={cn(
            "text-xs px-2 py-1 rounded",
            isSpicy === 1 ? "bg-green-100 text-green-800" :
            isSpicy === 2 ? "bg-yellow-100 text-yellow-800" :
            "bg-red-100 text-red-800"
          )}>
            {spicyLevel[isSpicy]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
