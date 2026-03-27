import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import ProjectGallery from "@/components/home/ProjectGallery";
import ReviewsSection from "@/components/home/ReviewsSection";
import FAQSection from "@/components/home/FAQSection";
import TeamSection from "@/components/home/TeamSection";
import CTASection from "@/components/home/CTASection";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <WhyChooseUs />
      <HowItWorks />
      <ProjectGallery />
      <ReviewsSection />
      <FAQSection />
      <TeamSection />
      <CTASection />
    </main>
    <Footer />
    <FloatingCallButton />
    <FloatingWhatsAppButton />
  </>
);

export default Index;
