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
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { isRTL, t, language } = useLanguage();
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

  const testimonialsData = {
    en: [
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
    ],
    ar: [
      {
        name: "سارة جونسون",
        role: "مصمم جرافيك",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&h=120&fit=crop&crop=face",
        content: "يوم غير تمامًا طريقة عرض تصاميمي. جودة الطباعة استثنائية وعملية التصميم سلسة بشكل لا يصدق!",
        rating: 5,
        product: "تيشرتات مميزة",
        color: "from-purple-500 to-pink-500",
      },
      {
        name: "مايك تشين",
        role: "صاحب عمل صغير",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
        content: "كعمل صغير، ساعدنا يوم في إنشاء بضائع احترافية دون تكاليف مقدمة كبيرة. تغيير جذري مطلق لعلامتنا التجارية!",
        rating: 5,
        product: "هودي وأكواب",
        color: "from-blue-500 to-cyan-500",
      },
      {
        name: "إميلي رودريغيز",
        role: "منشئ محتوى",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
        content: "ميزة المعاينة ثلاثية الأبعاد رائعة. جمهوري يحب المنتجات المخصصة وأن الجودة تتجاوز دائمًا التوقعات. أوصي بشدة!",
        rating: 5,
        product: "ملابس مخصصة",
        color: "from-orange-500 to-red-500",
      },
      {
        name: "أليكس تومبسون",
        role: "مدير فعاليات",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
        content: "طلبت هودي مخصص لفعالية فريقنا. كانت العملية سلسة ووصلت المنتجات أسرع مما توقعت. سأطلب بالتأكيد مرة أخرى!",
        rating: 5,
        product: "هودي الفريق",
        color: "from-green-500 to-emerald-500",
      },
      {
        name: "جيسيكا ويليامز",
        role: "معلم فنون",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&h=120&fit=crop&crop=face",
        content: "طلابي أحبوا إنشاء تصاميمهم الخاصة. المنصة بديهية جدًا والمنتجات النهائية بدت أفضل مما تخيلنا!",
        rating: 5,
        product: "مشاريع الطلاب",
        color: "from-yellow-500 to-amber-500",
      },
      {
        name: "ديفيد كيم",
        role: "مؤسس شركة ناشئة",
        avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=120&h=120&fit=crop&crop=face",
        content: "مثالي لعلامات الشركات الناشئة. حصلنا على بضائع تبدو احترافية لم تكلفنا ثروة. الجودة تنافس العلامات الكبرى بنصف السعر.",
        rating: 5,
        product: "بضائع العلامة التجارية",
        color: "from-indigo-500 to-purple-500",
      }
    ]
  };

  const testimonials = testimonialsData[language];

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
            <span className="font-semibold">{t.testimonials.headerBadge}</span>
            <Heart className="h-3 w-3 md:h-4 md:w-4 fill-current" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent px-4">
            {t.testimonials.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed">
            {t.testimonials.subtitle}
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

 
        {/* Enhanced Footer with Floating Elements */}
        <footer className={`bg-gradient-to-r from-slate-50 via-purple-50 to-slate-100 border-t border-slate-200 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-800 dark:border-slate-800 relative overflow-hidden ${isRTL ? 'rtl' : ''}`}>
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-60"></div>
            <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping opacity-70"></div>
            <div className="absolute bottom-10 left-1/4 w-1 h-1 bg-purple-500 rounded-full animate-pulse opacity-50"></div>
            <div className="absolute bottom-20 right-1/3 w-2.5 h-2.5 bg-pink-300 rounded-full animate-bounce opacity-40"></div>
            <div className="absolute top-1/3 right-10 w-1 h-1 bg-purple-600 rounded-full animate-ping opacity-60"></div>
          </div>

          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent)]"></div>
          </div>

          <div className="container mx-auto px-4 py-8 relative">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 group cursor-pointer relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="w-8 h-8 rounded bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-purple-500/50 relative z-10">
                  <img src="/src/assets/ue-logo.png" alt="UE Logo" className="w-6 h-6 rounded animate-pulse" />
                </div>
                <span className="text-lg font-semibold text-slate-800 dark:text-slate-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-all duration-300 relative z-10 group-hover:animate-pulse">Yome</span>
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
                <a href="/about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 relative group">
                  {t.footer.about}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="/contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 relative group">
                  {t.footer.contact}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="/privacy" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 relative group">
                  {t.footer.privacy}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="/terms" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 relative group">
                  {t.footer.terms}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>

              <div className="flex items-center gap-4">
                <a href="#" className="text-slate-600 hover:text-white dark:text-slate-400 dark:hover:text-white transition-all duration-300 transform hover:scale-125 p-2 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/50 group">
                  <Twitter className="h-5 w-5 group-hover:animate-bounce" />
                </a>
                <a href="#" className="text-slate-600 hover:text-white dark:text-slate-400 dark:hover:text-white transition-all duration-300 transform hover:scale-125 p-2 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 hover:shadow-lg hover:shadow-pink-500/50 group">
                  <Instagram className="h-5 w-5 group-hover:animate-bounce" />
                </a>
                <a href="#" className="text-slate-600 hover:text-white dark:text-slate-400 dark:hover:text-white transition-all duration-300 transform hover:scale-125 p-2 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:shadow-blue-600/50 group">
                  <Facebook className="h-5 w-5 group-hover:animate-bounce" />
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-200/20 to-transparent dark:via-purple-800/20 animate-pulse"></div>
              <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2 relative z-10">
                <Heart className="h-4 w-4 fill-red-500 text-red-500 animate-bounce" />
                {t.footer.madeWith} {t.footer.forCreators} • © {new Date().getFullYear()} Yome. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </section>
    );
 };

export default Testimonials;