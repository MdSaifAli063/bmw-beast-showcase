import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-bmw-dark">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Experience <span className="text-bmw-blue">BMW</span>?
        </h2>
        <p className="text-xl text-bmw-silver mb-12 max-w-2xl mx-auto">
          Take the next step towards owning the ultimate driving machine. 
          Schedule a test drive or speak with our BMW specialists today.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="gradient-card border-border shadow-card p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Schedule Test Drive</h3>
            <p className="text-bmw-silver mb-6">
              Experience BMW performance firsthand. Book your personalized test drive experience.
            </p>
            <Button variant="hero" className="w-full">
              Book Test Drive
            </Button>
          </Card>
          
          <Card className="gradient-card border-border shadow-card p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Find a Dealer</h3>
            <p className="text-bmw-silver mb-6">
              Connect with BMW specialists at your nearest authorized dealer location.
            </p>
            <Button variant="luxury" className="w-full">
              Locate Dealer
            </Button>
          </Card>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button variant="premium" size="lg" className="px-8">
            Build Your BMW
          </Button>
          <Button variant="ghost" size="lg" className="px-8 text-bmw-silver hover:text-white">
            Download Brochure
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;