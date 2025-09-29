import { Button } from "@/components/ui/button";
import heroImage from "@/assets/bmw-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="BMW luxury sedan showcasing German engineering excellence" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          The Ultimate
          <span className="block text-bmw-blue">Driving Machine</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-bmw-silver mb-12 max-w-2xl mx-auto leading-relaxed">
          Experience the perfect fusion of luxury, performance, and innovation. 
          BMW - where engineering excellence meets driving passion.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
            Explore Models
          </Button>
          <Button variant="luxury" size="lg" className="px-8 py-4 text-lg">
            Schedule Test Drive
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-bmw-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-bmw-blue rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;