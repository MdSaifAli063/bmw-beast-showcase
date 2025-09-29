import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Models = () => {
  const models = [
    {
      name: "BMW 3 Series",
      description: "The ultimate sports sedan that defines driving pleasure with perfect balance of performance and luxury.",
      startingPrice: "$35,300",
      highlights: ["TwinPower Turbo", "xDrive AWD", "BMW Live Cockpit"]
    },
    {
      name: "BMW X5",
      description: "Premium SAV combining commanding presence with dynamic capability and unmatched versatility.",
      startingPrice: "$59,400", 
      highlights: ["M Performance", "Panoramic Roof", "Harman Kardon"]
    },
    {
      name: "BMW i4",
      description: "Electric gran coupe delivering zero emissions with the pure driving experience you expect.",
      startingPrice: "$52,200",
      highlights: ["335 Mile Range", "Fast Charging", "BMW Curved Display"]
    }
  ];

  return (
    <section className="py-24 px-6 gradient-hero">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Our <span className="text-bmw-blue">Models</span>
          </h2>
          <p className="text-xl text-bmw-silver max-w-3xl mx-auto">
            From sporty sedans to versatile SAVs and innovative electric vehicles, find your perfect BMW.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <Card key={index} className="gradient-card border-border shadow-card hover-lift overflow-hidden">
              <div className="aspect-video bg-bmw-charcoal flex items-center justify-center">
                <span className="text-bmw-silver text-sm">Model Image</span>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{model.name}</h3>
                <p className="text-bmw-silver mb-6 leading-relaxed">{model.description}</p>
                
                <div className="mb-6">
                  <p className="text-sm text-bmw-silver mb-2">Starting at</p>
                  <p className="text-3xl font-bold text-bmw-blue">{model.startingPrice}</p>
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
                  <Button variant="hero" className="w-full">
                    Build & Price
                  </Button>
                  <Button variant="luxury" className="w-full">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;