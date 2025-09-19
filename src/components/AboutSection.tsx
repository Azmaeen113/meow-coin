import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-b from-background to-background-secondary"
    >
      <div className="container mx-auto max-w-6xl">
        <div 
          className={`transition-all duration-1000 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">What is </span>
              <span className="text-primary">MEOW</span>
              <span className="text-foreground">?</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              The premiere peer-to-peer internet currency powered by{" "}
              <span className="text-primary font-semibold">CATS</span>
            </p>
          </div>

          {/* Content */}
          <div className="flex justify-center">
            {/* Statistics */}
            <div className="space-y-8 max-w-md">
              <div className="premium-card p-8">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-black text-primary mb-4 count-up" data-target="480">
                    <span className="inline-block animate-scale-bounce" style={{ animationDelay: '0.5s' }}>4</span>
                    <span className="inline-block animate-scale-bounce" style={{ animationDelay: '0.6s' }}>8</span>
                    <span className="inline-block animate-scale-bounce" style={{ animationDelay: '0.7s' }}>0</span>
                    <span className="inline-block animate-scale-bounce text-secondary" style={{ animationDelay: '0.8s' }}>M</span>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">
                    Cat owners worldwide
                  </p>
                  <div className="mt-4 text-3xl font-bold text-secondary">
                    <span className="inline-block animate-scale-bounce" style={{ animationDelay: '1s' }}>4</span>
                    <span className="inline-block animate-scale-bounce" style={{ animationDelay: '1.1s' }}>8</span>
                    <span className="inline-block animate-scale-bounce text-accent" style={{ animationDelay: '1.2s' }}>%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    of the pet market
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-lg p-6">
                <p className="text-lg text-center text-foreground">
                  Cats dominate the internet. <br />
                  <span className="text-primary font-semibold">
                    Now they dominate crypto too.
                  </span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;