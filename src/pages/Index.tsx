import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import ReviewsSection from "@/components/home/ReviewsSection";
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
      <ReviewsSection />
      <CTASection />
    </main>
    <Footer />
    <FloatingCallButton />
  </>
);

export default Index;
