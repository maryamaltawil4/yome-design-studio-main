import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Palette, Languages } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { language, setLanguage, t, isRTL } = useLanguage();

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-lg border-b border-slate-800 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-lg ${isRTL ? 'rtl' : ''}`} >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src="/src/assets/ue-logo.png" alt="UE Logo" className="w-14 h-14 rounded-lg" />
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <a href="#products" className="text-white hover:text-purple-300 transition-all duration-300 font-medium relative group">
              {t.nav.products}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#designs" className="text-white hover:text-purple-300 transition-all duration-300 font-medium relative group">
              {t.nav.designs}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#features" className="text-white hover:text-purple-300 transition-all duration-300 font-medium relative group">
              {t.nav.features}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </a>

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-2 px-3 py-2 text-white hover:text-purple-300 transition-all duration-300 rounded-lg hover:bg-slate-800/50"
              aria-label="Toggle language"
            >
              <Languages className="h-4 w-4" />
              <span className="text-sm font-medium uppercase">{language === 'en' ? 'عربي' : 'EN'}</span>
            </button>

            <Button
              onClick={() => navigate("/designer")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
            >
              {t.nav.startDesigning}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white transform rotate-180 transition-all duration-300" />
            ) : (
              <Menu className="h-6 w-6 text-white hover:text-purple-300 transition-colors duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in bg-slate-800/95 backdrop-blur-lg rounded-lg border border-slate-700 shadow-xl">
            <a
              href="#products"
              className="block text-white hover:text-purple-300 transition-colors font-medium px-4 py-2 hover:bg-slate-700/50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.products}
            </a>
            <a
              href="#designs"
              className="block text-white hover:text-purple-300 transition-colors font-medium px-4 py-2 hover:bg-slate-700/50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.designs}
            </a>
            <a
              href="#features"
              className="block text-white hover:text-purple-300 transition-colors font-medium px-4 py-2 hover:bg-slate-700/50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.features}
            </a>

            {/* Language Toggle Mobile */}
            <button
              onClick={() => {
                setLanguage(language === 'en' ? 'ar' : 'en');
                setIsOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 text-white hover:text-purple-300 transition-colors font-medium hover:bg-slate-700/50 rounded-md w-full"
            >
              <Languages className="h-4 w-4" />
              <span className="text-sm font-medium uppercase">{language === 'en' ? 'عربي' : 'EN'}</span>
            </button>

            <div className="px-4 pt-2">
              <Button
                onClick={() => {
                  navigate("/designer");
                  setIsOpen(false);
                }}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
              >
                {t.nav.startDesigning}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
