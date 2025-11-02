import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import { OurDesigns } from "@/components/DesignGallery";
import AboutUsMinimal from "@/components/AboutUsMinimal";
import Testimonials from "@/components/finalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
            <div id="about">
        <AboutUsMinimal />
      </div>
      <div id="products">
        <ProductShowcase />
      </div>
      <div id="designs">
        <OurDesigns />
      </div>

            <Testimonials/>

    </div>
  );
};

export default Index;
