"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import BannerImage from "../public/hero_image.png"
import Image from "next/image";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPostion = window.scrollY;
      const scrollThreshold = 100;

      
      if (scrollPostion > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll" , handleScroll)
  }, []);

  return (
    <section className="w-full pt-36 md:pt-38 space-y-8 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold gradient-title">
            You Ai Career Coach for
            <br />
            <span>Profession Success</span>
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground lg:text-xl">
            Advance Your Career with personalized guidance , interview prep, and
            Ai-Powered tools for job success
          </p>
        </div>
        <div className="flex justify-center space-x-4">
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

      <div className="hero-image-wrapper mt-5 md:mt-0 ">
        <div ref={imageRef} className="hero-image relative">
          <Image
            src={BannerImage}
            alt={"Hero Image"}
            width={1280}
            // height={380}
            className={`rounded-2xl h-[650px] shadow-xl border mx-auto`}
            priority
          />
          <div className="bg-[rgba(0, 21, 9, 0.9)] opacity-25 absolute top-0 left-0"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
