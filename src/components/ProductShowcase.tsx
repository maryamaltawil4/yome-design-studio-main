import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import tshirtImg from "@/assets/product-tshirt.jpg";
import hoodieImg from "@/assets/product-hoodie.jpg";
import cupImg from "@/assets/product-cup.jpg";
import bagImg from "@/assets/product-bag.jpg";

const products = [
  {
    id: "tshirt",
    name: "T-Shirts",
    description: "Premium cotton, perfect for any design",
    price: "From $19.99",
    image: tshirtImg,
  },
  {
    id: "hoodie",
    name: "Hoodies",
    description: "Cozy fleece, endless possibilities",
    price: "From $39.99",
    image: hoodieImg,
  },
  {
    id: "cup",
    name: "Coffee Cups",
    description: "Ceramic mugs for your morning brew",
    price: "From $12.99",
    image: cupImg,
  },
  {
    id: "bag",
    name: "Tote Bags",
    description: "Durable canvas for everyday use",
    price: "From $14.99",
    image: bagImg,
  },
];

const ProductShowcase = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary rounded-full text-primary-foreground mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="font-medium">Our Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Canvas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select from our premium collection and bring your designs to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-card hover:shadow-elevated transition-all duration-300 bg-gradient-card animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-primary">
                    {product.price}
                  </span>
                  <Button
                    onClick={() => navigate(`/designer?product=${product.id}`)}
                    className="bg-gradient-primary text-primary-foreground hover:opacity-90"
                  >
                    Customize
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

export default ProductShowcase;
