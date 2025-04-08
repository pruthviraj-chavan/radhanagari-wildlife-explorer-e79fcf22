
import { cn } from "@/lib/utils";
import { useState } from "react";

interface VideoCardProps {
  title: string;
  embedUrl: string;
  description: string;
  keywords?: string[];
  className?: string;
}

export const VideoCard = ({ title, embedUrl, description, keywords = [], className }: VideoCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div 
      className={cn("bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow", className)}
      itemScope 
      itemType="http://schema.org/VideoObject"
    >
      <div className="aspect-video relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}
        <iframe
          width="100%"
          height="100%"
          src={embedUrl}
          title={title}
          itemProp="embedUrl"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          onLoad={() => setIsLoading(false)}
          loading="lazy"
        ></iframe>
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-1" itemProp="name">{title}</h3>
        <p className="text-gray-600 text-sm" itemProp="description">{description}</p>
        {keywords.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {keywords.map((keyword, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {keyword}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
