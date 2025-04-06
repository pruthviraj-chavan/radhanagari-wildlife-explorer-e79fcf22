
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "mr">("en");

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "mr" : "en");
  };

  const navLinks = [
    { name: language === "en" ? "Home" : "मुख्यपृष्ठ", href: "/" },
    { name: language === "en" ? "Hotels" : "हॉटेल्स", href: "/hotels-homestays" },
    { name: language === "en" ? "Food" : "भोजन", href: "/food-guide" },
    { name: language === "en" ? "Wildlife" : "वन्यजीव", href: "/wildlife-safari" },
    { name: language === "en" ? "Blog" : "ब्लॉग", href: "/blog" },
  ];

  return (
    <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full forest-gradient flex items-center justify-center">
            <span className="text-white font-bold">RWS</span>
          </div>
          <span className="font-semibold text-lg hidden md:block">
            {language === "en" ? "Radhanagari Wildlife Sanctuary" : "राधानगरी वन्यजीव अभयारण्य"}
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
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="rounded-full"
          >
            <Globe className="h-5 w-5" />
            <span className="ml-1">{language === "en" ? "मराठी" : "EN"}</span>
          </Button>
        </div>

        {/* Mobile navigation toggle */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="mr-2"
          >
            <Globe className="h-5 w-5" />
          </Button>
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
          "fixed inset-0 bg-white z-20 md:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full forest-gradient flex items-center justify-center">
                <span className="text-white font-bold">RWS</span>
              </div>
              <span className="font-semibold">
                {language === "en" ? "Radhanagari" : "राधानगरी"}
              </span>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex flex-col p-4 space-y-4">
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
