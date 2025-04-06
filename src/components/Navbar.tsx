
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Hotels", href: "/hotels-homestays" },
    { name: "Food", href: "/food-guide" },
    { name: "Wildlife", href: "/wildlife-safari" },
  ];

  return (
    <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur-md shadow-sm border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full forest-gradient flex items-center justify-center">
            <span className="text-white font-bold">RWS</span>
          </div>
          <span className="font-semibold text-lg hidden sm:inline">
            Radhanagari Wildlife Sanctuary
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile navigation toggle */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile navigation menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b bg-white">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full forest-gradient flex items-center justify-center">
                <span className="text-white font-bold">RWS</span>
              </div>
              <span className="font-semibold">
                Radhanagari Wildlife Sanctuary
              </span>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex flex-col p-4 space-y-4 bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-xl py-2 border-b border-gray-100"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
