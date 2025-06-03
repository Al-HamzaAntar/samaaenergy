
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Our Services", href: "#services" },
    { name: "Training", href: "#training" },
    { name: "Careers", href: "#careers" },
  ];

  const sectorItems = [
    "Trade Sector",
    "Consulting and Services Sector", 
    "Factory Installation Sector",
    "Training and Employment Sector"
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={scrollToTop}>
            <img
              src="/lovable-uploads/818e18cf-a403-4072-83d4-7840a3e6426d.png"
              alt="Sama Energy"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-blue-900 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
                  onClick={item.name === "Home" ? scrollToTop : undefined}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              
              {/* Sectors Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-blue-900 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group flex items-center gap-1">
                    Sectors
                    <ChevronDown className="h-4 w-4" />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-blue-200 shadow-lg">
                  {sectorItems.map((sector) => (
                    <DropdownMenuItem 
                      key={sector}
                      className="text-blue-900 hover:text-green-600 hover:bg-blue-50 cursor-pointer"
                    >
                      {sector}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-blue-900 hover:text-green-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-blue-200">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-blue-900 hover:text-green-600 block px-3 py-2 text-base font-medium transition-colors duration-300"
                onClick={() => {
                  setIsMenuOpen(false);
                  if (item.name === "Home") scrollToTop();
                }}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Sectors Menu */}
            <div className="px-3 py-2">
              <div className="text-blue-900 font-medium text-base mb-2">Sectors</div>
              {sectorItems.map((sector) => (
                <a
                  key={sector}
                  href="#"
                  className="text-blue-700 hover:text-green-600 block px-3 py-1 text-sm transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {sector}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
