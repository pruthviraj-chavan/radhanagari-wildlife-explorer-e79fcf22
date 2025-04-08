
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryItemProps {
  title: string;
  image: string;
}

export const GalleryItem = ({ title, image }: GalleryItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div 
        className="rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow"
        onClick={() => setOpen(true)}
      >
        <div className="aspect-square">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-2 bg-white">
          <p className="text-sm font-medium text-center truncate">{title}</p>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-1 sm:p-2">
          <div className="w-full max-h-[80vh]">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto object-contain max-h-[80vh]"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
