import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import { CustomerDesigns, OurDesigns } from "@/components/DesignGallery";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="products">
        <ProductShowcase />
      </div>
      <div id="designs">
        <CustomerDesigns />
        <OurDesigns />
      </div>
      <div id="features">
        <Features />
      </div>
    </div>
  );
};

export default Index;
