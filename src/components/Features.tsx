import { Card } from "@/components/ui/card";
import { Zap, Smartphone, Gem, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Performance",
      description: "TwinPower Turbo engines deliver exceptional power and efficiency, providing the thrill you crave.",
      icon: Zap,
      color: "text-yellow-400"
    },
    {
      title: "Technology", 
      description: "BMW iDrive and intelligent features keep you connected and in control on every journey.",
      icon: Smartphone,
      color: "text-blue-400"
    },
    {
      title: "Luxury",
      description: "Premium materials and meticulous craftsmanship create an environment of pure sophistication.",
      icon: Gem,
      color: "text-purple-400"
    },
    {
      title: "Safety",
      description: "Advanced driver assistance systems and robust construction ensure peace of mind.",
      icon: Shield,
      color: "text-green-400"
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-bmw-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Engineering <span className="text-bmw-blue animate-pulse-glow">Excellence</span>
          </h2>
          <p className="text-xl text-bmw-silver max-w-3xl mx-auto">
            Every BMW is crafted with precision, innovation, and an unwavering commitment to driving pleasure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className={`gradient-card border-border shadow-card hover-lift p-8 text-center group animate-fade-in stagger-${index + 1}`}
              >
                <div className={`mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`w-16 h-16 rounded-full bg-bmw-charcoal flex items-center justify-center ${feature.color} animate-pulse-glow`}>
                    <IconComponent size={32} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-bmw-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-bmw-silver leading-relaxed group-hover:text-white transition-colors">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;