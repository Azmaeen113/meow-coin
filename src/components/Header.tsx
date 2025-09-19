import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import tokenImage from "@/assets/token-image.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-primary/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={tokenImage}
            alt="KittehCoin"
            className="w-10 h-10 coin-spin"
          />
          <span className="text-2xl font-bold text-primary">$MEOW</span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("home")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("memes")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Memes
          </button>
          <button
            onClick={() => scrollToSection("prophecy")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Prophecy
          </button>
          <button
            onClick={() => scrollToSection("timeline")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Timeline
          </button>
          <button
            onClick={() => scrollToSection("cta")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Join
          </button>
          <a
            href="https://x.com/KittehCoinCTO"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            X
          </a>
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary hover:to-secondary text-primary-foreground font-semibold px-6"
          >
            <a
              href="https://dexscreener.com/solana/edyajarhhwyy2yozb8ubxfdkjeewbjy1axsstet4gykk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy $MEOW
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            asChild
            size="sm"
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground"
          >
            <a
              href="https://dexscreener.com/solana/edyajarhhwyy2yozb8ubxfdkjeewbjy1axsstet4gykk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy $MEOW
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;