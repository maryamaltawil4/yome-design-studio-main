import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Palette, Rocket, Users, Zap, Heart, Target, Globe } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutUsMinimal = () => {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasRef2 = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
    
    // Primary Particle Animation
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];

    const colors = [
      '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3',
      '#54a0ff', '#5f27cd', '#00d2d3', '#ff9ff3', '#f368e0', '#ff9f43'
    ];

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();


      });

      requestAnimationFrame(animate);
    };

    animate();

    // Secondary Canvas for Geometric Patterns
    const canvas2 = canvasRef2.current;
    if (!canvas2) return;

    const ctx2 = canvas2.getContext('2d');
    if (!ctx2) return;

    canvas2.width = canvas2.offsetWidth;
    canvas2.height = canvas2.offsetHeight;

    const shapes: Array<{
      x: number;
      y: number;
      size: number;
      rotation: number;
      speed: number;
      type: 'circle' | 'triangle' | 'square';
      color: string;
    }> = [];

    for (let i = 0; i < 15; i++) {
      shapes.push({
        x: Math.random() * canvas2.width,
        y: Math.random() * canvas2.height,
        size: Math.random() * 30 + 10,
        rotation: Math.random() * 360,
        speed: Math.random() * 0.5 + 0.1,
        type: ['circle', 'triangle', 'square'][Math.floor(Math.random() * 3)] as 'circle' | 'triangle' | 'square',
        color: `${colors[Math.floor(Math.random() * colors.length)]}15`,
      });
    }

    const animateShapes = () => {
      ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
      
      shapes.forEach(shape => {
        shape.rotation += shape.speed;
        shape.x += Math.sin(shape.rotation * Math.PI / 180) * 0.2;
        shape.y += Math.cos(shape.rotation * Math.PI / 180) * 0.2;

        // Wrap around edges
        if (shape.x > canvas2.width) shape.x = 0;
        if (shape.x < 0) shape.x = canvas2.width;
        if (shape.y > canvas2.height) shape.y = 0;
        if (shape.y < 0) shape.y = canvas2.height;

        ctx2.save();
        ctx2.translate(shape.x, shape.y);
        ctx2.rotate(shape.rotation * Math.PI / 180);
        ctx2.fillStyle = shape.color;

        switch (shape.type) {
          case 'circle':
            ctx2.beginPath();
            ctx2.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
            ctx2.fill();
            break;
          case 'square':
            ctx2.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
            break;
          case 'triangle':
            ctx2.beginPath();
            ctx2.moveTo(0, -shape.size / 2);
            ctx2.lineTo(shape.size / 2, shape.size / 2);
            ctx2.lineTo(-shape.size / 2, shape.size / 2);
            ctx2.closePath();
            ctx2.fill();
            break;
        }

        ctx2.restore();
      });

      requestAnimationFrame(animateShapes);
    };

    animateShapes();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      canvas2.width = canvas2.offsetWidth;
      canvas2.height = canvas2.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features = [
    {
      icon: Palette,
      title: t.features.creativeFreedom.title,
      description: t.features.creativeFreedom.description,
      color: "from-purple-500 to-pink-500",
      delay: 0
    },
    {
      icon: Rocket,
      title: t.features.fastDelivery.title,
      description: t.features.fastDelivery.description,
      color: "from-blue-500 to-cyan-500",
      delay: 200
    },
    {
      icon: Users,
      title: t.features.globalCommunity.title,
      description: t.features.globalCommunity.description,
      color: "from-green-500 to-emerald-500",
      delay: 400
    },
    {
      icon: Zap,
      title: t.features.threeDPreview.title,
      description: t.features.threeDPreview.description,
      color: "from-orange-500 to-red-500",
      delay: 600
    }
  ];

  return (
    <section className="px-4 bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-conic-gradient(rgba(147, 51, 234, 0.3) 0deg 1deg, transparent 1deg 30deg),
                          repeating-conic-gradient(rgba(147, 51, 234, 0.3) 0deg 1deg, transparent 1deg 30deg)`,
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
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20"
      />
      
      {/* Secondary Geometric Patterns Canvas */}
      <canvas
        ref={canvasRef2}
        className="absolute inset-0 w-full h-full opacity-05"
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
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      {/* New Floating Icons */}
      <div className="absolute inset-0">
        {[Palette, Rocket, Users, Zap, Heart, Target, Globe].map((Icon, index) => (
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

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* About Us Section */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-5">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="animate-slide-in-left">
              <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {t.about.title}
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-8 animate-width-grow" />
            </div>

            <div className="space-y-6">
              <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <span className="font-semibold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                  {t.about.subtitle1.split('We\'re revolutionizing')[0]}
                </span>{t.about.subtitle1.split('We\'re revolutionizing')[1]}
              </p>

              <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                {t.about.subtitle2.split('tangible masterpieces')[0]}
                <span className="font-semibold text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text"> tangible masterpieces </span>
                {t.about.subtitle2.split('tangible masterpieces')[1]}
              </p>
            </div>

            {/* CTA Button */}
            <div className="animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
              <Button
                size="lg"
                onClick={() => navigate("/designer")}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300"
              >
                {t.about.startCreating}
              </Button>
            </div>

          </div>

          {/* Right Illustration - Design Studio with Butterflies and Products */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Design Tools and Butterflies */}
            <div className="absolute inset-0">
              {/* Color Palette with Butterfly */}
              <div className="absolute top-10 right-16 animate-tool-float">
                <div className="relative">
                  {/* Color Palette */}
                  <div className="w-20 h-12 bg-white rounded-lg shadow-lg border-2 border-gray-200 p-2 flex gap-1">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  </div>
                  {/* Small Butterfly on palette */}
                  <div className="absolute -top-6 -left-4">
                    <svg viewBox="0 0 40 40" className="w-8 h-8 animate-wing-flap">
                      <path d="M20,8 Q14,4 10,12 Q6,20 14,24 Q20,28 26,24 Q34,20 30,12 Q26,4 20,8 Z" fill="#ff6b6b" opacity="0.8" />
                      <path d="M20,20 Q15,18 12,26 Q9,34 17,36 Q20,38 23,36 Q31,34 28,26 Q25,18 20,20 Z" fill="#ff6b6b" opacity="0.6" />
                      <ellipse cx="20" cy="22" rx="1.5" ry="8" fill="#2d3748" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Paint Brush */}
              <div className="absolute top-32 left-20 animate-tool-float-delayed">
     <svg viewBox="0 0 40 120" className="w-8 h-24 drop-shadow-lg">
                  <defs>
                    <linearGradient id="pencilGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                  </defs>
                  {/* Pencil body */}
                  <rect x="15" y="30" width="10" height="70" rx="2" fill="#fbbf24" />
                  {/* Eraser */}
                  <rect x="15" y="20" width="10" height="10" rx="2" fill="#ef4444" />
                  {/* Lead */}
                  <rect x="17.5" y="95" width="5" height="25" fill="#374151" />
                  {/* Tip */}
                  <polygon points="20,120 15,140 25,140" fill="#374151" />
                </svg>
              </div>



              {/* Central Logo with Product Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Large Butterfly */}
                  <div className="animate-butterfly-center">
                    <img src="/src/assets/ue-logo.png" alt="Yome Logo" className="w-48 h-48 rounded-lg shadow-2xl" />
                  </div>

                  {/* Floating Product Elements - English positioned next to design studio */}
                  {/* Bag Product */}
                  <div className="absolute -top-8 -right-40 animate-product-float">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-1 shadow-xl border border-purple-200 animate-bounce-gentle">
                      <img src="/src/assets/jamie-grant-continue-shopping-animation-1-gif.gif" alt="Custom Bag" className="w-20 h-16 rounded" />
                      <div className="text-xs text-center font-semibold text-purple-600 mt-1">Custom Bag</div>
                    </div>
                  </div>

                  {/* Cup Product */}
                  <div className="absolute -bottom-30 -right-40 animate-product-float-delayed">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-1 shadow-xl border border-blue-200 animate-bounce-gentle">
                      <img src="/src/assets/2f4239_b01946f5a45c47f19c1c5a5eb95a5c21~mv2.gif" alt="Custom Cup" className="w-20 h-16 rounded" />
                      <div className="text-xs text-center font-semibold text-blue-600 mt-1">Custom Cup</div>
                    </div>
                  </div>

                  {/* Clothes Product (T-Shirt) */}
                  <div className="absolute top-1/3 -right-40 animate-product-float-reverse">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-1 shadow-xl border border-pink-200 animate-bounce-gentle">
                      <img src="/src/assets/o_1i53rei1tqkmrn51fi0h7b1epa1p.gif" alt="Custom Clothes" className="w-16 h-16 rounded" />
                      <div className="text-xs text-center font-semibold text-pink-600 mt-1">Custom Clothes</div>
                    </div>
                  </div>
                </div>
              </div>


            </div>



            {/* Computer Design Element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-canvas-float">
              <div className="relative">
                {/* Laptop Frame */}
                <div className="w-72 h-52 bg-gray-800 rounded-lg shadow-2xl border-4 border-gray-900 relative overflow-hidden">
                  {/* Laptop Screen */}
                  <div className="w-full h-full bg-white relative overflow-hidden">
                    {/* Design Software Interface */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200">

                      {/* Menu Bar */}
                      <div className="h-8 bg-gradient-to-r from-slate-600 to-slate-700 flex items-center px-3 gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div className="flex-1"></div>
                        <span className="text-xs text-white font-semibold">Yome Design Studio</span>
                      </div>

                      {/* Toolbar */}
                      <div className="h-12 bg-slate-100 border-b border-slate-300 flex items-center px-4 gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                          <svg viewBox="0 0 20 20" className="w-4 h-4 text-white">
                            <path d="M5,2 L15,2 L15,12 L10,17 L5,12 Z" fill="currentColor"/>
                          </svg>
                        </div>
                        <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center">
                          <svg viewBox="0 0 20 20" className="w-4 h-4 text-white">
                            <circle cx="10" cy="10" r="3" fill="currentColor"/>
                            <path d="M7,10 L13,10 M10,7 L10,13" stroke="currentColor" strokeWidth="1.5"/>
                          </svg>
                        </div>
                        <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                          <svg viewBox="0 0 20 20" className="w-4 h-4 text-white">
                            <path d="M4,16 Q4,12 8,12 L12,12 Q16,12 16,16 L16,18 L4,18 Z" fill="currentColor"/>
                            <rect x="7" y="8" width="6" height="8" fill="currentColor"/>
                          </svg>
                        </div>
                      </div>

                      {/* Canvas Area */}
                      <div className="flex-1 relative">
                        {/* Grid Background */}
                        <div className="absolute inset-0 opacity-30">
                          <div className="w-full h-full" style={{
                            backgroundImage: `
                              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                            `,
                            backgroundSize: '20px 20px'
                          }} />
                        </div>

                        {/* Design Elements on Canvas */}
                        <div className="absolute inset-0 p-4">
                          {/* T-shirt Design */}
                          <div className="absolute top-8 left-8 w-20 h-28 bg-gradient-to-b from-red-400 to-pink-400 rounded-t-lg rounded-b-sm relative shadow-lg">
                            <div className="absolute top-2 left-2 w-16 h-20 bg-white rounded-t-lg rounded-b-sm">
                              {/* Logo Design on shirt */}
                              <div className="absolute top-3 left-1">
                                <img src="/src/assets/ue-logo.png" alt="Yome Logo" className="w-12 h-12 rounded animate-wing-flap" />
                              </div>
                            </div>
                          </div>

                          {/* Coffee Cup Design */}
                          <div className="absolute top-6 right-16 w-16 h-20 bg-gradient-to-b from-orange-400 to-yellow-400 rounded-t-lg relative shadow-lg">
                            <div className="absolute top-2 left-2 w-12 h-16 bg-white rounded-t-lg">
                              <div className="absolute top-2 left-1.5">
                                <svg viewBox="0 0 50 50" className="w-9 h-9">
                                  <path d="M8,15 Q8,10 13,10 L27,10 Q32,10 32,15 L32,30 Q32,35 27,35 L13,35 Q8,35 8,30 Z" fill="#06b6d4" />
                                  <path d="M13,10 Q13,5 18,5 L32,5 Q32,10 27,10" stroke="#06b6d4" strokeWidth="2" fill="none" />
                                  {/* Small logo on cup */}
                                  <image href="/src/assets/ue-logo.png" x="16" y="18" width="12" height="12" />
                                </svg>
                              </div>
                            </div>
                          </div>

                          {/* Design Tools Palette */}
                          <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-2 border border-gray-200">
                            <div className="flex gap-1">
                              <div className="w-6 h-6 bg-red-500 rounded border-2 border-white shadow-sm"></div>
                              <div className="w-6 h-6 bg-blue-500 rounded border-2 border-white shadow-sm"></div>
                              <div className="w-6 h-6 bg-yellow-500 rounded border-2 border-white shadow-sm"></div>
                              <div className="w-6 h-6 bg-green-500 rounded border-2 border-white shadow-sm"></div>
                              <div className="w-6 h-6 bg-purple-500 rounded border-2 border-white shadow-sm"></div>
                            </div>
                          </div>

                          {/* Selection Handles */}
                          <div className="absolute top-6 left-6 w-24 h-32 border-2 border-blue-500 rounded">
                            <div className="absolute -top-1 -left-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Laptop Base */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-80 h-6 bg-gray-800 rounded-b-lg shadow-lg"></div>
                </div>
              </div>
            </div>

            {/* Design Grid Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
                animation: 'grid-move 30s linear infinite'
              }} />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative p-6 border-0 bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up hover:scale-105"
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
              
              <div className={`w-12 h-1 bg-gradient-to-r ${feature.color} rounded-full mt-4 group-hover:w-full transition-all duration-500`} />
            </Card>
          ))}
        </div>
      </div>

      {/* Enhanced CSS animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float-random {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }

        @keyframes float-icon {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          25% { transform: translateY(-15px) rotate(90deg) scale(1.1); }
          50% { transform: translateY(-5px) rotate(180deg) scale(0.9); }
          75% { transform: translateY(-10px) rotate(270deg) scale(1.05); }
        }



        @keyframes person-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes head-bob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }


        @keyframes width-grow {
          0% { width: 0px; }
          100% { width: 96px; }
        }

        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }

        @keyframes butterfly-float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); }
          25% { transform: translateY(-20px) translateX(10px) rotate(5deg) scale(1.05); }
          50% { transform: translateY(-10px) translateX(-5px) rotate(-3deg) scale(0.95); }
          75% { transform: translateY(-15px) translateX(5px) rotate(2deg) scale(1.02); }
        }

        @keyframes wing-flap {
          0%, 100% { transform: scaleY(1) scaleX(1); }
          50% { transform: scaleY(0.9) scaleX(1.1); }
        }

        @keyframes wing-upper {
          0%, 100% { transform: rotateX(0deg) scale(1); }
          50% { transform: rotateX(10deg) scale(1.05); }
        }

        @keyframes wing-lower {
          0%, 100% { transform: rotateX(0deg) scale(1); }
          50% { transform: rotateX(-10deg) scale(1.05); }
        }

        @keyframes wing-flap-slow {
          0%, 100% { transform: scaleY(1) scaleX(1); }
          50% { transform: scaleY(0.8) scaleX(1.2); }
        }

        @keyframes wing-upper-slow {
          0%, 100% { transform: rotateX(0deg) scale(1); }
          50% { transform: rotateX(15deg) scale(1.1); }
        }

        @keyframes wing-lower-slow {
          0%, 100% { transform: rotateX(0deg) scale(1); }
          50% { transform: rotateX(-15deg) scale(1.1); }
        }

        @keyframes butterfly-center {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-15px) rotate(2deg) scale(1.05); }
          66% { transform: translateY(-8px) rotate(-1deg) scale(0.98); }
        }

        @keyframes dust-float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.6; }
          25% { transform: translateY(-30px) translateX(15px) rotate(90deg); opacity: 0.8; }
          50% { transform: translateY(-15px) translateX(-10px) rotate(180deg); opacity: 0.4; }
          75% { transform: translateY(-25px) translateX(8px) rotate(270deg); opacity: 0.7; }
        }

        @keyframes tool-float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-10px) translateX(5px) rotate(2deg) scale(1.05); }
          66% { transform: translateY(-5px) translateX(-3px) rotate(-1deg) scale(0.98); }
        }

        @keyframes tool-float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-8px) translateX(-4px) rotate(-3deg) scale(1.03); }
          66% { transform: translateY(-12px) translateX(6px) rotate(1deg) scale(0.97); }
        }

        @keyframes tool-float-reverse {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(8px) translateX(-5px) rotate(-2deg) scale(0.95); }
          66% { transform: translateY(4px) translateX(3px) rotate(3deg) scale(1.02); }
        }

        @keyframes design-element-float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-20px) translateX(10px) rotate(180deg) scale(1.1); }
        }

        @keyframes product-float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); }
          25% { transform: translateY(-15px) translateX(5px) rotate(2deg) scale(1.05); }
          50% { transform: translateY(-8px) translateX(-3px) rotate(-1deg) scale(0.98); }
          75% { transform: translateY(-12px) translateX(2px) rotate(1deg) scale(1.02); }
        }

        @keyframes product-float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); }
          25% { transform: translateY(-12px) translateX(-4px) rotate(-2deg) scale(1.03); }
          50% { transform: translateY(-6px) translateX(3px) rotate(1deg) scale(0.97); }
          75% { transform: translateY(-10px) translateX(-1px) rotate(-0.5deg) scale(1.01); }
        }

        @keyframes product-float-reverse {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); }
          25% { transform: translateY(12px) translateX(-4px) rotate(-2deg) scale(0.97); }
          50% { transform: translateY(6px) translateX(3px) rotate(1deg) scale(1.03); }
          75% { transform: translateY(10px) translateX(-1px) rotate(-0.5deg) scale(0.99); }
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }

        .animate-float-random { animation: float-random 20s ease-in-out infinite; }
        .animate-float-icon { animation: float-icon 15s ease-in-out infinite; }
        .animate-blob { animation: blob 20s ease-in-out infinite; }
        .animate-blob-reverse { animation: blob-reverse 25s ease-in-out infinite; }
        .animate-plant-wave { animation: plant-wave 3s ease-in-out infinite; }
        .animate-person-float { animation: person-float 4s ease-in-out infinite; }
        .animate-head-bob { animation: head-bob 2s ease-in-out infinite; }
        .animate-wave { animation: wave 8s ease-in-out infinite; }
        .animate-text-glow { animation: text-glow 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-width-grow { animation: width-grow 1s ease-out forwards; }
        .animate-rotate-slow { animation: rotate-slow 20s linear infinite; }
        .animate-rotate { animation: rotate-slow 15s linear infinite reverse; }
        .animate-line-sweep { animation: line-sweep 8s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 3s ease-out infinite; }
        .animate-ping-slower { animation: ping-slow 4s ease-out infinite; }
        .animate-butterfly-float { animation: butterfly-float 12s ease-in-out infinite; }
        .animate-wing-flap { animation: wing-flap 0.6s ease-in-out infinite; }
        .animate-wing-upper { animation: wing-upper 0.6s ease-in-out infinite; }
        .animate-wing-lower { animation: wing-lower 0.6s ease-in-out infinite; }
        .animate-wing-flap-slow { animation: wing-flap-slow 1.2s ease-in-out infinite; }
        .animate-wing-upper-slow { animation: wing-upper-slow 1.2s ease-in-out infinite; }
        .animate-wing-lower-slow { animation: wing-lower-slow 1.2s ease-in-out infinite; }
        .animate-butterfly-center { animation: butterfly-center 8s ease-in-out infinite; }
        .animate-dust-float { animation: dust-float 15s ease-in-out infinite; }
        .animate-tool-float { animation: tool-float 6s ease-in-out infinite; }
        .animate-tool-float-delayed { animation: tool-float-delayed 8s ease-in-out infinite; }
        .animate-tool-float-reverse { animation: tool-float-reverse 7s ease-in-out infinite; }
        .animate-design-element-float { animation: design-element-float 10s ease-in-out infinite; }
        .animate-product-float { animation: product-float 8s ease-in-out infinite; }
        .animate-product-float-delayed { animation: product-float-delayed 10s ease-in-out infinite; }
        .animate-product-float-reverse { animation: product-float-reverse 9s ease-in-out infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      `}} />
    </section>
  );
};

export default AboutUsMinimal;

