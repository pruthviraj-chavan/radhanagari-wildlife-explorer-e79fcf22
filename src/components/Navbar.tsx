import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Food", href: "/food-guide" },
    { name: "Wildlife", href: "/wildlife-safari" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const visitLinks = [
    { name: "Hotels & Homestays", href: "/hotels-homestays" },
    { name: "Barber Shops", href: "/barber-shops" },
    { name: "Computer Training", href: "/computer-training" },
    { name: "Lodges", href: "/lodges" },
    { name: "Supermarkets", href: "/supermarkets" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and company name */}
        <Link to="/" className="flex items-center gap-2">
          {/* Mobile view: Show only the company name */}
          <span
            className={cn(
              "font-semibold text-lg hidden md:block",
              isMobile && "block"
            )}
          >
            Radhanagari Wildlife Sanctuary
          </span>
          {/* Desktop view: Show logo and company name */}
          <div
            className={cn(
              "w-10 h-10 rounded-full forest-gradient flex items-center justify-center hidden md:block",
              !isMobile && "block"
            )}
          >
            <span className="text-white font-bold">RWS</span>
          </div>
          <span
            className={cn(
              "font-semibold text-lg hidden md:block",
              !isMobile && "hidden"
            )}
          >
            Radhanagari Wildlife Sanctuary
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Home
          </Link>

          {/* Visit Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100">Visit</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {visitLinks.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={link.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {link.name}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Other nav links */}
          {navLinks.slice(1).map((link) => (
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
        <div className="md:hidden">
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
          "fixed inset-0 z-50 md:hidden transform transition-transform duration-300 ease-in-out bg-white",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Mobile header */}
          <div className="flex justify-between items-center p-4 border-b bg-white">
            {/* Mobile view: Show only the company name */}
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={toggleMenu}
            >
              <span className="font-semibold text-lg">Radhanagari Wildlife </span>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu items */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              {/* Regular links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block py-3 text-lg border-b border-gray-100"
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              ))}

              {/* Visit section with nested links */}
              <div className="py-3 border-b border-gray-100">
                <div className="text-lg font-medium mb-2">Visit</div>
                <div className="pl-4 space-y-2">
                  {visitLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block py-2 text-gray-700"
                      onClick={toggleMenu}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
