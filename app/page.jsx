"use client"
import CTASection from "@/components/ctaSection";
import FaqSection from "@/components/faqSection";
import FeaturesSection from "@/components/featuresSection";
import HeroSection from "@/components/heroSection";
import HowItWorksSection from "@/components/howItWorksSection";
import RankingSecion from "@/components/rankingSecion";
import Testimonial from "@/components/testimonial";


export default function Home() {
  return (
   <div className="grid-background">
      <HeroSection />
      <FeaturesSection/>
      <RankingSecion/>
      <HowItWorksSection/>
      <Testimonial/>
      <FaqSection/>
      <CTASection/>
   </div>
  );
}
