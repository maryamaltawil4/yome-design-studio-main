import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Palette } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-border" style={{ backgroundColor: 'hsl(42.86deg 18.92% 92.75%)' }} >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src="/src/assets/ue-logo.png" alt="UE Logo" className="w-14 h-14 rounded-lg" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium">
              Products
            </a>
            <a href="#designs" className="text-foreground hover:text-primary transition-colors font-medium">
              Designs
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <Button 
              onClick={() => navigate("/designer")}
              className="bg-gradient-primary text-primary-foreground hover:opacity-90"
            >
              Start Designing
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <a 
              href="#products" 
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Products
            </a>
            <a 
              href="#designs" 
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Designs
            </a>
            <a 
              href="#features" 
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <Button 
              onClick={() => {
                navigate("/designer");
                setIsOpen(false);
              }}
              className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90"
            >
              Start Designing
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
