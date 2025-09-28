
const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-bottom"
        >
          <source src="/Header_Video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Hero image with effects */}
      <div className="relative w-full h-full flex items-center justify-center z-10">
        {/* Title and Subtitle Overlay */}
        <div className="absolute top-20 left-0 right-0 z-30 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-black mb-2">
            <span className="text-white">KITTEH</span>
            <span className="text-orange-500">COIN</span>
          </h1>
          <p className="text-xl md:text-2xl text-white font-light">
            your mom's favorite cat coin
          </p>
        </div>

        {/* Desktop Hero Image */}
        <img
          src="/hero cat transparent.png"
          alt="KittehCoin Hero Cat - The internet is made of cats, now the blockchain is too"
          className="hidden md:block w-full h-full object-contain hero-popup"
        />
        {/* Mobile Hero Image */}
        <div className="block md:hidden w-full h-full mobile-hero-container">
          <img
            src="/hero cat transparent.png"
            alt="KittehCoin Hero Cat - The internet is made of cats, now the blockchain is too"
            className="w-full h-full object-contain hero-popup"
          />
        </div>
        
        {/* Hero Lettering - Front Layer */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <img
            src="/hero lettering transparent.png"
            alt="KittehCoin Hero Lettering"
            className="w-full h-full object-contain hero-lettering-animation"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;