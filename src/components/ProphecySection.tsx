import { useEffect, useRef, useState } from "react";
import catsSpellingMeow from "@/assets/cats-spelling-meow.png";

const ProphecySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const prophecyPoints = [
    {
      title: "KittehCoin Origins",
      text: "Born in December 2013, the same month as Dogecoin, KittehCoin was never meant to be the beta. It was the balance. The barbell. The feline force to counter the doge. 😼"
    },
    {
      title: "The Prophecy",
      text: "The internet is made of cats - now the blockchain is too. Cats dominate memes, now cats dominate cryptocurrency 😼"
    },
    {
      title: "The Revival",
      text: "After being buried by early Dogecoin FUD, KittehCoin has been relaunched — upgraded, declawed no more, and ready to pounce. It is the return of the rightful meme king 😼"
    },
    {
      title: "The Promise",
      text: "This is more than a meme. It is a mission. A movement. A meowvolution. KittehCoin is back to claw its way to the top because the internet was always made for cats. 😼"
    }
  ];

  return (
    <section 
      id="prophecy"
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-b from-background-secondary to-background relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-secondary/50 to-background/50" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-8 prophecy-text">
            THE PROPHECY
          </h2>
        </div>

        {/* Enhanced Prophecy Points */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {prophecyPoints.map((point, index) => {
            const animationClass = index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right";
            return (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible 
                    ? `opacity-100 ${animationClass}` 
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="premium-card p-8 group h-full relative overflow-hidden">
                  {/* Floating cat emoji */}
                  <div className="absolute top-4 right-4 text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce">
                    😼
                  </div>
                  
                  {/* Glowing title */}
                  <h3 className="text-xl font-bold text-primary mb-6 transition-all relative">
                    {point.title}
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </h3>
                  
                  {/* Enhanced text with sparkle effect */}
                  <p className="text-foreground leading-relaxed relative">
                    {point.text}
                  </p>
                  
                  {/* Sparkle effects */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-accent rounded-full sparkle"
                        style={{
                          left: `${20 + (i * 30)}%`,
                          top: `${30 + (i * 20)}%`,
                          animationDelay: `${i * 0.3}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced MEOW Visual */}
        <div 
          className={`text-center transition-all duration-1000 delay-800 ${
            isVisible 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-95"
          }`}
        >
          <div className="relative inline-block group">
            {/* Subtle background effect */}
            <div className="absolute inset-0 bg-primary/3 rounded-lg scale-105" />
            
            {/* Main image with reduced effects */}
            <img
              src={catsSpellingMeow}
              alt="Cats spelling MEOW - The ultimate cat cryptocurrency"
              className="w-full max-w-5xl mx-auto rounded-lg shadow-lg relative z-10 group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Subtle sparkles on hover only */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-accent rounded-full sparkle opacity-0 group-hover:opacity-60 transition-opacity"
                  style={{
                    left: `${20 + (i * 20)}%`,
                    top: `${30 + (i % 2) * 40}%`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Enhanced caption */}
          <div className="mt-8 space-y-2">
            <p className="text-2xl font-bold text-primary">
              THE ULTIMATE CAT CRYPTOCURRENCY
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Made from the internet's most legendary cat collection - now ruling the blockchain
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProphecySection;