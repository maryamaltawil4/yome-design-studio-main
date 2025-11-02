import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Eye, Sparkles, Zap, Crown, Users, TrendingUp, Star } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { t } = useLanguage();

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
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 relative overflow-hidden">
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
        {[Crown, Sparkles, Zap, Heart, Star].map((Icon, index) => (
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
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {t.designs.title}
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.designs.subtitle.split('professional designers')[0]}
            <span className="font-semibold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text animate-gradient-x"> professional designers </span>
            {t.designs.subtitle.split('professional designers')[1]}
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
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 group/btn relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {t.designs.useTemplate}
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
              {t.designs.viewAllTemplates}
              <Crown className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { OurDesigns };