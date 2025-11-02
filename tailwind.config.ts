import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-card': 'var(--gradient-card)',
      },
      boxShadow: {
        'glow': 'var(--shadow-glow)',
        'card': 'var(--shadow-card)',
        'elevated': 'var(--shadow-elevated)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" }
        },
        "slide": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }
        },
        "orb-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.2" },
          "50%": { transform: "scale(1.2)", opacity: "0.3" }
        },
        "orb-drift": {
          "0%, 100%": { transform: "translate(0px, 0px) rotate(0deg)" },
          "33%": { transform: "translate(30px, -20px) rotate(120deg)" },
          "66%": { transform: "translate(-15px, 15px) rotate(240deg)" }
        },
        "rotate-3d": {
          "0%": { transform: "rotateY(0deg) rotateX(0deg)" },
          "100%": { transform: "rotateY(360deg) rotateX(360deg)" }
        },
        "gradient-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        },
        "typewriter": {
          from: { width: "0" },
          to: { width: "100%" }
        },
        "text-flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" }
        },
        "particle-burst": {
          "0%": { transform: "translate(-50%, -50%) rotate(var(--burst-angle)) translate(0) scale(0)", opacity: "1" },
          "100%": { transform: "translate(-50%, -50%) rotate(var(--burst-angle)) translate(100px) scale(1)", opacity: "0" }
        },
        "shine": {
          "0%": { transform: "translateX(-100%) skewX(-15deg)" },
          "100%": { transform: "translateX(200%) skewX(-15deg)" }
        },
        "scene-rotate": {
          "0%, 100%": { transform: "rotate3d(1, 1, 1, 0deg)" },
          "33%": { transform: "rotate3d(1, 2, 1, 5deg)" },
          "66%": { transform: "rotate3d(2, 1, 1, -5deg)" }
        },
        "float-spin": {
          "0%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(180deg)" },
          "100%": { transform: "translateY(0px) rotate(360deg)" }
        },
        "bounce-rotate": {
          "0%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(180deg)" },
          "100%": { transform: "translateY(0px) rotate(360deg)" }
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)" }
        },
        "shake-spin": {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(90deg)" },
          "50%": { transform: "rotate(180deg)" },
          "75%": { transform: "rotate(270deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "text-float": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" }
        },
        "number-count": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "button-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" }
        },
        "stat-pop": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "feature-enter": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        "text-shimmer": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" }
        },
        "width-grow-pulse": {
          "0%": { width: "0%" },
          "50%": { width: "100%" },
          "100%": { width: "24rem" }
        },
        "float-spin-reverse": {
          "0%": { transform: "translateY(0px) rotate(360deg)" },
          "50%": { transform: "translateY(-10px) rotate(180deg)" },
          "100%": { transform: "translateY(0px) rotate(0deg)" }
        },
        "pulse-orb": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.2)", opacity: "1" }
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" }
        },
        "float-slow": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
          "100%": { transform: "translateY(0px)" }
        },
        "float-slower": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
          "100%": { transform: "translateY(0px)" }
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        "text-glow": {
          "0%": { textShadow: "0 0 10px rgba(255, 255, 255, 0.5)" },
          "50%": { textShadow: "0 0 20px rgba(255, 255, 255, 0.8)" },
          "100%": { textShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-left": "fade-in-left 0.6s ease-out",
        "fade-in-right": "fade-in-right 0.6s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        "float": "float 3s ease-in-out infinite",
        "slide": "slide 40s linear infinite",
        "orb-pulse": "orb-pulse 8s ease-in-out infinite",
        "orb-pulse-reverse": "orb-pulse 8s ease-in-out infinite reverse",
        "orb-drift": "orb-drift 20s ease-in-out infinite",
        "orb-drift-reverse": "orb-drift 20s ease-in-out infinite reverse",
        "rotate-3d": "rotate-3d 10s linear infinite",
        "gradient-flow": "gradient-flow 4s ease infinite",
        "typewriter": "typewriter 3s steps(40, end)",
        "text-flicker": "text-flicker 2s ease-in-out infinite",
        "particle-burst": "particle-burst 2s ease-out infinite",
        "shine": "shine 3s ease-in-out infinite",
        "scene-rotate": "scene-rotate 15s ease-in-out infinite",
        "float-spin": "float-spin 4s ease-in-out infinite",
        "bounce-rotate": "bounce-rotate 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "shake-spin": "shake-spin 1s ease-in-out infinite",
        "text-float": "text-float 5s ease-in-out infinite",
        "text-float-reverse": "text-float 5s ease-in-out infinite reverse",
        "text-float-slow": "text-float 7s ease-in-out infinite",
        "number-count": "number-count 0.5s ease-out",
        "button-pulse": "button-pulse 2s ease-in-out infinite",
        "stat-pop": "stat-pop 0.5s ease-out",
        "feature-enter": "feature-enter 0.6s ease-out",
        "text-shimmer": "text-shimmer 3s linear infinite",
        "width-grow-pulse": "width-grow-pulse 1s ease-out",
        "float-spin-reverse": "float-spin-reverse 4s ease-in-out infinite",
        "pulse-orb": "pulse-orb 3s ease-in-out infinite",
        "spin-slow": "spin-slow 8s linear infinite",
        "spin-reverse": "spin-reverse 8s linear infinite",
        "float-slow": "float-slow 4s ease-in-out infinite",
        "float-slower": "float-slower 6s ease-in-out infinite",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "text-glow": "text-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
