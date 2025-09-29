import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Download, Wrench } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-bmw-dark relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-bmw-blue/20 rounded-full animate-rotate"></div>
      <div className="absolute bottom-32 left-20 w-20 h-20 border border-bmw-blue/10 rounded-full animate-float"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
          Ready to Experience <span className="text-bmw-blue animate-pulse-glow">BMW</span>?
        </h2>
        <p className="text-xl text-bmw-silver mb-12 max-w-2xl mx-auto animate-fade-in stagger-2">
          Take the next step towards owning the ultimate driving machine. 
          Schedule a test drive or speak with our BMW specialists today.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="gradient-card border-border shadow-card p-8 hover-lift group animate-fade-in stagger-3">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-bmw-blue/20 rounded-full flex items-center justify-center group-hover:bg-bmw-blue/30 transition-colors">
                <Calendar className="text-bmw-blue" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-bmw-blue transition-colors">
              Schedule Test Drive
            </h3>
            <p className="text-bmw-silver mb-6 group-hover:text-white transition-colors">
              Experience BMW performance firsthand. Book your personalized test drive experience.
            </p>
            <Button variant="hero" className="w-full transform hover:scale-105">
              Book Test Drive
            </Button>
          </Card>
          
          <Card className="gradient-card border-border shadow-card p-8 hover-lift group animate-fade-in stagger-4">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-bmw-blue/20 rounded-full flex items-center justify-center group-hover:bg-bmw-blue/30 transition-colors">
                <MapPin className="text-bmw-blue" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-bmw-blue transition-colors">
              Find a Dealer
            </h3>
            <p className="text-bmw-silver mb-6 group-hover:text-white transition-colors">
              Connect with BMW specialists at your nearest authorized dealer location.
            </p>
            <Button variant="luxury" className="w-full transform hover:scale-105">
              Locate Dealer
            </Button>
          </Card>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in stagger-4">
          <Button variant="premium" size="lg" className="px-8 transform hover:scale-110 flex items-center gap-2">
            <Wrench size={20} />
            Build Your BMW
          </Button>
          <Button variant="ghost" size="lg" className="px-8 text-bmw-silver hover:text-white transform hover:scale-110 flex items-center gap-2">
            <Download size={20} />
            Download Brochure
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;