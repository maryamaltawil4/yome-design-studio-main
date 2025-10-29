import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
  Star,
  Quote,
  ArrowRight,
  Sparkles,
  Heart,
  Zap,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Target,
  Users,
  Rocket,
  Award,
  Globe,
  Palette,
  Shield,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  MapPin,
  Phone,
  Truck,
  HeadphonesIcon
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

      particles.forEach((particle) => {
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

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Graphic Designer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&h=120&fit=crop&crop=face",
      content: "Yome has completely transformed how I showcase my designs. The print quality is exceptional and the design process is incredibly smooth!",
      rating: 5,
      product: "Premium T-Shirts",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Mike Chen",
      role: "Small Business Owner",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
      content: "As a small business, Yome helped us create professional merchandise without the huge upfront costs. Absolute game changer for our brand!",
      rating: 5,
      product: "Hoodies & Mugs",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Emily Rodriguez",
      role: "Content Creator",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
      content: "The 3D preview feature is incredible. My audience loves the custom merch and the quality always exceeds expectations. Highly recommended!",
      rating: 5,
      product: "Custom Apparel",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Alex Thompson",
      role: "Event Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
      content: "Ordered custom hoodies for our team event. The process was seamless and the products arrived faster than expected. Will definitely order again!",
      rating: 5,
      product: "Team Hoodies",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Jessica Williams",
      role: "Art Teacher",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&h=120&fit=crop&crop=face",
      content: "My students loved creating their own designs. The platform is so intuitive and the final products looked even better than we imagined!",
      rating: 5,
      product: "Student Projects",
      color: "from-yellow-500 to-amber-500",
    },
    {
      name: "David Kim",
      role: "Startup Founder",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=120&h=120&fit=crop&crop=face",
      content: "Perfect for startup branding. We got professional-looking merch that didn't break the bank. The quality rivals big brands at half the price.",
      rating: 5,
      product: "Brand Merch",
      color: "from-indigo-500 to-purple-500",
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Creativity",
      description: "We believe everyone has a creative spark waiting to be unleashed",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Customer First",
      description: "Your satisfaction is our ultimate goal and measure of success",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Building a platform where creators connect and inspire each other",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Constantly pushing boundaries in custom product design technology",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const milestones = [
    { year: "2020", event: "Yome Founded", description: "Started with a vision to democratize custom design" },
    { year: "2021", event: "10K Users", description: "Reached our first major milestone with amazing community support" },
    { year: "2022", event: "3D Designer Launch", description: "Revolutionary 3D preview technology introduced" },
    { year: "2023", event: "50K+ Community", description: "Become the trusted platform for creators worldwide" },
    { year: "2024", event: "AI Integration", description: "Next-gen AI design tools launched" }
  ];

  const teamStats = [
    { number: "15+", label: "Team Members", icon: Users },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "100K+", label: "Designs Created", icon: Palette },
    { number: "99.9%", label: "Uptime", icon: Zap }
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-background dark:from-slate-900/20">
      {/* About Us Section */}
      <div className="container mx-auto max-w-7xl mb-20">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full text-white mb-6 shadow-lg text-sm md:text-base">
            <Sparkles className="h-4 w-4" />
            <span className="font-semibold">Our Story</span>
            <Award className="h-4 w-4" />
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            About Yome
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're on a mission to make custom product design
            <span className="font-semibold text-transparent bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text"> accessible to everyone </span>
            while maintaining professional quality and unmatched creativity.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 mb-20">
          {/* Story Section */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/30 rounded-full text-blue-700 dark:text-blue-300 mb-4">
              <Rocket className="h-4 w-4" />
              <span className="font-medium">Our Journey</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              From Vision to Reality
            </h3>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Yome was born from a simple observation: creating custom products should be
                <span className="font-semibold text-foreground"> joyful, not complicated.</span>
                Traditional custom printing services were either too expensive, too complex, or too limited.
              </p>

              <p>
                We set out to build a platform that combines
                <span className="font-semibold text-foreground"> professional-grade quality </span>
                with an intuitive, fun design experience. Today, we're proud to serve a global community
                of artists, entrepreneurs, and creators.
              </p>

              <p>
                Our 3D preview technology and AI-assisted design tools are just the beginning.
                We're constantly innovating to make your creative journey even more magical.
              </p>
            </div>

            {/* Team Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {teamStats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/50 dark:bg-slate-800/30 rounded-xl backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                  <div className="flex justify-center mb-2">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      <stat.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-950/30 rounded-full text-green-700 dark:text-green-300 mb-4">
              <Target className="h-4 w-4" />
              <span className="font-medium">Our Values</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              What Drives Us
            </h3>

            <div className="grid gap-4">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="group p-6 border-0 bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${value.color} group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground mb-2">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>



        {/* CTA Section */}
        <Card className="text-center p-8 md:p-12 border-0 bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create With Us?
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who are already designing amazing custom products with Yome
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 group"
              >
                <span className="flex items-center gap-3">
                  Start Designing
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-2xl backdrop-blur-sm"
              >
                Meet The Team
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Enhanced Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full text-white mb-4 md:mb-6 shadow-lg text-sm md:text-base">
            <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
            <span className="font-semibold">Loved by Creators Worldwide</span>
            <Heart className="h-3 w-3 md:h-4 md:w-4 fill-current" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent px-4">
            Loved by Creative Minds
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed">
            Join <span className="font-semibold text-transparent bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text">50,000+ creators</span> who trust Yome for their custom products
          </p>
        </div>

        {/* Enhanced Testimonials Carousel */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-16 px-2">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            plugins={[plugin.current]}
            className="w-full relative"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="p-1">
                    <Card className="group relative p-4 md:p-6 border-0 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 h-full hover:scale-[1.02] overflow-hidden">
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500`} />
                      
                      {/* Quote Icon */}
                      <div className={`absolute top-3 right-3 p-2 rounded-lg bg-gradient-to-r ${testimonial.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        <Quote className="h-4 w-4 md:h-5 md:w-5 text-white" />
                      </div>
                      
                      {/* Rating */}
                      <div className="flex gap-0.5 mb-3 md:mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="text-xs md:text-sm font-medium text-amber-600 ml-1">
                          {testimonial.rating}.0
                        </span>
                      </div>
                      
                      {/* Content */}
                      <p className="text-foreground text-sm md:text-base leading-relaxed mb-4 md:mb-6 line-clamp-4">
                        "{testimonial.content}"
                      </p>
                      
                      {/* Author & Stats */}
                      <div className="flex items-start gap-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0 border-2 border-slate-200"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <div>
                              <h4 className="font-bold text-foreground text-sm md:text-base truncate">
                                {testimonial.name}
                              </h4>
                              <p className="text-muted-foreground text-xs md:text-sm">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                          <p className="text-primary text-xs md:text-sm font-medium mt-1 truncate">
                            {testimonial.product}
                          </p>
                        </div>
                      </div>

                      {/* Fixed Hover Border Effect */}
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${testimonial.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 overflow-hidden`}>
                        <div className="absolute inset-[1px] rounded-xl bg-background" />
                      </div>

                      {/* Alternative Border Solution - Use this if above still has issues */}
                      {/* <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${testimonial.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-95`}>
                        <div className="absolute inset-[1px] rounded-xl bg-background" />
                      </div> */}
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative static transform-none -translate-y-0 bg-white/80 backdrop-blur-sm border-slate-200 hover:bg-white text-slate-800 h-10 w-10 rounded-full shadow-lg">
                <ChevronLeft className="h-5 w-5" />
              </CarouselPrevious>
              <CarouselNext className="relative static transform-none -translate-y-0 bg-white/80 backdrop-blur-sm border-slate-200 hover:bg-white text-slate-800 h-10 w-10 rounded-full shadow-lg">
                <ChevronRight className="h-5 w-5" />
              </CarouselNext>
            </div>
          </Carousel>
        </div>
      </div>

      {/* Enhanced Stats Section - Full Width */}
      <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Top Creative Curve */}
          <div className="absolute top-0 left-0 right-0 transform -translate-y-1">
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
                fillOpacity="0.5"
              />
            </svg>
          </div>
          {/* Animated Canvas Background */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 opacity-20"
          />

          {/* Dynamic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 opacity-10 transition-all duration-1000" />

          {/* Enhanced Floating Shapes */}
          <div className="absolute top-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-40 right-20 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl animate-float-slower" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-40 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-slow" />

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

          <div className="relative z-10">
            <div className="text-center mb-4 md:mb-9">
              <h3 className="text-2xl md:text-4xl text-white font-bold mb-3 md:mb-4">
                Trusted by Creators Worldwide
              </h3>
              <p className="text-slate-300 text-sm md:text-lg max-w-2xl mx-auto">
                Join our growing community of designers, artists, and brands
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
              {[
                { number: "50K+", label: "Happy Customers", icon: Heart, color: "from-red-500 to-pink-500" },
                { number: "100K+", label: "Designs Created", icon: Sparkles, color: "from-purple-500 to-indigo-500" },
                { number: "4.9/5", label: "Average Rating", icon: Star, color: "from-amber-500 to-orange-500" },
                { number: "24h", label: "Fast Delivery", icon: Zap, color: "from-green-500 to-emerald-500" }
              ].map((stat, index) => (
                <div key={index} className="group relative flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r ${stat.color} p-1 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-slate-300 font-medium text-center">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-8 md:mt-12">
              <Button 
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-xl md:rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 group"
              >
                <span className="flex items-center gap-2 md:gap-3">
                  Join Our Community
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
              <p className="text-slate-400 text-xs md:text-sm mt-4">
                No credit card required • Start designing in seconds
              </p>
            </div>
          </div>
        </div>
 
        {/* Footer */}
        <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
          {/* Features Bar */}
          <div className="border-b border-slate-800">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "Secure Payment",
                    description: "256-bit SSL encryption"
                  },
                  {
                    icon: Truck,
                    title: "Free Shipping",
                    description: "On orders over $50"
                  },
                  {
                    icon: HeadphonesIcon,
                    title: "24/7 Support",
                    description: "Live chat & email"
                  },
                  {
                    icon: Sparkles,
                    title: "Quality Guarantee",
                    description: "30-day money back"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                      <feature.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{feature.title}</h4>
                      <p className="text-slate-400 text-xs">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
 
          {/* Main Footer Content */}
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              {/* Brand Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                    Yome
                  </span>
                </div>
 
                <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                  Empowering creators worldwide to bring their ideas to life with
                  premium custom products and intuitive design tools.
                </p>
 
                {/* Newsletter Signup */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-white">Stay Updated</h4>
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-slate-700 placeholder-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl transition-all duration-300 group">
                      <span className="flex items-center gap-2">
                        Subscribe
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Get the latest updates, design tips, and exclusive offers
                  </p>
                </div>
 
                {/* Contact Info */}
                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3 text-slate-300">
                    <Mail className="h-4 w-4 text-blue-400" />
                    <span>hello@yome.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Phone className="h-4 w-4 text-blue-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-300">
                    <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                    <span>123 Creative Street<br />Design City, DC 12345</span>
                  </div>
                </div>
              </div>
 
              {/* Links Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  {
                    title: "Products",
                    links: [
                      { name: "Custom T-Shirts", href: "/products/tshirts" },
                      { name: "Premium Hoodies", href: "/products/hoodies" },
                      { name: "Coffee Mugs", href: "/products/mugs" },
                      { name: "Tote Bags", href: "/products/bags" },
                      { name: "Phone Cases", href: "/products/phone-cases" },
                      { name: "All Products", href: "/products" }
                    ]
                  },
                  {
                    title: "Company",
                    links: [
                      { name: "About Us", href: "/about" },
                      { name: "Our Story", href: "/story" },
                      { name: "Careers", href: "/careers" },
                      { name: "Press Kit", href: "/press" },
                      { name: "Contact", href: "/contact" },
                      { name: "Blog", href: "/blog" }
                    ]
                  },
                  {
                    title: "Support",
                    links: [
                      { name: "Help Center", href: "/help" },
                      { name: "Shipping Info", href: "/shipping" },
                      { name: "Returns", href: "/returns" },
                      { name: "Size Guide", href: "/size-guide" },
                      { name: "Design Guidelines", href: "/design-guide" },
                      { name: "Privacy Policy", href: "/privacy" }
                    ]
                  },
                  {
                    title: "Resources",
                    links: [
                      { name: "Design Inspiration", href: "/inspiration" },
                      { name: "Templates", href: "/templates" },
                      { name: "Design Tools", href: "/tools" },
                      { name: "API Documentation", href: "/api" },
                      { name: "Partners", href: "/partners" },
                      { name: "Affiliate Program", href: "/affiliate" }
                    ]
                  }
                ].map((section, index) => (
                  <div key={index} className="space-y-4">
                    <h4 className="font-semibold text-white text-lg">{section.title}</h4>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="text-slate-400 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
 
            {/* Social & Bottom Bar */}
            <div className="border-t border-slate-800 pt-8">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                {/* Copyright */}
                <div className="flex items-center gap-4 text-slate-400 text-sm">
                  <span>© {new Date().getFullYear()} Yome. All rights reserved.</span>
                  <div className="flex gap-4">
                    <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
                    <a href="/terms" className="hover:text-white transition-colors">Terms</a>
                    <a href="/cookies" className="hover:text-white transition-colors">Cookies</a>
                  </div>
                </div>
 
                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <span className="text-slate-400 text-sm">Follow us:</span>
                  <div className="flex gap-3">
                    {[
                      { icon: Twitter, href: "#", color: "hover:text-blue-400" },
                      { icon: Instagram, href: "#", color: "hover:text-pink-400" },
                      { icon: Facebook, href: "#", color: "hover:text-blue-500" },
                      { icon: Youtube, href: "#", color: "hover:text-red-500" }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`p-2 rounded-lg bg-white/10 text-slate-400 ${social.color} hover:bg-white/20 transition-all duration-300`}
                      >
                        <social.icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
 
                {/* Made with love */}
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <span>Made with</span>
                  <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                  <span>for creators worldwide</span>
                </div>
              </div>
            </div>
          </div>
 
          {/* Trust Badges */}
          <div className="bg-slate-800/50 border-t border-slate-700">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-6 text-slate-400 text-sm">
                  <span>Trusted by 50,000+ creators</span>
                  <div className="w-px h-4 bg-slate-700"></div>
                  <span>4.9/5 ★ Average Rating</span>
                </div>
 
                <div className="flex items-center gap-4">
                  {/* Payment Methods */}
                  <div className="flex items-center gap-2 text-slate-400 text-xs">
                    <span>We accept:</span>
                    <div className="flex gap-1">
                      {["Visa", "Mastercard", "PayPal", "Apple Pay"].map((method, index) => (
                        <span key={index} className="px-2 py-1 bg-white/10 rounded text-slate-300">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
 };

export default Testimonials;