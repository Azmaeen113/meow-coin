
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleVideoEnd = (video: HTMLVideoElement) => {
      video.currentTime = 0;
      video.play().catch(() => {
        // Autoplay failed, but that's okay
      });
    };

    const desktopVideo = desktopVideoRef.current;
    const mobileVideo = mobileVideoRef.current;

    if (desktopVideo) {
      desktopVideo.addEventListener('ended', () => handleVideoEnd(desktopVideo));
    }

    if (mobileVideo) {
      mobileVideo.addEventListener('ended', () => handleVideoEnd(mobileVideo));
    }

    return () => {
      if (desktopVideo) {
        desktopVideo.removeEventListener('ended', () => handleVideoEnd(desktopVideo));
      }
      if (mobileVideo) {
        mobileVideo.removeEventListener('ended', () => handleVideoEnd(mobileVideo));
      }
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Hero Video */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Desktop Video */}
        <video
          ref={desktopVideoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="hidden md:block w-full h-full object-cover object-center smooth-loop"
        >
          <source src="/Hero Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Mobile Video */}
        <video
          ref={mobileVideoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="block md:hidden w-full h-full object-cover object-center smooth-loop"
        >
          <source src="/Hero Video (online-video-cutter.com).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroSection;