import { Card } from "@/components/ui/card";
import { 
  Smartphone, 
  Palette, 
  Eye, 
  Upload, 
  Layers, 
  Eraser, 
  Type, 
  Share2 
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Design seamlessly on any device with pinch-to-zoom and swipe controls",
  },
  {
    icon: Palette,
    title: "Clipart Library",
    description: "High-quality vector graphics that can be resized and recolored effortlessly",
  },
  {
    icon: Eye,
    title: "2D & 3D Preview",
    description: "Visualize designs from multiple angles with realistic product previews",
  },
  {
    icon: Upload,
    title: "Image Upload & Edit",
    description: "Add images from any source and edit with built-in tools",
  },
  {
    icon: Layers,
    title: "Templates & Ideas",
    description: "Pre-designed layouts to inspire and accelerate your creativity",
  },
  {
    icon: Eraser,
    title: "Background Removal",
    description: "Automatic background removal for clean, professional designs",
  },
  {
    icon: Type,
    title: "Text Decoration",
    description: "Customize fonts with colors, outlines, shadows, and curved effects",
  },
  {
    icon: Share2,
    title: "Save & Share",
    description: "Save designs, reuse them, and share via social media or direct links",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Design Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create stunning custom designs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 border-0 shadow-card hover:shadow-elevated transition-all duration-300 bg-card group animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
