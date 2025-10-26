import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Eye } from "lucide-react";

interface Design {
  id: number;
  title: string;
  creator: string;
  likes: number;
  views: number;
  imageUrl: string;
}

const CustomerDesigns = () => {
  const customerDesigns: Design[] = [
    {
      id: 1,
      title: "Sunset Vibes",
      creator: "Sarah M.",
      likes: 234,
      views: 1203,
      imageUrl: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Urban Style",
      creator: "Alex K.",
      likes: 189,
      views: 967,
      imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Nature Love",
      creator: "Mike D.",
      likes: 312,
      views: 1567,
      imageUrl: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Abstract Art",
      creator: "Emma L.",
      likes: 445,
      views: 2134,
      imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Customer Designs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get inspired by amazing designs from our creative community
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {customerDesigns.map((design, index) => (
            <Card
              key={design.id}
              className="group overflow-hidden border-0 shadow-card hover:shadow-elevated transition-all duration-300 bg-card animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={design.imageUrl}
                  alt={design.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-semibold">{design.title}</p>
                    <p className="text-sm text-white/80">by {design.creator}</p>
                  </div>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between">
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    {design.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {design.views}
                  </span>
                </div>
                <Button size="sm" variant="ghost" className="text-primary hover:text-primary">
                  Use Template
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const OurDesigns = () => {
  const ourDesigns: Design[] = [
    {
      id: 1,
      title: "Minimalist Pro",
      creator: "Yome Team",
      likes: 567,
      views: 2890,
      imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Bold Graphics",
      creator: "Yome Team",
      likes: 423,
      views: 1923,
      imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Retro Wave",
      creator: "Yome Team",
      likes: 689,
      views: 3421,
      imageUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Modern Zen",
      creator: "Yome Team",
      likes: 512,
      views: 2567,
      imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Designer Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium templates crafted by professional designers
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ourDesigns.map((design, index) => (
            <Card
              key={design.id}
              className="group overflow-hidden border-0 shadow-card hover:shadow-elevated transition-all duration-300 bg-card animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={design.imageUrl}
                  alt={design.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-semibold">{design.title}</p>
                    <p className="text-sm text-white/80">{design.creator}</p>
                  </div>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between">
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    {design.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {design.views}
                  </span>
                </div>
                <Button size="sm" variant="ghost" className="text-primary hover:text-primary">
                  Use Template
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { CustomerDesigns, OurDesigns };
