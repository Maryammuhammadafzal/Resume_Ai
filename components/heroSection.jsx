import { Link } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div>
        <div>
          <h1>
            You Ai Career Coach for
            <br />
            <span>Profession Success</span>
          </h1>
          <p>
            Advance Your Career with personalized guidance , interview prep, and
            Ai-Powered tools for job success
          </p>
        </div>
        <div>
          <Link href={"/dashboard"}>
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href={"/website"}>
            <Button size="lg" className="px-8" variant="outline">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
