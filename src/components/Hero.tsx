import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import heroProducts from "@/assets/hero-products.jpg";


const Hero = () => {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageSlide, setCurrentImageSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const slides = [
    {
      title: "Design Your Dreams",
      subtitle: "Create custom apparel that tells your story",
      gradient: "from-purple-600 via-pink-600 to-red-600",
    },
    {
      title: "Unleash Creativity",
      subtitle: "Professional design tools at your fingertips",
      gradient: "from-purple-600 via-violet-600 to-blue-600",
    },
    {
      title: "Print Perfection",
      subtitle: "High-quality printing on premium products",
      gradient: "from-purple-600 via-indigo-600 to-cyan-600",
    },
  ];

  // Particle animation for background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];

    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
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

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `${particle.color}30`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/80 to-slate-900">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-20"
      />

      {/* Dynamic Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} opacity-10 transition-all duration-1000`} />

      {/* Enhanced Floating Shapes */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-40 right-20 w-60 h-60 bg-pink-600/15 rounded-full blur-3xl animate-float-slower" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl animate-float-slow" />

      {/* Animated Stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`text-center lg:text-left space-y-8 ${isRTL ? 'lg:text-right' : ''}`}>
            {/* <div className="inline-block animate-bounce-slow">
              <span className="px-8 py-4 bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-lg rounded-full text-white font-bold border border-white/30 shadow-2xl flex items-center gap-3 text-lg tracking-wide">
                <Sparkles className="h-5 w-5 animate-spin-slow" />
                Yome - Design Your Dreams
                <Sparkles className="h-5 w-5 animate-spin-slow" />
              </span>
            </div> */}

            <div className="space-y-6">
              <div className="relative">
                <h1 className="text-4xl md:text-6xl font-black text-white leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-gradient">
                  {t.hero[`title${currentSlide + 1}` as keyof typeof t.hero]}
                </h1>
              </div>

              <p className="text-2xl md:text-3xl text-white/80 font-light leading-relaxed">
                {t.hero[`subtitle${currentSlide + 1}` as keyof typeof t.hero]}
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-6 justify-center lg:justify-start ${isRTL ? 'lg:justify-end' : ''}`}>
              <Button
                size="lg"
                onClick={() => navigate("/designer")}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-2xl shadow-purple-500/25 text-xl px-10 py-7 rounded-2xl border-0 transform hover:scale-105 hover:shadow-3xl hover:shadow-purple-500/40 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-3">
                  {t.hero.startDesigning}
                  <ArrowRight className={`h-6 w-6 transition-transform duration-300 ${isHovered ? (isRTL ? '-translate-x-1' : 'translate-x-1') : ''}`} />
                </span>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white/50  hover:bg-white/20 backdrop-blur-lg text-xl px-10 py-7 rounded-2xl hover:scale-105 transition-all duration-300 group"
              >
                <span className="flex items-center gap-3">
                  <Play className="h-5 w-5" />
                  {t.hero.watchDemo}
                </span>
              </Button>
            </div>

            {/* Enhanced Slide Indicators */}
            <div className={`flex gap-3 justify-center lg:justify-start items-center ${isRTL ? 'lg:justify-end' : ''}`}>
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative group transition-all duration-500 ${
                    index === currentSlide ? "scale-125" : "scale-100"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    index === currentSlide 
                      ? "bg-white border-white scale-125" 
                      : "border-white/50 hover:border-white"
                  }`} />
                  <div className={`absolute inset-0 rounded-full bg-white/20 animate-ping ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Product Image */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
            
            {/* Main Image Container */}
            <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-700">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="relative w-full h-96 flex items-center justify-center ">
                  <img
                    src={heroProducts}
                    alt="Custom designed products"
                    className={`absolute w-full max-w-full h-auto max-h-full object-contain transform group-hover:scale-110 transition-transform duration-1000 ${
                      currentImageSlide === 0 ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>

                {/* Shine Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold shadow-lg shadow-purple-500/30 animate-bounce hover:scale-110 transition-transform duration-300">
                <Star className="h-4 w-4 inline mr-1 animate-spin" />
                New!
              </div>
              
              {/* <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">
                🔥 Trending
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L48 105C96 90 192 60 288 45C384 30 480 30 576 37.5C672 45 768 60 864 67.5C960 75 1056 75 1152 67.5C1248 60 1344 45 1392 37.5L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="hsl(var(--background))"
          />
          <path
            d="M0 100L48 90C96 80 192 60 288 50C384 40 480 40 576 45C672 50 768 60 864 65C960 70 1056 70 1152 65C1248 60 1344 50 1392 45L1440 40V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="hsl(var(--background))"
            fillOpacity="0.7"
          />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;