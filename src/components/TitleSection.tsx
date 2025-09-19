import { useEffect, useRef, useState } from "react";
import tokenImage from "@/assets/token-image.png";

const TitleSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterComplete, setTypewriterComplete] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Delay the typewriter effect
          setTimeout(() => setTypewriterComplete(true), 1000);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="title"
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-background via-background-secondary to-background-tertiary relative overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>


      <div className="container mx-auto max-w-5xl text-center relative z-10">
        {/* Main Title */}
        <div 
          className={`mb-8 transition-all duration-1000 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Floating Token */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img
                src={tokenImage}
                alt="KittehCoin Token"
                className="w-40 h-40 md:w-48 md:h-48 floating-coin"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-lg" />
            </div>
          </div>

          {/* Title with Typewriter Effect */}
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            <span className="text-foreground">KITTEH</span>
            <span className="text-primary">COIN</span>
            <span className="text-foreground"> (</span>
            <span className="text-secondary">$MEOW</span>
            <span className="text-foreground">)</span>
          </h1>

          {/* Typewriter Subtitle */}
          <div className="h-16 flex items-center justify-center">
            {typewriterComplete ? (
              <p className="text-2xl md:text-3xl text-primary font-bold typewriter">
                Your Mom's Favorite Cat Coin
              </p>
            ) : (
              <div className="w-8 h-8 border-2 border-primary rounded-full animate-spin" />
            )}
          </div>
        </div>

        {/* Subtitle */}
        <div 
          className={`transition-all duration-1000 delay-500 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The premiere peer-to-peer internet currency powered by{" "}
            <span className="text-primary font-bold">CATS</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default TitleSection;