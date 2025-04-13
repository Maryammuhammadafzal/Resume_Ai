"use client"
import FeaturesSection from "@/components/featuresSection";
import HeroSection from "@/components/heroSection";
import HowItWorksSection from "@/components/howItWorksSection";
import RankingSecion from "@/components/rankingSecion";


export default function Home() {
  return (
   <div className="grid-background">
      <HeroSection />
      <FeaturesSection/>
      <RankingSecion/>
      <HowItWorksSection/>
   </div>
  );
}
