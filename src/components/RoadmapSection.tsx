import { useEffect, useRef, useState } from "react";

const RoadmapSection = () => {
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

  const timelineItems = [
    {
      year: "2013",
      title: "The Origins",
      description: "December 2013, two memecoins were created. Dogecoin for dogs. KittehCoin for cats.",
      links: [
        { text: "GitHub", url: "https://github.com/kittehcoin" },
        { text: "Original site", url: "https://web.archive.org/web/20151208172526/https://kittehcoin.info/" }
      ],
      status: "completed"
    },
    {
      year: "2014",
      title: "The Rally",
      description: "A real community formed. Early crypto legends took notice, stating: 'I can't imagine #Kittehcoin not surpassing Doge in market'",
      links: [
        { text: "BitcoinTalk", url: "bitcointalk.org/index.php?topic=383068.0" },
        { text: "Reddit", url: "https://reddit.com/r/kittehcoin" }
      ],
      status: "completed"
    },
    {
      year: "2015-2024",
      title: "The Downfall",
      description: "DOGE's cult wasn't ready to share the spotlight. They FUDed hard. Liquidity dried. Devs vanished. For over a decade, cats ruled memes, but had no blue chip coin to call their own. Dogs had DOGE, SHIB, FLOKI... Cats had silence.",
      links: [],
      status: "completed"
    },
    {
      year: "2025",
      title: "KittehCoin RETURNS",
      description: "KittehCoin ($MEOW) has been fully relaunched — with the same legendary ticker, the same 2013 roots, and a new mission to lead the cat memecoin revolution. No more niche cat coins. $MEOW is back to fix the imbalance — and take the throne.",
      links: [],
      status: "active"
    },
    {
      year: "Future",
      title: "THE BLOCKCHAIN IS MADE OF CATS",
      description: "Cats > Dogs = $MEOW > $DOGE",
      links: [],
      status: "future"
    }
  ];

  return (
    <section 
      id="roadmap"
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-b from-background to-background-secondary"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">The </span>
            <span className="text-primary">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From 2013 inception to 2025 Revival
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-0.5" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center transition-all duration-1000 delay-${index * 200} ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-10"
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform md:-translate-x-1/2 border-2 z-10 ${
                  item.status === 'active' 
                    ? 'bg-primary border-primary' 
                    : item.status === 'completed'
                    ? 'bg-secondary border-secondary'
                    : 'bg-muted border-muted'
                }`} />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'
                }`}>
                  <div className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-2xl font-black ${
                        item.status === 'active' ? 'text-primary' : 'text-secondary'
                      }`}>
                        {item.year}
                      </span>
                      {item.status === 'active' && (
                        <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                          CURRENT
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.links.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary text-sm underline transition-colors"
                          >
                            {link.text}
                          </a>
                        ))}
                      </div>
                    )}

                    {/* Tweet placeholders for rally section */}
                    {item.title === "The Rally" && (
                      <div className="mt-4 space-y-2">
                        {[...Array(2)].map((_, i) => (
                          <div
                            key={i}
                            className="bg-muted/30 border border-primary/10 rounded p-3"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-6 h-6 bg-primary/50 rounded-full" />
                              <span className="text-xs text-muted-foreground">
                                Tweet placeholder {i + 1}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              "Early crypto community support for KittehCoin..."
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;