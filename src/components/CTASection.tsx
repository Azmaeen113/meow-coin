import { Button } from "@/components/ui/button";
import { TrendingUp, Twitter, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="py-24 px-6 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/energy.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        {/* Main heading */}
        <div className="mb-16">
          <div className="text-center mb-12">
            {/* Dogs side - single line */}
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black mb-6 whitespace-nowrap">
                <span className="text-muted-foreground">The Dogs Had Their </span>
                <span className="text-destructive">Run</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-destructive to-transparent mx-auto"></div>
            </div>
          </div>
        </div>
        
        {/* Central message */}
        <div className="mb-16">
          <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-8">
            Now it's time to finish the story.
          </p>
          
          {/* Elegant divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <ArrowRight className="w-5 h-5 text-primary" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-foreground">Join the </span>
            <span className="text-secondary">Cat Comeback</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Be part of meme coin history. From 2013 to the throne.
          </p>
        </div>

        {/* Modern Action buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-12 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 group"
          >
            <a
              href="https://dexscreener.com/solana/edyajarhhwyy2yozb8ubxfdkjeewbjy1axsstet4gykk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <TrendingUp className="w-6 h-6 group-hover:animate-bounce" />
              View the Chart
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-primary/50 text-primary hover:bg-primary hover:text-white font-semibold px-12 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105 group backdrop-blur-sm"
          >
            <a
              href="https://x.com/KittehCoinCTO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Twitter className="w-6 h-6 group-hover:animate-bounce" />
              Follow Us on X
            </a>
          </Button>
        </div>

        {/* Elegant bottom section */}
        <div className="max-w-4xl mx-auto">
          <div className="premium-card p-12 rounded-3xl">
            <h4 className="text-3xl md:text-4xl font-bold prophecy-text mb-6">
              The internet was always made for cats.
            </h4>
            <p className="text-xl text-muted-foreground">
              Now the blockchain is too.
            </p>
            
            {/* Decorative elements */}
            <div className="flex justify-center items-center gap-8 mt-8">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;