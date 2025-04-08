
import { cn } from "@/lib/utils";
import { useState } from "react";

interface FounderCardProps {
  name: string;
  role: string;
  image: string;
  description: string;
  linkedin?: string;
  className?: string;
}

export const FounderCard = ({
  name,
  role,
  image,
  description,
  linkedin,
  className
}: FounderCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div 
      className={cn("bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow", className)}
      itemScope 
      itemType="http://schema.org/Person"
    >
      <div className="p-3">
        <div className="relative aspect-square overflow-hidden rounded-full mb-3 mx-auto w-24 h-24 bg-gray-100">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-pulse w-full h-full bg-gray-200"></div>
            </div>
          )}
          {!imageError ? (
            <img
              src={image}
              alt={`${name} - ${role} at Radhanagari Wildlife Sanctuary`}
              className={cn("w-full h-full object-cover transition-opacity duration-300", 
                imageLoaded ? "opacity-100" : "opacity-0"
              )}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              itemProp="image"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-gray-800" itemProp="name">{name}</h3>
          <p className="text-sm text-primary mb-2" itemProp="jobTitle">{role}</p>
          <p className="text-xs text-gray-600 line-clamp-3" itemProp="description">{description}</p>
          {linkedin && (
            <div className="mt-2">
              <a 
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:underline"
                itemProp="sameAs"
              >
                LinkedIn Profile
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
