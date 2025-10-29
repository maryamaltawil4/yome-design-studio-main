import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Eye, Sparkles, Zap, Crown, Users, TrendingUp, Star } from "lucide-react";
import { useState } from "react";

interface Design {
  id: number;
  title: string;
  creator: string;
  likes: number;
  views: number;
  imageUrl: string;
  tags: string[];
  isPro?: boolean;
  isFeatured?: boolean;
}

const OurDesigns = () => {
  const [likedDesigns, setLikedDesigns] = useState<number[]>([]);

  const ourDesigns: Design[] = [
    {
      id: 1,
      title: "Minimalist Pro",
      creator: "Yome Team",
      likes: 567,
      views: 2890,
      imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
      tags: ["Minimal", "Professional"],
      isPro: true,
      isFeatured: true
    },
    {
      id: 2,
      title: "Bold Graphics",
      creator: "Yome Team",
      likes: 423,
      views: 1923,
      imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
      tags: ["Bold", "Modern"],
      isPro: true
    },
    {
      id: 3,
      title: "Retro Wave",
      creator: "Yome Team",
      likes: 689,
      views: 3421,
      imageUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=400&fit=crop",
      tags: ["Retro", "Vintage"],
      isPro: true,
      isFeatured: true
    },
    {
      id: 4,
      title: "Modern Zen",
      creator: "Yome Team",
      likes: 512,
      views: 2567,
      imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      tags: ["Zen", "Calm"],
      isPro: true
    },
  ];

  const toggleLike = (designId: number) => {
    setLikedDesigns(prev =>
      prev.includes(designId)
        ? prev.filter(id => id !== designId)
        : [...prev, designId]
    );
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-50/50 to-background dark:from-slate-900/30">
      <div className="container mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white mb-6 shadow-lg animate-pulse-slow">
            <Crown className="h-5 w-5" />
            <span className="font-semibold text-lg">Professional Collection</span>
            <Zap className="h-5 w-5" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Designer Collection
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Premium templates crafted by 
            <span className="font-semibold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text"> professional designers </span>
            with unmatched quality
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ourDesigns.map((design, index) => (
            <Card
              key={design.id}
              className="group relative overflow-hidden border-0 bg-background/50 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Pro Badge */}
              {design.isPro && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full backdrop-blur-sm border border-purple-500/30 flex items-center gap-1">
                    <Crown className="h-3 w-3" />
                    PRO
                  </span>
                </div>
              )}

              {/* Featured Badge */}
              {design.isFeatured && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full backdrop-blur-sm border border-yellow-500/30 flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Featured
                  </span>
                </div>
              )}

              {/* Like Button */}
              <button 
                onClick={() => toggleLike(design.id)}
                className={`absolute top-16 right-4 z-20 p-2 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                  likedDesigns.includes(design.id)
                    ? "bg-red-500/20 border-red-500/50 text-red-500"
                    : "bg-background/80 border-border/50 text-muted-foreground hover:bg-red-50 hover:border-red-200"
                }`}
              >
                <Heart 
                  className={`h-4 w-4 transition-all duration-300 ${
                    likedDesigns.includes(design.id) ? "fill-current scale-110" : ""
                  }`} 
                />
              </button>

              {/* Image Container */}
              <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
                <img
                  src={design.imageUrl}
                  alt={design.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover Content */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-white space-y-2">
                    <h3 className="font-bold text-lg">{design.title}</h3>
                    <p className="text-white/80 text-sm">{design.creator}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {design.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white border border-white/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Design Info */}
              <div className="p-5 space-y-4">
                {/* Stats */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <span className={`flex items-center gap-1 transition-colors duration-300 ${
                      likedDesigns.includes(design.id) ? "text-red-500" : "text-muted-foreground"
                    }`}>
                      <Heart className={`h-4 w-4 ${
                        likedDesigns.includes(design.id) ? "fill-current" : ""
                      }`} />
                      {design.likes + (likedDesigns.includes(design.id) ? 1 : 0)}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Eye className="h-4 w-4" />
                      {design.views}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-xs text-purple-600 font-medium">
                    <Zap className="h-3 w-3" />
                    Premium
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group/btn relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Use Template
                    <Crown className="h-4 w-4 transition-transform duration-300 group-hover/btn:scale-110" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </Button>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
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
            className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white text-lg px-12 py-6 rounded-2xl transition-all duration-300 group"
          >
            <span className="flex items-center gap-3">
              View All Templates
              <Crown className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { OurDesigns };