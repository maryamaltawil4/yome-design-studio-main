import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Star, Zap, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import tshirtImg from "@/assets/product-tshirt.jpg";
import hoodieImg from "@/assets/product-hoodie.jpg";
import cupImg from "@/assets/product-cup.jpg";
import bagImg from "@/assets/product-bag.jpg";

const products = [
  {
    id: "tshirt",
    name: "Premium T-Shirts",
    description: "100% combed cotton, perfect for vibrant designs",
    price: "From $19.99",
    originalPrice: "$24.99",
    image: tshirtImg,
    rating: 4.8,
    reviews: 1247,
    tags: ["Bestseller", "New"],
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: "hoodie",
    name: "Cozy Hoodies",
    description: "Premium fleece with unmatched comfort",
    price: "From $39.99",
    originalPrice: "$49.99",
    image: hoodieImg,
    rating: 4.9,
    reviews: 892,
    tags: ["Trending", "Limited"],
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: "cup",
    name: "Ceramic Mugs",
    description: "Dishwasher-safe with vibrant print quality",
    price: "From $12.99",
    originalPrice: "$16.99",
    image: cupImg,
    rating: 4.7,
    reviews: 567,
    tags: ["Popular"],
    gradient: "from-green-500 to-teal-600",
  },
  {
    id: "bag",
    name: "Canvas Totes",
    description: "Eco-friendly & durable for everyday use",
    price: "From $14.99",
    originalPrice: "$19.99",
    image: bagImg,
    rating: 4.6,
    reviews: 423,
    tags: ["Eco", "New"],
    gradient: "from-pink-500 to-rose-600",
  },
];

const ProductShowcase = () => {
  const navigate = useNavigate();
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <section className="py-4 px-4 bg-gradient-to-b from-background to-slate-50/50 dark:to-slate-900/30">
      <div className="container mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          {/* <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white mb-6 shadow-lg animate-pulse-slow">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold text-lg">Premium Collection</span>
            <Sparkles className="h-5 w-5" />
          </div> */}
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Choose Your Canvas
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Select from our premium collection and transform your ideas into 
            <span className="font-semibold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text"> wearable art </span>
            with stunning quality
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group relative overflow-hidden border-0 bg-background/50 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 150}ms`,
                transform: hoveredProduct === product.id ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
              }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Product Badges */}
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                {product.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm border ${
                      tag === "Bestseller" 
                        ? "bg-yellow-500/20 text-yellow-700 border-yellow-500/30" 
                        : tag === "New"
                        ? "bg-blue-500/20 text-blue-700 border-blue-500/30"
                        : tag === "Trending"
                        ? "bg-pink-500/20 text-pink-700 border-pink-500/30"
                        : "bg-green-500/20 text-green-700 border-green-500/30"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Favorite Button */}
              <button className="absolute top-4 right-4 z-20 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border/50 hover:bg-red-50 hover:border-red-200 transition-all duration-300 group/heart">
                <Heart className="h-4 w-4 text-muted-foreground group-hover/heart:text-red-500 transition-colors duration-300" />
              </button>

              {/* Image Container */}
              <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quick View Button */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <Button className="bg-background/90 backdrop-blur-sm border border-border hover:bg-background text-foreground shadow-lg">
                    Quick View
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4 relative z-10">
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {product.rating}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews.toLocaleString()})
                  </span>
                </div>

                {/* Product Name & Description */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-md font-bold text-foreground">
                        {product.price}
                      </span>
                      {/* <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span> */}
                    </div>
                    {/* <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                      <Zap className="h-3 w-3" />
                      Limited Time Offer
                    </div> */}
                  </div>
                  
                  <Button
                    onClick={() => navigate(`/designer?product=${product.id}`)}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group/btn relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Customize
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </Button>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                <div className="absolute inset-[2px] rounded-lg bg-background" />
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-border hover:bg-foreground hover:text-background text-lg px-12 py-6 rounded-2xl transition-all duration-300 group"
            onClick={() => navigate("/products")}
          >
            <span className="flex items-center gap-3">
              View All Products
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;