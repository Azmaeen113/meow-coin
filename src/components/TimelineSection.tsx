import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const TimelineSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePoint, setActivePoint] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate timeline points sequentially
          const intervals = timelineData.map((_, index) => 
            setTimeout(() => setActivePoint(index), index * 800)
          );
          return () => intervals.forEach(clearTimeout);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const timelineData = [
    {
      year: "2013",
      title: "The Origins",
      description: "December 2013, two memecoins were created. Dogecoin for dogs. KittehCoin for cats.",
      links: [
        { name: "GitHub", url: "https://github.com/kittehcoin", icon: Github },
        { name: "Original Site", url: "https://web.archive.org/web/20151208172526/https://kittehcoin.info/", icon: ExternalLink }
      ],
      tweets: 1,
      theme: "origin"
    },
    {
      year: "2014",
      title: "The Rally",
      description: "A real community formed. Early crypto legends took notice, stating: 'I can't imagine #Kittehcoin not surpassing Doge in market'",
      links: [
        { name: "BitcoinTalk", url: "https://bitcointalk.org/index.php?topic=383068.0", icon: ExternalLink },
        { name: "Reddit", url: "https://reddit.com/r/kittehcoin", icon: ExternalLink }
      ],
      tweets: 2,
      theme: "rally"
    },
    {
      year: "2013-2024",
      title: "The Downfall",
      description: "DOGE's cult wasn't ready to share the spotlight. They FUDed hard. Liquidity dried. Devs vanished. For over a decade, cats ruled memes, but had no blue chip coin to call their own. Dogs had DOGE, SHIB, FLOKI... Cats had silence.",
      tweets: 0,
      theme: "downfall"
    },
    {
      year: "2025",
      title: "KittehCoin RETURNS",
      description: "KittehCoin ($MEOW) has been fully relaunched — with the same legendary ticker, the same 2013 roots, and a new mission to lead the cat memecoin revolution. No more niche cat coins. $MEOW is back to fix the imbalance — and take the throne.",
      tweets: 2,
      theme: "return"
    },
    {
      year: "∞",
      title: "THE BLOCKCHAIN IS MADE OF CATS",
      description: "Cats > Dogs = $MEOW > $DOGE",
      theme: "future"
    }
  ];

  const TweetImage = ({ index, theme, timelineIndex }: { index: number; theme: string; timelineIndex: number }) => {
    // Map timeline points to tweet images
    const getTweetImagePath = (timelineIndex: number, tweetIndex: number) => {
      if (timelineIndex === 0) return `/Tweet 1.png`; // Origins
      if (timelineIndex === 1) return tweetIndex === 1 ? `/Tweet 2.png` : `/Tweet 3.png`; // Rally
      if (timelineIndex === 3) return tweetIndex === 1 ? `/Tweet 4.png` : `/Tweet 5.png`; // Return
      return `/Tweet 1.png`; // fallback
    };

    const tweetImage = getTweetImagePath(timelineIndex, index);

    return (
      <img 
        src={tweetImage}
        alt={`Tweet ${index} from ${theme === 'rally' ? '2014' : '2025'}`}
        className={`w-full h-auto object-contain rounded-xl shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-primary/25 hover:shadow-3xl mb-4 max-w-sm md:max-w-none mx-auto md:mx-0 ${
          theme === 'downfall' ? 'opacity-50 grayscale' : ''
        }`}
      />
    );
  };

  return (
    <section 
      id="timeline"
      ref={sectionRef}
      className="py-8 md:py-20 px-4 md:px-6 bg-gradient-to-b from-background via-background-secondary to-background-tertiary relative overflow-hidden"
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        {/* Dark overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 prophecy-text">
            THE JOURNEY
          </h2>
          <p className="text-lg md:text-2xl text-muted-foreground/80">
            From 2013 inception to 2025 Revival
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Enhanced timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-black/50 via-muted/30 to-black/50 rounded-full">
            <div 
              className="timeline-line w-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full shadow-lg"
              style={{
                height: isVisible ? '100%' : '0%',
                transition: 'height 3s ease-out',
                boxShadow: '0 0 20px hsl(var(--primary) / 0.5), 0 0 40px hsl(var(--secondary) / 0.3)'
              }}
            />
          </div>

          {/* Timeline Points */}
          <div className="space-y-8 md:space-y-16">
            {timelineData.map((point, index) => {
              const isActive = activePoint >= index;
              const isLeft = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`relative transition-all duration-1000 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 200}ms`,
                    transform: isActive ? 'translateY(0)' : 'translateY(50px)'
                  }}
                >
                  {/* Enhanced timeline node */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 md:w-6 md:h-6 transform -translate-x-1/2 z-10">
                    <div className={`w-full h-full rounded-full border-2 md:border-4 transition-all duration-500 shadow-lg ${
                      point.theme === 'origin' ? 'bg-primary border-primary/70 shadow-primary/50' :
                      point.theme === 'rally' ? 'bg-secondary border-secondary/70 shadow-secondary/50' :
                      point.theme === 'downfall' ? 'bg-muted border-muted/70 shadow-muted/30' :
                      point.theme === 'return' ? 'bg-accent border-accent/70 shadow-accent/50' :
                      'bg-gradient-to-r from-primary to-secondary border-primary/70 shadow-primary/50'
                    } ${isActive ? 'scale-100' : 'scale-0'}`} 
                    style={{
                      boxShadow: isActive ? `0 0 20px currentColor, 0 0 40px currentColor` : 'none'
                    }} />
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} ml-12 md:ml-0`}>
                    <div className={`premium-card p-4 md:p-8 backdrop-blur-xl border-2 ${
                      point.theme === 'downfall' ? 'bg-gradient-to-br from-red-900/20 to-red-800/10 border-red-500/40 shadow-red-500/20' :
                      point.theme === 'future' ? 'bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10 border-primary/50 shadow-primary/30' :
                      point.theme === 'origin' ? 'bg-gradient-to-br from-primary/15 to-primary/5 border-primary/40 shadow-primary/20' :
                      point.theme === 'rally' ? 'bg-gradient-to-br from-secondary/15 to-secondary/5 border-secondary/40 shadow-secondary/20' :
                      point.theme === 'return' ? 'bg-gradient-to-br from-accent/15 to-accent/5 border-accent/40 shadow-accent/20' :
                      'bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30 shadow-primary/20'
                    }`}>
                      {/* Enhanced Year Badge */}
                      <div className={`inline-block px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold mb-3 md:mb-4 backdrop-blur-sm border ${
                        point.theme === 'origin' ? 'bg-primary/30 text-primary border-primary/50 shadow-primary/30' :
                        point.theme === 'rally' ? 'bg-secondary/30 text-secondary border-secondary/50 shadow-secondary/30' :
                        point.theme === 'downfall' ? 'bg-red-900/30 text-red-300 border-red-500/50 shadow-red-500/20' :
                        point.theme === 'return' ? 'bg-accent/30 text-accent border-accent/50 shadow-accent/30' :
                        'bg-gradient-to-r from-primary/30 to-secondary/30 text-primary border-primary/50 shadow-primary/30'
                      }`}>
                        {point.year}
                      </div>

                      {/* Enhanced Title */}
                      <h3 className={`text-xl md:text-2xl font-bold mb-3 md:mb-4 ${
                        point.theme === 'downfall' ? 'text-red-300' :
                        point.theme === 'future' ? 'prophecy-text' :
                        point.theme === 'origin' ? 'text-primary' :
                        point.theme === 'rally' ? 'text-secondary' :
                        point.theme === 'return' ? 'text-accent' :
                        'text-foreground'
                      }`}>
                        {point.title}
                      </h3>

                      {/* Enhanced Description */}
                      <p className={`text-sm md:text-base leading-relaxed mb-4 md:mb-6 ${
                        point.theme === 'downfall' ? 'text-red-200/80' : 
                        point.theme === 'future' ? 'text-foreground/90' :
                        'text-foreground/90'
                      }`}>
                        {point.description}
                      </p>

                      {/* Enhanced quote for rally */}
                      {point.theme === 'rally' && (
                        <div className="bg-gradient-to-br from-primary/20 to-secondary/10 border-2 border-primary/40 rounded-lg p-3 md:p-4 mb-4 md:mb-6 backdrop-blur-sm shadow-lg">
                          <p className="text-primary font-semibold italic text-sm md:text-base">
                            "I can't imagine #Kittehcoin not surpassing Doge in market"
                          </p>
                          <p className="text-xs text-muted-foreground/80 mt-1 md:mt-2">- Early crypto legend</p>
                        </div>
                      )}

                      {/* Enhanced future section */}
                      {point.theme === 'future' && (
                        <div className="text-center py-4 md:py-8 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-lg border border-primary/30 backdrop-blur-sm">
                          <p className="text-2xl md:text-4xl font-black prophecy-text">
                            Cats &gt; Dogs = $MEOW &gt; $DOGE
                          </p>
                        </div>
                      )}

                      {/* Tweet Images */}
                      {point.tweets && point.tweets > 0 && (
                        <div className="space-y-2 md:space-y-4 mb-4 md:mb-6">
                          {[...Array(point.tweets)].map((_, i) => (
                            <TweetImage 
                              key={i} 
                              index={i + 1} 
                              theme={point.theme || ''} 
                              timelineIndex={index}
                            />
                          ))}
                        </div>
                      )}

                      {/* Enhanced Links */}
                      {point.links && (
                        <div className="flex flex-wrap gap-2 md:gap-3">
                          {point.links.map((link, linkIndex) => (
                            <Button
                              key={linkIndex}
                              asChild
                              variant="outline"
                              size="sm"
                              className={`text-xs md:text-sm backdrop-blur-sm border-2 shadow-lg transition-all duration-300 hover:scale-105 ${
                                point.theme === 'origin' ? 'border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground shadow-primary/20' :
                                point.theme === 'rally' ? 'border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground shadow-secondary/20' :
                                point.theme === 'downfall' ? 'border-muted/50 text-muted-foreground hover:bg-muted hover:text-muted-foreground shadow-muted/10' :
                                point.theme === 'return' ? 'border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground shadow-accent/20' :
                                'border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground shadow-primary/20'
                              }`}
                            >
                              <a 
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 md:gap-2"
                              >
                                <link.icon className="w-3 h-3 md:w-4 md:h-4" />
                                {link.name}
                              </a>
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;