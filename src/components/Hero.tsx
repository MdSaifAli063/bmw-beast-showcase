import { Button } from "@/components/ui/button";
import { ChevronDown, Zap, Shield, Star } from "lucide-react";
import heroImage from "@/assets/bmw-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-bmw-blue rounded-full animate-float opacity-60"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-bmw-blue rounded-full animate-bounce-slow opacity-40"></div>
        <div className="absolute bottom-40 left-32 w-1.5 h-1.5 bg-bmw-blue rounded-full floating-element opacity-50"></div>
      </div>
      {/* Background Image */}
      <div className="absolute inset-0 z-1">
        <img 
          src={heroImage} 
          alt="BMW luxury sedan showcasing German engineering excellence" 
          className="w-full h-full object-cover scale-105 animate-scale-in"
        />
        <div className="absolute inset-0 gradient-hero opacity-70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Floating Icons */}
        <div className="absolute -top-20 -left-20 text-bmw-blue/30 animate-float">
          <Zap size={40} />
        </div>
        <div className="absolute -top-16 -right-24 text-bmw-blue/20 floating-element">
          <Shield size={32} />
        </div>
        <div className="absolute -bottom-16 left-16 text-bmw-blue/25 animate-bounce-slow">
          <Star size={36} />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight animate-fade-in-up">
          The Ultimate
          <span className="block text-bmw-blue animate-pulse-glow">Driving Machine</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-bmw-silver mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in stagger-2">
          Experience the perfect fusion of luxury, performance, and innovation. 
          BMW - where engineering excellence meets driving passion.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in stagger-3">
          <Button variant="hero" size="lg" className="px-8 py-4 text-lg transform hover:scale-110">
            Explore Models
          </Button>
          <Button variant="luxury" size="lg" className="px-8 py-4 text-lg transform hover:scale-110">
            Schedule Test Drive
          </Button>
        </div>
      </div>
      
      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-bmw-blue rounded-full flex justify-center animate-pulse-glow">
          <ChevronDown className="mt-2 text-bmw-blue animate-bounce" size={16} />
        </div>
      </div>
    </section>
  );
};

export default Hero;