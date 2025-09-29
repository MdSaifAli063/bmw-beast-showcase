import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Models from "@/components/Models";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Models />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
