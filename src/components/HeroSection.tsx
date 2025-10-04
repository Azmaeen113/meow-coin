
const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Hero Images */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Desktop Image */}
        <img
          src="/HeroBanner.png"
          alt="KittehCoin Desktop Hero"
          className="hidden md:block w-full h-full object-cover object-center"
        />
        
        {/* Mobile Image */}
        <img
          src="/mobile screen hero banner.webp"
          alt="KittehCoin Mobile Hero"
          className="block md:hidden w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default HeroSection;