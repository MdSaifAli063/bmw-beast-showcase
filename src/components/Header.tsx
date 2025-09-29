import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bmw-dark/95 backdrop-blur-md border-b border-border animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 animate-slide-in-left">
          <div className="bmw-logo animate-pulse-glow"></div>
          <h1 className="text-2xl font-bold text-white">
            <span className="text-bmw-blue">BMW</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 animate-fade-in">
          <a href="#models" className="text-bmw-silver hover:text-bmw-blue transition-colors relative group">
            Models
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bmw-blue transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#features" className="text-bmw-silver hover:text-bmw-blue transition-colors relative group">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bmw-blue transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-bmw-silver hover:text-bmw-blue transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bmw-blue transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
        
        <div className="flex items-center space-x-4 animate-slide-in-right">
          <Button variant="luxury" size="sm" className="hidden sm:flex">
            Test Drive
          </Button>
          <Button variant="hero" size="sm">
            Build & Price
          </Button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-bmw-silver hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-bmw-dark/95 backdrop-blur-md border-b border-border md:hidden animate-fade-in-up">
            <nav className="flex flex-col space-y-4 p-6">
              <a href="#models" className="text-bmw-silver hover:text-bmw-blue transition-colors">
                Models
              </a>
              <a href="#features" className="text-bmw-silver hover:text-bmw-blue transition-colors">
                Features
              </a>
              <a href="#contact" className="text-bmw-silver hover:text-bmw-blue transition-colors">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;