import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MemeSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Meme images from public folder
  const memeImages = [
    "/Meme 1.PNG",
    "/Meme 2.PNG", 
    "/Meme 3.PNG",
    "/Meme 4.JPG",
    "/Meme 5.PNG",
    "/Meme 6.PNG",
    "/Meme 7.PNG",
    "/Meme 8.PNG",
    "/Meme 9.PNG"
  ];

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

  // Auto-advance slideshow
  useEffect(() => {
    if (isVisible) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % memeImages.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible, memeImages.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + memeImages.length) % memeImages.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % memeImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      id="memes"
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-b from-background-secondary via-background to-background-tertiary relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-secondary/30 via-background to-background-tertiary/30" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 prophecy-text">
            MEOW MEMES
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            The internet's finest cat content
          </p>
        </div>

        {/* iPhone Mockup with Slideshow */}
        <div 
          className={`transition-all duration-1000 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex justify-center">
            {/* iPhone Mockup */}
            <div className="relative">
              {/* iPhone Frame */}
              <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                {/* Screen */}
                <div className="relative bg-black rounded-[2.5rem] overflow-hidden" style={{ width: '320px', height: '640px' }}>
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-black flex justify-between items-center px-6 text-white text-xs z-20">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 border border-white rounded-sm">
                        <div className="w-full h-full bg-white rounded-sm"></div>
                      </div>
                      <div className="flex gap-0.5">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Meme Image Display */}
                  <div className="absolute inset-0 pt-8 pb-16">
                    <img
                      src={memeImages[currentSlide]}
                      alt={`Cat meme ${currentSlide + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Navigation Controls */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                    <button
                      onClick={goToPrevious}
                      className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
                      aria-label="Previous meme"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={goToNext}
                      className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
                      aria-label="Next meme"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Slide Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm z-20">
                    {currentSlide + 1}/{memeImages.length}
                  </div>
                </div>
                
                {/* Home Indicator */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemeSection;
