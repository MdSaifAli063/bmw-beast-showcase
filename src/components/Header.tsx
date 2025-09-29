import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bmw-dark/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">
            <span className="text-bmw-blue">BMW</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#models" className="text-bmw-silver hover:text-white transition-colors">
            Models
          </a>
          <a href="#features" className="text-bmw-silver hover:text-white transition-colors">
            Features
          </a>
          <a href="#contact" className="text-bmw-silver hover:text-white transition-colors">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="luxury" size="sm" className="hidden sm:flex">
            Test Drive
          </Button>
          <Button variant="hero" size="sm">
            Build & Price
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;