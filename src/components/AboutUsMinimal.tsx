import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Palette, Rocket, Users, Zap, Heart, Target, Globe } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const AboutUsMinimal = () => {
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

        // Draw connections
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `${particle.color}20`;
            ctx.lineWidth = 0.3;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
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
      title: "Creative Freedom",
      description: "Unleash your imagination with our intuitive design tools",
      color: "from-purple-500 to-pink-500",
      delay: 0
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Get your custom products in 2-3 days worldwide",
      color: "from-blue-500 to-cyan-500",
      delay: 200
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Join 50,000+ creators from around the world",
      color: "from-green-500 to-emerald-500",
      delay: 400
    },
    {
      icon: Zap,
      title: "3D Preview",
      description: "See your designs come to life before printing",
      color: "from-orange-500 to-red-500",
      delay: 600
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-900 dark:via-blue-950/20 dark:to-purple-950/10 relative overflow-hidden">
      {/* Primary Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20"
      />
      
      {/* Secondary Geometric Patterns Canvas */}
      <canvas
        ref={canvasRef2}
        className="absolute inset-0 w-full h-full opacity-10"
      />
      
      {/* Enhanced Animated Gradient Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float-slower" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-10 w-64 h-64 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-float-slow" />
      
      {/* New Floating Gradient Shapes */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-3xl blur-2xl animate-rotate-slow" />
      <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-amber-500/15 to-orange-500/15 rounded-2xl blur-xl animate-rotate" />
      <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-xl animate-pulse-slow" />

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
            <Icon className="w-8 h-8 opacity-10 text-purple-500" />
          </div>
        ))}
      </div>

      {/* New Animated Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-line-sweep"
            style={{
              top: `${(i + 1) * 12}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* New Pulsing Rings */}
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-64 h-64 border-2 border-purple-400/20 rounded-full animate-ping-slow" />
        <div className="absolute top-0 left-0 w-64 h-64 border-2 border-blue-400/20 rounded-full animate-ping-slower" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* About Us Section */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse-glow">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <span className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                  Our Story
                </span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-800 via-purple-600 to-pink-500 dark:from-slate-100 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-text-glow">
                ABOUT US
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8 animate-width-grow" />
            </div>

            <div className="space-y-6">
              <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <span className="font-semibold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                  Yome is where creativity meets innovation.
                </span> We're revolutionizing custom product design with cutting-edge technology and unparalleled quality.
              </p>
              
              <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                Our platform empowers artists, entrepreneurs, and creators to transform their visions into 
                <span className="font-semibold text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text"> tangible masterpieces </span>
                with just a few clicks.
              </p>
              
              <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                From 3D design previews to global shipping, we've built an ecosystem that makes 
                <span className="font-semibold text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text"> professional custom products accessible to all.</span>
              </p>
            </div>

            {/* CTA Button */}
            <div className="animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-2xl text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 group animate-pulse-slow"
              >
                <span className="flex items-center gap-3">
                  Start Creating Now
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </div>

          {/* Right Illustration - Design Studio with Butterflies */}
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
                <svg viewBox="0 0 60 120" className="w-12 h-24 drop-shadow-lg">
                  <defs>
                    <linearGradient id="brushGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                  {/* Brush handle */}
                  <rect x="25" y="80" width="10" height="40" rx="5" fill="#8b4513" />
                  {/* Brush bristles */}
                  <ellipse cx="30" cy="70" rx="20" ry="15" fill="url(#brushGradient)" />
                  {/* Paint on bristles */}
                  <ellipse cx="30" cy="65" rx="15" ry="10" fill="#06b6d4" opacity="0.8" />
                </svg>
              </div>

              {/* Pencil */}
              <div className="absolute bottom-32 right-20 animate-tool-float-reverse">
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

              {/* Central Butterfly Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Large Butterfly */}
                  <div className="animate-butterfly-center">
                    <svg viewBox="0 0 200 200" className="w-48 h-48 animate-wing-flap-slow">
                      <defs>
                        <linearGradient id="logoButterflyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="50%" stopColor="#ec4899" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                      {/* Upper wings */}
                      <path
                        d="M100,40 Q70,20 40,60 Q20,100 60,120 Q100,140 140,120 Q180,100 160,60 Q140,20 100,40 Z"
                        fill="url(#logoButterflyGradient)"
                        opacity="0.9"
                        className="animate-wing-upper-slow"
                      />
                      {/* Lower wings */}
                      <path
                        d="M100,100 Q75,90 50,130 Q25,170 75,180 Q100,190 125,180 Q175,170 150,130 Q125,90 100,100 Z"
                        fill="url(#logoButterflyGradient)"
                        opacity="0.7"
                        className="animate-wing-lower-slow"
                      />
                      {/* Body */}
                      <ellipse cx="100" cy="110" rx="5" ry="40" fill="#1a202c" />
                      {/* Antennae */}
                      <line x1="96" y1="70" x2="90" y2="50" stroke="#1a202c" strokeWidth="2" />
                      <line x1="104" y1="70" x2="110" y2="50" stroke="#1a202c" strokeWidth="2" />
                    </svg>
                  </div>

                  {/* Logo Text */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-purple-200">
                      <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        YOME DESIGN
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Design Elements with Butterflies */}
              {[
                { x: 15, y: 25, tool: 'brush', color: '#ff6b6b', delay: 0 },
                { x: 75, y: 35, tool: 'pen', color: '#4ecdc4', delay: 0.8 },
                { x: 35, y: 75, tool: 'palette', color: '#45b7d1', delay: 1.6 },
                { x: 85, y: 65, tool: 'marker', color: '#96ceb4', delay: 2.4 }
              ].map((item, index) => (
                <div
                  key={index}
                  className="absolute animate-design-element-float"
                  style={{
                    left: `${item.x}%`,
                    top: `${item.y}%`,
                    animationDelay: `${item.delay}s`,
                  }}
                >
                  {/* Small design tool icon */}
                  <div className="w-6 h-6 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center mb-2">
                    {item.tool === 'brush' && <div className="w-3 h-3 bg-purple-500 rounded-full"></div>}
                    {item.tool === 'pen' && <div className="w-3 h-0.5 bg-blue-500"></div>}
                    {item.tool === 'palette' && <div className="w-2 h-2 bg-red-500 rounded"></div>}
                    {item.tool === 'marker' && <div className="w-2 h-3 bg-green-500 rounded"></div>}
                  </div>
                  {/* Tiny butterfly */}
                  <svg viewBox="0 0 30 30" className="w-6 h-6 animate-wing-flap">
                    <path d="M15,6 Q11,3 7,9 Q3,15 11,18 Q15,21 19,18 Q27,15 23,9 Q19,3 15,6 Z" fill={item.color} opacity="0.7" />
                    <ellipse cx="15" cy="16" rx="1" ry="6" fill="#2d3748" />
                  </svg>
                </div>
              ))}
            </div>

            {/* Floating Design Inspiration Particles */}
            <div className="absolute inset-0">
              {[...Array(25)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-1 h-1 rounded-full animate-dust-float opacity-60 ${
                    i % 4 === 0 ? 'bg-purple-400' :
                    i % 4 === 1 ? 'bg-pink-400' :
                    i % 4 === 2 ? 'bg-blue-400' : 'bg-green-400'
                  }`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${Math.random() * 10 + 5}s`,
                  }}
                />
              ))}
            </div>

            {/* Design Grid Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
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

        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes blob-reverse {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-30px, 50px) scale(0.9); }
          66% { transform: translate(20px, -20px) scale(1.1); }
        }

        @keyframes plant-wave {
          0%, 100% { transform: rotate(var(--rotation)) translateY(var(--translate)); }
          50% { transform: rotate(calc(var(--rotation) + 5deg)) translateY(calc(var(--translate) - 5px)); }
        }

        @keyframes person-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes head-bob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        @keyframes wave {
          0% { transform: translateX(0%); }
          50% { transform: translateX(-2%); }
          100% { transform: translateX(0%); }
        }

        @keyframes text-glow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.3)); }
          50% { filter: drop-shadow(0 0 20px rgba(236, 72, 153, 0.5)); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.4); }
          50% { box-shadow: 0 0 40px rgba(236, 72, 153, 0.6); }
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

        @keyframes line-sweep {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
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
      `}} />
    </section>
  );
};

export default AboutUsMinimal;