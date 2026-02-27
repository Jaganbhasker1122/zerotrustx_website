import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import ProblemSection from "@/components/ProblemSection";
import IdeaSection from "@/components/IdeaSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import CollaborationSection from "@/components/CollaborationSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResearchSection from "@/components/ResearchSection";

const Index = () => (
  <>
    <CustomCursor />
    <ScrollProgress />
    <Navbar />
    <HeroSection />
    <MarqueeStrip />
    <ProblemSection />
    <IdeaSection />
    <ArchitectureSection />
    <ResearchSection />
    <CollaborationSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </>
);

export default Index;
