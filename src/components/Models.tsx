import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Battery, Settings } from "lucide-react";
import bmw3Series from "@/assets/bmw-3-series.jpg";
import bmwX5 from "@/assets/bmw-x5.jpg";
import bmwI4 from "@/assets/bmw-i4.jpg";

const Models = () => {
  const models = [
    {
      name: "BMW 3 Series",
      description: "The ultimate sports sedan that defines driving pleasure with perfect balance of performance and luxury.",
      startingPrice: "$35,300",
      highlights: ["TwinPower Turbo", "xDrive AWD", "BMW Live Cockpit"],
      image: bmw3Series,
      icon: Zap
    },
    {
      name: "BMW X5",
      description: "Premium SAV combining commanding presence with dynamic capability and unmatched versatility.",
      startingPrice: "$59,400", 
      highlights: ["M Performance", "Panoramic Roof", "Harman Kardon"],
      image: bmwX5,
      icon: Settings
    },
    {
      name: "BMW i4",
      description: "Electric gran coupe delivering zero emissions with the pure driving experience you expect.",
      startingPrice: "$52,200",
      highlights: ["335 Mile Range", "Fast Charging", "BMW Curved Display"],
      image: bmwI4,
      icon: Battery
    }
  ];

  return (
    <section id="models" className="py-24 px-6 gradient-hero">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Our <span className="text-bmw-blue animate-pulse-glow">Models</span>
          </h2>
          <p className="text-xl text-bmw-silver max-w-3xl mx-auto">
            From sporty sedans to versatile SAVs and innovative electric vehicles, find your perfect BMW.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {models.map((model, index) => {
            const IconComponent = model.icon;
            return (
              <Card 
                key={index} 
                className={`gradient-card border-border shadow-card hover-lift overflow-hidden group animate-fade-in stagger-${index + 1}`}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={model.image} 
                    alt={`${model.name} luxury vehicle showcasing premium BMW design`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-bmw-blue/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <IconComponent size={20} className="text-white" />
                  </div>
                </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-bmw-blue transition-colors">
                  {model.name}
                </h3>
                <p className="text-bmw-silver mb-6 leading-relaxed group-hover:text-white transition-colors">
                  {model.description}
                </p>
                
                <div className="mb-6">
                  <p className="text-sm text-bmw-silver mb-2">Starting at</p>
                  <p className="text-3xl font-bold text-bmw-blue animate-pulse-glow">{model.startingPrice}</p>
                </div>
                
                <div className="mb-8">
                  <p className="text-sm text-bmw-silver mb-3">Key Features:</p>
                  <ul className="space-y-1">
                    {model.highlights.map((highlight, i) => (
                      <li key={i} className="text-white text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-bmw-blue rounded-full mr-3"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col gap-3">
                  <Button variant="hero" className="w-full transform hover:scale-105">
                    Build & Price
                  </Button>
                  <Button variant="luxury" className="w-full transform hover:scale-105">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Models;