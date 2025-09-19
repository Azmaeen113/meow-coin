import heroBanner from "@/assets/hero-banner.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Hero image with effects */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Desktop Hero Image */}
        <img
          src={heroBanner}
          alt="KittehCoin Hero - The internet is made of cats, now the blockchain is too"
          className="hidden md:block w-full h-full object-cover hero-float cat-hover"
        />
        {/* Mobile Hero Image */}
        <div className="block md:hidden w-full h-full mobile-hero-container">
          <img
            src="/mobile phone hero section image.png"
            alt="KittehCoin Hero - The internet is made of cats, now the blockchain is too"
            className="w-full h-full object-contain hero-float cat-hover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;