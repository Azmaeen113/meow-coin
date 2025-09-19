import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TitleSection from "@/components/TitleSection";
import LogoSection from "@/components/LogoSection";
import AboutSection from "@/components/AboutSection";
import MemeSection from "@/components/MemeSection";
import ProphecySection from "@/components/ProphecySection";
import TimelineSection from "@/components/TimelineSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TitleSection />
      <LogoSection />
      <AboutSection />
      <MemeSection />
      <ProphecySection />
      <TimelineSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
