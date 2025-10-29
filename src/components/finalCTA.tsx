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

 
        {/* Footer */}
        <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
          {/* Floating Shapes */}
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
        </footer>
      </section>
    );
 };

export default Testimonials;