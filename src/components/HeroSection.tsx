
const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Hero Banner Image */}
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src="/HeroBanner.png"
          alt="KittehCoin Hero Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;