
const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Hero Video */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Desktop Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block w-full h-full object-cover object-center smooth-loop"
        >
          <source src="/Hero Video.mp4" type="video/mp4" />
        </video>
        
        {/* Mobile Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="block md:hidden w-full h-full object-cover object-center smooth-loop"
        >
          <source src="/Hero Video (online-video-cutter.com).mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default HeroSection;