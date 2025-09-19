import { Twitter, Github } from "lucide-react";
import tokenImage from "@/assets/token-image.png";

const Footer = () => {
  return (
    <footer className="bg-background-secondary border-t border-primary/20 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and tagline */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <img
              src={tokenImage}
              alt="KittehCoin"
              className="w-12 h-12 coin-spin"
            />
            <div>
              <span className="text-2xl font-bold text-primary">$MEOW</span>
              <p className="text-sm text-muted-foreground">
                The internet is made of cats
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <a
              href="https://x.com/KittehCoinCTO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/kittehcoin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://dexscreener.com/solana/edyajarhhwyy2yozb8ubxfdkjeewbjy1axsstet4gykk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary transition-colors font-semibold"
            >
              Buy $MEOW
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © 2025 KittehCoin. From 2013 to the throne.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              The meowvolution begins now 😼
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;