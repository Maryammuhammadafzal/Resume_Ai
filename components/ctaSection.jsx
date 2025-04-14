import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const CTASection = () => {
  return (
    <section className="w-full">
      <div className="mx-auto py-6 bg-gradient-to-b from-gray-400 via-gray-200 to-gray-300 rounded-lg">
        <div className="flex flex-col items-center justify-center space-y-4 text-cent max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 tracking-trighter text-primary-foreground sm:text-4xl md:text-5xl">
            Ready to Accelerate Your Carrer
          </h2>
          <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
            Join thousand of professionals who advance their carriers with
            Ai-Powered guidance.
          </p>
        <Link href={"/dashboard"} passHref>
          <Button
            size={"lg"}
            variant={"primary"}
            className={`h-11 mt-5 animate-bounce`}
          >
            Start Your Journey Today <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
