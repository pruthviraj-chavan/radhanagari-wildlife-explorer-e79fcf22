
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface GalleryItemProps {
  title: string;
  image: string;
  location?: string;
  alt?: string;
  className?: string;
}

export const GalleryItem = ({ 
  title, 
  image, 
  location, 
  alt,
  className 
}: GalleryItemProps) => {
  const [open, setOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const imageAlt = alt || `${title} at Radhanagari Wildlife Sanctuary`;

  return (
    <>
      <div 
        className={cn(
          "rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow",
          className
        )}
        onClick={() => setOpen(true)}
        itemScope 
        itemType="http://schema.org/ImageObject"
      >
        <div className="aspect-square relative bg-gray-100">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-pulse w-full h-full bg-gray-200"></div>
            </div>
          )}
          <img 
            src={image} 
            alt={imageAlt} 
            className={cn(
              "w-full h-full object-cover transition-opacity duration-300",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            loading="lazy"
            itemProp="contentUrl"
          />
        </div>
        <div className="p-2 bg-white">
          <p className="text-sm font-medium text-center truncate" itemProp="name">{title}</p>
          {location && (
            <p className="text-xs text-gray-500 text-center truncate mt-1" itemProp="contentLocation">
              {location}
            </p>
          )}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-1 sm:p-2">
          <div className="w-full max-h-[80vh]">
            <img 
              src={image} 
              alt={imageAlt} 
              className="w-full h-auto object-contain max-h-[80vh]"
            />
            <div className="p-2 bg-white">
              <h3 className="text-lg font-semibold">{title}</h3>
              {location && <p className="text-sm text-gray-600">{location}</p>}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
