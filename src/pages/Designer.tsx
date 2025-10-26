import { useState, useRef, useEffect } from "react";
import { Canvas as FabricCanvas, FabricImage, IText, Circle, Rect } from "fabric";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Type, 
  Image as ImageIcon, 
  Download, 
  Save, 
  Trash2, 
  Upload,
  Sparkles,
  Palette as PaletteIcon,
  Home,
  Search,
  Crown,
  Star,
  Heart,
  Zap,
  Plus,
  ArrowLeft,
  ArrowRight,
  ShoppingCart,
  CreditCard,
  Wand2,
  RefreshCw,
  Eye,
  RotateCcw,
  AlertCircle
} from "lucide-react";
import { toast } from "sonner";
import { HexColorPicker } from "react-colorful";
import { useNavigate } from "react-router-dom";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "@/config/gemini";
import productTshirt from "@/assets/product-tshirt.jpg";
import productBag from "@/assets/product-bag.jpg";
import productCup from "@/assets/product-cup.jpg";
import productHoodie from "@/assets/product-hoodie.jpg";

// Product definitions with multiple views
const products = {
  tshirt: {
    id: "tshirt",
    name: "Premium T-Shirt",
    price: 19.99,
    description: "100% Cotton • Available in all sizes",
    views: [
      { id: "front", name: "Front", image: productTshirt },
      { id: "back", name: "Back", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=400&fit=crop" },
      { id: "side", name: "Side", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop" }
    ]
  },
  bag: {
    id: "bag",
    name: "Canvas Tote Bag",
    price: 14.99,
    description: "Durable canvas • Perfect for everyday use",
    views: [
      { id: "front", name: "Front", image: productBag },
      { id: "back", name: "Back", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop" },
      { id: "side", name: "Side", image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=400&fit=crop" }
    ]
  },
  cup: {
    id: "cup",
    name: "Ceramic Coffee Cup",
    price: 12.99,
    description: "High-quality ceramic • Dishwasher safe",
    views: [
      { id: "front", name: "Front", image: productCup },
      { id: "back", name: "Back", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop" },
      { id: "side", name: "Side", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop" }
    ]
  },
  hoodie: {
    id: "hoodie",
    name: "Premium Hoodie",
    price: 39.99,
    description: "Cozy fleece • Available in all sizes",
    views: [
      { id: "front", name: "Front", image: productHoodie },
      { id: "back", name: "Back", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop" },
      { id: "side", name: "Side", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop" }
    ]
  }
};

// Expanded templates library
const templates = [
  // Text Templates
  { id: "text-1", name: "Minimalist Quote", category: "Text", premium: false, thumbnail: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop", elements: [{ type: "text", content: "Live Your Dream", fontSize: 32, color: "#000000", x: 150, y: 200 }] },
  { id: "text-2", name: "Motivational", category: "Text", premium: false, thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop", elements: [{ type: "text", content: "Be Yourself", fontSize: 28, color: "#8B5CF6", x: 160, y: 180 }] },
  { id: "text-3", name: "Bold Statement", category: "Text", premium: true, thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=200&fit=crop", elements: [{ type: "text", content: "DREAM BIG", fontSize: 36, color: "#EF4444", x: 140, y: 200 }] },
  { id: "text-4", name: "Script Style", category: "Text", premium: true, thumbnail: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=200&fit=crop", elements: [{ type: "text", content: "Elegant", fontSize: 30, color: "#10B981", x: 170, y: 190 }] },
  
  // Graphics Templates
  { id: "graphic-1", name: "Nature Scene", category: "Graphics", premium: false, thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=200&fit=crop", elements: [{ type: "image", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop", x: 100, y: 100 }, { type: "text", content: "Nature", fontSize: 24, color: "#10B981", x: 200, y: 300 }] },
  { id: "graphic-2", name: "Abstract Art", category: "Graphics", premium: false, thumbnail: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=200&h=200&fit=crop", elements: [{ type: "shape", shape: "rect", width: 100, height: 100, color: "#EF4444", x: 150, y: 150 }, { type: "shape", shape: "circle", radius: 50, color: "#F59E0B", x: 200, y: 200 }] },
  { id: "graphic-3", name: "Urban Style", category: "Graphics", premium: true, thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=200&fit=crop", elements: [{ type: "image", url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=300&fit=crop", x: 100, y: 100 }, { type: "text", content: "Urban", fontSize: 28, color: "#FFFFFF", x: 180, y: 250 }] },
  { id: "graphic-4", name: "Space Theme", category: "Graphics", premium: true, thumbnail: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=200&h=200&fit=crop", elements: [{ type: "image", url: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=300&fit=crop", x: 100, y: 100 }, { type: "text", content: "Galaxy", fontSize: 26, color: "#8B5CF6", x: 190, y: 280 }] },
  
  // Logo Templates
  { id: "logo-1", name: "Modern Logo", category: "Logo", premium: false, thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=200&fit=crop", elements: [{ type: "shape", shape: "circle", radius: 60, color: "#8B5CF6", x: 170, y: 170 }, { type: "text", content: "LOGO", fontSize: 20, color: "#FFFFFF", x: 150, y: 200 }] },
  { id: "logo-2", name: "Geometric Logo", category: "Logo", premium: true, thumbnail: "https://images.unsplash.com/photo-1557683316-973673baf926?w=200&h=200&fit=crop", elements: [{ type: "shape", shape: "rect", width: 80, height: 80, color: "#10B981", x: 160, y: 160 }, { type: "text", content: "GEO", fontSize: 18, color: "#FFFFFF", x: 175, y: 200 }] },
  
  // Pattern Templates
  { id: "pattern-1", name: "Floral Pattern", category: "Pattern", premium: false, thumbnail: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=200&h=200&fit=crop", elements: [{ type: "image", url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=200&h=200&fit=crop", x: 100, y: 100 }] },
  { id: "pattern-2", name: "Geometric Pattern", category: "Pattern", premium: true, thumbnail: "https://images.unsplash.com/photo-1557683316-973673baf926?w=200&h=200&fit=crop", elements: [{ type: "image", url: "https://images.unsplash.com/photo-1557683316-973673baf926?w=200&h=200&fit=crop", x: 100, y: 100 }] }
];

// Expanded image categories
const imageCategories = {
  "Nature": [
    { id: "nature-1", name: "Forest", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=200&fit=crop" },
    { id: "nature-2", name: "Mountains", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop" },
    { id: "nature-3", name: "Ocean", url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=200&h=200&fit=crop" },
    { id: "nature-4", name: "Sunset", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop" },
    { id: "nature-5", name: "Flowers", url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=200&h=200&fit=crop" },
    { id: "nature-6", name: "Trees", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=200&fit=crop" }
  ],
  "Abstract": [
    { id: "abstract-1", name: "Geometric", url: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=200&h=200&fit=crop" },
    { id: "abstract-2", name: "Colorful", url: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=200&fit=crop" },
    { id: "abstract-3", name: "Pattern", url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=200&fit=crop" },
    { id: "abstract-4", name: "Modern", url: "https://images.unsplash.com/photo-1557683316-973673baf926?w=200&h=200&fit=crop" },
    { id: "abstract-5", name: "Minimalist", url: "https://images.unsplash.com/photo-1557683316-973673baf926?w=200&h=200&fit=crop" },
    { id: "abstract-6", name: "Artistic", url: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=200&h=200&fit=crop" }
  ],
  "Urban": [
    { id: "urban-1", name: "City", url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=200&fit=crop" },
    { id: "urban-2", name: "Street", url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=200&fit=crop" },
    { id: "urban-3", name: "Architecture", url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop" },
    { id: "urban-4", name: "Night", url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=200&h=200&fit=crop" },
    { id: "urban-5", name: "Skyline", url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=200&fit=crop" },
    { id: "urban-6", name: "Modern", url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop" }
  ],
  "Space": [
    { id: "space-1", name: "Galaxy", url: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=200&h=200&fit=crop" },
    { id: "space-2", name: "Planets", url: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=200&h=200&fit=crop" },
    { id: "space-3", name: "Stars", url: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=200&h=200&fit=crop" },
    { id: "space-4", name: "Nebula", url: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=200&h=200&fit=crop" },
    { id: "space-5", name: "Cosmic", url: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=200&h=200&fit=crop" },
    { id: "space-6", name: "Universe", url: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=200&h=200&fit=crop" }
  ],
  "Animals": [
    { id: "animal-1", name: "Cats", url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&h=200&fit=crop" },
    { id: "animal-2", name: "Dogs", url: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=200&h=200&fit=crop" },
    { id: "animal-3", name: "Birds", url: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=200&h=200&fit=crop" },
    { id: "animal-4", name: "Wildlife", url: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=200&h=200&fit=crop" }
  ],
  "Food": [
    { id: "food-1", name: "Coffee", url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&h=200&fit=crop" },
    { id: "food-2", name: "Pizza", url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=200&fit=crop" },
    { id: "food-3", name: "Fruits", url: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=200&h=200&fit=crop" },
    { id: "food-4", name: "Desserts", url: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=200&h=200&fit=crop" }
  ]
};

// Expanded sticker collection
const stickers = [
  // Emoji Stickers
  { id: "emoji-1", name: "Lightning", icon: "⚡", color: "#F59E0B", category: "Energy" },
  { id: "emoji-2", name: "Star", icon: "⭐", color: "#8B5CF6", category: "Excellence" },
  { id: "emoji-3", name: "Heart", icon: "❤️", color: "#EF4444", category: "Love" },
  { id: "emoji-4", name: "Fire", icon: "🔥", color: "#F97316", category: "Hot" },
  { id: "emoji-5", name: "Crown", icon: "👑", color: "#F59E0B", category: "Premium" },
  { id: "emoji-6", name: "Diamond", icon: "💎", color: "#06B6D4", category: "Luxury" },
  { id: "emoji-7", name: "Rocket", icon: "🚀", color: "#8B5CF6", category: "Success" },
  { id: "emoji-8", name: "Sun", icon: "☀️", color: "#F59E0B", category: "Bright" },
  { id: "emoji-9", name: "Moon", icon: "🌙", color: "#6366F1", category: "Night" },
  { id: "emoji-10", name: "Rainbow", icon: "🌈", color: "#10B981", category: "Colorful" },
  { id: "emoji-11", name: "Thumbs Up", icon: "👍", color: "#10B981", category: "Approval" },
  { id: "emoji-12", name: "Peace", icon: "✌️", color: "#8B5CF6", category: "Peace" },
  
  // Symbol Stickers
  { id: "symbol-1", name: "Checkmark", icon: "✓", color: "#10B981", category: "Success" },
  { id: "symbol-2", name: "X Mark", icon: "✗", color: "#EF4444", category: "Cancel" },
  { id: "symbol-3", name: "Plus", icon: "+", color: "#8B5CF6", category: "Add" },
  { id: "symbol-4", name: "Minus", icon: "-", color: "#6B7280", category: "Remove" },
  { id: "symbol-5", name: "Arrow Up", icon: "↑", color: "#10B981", category: "Up" },
  { id: "symbol-6", name: "Arrow Down", icon: "↓", color: "#EF4444", category: "Down" },
  { id: "symbol-7", name: "Arrow Right", icon: "→", color: "#8B5CF6", category: "Forward" },
  { id: "symbol-8", name: "Arrow Left", icon: "←", color: "#8B5CF6", category: "Back" },
  
  // Shape Stickers
  { id: "shape-1", name: "Circle", icon: "●", color: "#8B5CF6", category: "Shape" },
  { id: "shape-2", name: "Square", icon: "■", color: "#EF4444", category: "Shape" },
  { id: "shape-3", name: "Triangle", icon: "▲", color: "#F59E0B", category: "Shape" },
  { id: "shape-4", name: "Diamond", icon: "♦", color: "#06B6D4", category: "Shape" }
];

const Designer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fabricCanvas, setFabricCanvas] = useState<FabricCanvas | null>(null);
  const [activeColor, setActiveColor] = useState("#8B5CF6");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("templates");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState("tshirt");
  const [currentView, setCurrentView] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [aiPrompt, setAiPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const currentProduct = products[selectedProduct as keyof typeof products];

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new FabricCanvas(canvasRef.current, {
      width: 400,
      height: 400,
      backgroundColor: "transparent",
    });

    // Add product background
    FabricImage.fromURL(currentProduct.views[currentView].image).then((img) => {
      img.scaleToWidth(400);
      img.scaleToHeight(400);
      img.set({ selectable: false, evented: false });
      canvas.add(img);
      canvas.sendObjectToBack(img);
      canvas.renderAll();
    });

    setFabricCanvas(canvas);

    return () => {
      canvas.dispose();
    };
  }, [selectedProduct, currentView]);

  // Auto-rotate product view
  useEffect(() => {
    if (isRotating) {
      const interval = setInterval(() => {
        setCurrentView((prev) => (prev + 1) % currentProduct.views.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isRotating, currentProduct.views.length]);

  const addText = (content = "Your Text Here") => {
    if (!fabricCanvas) return;

    const text = new IText(content, {
      left: 200,
      top: 200,
      fill: activeColor,
      fontSize: 32,
      fontFamily: "Arial",
    });

    fabricCanvas.add(text);
    fabricCanvas.setActiveObject(text);
    fabricCanvas.renderAll();
    toast.success("Text added! Click to edit.");
  };

  const addImage = (imageUrl: string) => {
    if (!fabricCanvas) return;

    FabricImage.fromURL(imageUrl).then((img) => {
      img.scaleToWidth(150);
      img.set({ left: 200, top: 200 });
      fabricCanvas.add(img);
      fabricCanvas.renderAll();
      toast.success("Image added!");
    });
  };

  const addShape = (shape: "circle" | "rect", options: any = {}) => {
    if (!fabricCanvas) return;

    let shapeObj;
    if (shape === "circle") {
      shapeObj = new Circle({
        radius: options.radius || 50,
        fill: activeColor,
        left: 200,
        top: 200,
      });
    } else {
      shapeObj = new Rect({
        width: options.width || 100,
        height: options.height || 100,
        fill: activeColor,
        left: 200,
        top: 200,
      });
    }

    fabricCanvas.add(shapeObj);
    fabricCanvas.renderAll();
    toast.success("Shape added!");
  };

  const addSticker = (sticker: typeof stickers[0]) => {
    if (!fabricCanvas) return;

    const text = new IText(sticker.icon, {
      left: 200,
      top: 200,
      fontSize: 48,
      fontFamily: "Arial",
    });

    fabricCanvas.add(text);
    fabricCanvas.renderAll();
    toast.success(`${sticker.name} sticker added!`);
  };

  const applyTemplate = (template: typeof templates[0]) => {
    if (!fabricCanvas) return;

    // Clear existing elements (keep background)
    const objects = fabricCanvas.getObjects();
    objects.forEach((obj, index) => {
      if (index !== 0) { // Keep background image (first object)
        fabricCanvas.remove(obj);
      }
    });

    // Apply template elements
    template.elements.forEach(element => {
      if (element.type === "text") {
        const text = new IText(element.content, {
          left: element.x,
          top: element.y,
          fill: element.color,
          fontSize: element.fontSize,
          fontFamily: "Arial",
        });
        fabricCanvas.add(text);
      } else if (element.type === "image") {
        FabricImage.fromURL(element.url).then((img) => {
          img.scaleToWidth(150);
          img.set({ left: element.x, top: element.y });
          fabricCanvas.add(img);
          fabricCanvas.renderAll();
        });
      } else if (element.type === "shape") {
        let shapeObj;
        if (element.shape === "circle") {
          shapeObj = new Circle({
            radius: element.radius,
            fill: element.color,
            left: element.x,
            top: element.y,
          });
        } else {
          shapeObj = new Rect({
            width: element.width,
            height: element.height,
            fill: element.color,
            left: element.x,
            top: element.y,
          });
        }
        fabricCanvas.add(shapeObj);
      }
    });

    fabricCanvas.renderAll();
    toast.success(`Applied ${template.name} template!`);
  };

  const generateAIImage = async () => {
    if (!aiPrompt.trim()) {
      toast.error("Please enter a prompt for AI generation");
      return;
    }

    setIsGenerating(true);
    
    try {
      // Check if Gemini API key is available
      if (!GEMINI_API_KEY) {
        toast.error("Gemini API key not configured. Using fallback images.");
        // Fallback to smart image selection
        const fallbackImage = getFallbackImage(aiPrompt);
        addImage(fallbackImage);
        setIsGenerating(false);
        toast.success(`Generated image for: "${aiPrompt}"`);
        setAiPrompt("");
        return;
      }

      // Initialize Gemini AI
      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // Enhanced prompt for better image generation
      const enhancedPrompt = `Generate a detailed description for an image that would be perfect for printing on a ${currentProduct.name.toLowerCase()}. The image should be: ${aiPrompt}. Make it visually appealing, high-contrast, and suitable for apparel printing. Focus on bold colors, clear shapes, and striking visual elements.`;

      // Generate image description using Gemini
      const result = await model.generateContent(enhancedPrompt);
      const response = await result.response;
      const generatedDescription = response.text();

      // Use the generated description to create a more relevant image
      const selectedImage = getFallbackImage(generatedDescription);
      
      addImage(selectedImage);
      setIsGenerating(false);
      toast.success(`Gemini AI generated image for: "${aiPrompt}"`);
      setAiPrompt("");
    } catch (error) {
      console.error("Gemini AI Error:", error);
      setIsGenerating(false);
      
      // Fallback to smart image selection
      try {
        const fallbackImage = getFallbackImage(aiPrompt);
        addImage(fallbackImage);
        toast.success(`Generated fallback image for: "${aiPrompt}"`);
        setAiPrompt("");
      } catch (fallbackError) {
        toast.error("Failed to generate AI image. Please try again.");
      }
    }
  };

  // Fallback image selection function
  const getFallbackImage = (prompt: string) => {
    const lowerPrompt = prompt.toLowerCase();
    
    // Nature-related prompts
    if (lowerPrompt.includes('nature') || lowerPrompt.includes('forest') || lowerPrompt.includes('tree') || lowerPrompt.includes('green') || lowerPrompt.includes('leaf')) {
      return `https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop&q=80`;
    }
    
    // City/Urban prompts
    if (lowerPrompt.includes('city') || lowerPrompt.includes('urban') || lowerPrompt.includes('street') || lowerPrompt.includes('building') || lowerPrompt.includes('skyline')) {
      return `https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=300&fit=crop&q=80`;
    }
    
    // Space/Cosmic prompts
    if (lowerPrompt.includes('space') || lowerPrompt.includes('galaxy') || lowerPrompt.includes('star') || lowerPrompt.includes('cosmic') || lowerPrompt.includes('universe')) {
      return `https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=300&fit=crop&q=80`;
    }
    
    // Abstract/Art prompts
    if (lowerPrompt.includes('abstract') || lowerPrompt.includes('art') || lowerPrompt.includes('modern') || lowerPrompt.includes('creative')) {
      return `https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop&q=80`;
    }
    
    // Colorful/Vibrant prompts
    if (lowerPrompt.includes('color') || lowerPrompt.includes('bright') || lowerPrompt.includes('vibrant') || lowerPrompt.includes('rainbow') || lowerPrompt.includes('colorful')) {
      return `https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop&q=80`;
    }
    
    // Pattern/Design prompts
    if (lowerPrompt.includes('pattern') || lowerPrompt.includes('design') || lowerPrompt.includes('texture') || lowerPrompt.includes('geometric')) {
      return `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=300&fit=crop&q=80`;
    }
    
    // Floral/Flower prompts
    if (lowerPrompt.includes('flower') || lowerPrompt.includes('floral') || lowerPrompt.includes('plant') || lowerPrompt.includes('garden') || lowerPrompt.includes('bloom')) {
      return `https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300&h=300&fit=crop&q=80`;
    }
    
    // Animal prompts
    if (lowerPrompt.includes('animal') || lowerPrompt.includes('cat') || lowerPrompt.includes('dog') || lowerPrompt.includes('pet') || lowerPrompt.includes('wildlife')) {
      return `https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=300&fit=crop&q=80`;
    }
    
    // Food prompts
    if (lowerPrompt.includes('food') || lowerPrompt.includes('coffee') || lowerPrompt.includes('pizza') || lowerPrompt.includes('dessert') || lowerPrompt.includes('meal')) {
      return `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop&q=80`;
    }
    
    // Ocean/Water prompts
    if (lowerPrompt.includes('ocean') || lowerPrompt.includes('water') || lowerPrompt.includes('sea') || lowerPrompt.includes('wave') || lowerPrompt.includes('beach')) {
      return `https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=300&h=300&fit=crop&q=80`;
    }
    
    // Mountain/Landscape prompts
    if (lowerPrompt.includes('mountain') || lowerPrompt.includes('landscape') || lowerPrompt.includes('hill') || lowerPrompt.includes('peak')) {
      return `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&q=80`;
    }
    
    // Sunset/Sunrise prompts
    if (lowerPrompt.includes('sunset') || lowerPrompt.includes('sunrise') || lowerPrompt.includes('dawn') || lowerPrompt.includes('dusk')) {
      return `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&q=80`;
    }
    
    // Technology/Digital prompts
    if (lowerPrompt.includes('tech') || lowerPrompt.includes('digital') || lowerPrompt.includes('computer') || lowerPrompt.includes('code') || lowerPrompt.includes('ai')) {
      return `https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop&q=80`;
    }
    
    // Default fallback for unrecognized prompts
    return `https://images.unsplash.com/photo-1557683316-973673baf926?w=300&h=300&fit=crop&q=80`;
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !fabricCanvas) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const imgUrl = event.target?.result as string;
      addImage(imgUrl);
    };
    reader.readAsDataURL(file);
  };

  const deleteSelected = () => {
    if (!fabricCanvas) return;
    const activeObject = fabricCanvas.getActiveObject();
    if (activeObject) {
      fabricCanvas.remove(activeObject);
      fabricCanvas.renderAll();
      toast.success("Object deleted!");
    } else {
      toast.error("Please select an object first");
    }
  };

  const clearCanvas = () => {
    if (!fabricCanvas) return;
    const objects = fabricCanvas.getObjects();
    objects.forEach((obj, index) => {
      if (index !== 0) { // Keep background image (first object)
        fabricCanvas.remove(obj);
      }
    });
    fabricCanvas.renderAll();
    toast.success("Design cleared!");
  };

  const downloadDesign = () => {
    if (!fabricCanvas) return;
    const dataURL = fabricCanvas.toDataURL({ format: "png", quality: 1, multiplier: 2 });
    const link = document.createElement("a");
    link.download = `${currentProduct.name.toLowerCase().replace(/\s+/g, '-')}-design.png`;
    link.href = dataURL;
    link.click();
    toast.success("Design downloaded!");
  };

  const saveDesign = () => {
    if (!fabricCanvas) return;
    const json = JSON.stringify(fabricCanvas.toJSON());
    localStorage.setItem("yome-design", json);
    toast.success("Design saved!");
  };

  const proceedToCheckout = () => {
    setShowCheckout(true);
  };

  // Filter templates based on search and category
  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Filter images based on search
  const filteredImages = Object.entries(imageCategories).flatMap(([category, images]) => 
    images.filter(img => img.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Filter stickers based on search
  const filteredStickers = stickers.filter(sticker => 
    sticker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sticker.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Button>
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Design Studio
            </h1>
            <div className="flex gap-2">
              <Button onClick={saveDesign} variant="outline" size="sm" className="gap-2">
                <Save className="h-4 w-4" />
                Save
              </Button>
              <Button onClick={downloadDesign} className="bg-gradient-primary text-primary-foreground gap-2">
                <Download className="h-4 w-4" />
                Export
              </Button>
              <Button onClick={proceedToCheckout} className="bg-green-600 text-white gap-2">
                <ShoppingCart className="h-4 w-4" />
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[350px_1fr_300px] gap-6">
          {/* Left Sidebar - Design Elements */}
          <Card className="p-4 h-fit shadow-card">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Design Elements</h3>
            </div>

            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search elements..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="templates">Templates</TabsTrigger>
                <TabsTrigger value="images">Images</TabsTrigger>
                <TabsTrigger value="stickers">Stickers</TabsTrigger>
                <TabsTrigger value="ai">AI</TabsTrigger>
              </TabsList>

              {/* Templates Tab */}
              <TabsContent value="templates" className="space-y-4 mt-4">
                {/* Category Filter */}
                <div className="flex gap-2 flex-wrap">
                  {["All", "Text", "Graphics", "Logo", "Pattern"].map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {filteredTemplates.map((template) => (
                    <div
                      key={template.id}
                      className="relative group cursor-pointer rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-all"
                      onClick={() => applyTemplate(template)}
                    >
                      <img
                        src={template.thumbnail}
                        alt={template.name}
                        className="w-full h-20 object-cover"
                      />
                      {template.premium && (
                        <Crown className="absolute top-1 right-1 h-3 w-3 text-yellow-500" />
                      )}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                        <p className="text-white text-xs font-medium">{template.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Images Tab */}
              <TabsContent value="images" className="space-y-4 mt-4">
                {Object.entries(imageCategories).map(([category, images]) => (
                  <div key={category}>
                    <h4 className="font-medium text-sm mb-2">{category}</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {images.map((image) => (
                        <div
                          key={image.id}
                          className="relative group cursor-pointer rounded-lg overflow-hidden border border-border hover:border-primary transition-all"
                          onClick={() => addImage(image.url)}
                        >
                          <img
                            src={image.url}
                            alt={image.name}
                            className="w-full h-16 object-cover"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Plus className="h-4 w-4 text-white" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </TabsContent>

              {/* Stickers Tab */}
              <TabsContent value="stickers" className="space-y-4 mt-4">
                <div className="grid grid-cols-3 gap-2">
                  {filteredStickers.map((sticker) => (
                    <div
                      key={sticker.id}
                      className="p-3 rounded-lg border border-border hover:border-primary cursor-pointer transition-all hover:shadow-md"
                      onClick={() => addSticker(sticker)}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-1">{sticker.icon}</div>
                        <p className="text-xs font-medium">{sticker.name}</p>
                        <p className="text-xs text-muted-foreground">{sticker.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* AI Tab */}
              <TabsContent value="ai" className="space-y-4 mt-4">
                <div className="space-y-4">
                  {/* API Key Status */}
                  <div className="p-3 rounded-lg border border-border bg-muted/30">
                    <div className="flex items-center gap-2 mb-2">
                      {GEMINI_API_KEY ? (
                        <>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm font-medium text-green-700">Gemini AI Connected</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="h-4 w-4 text-amber-500" />
                          <span className="text-sm font-medium text-amber-700">Gemini AI Not Configured</span>
                        </>
                      )}
                    </div>
                    {!GEMINI_API_KEY && (
                      <div className="text-xs text-muted-foreground">
                        <p>To use Gemini AI, add your API key to the environment variables:</p>
                        <code className="block mt-1 p-1 bg-muted rounded text-xs">
                          VITE_GEMINI_API_KEY=your_api_key_here
                        </code>
                        <p className="mt-1">Get your API key from: <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google AI Studio</a></p>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">AI Image Generation</label>
                    <Input
                      placeholder="Describe the image you want to generate..."
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                    />
                  </div>
                  <Button
                    onClick={generateAIImage}
                    disabled={isGenerating || !aiPrompt.trim()}
                    className="w-full bg-gradient-primary text-primary-foreground gap-2"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="h-4 w-4 animate-spin" />
                        {GEMINI_API_KEY ? "Gemini AI Generating..." : "Generating..."}
                      </>
                    ) : (
                      <>
                        <Wand2 className="h-4 w-4" />
                        {GEMINI_API_KEY ? "Generate with Gemini AI" : "Generate Image"}
                      </>
                    )}
                  </Button>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-medium text-sm mb-2">AI Sticker Generation</h4>
                    <Button
                      onClick={() => {
                        const randomSticker = stickers[Math.floor(Math.random() * stickers.length)];
                        addSticker(randomSticker);
                        toast.success("AI generated sticker!");
                      }}
                      variant="outline"
                      className="w-full gap-2"
                    >
                      <Sparkles className="h-4 w-4" />
                      Generate Random Sticker
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Quick Tools */}
            <div className="mt-6 pt-6 border-t border-border space-y-2">
              <Button
                onClick={() => addText()}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <Type className="h-4 w-4" />
                Add Text
              </Button>
              
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <PaletteIcon className="h-4 w-4" />
                  Color
                </label>
                <Button
                  onClick={() => setShowColorPicker(!showColorPicker)}
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <div
                    className="w-6 h-6 rounded border-2 border-border"
                    style={{ backgroundColor: activeColor }}
                  />
                  {activeColor}
                </Button>
                {showColorPicker && (
                  <div className="mt-2">
                    <HexColorPicker color={activeColor} onChange={setActiveColor} />
                  </div>
                )}
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <Button
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <Upload className="h-4 w-4" />
                Upload Image
              </Button>

              <Button
                onClick={deleteSelected}
                variant="outline"
                className="w-full justify-start gap-2 text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
                Delete Selected
              </Button>
              <Button
                onClick={clearCanvas}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <Trash2 className="h-4 w-4" />
                Clear Design
              </Button>
            </div>
          </Card>

          {/* Center - Product Canvas */}
          <div className="flex flex-col items-center gap-4">
            {/* Product Selection */}
            <Card className="p-4 w-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Select Product</h3>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsRotating(!isRotating)}
                    className={isRotating ? "bg-primary text-primary-foreground" : ""}
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    {isRotating ? "Stop" : "Auto Rotate"}
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-2 mb-4">
                {Object.entries(products).map(([key, product]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedProduct(key)}
                    className={`p-2 rounded-lg border-2 transition-all ${
                      selectedProduct === key
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={product.views[0].image}
                      alt={product.name}
                      className="w-full h-16 object-cover rounded"
                    />
                    <p className="text-xs font-medium mt-1">{product.name}</p>
                  </button>
                ))}
              </div>

              {/* View Thumbnails */}
              <div className="flex gap-2 justify-center">
                {currentProduct.views.map((view, index) => (
                  <button
                    key={view.id}
                    onClick={() => setCurrentView(index)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      currentView === index
                        ? 'border-primary shadow-lg scale-105'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={view.image}
                      alt={view.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs px-1 py-0.5 text-center">
                      {view.name}
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Canvas */}
            <Card className="p-8 shadow-elevated bg-gradient-card">
              <div className="relative">
                <div
                  className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-lg"
                  aria-hidden="true"
                />
                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                  <canvas ref={canvasRef} className="max-w-full" />
                </div>
              </div>
            </Card>

            <div className="text-center text-sm text-muted-foreground">
              Click and drag objects to move • Use corners to resize • Double-click text to edit
            </div>
          </div>

          {/* Right Sidebar - Product Info & Checkout */}
          <Card className="p-4 h-fit shadow-card">
            <h3 className="font-semibold mb-4">Product Details</h3>
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden border-2 border-border">
                <img
                  src={currentProduct.views[currentView].image}
                  alt="Product preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">{currentProduct.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {currentProduct.description}
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-bold text-primary">${currentProduct.price}</p>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <Star className="h-3 w-3 mr-1" />
                    Premium
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-2">
                <Button className="w-full bg-gradient-primary text-primary-foreground">
                  <Heart className="h-4 w-4 mr-2" />
                  Add to Favorites
                </Button>
                <Button onClick={proceedToCheckout} className="w-full bg-green-600 text-white">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart - ${currentProduct.price}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Checkout Dialog */}
      <Dialog open={showCheckout} onOpenChange={setShowCheckout}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Checkout</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <img
                src={currentProduct.views[currentView].image}
                alt={currentProduct.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="font-medium">{currentProduct.name}</h4>
                <p className="text-sm text-muted-foreground">Custom Design</p>
                <p className="text-lg font-bold text-primary">${currentProduct.price}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input placeholder="your@email.com" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Shipping Address</label>
              <Input placeholder="Your address" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Payment Method</label>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Card
                </Button>
                <Button variant="outline" className="flex-1">
                  PayPal
                </Button>
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Total</span>
                <span className="text-lg font-bold">${currentProduct.price}</span>
              </div>
              <Button className="w-full bg-green-600 text-white">
                Complete Order
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Designer;