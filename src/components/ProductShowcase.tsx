import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Star, Zap, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import tshirtImg from "@/assets/product-tshirt.jpg";
import hoodieImg from "@/assets/product-hoodie.jpg";
import cupImg from "@/assets/product-cup.jpg";
import bagImg from "@/assets/product-bag.jpg";

const products = [
  {
    id: "tshirt",
    nameKey: "tshirt",
    descriptionKey: "tshirt",
    price: "From $19.99",
    originalPrice: "$24.99",
    image: tshirtImg,
    rating: 4.8,
    reviews: 1247,
    tags: ["Bestseller", "New"],
    gradient: "from-purple-600 to-violet-600",
  },
  {
    id: "hoodie",
    nameKey: "hoodie",
    descriptionKey: "hoodie",
    price: "From $39.99",
    originalPrice: "$49.99",
    image: hoodieImg,
    rating: 4.9,
    reviews: 892,
    tags: ["Trending", "Limited"],
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    id: "cup",
    nameKey: "cup",
    descriptionKey: "cup",
    price: "From $12.99",
    originalPrice: "$16.99",
    image: cupImg,
    rating: 4.7,
    reviews: 567,
    tags: ["Popular"],
    gradient: "from-purple-600 to-cyan-600",
  },
  {
    id: "bag",
    nameKey: "bag",
    descriptionKey: "bag",
    price: "From $14.99",
    originalPrice: "$19.99",
    image: bagImg,
    rating: 4.6,
    reviews: 423,
    tags: ["Eco", "New"],
    gradient: "from-purple-600 to-pink-600",
  },
];

const ProductShowcase = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <section className="py-4 px-4 bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-conic-gradient(hsl(var(--primary)) 0deg 1deg, transparent 1deg 30deg),
                           repeating-conic-gradient(hsl(var(--primary)) 0deg 1deg, transparent 1deg 30deg)`,
          backgroundSize: '100px 100px',
          backgroundPosition: '0 0, 50px 50px'
        }} />
      </div>

      {/* Floating creative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-12 w-5 h-5 bg-primary/10 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-36 right-16 w-4 h-4 border border-primary/20 rotate-45 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute top-1/3 right-8 w-3 h-3 bg-primary/10 rounded animate-spin" style={{ animationDelay: '2s', animationDuration: '6s' }} />
        <div className="absolute bottom-24 left-1/4 w-6 h-1 bg-primary/10 rounded animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-16 right-1/3 w-2 h-2 bg-primary/10 rounded-full animate-ping" style={{ animationDelay: '1.5s', animationDuration: '3s' }} />
      </div>

      {/* Primary Animated Background Canvas */}
      <canvas
        className="absolute inset-0 w-full h-full opacity-20"
      />

      {/* Enhanced Animated Gradient Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-600/15 to-pink-600/15 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-40 right-10 w-64 h-64 bg-gradient-to-r from-purple-600/15 to-indigo-600/15 rounded-full blur-3xl animate-float-slow" />

      {/* New Floating Gradient Shapes */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl animate-rotate-slow" />
      <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-purple-600/15 to-indigo-600/15 rounded-2xl blur-xl animate-rotate" />
      <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-to-r from-purple-600/15 to-violet-600/15 rounded-full blur-xl animate-pulse-slow" />

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-float-random"
            style={{
              background: `hsl(${Math.random() * 360}, 70%, 60%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* New Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      {/* New Floating Icons */}
      <div className="absolute inset-0">
        {[Sparkles, Star].map((Icon, index) => (
          <div
            key={index}
            className="absolute animate-float-icon"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${index * 2}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            <Icon className="w-8 h-8 opacity-10 text-purple-600" />
          </div>
        ))}
      </div>

      {/* New Animated Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-600/30 to-transparent animate-line-sweep"
            style={{
              top: `${(i + 1) * 12}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          {/* <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white mb-6 shadow-lg animate-pulse-slow">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold text-lg">Premium Collection</span>
            <Sparkles className="h-5 w-5" />
          </div> */}
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {t.products.title}
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.products.subtitle.split('wearable art')[0]}
            <span className="font-semibold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text animate-gradient-x"> wearable art </span>
            {t.products.subtitle.split('wearable art')[1]}
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
                  alt={(t.products[product.nameKey as keyof typeof t.products] as any).name}
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
                    {(t.products[product.nameKey as keyof typeof t.products] as any).name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {(t.products[product.descriptionKey as keyof typeof t.products] as any).description}
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
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 group/btn relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {t.products.customize}
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
              {t.products.viewAll}
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;