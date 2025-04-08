
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AdPopupProps {
  onClose: () => void;
}

export function AdPopup({ onClose }: AdPopupProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Special Offer
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 rounded-full h-6 w-6 p-0"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <div className="p-0 pb-4">
          <div className="relative">
            <img
              src="/lovable-uploads/74f78d57-00b7-4dc5-a136-e8449bd62bb7.png"
              alt="MS-CIT Course Advertisement"
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="mt-4 text-center">
            <Button
              onClick={handleClose}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
            >
              Learn More
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
