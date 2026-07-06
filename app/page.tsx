import HeroSection from "@/components/home/HeroSection";
import IntroStrip from "@/components/home/IntroStrip";
import AboutPreview from "@/components/home/AboutPreview";
import TreatmentCategories from "@/components/home/TreatmentCategories";
import DoctorPreview from "@/components/home/DoctorPreview";
import StatsSection from "@/components/home/StatsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import InstagramPreview from "@/components/home/InstagramPreview";
import FAQSection from "@/components/home/FAQSection";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroStrip />
      <AboutPreview />
      <TreatmentCategories />
      <DoctorPreview />
      <StatsSection />
      <WhyChooseUs />
      <Testimonials />
      <InstagramPreview />
      <FAQSection />
      <CTABanner />
    </>
  );
}
