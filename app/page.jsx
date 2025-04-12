"use client"
import FeaturesSection from "@/components/featuresSection";
import HeroSection from "@/components/heroSection";


export default function Home() {
  return (
   <div className="grid-background">
      <HeroSection />
      <FeaturesSection/>
   </div>
  );
}
