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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "hero-breathe": {
          "0%, 100%": { 
            transform: "translateY(0px) scale(1)",
            filter: "brightness(1)"
          },
          "50%": { 
            transform: "translateY(-15px) scale(1.02)",
            filter: "brightness(1.1)"
          },
        },
        "particle-orbit": {
          "0%": { 
            transform: "translateX(0px) translateY(0px) rotate(0deg)",
            opacity: "0.6"
          },
          "25%": { 
            transform: "translateX(50px) translateY(-30px) rotate(90deg)",
            opacity: "1"
          },
          "50%": { 
            transform: "translateX(0px) translateY(-60px) rotate(180deg)",
            opacity: "0.8"
          },
          "75%": { 
            transform: "translateX(-50px) translateY(-30px) rotate(270deg)",
            opacity: "1"
          },
          "100%": { 
            transform: "translateX(0px) translateY(0px) rotate(360deg)",
            opacity: "0.6"
          },
        },
        "coin-float": {
          "0%, 100%": {
            transform: "translateY(0px) rotateY(0deg)",
            opacity: "0.8"
          },
          "33%": {
            transform: "translateY(-20px) rotateY(120deg)",
            opacity: "1"
          },
          "66%": {
            transform: "translateY(-10px) rotateY(240deg)",
            opacity: "0.9"
          },
        },
        "sparkle-twinkle": {
          "0%, 100%": { 
            opacity: "0.3",
            transform: "scale(0.8) rotate(0deg)"
          },
          "50%": { 
            opacity: "1",
            transform: "scale(1.2) rotate(180deg)"
          },
        },
        "timeline-draw": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
        "typing": {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        "blink-caret": {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "hsl(var(--primary))" },
        },
        "slide-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-100px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          },
        },
        "slide-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(100px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          },
        },
        "scale-bounce": {
          "0%": {
            transform: "scale(0.3)",
            opacity: "0"
          },
          "50%": {
            transform: "scale(1.05)"
          },
          "70%": {
            transform: "scale(0.9)"
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1"
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 20px hsl(var(--primary) / 0.4)"
          },
          "50%": {
            boxShadow: "0 0 40px hsl(var(--primary) / 0.8), 0 0 60px hsl(var(--primary) / 0.4)"
          },
        },
        "fadeInUp": {
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "gradient-shift": {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(10deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "hero-breathe": "hero-breathe 4s ease-in-out infinite",
        "particle-orbit": "particle-orbit 12s linear infinite",
        "coin-float": "coin-float 8s ease-in-out infinite",
        "sparkle-twinkle": "sparkle-twinkle 2s ease-in-out infinite",
        "timeline-draw": "timeline-draw 2s ease-out forwards",
        "typing": "typing 3s steps(40, end)",
        "blink-caret": "blink-caret 0.75s step-end infinite",
        "slide-in-left": "slide-in-left 0.8s ease-out forwards",
        "slide-in-right": "slide-in-right 0.8s ease-out forwards",
        "scale-bounce": "scale-bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "fadeInUp": "fadeInUp 0.6s ease-out forwards",
        "gradient-shift": "gradient-shift 3s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
