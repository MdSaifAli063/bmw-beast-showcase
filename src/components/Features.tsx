import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Performance",
      description: "TwinPower Turbo engines deliver exceptional power and efficiency, providing the thrill you crave.",
      icon: "⚡"
    },
    {
      title: "Technology",
      description: "BMW iDrive and intelligent features keep you connected and in control on every journey.",
      icon: "🚗"
    },
    {
      title: "Luxury",
      description: "Premium materials and meticulous craftsmanship create an environment of pure sophistication.",
      icon: "💎"
    },
    {
      title: "Safety",
      description: "Advanced driver assistance systems and robust construction ensure peace of mind.",
      icon: "🛡️"
    }
  ];

  return (
    <section className="py-24 px-6 bg-bmw-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Engineering <span className="text-bmw-blue">Excellence</span>
          </h2>
          <p className="text-xl text-bmw-silver max-w-3xl mx-auto">
            Every BMW is crafted with precision, innovation, and an unwavering commitment to driving pleasure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="gradient-card border-border shadow-card hover-lift p-8 text-center">
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-bmw-silver leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;